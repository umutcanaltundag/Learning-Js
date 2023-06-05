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



//!--------ARİTMETİK OPERATÖRLER--------------


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


//! --------DİYALOG KUTULARI-----------
//   - Alert
//   - Prompt
//   - Confirm

// console.log(window);

alert("İşleminize devam etmeden önce kaydetmelisiniz!")

// let isim = prompt("İsminizi giriniz :");
// let yas = prompt("Yaşınızı giriniz:");

// console.log("İsminiz : " + isim);
// console.log("Yaşınız : " + yas);

// console.log(typeof isim);
// console.log(typeof yas);


// let sonuc = confirm("Silmek istediğinize emin misiniz?");
// console.log(sonuc);


//!-------KOŞUL YAPILARI------

// let not =50;

// if(not>45){
//     console.log("Geçtiniz, notunuz : " + not);
// }else{
//     console.log("Kaldınız, notunuz : " + not);
// }


// let yas = Number( prompt("Yaşınız : "));
// console.log(typeof yas);
// let para =Number( prompt("Bütçeniz : "));

// if (yas>18 && para>3000) {
//     alert("Ehliyet sınavına katılabilirsiniz");
// }else{
//     alert("Ehliyet sınavına katılamazsınız");
// }

//!-------DERS ORTALAMASI BULMA-------

// vize1 %30 , vize %30 , final %40

// let vize1 = Number(prompt("Vize 1 notunuzu giriniz :"));
// let vize2 = Number(prompt("Vize 2 notunuzu giriniz :"));

// let final = Number(prompt("Final notunuzu giriniz : "))

// let ortalama = Number((vize1*0.3) + (vize2*0.3) +  (final*0.4));

// if (ortalama>=60) {
//     alert("Dersten geçtiniz tebrikler :))   --> " + ortalama);
//     console.log("Dersten geçtiniz tebrikler :))");
// } else {
//     alert("Kaldınız, geçmiş olsun :(    --> " + ortalama);
//     console.log("Kaldınız, geçmiş olsun :(" );
// }
 
//!----------ELSE İF YAPISI------------- 



    // -           -              -
    //  -          -            -
    //   -         -           -
    //    -        -         -
    //     -       -        -
    //      -      -      -
    //       -     -    -
    //     1.yol  2.yol  3.yol


let secilenYol = prompt("Lütfen girmek istediğiniz yolu seçiniz :");

if (secilenYol == 1) {
    alert("Seçilen yol  " + secilenYol + ". yoldur");
}

else if (secilenYol == 2) {
    alert("Seçilen yol  " + secilenYol + ". yoldur");
}

else if (secilenYol == 3) {
    alert("Seçilen yol  " + secilenYol + ". yoldur");
}
else {
    alert("Lütfen geçerli bir yol seçiniz !!");
}


//! Beden Kitle İndeksi Hesaplama


let kilo =Number(prompt("Kilonuzu giriniz"));

let boy = Number(prompt("Boyunuzu metre cinsinden giriniz "))

let sonuc = kilo/(boy**2);

if(sonuc<18.5){
    console.log("İdeal kilonun altında");

}else if(sonuc>=18.5 && sonuc<=24.9){
    console.log("İdeal kilonun altında" + sonuc);
    
}else if(sonuc>=25 && sonuc<=29.9){
    console.log("İdeal kiloda" + sonuc);

}else if(sonuc>=30 && sonuc<=39.9){
    console.log("İdeal kilonun çok üstünde (obez)" + sonuc);

}else if(sonuc>=40){
    console.log(":İdeal kilonun çok üstünde (morbid obez)" + sonuc);
}


//! Benzin İstasyonu Uygulaması  


// 1-Dizel  : 24.53 
// 2-Benzin : 22.25
// 3-LPG    : 11.1



// Gelen müşteriden alacağımız bilgiler;
// 1-Yakıt Tipi
// 2-Yüklenecek yakıt litresi


let dizel = 24.53, benzin = 22.25, lpg = 11.1;
const yeniSatir = "\r\n";
const yakitMetni = "1-Dizel" + yeniSatir +
    "2-Benzin" + yeniSatir +
    "3-LPG" + yeniSatir +
    "Yakıt türünüzü seçiniz";

let yakitTipi = prompt(yakitMetni);
if (yakitTipi == "1" || yakitTipi == "2" || yakitTipi == "3") {
    let yakitLitresi = Number(prompt("Yakıt litresini giriniz"));
    let bakiye = Number(prompt("Bakiyenizi giriniz"));

    if (yakitTipi == "1") {
        //DİZEL
        let odenecekTutar = dizel * yakitLitresi;
        if (odenecekTutar < bakiye) {
            //bakiyeniz yeterli
            bakiye = bakiye - odenecekTutar;
            alert("Yakıt alma işlemi başarılı" + yeniSatir
                + "Kalan bakiye : " + bakiye)
        } else {
            //bakiye yetersiz
            alert("Bakiyeniz yeterli değildir" + yeniSatir
                + "Ödenecek tutar : " + odenecekTutar + yeniSatir
                + "Bakiye : " + bakiye + yeniSatir
                + "Eksik tutar : " + (odenecekTutar - bakiye));
        }
    } else if (yakitTipi == "2") {
        //BENZİN
        let odenecekTutar = benzin * yakitLitresi;
        if (odenecekTutar < bakiye) {
            //bakiyeniz yeterli
            bakiye = bakiye - odenecekTutar;
            alert("Yakıt alma işlemi başarılı" + yeniSatir
                + "Kalan bakiye : " + bakiye)
        } else {
            //bakiye yetersiz
            alert("Bakiyeniz yeterli değildir" + yeniSatir
                + "Ödenecek tutar : " + odenecekTutar + yeniSatir
                + "Bakiye : " + bakiye + yeniSatir
                + "Eksik tutar : " + (odenecekTutar - bakiye));
        }
    } else if (yakitTipi == "3") {
        //LPG
        let odenecekTutar = lpg * yakitLitresi;
        if (odenecekTutar < bakiye) {
            //bakiyeniz yeterli
            bakiye = bakiye - odenecekTutar;
            alert("Yakıt alma işlemi başarılı" + yeniSatir
                + "Kalan bakiye : " + bakiye)
        } else {
            //bakiye yetersiz
            alert("Bakiyeniz yeterli değildir" + yeniSatir
                + "Ödenecek tutar : " + odenecekTutar + yeniSatir
                + "Bakiye : " + bakiye + yeniSatir
                + "Eksik tutar : " + (odenecekTutar - bakiye));
        }
    }
}
else {
    alert("Lütfen geçerli bir yakıt türü seçiniz!")
}



//!-----------SWİTCH & CASE---------------


// let sayi = prompt("Lütfen 1 ile 5 arasında bir sayı giriniz");

// switch(sayi) // "1"  "2"  "3"  "4"  "5"
// {
//     case "1" : 
//         //kodlarınız
//         console.log("Girilen sayı 1'dir");
//         break;

//     case "2":
//             console.log("Girilen sayı 2'dir");
//         break;

//     case "3":
//         console.log("Girilen sayı 3'tür");
//         break;

//     case "4":
//         console.log("Girilen sayı 4'tür");
//         break;

//     case "5":
//         console.log("Girilen sayı 5'dir");
//         break;
//     default:
//         console.log("Girilen sayı 1 ile 5 aralığında olmalıdır!");
//         break;
// }

