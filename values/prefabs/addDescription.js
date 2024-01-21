const PrefabgenerateDesc = (function () {
    return {
        addDescriptions
    };

    function addDescriptions(container, userData) {
        if (!container || !userData) {
            console.error('Invalid arguments');
            return;
        }

        userData.forEach(userData => {
            if (userData.user_id == User.getUserId()) {

                container.innerHTML += generateDesc(userData);
                setupEditButton(container, userData); // Dodaj funkcję obsługującą przycisk "Edytuj"
            }
        });
    }

    function generateDesc(userData) {
        const description = userData.description || 'Brak opisu';
        return `
            <div class="desc-block">
                <div class="action-buttons">
                    <button class="edit-button">Edytuj</button>
                    <button class="save-button" style="display: none;">Zapisz</button>
                </div>
                <div class="description-textarea">
                    <textarea class="description-edit" readonly>${description}</textarea>
                </div>
            </div>
        `;
    }

    function setupEditButton(container, userData) {
        const editButton = container.querySelector('.edit-button');
        const saveButton = container.querySelector('.save-button');
        const descriptionTextarea = container.querySelector('.description-edit');

        editButton.addEventListener('click', () => {
            descriptionTextarea.removeAttribute('readonly');
            editButton.style.display = 'none';
            saveButton.style.display = 'inline-block'; // Zmiana na 'inline-block'
        });

        // ...

        saveButton.addEventListener('click', () => {
            descriptionTextarea.setAttribute('readonly', true);
            editButton.style.display = 'inline-block';
            saveButton.style.display = 'none';

            // Pobierz nowy opis i user_id
            const newDescription = descriptionTextarea.value;
            const userId = User.getUserId();

            // Wyślij żądanie AJAX do pliku PHP
            updateDescription(newDescription, userId);
        });


    }
    function updateDescription(newDescription, userId) {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', '../../values/db/DescriptionToDBController.php', true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        const params = 'description=' + encodeURIComponent(newDescription) + '&user_id=' + encodeURIComponent(userId);
        console.log(params);

        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                console.log(xhr.responseText);
            }
        };

        xhr.send(params);
    }

})();
