
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


document.querySelector('#copy').onclick = function () {
  // var nome = documet.querySelector('#nome').value();
  // var cargo = documet.querySelector('#cargo').value();
  // var telefone = documet.querySelector('#telefone').value();
  
  var nome = "Rogerio Sousa"
    var cargo = "Tecnico Programador"
    var telefone = "(21) 3478-4539"
    
    
    var html = "<table id='assinatura'><tr><td style='border-right: 1px solid black;'><img style='width: 80px;padding-right: 10px;' src='assets/img/icons/brasao.png'/></td><td><p style='font-family:arial, sans-serif;font-size: 0.9em;margin-left: 5px;    line-height: 1.1em;'><b>"+nome+"</b><br /><span>"+cargo+"</span><br /><span>"+telefone+"</span><br /><a href='http://www.gov.br/ibc' target='_blank' >www.gov.br/ibc</a><br/><span style='display:inline-block;margin-top:3px;'><a href='https://www.youtube.com/channel/UC_Hv0mKFrLdNsqKMnBoT6uQ' target='_blank'><img src='assets/img/icons/youtube-app.png' style='width:20px'/></a><a href='https://www.facebook.com/InstBenjaminConstant'  target='_blank'><img src='assets/img/icons/facebook-app.png' style='width:20px'/></a><a href='https://twitter.com/ibconstant' target='_blank'><img src='assets/img/icons/twitter-app.png' style='width:20px'/></a></span></p></td></tr></table>";
    // var animatedClone = this.cloneNode(true)
    // animatedClone.classList.add('fading')
    // animatedClone.addEventListener('animationend', function () {
    //   animatedClone.parentNode.removeChild(animatedClone)
    // })
    // this.parentNode.appendChild(animatedClone)
    
  // Do the copy!
  
  copyFormatted(html)
  var assinatura = document.querySelector("#assinatura");
  assinatura.innerHTML = html;
}
