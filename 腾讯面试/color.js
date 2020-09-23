console.log(/^rgb[(]{1}[0-255]{1},[0-255]{1},[0-255]{1}[)]{1}/.test('rgb(31,32,33)'));
console.log(/^[0-255]{1}/.test("2431"));

console.log(/^rgb/.test('rgsba('))

const rgbReg=/^rgb[(]{1}[0-9]{1,3}[)]{1}$/;
console.log(1,rgbReg.test('rgb(255)'));