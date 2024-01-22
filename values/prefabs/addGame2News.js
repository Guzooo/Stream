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
                if(gameData.zweryfikowane == 1) {
                    container.innerHTML += generateGameBlock(gameData);
                }
        });
    }

    function generateGameBlock(gameData) {
        return `
           <div class="game-block">
                <p>
                    <strong>${gameData.gameName}</strong>
                </p>
            </div>
        `;
    }
})();