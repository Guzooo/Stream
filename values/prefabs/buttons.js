// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Create container div
    const container = document.createElement('div');
    container.className = 'button-container';

    // Create first button
    const button1 = document.createElement('button');
    button1.textContent = 'Śledzone gry';
    button1.className = 'game-block';

    // Create second button
    const button2 = document.createElement('button');
    button2.textContent = 'Śledzeni Twórcy';
    button2.className = 'game-block';

    // Create third button
    const button3 = document.createElement('button');
    button3.textContent = 'Tworzone gry';
    button3.className = 'game-block';

    // Append buttons to the container
    container.appendChild(button1);
    container.appendChild(button2);
    container.appendChild(button3);

    // Append container to the body or any other element you want
    document.body.appendChild(container);
});
