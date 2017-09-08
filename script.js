// Globals
var options = {};

function getElementByXpath(path) {
  return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

function getInputsByValue(value) {
  var allInputs = document.getElementsByTagName("input");
  var results = [];
  for(var x=0;x<allInputs.length;x++) {
    if (allInputs[x].value == value) {
      console.log()
      return allInputs[x];
    }
  }
  return null;
}

function init() {
  console.log("content script (script.js) : init()");

  // Send message to background in order to get options
  chrome.runtime.sendMessage({action: "getOptions"}, function(response) {
    if (response !== undefined && response !== null) {
      options = response;
    }
  });
}

init();
