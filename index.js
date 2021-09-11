function calculate() {
  console.log('Hello');

  let initial_price = document.getElementById('initial_price').value;
  let quantity = document.getElementById('quantity').value;
  let current_price = document.getElementById('current_price').value;

  let purchase = initial_price * quantity;
  let diff = current_price > initial_price ? "Profit" : "Loss";
  let percent = ((purchase - (current_price * quantity))/ initial_price) * 100;

  document.getElementById("ans").innerHTML = `${diff} is ${Math.abs(purchase - (current_price * quantity))} and percentage is: ${Math.abs(percent)}% `;
}