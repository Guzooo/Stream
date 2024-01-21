const PrefabGenerateBoxes = (function () {
    return {
        addBoxItems
    };

    function addBoxItems(container, userData) {
        if (!container || !userData) {
            console.error('Invalid arguments');
            return;
        }

        userData.forEach(userData => {
            if (userData.user_id == User.getUserId()) {
                container.innerHTML += generateBox1(userData);
                container.innerHTML += generateBox2(userData);
            }
        });
    }

    function generateBox1(userData) {
        const boxTitle = userData.games_count;

        return `
            <div class="box1">
                <div class="box-title">Ilość gier w bibliotece: ${boxTitle}</div>
            </div>
        `;
    }

    function generateBox2(userData) {
        const boxSubtitle = userData.downloaded_games

        return `
            <div class="box2">
                <div class="box-title">Ilość pobranych gier: ${boxSubtitle}</div>
            </div>
        `;
    }
})();
