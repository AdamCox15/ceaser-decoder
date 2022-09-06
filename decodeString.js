// Write your code below this line
//Examples of what the code should turn out
 "1a" // "b"
 "3ce" // "fh"
 "2fcjjm" // "hello"

//----------------------------
const decodeString = (code) => {
    let decipher = +code[0]
  
    let solution = ''
  
    for(let i = 1; i < code.length; i++){
      console.log(code[i])
      console.log(code[i].charCodeAt())
      let stringValue = code[i].charCodeAt() + decipher
      console.log(stringValue)
  
      solution += String.fromCharCode(stringValue)
    }
  
    console.log(solution)
  }
  
  // decodeString('2fcjjm')
  decodeString('2fc')





const arr = []
const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
const finalArr= []

const decoder = (string) =>{
  let n = parseInt(string)
  let arr = string.split('')
  for(let i = 0; i< arr.length; i++){
    for (let j = 0; j<alphabet.length;j++){
      if( arr[i] === alphabet[j] ){
        finalArr.push(alphabet[j+n])

      }
    }

  }console.log(finalArr.join(''))
}

console.log(decoder('2fcjjm'))

