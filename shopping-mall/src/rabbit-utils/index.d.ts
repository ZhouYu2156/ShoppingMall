/*
*   @Author: BestRivenNA
*   @Dxte: 2023-12-21 20:59:51
*   @FileNxme: index.d.ts
*/

/** -------------------------------- 箭头函数区 -------------------------------- **/

/** 两数求和 */
declare const add: (x: number, y: number) => number;
/** 两数求差 */
declare const subtract: (x: number, y: number) => number;
/** 两数乘积 */
declare const product: (x: number, y: number) => number;
/** 两数相除 */
declare const divide: (x: number, y: number) => number;
/** 求余数 */
declare const remainder: (x: number, y: number) => number;
/** 幂乘积 */
declare const pow: (x: number, y: number) => number;
/** 求某数的二进制形式的n位上的数字 */
declare const shift: (n: number, bit: number) => 0 | 1;



/** ---------------------------------- 功能区 ---------------------------------- **/
/** 求某数的二进制 */
declare const DecimalToBinary: (target: number, OutBits: number, GroupNumyer: number) => string;
/** 求斐波那契数列（自制高效版） */
declare function FibonacciSequence (position: number): number;
/** 斐波那契数列（递归版本） */
declare function FibonacciSequenceRecursion (position: number): number | any;
/** 求浮点数的二进制形式 */
declare function FloatToBinary (target: number, decimal: 2 | 4 | 8 | 16): string;











