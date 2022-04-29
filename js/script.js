
function pop(a)
{
var img = document.getElementById("selecao");
if (a != "classico" && document.getElementById("tclassico").style.display === "flex") {
    document.getElementById("tclassico").style.display = "none";
}
if (a != "gourmet" && document.getElementById("tgourmet").style.display === "flex") {
    document.getElementById("tgourmet").style.display = "none";
}
if (a != "doce" && document.getElementById("tdoce").style.display === "flex") {
    document.getElementById("tdoce").style.display = "none";
}
if (document.getElementById(`t${a}`).style.display === "flex") {
    document.getElementById(`t${a}`).style.display = "none";
    document.getElementById('box').style.display = "none";
    img.src="";
}
else {
    document.getElementById(`t${a}`).style.display = "flex";
    document.getElementById('box').style.display = "block";
    img.src=`img/${a}.JPG`;
}
return false;
}