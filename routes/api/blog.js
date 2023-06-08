const express = require('express');
const { kebabCase } = require('lodash');
const { BlogPost } = require('../../database/models');

/**
 * Blog Router
 * @description
 * GET - / - get all blog posts
 *
 * GET - /id/:id - get blog post by id
 *
 * GET - /:slug - get blog post by slug
 *
 * POST - /create - create a blog post
 *
 * PUT - /update/:id - update a blog post by id
 *
 * DELETE - /delete/:id - delete blog post by id
 */
const blogRouter = express.Router();

blogRouter.get('/', async (_req, res) => {
  const posts = await BlogPost.findAll();
  res.json(posts);
});

blogRouter.get('/id/:id', async (req, res) => {
  const post = await BlogPost.findOne({ where: { id: req.params.id } });
  if (post === null) {
    res.status(404).json({ message: 'Not Found' });
  } else res.json(post);
});

blogRouter.get('/:slug', async (req, res) => {
  const post = await BlogPost.findOne({ where: { slug: req.params.slug } });
  if (post === null) {
    res.status(404).json({ message: 'Not Found' });
  } else res.json(post);
});

blogRouter.post('/create', async (req, res) => {
  // TODO validate body
  if (!req.body.title || req.body.title.length === 0) {
    return res.json({
      message: 'Title is required.',
      success: false
    });
  }
  const post = await BlogPost.create({
    title: req.body.title,
    body: req.body.body,
    date: req.body.date || new Date(),
    slug: kebabCase(req.body.title.trim())
  });
  return res.json({ post, success: true });
});

blogRouter.put('/update/:id', async (req, res) => {
  // TODO update slug if title is updated
  // TODO validate body
  const result = await BlogPost.update({
    ...req.body
  }, { where: { id: req.params.id } });
  if (!result) {
    res.json({ success: false, message: 'an error occurred' });
  } else res.json({ success: true, result });
});

blogRouter.delete('/delete/:id', async (req, res) => {
  const result = await BlogPost.destroy({ where: { id: req.params.id } });
  if (!result) {
    res.json({ success: false, message: 'an error occurred' });
  } else res.json({ success: true, result });
});

module.exports = blogRouter;
