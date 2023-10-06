

function sortMaker(arr) {
   
    if(!Array.isArray(arr) || arr.length !== 2){
        return '!!!ERROR!!! Input must be an array with exactly 2 elements'
    }
    
    switch (true) {

        // [-4,2] || [4, -2]
        case arr[0] < 0 || arr[1] < 0 :
            return 'Invalid Input';
             
        // [2,3]
        case arr[0] < arr[1]:
            [arr[0], arr[1]] = [arr[1], arr[0]];
            break;

         // [4,2]
        case arr[0] > arr[1]:
            [arr[0], arr[1]] = [arr[0], arr[1]];
            break;

            case arr[0] === arr[1]:
                return 'Equal'
    
                




        default:
            return 'Invalid Input'
    }



    return arr;
}


const inputArray = [3, 3];
const output = sortMaker(inputArray);
console.log(output);