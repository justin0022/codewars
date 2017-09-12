function pascalsTriangle(n) {
    const result = []
    for (let i = 1; i <= n; i++) {
        if (i === 1) result.push(1)
        else if (i === 2) result.push(1, 1)
        else {
            let requiredNums = result.slice(1 - i)
            console.log(requiredNums)
            result.push(1)
            while(requiredNums.length > 1) {
              let firstNum = requiredNums.shift()
              result.push(firstNum + requiredNums[0])
            }
            result.push(1)
        }
    }
    return result
}



//pt(1) => [1]
//pt(2) => [1, 1,1]
//pt(3) => [1, 1,1, 1,2,1]
//pt(4) => [1, 1,1, 1,2,1, 1,3,3,1]
//pt(5) => [1, 1,1, 1,2,1, 1,3,3,1, 1,4,6,4,1]
//pt(6) => [1, 1,1, 1,2,1, 1,3,3,1, 1,4,6,4,1, 1,5,10,10,5,1]


var assert = require("chai").assert

describe('pascalsTriangle', () => {
    it('should return an empty array when given input of 0', () => {
        assert.deepEqual(pascalsTriangle(0), [])
    })
    it('should return an array with 1 when given input of 1', () => {
        assert.deepEqual(pascalsTriangle(1), [1])
    })
    it('should return an array with 3 1s when given input of 2', () => {
        assert.deepEqual(pascalsTriangle(2), [1, 1, 1])
    })
    it('should return correct solution in general case', () => {
        assert.deepEqual(pascalsTriangle(3), [1, 1, 1, 1, 2, 1])
        assert.deepEqual(pascalsTriangle(4), [1, 1, 1, 1, 2, 1,1,3,3,1])
        assert.deepEqual(pascalsTriangle(5), [1, 1, 1, 1, 2, 1,1,3,3,1,1,4,6,4,1])
    })
})


