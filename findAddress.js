


function findAddress(obj) {
    const object = {};
    for (let i = 0; i < obj.length; i++) {
        object = obj[i];
        // console.log(object.street,object.house,object.society);
    }


    if ('street' in obj) {
        object.street = obj.street;
    }
    else {
        object.street = '__';
    }

    if ('house' in obj) {
        object.house = obj.house;
    }
    else {
        object.house = '__';
    }

    if ('society' in obj) {
        object.society = obj.society;
    }
    else {
        object.society = '__';
    }

    return object;
}


const addresses =
{
    street : 10,
    // house: '15A',
    // society: 'Earth Perfect'
}

const address = findAddress(addresses);
console.log(address.street, ',', address.house, ',', address.society);


