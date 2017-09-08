const defaultOptions = {
  accountEmail: '',
  accountPass: '',
  isBillingSameAsShipping: false,
  shippingFirstName: '',
  shippingLastName: '',
  shippingCompany: '',
  shippingAddress: '',
  shippingAddress2: '',
  shippingCity: '',
  shippingCountry: '',
  shippingState: '',
  shippingZip: '',
  shippingPhone: '',
  billingFirstName: '',
  billingLastName: '',
  billingCompany: '',
  billingAddress: '',
  billingAddress2: '',
  billingCity: '',
  billingCountry: '',
  billingState: '',
  billingZip: '',
  billingPhone: '',
  paymentMethod: 'paypal',
  paypalEmail: '',
  paypalPass: '',
  amazonEmail: '',
  amazonPass: '',
  cardNumber: '',
  cardName: '',
  cardExpiry: '',
  cardCVV: ''
};

function getCurrentTab(callback) {
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, function(tabs) {
    callback(tabs[0]);
  });
}

// When there is a request made for preferences.
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log("Recieved request: " + request);
    if (request.action === "getOptions") {
      // Get preferences from local storage
      chrome.storage.sync.get(defaultOptions, function(options) {
        sendResponse(options);
      }
    );
  }
  return true;
});

// When browseraction icon is clicked
function click(e) {
  console.log("Action clicked");

  var newURL = "https://www.limitedrungames.com";
  getCurrentTab(function(tab) {
    var url = new URL(tab.url);
    if (url.origin !== newURL) {
      console.log("Navigating to " + newURL);

      chrome.tabs.create({ url: newURL });
    } else {
      console.log("Executing content_script");

      chrome.tabs.executeScript(tab.id, {file:"script.js"});
    }
  });
}

chrome.browserAction.onClicked.addListener(click);
