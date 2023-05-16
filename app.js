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

-- Scope (Kapsam) --
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


// Var - Let - Const


// var/let/const degiskenIsmi = degiskenDegeri;
// let sayi =10;


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




?      Veri Tipleri
1-String
2-Number
3-Boolean
4-Null
5-Underfined
6-Object
7-Function




//!---------------STRİNG VERİ TİPİ-------------------

// let isim = "Umutcan 16 yaşındadır."
// console.log(isim);
// console.log(typeof isim);

// let sayi1 = 10.7;
// let sayi2 = 5.3;

// console.log(sayi1+sayi2);
// console.log(typeof sayi1);
// console.log(a+b)


//!-------------NUMBER VERİ TİPİ-----------

// 52
// let a = "5";
// let b = "2";

// Yaşınız :23

// let stringDegisken ="Yaşınız: "
// let yas = 16;

// console.log(stringDegisken+yas);


//!-------------BOOLEAN VERİ TİPİ-----------------

// boolean : true ve false 'dan oluşur

// let a = 3;
// let b = 12;

// let sonuc = a + b;
// console.log(sonuc!=15);


//!-------------NULL VERİ TİPİ ------------------

// let a = null; //boş

// a=27;

// console.log(a);


//!-------------UNDEFİNED VERİ TİPİ--------------

// let a ;
// console.log(typeof a);



//!-------------OBJECT VERİ TİPİ-----------------
//object
// let insan = {
//     isim :" Umut",
//     soyisim: "Can",
//     yas:16
// }

// privimate ve referans tipler nedir, farkları nelerdir?

// console.log(typeof insan);



// let rakamlar =[0,1,2,3,4,5];
// console.log(rakamlar);

let func = function(){
    console.log("Merhaba");
}

console.log(typeof func);

*/

//!--------ARİTMETİK OPERATÖRLER--------------

/*
-------->   = atama operatörü önemli !
    +
    -
    *
    /
    %
    ++
    --
    **


// string + number = stringnumber


// let not1 = 100;
// let not2 = 70;

// console.log(not1-not2);

// let sayi1 = "5";
// let sayi2 = 2;
// console.log(sayi1+sayi2);

// console.log("Notlarınızın toplamı:" + (not1 + not2));

// ü,ö,ş,İ,ğ,ı
// birleşik olarak tanımlanmalıdır değişken ismi.

// let musteriNo = 5;
// let sayi2 = 10;

// console.log(sayi1*sayi2);


// let not1 =100;
// let not2 =70;

// let sonuc = (not1+not2)/2;
// console.log(sonuc);




//  10 / 3 =  1
//  12 / 5 =  2



// console.log(10%3);
// console.log(12%5);

// + : 1 arttırmak için kullanılır

// let a = 10;
// a++; //11
// a++; //12
// a--; //11
// a--; //10
// console.log(a);

// ** : 2^3 = 8

// console.log(5**3);



// ----------ATAMA OPERATÖRLERİ-----------

//   =
//   ==
//   ===
//   +=
//   -=
//   *=
//   /=
//   %=
//   **=

// let a =5;

// == eşittir. 

// let a = 5;
// let b = 10;
// let sonuc = a+b;
// console.log(sonuc ==15);

// == :
// console.log(5=="5");

// === : hem tiplerine hemde değerlerinin eşit olup olmadıklarına bakar

// console.log(5==="5");


// let sayi = 4;
// sayi = sayi+2;
// sayi+=2;    

// sayi = sayi-3;
// sayi-=3;

// sayi = sayi*5;
// sayi*=5;

// sayi = sayi/4;
// sayi/=4; 

// sayi = sayi%5;
// sayi%=5;

// sayi = sayi ** 2;
// sayi **= 2;

// console.log(sayi);



//!------------MANTIKSAL OPERATÖRLER-----------


//   && : ve  
//   || : veya
//   !  : değil

// Yaşınız 18'den büyükse VE 3000 TL para olması VE sağlığınız yerindeyse 

let yas = 16;
let para = 3500;
let saglikliMi = false;
let hakSayisi = 3;

// console.log(yas>15 && para>3000 && saglikliMi==true)

// console.log(5 > 3 || 2 < 3);

// console.log( !(saglikliMi) );

console.log((para > 3000) || (yas>18 && saglikliMi));

*/

//! -----KARŞILAŞTIRMA OPERATÖRLERİ--------


    // == : eşit mi
    // != : eşit değil mi
    // > : büyük mü
    // < : kücük mü

    // >= büyük eşit mi
    // <= küçük eşit mi


// console.log(5!=3);
// let yas = 16;
// console.log(yas!=15);

// console.log(12<=12);
// 12<12 || 12==12