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

function formatAsFraction(amount) {
    if (Math.abs(amount - 8) < 0.01) return "8";
    if (Math.abs(amount - 7) < 0.01) return "7";
    if (Math.abs(amount - 6) < 0.01) return "6";
    if (Math.abs(amount - 5) < 0.01) return "5";
    if (Math.abs(amount - 4.75) < 0.01) return "4 ¾";
    if (Math.abs(amount - 4.5) < 0.01) return "4 ½";
    if (Math.abs(amount - 4.25) < 0.01) return "4 ¼";
    if (Math.abs(amount - 4) < 0.01) return "4";
    if (Math.abs(amount - 3.75) < 0.01) return "3 ¾";
    if (Math.abs(amount - 3.5) < 0.01) return "3 ½";
    if (Math.abs(amount - 3.25) < 0.01) return "3 ¼";
    if (Math.abs(amount - 3) < 0.01) return "3";
    if (Math.abs(amount - 2.75) < 0.01) return "2 ¾";
    if (Math.abs(amount - 2.5) < 0.01) return "2 ½";
    if (Math.abs(amount - 2.25) < 0.01) return "2 ¼";
    if (Math.abs(amount - 2) < 0.01) return "2";
    if (Math.abs(amount - 1.75) < 0.01) return "1 ¾";
    if (Math.abs(amount - 1.5) < 0.01) return "1 ½";
    if (Math.abs(amount - 1.25) < 0.01) return "1 ¼";
    if (Math.abs(amount - 1) < 0.01) return "1";
    if (Math.abs(amount - 0.75) < 0.01) return "¾";
    if (Math.abs(amount - 0.5) < 0.01) return "½";
    if (Math.abs(amount - 0.25) < 0.01) return "¼";

    return amount.toFixed(2); 
}

