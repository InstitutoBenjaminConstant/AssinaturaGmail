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
  
   //validar();
   ///var geraAssinatura = () =>{
    var nome = document.querySelector('#nome').value;
    var cargo = document.querySelector('#cargo').value;
    var telefone = document.querySelector('#telefone').value; 
    

    var html = "<table id='assinatura'><tr><td style='border-right: 1px solid black;'><img style='width: 80px;padding-right: 10px;' src='https://www.gov.br/ibc/pt-br/assuntos/noticias/imagens/imagens/brasao.png/@@images/image'/></td><td><p style='font-family:arial, sans-serif;font-size: 0.9em;margin-left: 5px;    line-height: 1.1em;'><b>"+nome+"</b><br /><span>"+cargo+"</span><br /><span>"+telefone+"</span><br /><a href='http://www.gov.br/ibc' target='_blank' >www.gov.br/ibc</a><br/><span style='display:inline-block;margin-top:3px;'><a href='https://www.youtube.com/channel/UC_Hv0mKFrLdNsqKMnBoT6uQ' target='_blank'><img src='https://www.gov.br/ibc/pt-br/assuntos/noticias/imagens/imagens/youtube-app.png/@@images/image' style='width:20px;margin-right:4px'/></a><a href='https://www.facebook.com/InstBenjaminConstant'  target='_blank'><img src='https://www.gov.br/ibc/pt-br/assuntos/noticias/imagens/imagens/facebook-app.png/@@images/image' style='width:20px;margin-right:4px'/></a><a href='https://twitter.com/ibconstant' target='_blank'><img src='https://www.gov.br/ibc/pt-br/assuntos/noticias/imagens/imagens/twitter-app.png/@@images/image' style='width:20px'/></a></span></p></td></tr></table>";
  
    copyFormatted(html)
    
    document.querySelector("#assinatura").innerHTML = html;
    
   
  }
  


  


 



const textInputs = document.querySelectorAll('input');
  
 var validar = (event) => {      
  var input = event.target;
   var re = new RegExp(input.pattern);
      
  if(re.test(input.value)){
    input.parentElement.classList.remove('error');    
  }else{
    console.log(input.classList);
    input.parentElement.classList.add('error');
  }  
}

for(let i = 0; i < textInputs.length; i++){
  textInputs[i].addEventListener('blur', validar);
}


  
