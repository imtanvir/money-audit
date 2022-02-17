// function percentage(partialValue, totalValue) {
//     return (100 * partialValue) / totalValue;
//  }
/*
income input id : incomeAmount
food input id: foodMoney
food input id: rentMoney
food input id: clothesMoney

calculate btn id: calc-btn

total expences id: totalExpences
balence id: afterExpencesBalence

save input id: saveParcenteg
save button id: savingAmontEntryBtn
saving amount id: savingAmount
remaining balence id : remainingBlnc
*/

function idCatcher(idname) {
    const idCatcher = document.getElementById(idname);
    return idCatcher;
}

idCatcher('calc-btn').addEventListener('click', function () {
    // Code validation
    const incomeAmount = parseFloat(idCatcher('incomeAmount').value);
    // Expences input value variable
    const foodMoney = parseFloat(idCatcher('foodMoney').value);
    const rentMoney = parseFloat(idCatcher('rentMoney').value);
    const clothesMoney = parseFloat(idCatcher('clothesMoney').value);
    // Code validation
    if ((typeof (incomeAmount) != 'number' && incomeAmount <= 0) && (typeof (foodMoney) != 'number' && foodMoney < 0)(typeof (rentMoney) != 'number' && rentMoney < 0)(typeof (clothesMoney) != 'number' && clothesMoney < 0)) {
        const errorText = "Please enter a valid amount and positive number!";
        console.log('hurrr');
        return idCatcher('error-text').innerText = errorText;
    }
    // Total Expences money
    const expencesSum = foodMoney + rentMoney + clothesMoney;
    const balenceNow = incomeAmount - expencesSum;
    const totalExpencesId = idCatcher('totalExpences');
    totalExpencesId.innerText = expencesSum;
    const balenceNowValue = idCatcher('afterExpencesBalence');
    balenceNowValue.innerText = balenceNow;
    // Empty all input field
    idCatcher('incomeAmount').value = '';
    idCatcher('foodMoney').value = '';
    idCatcher('rentMoney').value = '';
    idCatcher('clothesMoney').value = '';

});

// Saving amount Calculate
idCatcher('savingAmontEntryBtn')