// let yeniSatir = "\r\n"
// let metin = "1-Pazartesi" + yeniSatir
//     + "2-Salı" + yeniSatir
//     + "3-Çarşamba" + yeniSatir
//     + "4-Perşembe" + yeniSatir
//     + "5-Cuma" + yeniSatir
//     + "6-Cumartesi" + yeniSatir
//     + "7-Pazar"+yeniSatir
//     +"Lütfen bir seçim yapınız";


// let deger = prompt(metin);
// switch (deger) {
//     case "1":
//         console.log("Pazartesi Günü");
//         break;

//     case "2":
//         console.log("Salı Günü");
//         break;

//     case "3":
//         console.log("Çarşamba Günü");
//         break;

//     case "4":
//         console.log("Perşembe Günü");
//         break;

//     case "5":
//         console.log("Cuma Günü");
//         break;

//     case "6":
//         console.log("Cumartesi Günü");
//         break;

//     case "7":
//         console.log("Pazar Günü");
//         break;

//     default:
//         console.log("Lütfen geçerli bir değer giriniz!");
// }



//?----- ATM UYGULAMASI-------

//   1-Bakiye görüntüleme
//   2-Para çekme 
//   3-Para yatırma
//   4-Çıkış


let yeniSatir = "\r\n";
let bakiye = 1000;

let metin = "1-Bakiye Görüntüleme " + yeniSatir
    + "2-Para Çekme" + yeniSatir
    + "3-Para Yatırma" + yeniSatir
    + "4-Çıkış" + yeniSatir
    + "Lütfen bir değer seçiniz."

// alert(metin);

let secim = prompt(metin);
switch (secim) {
    case "1":
        alert("Bakiyeniz :" + bakiye);
        break;

    case "2":
        let cekilecekTutar = Number(prompt("Çekmek istediğiniz tutarı giriniz :"));
        if (cekilecekTutar < bakiye) {
            //başarıldır
            bakiye = bakiye - cekilecekTutar;
            alert("Kalan Bakiye : " + bakiye);
        } else {
            alert("Bakiyenizden fazla para çekemezsiniz" + yeniSatir
                + "Bakiyeniz :" + bakiye + " " + "Çekilecek Tutar : " + cekilecekTutar);
        }
        break;

    case "3":
        let yatirilacakTutar = Number(prompt("Yatırılacak Tutar"));
        bakiye = bakiye + yatirilacakTutar;
        alert("Güncel bakiyeniz : " + bakiye);
        break;

    case "4":
        console.log("Sistemden Çıkış Yapılmıştır..");
        break;

    default:
        console.log("Lütfen 1 - 4 arasında değer giriniz !");
        break;
}




//!-----TYT PUAN HESAPLAMA------

        // ? SORULAR
        // 1-Türkçe 40    -4 puan ...
        // 2-Matematik 40
        // 3-Sosyal Bilimler 20 
        // 4-Fen Bilimleri 20

        // ---->100 puanı ÖSYM veriyor
        // ---->Okul puanı max 60 veriyor.

let turkceDogru , turkceYanlis= 0;
let matematikDogru , matematikYanlis =0;
let sosyalDogru , sosyalYanlis =0;
let fenDogru , fenYanlis =0;
let puan = 0;
let okulPuani = 0; 

let yeniSatir = "\r\n";
let mesaj = "TYT Puan Hesaplama Uygulamasına Hoşgeldiniz!" + yeniSatir
    +" 1- Puan hesapla" +yeniSatir
    +" 2- Çıkış yap";

// alert(mesaj);   

let secim = prompt(mesaj);

switch (secim){
    case  "1":

        okulPuani = Number (prompt("Okul puanınızı giriniz "));
        turkceDogru = Number(prompt("Türkçe doğru sayısı "));
        turkceYanlis = Number(prompt("Türkçe yanlış sayısı "));

        matematikDogru = Number(prompt("Matematik doğru sayısı "));
        matematikYanlis = Number(prompt("Matematik yanlış sayısı "));

        sosyalDogru = Number(prompt("Sosyal doğru sayısı "));
        sosyalYanlis = Number(prompt("Sosyal yanlış sayısı "));

        fenDogru = Number(prompt("Fen doğru sayısı "));
        fenYanlis = Number(prompt("Fen yanlış sayısı "));

        let  dogruSayisi =  turkceDogru+matematikDogru+sosyalDogru+fenDogru;
        let yanlisSayisi =turkceYanlis+matematikYanlis+sosyalYanlis+fenYanlis;
        let kalanDogruSayisi =dogruSayisi - (yanlisSayisi/4);
        puan = (kalanDogruSayisi*4) + 100 + okulPuani;
        alert("TYT Puanınız :" + puan);

        break;

    case "2":
        alert("Uygulamadan çıkış yapıldı..");
        break;

    default:
        alert("Lütfen geçerli aralıkta değer giriniz!")
        break;
}



//!------------------- TÜR DÖNÜŞÜMLERİ -------------------


//    strings, numbers, booleans, undefined, and null. 
//    object , function

// let a = 5;
// let b = Number("10");
// console.log(a+b);


// let c = Number(b);
// console.log(typeof c);
// console.log(a+c);


//parseInt()


// let a = 8;
// let b = parseFloat("12");
// console.log(a+b);
// console.log(typeof b);

//NUMBER TİPİNDEN STRİNG VERİ TİPİNE DÖNÜŞTÜRMEK

// let x = String(55);
// let x = (55).toString(); 
// console.log(typeof x);                                                                                                                                                                                                           
// console.log(x);                                                                                                                                     


// let sonuc = String(true)
// console.log(typeof sonuc);
// console.log(sonuc);


// let a = Number("B")
// Not a Number = Bu bir sayı değil
// console.log(a);


// let rakamlar = String([1,2,3,4]);
// console.log(typeof rakamlar);
// console.log(rakamlar);


// let rakamlar = Number([1,2,3,4]);

//!-----Breakpoint ve Tooltip nedir ?-----

//function ortalamaBul(vize1 , vize2 , finalNot){
    //kodları
    //return "75;"
}

// debugger;
// let a = 10;
// let b = 15;
// let c = a+b;
// let d = a+b+c;
// let e = a+c+b;

// let sonuc = a+b+c+d+e;

// console.log("Sonuç " ,sonuc);




// 1'den 10'a kadar yazdıralım 

// for(let j= 1; j<=10 ; j++){
//     console.log(j);
// }

// 1'den 10'a kadar çiftleri yazdılarım

// for(let j =0; j<=10 ; j=j+2){
//     console.log(j);
// }

// 1'den 10'a kadar tekleri yazdıralım

// for(let j =1 ; j<=10 ; j=j+2){
//     console.log(j);
// }

// for (let j = 1; j<=10; j++){
//     if(j%2==1){
//         console.log("Umut");
//     }else{
//         console.log("Can");
//     }
// }

//50'den 1'e kadar gidelim ve toplamlarını bulalım.

// let toplam = 0;
// for(let i= 50; i>=1 ; i--){
//     toplam+=i;
//     console.log(i);
// }

// console.log("Toplam :" , toplam);




// 1'den 10'a kadar yazdıralım

// let sayac = 1; 

// while(sayac<=10){
//     console.log(sayac);
//     sayac++;
// }


// 1'den 10'a kadar çiftleri ve tekleri yazdıralım 

// let sayac = 0;
// while(sayac<=10){
//     if(sayac%2==0){
//         console.log(sayac);
//     }
//     sayac++;
// }


// let sayac =1;
// while(true){
//     console.log(sayac);
//     if(sayac==7){
//         break;
//     }
//     sayac++;
// }


// 1'den 10'a kadar yazdıralım

// let sayac =1;

