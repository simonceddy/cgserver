/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');
const {
  getDocument, createDocument, updateDocument, deleteDocument
} = require('../../controllers');

const pageRouter = express.Router();

pageRouter.get('/', (_req, res) => {
  res.json([
    'page1',
    'page2',
    'page3',
  ]);
});

pageRouter.get('/:slug', async (req, res) => {
  await getDocument('pages', req.params.slug);
  res.json(`page ${req.params.slug}`);
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
