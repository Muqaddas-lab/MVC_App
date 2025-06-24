function renderBooks(res, books) {
  res.json({
    status: 'success',
    data: books
  });
}

function renderError(res, code, message) {
  res.status(code).json({
    status: 'error',
    message
  });
}

module.exports = { renderBooks, renderError };
