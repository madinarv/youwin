let gf=document.getElementById('gf');
var left =0
document.body.onkeydown= (e) =>{
  if(e.keyCode === 32){
    left+=5;
    gf.style.left='${left}%'

  }
  if(e.keyCode === 39){
    top+=5;
    gf.style.top='${top}%' 
  }
}
