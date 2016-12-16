function addPromise(n1, n2) {
  return new Promise(function(resolve, reject) {
    if (typeof (n1 + n2) === "number") {
      resolve(n1 + n2);
    } else {
      reject("Not a number");
    }
  });
}

addPromise(1, 2).then(function(sum) {
  console.log("Sum is", sum);
}, function(err) {
  console.log(err);
});

addPromise(1, "a").then(function(sum) {
  console.log("Sum is", sum);
}, function(err) {
  console.log(err);
});

//

const add = (...n) => {
  const ns = n.filter(n => typeof n === "number");
  return ns.reduce((i, n) => i + n);
}

console.log(add(1,2,3,"4",5)); // 11
console.log(add(1,2,3,4,"5",6)); // 16
