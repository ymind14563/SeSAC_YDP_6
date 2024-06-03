const text = document.getElementsByTagName('span');
console.log(text);
text[0].textContent = `맛없다 ㅡㅡ`;
text[0].style.color = "red";
text[0].style.fontWeight = `bold`;