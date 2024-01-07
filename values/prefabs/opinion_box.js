document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('body');

    container.innerHTML += `
        <div id="opinion-box" class="white-box">
            <button id="add-opinion-button" class="mdc-button">Dodaj opis</button>
            <button id="save-opinion-button" class="mdc-button" disabled>Zapisz</button>
            <div id="opinion-content" class="opinion-content" contenteditable="false">
                <div id="text-container" class="text-container"></div>
            </div>
        </div>
    `;

    const addOpinionButton = document.getElementById('add-opinion-button');
    const saveOpinionButton = document.getElementById('save-opinion-button');
    const opinionContent = document.getElementById('opinion-content');
    const textContainer = document.getElementById('text-container');

    let savedOpinion = ''; // Zmienna do przechowywania zapisanej opinii
    let isOpinionAdded = false; // Flaga, czy opinia została dodana

    addOpinionButton.addEventListener('click', function () {
        // Stawiamy się edytowalnym polem tekstowym
        opinionContent.contentEditable = 'true';
        opinionContent.focus();
        isOpinionAdded = true; // Ustawiamy flagę na true po dodaniu opinii
        saveOpinionButton.disabled = false; // Aktywujemy przycisk "Zapisz"
    });

    saveOpinionButton.addEventListener('click', function () {
        // Po kliknięciu "Zapisz" zapisujemy opinię
        const opinion = opinionContent.innerText.trim();
        // TODO: Implementacja zapisu opinii (np. używając AJAX).

        saveOpinionButton.disabled = true;
        isOpinionAdded = false;
    });
});
