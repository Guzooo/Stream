const PageLoggin = (function(){

    //metody, które będą dostępne publicznie
    return {
        loggin
    };

    function loggin(){
        const inputs = document.getElementsByTagName("input");
        const email = inputs[0].value;
        const password = inputs[1].value;
        const correctPass = User.tryLoggin(email, password);
        if(correctPass) {
            window.open("../..", "_self");
        } else {
            alert("Uwaga!\nNiepoprawne dane logowania!");
        }
    }
})();