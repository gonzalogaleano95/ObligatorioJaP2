document.getElementById("boton").addEventListener("click", ()=>{                //encuentro el elemento con Id boton y le añado un event listener para que, en el evento de un click
                                                                                //del botón para logearse, se creen las variables mail y contra. El valor de estas variables va a ser igual
        let mail = document.getElementById("mailLog").value;                    //al valor introducido en los elementos con Id mailLog y contraLog respectivamente. Luego, se revisa que
        let contra = document.getElementById("contraLog").value;                //esos valores no estén vacíos. Si no lo están, se redirecciona a la página principal.
    
        if((mail != "") && (contra != "")){
            window.location = "pagina_principal.html";
        }
    
})
