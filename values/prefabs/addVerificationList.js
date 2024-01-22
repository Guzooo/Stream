const PrefabVerificatorList = (function() {
    return {
        addGames
    };

    function addGames(container, gamesData) {
        if (!container || !Array.isArray(gamesData)) {
            console.error('Invalid arguments');
            return;
        }
        for(let i = 0; i < gamesData.length; i++){
                container.innerHTML += generateGameBlock(gamesData[i], i);
        }

        container.addEventListener('click', function (event) {
            const targetButton = event.target.closest('.button1');

            if (targetButton) {
                const dataId = targetButton.dataset.id;
                verifyGame(targetButton, dataId, gamesData[dataId].tworcaID, gamesData[dataId].gameName);
            }
        });

    }

    function generateGameBlock(gameData, i) {
        let num = i;
        return `
           <div class="game-block">
                <p>
                    <strong>${gameData.gameName}</strong>
                    <button type="button" class="button3">Szczegóły</button>
                    <button type="button" class="button1" data-id="${num}">Zatwierdź</button>
                </p>
            </div>
            `;
    }

    function verifyGame(button1, gID, tID, gName) {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', '../../values/db/VerificationToDBController.php', true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        const params = ('verifiedGameID=' + gID + '&tworcaID=' + tID + '&gameName=' + gName);
        console.log(params);

        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                console.log(xhr.responseText);
            }
        };

        xhr.send(params);
     }

})();