// do {
//     console.log(sayac);
//     sayac++;
// } while (sayac<=10); 


// let yas =23;

// do {
//     console.log("Ehliyeti alabilirsiniz");
// } while (yas>=25);




//1'den 20'ye kadar olan tek sayıların toplamını bulalım

// let sayac = 1;
// let toplam= 0;
// do {
//     if (sayac%2==1){
//         toplam+=sayac;
//     }
//     sayac++;
// } while (sayac<=20);

// console.log("Toplam :" , toplam);




//break - continue

//1'den 10'a kadar sayıları yazdıralım 8'e geldiğimizde döngüden çıkalım

// let sayac =1;

// while(sayac<=10){
//     console.log(sayac);
//     if(sayac==8){
//         break;
//     }
//     sayac++;
// }


//? Continue
// 1 2 3 4 5 6 7 9 10

// let sayac =0;
// while(sayac<=10){
//     sayac++;
//     if(sayac>10){
//         break;
//     }
//     if(sayac==8){
//         continue;
//     }
//     console.log(sayac); 
// }




//  Çarpım tablosu

// for(let i = 1; i<=10; i++){
//     for(let j =1; j<=10; j++){
//         console.log(i+"x"+j+"="+(i*j));
//     }
//     console.log("-----------------------------------");
// }



// Asal Sayı Bulma Uygulaması

//    15 = 2, 3, 4, 5, 6, 7.5

// let a = Math.floor(7.9);

// console.log(a);

//15 

// let sayi =Number(prompt("Lütfen bir sayı giriniz :"));  
// let sonuc = true;
// for(let i=2; i<=Math.floor(sayi/2); i++){
//     if(sayi%i==0){
//          //Asal değildir
//          sonuc=false;
//          break;
//     }
// }
// if(sonuc){
//     alert(sayi +" asaldır.");
// }else {
//     alert(sayi +" asal değildir!");
// }





//Faktöriyel hesaplama

// 5= 5.4.3.2.1 = 120 
// 6 = 6.5.4.3.2.1 = 720

// let sayi = Number(prompt("Bir sayı giriniz"));
// let carpim = 1;

// for(let i =1 ; i<=sayi ; i++){
//     carpim=carpim*i
// }
// alert("Sonuç  :" + carpim);



// 153 - 370 - 407 sayısı armstrong

//153 =1*1*1 + 5*5*5 + 3*3*3 + = 1 + 125+27 = 153

// let sayi =prompt("Sayı giriniz");
// let toplam =0;
// for( let i=0; i<sayi.length;  i++){
//     let rakam = sayi.charAt(i);
//     toplam+=rakam*rakam*rakam;
// }

// if(Number(sayi)==toplam ){
//     alert("Armstrong sayısıdır :)")
// }else {
//     alert("Armstrong sayısı değildir");
// }




//Parametresiz ve geriye değer döndürmeyen metot tanımlamak

// function yazdir(){
//     debugger;   
//     console.log("Umut");
// }

// debugger;
// yazdir();
// yazdir();

// function topla (){
//     console.log(5+7); 
// }
// topla();



//Parametreli metot tanımlamak

// function yazdir(isim , soyisim) {
//     debugger;
//     console.log(isim + " " + soyisim);
// }

// debugger;
// yazdir("Umut","Can"); 
// yazdir("Atlas","Doğukan");

// cube(5);
// cube(3);
// function cube(sayi){
//     console.log(sayi*sayi*sayi);
// }


// let yas =Number(prompt("Yaşınızı giriniz"));
// kontrolEt(yas);

// function kontrolEt(yas){
//     if(yas>=18){
//         console.log("Ehliyeti alabilirsiniz");
//     }else{
//         console.log("Ehliyeti alamazsınız");
//     }
// }





// Geriye değer döndüren metot tanımlamak --return = geriye dönmek


// let donenDeger =cube(2);
// kareAl(donenDeger);


// function kareAl(sayi){
//     let sonuc =sayi*sayi;
//     console.log(sonuc);
// }

// // 1. Bir değeri metodun dışarısına çıkarmak , taşımak için kullanılır.
// // 2. Bir metodu bitiren anahtar kelimedir.

// function cube(sayi){
//     let sonuc = sayi*sayi*sayi;
//     return sonuc;
//     console.log("Umut");
// }



// yazdir();
// function yazdir(){
//     console.log("Umut");
//     // void = geriye değer döndürmeyen demektir.
// }




// Kelime sayısı bulma uygulaması

// let metin ="Şuanda Urfa da JavaScript Eğitimi Almaktayım.";

// let harf  = prompt("Harfi giriniz");

// let sonuc =bul(harf);
// alert("Harf sayısı : " + sonuc);

// bul("a");
// bul("e");
// bul("s");

// function bul (harf){
//     let toplam =0;
//     for(let i =0; i<metin.length ; i++) {
//         if(metin.charAt(i).toLocaleLowerCase()===harf.toLocaleLowerCase()){
//             toplam+=1;
//         }
//     }
//     console.log("Harf sayısı : " + toplam );
// }




// Mükemmel Sayı Uygulaması

// 6  - 28  - 496
// ---> Bir sayıyı tam bölünmesi için maksimum yarısına kadar yolumuz var
// 6 = 1, 2, 3, 6 = 12 = 6*2

// 28 = 1, 2, 4, 7, 14, 28 = 56 = 28*2

// isPerfectNumber(42);
// isPerfectNumber(8128);

// function isPerfectNumber(number){
//     let toplam =0;
//     for(let i = 2 ; i<=number/2 ; i++){
//         if(number%i==0){
//             toplam+=i;
//         }
//     }
//     toplam+=1+number;
//     if(toplam==number*2){
//         console.log("Mükemmel sayıdır..");
//     }else{
//         console.log("Mükemmel sayı değildir!!");
//     }
// }



//!----DİZİLER-----

// let sayilar =[0,1,2,3,4,5,"Umut",7,8,9,"Can"];

// sayilar[sayilar.length-1]="Mehmet";

// console.log(sayilar[10]);


// let isimler= ["Enes" , "Kübra" , "Bilal" , "Yusuf"];
// isimler[2] = "Umut";
// console.log(isimler[2]);

// let karisikDizi= ["1", "Umut", 5.7,true, null , undefined];
// console.log(karisikDizi[3]);



// let dizi1 = ["Umut","Can"];
// let dizi2 = new Array("Umut", "Can");

//number , string , boolean , undefined , null , object(array)

// console.log(typeof dizi2);

// For döngüsü , While döngüsü , Do while , Foreach

//foreach : dizilerde kullanıyoruz.

//? FOREACH DÖNGÜSÜ

// let isimler = ["Atlas","Doğukan","Ege","Can","Sude","Ezgi"];

// let sayac = 0;
// while(sayac<isimler.length){
//     console.log(isimler[sayac]);
//     sayac++; 
// }


// for(let i=0 ; i<isimler.length ; i++){
//     console.log(isimler[i]);
// }

// isimler.forEach(function(isim){
//     console.log(isim);
// });


//!--------- DİZİ METOTLARI !!-------

//   push    : dizinin sonuna eleman ekler , ayrıca dizinin uzunluğunu döner
//   unshift : dizinin başına eleman ekler , eleman sayısını geriye döner

//   pop     : dizinin sonundan eleman siler , eleman sayısını döner
//   shift   : dizinin başından eleman siler , eleman sayısını döner

//   splice(index,incdex)  :eleman eklemek ve silmek için kullanılır.

//   toString: diziyi stringe çevirebiliriz.
//   join    : diziyi stringe çevirir . Farkı ise araya eleman ekleyebiliriz

