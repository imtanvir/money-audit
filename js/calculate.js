// function percentage(partialValue, totalValue) {
//     return (100 * partialValue) / totalValue;
//  }
/*

total expences id: totalExpences
balence id: afterExpencesBalence
save input id: saveParcenteg
save button id: savingAmontEntryBtn
saving amount id: savingAmount
remaining balence id : remainingBlnc
*/

/*
I Create here all variable whitout their variable type.Because of reusing the value of those variable.
There are many function and without declaring a variable, we can acces their value inside a function
and access in outside. source: MDN Mozila Developer Network
 */
// idCatcher function create for reuse to get the element and id 
function idCatcher(idname) {
    const idCatcher = document.getElementById(idname);
    return idCatcher;
}
idCatcher('incomeAmount').addEventListener('keyup', function () {
    incomeAmount = parseFloat(document.getElementById(this.id).value);
    console.log(incomeAmount);
});
// wrong value entry error handle 
function valueEntryErr(idName) {
    const inputValue = parseFloat(idCatcher(idName).value);
    // Expences input value variable
    foodMoney = parseFloat(idCatcher('foodMoney').value);
    rentMoney = parseFloat(idCatcher('rentMoney').value);
    clothesMoney = parseFloat(idCatcher('clothesMoney').value);
    IncomeErr = idCatcher('incomeErr');
    console.log(inputValue, incomeAmount);
    if (inputValue < 0 || inputValue == '-' || inputValue == 0 || isNaN(inputValue)) {
        IncomeValueErrtxt = 'Please enter a positive amount which is bigger then 0!';
        return IncomeErr.innerText = IncomeValueErrtxt;
    } else {
        IncomeValueErrtxt = '';
        IncomeErr.innerText = IncomeValueErrtxt;

    }
    if (inputValue < 0 || inputValue == '-' || inputValue == 0 || isNaN(inputValue)) {
        valueErrtxt = 'Please enter a positive amount';
    }else if (((incomeAmount > inputValue) && incomeAmount < (foodMoney + rentMoney + clothesMoney)) || (incomeAmount <= inputValue && incomeAmount <= (foodMoney + rentMoney + clothesMoney)) || ((incomeAmount <= inputValue) && (incomeAmount < (foodMoney + rentMoney + clothesMoney)))) {
        valueErrtxt = 'Expences amount over then Income Money!';
    } else {
        valueErrtxt = '';
    }
    if (idName == 'foodMoney') {
        errWillshow = 'foodMoneyValueErr';
    }else if (idName == 'rentMoney') {
        errWillshow = 'rentMoneyValueErr';
    }else{
        errWillshow = 'clothesMoneyValueErr';
    }
    err = idCatcher(errWillshow);
    err.innerText = valueErrtxt;
    return err;
}
// calculation
idCatcher('calc-btn').addEventListener('click', function () {
    if (incomeAmount * 1) {
        console.log("okkkkkkkkkkkkkkkkk");
    }
    // Code validation
    if ((incomeAmount * 1 && incomeAmount > 0) && (foodMoney * 1 && foodMoney >= 0) && (rentMoney * 1 && rentMoney >= 0) && (clothesMoney * 1 && clothesMoney >= 0)) {
    // Total Expences money
         expencesSum = foodMoney + rentMoney + clothesMoney;
         balenceNow = incomeAmount - expencesSum;
         totalExpencesId = idCatcher('totalExpences');
        totalExpencesId.innerText = expencesSum;
    // Now remain balence
        balenceNowValue = idCatcher('afterExpencesBalence');
        balenceNowValue.innerText = balenceNow;
    // Empty all input field
        idCatcher('incomeAmount').value = '';
        idCatcher('foodMoney').value = '';
        idCatcher('rentMoney').value = '';
        idCatcher('clothesMoney').value = '';
        idCatcher('error-text').innerText = '';        
    } else {
        const errorTextMsg = 'Please enter a valid amount and positive number!';
        console.log(incomeAmount,typeof(incomeAmount));
        return idCatcher('error-text').innerText = errorTextMsg;
    }
});