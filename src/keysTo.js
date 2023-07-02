const strCase = require("case");

module.exports.setKey = (inputObj) => {
  let transformOption = {
    toCamelCase() {
      return transform(inputObj, strCase.camel);
    },
    toSnakeCase() {
      return transform(inputObj, strCase.snake);
    },
  };
  return transformOption;
};

const transform = (targetObj, method) => {
  let newObj = {};
  if (!targetObj) return false;

  if (targetObj && targetObj.length === 0) return false;

  if (targetObj && typeof targetObj === "object" && !Array.isArray(targetObj)) {
    for (let key in targetObj) {
      if (typeof targetObj[key] === "object") {
        newObj[method(key)] = transform(targetObj[key], method);
      } else {
        newObj[method(key)] = targetObj[key];
      }
    }
  }

  if (targetObj && Array.isArray(targetObj)) {
    newObj = targetObj.map((item) => {
      if (typeof item === "object") {
        return transform(item, method);
      }
      return item;
    });
  }

  return newObj;
};
