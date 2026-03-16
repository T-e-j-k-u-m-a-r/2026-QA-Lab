// Event loop: Async nature of Javascript

// console.log(`Start`)

// setTimeout(function(){

//     console.log(`From Timeout`)
// },5000)


// Promise.resolve().then(function(){
//     console.log(`Promise Resolved`)
// })

// Promise.reject().catch(function(){
//     console.log(`Promise Rejected`)
// })

// console.log(`Stop`)


// -------------------

console.log(`Start`)

function bookCab(source, destination){
    return new Promise(function(resolve,reject){

        let availabilityOfCab = Math.floor(Math.random() * 100);
        console.log(`availabilityOfCab in % from ${source} to ${destination} = ` + availabilityOfCab)

        if (availabilityOfCab >= 70) {
            resolve(`Cab is on the way from ${source} to ${destination}...`)
        } else {
            reject(`No cab available at the moment from ${source} to ${destination}...`)
        }

    })
}

bookCab(`Bengalore`,'Mysore').then(function(message){
    console.log(message)
}).catch(function(message){
    console.log(message)
})

bookCab(`Bengalore`,'Goa').then(function(message){
    console.log(message)
}).catch(function(message){
    console.log(message)
})

setTimeout(function(){
    console.log(`From Set Timout...`)
})

console.log(`End`)