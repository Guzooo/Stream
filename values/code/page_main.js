const PageMain = (function(){

    //metody, które będą dostępne publicznie
    return {
        openDefaultPage
    };

    function openDefaultPage(){
        const userType = User.getTypeOfLoggedUser();
        if(userType == User.WERYFIKATOR) {
            window.open("pages/verification", "_self");
        } else {
            window.open("pages/yourGames", "_self"); //TODO: mają byc nowowści
        }
    }

})();

PageMain.openDefaultPage();
