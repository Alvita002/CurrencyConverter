const express = require('express');
const cors = require('cors');
const app = express();
const parseString = require("xml2js").parseString;
const apiCallFromRequest = require("./Request");

app.use(cors());

app.get('/select-list', (req, res)=> {
  apiCallFromRequest.callApi(function (apiResult) {
    parseString(apiResult, function (err, result) {
      let selectList = [];
      selectList.push({
        Ccy: "EUR",
        Amt: 1
      })
      result.FxRates.FxRate.forEach(rate => {
        selectList.push(rate.CcyAmt[1])
      })
      res.send(selectList);
    });
  });
});

app.listen(8081, () => {
  console.log("Server listening on port 8081");
});