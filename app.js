var num1Element = document.getElementById("num1");
var num2Element = document.getElementById("num2");
var buttonElement = document.querySelector("button");
var numResults = [];
var textResults = [];
function addd(num1, num2) {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  } else if (typeof num1 === "string" && typeof num2 === "string") {
    return num1 + "" + num2;
  }
  return +num1 + +num2;
}
function printResult(resultObj) {
  console.log(resultObj.val);
}
buttonElement === null || buttonElement === void 0
  ? void 0
  : buttonElement.addEventListener("click", function () {
      var num1 = num1Element.value;
      var num2 = num2Element.value;
      var result = addd(+num1, +num2);
      numResults.push(result);
      console.log(numResults);
      var stringResult = addd(num1, num2);
      textResults.push(stringResult);
      console.log(textResults);
      console.log(result);
      console.log(stringResult);
      printResult({ val: result, timestamp: new Date() });
    });
var myPromise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("It worked");
  }, 1000);
});
myPromise.then(function (result) {
  console.log(result.split("w"));
});
