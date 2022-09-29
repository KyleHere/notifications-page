let unread = document.querySelectorAll(".unread");
let unreadTotal = document.querySelector(".unread-total");
let markRead = document.querySelector(".mark-read");

let x = Number(unreadTotal.innerHTML);

for (let i = 0; i < unread.length; i++) {
    unread[i].addEventListener("click", function () {
        // if (x > 0) {
        this.classList.remove("unread");
        x--;
        unreadTotal.innerHTML = x;
        // }

    });
}

markRead.addEventListener("click", function () {
    unread = document.querySelectorAll(".unread");
    for (let i = 0; i < unread.length; i++) {
        unread[i].classList.remove("unread");
    }
    x = 0;
    unreadTotal.innerHTML = x;
});
