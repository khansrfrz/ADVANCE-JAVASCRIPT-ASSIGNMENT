var bill = document.getElementById('number');
var range = document.getElementById('range');
var tip_amt = document.getElementById("tip_amt");
var total_amt = document.getElementById("total_amt");
var range_value = document.getElementById('range_value');

range.addEventListener("click", function(e) {
  range_value.textContent = `${range.value} %`;
  let inp = bill.value;

  if (inp === "") {
    alert("Amount required")
  } else {
    tip_amt.textContent = `₹ ${((inp * range.value) / 100).toFixed(2)}/-`;
    total_amt.textContent = `₹ ${(totalAmt(parseFloat(inp), parseFloat((inp * range.value) / 100))).toFixed(2)}/-`;
  }
})

function totalAmt(amt, tip) {
  return (amt + tip);
}