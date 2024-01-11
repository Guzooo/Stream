const User = (function(){

    const UZYTKOWNIK_ZALOGOWANY = "UZ";
    const UZYTKOWNIK_NIEZALOGOWANY = "UNZ";
    const SOCIAL_MANAGER = "SM";
    const TWORCA = "T";
    const WERYFIKATOR = "W";

    const COOKIE_NAME = "userId";

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
        switch(getUserId()){
            case "0":
                return UZYTKOWNIK_ZALOGOWANY;
            case "1":
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
        if(email == "guest@guest" && password == "guest"){
            createUserIdCookie(0, 30);
            return true;
        } else if(email == "v@v" && password == "v"){
            createUserIdCookie(1, 30);
            return true;
        }
        return false;
    }

    function logOut(){
        createUserIdCookie("", -30);
        window.open("../..", "_self");
    }

    /* metody prywatne */

    function getUserIdFromCookies(){
        return document.cookie.match('(^|;)\\s*' + COOKIE_NAME + '\\s*=\\s*([^;]+)')?.pop() || '';
    }

    function createUserIdCookie(id, minutes){
      const d = new Date();
      d.setTime(d.getTime() + (minutes*60*1000));    //ustawiamy, "automatyczne wylogowanie" po minutach
      document.cookie = COOKIE_NAME + "=" + id + ";"
                + "expires="+ d.toUTCString() +"; path=/";
    }

})();