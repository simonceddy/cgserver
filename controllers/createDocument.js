async function createDocument(table, vals = {}) {
  console.log(`Create document in ${table} with values ${JSON.stringify(vals)}`);
}

module.exports = createDocument;
