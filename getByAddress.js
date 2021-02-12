const request = require('request');
const url = require('url');

module.exports = async (req,res) => {
    const queryObject = url.parse(req.url,true).query;
    const options = {
      method: "GET",
      url: "https://realtor.p.rapidapi.com/properties/list-for-sale",
      qs: {
        city: queryObject.city,
        state_code: queryObject.statecode,
        postal_code: queryObject.postalcode,
        offset: "0",
        limit: "50",
        sort: "relevance",
      },
      headers: {
        "x-rapidapi-key": "fd308f1331msh4cd81567ecf771dp114ca6jsn9d9ca5e515d6",
        "x-rapidapi-host": "realtor.p.rapidapi.com",
        useQueryString: true,
      },
    };

  request(options, function (error, response, body) {
      if (error) res.status(500).json({ error: error });
      console.log(body);
      var body = JSON.parse(body);
      res.status(200).json({ body: body.listings ? body.listings : [] });
  });
};
