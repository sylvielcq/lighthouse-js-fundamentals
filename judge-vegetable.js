// Decide which vegetable is best based on a given characteristic
function judgeVegetable(vegetables, metric) {
  // accessing specific keys in each element of the array, and comparing them to decide which one has the highest value
  // Using bracket notation to access the right key because metric variable is a string.
  if (vegetables[0][metric] > vegetables[1][metric] && vegetables[0][metric] > vegetables[2]metric) {
    return vegetables[0][submitter];
  } else if (vegetables[1][metric] > vegetables[0][metric] && vegetables[1][metric] > vegetables[2][metric]) {
    return vegetables[1][submitter];
  } else {
    return vegetables[2][submitter];
  }
};

// Calling the function with the following arguments:
// First function parameter: a list of veggies (= an array of objects)
const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

// 2nd function parameter: we are judging based on the 'redness' characteristic
const metric = 'redness'

// Should return "Old Man Franklin"
judgeVegetable(vegetables, metric)