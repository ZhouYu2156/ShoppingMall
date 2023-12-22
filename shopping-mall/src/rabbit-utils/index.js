"use strict";
//'use strict'; // 开启严格模式
Object.defineProperty(exports, "__esModule", { value: true });
exports.FibonacciSequenceRecursion = exports.FibonacciSequence = exports.FloatToBinary = exports.DecimalToBinary = exports.shift = exports.pow = exports.remainder = exports.divide = exports.product = exports.subtract = exports.add = void 0;
/** -------------------------------- 箭头函数区 -------------------------------- **/
/** 两数求和 */
var add = function (a, b) { return a + b; };
exports.add = add;
/** 两数求差 */
var subtract = function (a, b) { return a - b; };
exports.subtract = subtract;
/** 两数乘积 */
var product = function (a, b) { return a * b; };
exports.product = product;
/** 两数相除 */
var divide = function (a, b) { return a / b; };
exports.divide = divide;
/** 求余数 */
var remainder = function (x, y) { return x % y; };
exports.remainder = remainder;
/** 幂乘积 */
var pow = function (x, y) { return Math.pow(x, y); };
exports.pow = pow;
/** 求某数的二进制形式的n位上的数字 */
var shift = function (n, bit) { return n & 1 << bit ? 1 : 0; };
exports.shift = shift;
/** ------------------------------- 功能区 ----------------------------- **/
/** 十进制转二进制形式 **/
function DecimalToBinary(target, OutBits, GroupNumber) {
    if (OutBits === void 0) { OutBits = 16; }
    if (GroupNumber === void 0) { GroupNumber = 4; }
    /**
     * number: 要转换成二进制数的目标数
     * OutBits: 输出结果的总位数
     * GroupNumber: 多少位分一组, 默认值4位一组
     */
    var result = [];
    var s = '';
    for (var i = OutBits - 1; i >= 0; i--)
        result.push((0, exports.shift)(target, i));
    for (var j = 0; j < OutBits; j++)
        (j + 1) > 0 && (j + 1) % GroupNumber == 0 ?
            s += result[j] + ' ' : s += result[j];
    return s;
}
exports.DecimalToBinary = DecimalToBinary;
/** 求浮点数的二进制形式 */
function FloatToBinary(target, decimal) {
    return target.toString(decimal);
}
exports.FloatToBinary = FloatToBinary;
/** 求斐波那契数列（自制高效版）*/
function FibonacciSequence(position) {
    /** 如果是数列的第1、2位, 则返回结果: 1 */
    if (position < 0)
        throw 'Position is cannot less than zero;';
    else if (position == 0)
        return 0;
    else if (position > 0 && (position == 1 || position == 2))
        return 1;
    else {
        var start = 1;
        var end = 1;
        var tmp = -1;
        var index = 2;
        while (++index <= position) {
            tmp = start + end;
            start = end;
            end = tmp;
        }
        return end;
    }
}
exports.FibonacciSequence = FibonacciSequence;
/** 斐波那契数列（递归版本） */
function FibonacciSequenceRecursion(position) {
    if (position < 0)
        throw 'Position is cannot less than zero;';
    else if (position === 0)
        return 0;
    else if (position === 1 || position === 2)
        return 1;
    else
        return FibonacciSequenceRecursion(position - 1) + FibonacciSequenceRecursion(position - 2);
}
exports.FibonacciSequenceRecursion = FibonacciSequenceRecursion;
/* 按需导入 */
var RabbitUtils = {
    /** 箭头函数区 **/
    add: exports.add,
    subtract: exports.subtract,
    product: exports.product,
    divide: exports.divide,
    remainder: exports.remainder,
    pow: exports.pow,
    shift: exports.shift,
    /** 功能区 **/
    DecimalToBinary: DecimalToBinary,
    FloatToBinary: FloatToBinary,
    FibonacciSequence: FibonacciSequence,
    FibonacciSequenceRecursion: FibonacciSequenceRecursion,
};
/* 默认导出 */
exports.default = RabbitUtils;
