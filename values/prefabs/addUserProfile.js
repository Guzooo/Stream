const PrefabGenerateUser = (function () {
    return {
        addUserProfiles
    };

    function addUserProfiles(container, userData) {
        if (!container || !userData) {
            console.error('Invalid arguments');
            return;
        }

        userData.forEach(userData => {
            if (userData.user_id == User.getUserId()) {
                container.innerHTML += generateUser(userData, userData.user_id);
            }
        });

        container.addEventListener('click', function (event) {
            if (event.target.classList.contains('edit-button')) {
                showEditPopup(event.target);
            }
        });
    }

    function generateUser(userData, userId) {
        const username = userData.username || 'Brak nazwy użytkownika';
        const imageFile = `../../values/images/avatar0.png`;

        return `
            <div class="user-profile-block">
                <div class="username">${username}</div>
                <div class="user-actions">
                    <button class="edit-button">Edytuj</button>
                </div>
                <div class="user-info">
                    <div class="user-image">
                        <img src="${imageFile}" alt="Profilowe" />
                    </div>
                </div>
            </div>
        `;
    }

    function showEditPopup(editButton) {
        const usernameElement = editButton.closest('.user-profile-block').querySelector('.username');
        const currentUsername = usernameElement.textContent;

        let newUsername = prompt('Podaj nową nazwę użytkownika (maksymalnie 15 znaków):', currentUsername);

        if (newUsername !== null) {
            // Ogranicz długość do 15 znaków
            newUsername = newUsername.trim().slice(0, 15);

            // Wywołaj funkcję updateUsername, aby zaktualizować nazwę użytkownika na serwerze
            updateUsername(newUsername, User.getUserId());

            // Zaktualizuj widok użytkownika
            usernameElement.textContent = newUsername;
        }
    }

    function updateUsername(newUsername, userId) {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', '../../values/db/UsernameToDBController.php', true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        const params = 'username=' + encodeURIComponent(newUsername) + '&user_id=' + encodeURIComponent(userId);
        console.log(params);

        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                console.log(xhr.responseText);
            }
        };

        xhr.send(params);
    }
})();
