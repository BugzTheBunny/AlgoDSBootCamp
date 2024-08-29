let user = {
    age: 25,
    name: "Liz",
    skill: "Math",
    magic: function () {
        console.log("FIRE!")
    }

}

user.age // O(1)
user.spell = "Avada Kadabra"; // O(1)
user.magic(); // O(1)