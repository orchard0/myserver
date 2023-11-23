// Bismillah ar-Rahman ar-Raheem

const express = require('express');
const { getApiEndpoints, getTopics } = require('./app.controller');
const {
	handleCustomErrors,
	handlePostgreErrors,
	handleServerErrors,
} = require('./errors');
const {
	getArticleById,
	getArticles,
	getCommentsByArticleId,
	postCommentOnArticle,
	updateArticle,
} = require('./articles.controller');

const app = express();
app.use(express.json());

app.get('/api', getApiEndpoints);
app.get('/api/topics', getTopics);
app.get('/api/articles/:article_id/comments', getCommentsByArticleId);
app.get('/api/articles/:article_id', getArticleById);
app.get('/api/articles', getArticles);
app.post('/api/articles/:article_id/comments', postCommentOnArticle);
app.patch('/api/articles/:article_id', updateArticle);

app.use(handlePostgreErrors);
app.use(handleCustomErrors);
app.use(handleServerErrors);

module.exports = app;
