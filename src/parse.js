var $ = require('jquery');



const Parse = {
  server: "http://127.0.0.1:3000",
  create: ({name, description}, successCB, errCB = null) => {
    $.ajax(Parse.server, {
      type: 'POST',
      data: JSON.stringify({name, description}),
      contentType: 'application/json',
      success: successCB,
      error: errCB
    })
  },

  readAll: (successCB, errCB = null) => {
    $.ajax(Parse.server, {
      type: 'GET',
      contentType: 'application/json',
      success: successCB,
      error: errCB
    })
  }
}

module.exports = { Parse };