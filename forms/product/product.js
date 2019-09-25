let num = [123, 433, 54326, 2234, 1919, 1123, 1928, 3374, 23, 190, 33874]
let product = 1
function productCalc(num1, num2) {
return num1 * num2
}

for (i = 0; i < num.length; i++) {  
  product = productCalc(product,num[i]) 
}
console.log(product)