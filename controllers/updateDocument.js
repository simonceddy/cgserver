async function updateDocument(table, id, vals = {}) {
  console.log(`update document ${id} in ${table} with values ${JSON.stringify(vals)}`);
}

module.exports = updateDocument;
