
function average(numbers) { 

  let new_numbers = numbers.filter(element=>![NaN].includes(element));
  return new_numbers.reduce((p, c)=> p + c, 0) / new_numbers.length;
}

module.exports = {average};
