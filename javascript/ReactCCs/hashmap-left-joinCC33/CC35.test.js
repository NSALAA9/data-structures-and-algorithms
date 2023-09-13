const leftJoin = require('./CC35'); 

describe('leftJoin', () => {
  it('should perform LEFT JOIN operation on two hashmaps', () => {
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

    const expected = [
      ['diligent', 'employed', 'idle'],
      ['fond', 'enamored', 'averse'],
      ['guide', 'usher', 'follow'],
      ['outfit', 'garb', null],
      ['wrath', 'anger', 'delight']
    ];

    expect(leftJoin(synonymsHash, antonymsHash)).toEqual(expected);
  });

  it('should handle a case with no matching keys in the second hashmap', () => {
    const firstHash = {
      'apple': 'fruit',
      'banana': 'fruit',
      'carrot': 'vegetable'
    };

    const secondHash = {
      'apple': 'red',
      'carrot': 'orange'
    };

    const expected = [
      ['apple', 'fruit', 'red'],
      ['banana', 'fruit', null],
      ['carrot', 'vegetable', 'orange']
    ];

    expect(leftJoin(firstHash, secondHash)).toEqual(expected);
  });

  it('should handle an empty second hashmap', () => {
    const firstHash = {
      'a': '1',
      'b': '2'
    };

    const secondHash = {};

    const expected = [
      ['a', '1', null],
      ['b', '2', null]
    ];

    expect(leftJoin(firstHash, secondHash)).toEqual(expected);
  });
});
