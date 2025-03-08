import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const delay = parseInt(form.elements.delay.value, 10);
    const state = form.elements.state.value;

    createPromise(delay, state)
        .then((message) => {
            iziToast.success({
                title: "Success",
                message: message,
                position: "topRight",
            });
        })
        .catch((message) => {
            iziToast.error({
                title: "Error",
                message: message,
                position: "topRight",
            });
        });
});

function createPromise(delay, state) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (state === "fulfilled") {
                resolve(`✅ Fulfilled promise in ${delay}ms`);
            } else {
                reject(`❌ Rejected promise in ${delay}ms`);
            }
        }, delay);
    });
}
