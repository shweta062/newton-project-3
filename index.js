function showdata() {
  let amount = Number(document.getElementById("amount").value);
  let tip = Number(document.getElementById("tip").value);
  let people = Number(document.getElementById("people").value);

  let totalTipAmountshow = document.getElementById("totalTipAmountshow");
  let totalamountshow = document.getElementById("totalamountshow");
  let tipPetipPerheadshowrheads = document.getElementById("tipPerheadshow");
  let totalamountperheadshow = document.getElementById(
    "totalamountperheadshow"
  );

  let FinalAmount = amount + (amount * tip) / 100;
  console.log("FinalAmount", FinalAmount);
  let totaltipamount = FinalAmount - amount;
  console.log("totaltipamount", totaltipamount);
  let tipamountper = totaltipamount / people;
  console.log("tipamountper", tipamountper);
  let perhadamount = FinalAmount / people;
  console.log("perhadamount", perhadamount);

  totalTipAmountshow.innerText = `Tip:-    $${Math.floor(totaltipamount)}:00`;
  totalamountshow.innerText = `Total Amount:- $${Math.floor(FinalAmount)}:00`;
  tipPetipPerheadshowrheads.innerText = `Tip Per Person:-   $${Math.floor(tipamountper)}:00`;
  totalamountperheadshow.innerText = `Total Per Person:-  $${Math.floor(perhadamount)}:00`;
}
showdata();
function submit() {
  showdata();
}
