
document.addEventListener("DOMContentLoaded", () => {


    window.updateRecipe = () => {

        const portionInput = document.getElementById("portionInput");

        const newPortions = parseInt(portionInput.value, 10);

        if (!isNaN(newPortions) && newPortions > 0) {

            const ingredientItems = document.querySelectorAll(".ingredient-item .ingredient-quantity");


            ingredientItems.forEach(item => {

                const baseQuantity = parseFloat(item.getAttribute("data-base"));

                const unit = item.getAttribute("data-text") || "";

                if (!isNaN(baseQuantity)) {

                    const newQuantity = (baseQuantity / 4) * newPortions;


                    item.textContent = `${newQuantity.toFixed(2).replace(/\.00$/, "")}${unit}`;
                }
            });
        } else {

            alert("Bitte eine gültige Anzahl von Portionen eingeben!");
        }
    };
});
