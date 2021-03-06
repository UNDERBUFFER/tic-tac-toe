
'use strict';

const flipMatrix = matrix => (
    matrix[0].map((column, index) => (
        matrix.map(row => row[index])
    ))
)

const reverseMatrix = matrix => {
    let newMatrix = []
    for (let list of matrix)
        newMatrix.push(list.slice().reverse())
    return newMatrix
}

const countOccurrences = (arr, val) => {
    return arr.reduce((a, v) => (v === val ? a + 1 : a), 0)
}
