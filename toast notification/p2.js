const btn = document.getElementById("btn");
const container = document.getElementById("container");

btn.addEventListener("click", () => {
    CreateNotifictaion()
});

function CreateNotifictaion() {
    const notif = document.createElement('div');
    notif.classList.add('toast');

    notif.innerText = "this challenge is crazy!";

    container.appendChild(notif);

    setTimeout(() => {
        notif.remove();
    }, 3000);
}