/*
//  Document write ile çıktı verme.
// -- Komutları test etmek için kullanılır, sonuçları ekrana yazdırmak için - document.write("...") kullanılır. --
document.writeln("Hello World <br>"); - line 
document.write("Umut Can <br>");
document.write("5.5");


//-- Tarayıcı konsoluna yazı yazdırma için, console.log("..."); metodunu kullanırız.--

 console.log("Hello World");
 console.log("Umut Can");
 console.log(3.53);
 console.log(true);
 console.log({name:"Umut", surname:"Can"});

// // Konsolu temizler console.clear();

let a=5;
let b=10;


 console.log("İki sayının toplamı", a+b);
 console.clear();


// -- Alert (Uyarı) Popup--
 console.log(window);
let a= 10;
 let b= 12;
alert("İki sayının toplamı  " + (a+b));
alert("F5 Tuşuna lütfen basmayınız")

console.warn("Hata oluştu");
debugger;
console.log(location.port);
console.log(location.port);
console.log(location.port);
console.log(location.port);

/*-- Scope (Kapsam) --
    ->Global Scope (Heryerden erişilebilir)
    ->Function Scope 
    -> Block Scope 


var Umut =10;

console.log(Umut);

global scope
var a = 5;
while (a > 6) {
// işlemler
}

 if (true) {
 // işlemler
}
function method1(){
    console.log(a);
}
method1();


// function scope 

var b = 12; //global scope

function method1() {
    var a = 5; //function scope
    if (true){
        var b = 10  //block scope
    }
    while(true){

    }
    for(let i =0 ; i<=10; i++){
        
    }
}

console.log(a);
method1();
*/

// Var - Let - Const

/*
var/let/const degiskenIsmi = degiskenDegeri;
let sayi =10;
*/

// var : function scope -- ram bellekte çok fazla yer kaplar
// let const : block  scope özelliğine sahiptir. 


// function selamVer() {
//     var selam = "Herkese selam"; //function scope
//     if (true) {
//         let b = 10;
//     }
//     console.log(b);
//     console.log(selam);
// }
// selamVer();

// var a = 5;
// var a = 10;
// console.log(a);

// if(true){
// let a = 5;
// let b = 10;

// console.log(a);
// }


// LET & CONST arasındaki fark ?

//const (constant) : sabit , değişmez

// const a = 10;
// a = 15;
// console.log(a);


// let b = 5;
// b=7;
// b=12;
// console.log(b);

const user = {
    username :"umut",
    password : "123"
}

user.username="can"

console.log(user);