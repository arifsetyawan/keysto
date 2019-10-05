import strCase from 'case';

export function setKey(inputObj) {
  let keyToObj = new KeyTo(inputObj);
  return keyToObj;
};

class KeyTo {

  get objectTo() {
    return this._objectTo;
  }

  set objectTo(value) {
    this._objectTo = value;
  }

  _objectTo;

  constructor(objectTo) {
    this.objectTo = objectTo;
  }

  toCamelCase() {
    return this::transform(this.objectTo, strCase.camel)
  }

  toSnakeCase() {
    return this::transform(this.objectTo, strCase.snake);
  }

}

function transform(targetObj, method) {
  let newObj = {}
  if (!targetObj) return false;
  if (targetObj && targetObj.length === 0) return false;
  for (let key in targetObj) {
    if (typeof targetObj[key] === 'object') {
      newObj[method(key)] = this::transform(targetObj[key], method);
    } else {
      newObj[method(key)] = targetObj[key];
    }
  }
  return newObj;
}
