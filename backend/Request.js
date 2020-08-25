const request = require("request");

_EXTERNAL_URL =
  "https://www.lb.lt/webservices/FxRates/FxRates.asmx/getCurrentFxRates?tp=LT";

const callExternalApiUsingRequest = (callback) => {
  request(_EXTERNAL_URL,  (err, res, body) => {
    if (err) {
      return callback(err);
    }
    return callback(body);
  });
};

module.exports.callApi = callExternalApiUsingRequest;
