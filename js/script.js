
var txt1 = document.getElementById('input-text')
var txt2 = document.getElementById('inputTextSaida')
var msg = document.getElementById('msg')
txt1.focus()


var devName = document.getElementById('DevName')
devName.onclick = devNameFunction


var btnEncrypt = document.querySelector('#btnEncryptar')
btnEncrypt.onclick = encrypt


var btnDecrypt = document.querySelector('#btnDecryptar')
btnDecrypt.onclick = decrypt



function encrypt() {
    if (txt1.value.length == 0) {
        
        let imgLupa = document.getElementById('lupa')
        imgLupa.setAttribute('src', './img/ComputerError.gif')
        msg.innerText = "Nenhuma mensagem encontrada"
    } else {
        
        let imgLupa = document.getElementById('lupa')
        imgLupa.setAttribute('src', './img/Ok.gif')
        msg.innerText = "Copie o texto para área de transferencia."
        document.getElementById('copy').innerHTML = '<button id="btn-copiar" class="btn-copiar" onclick="copiar()">Copiar</button>'
         
         var text = txt1.value;
         var txt = text.replace(/e/igm, 'enter');
         var txt = txt.replace(/i/igm, 'imes');
         var txt = txt.replace(/a/igm, 'ai');
         var txt = txt.replace(/o/igm, 'ober');
         var txt = txt.replace(/u/igm, 'ufat');
         
         document.getElementById('inputTextSaida').innerHTML = `${txt}`;
         
         txt1.value=""
         txt1.focus()
    }
    
}

function decrypt() {
        
        if(txt2.value.length==0){
            
            let imgLupa = document.getElementById('lupa')
            imgLupa.setAttribute('src', './img/ComputerError.gif')
            msg.innerText = "Nenhuma mensagem encontrada" 
        }else{
            var text = txt2.value;
            var txt = text.replace(/enter/igm, 'e');
            txt = txt.replace(/imes/igm, 'i');
            txt = txt.replace(/ai/igm, 'a');
            txt = txt.replace(/ober/igm, 'o');
            txt = txt.replace(/ufat/igm, 'u');
            
            document.getElementById('inputTextSaida').innerHTML = `${txt}`;
            txt1.focus()
        }
        
}

function copiar() {
    if (txt2.value.length == 0) {
        msg.innerHTML = "Não é possível copiar, pois não há resultados!."
        let imgLupa = document.getElementById('lupa')
        imgLupa.setAttribute('src', './img/ComputerError.gif')
    } else {
        document.querySelector('#inputTextSaida').select()
        document.execCommand('copy')
        msg.innerHTML = "O texto copiado já está na área de transferência!"
    }

}

function devNameFunction() {
    txt1.value = "Decodificador Aulura ONE"


}
/*DARK MODE */
function DarkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    var getClass = element.getAttribute("class")

    if (getClass == "dark-mode") {
        let iconSol = document.getElementById('iconDarkMode')
        iconSol.classList.remove('bi-moon')
        iconSol.classList.add('bi-brightness-high')
        let imgLupa = document.getElementById('logoAlura')
        imgLupa.setAttribute('src', './img/Vector123.svg')
    } else {
        let iconSol = document.getElementById('iconDarkMode')
        iconSol.classList.add('bi-moon')
        iconSol.classList.remove('bi-brightness-high')
        let imgLupa = document.getElementById('logoAlura')
        imgLupa.setAttribute('src', './img/Vector.svg')

    }
}
