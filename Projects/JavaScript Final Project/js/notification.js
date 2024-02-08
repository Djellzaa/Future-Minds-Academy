let defaultNotifications = [
    "John Doe sent a message",
    "Someone viewed your profile",
    "John Doe sent a message",
    "Someone viewed your profile",
    "Another notification"
];
localStorage.setItem("notifications", JSON.stringify(defaultNotifications));

let notifications = JSON.parse(localStorage.getItem('notifications'));

let listElement = document.getElementById('notifications');
let countElement = document.getElementById('notificationCount');
let notificationBox = document.getElementById('not-box');

notifications.forEach((notification) => {
    let element = document.createElement('li');
    element.textContent = notification;
    listElement.appendChild(element);
});

countElement.textContent = notifications.length;

notificationBox.addEventListener('click', () => {
    notificationBox.classList.toggle('open');
});

document.addEventListener('click', (event) => {
    if (!notificationBox.contains(event.target)) {
        notificationBox.classList.remove('open');
    }
});

