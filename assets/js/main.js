function copyFormatted (html) {
// Create an iframe (isolated container) for the HTML
var container = document.createElement('div')
container.innerHTML = html

// Hide element
container.style.position = 'fixed'
container.style.pointerEvents = 'none'
container.style.opacity = 100

// Detect all style sheets of the page
var activeSheets = Array.prototype.slice.call(document.styleSheets)
    .filter(function (sheet) {
    return !sheet.disabled
})

// Mount the iframe to the DOM to make `contentWindow` available
document.body.appendChild(container)

// Copy to clipboard
window.getSelection().removeAllRanges()

var range = document.createRange()
range.selectNode(container)
window.getSelection().addRange(range)

document.execCommand('copy')
for (var i = 0; i < activeSheets.length; i++) activeSheets[i].disabled = true
document.execCommand('copy')
for (var i = 0; i < activeSheets.length; i++) activeSheets[i].disabled = false

// Remove the iframe
document.body.removeChild(container)
}


document.querySelector('#copyView').onclick = function () {

 // validar();
    var nome = document.querySelector('#nome').value;
    var cargo = document.querySelector('#cargo').value;
    var telefone = document.querySelector('#telefone').value;
        
    var html = "<table id='assinatura'><tr><td style='border-right: 1px solid black;'><img style='width: 80px;padding-right: 10px;' src='assets/img/icons/brasao.png'/></td><td><p style='font-family:arial, sans-serif;font-size: 0.9em;margin-left: 5px;    line-height: 1.1em;'><b>"+nome+"</b><br /><span>"+cargo+"</span><br /><span>"+telefone+"</span><br /><a href='http://www.gov.br/ibc' target='_blank' >www.gov.br/ibc</a><br/><span style='display:inline-block;margin-top:3px;'><a href='https://www.youtube.com/channel/UC_Hv0mKFrLdNsqKMnBoT6uQ' target='_blank'><img src='assets/img/icons/youtube-app.png' style='width:20px'/></a><a href='https://www.facebook.com/InstBenjaminConstant'  target='_blank'><img src='assets/img/icons/facebook-app.png' style='width:20px'/></a><a href='https://twitter.com/ibconstant' target='_blank'><img src='assets/img/icons/twitter-app.png' style='width:20px'/></a></span></p></td></tr></table>";
  
  copyFormatted(html)
  var assinatura = document.querySelector("#assinatura");
  assinatura.innerHTML = html;
}


function setError(nome){
  nome.style.border = '2px solid #e63636';
  nome.style.display = "block";
}

function removeError(nome){
  nome.style.border = '';
  spans.nome.style.display = 'none';
}




function validar(){
  const nome = document.querySelector("#nome");
  if(nome.value=="" || nome.value.length < 9)
  {
    // alert("Preencha o campo NOME corretamente");
    // document.nome.focus();
    // return false;
    setError(nome);
  }
  else
  {
    removeError(nome);
  }
  
   
  var cargo=document.querySelector("#cargo");
  if(cargo.value=="" || cargo.value.length < 5)
  {
    //alert("Preencha o campo CARGO corretamente");
    //document.cargo.focus();
    //return false;
    setError(cargo);
  }
  else
  {
    removeError(cargo);
  }

  var telefone= ('(00)0000-0000');
  var regex= new RegExp ('/^\(\d{2}\)\d{4,5}-\d{4}$/');
  if(regex.test(telefone)){
  ! true;
  }
  {
   
   return false;

  }

}
  


 

const nomeInput = document.querySelector('#nome');

var validaTexto = (evento) => {
  if(evento.target.value === "" || evento.target.value.length < 8){
    evento.target.parentElement.classList.add('error');
  }else{
    evento.target.parentElement.classList.remove('error');
  }
}

nomeInput.addEventListener('blur', validaTexto());