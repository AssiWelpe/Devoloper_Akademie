addEventListener("load", updateRecipe);
function updateRecipe() {

    const portionSize = parseFloat(document.getElementById("portionInput").value);


    if (isNaN(portionSize) || portionSize < 1) {
        alert("Bitte geben Sie eine gültige Portionsgröße ein (mindestens 1).");
        return;
    }


    const table = document.getElementById("recipeTable");


    const rows = table.querySelectorAll("tbody tr");
    rows.forEach((row) => {
        const element = row.querySelector("td[data-base]");

        const baseAmount = parseFloat(element.dataset.base);
        const text = element.dataset.text;

        if (!isNaN(baseAmount) && baseAmount > 0) {

            const newAmount = baseAmount * portionSize;


            if (text) {
                element.innerText = `${newAmount} ${text}`;
                element.innerText = `${formatAsFraction(newAmount)} ${text ? text : ""}`;
            } else {
                element.innerText = `${newAmount}`;
                element.innerText = `${formatAsFraction(newAmount)}`;
            }
        } else if (text) {

            element.innerText = text;
        }


    });
}

function equal(x, y) {
    return Math.abs(x - y) < Number.EPSILON;
  }
  
  function formatAsFraction(amount) {
    let full_part = Math.trunc(amount);
    let fraction = amount - full_part;
    let output = "";
    if (full_part > 0) {
      output = `${full_part}`;
    }
  
    if (equal(fraction, 0.25)) {
      output += " ¼";
    } else if (equal(fraction, 0.5)) {
      output += " ½";
    } else if (equal(fraction, 0.75)) {
      output += " ¾";
    } else if (equal(fraction, 0)) {}else {
      if (full_part == 0) {
         output += '${fraction.toFixed(2)}';
       } else {output += `.${fraction.toFixed(2).substring(2)}`;
     } 
    }
    
    return output;
  }