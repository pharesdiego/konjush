export const filter = (array, predicate) => {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

export const map = (array, iteratee) => {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

export const reduce = (array, iteratee, accumulator, initAccum) => {
  var index = -1,
      length = array == null ? 0 : array.length;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

export const find = (array, fn) => {
  var index = -1,
      length = array.length;
  
  while(++index < length) {
    var value = array[index]
    if(fn(value)) return value;
  }
  return undefined;
}