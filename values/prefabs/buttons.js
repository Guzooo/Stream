document.addEventListener('DOMContentLoaded', function () {
    // Placeholder value for userID (replace it with the actual logic to fetch userID from the database)
    const userID = 123;

    // Create container div
    const container = document.createElement('div');
    container.className = 'box-container';

    // Create first box
    const box1 = createBox('Śledzone gry', 'trackedGames');
    container.appendChild(box1);

    // Create second box
    const box2 = createBox('Śledzeni Twórcy', 'trackedCreators');
    container.appendChild(box2);

    // Create third box
    const box3 = createBox('Tworzone gry', 'createdGames');
    container.appendChild(box3);

    // Append container to the body or any other element you want
    document.body.appendChild(container);

    // Function to create a box with count
    function createBox(text, dataKey) {
        const box = document.createElement('div');
        box.className = 'box';

        const title = document.createElement('div');
        title.className = 'box-title';
        title.textContent = text;

        // Fetch count from the server based on userID and dataKey
        getCount(userID, dataKey).then(count => {
            const countBox = document.createElement('div');
            countBox.className = 'count-box';
            countBox.textContent = count;

            box.appendChild(countBox);
        });

        box.appendChild(title);

        return box;
    }

    // Function to fetch count from the server (replace it with actual logic)
    function getCount(userID, dataKey) {
        // Replace this with your actual logic to fetch count from the server
        // For now, using a dummy promise with a random count
        return new Promise(resolve => {
            const randomCount = Math.floor(Math.random() * 100);
            resolve(randomCount);
        });
    }
});
