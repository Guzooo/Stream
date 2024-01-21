const PrefabVerificatorList = (function() {
    return {
        addGames
    };

    function addGames(container, gamesData) {
        if (!container || !Array.isArray(gamesData)) {
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
                    <strong>${gameData.gameName}</strong>
                    <button type="button" class="button3">Szczegóły</button>
                    <button type="button" class="button1">Zatwierdź</button>
                </p>
            </div>
        `;

         container.addEventListener('click', function (event) {
            if (event.target.classList.contains('button1')) {
                verifyGame(event.target, gameData.ID, gameData.tworcaID, gameData.gameName);
            }
        });
    }

     function verifyGame(button1, gID, tID, gName) {
        }
    }
})();