//   concat  : dizileri birleştirmek için kullanılır.
//   slice(dilimlemek)   : diziyi istenilen yerden bölüp yeni bir dizi oluşturur.
//   length  : dizinin uzunluğunu verir.
//   reverse : dizinin elemanlarını ters çevirmek
//   split(bölmek)   : belirli bir ifadeye göre bölüp diziye çevirmek.
//   indexOf : elemanın index numarasını verir.
//   includes: verilen elemanı içeriyor mu ona bakar


let arabalar =  ["Bmw","Audi","Mercedes","Porsche","Supra"];

// let arabalar1 = ["Bmw","Audi","Mercedes","Porshce","Supra"];
// let arabalar2 = ["Honda,Tofaş"];

// PUSH METOT

// console.log(arabalar.length);
// arabalar.push("Lamborghini")
// console.log(arabalar);

// UNSHİFT METOT

// arabalar.unshift("Honda")
// console.log(arabalar);

// POP METOT

// let uzunluk = arabalar.pop();
// console.log(arabalar);
// console.log(uzunluk);


// SHİFT METOT

// let silinenEleman = arabalar.shift();
// console.log(arabalar);
// console.log(silinenEleman);


//SPLİCE METOT

// console.log(arabalar);
// arabalar.splice(2,0,"Honda");
// console.log(arabalar);

// arabalar.splice(1,2);
// console.log(arabalar);

// arabalar.splice(2,2,"Honda");
// console.log(arabalar);


//TOSTRİNG METOT
// console.log(typeof arabalar);
// let stringArabalar = arabalar.toString();
// console.log(typeof stringArabalar);
// console.log(stringArabalar);



//JOİN METOT
// let stringArabalar = arabalar.join(" / ");
// console.log(stringArabalar);


//CONCAT METOT
// let birlesmisDizi = arabalar1.concat(arabalar2);
// console.log(birlesmisDizi);


//SLİCE METOT
// console.log(arabalar);
// let ayriDizi = arabalar.slice(2);
// console.log(ayriDizi);


//LENGHT ÖZELLİK 
// console.log(arabalar.length);


//REVERSE METOT
// console.log(arabalar);
// arabalar.reverse();
// console.log(arabalar);


//SPLİT METOT
// let isimler = "Enes,Ali,Veli"
// let isimlerDizi = isimler.split(",");
// console.log(isimlerDizi);



//INDEXOF METOT
// let index = arabalar.indexOf("Bmw");
// if(index==0){
//     console.log("belirtilen eleman vardır");
// }else{
//     console.log("belirtilen eleman yoktur");
// }


//INCLUDES METOT
// let sonuc = arabalar.includes("Porsche");
// if(sonuc){
//     console.log("Eleman vardır.");
// }else{
//     console.log("Eleman yoktur!");
// }




// let urun1 = {
//     isim: "ACER Swift",
//     kategori: "Teknoloji",
//     fiyat: 6.219
// }
// let urun2 = {
//     isim: "ACER Nitro 5",
//     kategori: "Teknoloji",
//     fiyat: 15.475
// }
// let urun3 = {
//     isim: "LENOVO V15",
//     kategori: "Teknoloji",
//     fiyat: 10.999
// }
// let urun4 = {
//     isim: "LENOVO V14",
//     kategori: "Teknoloji",
//     fiyat: 4.399
// }
// let urun5 = {
//     isim: "LENOVO Idepad",
//     kategori: "Teknoloji",
//     fiyat: 4.510
// }
// let urunler = [urun1, urun2, urun3, urun4, urun5];
// let filtreliUrunler = [];
// let kullaniciUrunIsmi = prompt("Bir ürün ismi giriniz");

// filtreliUrunleriDoldur(urunler);
// filtreliUrunleriYazdir(filtreliUrunler);


// function filtreliUrunleriDoldur(urunler) {
//     urunler.forEach(function (urun) {
//         if (urun.isim.toUpperCase().includes(kullaniciUrunIsmi.toUpperCase(), 0)) {
//             filtreliUrunler.push(urun);
//         }
//     });

// }

// function filtreliUrunleriYazdir(urunler) {
//     urunler.forEach(function (urun) {
//         console.log("---------------------------------------");
//         console.log("|" + urun.isim + "|" + urun.fiyat + "|" + urun.kategori);
//         console.log("---------------------------------------");
//     });
// }




let kitap1 = { isim: "Her Şeyi Düşünme", yazar: "Anne Bogel", fiyat: 25, raf: "1.5.RAF" }
let kitap2 = { isim: "Hiçbir Karşılaşma Tesadüf Değildir", yazar: "Hakan Mengüç", fiyat: 56, raf: "2.3.RAF" }
let kitap3 = { isim: "İnsan Neyle Yaşar", yazar: "Tolstoy", fiyat: 34, raf: "3.4.RAF" }
let kitap4 = { isim: "Zafer Sızlanarak Kazanılmaz", yazar: "Haluk Tatar", fiyat: 45, raf: "4.1.RAF" }
let kitap5 = { isim: "Şeker Portakalı", yazar: "José Mauro de Vasconcelos", fiyat: 22, raf: "5.3.RAF" }

let kitaplar = [kitap1, kitap2, kitap3, kitap4, kitap5];


let raf11 = { kod: "1.1RAF", goster: false }
let raf12 = { kod: "1.2RAF", goster: false }
let raf13 = { kod: "1.3RAF", goster: false }
let raf14 = { kod: "1.4RAF", goster: false }
let raf15 = { kod: "1.5RAF", goster: false }


let raf21 = { kod: "2.1.RAF", goster: false }
let raf22 = { kod: "2.2.RAF", goster: false }
let raf23 = { kod: "2.3.RAF", goster: false }
let raf24 = { kod: "2.4.RAF", goster: false }
let raf25 = { kod: "2.5.RAF", goster: false }


let raf31 = { kod: "3.1.RAF", goster: false }
let raf32 = { kod: "3.2.RAF", goster: false }
let raf33 = { kod: "3.3.RAF", goster: false }
let raf34 = { kod: "3.4.RAF", goster: false }
let raf35 = { kod: "3.5.RAF", goster: false }


let raf41 = { kod: "4.1.RAF", goster: false }
let raf42 = { kod: "4.2.RAF", goster: false }
let raf43 = { kod: "4.3.RAF", goster: false }
let raf44 = { kod: "4.4.RAF", goster: false }
let raf45 = { kod: "4.5.RAF", goster: false }


let raf51 = { kod: "5.1.RAF", goster: false }
let raf52 = { kod: "5.2.RAF", goster: false }
let raf53 = { kod: "5.3.RAF", goster: false }
let raf54 = { kod: "5.4.RAF", goster: false }
let raf55 = { kod: "5.5.RAF", goster: false }

let raflar = [
    [raf51, raf52, raf53, raf54, raf55],
    [raf41, raf42, raf43, raf44, raf45],
    [raf31, raf32, raf33, raf34, raf35],
    [raf21, raf22, raf23, raf24, raf25],
    [raf11, raf12, raf13, raf14, raf15]];

function rafOlustur() {
    console.clear();
    let satir = "";
    for (let i = 0; i < raflar.length; i++) {
        for (let j = 0; j < 5; j++) {
            satir += "|" + (raflar[i][j].goster ? raflar[i][j].kod : "---") + "";
        }
        console.log(satir);
        console.log("--------------------");
        satir = "";
    }
}

