const router = require('express').Router();
const axios = require('axios');

router.post('/', async (req, res) => {
  const { term } = req.body;
  const youtubeApiKey = 'AIzaSyCX_7Y-A7jKRWWM0bYCjzQfHV1K8L8a6MI';
  let youtubeUrl = 'https://www.googleapis.com/youtube/v3/search?';
  youtubeUrl += `key=${youtubeApiKey}&q=${term}&part=snippet`;
  try {
    let data = await axios.get(youtubeUrl);
    return res.json(data.data);
  } catch(e) {
    return res.status(404).json(e);
  }
});

module.exports = router;
