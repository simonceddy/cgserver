const express = require('express');
const {
  createDocument, updateDocument, deleteDocument
} = require('../../controllers');
const { Page } = require('../../database/models');

const pageRouter = express.Router();

pageRouter.get('/', async (_req, res) => {
  const pages = await Page.findAll();
  res.json(pages);
});

pageRouter.get('/:slug', async (req, res) => {
  const page = await Page.findOne({ where: { slug: req.params.slug } });
  // console.log(page);
  if (page === null) {
    res.status(404).json({ message: 'Not Found' });
  } else res.json(page);
});

pageRouter.post('/create', async (req, res) => {
  await createDocument('pages', req.body);
  res.json('create a page');
});

pageRouter.put('/update/:id', async (req, res) => {
  await updateDocument('pages', req.params.id, req.body);
  res.json(`delete page ${req.params.id}`);
});

pageRouter.delete('/delete/:id', async (req, res) => {
  await deleteDocument('pages', req.params.id);
  res.json(`delete page ${req.params.id}`);
});

module.exports = pageRouter;
