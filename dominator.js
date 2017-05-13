const { flattenTreeToArray } = require('./dom-util');
const _ = require('underscore');

const getElementById = function(root, id) {
  const treeArray = flattenTreeToArray(root);
  for(let i = 0; i < treeArray.length; i++) {
    if(treeArray[i].id === id) {
      return treeArray[i];
    }
  }
};

const getElementsByClassName = function(root, className) {
  const treeArray = flattenTreeToArray(root);
  const results = [];
  for(let i = 0; i < treeArray.length; i++) {
    if(treeArray[i].className && (treeArray[i].className).indexOf(className) !== -1) {
      results.push(treeArray[i]);
    }
  }
  return results;
};

const getElementsByTagName = function(root, tagName) {
  const treeArray = flattenTreeToArray(root);
  return _.filter(treeArray, function(element) {
    return element.tagName === tagName;
  });
};

module.exports = {
  getElementById: getElementById,
  getElementsByClassName: getElementsByClassName,
  getElementsByTagName: getElementsByTagName
};
