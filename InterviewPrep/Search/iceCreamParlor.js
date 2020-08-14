//epic: find the ID numbers of the two flavors of ice cream they can with their budget

//cost = array of integers representing price of a flavor
//money = an integer representing the budget they have to spend on ice-cream

// Complete the whatFlavors function below.
function whatFlavors_Object(cost, money) {
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

function whatFlavors_Map(cost, money) {
  const flavorIds = [];
  const hashMap = new Map();
  for (let index = 0; index < cost.length; index++) {
    const target = money - cost[index];
    if (hashMap.has(target) && hashMap.get(target) !== index + 1) {
      flavorIds.push(index + 1, hashMap.get(target));
      break;
    }
    hashMap.set(cost[index], index + 1);
  }
  console.log(flavorIds.sort((a, b) => a - b).join(" "));
}

function whatFlavors_Array(cost, money) {
  // This whole thing could benefit from better variable names.
  // sparse cost-indexed array to hold flavor IDs. Each element is an array of extant flavor IDs with the given cost.
  // as we iterate over the cost array, the flavor id is i+1 and the cost for that flavor is a == cost[i]
  // check if iceCreams[a] is nonempty yet -- if it isn't, set it to [i+1], if it is push the current flavor ID onto the subarray.
  let iceCreams = [];
  cost.forEach((a, i) => {
    if (iceCreams[a]) {
      iceCreams[a].push(i + 1);
    } else {
      iceCreams[a] = [i + 1];
    }
  });
  // Iterate over the cost array again. We could reorder it, or cut out items that are too expensive to buy, but that's at least as much extra work as we're doing anyway.
  // I imagine this as picking up an imaginary ice cream cone of each flavor and then immediately looking at the first, if any, imaginary cone we could buy with the rest of our money.
  // When we find a valid pair of cones to buy, we're done!
  // There's a special case when the cone we're holding costs exactly half our money. In that case, we check if there's a second flavor available at the same price.
  // If there is one, we're done! If there's not, we move on to the next cone.
  // It would probably make more sense to put the special case if block inside the second if block. Oops.
  // Not using forEach because we need to return and end this ASAP.
  for (let i = 0; i < cost.length; i++) {
    if (cost[i] == money / 2) {
      if (iceCreams[cost[i]][1]) {
        console.log(i + 1, iceCreams[money - cost[i]][1]);
        return;
      }
      continue;
    }
    if (iceCreams.hasOwnProperty(money - cost[i])) {
      console.log(i + 1, iceCreams[money - cost[i]][0]);
      return;
    }
  }
  console.log("Ice cream not found");
}

console.time("Object");
whatFlavors_Object([1, 4, 5, 3, 2], 4);
console.timeEnd("Object");
console.time("Map");
whatFlavors_Map([1, 4, 5, 3, 2], 4);
console.timeEnd("Map");
console.time("Array");
whatFlavors_Array([1, 4, 5, 3, 2], 4);
console.timeEnd("Array");
