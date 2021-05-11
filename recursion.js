// Code along from Recursion Section (12/23)

function sumArrayOfNums(arr, index = 0, sum = 0) {
    if ( index === arr.length ) {
        console.log(sum)
        return sum
    } else {
        sum += arr[index]
        return sumArrayOfNums(arr, index + 1, sum)
    }
}

sumArrayOfNums([2, 4, 5, 8])