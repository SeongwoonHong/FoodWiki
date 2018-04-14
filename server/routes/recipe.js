const router = require('express').Router();
const axios = require('axios');

const apiKey = 'f7be1877bf7dd6fab26064dd3d5a2ef3';

const apiEndPoint = (isSearch, term) => {
  return `http://food2fork.com/api/${isSearch ? 'search' : 'get'}?key=${apiKey}&q=${term}`
};

router.get('/search/:term', async (req, res) => {
  axios.get(apiEndPoint(true, req.params.term)).then(response => {
    res.send(response.data);
  });
});

router.get('/get/:id', (req, res) => {
  axios.get(apiEndPoint(false, req.params.id)).then(response => {
    res.send(response.data);
  });
});

module.exports = router;
