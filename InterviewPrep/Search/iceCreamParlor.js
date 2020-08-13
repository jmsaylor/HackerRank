//epic: find the ID numbers of the two flavors of ice cream they can with their budget

//cost = array of integers representing price of a flavor
//money = an integer representing the budget they have to spend on ice-cream

// Complete the whatFlavors function below.
function whatFlavors(cost, money) {
  const flavorIds = [];
  const hashMap = {};
  for (let index = 0; index < cost.length; index++) {
    const target = money - cost[index];
    if (hashMap[target] && hashMap[target] !== index + 1) {
      flavorIds.push(index + 1, hashMap[target]);
      break;
    }
    hashMap[cost[index]] = index + 1;
  }
  console.log(flavorIds.sort((a, b) => a - b).join(" "));
}

whatFlavors([1, 4, 5, 3, 2], 4);
