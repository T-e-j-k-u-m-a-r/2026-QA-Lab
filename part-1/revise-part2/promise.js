function checkAge(age){
    return new Promise(function(resolve,reject){

        if(age > 18){
            resolve(`Eligible to vote ✅`)
        }else(
            reject(`Not Eligible to vote ❌`)
        )
    })
}

checkAge(20).then(function(message){
    console.log(message)
}).catch(function(message){
    console.log(message)
})