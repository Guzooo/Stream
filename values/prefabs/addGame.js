//TODO
//powinien dostać gotowe dane i nic tutaj już nie zmieniać
const PrefabAddGames = (function() {
    return {
        addGames
    };

    function addGames(container, gamesData) {
        if (!container || !Array.isArray(gamesData)) {
            console.error('Invalid arguments');
            return;
        }

        gamesData.forEach(gameData => {
            if (gameData.userId === User.getUserId()) {
                container.innerHTML += generateGameBlock(gameData);
            }
        });
    }

    function generateGameBlock(gameData) {
        return `
           <div class="game-block">
                <p>
                    ${gameData.favorite ? '<span class="material-icons">star</span>' : ''}
                    <strong>${gameData.gameName}</strong>
                    ${gameData.downloaded ? 'Pobrane: <span class="material-icons">done</span>' : 'Pobrane: <span class="material-icons">close</span>'}
                </p>
            </div>
        `;
    }
})();