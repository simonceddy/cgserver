const express = require('express');
const { kebabCase } = require('lodash');
const { Page } = require('../../database/models');

/**
 * Page Router
 * @description
 * GET - / - get all pages
 * GET - /id/:id - get page by id
 * GET - /:slug - get page by slug
 * POST - /create - create a page
 * PUT - /update/:id - update a page by id
 * DELETE - /delete/:id - delete page by id
 */
const pageRouter = express.Router();

pageRouter.get('/', async (_req, res) => {
  const pages = await Page.findAll();
  res.json(pages);
});

pageRouter.get('/id/:id', async (req, res) => {
  const post = await Page.findOne({ where: { id: req.params.id } });
  if (post === null) {
    res.status(404).json({ message: 'Not Found' });
  } else res.json(post);
});

pageRouter.get('/:slug', async (req, res) => {
  const page = await Page.findOne({ where: { slug: req.params.slug } });
  // console.log(page);
  if (page === null) {
    res.status(404).json({ message: 'Not Found' });
  } else res.json(page);
});

pageRouter.post('/create', async (req, res) => {
  // TODO validate body
  if (!req.body.title || req.body.title.length === 0) {
    return res.json({
      message: 'Title is required.',
      success: false
    });
  }
  const post = await Page.create({
    title: req.body.title,
    body: req.body.body,
    slug: kebabCase(req.body.title.trim())
  });
  return res.json({ post, success: true });
});

pageRouter.put('/update/:id', async (req, res) => {
  // TODO update slug if title is updated
  // TODO validate body
  const result = await Page.update({
    ...req.body
  }, { where: { id: req.params.id } });
  if (!result) {
    res.json({ success: false, message: 'an error occurred' });
  } else res.json({ success: true, result });
});

pageRouter.delete('/delete/:id', async (req, res) => {
  const result = await Page.destroy({ where: { id: req.params.id } });
  if (!result) {
    res.json({ success: false, message: 'an error occurred' });
  } else res.json({ success: true, result });
});

module.exports = pageRouter;
