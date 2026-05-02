function skillsmember(name, age, skill) {
    this.name = name;
    this.age = age;
    this.skill = skill;
}

skillsmember.prototype.display = function() {
    console.log("Name: " + this.name);
    console.log("Age: " + this.age);
    console.log("Skill: " + this.skill);
};

var member1 = new skillsmember("Alice", 30, "JavaScript");
var member2 = new skillsmember("Bob", 25, "Python");

member1.display();
member2.display();