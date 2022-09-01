document.getElementById("boton").addEventListener("click", ()=>{

        let mail = document.getElementById("mailLog").value;
        let contra = document.getElementById("contraLog").value;
    
        if((mail != "") && (contra != "")){
            window.location = "pagina_principal.html";
        }
    
})
