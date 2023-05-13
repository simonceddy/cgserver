/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');
const {
  createDocument, deleteDocument, updateDocument, getDocument
} = require('../../controllers');

const blogRouter = express.Router();

blogRouter.get('/', (_req, res) => {
  res.json([
    'blog1',
    'blog2',
    'blog3',
  ]);
});

blogRouter.get('/:slug', async (req, res) => {
  await getDocument('blog', req.params.slug);
  res.json(`Blog post ${req.params.slug}`);
});

blogRouter.post('/create', async (req, res) => {
  await createDocument('blog', req.body);
  res.json('create a blog post');
});

blogRouter.put('/update/:id', async (req, res) => {
  await updateDocument('blog', req.params.id, req.body);
  res.json(`delete blog post ${req.params.id}`);
});

blogRouter.delete('/delete/:id', async (req, res) => {
  await deleteDocument('blog', req.params.id);
  res.json(`delete blog post ${req.params.id}`);
});

module.exports = blogRouter;
