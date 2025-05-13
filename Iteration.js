const animals= [
  { name: "fish", type: "sea", edibility: "edible-meat" },
  { name: "dog", type: "pet", edibility: "unedible-meat" },
  { name: "cow", type: "domestic", edibility: "edible-meat" },
  { name: "cat", type: "pet", edibility: "unedible-meat" }
];

// Filter animals with edible meat only only
const edible = animals.filter(animals => animals.edibility === "edible-meat");

console.log(edible);
