function getTemp(location) {
  return new Promise(function(resolve, reject) {

    // Success
    resolve("Temperature...");

    // Failure
    reject("Error message");
    
  });
}

getTemp("Copenhagen").then(function(temp) {
  console.log(temp);
}, function(err) {
  console.log(err);
});
