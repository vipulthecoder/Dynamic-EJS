
function list(request, response) {  

  var customers = pjs.query("SELECT customerName FROM customers");
  
  response.render("list.ejs", { customers });

}

exports.run = list;
