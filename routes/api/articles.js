/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');
const {
  getDocument, createDocument, updateDocument, deleteDocument
} = require('../../controllers');

const articlesRouter = express.Router();

articlesRouter.get('/', (_req, res) => {
  res.json([
    'article1',
    'article2',
    'article3',
  ]);
});

articlesRouter.get('/:slug', async (req, res) => {
  await getDocument('articles', req.params.slug);
  res.json(`article ${req.params.slug}`);
});

articlesRouter.post('/create', async (req, res) => {
  await createDocument('articles', req.body);
  res.json('create a article');
});

articlesRouter.put('/update/:id', async (req, res) => {
  await updateDocument('articles', req.params.id, req.body);
  res.json(`delete article ${req.params.id}`);
});

articlesRouter.delete('/delete/:id', async (req, res) => {
  await deleteDocument('articles', req.params.id);
  res.json(`delete article ${req.params.id}`);
});

module.exports = articlesRouter;
