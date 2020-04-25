const functions = require('firebase-functions');
const app = require('express')();


const {
    getAllAticles, createArticle, updateArticle, deleteArticle, showArticle
} = require('./APIs/articles');

app.get('/articles', getAllAticles);
app.post('/article' , createArticle);
app.put('/article/:articleId' , updateArticle);
app.delete('/article/:articleId' , deleteArticle);
app.get('/article/:articleId', showArticle);

exports.api = functions.https.onRequest(app);

