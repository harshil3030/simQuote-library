let orgData = "";
let quote = "";
let auther = "";
const btn = document.querySelector("#generate-btn");
const newQuote = () => {
  let rnd = Math.floor(Math.random() * 10);
  quote = orgData[rnd].text;
  auther = orgData[rnd].author;
};
async function Generate() {
  const data = await fetch("https://type.fit/api/quotes");
  orgData = await data.json();
  newQuote();
  console.log("after");
  const quoteh1 = document.querySelector(".quoteh1");
  const autherh1 = document.querySelector(".autherh1");
  quoteh1.innerHTML = `${quote}`;
  (auther === undefined) ? autherh1.innerHTML = `UnKnown` : autherh1.innerHTML = `${auther}`;
}
btn.addEventListener("click", Generate);
Generate();
