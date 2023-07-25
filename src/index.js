const siteContent = {
  // BU NESNEYİ DEĞİŞTİRMEYİN
  nav: {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  cta: {
    h1: "Bu DOM Mükemmel",
    button: "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik":
      "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik":
      "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği":
      "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği":
      "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği":
      "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  iletisim: {
    "iletişim-h4": "İletişim",
    adres: "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    telefon: "+90 (123) 456-7899",
    email: "satis@birsirketsitesi.com.tr",
  },
  footer: {
    copyright: "Copyright Bir Şirket Sitesi 2022",
  },
  images: {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log("Proje açıldı!");

/* Kodlar Buradan aşağıya */
const navA = document.querySelectorAll("header nav a");
navA[0].textContent = siteContent.nav["nav-item-1"];
navA[1].textContent = siteContent.nav["nav-item-2"];
navA[2].textContent = siteContent.nav["nav-item-3"];
navA[3].textContent = siteContent.nav["nav-item-4"];
navA[4].textContent = siteContent.nav["nav-item-5"];
navA[5].textContent = siteContent.nav["nav-item-6"];

const headImg = document.getElementById("logo-img");
headImg.setAttribute("src", siteContent.images["logo-img"]);

const header1 = document.querySelector("section div h1");
header1.textContent = siteContent.cta["h1"];

const button1 = document.querySelector("section div button");
button1.textContent = siteContent.cta["button"];

const secImg = document.getElementById("cta-img");
secImg.setAttribute("src", siteContent.images["cta-img"]);

const header4 = document.querySelectorAll("div > h4");
header4[0].textContent = siteContent["ana-içerik"]["özellikler-h4"];
header4[1].textContent = siteContent["ana-içerik"]["hakkımızda-h4"];
header4[2].textContent = siteContent["ana-içerik"]["servisler-h4"];
header4[3].textContent = siteContent["ana-içerik"]["ürünler-h4"];
header4[4].textContent = siteContent["ana-içerik"]["vizyon-h4"];

const p1 = document.querySelectorAll("div > p");
p1[0].textContent = siteContent["ana-içerik"]["özellikler-içerik"];
p1[1].textContent = siteContent["ana-içerik"]["hakkımızda-içerik"];
p1[2].textContent = siteContent["ana-içerik"]["servisler-içeriği"];
p1[3].textContent = siteContent["ana-içerik"]["ürünler-içeriği"];
p1[4].textContent = siteContent["ana-içerik"]["vizyon-içeriği"];

const imgMiddle = document.getElementById("middle-img");
imgMiddle.setAttribute("src", siteContent.images["accent-img"]);

const ch4 = document.querySelector("section.contact h4");
ch4.textContent = siteContent.iletisim["iletişim-h4"];

const cp = document.querySelectorAll("section.contact p");
cp[0].textContent = siteContent["iletisim"]["adres"];
cp[1].textContent = siteContent["iletisim"]["telefon"];
cp[2].textContent = siteContent["iletisim"]["email"];

const footerA = document.querySelector("footer > a");
footerA.textContent = siteContent.footer["copyright"];
