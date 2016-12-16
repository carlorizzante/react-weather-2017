const people = ["Jon", "Janet", "Drake"];
people.name = "Kelly";

const jon = {
  name: "Jon",
  say: function() {
    console.log("1.", this);
    people.forEach(function(name) {
      console.log(`${this.name} says ${name}.`);
    });
  },
  say2: () => {
    console.log("2.", this);
    people.forEach(function(name) {
      console.log(`2. ${this.name} says ${name}.`);
    });
  },
  say3: function() {
    console.log("3.", this);
    people.forEach(name => console.log(`3. ${this.name} says ${name}.`));
  },
  say4: () => {
    console.log("4.", this);
    people.forEach(name => console.log(`4. ${this.name} says ${name}.`));
  }
}

jon.say();
jon.say2();
jon.say3();
jon.say4();

console.log("people.name", people.name);
