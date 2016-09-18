/**
 * Created by ysbpysbp on 2016/9/11.
 */
function sum(arr) {
    return arr.reduce(function (a,b) {
        return a+b
    }, 0)
}

module.exports.sum = sum