const router = require('express').Router();
const axios = require('axios');

router.post('/', async (req, res) => {
  let cbcUrl = 'https://newsapi.org/v2/everything?';
  const cbcApiKey = '71c58369a2024ef69fa7c0fec1aa2fe1';
  const keyword = req.body.keyword;
  const source = 'buzzfeed';
  cbcUrl += `sources=${source}&q=${keyword}&apiKey=${cbcApiKey}&language=en`;
  try {
    const data = await axios.get(cbcUrl);
    return res.json(data.data);
  } catch(e) {
    return res.status(404).json(e);
  }
});

module.exports = router;
