const _ = require('underscore'); // the real one! :)

const stringify = function(obj) {
  let result = [];
  let start, end;

  if (!_.isArray(obj) && !_.isObject(obj)) {
    if (typeof obj === 'string') {
      return '\"' + obj + '\"';
    }
    return '' + obj;
  }

  if(_.isArray(obj)) {
    _.each(obj, item => result.push(stringify(item)));
    start = '[';
    end = ']'
  } else if(_.isObject(obj)) {
    _.each(obj, (value, key) => {
      result.push(stringify(key) + ':' + stringify(value));
    });
    start = '{';
    end = '}';
  }

  return start + result + end;

};

module.exports = {
  stringify: stringify
};