function kodBul(kitapIsmi) {
    let rafKod=null;
    kitaplar.forEach(function (kitap) {
        if (kitap.isim.toUpperCase().includes(kitapIsmi.toUpperCase(), 0)) {
            rafKod=kitap.raf;
        }
    });
        return rafKod;
}

function raftaGoster(rafKodu) {
    for (let i = 0; i < raflar.length; i++) {
        for (let j = 0; j < 5; j++) {
            if (raflar[i][j].kod == rafKodu) {
                raflar[i][j].goster = true;
                break;
            }
        }
    }
}
rafOlustur();

let kitapIsmi = prompt("Lütfen bir kitap ismi giriniz.");
let rafKod = kodBul(kitapIsmi);
console.log(rafKod);
if (rafKod != null) {
    raftaGoster(rafKod);
    rafOlustur();
} else {
    alert("Girdiğiniz kitap kütüphanemizde bulunmamaktadır :( ")
}




//! String Sınıfının Metotları

let kurs ="Modern Web Geliştirme Kursu";
let tarih ="2023";

// charAt()
// concat()
// indexof()
// lastindexof()
// toUpperCase()
// toLowerCase()
// trim()
// slice()
// substring()
// replace()
// split()
// valueOf()
// startsWith()
// endsWith();


//CHAR-AT 
// let karakter = kurs.charAt(5)
// console.log(karakter);


//CONCAT
// let sonuc = kurs.concat( " ",tarih, "Enes");
// console.log(sonuc);

// INDEX-OF
// let index = kurs.indexOf("W");
// console.log(index);


//LAST-INDEX-OF
// let index = kurs.lastIndexOf("Kursu");
// console.log(index);


//TO-UPPER-CASE
// let sonuc = kurs.toUpperCase();
// console.log(kurs);
// console.log(sonuc);


//TO-LOWER-CASE
// let sonuc = kurs.toLowerCase();
// console.log(sonuc);


// TRİM
// console.log(kurs.trim());


//SLİCE
// console.log(kurs);
// console.log(kurs.slice(22,27));



//SUBSTRİNG 
// console.log(kurs);
// console.log(kurs.substring(0,5));



//REPLACE
// console.log(kurs);
// console.log(kurs.replace("Modern","Güncel"));



//SPLİT
// console.log(kurs);
// let dizi = kurs.split(" ");
// console.log(dizi);


//VALUE-OF
// console.log(kurs.valueOf());


//STARTS-WİTH
// console.log(kurs);
// console.log(kurs.startsWith("M"));


//ENDS-WİTH
// console.log(kurs);
// console.log(kurs.endsWith("Kursu"));





// Math Sınıfı Metotları 

// 1. Floor : verilen ondalıklı sayıyı aşağı yuvarlar
// 2. Ceil  : verilen ondalıklı sayıyı yukarı yuvarlar.
// 3. Round : kendisine en yakın tam sayıyı kontrol ederek aşağı ya da yukarı yuvarlama yapar

// 4. Max   :  verilen sayı değerlerinin en büyüğünü bulur
// 5. Min   :  verilen sayı değerlerinin en küçüğünü bulur

// 6. Random :  
// 7. Abs  : Mutlak deger almak için kullanılır
// 8. Sqrt : karekök almak için kullanılır
// 9. Pow  : üssünü almak için kullanılır

// ---> PI Sayısı

// console.log(window);

// let a =3.50 ;
// let b =-12 ;

// console.log(Math.floor(a));

// console.log(Math.ceil(a));

// console.log(Math.round(a));

// console.log(Math.max(1,2,3,4,15));

// console.log(Math.min(1,2,3,4));

// console.log(Math.abs(b));

// console.log(Math.sqrt(81));

// console.log(Math.pow(5,4));

// console.log(Math.PI);

// let randomDeger = Math.random();
// let sonuc = randomDeger*1000000;
// let sonucYuvarla = Math.floor(sonuc);


// console.log(randomDeger);
// console.log(sonucYuvarla);
// console.log(sonuc);

// console.log(Math.floor(Math.random()*100));




// Date Kullanımı 

// let tarih = new Date(2007,11,19,14,38,24);
// console.log(tarih);

// let tarih = new Date();
// console.log(tarih.toString());
// console.log(typeof tarih.toString());

// console.log(tarih);

// console.log(tarih.getFullYear());

// console.log(tarih.getDate());

// console.log(tarih.getDay());

// console.log(tarih.getHours();

// console.log(tarih.getMilliseconds());

// console.log(tarih.getMinutes());

// console.log(tarih.getMonth()+1);

// console.log(tarih.getSeconds());

// console.log(tarih.toLocaleDateString());

// console.log(tarih.toLocaleTimeString());

// console.log(tarih.toLocaleString());


//Set Metotları

// console.log(tarih);
// tarih.setHours(15);
// tarih.setDate(26);
// tarih.setMonth(11);
// tarih.setMinutes(50);

// tarih.setHours(tarih.getHours()+2)
// console.log(tarih);



// Değer ve Referans Tipler

// let a = 7 ;
// let b = a ;

// console.log("a : " + a);
// console.log("b : " + b);

// console.log("-----------------------");

// b = 10;
// console.log("a : " + a);
// console.log("b : " + b);

// let dizi1 = [1, 2, 3];
// let dizi2 = [1, 2, 3];
// let dizi2 = dizi1;

// if (dizi1 == dizi2){
//     console.log("esittir");
// }else{
//     console.log("esit degildir");
// }

// console.log(dizi1);
// console.log(dizi2);


// let dizi1 = [1,2,3];
// let dizi2 = dizi1;
// let dizi3 = dizi2

// dizi3.push(23);

// console.log(dizi1);
// console.log(dizi2);
// console.log(dizi3);


//! Selectors (Seçiciler) - Style Özellikleri

//classname , id , tag name

//getElementById : id ye göre elementi yakalar.
//getElementByClassName : class ismine göre yakalar.
// getElementByTagName : etiket ismine göre yakalar.

// const button = document.getElementById("todoAddButton");

// console.log(button);
// console.log(button.id);
// console.log(button.getAttribute("id"));

// console.log(button.className);
// console.log(button.getAttribute("class"));

// const classListesi = button.classList[3];
// const classListesi = button.classList[2];

// const classListesi = button.classList;

// classListesi.forEach(function(className){
//     console.log(className);
// })

// console.log(classListesi);

// let buttonText = button.textContent;
// let buttonText2 = button.innerHTML;

// console.log(buttonText);
// console.log(buttonText2);

// button.textContent="<b>Todo Ekleyin</b>";

// const todoList =Array.from( document.getElementsByClassName("list-group-item"));
// todoList.forEach(function(todo) {
//     console.log(todo.textContent );
// });
// console.log(todoList);


// const forms = Array.from(document.getElementsByTagName("form"));
// forms.forEach(function(form){
//     console.log(form);
// })
// console.log(forms[1]);


// const todoList = document.getElementsByTagName("li");
// console.log(todoList);

// getElementById - getElementByClassName - getElementByTagName

// querySelector - querySelectorAll

//! const clearButton = document.querySelector("#todoClearButton");
//! console.log(clearButton);

// console.log(document.getElementById("todoClearButton"));

//! const todoList = document.querySelector(".list-group")
//! console.log(todoList);


//! const todoList = document.querySelectorAll(".list-group-item")[1];
//! console.log(todoList);


// const todoList =Array.from(document.querySelectorAll("li:nth-child(even)"));

// todoList.forEach(function(todo){
//     todo.style.backgroundColor = "lime";
// })

// console.log(todoList);

