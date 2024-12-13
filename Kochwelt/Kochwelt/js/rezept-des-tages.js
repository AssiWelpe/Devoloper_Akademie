addEventListener("load", recipeSelector);
function recipeSelector(){
    const selector = document.querySelector("#recipe-selector");
    const recipe = document.querySelector("#recipe-content");

    for (i of recipe.classList.values()) 
        recipe.classList.remove(i);

    recipe.classList.add(`recipe-${selector.selectedIndex}`);
}