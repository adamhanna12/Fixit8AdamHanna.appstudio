 
let name = prompt("Enter your first and last name.") 
let letterNum = 1

for (i = 0; i < name.length; i++) {
  console.log(`Letter ${letterNum} is ${name.charAt(i)}.`)
  letterNum ++
}
