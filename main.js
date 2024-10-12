const form = document.getElementById('form-valor');
const numberA = document.getElementById('numberA');
const numberB = document.getElementById('numberB');



function sucess(){
    const mensagemsucesso = 'parabens seu formulario foi enviado';
    const containerMensagemSucesso = document.querySelector('#mensagemsucesso');
    containerMensagemSucesso.innerHTML = mensagemsucesso
    containerMensagemSucesso.style.display = 'block';
}
function failed(){
    const mensagemfailed = 'valor B precisa ser maior que valor A';
    const containermensagemfailed = document.querySelector('#mensagemfailed');
    containermensagemfailed.innerHTML = mensagemfailed;
    containermensagemfailed.style.display = 'block';
}
form.addEventListener('submit', function(e){
   e.preventDefault()
    if (numberB.value > numberA.value){
        numberA.value = '';
        numberB.value = '';
        return sucess()
    } 
    })
    form.addEventListener('keyup', function(e){
    if (numberB.value < numberA.value){   
        return failed() 
        } else {
            document.querySelector('#mensagemfailed').style.display = 'none'
        }
        }
    )

    form.addEventListener('keyup', function(e){
        if (numberA.value || numberB.value){
        return document.querySelector('#mensagemsucesso').style.display = this.nonce;
}
    })


