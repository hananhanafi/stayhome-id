const {db} = require('../util/admin');

exports.getAllAticles = (request, response) => {
    db
    .collection('articles')
    .orderBy('createdAt','desc')
    .get()
    .then((data)=>{
        let articles = [];

        data.forEach((doc)=>{
            articles.push({
                articleId : doc.id,
                title : doc.data().title,
                body : doc.data().body,
                createdAt : doc.data().createdAt
            })
        })
        return response.json(articles)
    })
    .catch((err)=>{
        console.log(err);
        return response.status(500).json({
            error : err.code
        })

    })

};

exports.createArticle = (request, response) => {
    if (request.body.body == '' || request.body.body == undefined ) {
		return response.status(400).json({ body: 'Must not be empty' });
    }
    
    if(request.body.title == '' || request.body.title == undefined ) {
        return response.status(400).json({ title: 'Must not be empty' });
    }

    const newArticleItem = {
        title : request.body.title,
        body : request.body.body,
        createdAt : new Date().toISOString(),
        username : request.user.username
    }

    db
    .collection('articles')
    .add(newArticleItem)
    .then((doc)=>{
        const responseArticleItem = newArticleItem;
        responseArticleItem.id = doc.id;
        return response.json(responseArticleItem);
    })
    .catch((err)=>{
        response.status(500).json({
            error : 'Something went wrong'
        })
    })
};

exports.updateArticle = (request, response) => {
    if(request.body.articleId || request.body.createdAt){
        response.status(403).json({message: 'Not allowed to edit'});
    }

    let document = db.collection('articles').doc(`${request.params.articleId}`);
    document.update(request.body)
    .then(()=>{
        return response.json({
            message : "update successfully"
        })
    })
    .catch((err)=>{
        console.error(err);
        return response.status(500).json({
            error : err.code
        })
    })

};

exports.deleteArticle = (request, response) => {
    const document = db.doc(`/articles/${request.params.articleId}`);
    document.get()
    .then((doc)=>{
        if(!doc.exists){
            return response.status(404).json({
                error : 'article not found'
            })
        }
        return document.delete();
    })
    .then(() => {
        response.json({ message: 'Delete successfull' });
    })
    .catch((err) => {
        console.error(err);
        return response.status(500).json({ error: err.code });
    });
};

exports.showArticle = (request, response) => {
    const document = db.doc(`/articles/${request.params.articleId}`);
    document
        .get()
        .then((doc) => {

            if (!doc.exists) {
                return response.status(404).json({ error: 'article not found' })
            }
            return response.json(doc.data());
        })
        .catch((err) => {
            console.error(err);
            return response.status(500).json({ error: err.code });
        });
};