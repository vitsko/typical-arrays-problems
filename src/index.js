exports.min = function min(array) {
  if (array === undefined || array.length === 0) {
    return 0;
  }

  return Math.min(...array);
}

exports.max = function max(array) {
  if (array === undefined || array.length === 0) {
    return 0;
  }

  return Math.max(...array);
}

exports.avg = function avg(array) {
  if (array === undefined || array.length === 0) {
    return 0;
  }

  let sum = array.reduce((sum, item) => sum + item, 0);

  return sum / array.length;
}