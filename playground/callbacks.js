function getTempCallback(location, callback) {

  // Success
  callback(null, "temperature...");

  // Failure
  callback("Error message");
}

getTempCallback("Copenhagen", function(err, temp) {

  if (err) return console.log(err);

  return temp;
});
