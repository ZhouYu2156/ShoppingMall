function shift (n: number, bit: number) {
    //   0000 0101
    // & 0000 0001
    // ---------------
    //   0000 0001 最低位与1做位与，然后左移看结果是否为0，非0返回1，为0返回0
    return n & 1 << bit ? 1 : 0;
}
function transform (num: number, OutBits: number, GroupNumber: number = 4) {
    /** 
     * number: 要转换成二进制数的目标数
     * OutBits: 输出结果的总位数
     * GroupNumber: 多少位分一组, 默认值4位一组
     */
    let result: (0 | 1)[] = [];
    let s = '';
    for (let i = OutBits - 1; i >= 0; i--) result.push(shift(num, i))
    for (let j = 0; j < OutBits; j++) 
        (j + 1) > 0 && (j+1) % GroupNumber == 0 ? s += result[j] + ' ': s += result[j];
    return s;
}