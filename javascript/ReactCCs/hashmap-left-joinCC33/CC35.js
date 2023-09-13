function leftJoin(hashMap1, hashMap2) {
  const result = [];

  for (const key in hashMap1) {
    const value1 = hashMap1[key];
    const value2 = hashMap2[key] || null;

    result.push([key, value1, value2]);
  }

  return result;
}

module.exports = leftJoin;

const synonymsHash = {
  'diligent': 'employed',
  'fond': 'enamored',
  'guide': 'usher',
  'outfit': 'garb',
  'wrath': 'anger'
};

const antonymsHash = {
  'diligent': 'idle',
  'fond': 'averse',
  'guide': 'follow',
  'flow': 'jam',
  'wrath': 'delight'
};

const result = leftJoin(synonymsHash, antonymsHash);

console.log(result);
// Output:
// [
//    ["diligent", "employed", "idle"],
//    ["fond", "enamored", "averse"],
//    ["guide", "usher", "follow"],
//    ["outfit", "garb", NULL],
//    ["wrath", "anger", "delight"]
// ]