// const todo = document.querySelectorAll(".list-group-item")[0];
// const todoList = document.querySelector(".list-group")
// const clearButton =document.querySelector("#todoClearButton")

// console.log(clearButton);

// todo.style.color = "red";
// todo.style.backgroundColor = "lightblue";
// todo.style.fontWeight = "bolder";
// todo.style.paddingTop = "20px";
// todo.style.paddingLeft = "80px";

// todoList.style.marginTop = "60px";
// // todoList.style.marginLeft = "100px";


// clearButton.style.backgroundColor="red";
// clearButton.style.fontWeight = "bold";
// clearButton.style.letterSpacing = "5px";
// clearButton.style.borderRadius="80px"; 


// HTML Elementleri Üzerinde Gezinmek.

// const todo = document.querySelector(".list-group-item");
// const todoList = document.querySelector(".list-group");
// const card = document.getElementsByClassName("card")[0];
// const todoLastChild = document.querySelector(".list-group-item:nth-child(4");
// const card = document.querySelector(".card");

// const row = document.querySelector(".row")

// let value;

//Anneden çocuklara erişmek.

// value = todoList;
// value = todoList.children[0];
// value = todoList.children[3];
// value = todoList.children[todoList.children.length - 1];
// value = todoList.children[3].textContent = "Değişti";

// value = Array.from(todoList.children);

// value.forEach(function(todo){
//     console.log(todo.textContent);
// })


//Çocuktan anneye erişmek.

// value = todo;
// let ul = todo.parentElement;
// let cardBody = ul.parentElement;
// let cardElement = cardBody.parentElement;
// let row = cardElement.parentElement;
// let container = row.parentElement;



//Kardeşler arasında gezinmek.
// value = todo;
// value = todo.nextElementSibling.nextElementSibling.nextElementSibling;

// value = todoLastChild;
// value = todoLastChild.previousElementSibling.previousElementSibling.previousElementSibling.nextElementSibling.previousElementSibling;

// value = row.children[0].children[3].children[0].textContent="Todo listesi başlığı değişti";

// console.log(value);



// ! Dinamik olarak element oluşturmak

// const cardBody = document.querySelectorAll('.card-body')[1];
// const todoList = document.querySelector(".list-group");

// const link = document.createElement("a");
// link.id = "goBlogWebSite";
// link.className = "btn btn-dark btn-sm mt-3";
// link.href = "https://www.instagram.com";
// link.target = "blank";
// link.innerHTML = 'İnstagrama git';

// // <li class="list-group-item d-flex justify-content-between">Todo 3
// // <a href="#" class="delete-item">
// //    <i class="fa fa-remove"></i>
// // </a>
// // </li>

// cardBody.appendChild(link);


// const todo = document.createElement("li");
// const todoLink = document.createElement("a");
// const i = document.createElement("i");

// todo.className = "list-group-item d-flex justify-content-between";
// todo.innerHTML = "Todo 5";

// todoLink.href = "#";
// todo.className = "delete-item";


// i.classList = "fa fa-remove";

// todoLink.appendChild(i);
// todo.appendChild(todoLink);

// console.log(link);




// Elementleri Değiştirmek 

// const cardBody = document.querySelectorAll(".card-body")[1];
// <h5 class="card-title">Todo Listesi </h5>

// const newTitle = document.createElement("h2");
// newTitle.className="card-title";
// newTitle.textContent="Todo Listesi - Yeni";

// cardBody.removeChild(newTitle,cardBody.childNodes)[1]; 


// const clearButton = document.querySelector("#todoClearButton");

// clearButton.addEventListener("click",changeTitle);

// function changeTitle(e){
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.target.textContent);
//     console.log(e.target.className);
// }


//! Mause Eventları

//DOMContentLoaded
//load
//click
//dblclick
//mouseover
//mouseout
//mouseenter
//mouseleave

// window.addEventListener("load",run);

// function run(){
//     console.log("Sayfa Yüklendi");
// }


// const cardTitle = document.querySelectorAll(".card-title")[1];
// const cardBody = document.querySelectorAll(".card-body")[1];

// cardBody.addEventListener("mouseenter", run);
// cardBody.addEventListener("mouseleave", run);


// function run(e) {
//     console.log(e.type);
// }




//! Klavye Eventları 

//keypress : harf ve sayılarda geçerlidir

//keydown : herşeyde çalışır

//keyup  : elini tuştan kaldırdığında çalışır

// document.addEventListener("keydown", run);

// function run(e) {
//     console.log(e.keyCode);
//     if (e.keyCode == 116) {
//         alert("Sayfa yenileme engellendi!");
//     }
//     e.preventDefault();
// }


// const cardTitle = document.querySelectorAll(".card-title")[0];
// const input = document.querySelector("#todoName");
// console.log(input);
// input.addEventListener("keyup",run);

// function run(e){
//     cardTitle.textContent = e.target.value;
// }





//! İnput Events

//focus 
//blur
//copy
//paste
//cut
//select


// const todo = document.querySelector("#todoName");

// todo.addEventListener("focus", run);
// todo.addEventListener("blur",run);
// todo.addEventListener("copy",run);
// todo.addEventListener("paste",run);
// todo.addEventListener("cut",run);
// todo.addEventListener("select", run);


// function run(e){
//     console.log(e.type);
// }




//! Session Storage Kullanımı 

Değer Ekleme
sessionStorage.setItem("350","Enes");
sessionStorage.setItem("216","Yasin");
sessionStorage.setItem("154","Bilal");
sessionStorage.setItem(552,37);

Değer Silme
sessionStorage.removeItem("154");

let value =  sessionStorage.getItem("350");
if(value ===null){
    console.log("Değer bulunamadı.");
}else{
    console.log("Değer bulundu :",value);
}


Hepsini Silme
sessionStorage.clear();


let value = sessionStorage.getItem(552);
console.log(typeof value);


Session Storage - Array Yazdırma

let names = ["Ali","Enes","Kübra","Adem","Ayşenur"];
sessionStorage.setItem("names",JSON.stringify(names));

let value = JSON.parse(sessionStorage.getItem("names"));
value.forEach(function(name){
    console.log(name);
})

Local Storage Kullanımı

Değer Ekleme
localStorage.setItem("motion1","Push up");
localStorage.setItem("motion2","Barfix");
localStorage.setItem("motion3","Burpee");
localStorage.setItem("motion4","Squat");


Değeri Almak

let value = localStorage.getItem("motion1");
console.log(value);

Değer Silmek
localStorage.removeItem("motion4");

Tümünü Temizle
localStorage.clear();

localStorage.clear();
let motions = ["Push up","Barfix","Burpee","Squat","Chin Up"];
localStorage.setItem("motions",JSON.stringify(motions));

let value =  JSON.parse(localStorage.getItem("motions"));

value.forEach(function(motion){
    console.log(motion);
});




//Tüm Elementleri Seçmek

const form = document.querySelector("#todoAddForm");
const addInput = document.querySelector("#todoName");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const clearButton = document.querySelector("#clearButton");
const filterInput = document.querySelector("#todoSearch");

let todos = [];

runEvents();

function runEvents() {
    form.addEventListener("submit", addTodo);
    document.addEventListener("DOMContentLoaded",pageLoaded);
    secondCardBody.addEventListener("click",removeTodoToUI);
    clearButton.addEventListener("click",allTodosEverywhere);
    filterInput.addEventListener("keyup",filter);
}

function pageLoaded(){
    checkTodosFromStorage();
    todos.forEach(function(todo){
       addTodoToUI(todo);
    });
}

