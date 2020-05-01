const functions = require('firebase-functions');
const app = require('express')();
const cors = require('cors');
const auth = require('./util/auth');

// Automatically allow cross-origin requests
app.use(cors({ origin: true }));

const {
    loginUser, signUpUser, getUserDetail
} = require('./APIs/users')
app.post('/login',loginUser);
app.post('/signup', signUpUser);
app.get('/user',auth, getUserDetail);


const {
    getAllAticles, createArticle, updateArticle, deleteArticle, showArticle
} = require('./APIs/articles');

app.get('/articles', getAllAticles);
app.get('/article/:articleId', showArticle);
app.post('/article' , auth, createArticle);
app.put('/article/:articleId', auth , updateArticle);
app.delete('/article/:articleId', auth , deleteArticle);

exports.api = functions.https.onRequest(app);

