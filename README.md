# MainStreet API POC Documentation #
This project is created as a part of POC for address API. Inside its using Realtor to get the addresses.

The POC is into Node.Js. Codebase is available at https://github.com/priyanka-neetable/MainStreetPOC


Step 1: Install node modules with `npm install`

Step 2: Run `npm start`

Step 3: Run http://localhost:8080/search/getbyaddress?city=london&statecode=KY&postalcode=40741

Note: At the moment the API gives all the fields which realtor returns for more study. We can always filter and give only required fields and customized JSON.

# Example #
#### Request:

HTTP Method : [Get]

Url: http://localhost:8080/search/getbyaddress?city=london&statecode=KY&postalcode=40741

#### Response:

Click link to see the response fields https://github.com/priyanka-neetable/MainStreetPOC/blob/main/response.json