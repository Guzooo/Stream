const Base = (function(){

    //metody, które będą dostępne publicznie
    return {
        initial,
        centerContent
    };

    function initial(){
        setContentPadding();
        initialComponents();
    }

    function centerContent(){
        const header = document.getElementsByTagName("header")[0];
        const content = document.getElementsByTagName("main")[0];
        const windowHeight = innerHeight;
        if(header.offsetHeight + content.offsetHeight < windowHeight){
            const centeredPadding = (windowHeight - header.offsetHeight - content.offsetHeight)/2
            content.style.paddingTop = header.offsetHeight + centeredPadding;
        }

    }

    function setContentPadding(){
        const header = document.getElementsByTagName("header")[0];
        const content = document.getElementsByTagName("main")[0];
        content.style.paddingTop = header.offsetHeight;
    }

    function initialComponents(){
        window.mdc.autoInit();
    }

})();


Base.initial();