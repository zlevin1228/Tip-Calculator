//Function to calculate and display tip, total bill, and amount per person
function calculateAndDisplay(){
    // Get the values from the HTML form
    let bill = parseFloat(document.getElementById('totalBill').value)
    let numOfPpl = parseInt(document.getElementById('numOfPeople').value)
    let serviceQuality = document.getElementById('serviceQuality')

    // Calculate tip, total bill, & amount per person
    let tip = calculateTip(bill, serviceQuality)
    let totalBill = calculateTotalBill(bill, tip)
    let amtPerPerson = calcAmtPerPers(totalBill, numOfPpl)

    // Display results in HTML
    document.getElementById('tipResult').innerText = 'Tip: $' + tip.toFixed(2)
    document.getElementById('totalBillResult').innerText = 'Total Bill: $' + totalBill.toFixed(2)
    document.getElementById('amtPerPersonResult').innerText = 'Amount Per Person: $' + amtPerPerson.toFixed(2)
}