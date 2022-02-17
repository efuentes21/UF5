document.addEventListener('keydown', logKey);

var llum1val = 0;
var llum2val = 0;
var llum3val = 0;
function logKey(e) {
    if(e.keyCode == 49){
        if(llum1val == 0) {
            document.getElementById("llum1").src = "img/llumon.png";
            document.getElementById("req1").innerHTML = "1";
            document.getElementById("llum1").style = "-webkit-filter: drop-shadow(0px 0px 20px #FFFF00); filter: drop-shadow(0px 0px 20px #FFFF00);"
            llum1val = 1;
        } else if(llum1val == 1){
            document.getElementById("llum1").src = "img/llumoff.gif";
            document.getElementById("req1").innerHTML = "";
            document.getElementById("llum1").style = "-webkit-filter: 0; filter: 0;"
            llum1val = 0;
        }
    } else if(e.keyCode == 50){
        if(llum2val == 0) {
            document.getElementById("llum2").src = "img/llumon.gif";
            document.getElementById("req2").innerHTML = "2";
            document.getElementById("llum2").style = "-webkit-filter: drop-shadow(0px 0px 20px #FFFF00); filter: drop-shadow(0px 0px 20px #FFFF00);"
            llum2val = 1;
        } else if(llum2val == 1){
            document.getElementById("llum2").src = "img/llumoff.gif";
            document.getElementById("req2").innerHTML = "";
            document.getElementById("llum2").style = "-webkit-filter: 0; filter: 0;"
            llum2val = 0;
        }
    } else if(e.keyCode == 51){
        if(llum3val == 0) {
            document.getElementById("llum3").src = "img/llumon.gif";
            document.getElementById("req3").innerHTML = "3";
            document.getElementById("llum3").style = "-webkit-filter: drop-shadow(0px 0px 20px #FFFF00); filter: drop-shadow(0px 0px 20px #FFFF00);"
            llum3val = 1;
        } else if(llum3val == 1){
            document.getElementById("llum3").src = "img/llumoff.gif";
            document.getElementById("req3").innerHTML = "";
            document.getElementById("llum3").style = "-webkit-filter: 0; filter: 0;"
            llum3val = 0;
        }
    }
    //Accions per encendre una llum i apagar les demés
    //document.getElementById("req1").innerHTML = ""
    //document.getElementById("req2").innerHTML = ""
    //document.getElementById("req3").innerHTML = "3"
    //document.getElementById("llum1").src = "img/llumoff.gif"
    //document.getElementById("llum2").src = "img/llumoff.gif"
    //document.getElementById("llum3").src = "img/llumon.gif"
}
function encessa(id) {
    id.src = "img/llumon.gif";
    id.style = "-webkit-filter: drop-shadow(0px 0px 20px #FFFF00); filter: drop-shadow(0px 0px 20px #FFFF00);"
}
function apagada(id) {
    id.src = "img/llumoff.gif";
    id.style = "-webkit-filter: 0; filter: 0;"
}
function trenca(id) {
    id.src = "img/llumbreak.gif";
    id.style = "-webkit-filter: drop-shadow(0px 0px 20px #FFFFFF); filter: drop-shadow(0px 0px 20px #FFFFFF);"
}