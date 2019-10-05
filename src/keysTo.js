const strCase = require('case');

module.exports.setKey = (inputObj) => {
  let transformOption = {
    toCamelCase() {
      return transform(inputObj, strCase.camel)
    },
    toSnakeCase() {
      return transform(inputObj, strCase.snake)
    }
  };
  return transformOption;
};

const transform = (targetObj, method) => {
  let newObj = {}
  if (!targetObj) return false;
  if (targetObj && targetObj.length === 0) return false;
  for (let key in targetObj) {
    if (typeof targetObj[key] === 'object') {
      newObj[method(key)] = transform(targetObj[key], method);
    } else {
      newObj[method(key)] = targetObj[key];
    }
  }
  return newObj;
}
