document.addEventListener("DOMContentLoaded", function () {

  window.appendValue = function (value) {
    document.getElementById("display").value += value;
  };

  window.clearDisplay = function () {
    document.getElementById("display").value = "";
  };

  window.calculate = function () {
    try {
      const result = eval(document.getElementById("display").value);
      document.getElementById("display").value = result;
    } catch (e) {
      document.getElementById("display").value = "Error";
    }
  };

  console.log("popup.js loaded — JS ready!");
});
