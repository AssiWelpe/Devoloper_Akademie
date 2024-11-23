

console.log(calculatePrice(50 ,300));

    function calculatePrice(discount, price){
        let value = (price - discount) * 1.19;
        console.log("vor return");
        return value;
}

