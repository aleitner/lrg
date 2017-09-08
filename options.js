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

function toggleDiv(id) {
    var div = document.getElementById(id);
    div.style.display = (div.style.display === "none") ? "block" : "none";
}

// Saves options to chrome.storage
function save_options() {

  /* Account */
  var accountEmail = document.getElementById('accountEmail').value;
  var accountPass = document.getElementById('accountPass').value;

  /* Shipping */
  var shippingFirstName = document.getElementById('shippingFirstName').value;
  var shippingLastName = document.getElementById('shippingLastName').value;
  var shippingCompany = document.getElementById('shippingCompany').value;
  var shippingAddress = document.getElementById('shippingAddress').value;
  var shippingAddress2 = document.getElementById('shippingAddress2').value;
  var shippingCity = document.getElementById('shippingCity').value;
  var shippingCountry = document.getElementById('shippingCountry').value;
  var shippingState = document.getElementById('shippingState').value;
  var shippingZip = document.getElementById('shippingZip').value;
  var shippingPhone = document.getElementById('shippingPhone').value;

  var billEqlShip = document.getElementById('isBillingSameAsShipping').checked;

  /* Billing */
  var billingFirstName = (billEqlShip) ? shippingFirstName : document.getElementById('billingFirstName').value;
  var billingLastName = (billEqlShip) ? shippingLastName : document.getElementById('billingLastName').value;
  var billingCompany = (billEqlShip) ? shippingCompany : document.getElementById('billingCompany').value;
  var billingAddress = (billEqlShip) ? shippingAddress : document.getElementById('billingAddress').value;
  var billingAddress2 = (billEqlShip) ? shippingAddress2 : document.getElementById('billingAddress2').value;
  var billingCity = (billEqlShip) ? shippingCity : document.getElementById('billingCity').value;
  var billingCountry = (billEqlShip) ? shippingCountry : document.getElementById('billingCountry').value;
  var billingState = (billEqlShip) ? shippingState : document.getElementById('billingState').value;
  var billingZip = (billEqlShip) ? shippingZip : document.getElementById('billingZip').value;
  var billingPhone = (billEqlShip) ? shippingPhone : document.getElementById('billingPhone').value;

  var paymentMethod = document.getElementById('paymentMethod').value

  var paypalEmail = document.getElementById('paypalEmail').value;
  var paypalPass = document.getElementById('paypalPass').value;

  var amazonEmail = document.getElementById('amazonEmail').value;
  var amazonPass = document.getElementById('amazonPass').value;

  var cardNumber = document.getElementById('cardNumber').value;
  var cardName = document.getElementById('cardName').value;
  var cardExpiry = document.getElementById('cardExpiry').value;
  var cardCVV = document.getElementById('cardCVV').value;


  chrome.storage.sync.set({
    accountEmail: accountEmail,
    accountPass: window.btoa(accountPass),
    shippingFirstName: shippingFirstName,
    shippingLastName: shippingLastName,
    shippingCompany: shippingCompany,
    shippingAddress: shippingAddress,
    shippingAddress2: shippingAddress2,
    shippingCity: shippingCity,
    shippingCountry: shippingCountry,
    shippingState: shippingState,
    shippingZip: shippingZip,
    shippingPhone: shippingPhone,
    isBillingSameAsShipping: billEqlShip,
    billingFirstName: billingFirstName,
    billingLastName: billingLastName,
    billingCompany: billingCompany,
    billingAddress: billingAddress,
    billingAddress2: billingAddress2,
    billingCity: billingCity,
    billingCountry: billingCountry,
    billingState: billingState,
    billingZip: billingZip,
    billingPhone: billingPhone,
    paymentMethod: paymentMethod,
    paypalEmail: paypalEmail,
    paypalPass: window.btoa(paypalPass),
    amazonEmail: amazonEmail,
    amazonPass: window.btoa(amazonPass),
    cardNumber: window.btoa(cardNumber),
    cardName: cardName,
    cardExpiry: cardExpiry,
    cardCVV: window.btoa(cardCVV)
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    status.style.display = 'block';
    setTimeout(function() {
      status.textContent = '';
      status.style.display = 'none';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get(defaultOptions, function(items) {
    document.getElementById('accountEmail').value = items.accountEmail;
    document.getElementById('accountPass').value =  window.atob(items.accountPass);
    document.getElementById('shippingFirstName').value = items.shippingFirstName;
    document.getElementById('shippingLastName').value = items.shippingLastName;
    document.getElementById('shippingCompany').value = items.shippingCompany;
    document.getElementById('shippingAddress').value = items.shippingAddress;
    document.getElementById('shippingAddress2').value = items.shippingAddress2;
    document.getElementById('shippingCity').value = items.shippingCity;
    document.getElementById('shippingCountry').value = items.shippingCountry;
    document.getElementById('shippingState').value = items.shippingState;
    document.getElementById('shippingZip').value = items.shippingZip;
    document.getElementById('shippingPhone').value = items.shippingPhone;
    document.getElementById('isBillingSameAsShipping').checked = items.isBillingSameAsShipping;
    document.getElementById('billingFirstName').value = items.billingFirstName;
    document.getElementById('billingLastName').value = items.billingLastName;
    document.getElementById('billingCompany').value = items.billingCompany;
    document.getElementById('billingAddress').value = items.billingAddress;
    document.getElementById('billingAddress2').value = items.billingAddress2;
    document.getElementById('billingCity').value = items.billingCity;
    document.getElementById('billingCountry').value = items.billingCountry;
    document.getElementById('billingState').value = items.billingState;
    document.getElementById('billingZip').value = items.billingZip;
    document.getElementById('billingPhone').value = items.billingPhone;
    document.getElementById('paymentMethod').value = items.paymentMethod;

    document.getElementById('paypalEmail').value = items.paypalEmail;
    document.getElementById('paypalPass').value = window.atob(items.paypalPass);
    document.getElementById('amazonEmail').value = items.amazonEmail;
    document.getElementById('amazonPass').value = window.atob(items.amazonPass);
    document.getElementById('cardNumber').value = window.atob(items.cardNumber);
    document.getElementById('cardName').value = items.cardName;
    document.getElementById('cardExpiry').value = items.cardExpiry;
    document.getElementById('cardCVV').value = window.atob(items.cardCVV);

    if (document.getElementById('isBillingSameAsShipping').checked) {
      document.getElementById('billing').style.display = "none";
    }

    document.getElementById(items.paymentMethod).style.display = "block";
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);

// Checkbox for if billing and shipping are the same
var billingCheckbox = document.getElementById('isBillingSameAsShipping');
billingCheckbox.addEventListener('change', function() {
  toggleDiv('billing');
});

// Payment method dropdown
var paymentMethod = document.getElementById('paymentMethod');
paymentMethod.addEventListener('change', function() {
  var method =  paymentMethod.value;
  document.getElementById(method).style.display = "block";

  // Hide the other payment methods
  switch (method) {
    case 'paypal':
      document.getElementById('amazon').style.display = "none";
      document.getElementById('creditCard').style.display = "none";
      break;
    case 'amazon':
      document.getElementById('creditCard').style.display = "none";
      document.getElementById('paypal').style.display = "none";
      break;
    case 'creditCard':
      document.getElementById('amazon').style.display = "none";
      document.getElementById('paypal').style.display = "none";
      break;
    default:
  }
});
