'use strict'; // 开启严格模式

/** -------------------------------- 箭头函数区 -------------------------------- **/
/** 两数求和 */
export const add = (a: number, b: number) => a + b;
/** 两数求差 */
export const subtract = (a: number, b: number) => a - b;
/** 两数乘积 */
export const product = (a: number, b: number) => a * b;
/** 两数相除 */
export const divide = (a: number, b: number) => a / b;
/** 求余数 */
export const remainder = (x: number, y: number) => x % y;
/** 幂乘积 */
export const pow = (x: number, y: number) => Math.pow(x, y);
/** 求某数的二进制形式的n位上的数字 */
export const shift = (n: number, bit: number) => n & 1 << bit ? 1 : 0;


/** ------------------------------- 功能区 ----------------------------- **/
/** 十进制转二进制形式 **/
export function DecimalToBinary (target: number, OutBits: number = 16, GroupNumber: number = 4) {
    /**
     * number: 要转换成二进制数的目标数
     * OutBits: 输出结果的总位数
     * GroupNumber: 多少位分一组, 默认值4位一组
     */
    let result: (0 | 1)[] = [];
    let s = '';
    for (let i = OutBits - 1; i >= 0; i--) result.push(shift(target, i))
    for (let j = 0; j < OutBits; j++)
        (j + 1) > 0 && (j + 1) % GroupNumber == 0 ?
            s += result[j] + ' ': s += result[j];
    return s;
}
/** 求浮点数的二进制形式 */
export function FloatToBinary (target: number, decimal: 2 | 4 | 8 | 16) {
    return target.toString(decimal);
}
/** 求斐波那契数列（自制高效版）*/
export function FibonacciSequence (position: number) {
    /** 如果是数列的第1、2位, 则返回结果: 1 */
    if (position < 0) throw 'Position is cannot less than zero;';
    else if (position == 0) return 0;
    else if (position > 0 && (position == 1 || position == 2)) return 1;
    else {
        let start = 1;
        let end = 1;
        let tmp: number = -1;
        let index = 2;

        while (++index <= position) {
            tmp = start + end;
            start = end;
            end = tmp;
        }
        return end;
    }
}
/** 斐波那契数列（递归版本） */
export function FibonacciSequenceRecursion (position: number): number {
    if (position < 0) throw "Position number cannot less than zero!";
    else if (position === 0) return 0;
    else if (position === 1 || position === 2) return 1;
    else return FibonacciSequenceRecursion(position - 1) + FibonacciSequenceRecursion(position - 2);
}

/* 按需导入 */
const RabbitUtils = {
    /** 箭头函数区 **/
    add,
    subtract,
    product,
    divide,
    remainder,
    pow,
    shift,

    /** 功能区 **/
    DecimalToBinary,
    FloatToBinary,
    FibonacciSequence,
    FibonacciSequenceRecursion,
}

/* 默认导出 */
export default RabbitUtils;