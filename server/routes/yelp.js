const router = require('express').Router();
const axios = require('axios');

const yelpApi = 'https://api.yelp.com/v3/businesses/search';
const yelpApiKey = 'BqPj5udquNHHVWamBDJFuzguSZPmMxACorv7NqYWz4WVpsxsw1QFu-b06Txb6xGjG2hemRE5beTVcN-GdPVwu6vZ6zGENAybB46_5lUFANw4Dy0wbj7oV4qghtxiWnYx';

router.post('/', async (req, res) => {
  const term = req.body.term;
  const location = req.body.location || 'toronto';
  console.log('location = ', location);
  try {
    const data = await axios.get(`${yelpApi}?term=${term}&location=${location}`, {
      headers: {
        'Authorization': `Bearer ${yelpApiKey}`
      }
    });
    return res.json(data.data);
  } catch (e) {
    return res.status(404).send(e);
  }
});

module.exports = router;
