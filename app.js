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

*/


let urun1 = {
    isim: "ACER Swift",
    kategori: "Teknoloji",
    fiyat: 6.219
}
let urun2 = {
    isim: "ACER Nitro 5",
    kategori: "Teknoloji",
    fiyat: 15.475
}
let urun3 = {
    isim: "LENOVO V15",
    kategori: "Teknoloji",
    fiyat: 10.999
}
let urun4 = {
    isim: "LENOVO V14",
    kategori: "Teknoloji",
    fiyat: 4.399
}
let urun5 = {
    isim: "LENOVO Idepad",
    kategori: "Teknoloji",
    fiyat: 4.510
}
let urunler = [urun1, urun2, urun3, urun4, urun5];
let filtreliUrunler = [];
let kullaniciUrunIsmi = prompt("Bir ürün ismi giriniz");

filtreliUrunleriDoldur(urunler);
filtreliUrunleriYazdir(filtreliUrunler);


function filtreliUrunleriDoldur(urunler) {
    urunler.forEach(function (urun) {
        if (urun.isim.toUpperCase().includes(kullaniciUrunIsmi.toUpperCase(), 0)) {
            filtreliUrunler.push(urun);
        }
    });

}

function filtreliUrunleriYazdir(urunler) {
    urunler.forEach(function (urun) {
        console.log("---------------------------------------");
        console.log("|" + urun.isim + "|" + urun.fiyat + "|" + urun.kategori);
        console.log("---------------------------------------");
    });
}