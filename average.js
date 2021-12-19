
function average(numbers) { 

  let NewNumbers = numbers.filter(element=>![NaN].includes(element));
  return NewNumbers.reduce((p, c)=> p + c, 0) / NewNumbers.length;
}

module.exports = {average};
