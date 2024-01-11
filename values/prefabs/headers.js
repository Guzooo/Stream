const PrefabHeader = (function(){

    const CURRENT_PAGE_CLASS = "current-page-action-item";

    //metody, które będą dostępne publicznie
    return {
        get
    };

    function get(){
        document.write(
            `<header class="mdc-top-app-bar">
                    <div class="mdc-top-app-bar__row">
                        <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
                            <a href="" class="mdc-button mdc-top-app-bar__action-item">
                                <span class="mdc-button__ripple"></span>
                                <span class="mdc-button__label">Pomoc</span>
                            </a>
                        </section>
                        <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end">`
                            + generateLogginLoggoutFunction()
                        + `</section>
                    </div>
                    <div class="mdc-top-app-bar__row">
                        <section class="mdc-top-app-bar__section">
                            <hr>
                        </section>
                    </div>
                    <div class="mdc-top-app-bar__row">
                        <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">`
                            + generatePages()
                        + `</section>
                        <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end">
                            <button class="mdc-icon-button material-icons mdc-top-app-bar__action-item">
                                <div class="ripple-above-button-image mdc-icon-button__ripple"></div>
                                search
                            </button>
                        </section>
                    </div>
                </header>`);
    }

    function generateLogginLoggoutFunction(){
        if(isThisPageOpen("loggin")) {
            return '';
        }
        if(User.isLogged()){
            return `<a onclick="User.logOut()" class="mdc-button mdc-top-app-bar__action-item">
                        <span class="mdc-button__ripple"></span>
                        <span class="mdc-button__label">Wyloguj się</span>
                    </a>`
        } else {
            return `<a href="..\\loggin" class="mdc-button mdc-top-app-bar__action-item">
                        <span class="mdc-button__ripple"></span>
                        <span class="mdc-button__label">Zaloguj się</span>
                    </a>`
        }
    }

    function generatePages(){
        const userType = User.getTypeOfLoggedUser();
        if(userType == User.WERYFIKATOR) {
            return generatePageElement("Weryfikacje", "verification");
        } else if (userType == User.UZYTKOWNIK_ZALOGOWANY){
            return generatePageElement("Nowości", "")
                + generatePageElement("Twoje Gry", "yourGames")
                + generatePageElement("Społeczność", "community")
                + generatePageElement("Profil", "profile");
        } else if (userType == User.UZYTKOWNIK_NIEZALOGOWANY){
             return generatePageElement("Nowości", "")
                 + generatePageElement("Społeczność", "community");
         }
    }

    function generatePageElement(name, address){
        const currentClass = isThisPageOpen(address) ? CURRENT_PAGE_CLASS : '';
        return `<a href="..\\` + address + `" class="mdc-button mdc-top-app-bar__action-item ` + currentClass + `">
                    <span class="mdc-button__ripple"></span>
                    <span class="mdc-button__label">` + name + `</span>
                </a>`
    }

    function isThisPageOpen(page){
        const splitedUrl = window.location.href.split('/');
        const currentPage = splitedUrl[splitedUrl.length-2];
        return currentPage == page;
    }
})();