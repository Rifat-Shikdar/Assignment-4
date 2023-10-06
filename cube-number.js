

function cubeNumber(number) {

    const cube = number * number * number;

    if (isNaN(number) || number < 0) {
        return '!! ERROR !!! Please enter any positive number ';
    }
    return cube;
}

const result = cubeNumber('-4');
console.log(result);
