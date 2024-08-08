function calculator(num1, num2, operation){
    let result;

    switch (operation){
        case "add": result = num1 + num2;
        console.log(result);
        break;

        case "subtract": result = num1 - num2;
        console.log(result);
        break;


        case "multiply": result = num1 * num2;
        console.log(result);
        break;

        case "division": result = num1 / num2;
        console.log(result);
        break;

        default:
            console.log(null)

    }
    // console.log(result);
}

calculator(50, 5, "add")



