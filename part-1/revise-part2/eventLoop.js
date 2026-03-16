console.log(`Hi`)

// promise code which is nested with another promise

// set timeout - 2
setTimeout(function(){
    console.log(`Simple Timeout....`)
},4000)


setTimeout(function(){
    alert(`Im alert from Timeout`)
},2000)

console.log(`Bye`)