// declaring the bins object
const bins = {
  waste: 0,
  recycling: 0,
  compost: 0
};

// function that increases the garbage count for waste, recycling or compost depending on the trash submitted
function smartGarbage(trash, bins) {
  // If trash is waste, then waste count in bins object is increased by 1
  if (trash === "waste") {
    bins.waste = bins.waste + 1;
  }
  // If trash is recycling, then recycling count in bins object is increased by 1
  if (trash === "recycling") {
    bins.recycling = bins.recycling + 1;
  }
  // If trash is compost, then compost count in bins object is increased by 1
  if (trash === "compost") {
    bins.compost = bins.compost + 1;
  }
  return bins;
}

console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));