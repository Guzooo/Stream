document.addEventListener('DOMContentLoaded', function () {
    const boxHTML = `
        <div id="box">
            <img id="avatar" src="../../values/images/avatar.png" alt="Avatar">
            <div id="textArea"></div>
            <button id="editButton">Edytuj dane</button>
        </div>
    `;

    const mainContent = document.querySelector('.mdc-top-app-bar--fixed-adjust');
    mainContent.innerHTML = boxHTML;

    const textArea = document.getElementById('textArea');
    const editButton = document.getElementById('editButton');

    // TODO: Pobierz nazwę użytkownika z bazy danych i ustaw jako tekst w textArea
    fetchUsernameFromDatabase().then(username => {
        textArea.textContent = username || 'Domyślna nazwa użytkownika';
    }).catch(error => {
        console.error('Błąd podczas pobierania nazwy użytkownika:', error);
        textArea.textContent = 'Błąd podczas pobierania nazwy użytkownika';
    });

    editButton.addEventListener('click', async function () {
        const currentText = textArea.textContent;
        let newText = prompt('Podaj nową nazwę użytkownika:', currentText);

        // Sprawdź długość tekstu i przycięty go do maksymalnej długości (np. 20 znaków)
        const maxLength = 18;

        if (newText !== null) {
            if (newText.length > maxLength) {
                alert(`Maksymalna długość to ${maxLength} znaków. Tekst zostanie przycięty.`);
                newText = newText.slice(0, maxLength);
            }

            // TODO: Zapisz nową nazwę użytkownika do bazy danych
            try {
                await saveUsernameToDatabase(newText);
                textArea.textContent = newText;
            } catch (error) {
                console.error('Błąd podczas zapisywania nazwy użytkownika:', error);
                alert('Błąd podczas zapisywania nazwy użytkownika');
            }
        }
    });
});

// Pozostała część kodu pozostaje bez zmian


// TODO: Zaimplementuj funkcję pobierającą nazwę użytkownika z bazy danych
async function fetchUsernameFromDatabase() {
    // Tutaj dodaj kod do pobierania nazwy użytkownika z bazy danych
    // Na razie zwracamy przykładową wartość, ale w pełnej implementacji będzie to zapytanie do bazy danych
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('NazwaUzytkownika');
        }, 1000); // Symulacja opóźnienia podczas pobierania danych
    });
}

// TODO: Zaimplementuj funkcję zapisującą nazwę użytkownika do bazy danych
async function saveUsernameToDatabase(newUsername) {
    // Tutaj dodaj kod do zapisywania nowej nazwy użytkownika w bazie danych
    // W rzeczywistości ta funkcja powinna wysyłać odpowiednie zapytanie do serwera
    // i aktualizować dane w bazie danych
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`Zapisano nową nazwę użytkownika: ${newUsername}`);
            resolve();
        }, 1000); // Symulacja opóźnienia podczas zapisywania danych
    });
}
