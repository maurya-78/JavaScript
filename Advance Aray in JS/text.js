const myArr = []
//DebugePrint(myArr)

// continious, Holey

// SMI (Small integer)
// Packed element
// Double (float, string, function)

const arrTwo = [1,2,3,4,5]    // [1,2, ,4,5] ->HOLEY ELEMENT
// PACKED_SMI_ELEMENT -> Contains only number not decimal

arrTwo.push(6.0)
// PACKED_DOUBLE_ELEMENT

arrTwo.push('7')
// PACKED_ELEMENT

arrTwo[10] = 11
// HOLEY_ELEMENT

console.log(arrTwo);
console.log(arrTwo.length);
console.log(arrTwo[9]);

// bound ckeck
// hasOwnProperty(arrTwo,9)
// hasOwnProperty(arrTwo.prototype,10)
// hasOwnProperty(arrTwo.prototype,10)

// holes are very expensive in js

const arrThree = [1,2,3,4,5]
console.log(arrThree[2]);

// SMI > DOUBLE > PACKED
// H_SMI > H_DOUBLE > H_PACKED

// * IF ONE TIME IS DOWN GRADE THE IMPOSSIBAL OF THE UPGRADE
//    Ex. DOUBLE(6.0) TO SMI(6) IS IMPOSIBLE to downgrade

const arrFour = new Array(3)
// just 3 holes. HOLEY_SMI_ELEMENTS

arrFour[0] = "1"  // HOLEY_ELEMENTS
arrFour[1] = "2"  // HOLEY_ELEMENTS
arrFour[2] = "3"  // HOLEY_ELEMENTS

const arrFive =[]
arrFive.push('1')  // PACKED_ELEMENT
arrFive.push('2')  // PACKED_ELEMENT
arrFive.push('3')  // PACKED_ELEMENT

const arrSix = [1,2,3,4,5]

arrSix.push(Infinity)

// for, for-of, forEach