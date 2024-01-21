const PageRegii = (function(){

    //metody, które będą dostępne publicznie
    return {
        regii
    };

    function regii(){
        const inputs = document.getElementsByTagName("input");
        const email = inputs[0].value;
        const password = inputs[1].value;
        alert("Funkcja nieatywna 😥");
    }
})();