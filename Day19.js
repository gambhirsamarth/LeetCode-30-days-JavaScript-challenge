/**
 * @param {Array} arr - Array of objects
 * @return {Matrix} - Matrix representation of the input array
 */
function jsonToMatrix(arr) {

  const flattenObject = (obj, prefix = "") => {
    let result = {};
    for (let key in obj) {
      let value = obj[key];

      if (typeof value === "object" && value !== null) {
        let flattened = flattenObject(value, prefix + key + ".");
        result = { ...result, ...flattened }; 
      }
      else {
        result[prefix + key] = value;
      }
    }

    return result;
  };

  let flattenedArr = arr.map(obj => flattenObject(obj));

  let columnSet = new Set();
  flattenedArr.forEach(obj => {
    Object.keys(obj).forEach(key => columnSet.add(key));
  });

  let columns = Array.from(columnSet).sort();

  let matrix = [columns];

  flattenedArr.forEach(obj => {
    let row = columns.map(key => (obj[key] !== undefined ? obj[key] : ""));

    matrix.push(row);
  });

  return matrix;
}
