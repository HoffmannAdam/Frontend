//#region 
const titles = [
  "Az árnyak városa","Tükör a tóban","Szélcsend","Köd a völgyben","Ezüstpart",
  "Madarak útja","Fénylő éj","Fekete folyó","Hajnali lépések","Aranykert",
  "Késő nyár","A csillag pereme","Hamu és hó","A kulcs","Ólomerdő",
  "Vándorhold","A hetedik torony","Tűzvonal","Futóhomok","A vonal túloldala",
  "Idegpályák","Zárt szoba","Kék horizont","Visszhang","Tékozló idő",
  "A kód","Köztes állomás","Szívhang","Másvilág","Tört fény"
];

const authors = [
  "Nagy Anna","Kovács Péter","Szabó Dóra","Tóth Bence","Kiss Júlia",
  "Varga Márton","Molnár Eszter","Farkas Gergő","Horváth Lilla","Balogh Zsolt",
  "Papp Katalin","Takács András","Juhász Nóra","Mészáros Áron","Oláh Réka",
  "Simon Levente","Fekete Sára","Bodnár Gábor","Szalai Emma","Szőke Tamás"
];

const genres = [
  "szépirodalom","krimi","fantasy","sci-fi","romantikus",
  "történelmi","életrajz","ismeretterjesztő","thriller","ifjúsági"
];

const languages = ["magyar","angol","német","francia","spanyol"];

const randInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const pick = arr => arr[randInt(0, arr.length - 1)];

const makeIsbnLike = () =>
  "978-" +
  randInt(100, 999) + "-" +
  randInt(10, 99) + "-" +
  randInt(10000, 99999) + "-" +
  randInt(0, 9);

const priceToCategory = price =>
  price < 3000 ? "olcsó" : price < 6000 ? "közép" : "prémium";

const books = Array.from({ length: 30 }, (_, i) => {
  const title = titles[i % titles.length];
  const author = authors[randInt(0, authors.length - 1)];
  const year = randInt(1950, 2025);
  const pages = randInt(160, 720);
  const priceHUF = randInt(1500, 12000);
  const rating = (Math.round((Math.random() * 2 + 3) * 10) / 10); // 3.0–5.0
  const stock = randInt(0, 1) === 1 ? randInt(1, 40) : 0;

  return {
id: i + 1,
    title: title,
    author: author,
    year: year,
    genre: pick(genres),
    pages: pages,
    priceHUF: priceHUF,
    category: priceToCategory(priceHUF),
    rating: rating,
    language: pick(languages),
    isbn: makeIsbnLike(),
    stock: stock,
    available: stock > 0
  };
});

const totalPages = books =>
    books.reduce((sum, book) => sum + book.pages, 0);

const mostExpensiveTitle = books =>
    books.reduce((max, book) => max + book.priceHUF > max.priceHUF ? book : max).title;

const top3ByPages = books =>
    valami

const recommendedTitles = books =>
    valami

//#endregion
console.log(books);