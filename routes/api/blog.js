/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');
const {
  createDocument, deleteDocument, updateDocument,
} = require('../../controllers');
const { BlogPost } = require('../../database/models');

const blogRouter = express.Router();

blogRouter.get('/', async (_req, res) => {
  const posts = await BlogPost.findAll();
  res.json(posts);
});

blogRouter.get('/:slug', async (req, res) => {
  const post = await BlogPost.findOne({ where: { slug: req.params.slug } });
  if (post === null) {
    res.status(404).json({ message: 'Not Found' });
  } else res.json(post);
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
