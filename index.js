// Remember to import the data and Dog class!
import Dog from "./Dog.js";
import data from "./data.js";
let profileNumber = 0;

// Buttons
const disLikeBtn = document.getElementById("dislike-btn");
const likeBtn = document.getElementById("like-btn");

function getNewDog() {
    let newDog = data[profileNumber];
    profileNumber++;
    return newDog;
}

let currentDog = new Dog(getNewDog());

console.log(currentDog);

disLikeBtn.addEventListener("click", (e) => {
    currentDog.renderNewDog(e);
    currentDog = new Dog(getNewDog());
    document.querySelector("main").innerHTML = currentDog.render();
});

likeBtn.addEventListener("click", (e) => {
    currentDog.renderNewDog(e);
    currentDog = new Dog(getNewDog());
    document.querySelector("main").innerHTML = currentDog.render();
});

document.querySelector("main").innerHTML = currentDog.render();
