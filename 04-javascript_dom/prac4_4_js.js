const section = document.querySelector("section");
const icecreams = [
  "내가 아인슈페너?!",
  "엄마는 외계인",
  "민트 초콜릿 칩",
  "뉴욕 치즈케이크",
  "아이스 초당옥수수",
  "초콜릿 무스",
  "체리쥬빌레",
  "뮤! 넌 내거야",
  "오레오 쿠키 앤 크림",
];


icecreams.forEach((icecream, idx) => {

    const article = document.createElement(`article`);
    article.classList.add(`article-box`);
    section.appendChild(article);

    const img = document.createElement(`img`);
    img.classList.add(`img-box`);
    img.src = `./prac4_4_image/icecream${idx + 1}.png`;
    article.appendChild(img);

    const h3 = document.createElement(`h3`);
    h3.classList.add(`text-center`);
    h3.textContent = `Top ${idx + 1}`;
    article.appendChild(h3);

    const div = document.createElement(`div`);
    div.classList.add(`text-center`);
    div.textContent = icecream;
    article.appendChild(div);
})
