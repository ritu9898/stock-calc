function calculate() {

  let initial_price = document.getElementById('initial_price').value;
  let quantity = document.getElementById('quantity').value;
  let current_price = document.getElementById('current_price').value;

  if(initial_price == '' || quantity == '' || current_price == '')
  {
    alert('Please enter the values');
    return false;
  }

  initial_price = parseInt(initial_price);
  quantity = parseInt(quantity);
  current_price = parseInt(current_price);

  if(initial_price <= 0 || quantity <= 0 || current_price <= 0 ) {
    alert('Pass valid values only');
    return false;
  }

  let purchase = initial_price * quantity;
  let diff = current_price > initial_price ? "Profit" : "Loss";
  let percent;
  if(diff == "Profit")
    percent = Math.abs(purchase - (current_price * quantity)) / purchase * 100;
  else
    percent = Math.abs(purchase - (current_price * quantity)) / purchase * 100;

  document.getElementById("ans").innerHTML = `${diff} is ${Math.abs(purchase - (current_price * quantity))} and percentage is: ${Math.abs(percent)}% `;
}