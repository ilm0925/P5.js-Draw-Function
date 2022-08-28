import App from "./app.js";


// 일차
document.querySelectorAll("button")[0].addEventListener("click", () => {
    new p5(new App().Liner_Function, "container")
});
// 이차
document.querySelectorAll("button")[1].addEventListener("click", () => {
    new p5(new App().quadratic_Function, "container")
});
//Sin함수
document.querySelectorAll("button")[2].addEventListener("click", () => {
    new p5(new App().Sin_Function, "container")
});

//Cos함수
document.querySelectorAll("button")[3].addEventListener("click", () => {
    new p5(new App().Cos_Function, "container")
});

//다시하기
document.querySelector("body > button").addEventListener("click", () => {
    location.reload();
});
