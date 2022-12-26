const siteContent = { // BU NESNEYİ DEĞİŞTİRMEYİN
  "nav": {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  "cta": {
    "h1": "Bu DOM Mükemmel",
    "button": "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik": "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik": "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği": "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği": "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği": "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "iletisim": {
    "iletişim-h4": "İletişim",
    "adres": "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    "telefon": "+90 (123) 456-7899",
    "email": "satis@birsirketsitesi.com.tr",
  },
  "footer": {
    "copyright": "Copyright Bir Şirket Sitesi 2022",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('Proje açıldı!')


/* Kodlar Buradan aşağıya */
const navA=document.querySelectorAll("header nav a");

for(let i=0;i<navA.length;i++){
  let j = i+1;
  navA[i].textContent = siteContent.nav["nav-item-"+j];
  navA[i].setAttribute("class", "italic");
}

document.getElementById("logo-img").src = siteContent.images["logo-img"];

const sec1 = document.querySelector(".cta-text");
sec1.querySelector("h1").textContent = siteContent.cta["h1"];
sec1.querySelector("button").textContent = siteContent.cta["button"];

document.getElementById("cta-img").src = siteContent.images["cta-img"];

const sec2 = document.querySelectorAll(".top-content .text-content");
sec2[0].querySelector("h4").textContent = siteContent["ana-içerik"]["özellikler-h4"];
sec2[0].querySelector("p").textContent = siteContent["ana-içerik"][ "özellikler-içerik"];
sec2[1].querySelector("h4").textContent = siteContent["ana-içerik"]["hakkımızda-h4"];
sec2[1].querySelector("p").textContent = siteContent["ana-içerik"][ "hakkımızda-içerik"];

document.getElementById("middle-img").src = siteContent.images["accent-img"];

const sec2b = document.querySelectorAll(".bottom-content .text-content");
sec2b[0].querySelector("h4").textContent = siteContent["ana-içerik"]["servisler-h4"];
sec2b[0].querySelector("p").textContent = siteContent["ana-içerik"][ "servisler-içeriği"];
sec2b[1].querySelector("h4").textContent = siteContent["ana-içerik"]["ürünler-h4"];
sec2b[1].querySelector("p").textContent = siteContent["ana-içerik"][ "ürünler-içeriği"];
sec2b[2].querySelector("h4").textContent = siteContent["ana-içerik"]["vizyon-h4"];
sec2b[2].querySelector("p").textContent = siteContent["ana-içerik"][ "vizyon-içeriği"];

document.querySelector(".contact h4").textContent = siteContent["iletisim"]["iletişim-h4"];

const sec3 = document.querySelectorAll(".contact p");
sec3[0].textContent = siteContent["iletisim"][ "adres"];
sec3[1].textContent = siteContent["iletisim"]["telefon"];
sec3[2].textContent = siteContent["iletisim"]["email"];


