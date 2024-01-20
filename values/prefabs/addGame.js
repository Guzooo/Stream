const PrefabAddGames = (function() {
    return {
        addGames
    };

    function addGames(container, gamesData) {
        if (!container) {
            console.error('Invalid arguments');
            return;
        }

        gamesData.forEach(gameData => {
            if (gameData.userID == User.getUserId()) {
                container.innerHTML += generateGameBlock(gameData);
            }
        });
    }

    function generateGameBlock(gameData) {
        return `
           <div class="game-block">
                <p>
                    ${gameData.favourite ? '<span class="material-icons">star</span>' : ''}
                    <strong>${gameData.gameName}</strong>
                    ${gameData.downloaded == "1" ? 'Pobrane: <span class="material-icons">done</span>' : 'Pobrane: <span class="material-icons">close</span>'}
                </p>
            </div>
        `;
    }
})();