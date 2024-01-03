const Base = (function(){

    //metody, które będą dostępne publicznie
    return {
        initial
    };

    function initial(){
        setContentPadding();
    }

    function setContentPadding(){
        const header = document.getElementsByTagName("header")[0];
        const content = document.getElementsByTagName("main")[0];
        content.style.paddingTop = header.offsetHeight;
    }

})();

Base.initial();