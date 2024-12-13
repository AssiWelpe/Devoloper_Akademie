addEventListener("load",updateRecipe);
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
            } else {
                element.innerText = `${newAmount}`;
            }
        } else if (text) {

            element.innerText = text;
        }
    });
}
