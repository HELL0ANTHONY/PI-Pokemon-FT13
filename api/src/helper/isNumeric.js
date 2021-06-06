exports.isNumeric = str => (typeof str != "string")
  ? false
  : (!isNaN(str) && !isNaN(parseFloat(str)));