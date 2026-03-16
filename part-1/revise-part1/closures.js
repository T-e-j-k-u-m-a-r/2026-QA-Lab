// Closures code snipet example: 

function parent(){
    var parentProperty = "Gold";

    // console.log(`Accessing child property outside child function scope: `+childProperty);

    function child(){
        var childProperty = "Toy Car";

        console.log(`Parent Property : `+parentProperty);
        console.log(`Child Property : `+childProperty);
    }

    // console.log(`Accessing child property outside child function scope: `+childProperty);

    return child;
}

var parentObj = parent();
parentObj();