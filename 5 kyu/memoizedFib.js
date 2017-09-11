// implement memoized version of fib, tested and works

const findIfKeyExistsInArr = (arr, key) => {
    if (typeof arr == undefined) return false
    return arr.filter(x => x.key === key).length > 0
}
const getValueOfKey = (arr, key) => arr.filter(x => x.key === key).map(x => x.value)[0]

var arr = []
var fibonacci = function(n) {
    if(n===0 || n === 1) {
        return n;
    }
    let fib1
    let fib2
    if (findIfKeyExistsInArr(arr, n-1)) {
        fib1 = getValueOfKey(arr, n-1)
    } else {
        fib1 = fibonacci(n-1)
        arr.push({key: n-1, value: fib1})
    }
    if (findIfKeyExistsInArr(arr, n-2)) {
        fib2 = getValueOfKey(arr, n-2)
    } else {
        fib2 = fibonacci(n-2)
        arr.push({key: n-2, value: fib2})
    }
    return fib1 + fib2
}

/*
describe('fib', () => {
    it('should calculate fib', () => {
        assert.deepEqual(f.fibonacci(0), 0)
        assert.deepEqual(f.fibonacci(1), 1)
        assert.deepEqual(f.fibonacci(2), 1)
        assert.deepEqual(f.fibonacci(3), 2)
        assert.deepEqual(f.fibonacci(4), 3)
        assert.deepEqual(f.fibonacci(5), 5)
        assert.deepEqual(f.fibonacci(6), 8)
        assert.deepEqual(f.fibonacci(50), 12586269025)
        assert.deepEqual(f.fibonacci(60), 1548008755920)
        assert.deepEqual(f.fibonacci(70), 190392490709135)
    })
})
*/