module.exports = function echolog(...args) {
  console.log(...args);

  return args.length > 1 ? args : args.pop();
};
