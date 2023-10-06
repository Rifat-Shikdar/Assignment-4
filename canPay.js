

function canPay(changeArray, totalDue) {

    let sum = 0;
    for (let i = 0; i < changeArray.length; i++) {
        sum += changeArray[i];
    }


    if (changeArray.length === 0) {
        return '!!!SORRY!!! Insufficient Balance';
    }
    else if (sum >= totalDue) {
        return true;

    }
    else {
        return false;
    }

}

const output = canPay([], 10);
console.log(output);