function filter(e){
    const filterValue = e.target.value.toLowerCase().trim();
    const todoListesi = document.querySelectorAll(".list-group-item");
    
    if(todoListesi.length>0){
        todoListesi.forEach(function(todo){
            if(todo.textContent.toLowerCase().trim().includes(filterValue)){
                //
                todo.setAttribute("style","display : block");
            }else{
                todo.setAttribute("style","display : none !important");
            }
        });

    }else{
        showAlert("warning","Filtreleme yapmak için en az bir todo olmalıdır!");
    }

}

function allTodosEverywhere(){
   const todoListesi = document.querySelectorAll(".list-group-item");
   if(todoListesi.length>0){
    //Ekrandan Silme
    todoListesi.forEach(function(todo){
        todo.remove();
    });

    //Storage'dan Silme
    todos=[];
    localStorage.setItem("todos",JSON.stringify(todos));
    showAlert("success","Başarılı bir şekilde silindi");
   }else{
    showAlert("warning","Silmek için en az bir todo olmalıdır");
   }
}

function removeTodoToUI(e){
    if(e.target.className==="fa fa-remove"){
        //Ekrandan Silme
       const todo = e.target.parentElement.parentElement;
       todo.remove();

       //Storage'dan Silme
       removeTodoToStorage(todo.textContent);
       showAlert("success","Todo başarıyla silindi.");
    }
}

function removeTodoToStorage(removeTodo){
    checkTodosFromStorage();
    todos.forEach(function(todo,index){
        if(removeTodo===todo){
            todos.splice(index,1);
        }
    });
    localStorage.setItem("todos",JSON.stringify(todos));
}

function addTodo(e) {
    const inputText = addInput.value.trim();
    if (inputText == null || inputText == "") {
        showAlert("warning", "Lütfen boş bırakmayınız!");
    } else {
        //Arayüze ekleme
        addTodoToUI(inputText);
        addTodoToStorage(inputText);
        showAlert("success", "Todo Eklendi.");
    }

    //storage ekleme
    e.preventDefault();
}

function addTodoToUI(newTodo) {
    
<li class="list-group-item d-flex justify-content-between">Todo 1
                            <a href="#" class="delete-item">
                                <i class="fa fa-remove"></i>
                            </a>
                        </li>
                        
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between";
    li.textContent = newTodo;

    const a = document.createElement("a");
    a.href = "#";
    a.className = "delete-item";

    const i = document.createElement("i");
    i.className = "fa fa-remove";

    a.appendChild(i);
    li.appendChild(a);
    todoList.appendChild(li);

    addInput.value = "";



}

