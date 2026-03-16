var a = 10;

function f1(){

    var a = 100;
    function f2(){
        var a = 200;
        console.log(a) //200
    }
    f2();
    console.log(a) //100
}

f1();
console.log(a) //10