const ingresoTexto= document.getElementById("ingresoTexto");
const btnEncriptar=document.getElementById("btnEncriptar");
const btnDesencriptar=document.getElementById("btnDesencriptar");
const btnCopiar=document.getElementById("btnCopiar");
const mensajeFinal=document.getElementById("mensajeFinal");
const rightInfo = document.getElementById("rightInfo");
const muñeco =document.getElementById("muñeco");
const right= document.getElementById("right");

let remplazar=[[ "e","enter"],["o","ober"], ["i","imes"],["a","ai"],["u","ufat"]
]

const remplace=(nuevoValor)=>{

    mensajeFinal.innerHTML= nuevoValor;
    muñeco.classList.add("oculto");
    ingresoTexto.value="";
    rightInfo.style.display="none";
    btnCopiar.style.display="block";
    right.classList.add("ajustar");
    mensajeFinal.classList.add("ajustar");
}
const reset=()=>{
    mensajeFinal.innerHTML = "";
    muñeco.classList.remove("oculto");
    rightInfo.style.display="block";
    btnCopiar.style.display="none"
    right.classList.remove("ajustar");
    mensajeFinal.classList.remove("ajustar");
    ingresoTexto.focus();
}

btnEncriptar.addEventListener("click",()=> {

    const txt=ingresoTexto.value.toLowerCase();

    if(txt !=""){
    function encriptar(newTxt){
        for( let i=0; i< remplazar.length; i++){
            if( newTxt.includes(remplazar [i][0])){
               newTxt=newTxt.replaceAll(remplazar[i][0], remplazar[i][1])
            };
        };
        return newTxt
    };
    remplace(encriptar(txt));
}else{
    alert( "ingrese texto a encriptar")
    reset();
}
   
});

 btnDesencriptar.addEventListener("click",() =>{

    const txt =ingresoTexto.value.toLowerCase();

    if(txt !=""){
    function desencriptar(newTxt){
        for(let i =0; i< remplazar.length; i++){
            if(newTxt.includes(remplazar[i][1])) {
                newTxt=newTxt.replaceAll(remplazar[i][1],remplazar[i][0])
            };
        };
        return newTxt
    };
    remplace(desencriptar(txt));
}else{
    alert("ingrese texto a desencriptar")
    reset();
};
})
 btnCopiar.addEventListener("click", ()=>{
    
    let txt =mensajeFinal;
    navigator.clipboard.writeText(txt.value);
    alert("Texto Copiado");
    reset();
    

 })