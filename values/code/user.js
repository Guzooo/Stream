const User = (function(){

    const UZYTKOWNIK_ZALOGOWANY = "UZ";
    const UZYTKOWNIK_NIEZALOGOWANY = "UNZ";
    const SOCIAL_MANAGER = "SM";
    const TWORCA = "T";
    const WERYFIKATOR = "W";

    const COOKIE_NAME = "userId";
    const COOKIE2_NAME = "userType";

    //metody, które będą dostępne publicznie
    return {
        UZYTKOWNIK_ZALOGOWANY,
        UZYTKOWNIK_NIEZALOGOWANY,
        SOCIAL_MANAGER,
        TWORCA,
        WERYFIKATOR,
        isLogged,
        getTypeOfLoggedUser,
        getUserId,
        tryLoggin,
        logOut
    };

    //zwraca czy jest ktoś zalogowany
    function isLogged(){
        if(getUserIdFromCookies() == '')
            return false;
        return true;
    }

    //zwraca jaki typ użytkonika jest zalodowyany
    // patrzy linie 3-7;
    function getTypeOfLoggedUser(){
        const type = getUserTypeFromCookies();
        switch(type){
            case "1":
                return UZYTKOWNIK_ZALOGOWANY;
            case "2":
                return TWORCA;
            case "3":
                return SOCIAL_MANAGER;
            case "4":
                return WERYFIKATOR;
            default:
                return UZYTKOWNIK_NIEZALOGOWANY;
        }
    }

    //zwraca id uzytkownika, na jego podstawie będą wyciągane dane z bazy
    //przed użyciem sprawdzić czy ktoś jest zalogowany [isLogged()]
    function getUserId(){
        return getUserIdFromCookies();
    }

    //zwraca true lub fałsz w zależności czy udało się zalogować
    function tryLoggin(email, password){
        let id = -1;
        let userType = -1;
        let data = new URLSearchParams();
        data.append('action', 'getId');
        data.append('email', email);
        data.append('password', password);

        // Wyślij żądanie za pomocą Fetch
        return fetch('../../values/code/user.php', {
            method: 'POST',
            body: data,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
            .then(response => {
                console.log(response);
                response.json()
            })
            .then(response => {
                id = response.result.id;
                userType = response.result.userType;

                if(id != -1){
                    createUserIdCookie(id, userType, 30);
                    return true;
                }
                return false;
            })
            .catch(error => console.error('Błąd sieciowy:', error));
    }

    function logOut(){
        createUserIdCookie("", "", -30);
        window.open("../..", "_self");
    }

    /* metody prywatne */

    function getUserIdFromCookies(){
        return document.cookie.match('(^|;)\\s*' + COOKIE_NAME + '\\s*=\\s*([^;]+)')?.pop() || '';
    }

    function getUserTypeFromCookies(){
        return document.cookie.match('(^|;)\\s*' + COOKIE2_NAME + '\\s*=\\s*([^;]+)')?.pop() || '';
    }

    function createUserIdCookie(id, userType, minutes){
      const d = new Date();
      d.setTime(d.getTime() + (minutes*60*1000));    //ustawiamy, "automatyczne wylogowanie" po minutach
      document.cookie = COOKIE_NAME + "=" + id + ";"
                + COOKIE2_NAME + "=" + userType + ";"
                + "expires="+ d.toUTCString() +"; path=/";
    }

})();