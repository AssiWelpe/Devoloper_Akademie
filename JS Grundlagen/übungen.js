
console.log(fullname('Max', ' Mustermann'));

function fullname(name, vorname){
    let value = (name + vorname);
    return value;
}

console.log(capitalizeLetters('bAnanE'));

function capitalizeLetters(val) {
    return String(val).toUpperCase(); 
}

console.log(countCharacters('banana'));

function countCharacters(val){
    return String(val).length
}

console.log(formatToCurrency(0.5)); /*0,50€*/

function formatToCurrency(val){
    return val.toFixed(2).replace(".", ",") + "€";
}