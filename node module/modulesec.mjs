// function funct(){
//     console.log("This is module sec file");
// }

// module.exports = funct;

function funct(){
    console.log("This is module sec file");
}
export {funct};

function funct2(){
    console.log("the sec function");
    let a = 10;
    return a;
}

export {funct2};
