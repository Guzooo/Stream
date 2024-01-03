const PrefabHeader = (function(){

    //metody, które będą dostępne publicznie
    return {
        get
    };

    function get(){
        document.write(
            `<header class="mdc-top-app-bar">
                    <div class="mdc-top-app-bar__row">
                        <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
                            <a href="" class="mdc-button">
                                <span class="mdc-button__ripple"></span>
                                <span class="mdc-button__label">Pomoc</span>
                            </a>
                        </section>
                        <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end">
                            <a href="" class="mdc-button">
                                <span class="mdc-button__ripple"></span>
                                <span class="mdc-button__label">Wyloguj się</span>
                            </a>
                        </section>
                    </div>
                    <div class="mdc-top-app-bar__row">
                        <section class="mdc-top-app-bar__section">
                            <hr>
                        </section>
                    </div>
                    <div class="mdc-top-app-bar__row">
                        <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
                            <img src="../../values/images/logo64.png"/>

                            <a href="" class="mdc-button">
                                <span class="mdc-button__ripple"></span>
                                <span class="mdc-button__label">Nowości</span>
                            </a>

                            <a href="" class="mdc-button">
                                <span class="mdc-button__ripple"></span>
                                <span class="mdc-button__label">Twoje Gry</span>
                            </a>

                            <a href="" class="mdc-button">
                                <span class="mdc-button__ripple"></span>
                                <span class="mdc-button__label">Społeczność</span>
                            </a>

                            <a href="" class="mdc-button">
                                <span class="mdc-button__ripple"></span>
                                <span class="mdc-button__label">Profil</span>
                            </a>
                        </section>
                    </div>
                </header>`);
    }
})();