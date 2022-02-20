/*In this project, many places I used globel variable scope.
That's why many variable haven't their type. */

// idCatcher function create for reuse to get the id constrole;
function idCatcher(idname) {
    const idCatcher = document.getElementById(idname);
    return idCatcher;
}
// ========================= 1.income value related and error handle code. =========================
idCatcher('incomeAmount').focus();
idCatcher('incomeAmount').addEventListener('keyup', function() {
    incomeAmount = parseFloat(document.getElementById(this.id).value);
});
// wrong value entry error handle
function incomeValueErr(idName) {
    const food = parseFloat(idCatcher('foodMoney').value);
    const rent = parseFloat(idCatcher('rentMoney').value);
    const clothes = parseFloat(idCatcher('clothesMoney').value);
    const inputValue = parseFloat(idCatcher(idName).value);
    IncomeErr = idCatcher('incomeErr');
    if (inputValue <= 0 || inputValue == '-' || inputValue == 0 || isNaN(inputValue)) {
        return IncomeErr.innerText = 'Please enter a positive amount which is bigger then 0!';
    } else if (inputValue < (food + rent + clothes)) {
        return IncomeErr.innerText = 'Your Income money is less then expences';
    } else if (inputValue > (food + rent + clothes)) {
        idCatcher('error-text').innerText = '';
        idCatcher('foodMoneyValueErr').innerText = '';
        idCatcher('rentMoneyValueErr').innerText = '';
        idCatcher('clothesMoneyValueErr').innerText = '';
        IncomeErr.innerText = '';
        idCatcher('savingErr').innerText = '';
    }
}
// ================================= 2. Expenses value related and error handle code. ============
function expencesEntryErr(idName) {
    const inputValue = parseFloat(idCatcher(idName).value);
    // Expences input value variable
    foodMoney = parseFloat(idCatcher('foodMoney').value);
    rentMoney = parseFloat(idCatcher('rentMoney').value);
    clothesMoney = parseFloat(idCatcher('clothesMoney').value);
    const inputValueCheck = idCatcher(idName).value;
    const inputValueArray = inputValueCheck.split('', inputValueCheck.length);
    let invalidTrue = '';
    // Check the whole value that it is valid or not
    for (let i = 0; inputValueArray.length > i; i++) {
        const arrayValueCheck = parseFloat(inputValueArray[i]);
        if (((typeof(parseFloat(inputValueArray[i])) == 'number') && (arrayValueCheck * 1 != arrayValueCheck)) || ((parseFloat(inputValueArray[0]) == 0) && (isNaN(parseFloat(inputValueArray[1])) != true))) {
            invalidTrue = 'invalid';
        }
    }
    if (invalidTrue == 'invalid') {
        valueErrtxt = 'You are enter an invalid amount!';
    } else if (isNaN(parseFloat(idCatcher('incomeAmount').value))) {
        valueErrtxt = 'First Enter your income amount!';
    } else if (((incomeAmount > inputValue) && incomeAmount < (foodMoney + rentMoney + clothesMoney)) || (incomeAmount <= inputValue && incomeAmount <= (foodMoney + rentMoney + clothesMoney)) || ((incomeAmount <= inputValue) && (incomeAmount < (foodMoney + rentMoney + clothesMoney)))) {
        valueErrtxt = 'Expences amount is over then Income Money!';
    } else {
        valueErrtxt = '';
        idCatcher('error-text').innerText = '';
    }
    // If any entered value is wrong or not, the error/empty message will send from there after validation check 
    if (idName == 'foodMoney') {
        errWillshow = 'foodMoneyValueErr';
    } else if (idName == 'rentMoney') {
        errWillshow = 'rentMoneyValueErr';
    } else if (idName == 'clothesMoney') {
        errWillshow = 'clothesMoneyValueErr';
    }
    err = idCatcher(errWillshow);
    err.innerText = valueErrtxt;
}
// ================================ 3. calculated button and error handle code======================
// calculation will start when the cal-btn id button clicked
idCatcher('calc-btn').addEventListener('click', function() {
    // Code validation
    if ((incomeAmount * 1 && incomeAmount > 0) && (isNaN(foodMoney) != true && foodMoney >= 0) && (isNaN(rentMoney) != true && rentMoney >= 0) && (isNaN(clothesMoney) != true && clothesMoney >= 0)) {
        if (incomeAmount < (foodMoney + rentMoney + clothesMoney)) {
            const lessAmount = 'Income Money is less then expences';
            return idCatcher('error-text').innerText = lessAmount;
        }
        // Total Expences money
        expencesSum = foodMoney + rentMoney + clothesMoney;
        balenceNow = incomeAmount - expencesSum;
        totalExpencesId = idCatcher('totalExpences');
        totalExpencesId.innerText = expencesSum;
        // After Expenses balence is
        balenceNowValue = idCatcher('afterExpencesBalence');
        balenceNowValue.innerText = balenceNow;
        // Clear all input field
        idCatcher('incomeAmount').value = '';
        idCatcher('foodMoney').value = '';
        idCatcher('rentMoney').value = '';
        idCatcher('clothesMoney').value = '';
        idCatcher('error-text').innerText = '';
    }
    // If any error ocurs then this portion will exicute and return a error
    else {
        const errorTextMsg = 'Please enter a valid amount and positive number!';
        return idCatcher('error-text').innerText = errorTextMsg;
    }
});
// ================================ 4. Saving code and Error handle. ===========================
function savingCalc(idName) {
    const savingPercenteg = parseFloat(idCatcher(idName).value);
    const savingErr = idCatcher('savingErr');
    const savingValue = idCatcher(idName).value;
    const savingInputValueArray = savingValue.split('', savingValue.length);
    expencesTotal = foodMoney + rentMoney + clothesMoney;
    afterExpencingMoney = incomeAmount - expencesTotal;
    savingMoneyIs = (parseFloat(idCatcher('saveParcentage').value) / 100 * afterExpencingMoney);
    let invalidTrue = '';
    // Check the whole value that it is valid or not
    for (let i = 0; savingInputValueArray.length > i; i++) {
        const savingArrayValueCheck = parseFloat(savingInputValueArray[i]);
        if ((typeof(parseFloat(savingInputValueArray[i])) == 'number') && (savingArrayValueCheck * 1 != savingArrayValueCheck)) {
            invalidTrue = 'invalid';
        }
    }
    if (invalidTrue == 'invalid') {
        savingValueErrtxt = 'You are enter an invalid amount!';
        return savingErr.innerText = savingValueErrtxt;
    } else if (savingPercenteg >= 0 && isNaN(incomeAmount)) {
        savingValueErrtxt = 'First Enter your income amount!';
        return savingErr.innerText = savingValueErrtxt;
    } else {
        if (savingMoneyIs >= afterExpencingMoney) {
            return savingErr.innerText = 'You have not enough money to save!';
        } else {
            savingErr.innerText = '';
        }
    }
}
// ====================== 5. saving money show code and remain balence. ===========================
/* If all of the above code is valid then this portion will exicute
 and by click and will show the saving money */
idCatcher('savingAmontEntryBtn').addEventListener('click', function() {
    idCatcher('savingAmount').innerText = savingMoneyIs.toFixed(2);
    const remainingBlnc = afterExpencingMoney - savingMoneyIs;
    idCatcher('remainingBlnc').innerText = remainingBlnc.toFixed(2);
});