function addTodoToStorage(newTodo) {
    checkTodosFromStorage();
    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function checkTodosFromStorage() {
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
}

function showAlert(type, message) {
    
    <div class="alert alert-warning" role="alert">
    This is a warning alert—check it out!
  </div>
    const div = document.createElement("div");
    //   div.className="alert alert-"+type;
    div.className = `alert alert-${type}`; //litirel template
    div.textContent = message;

    firstCardBody.appendChild(div);

    setTimeout(function(){
        div.remove();
    },2500);
}



//! Arrow Function

// function yazdir(){
//     console.log("Merhaba");
// }

// yazdir();


// const yazdir =()=>{
//     console.log("Merhaba");
// }
// yazdir();


// const yazdir = (firstName,lastName)=> console.log("Merhaba",firstName,lastName);

// yazdir("Umut","Can")

// const yazdir = firstName => console.log("Merhaba",firstName);
// yazdir("Umut");

const kupAl = (x)=>  x*x*x

// document.addEventListener("click",()=>{
// })

console.log("Değer" , kupAl(3));



//! Destructing Kullanımı

// let langs = ["C#", "C++", "JavaScript", "Python"]
// let lang1, lang2, lang3, lang4

// lang1 = langs[0]
// lang2 = langs[1]
// lang3 = langs[2]
// lang4 = langs[3]

// [lang1, lang2, lang3, lang4] = langs

// console.log(lang1, lang2, lang3, lang4);


// const hesapla = (a, b) => {
//     const toplam = a + b
//     const cikar = a - b
//     const carp = a * b
//     const bol = a / b

//     const dizi = [toplam,cikar,carp,bol]
//     return dizi
// }

// [a,b,c,d] =  hesapla(10,2);

// console.log(a,b,c,d);


// const person = {
    // firstName: "Umut",
    // lastName: "Can",
    // salary: 5000,
    // age: 23
// }

// let isim, soyisim, maas, yas

// isim = person.firstName
// soyisim = person.lastName
// maas = person.salary
// yas = person.age

// let { firstName, lastName, salary, age } = person

// console.log(firstName, lastName, salary, age)



//! Spread Operatörü

// let numbers = [10, 20, 30, 40];
// function add(a, b, c, d) {
// console.log(a + b + c + d);
// }

//Eski yöntem
// add(numbers[0], numbers[1], numbers[2], numbers[3]);


//Yeni Yöntem
// add(...numbers)
// ...numbers  --- add(numbers[0], numbers[1], numbers[2], numbers[3]);


// const diller1 = ["Java", "C#"]
// const diller2 = ["Php", "Python", diller1[0], diller1[1]]
// const diller2 = ["Php", "Python", ...diller1]

// console.log(diller2);


// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// let [a, b, ...kalanSayilar] = numbers
// console.log(a, b, kalanSayilar);  

// const array1 = ["Umut", "Ecrin", "Emir", "Fatma"]
// let array2 = []

// array2[0] = array1[0]
// array2[1] = array1[1]
// array2[2] = array2[2]
// array1[3] = array1[3]

// const array2 = [...array1]

// console.log(array2);



//! For in & For of döngüleri 

// let names = ["Umut", "Emir", "Ecrin", "Fatma", "Ceylin"];

// names.forEach(function(name){
//     console.log(name);
// })
// names.forEach(name => console.log(name))


// For in döngüsü
// değişken tanımlama , in , diziİsmi

// for (let name in names) {
//     console.log(name, names[name]);
// }

//For of döngüsü

// for (let isim of names) {
    // console.log(isim, names.indexOf(isim));
// }

//! MAP KULLANIMI

//let array = [1,2,3]

// const map1 = new Map();

//SET
// map1.set(1, "Enes")
// map1.set(true, 5)
// map1.set([1, 2, 3,], { firstName: "Umut", lastName: "Can" })
// map1.set(true,"5")

// map1.set(34, "İstanbul")
// map1.set(35, "İzmir")
// map1.set(06, "Ankara")
// map1.set(01, "Adana")

//GET
// console.log(map1.get(34));
// console.log(map1.get(34));
// console.log(map1.get(35));


//SİZE
// value =  map1.size;
// console.log(value);


//DELETE
// value = map1.delete(35)
// console.log(map1.size);
// console.log(value);



//HAS
// console.log(map1.has(35));


//For Of map üzerinde dönebilme
// for (let key, value of map1){ //Destructing
//     console.log(value);
// }

// let array = [34, "İstanbul"];
// let [a,b] = array;
// console.log(a,b);


// const keys = Array.from(map1.keys());
// keys.forEach((key)=>{
//     console.log(key,map1.get(key));
// })



// for(let key of map1.keys()){
//     console.log(key);
// }


// for(let value of map1.values()){
//     console.log(value);
// }


// let array = [1,2,3,4,5,6];


//MAPTEN ARRAY'E ÇEVİRMEK

// const array2 = [
//     [34, "İstanbul"],
//     [35, "İzmir"],
//     [06, "Ankara"],
//     [01, "Adana"]
// ]

// const array = Array.from(map1);

// array.forEach((value) => {
//     console.log(value[0], value[1]);
// })

//ARRAYİ MAP'E ÇEVİRMEK

// const array2 = [
//     [34, "İstanbul"],
//     [35, "İzmir"],
//     [06, "Ankara"],
//     [01, "Adana"]
// ]

// const myMap = new Map(array2);

// const myArray = Array.from(myMap);
// console.log(myArray);

// let key = [1,2,3];

// map1.set(34, "İstanbul")
// map1.set(35, "İzmir")
// map1.set(06, "Ankara")
// map1.set(01, "Adana")
// map1.set(key,"Array")

// console.log(map1.get(key))




//! Set Kullanımı

// const set = new Set();

//add metodu

// set.add("true")
// set.add(3.14)
// set.add("Umut")
// set.add("Umut")
// set.add("Umut")
// set.add("Umut")
// set.add("Umut")
// set.add("Umut")
// set.add(5)
// set.add({username :"Umut" , password :"1"});
// set.add([1,2,3,4])


//Size
// console.log(set.size);



//Delete
// set.delete("Umut")
// set.delete(5)
// set.delete([1,2,3,4])
// console.log(set.size);


//Has
// console.log(set.has("Can"));


//For of döngüsü
// for(let value of set){
//     console.log(value);
// }

// const values = Array.from(set);
// values.forEach((value)=>{
// console.log(value);
// })   


//Set'den  array oluşturma
// const values =Array.from(set);


//Array'den set oluşturna
// let array = [1,"Umut",true,"Mustafa",15,[1,2,3]]
// const newSet = new Set(array)
// console.log(newSet);



//  ! Template Literals Kullanımı 

// function write(firstName, lastName) {
    // console.log("İsim : " + firstName + " " + "Soyisim :" + lastName);
    //Template literals ile kullanmak 
//     console.log(`
//     İsim : ${firstName}
//     Soyisim : ${lastName}`
    
//     )
// }

// write("Umut", "Can");


// function getUserById(userId){
//     console.log(`http://localhost:8088/users/${userId}`)
// }

// getUserById(5);




//OOP GİRİŞ
// class Insan { // sınıf
//     constructor(isim, soyisim, sinif, no) { // yapıcı metot  
//         this.isim = isim;
//         this.soyisim = soyisim;
//         this.sinif = sinif;
//         this.no = no;
//     }
//     bilgileriGoster() {
//         console.log(`
//             İsim :${this.isim} 
//             Soyisim :${this.soyisim} 
//             Sınıf :${this.sinif} 
//             No :${this.no}`
//         )
//     }

// }
// const insan1 = new Insan("Umut", "Can", "12-B", 112);
// const insan2 = new Insan("Emir","Boztaş","10-A",155);
// insan1.bilgileriGoster();
// insan2.bilgileriGoster();




//! Static Anahtarı Kullanımı 

//! Bir function veya özellik static ise CLASS'a özgüdür
//! değilse nesneye özgüdür.

// class StringUtil{
//  static   isNull(){

//     }
//     getCharacterLength(){

//     }
// }

// class Insan {

//     static languagesCount=10;

//     constructor(firstName, lastName, salary) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.salary = salary;
//     }

//     writeInfo(){
//         console.log(this.firstName,this.lastName,this.salary,this.languagesCount);
//     }
// }

// const insan1 = new Insan("Umut","Can",10000);
// insan1.writeInfo();

// console.log(Insan.languagesCount);

// class Matematik{

//     static topla(a,b){
//         console.log(a+b);
//     }

//     cikar(a,b){
//         console.log(a-b);
//     }

//    static carp(a,b){
//         console.log(a*b);
//     }

//     bol(a,b){
//         console.log(a/b);
//     }
// }

// const matematik = new Matematik();
// matematik.topla(10,5);
// matematik.carp(5,7)

//! Static olarak tanımlanmamışsa NESNE üzerinden erişilir.
//? Static ise CLASS İSMİ üzerinden erişilir.

// Matematik.topla(10,7);




//! Inheritance(Miras Alma)

// class Person {
//     //Araba
//     firstname = "Umut";


//     //Ev   
//     write() {
//         console.log("Person Write :", this.firstname);
//     }
// }

// class Student extends Person {

//     write() {
//         console.log("Person sınıfından geldi", this.firstname);
//         (super.write());
//     }

// }
// const student1 = new Student();
// student1.write();
// // const person = new Person();
// // person.write();

// 

// //! This & Super & Super() 

// //this

// //! Inheritance ile hayatımıza giren kelimler
// // super : üst sınıfı gösterir
// // super() :


// class Person {

//     constructor(firstName , lastName , salary){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.salary = salary;
//     }

//     writeInfo(){
//         console.log(this.firstName,this.lastName,this.salary);
//     }

// }

// class  Student extends Person{
    
//     constructor(firstName , lastName , salary){
//         super(firstName,lastName,salary); 
//     }

//     writeInfo(){
//         super.writeInfo();  
//     }

// }

// class Engineer extends Person{
//     constructor(firstName,lastName,salary){
//         super(firstName,lastName,salary);
//     }
//     writeInfo(){
//         super.writeInfo();
//     }
// }

// const student1 = new Student("umut","can",10000 );
// const engineer = new Engineer("emir","boztas",7000);
// student1.writeInfo();
// engineer.writeInfo();



// ! ASENKRON 💥 


// console.log("Umut");

// setTimeout(() => {
//    console.log();("Süre doldu ve çalıştı");
// }, 1000);

// setTimeout(() => {
//     console.log("500 ms de bekledi ve çalıştı");
// }, 500);

// console.log("Can");

//http istekleri


const users = [
    {
        userId: 5,
        post: "Umut Post 1 "
    },

    {
        userId: 5,
        post: "Umut Post 2 "
    },

    {
        userId: 5,
        post: "Umut Post 3 "
    },
    {
        userId: 6,
        post: "Can Post 4 "
    },
    {
        userId: 7,
        post: "Atlas Post 5 "
    }
]


//user id
//post by user id 

function getUserId() {
    setTimeout(() => {
        //Servise gittik ve cevabı aldık.
        return 5;
    }, 1000);
}

function getPostByUserId(userId) {
    console.log(userId);
    //Gerçek bir api'ya istek atacaksınız.
    setTimeout(() => {
        users.forEach((user) => {
            if (user.userId === userId) {
                console.log(user.post);
            }
        })
    }, 500);

}

let userId = getUserId();
getPostByUserId(userId);


*/

// ! AJAX NEDİR? 

// function prepareURL(url, id) {
//     if (id === null) {
//         return url;
//     }
//     return `${url}?postId=${id}`
// }

// function getComments(url, id) {
//     let newURL = prepareURL(url , id);
//     const xhr = new XMLHttpRequest();
//     xhr.addEventListener("readystatechange", () => {
//         if (xhr.readyState === 4 && xhr.status === 200) {
//             console.log(JSON.parse(xhr.responseText));
//         }
//     })
//     xhr.open("GET",newURL)
//     xhr.send();
// }
// getComments("https://jsonplaceholder.typicode.com/comments", 1);


//! KULLANIMI
// function getData(url){
//     const xhr = new XMLHttpRequest();
//     xhr.addEventListener("readystatechange" , ()=>{
//         if(xhr.readyState===4 && xhr.status===200){
//             console.log(JSON.parse(xhr.response));
//         }
//     })
//     xhr.open("GET",url);
//     xhr.send();
// }
// getData("https://jsonplaceholder.typicode.com/posts")
