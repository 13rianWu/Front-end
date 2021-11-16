var tdl = [];

function Add() {
    var res = document.getElementById('AddTDL') ;
    if (res.value != ""){
        var div = document.createElement("div") ;
        div.style.width = "auto" ;
        div.style.height = "25px" ;
        div.style.margin = "3px 3px 0px 3px"
        var chkbox = document.createElement("input") ;
        chkbox.type = "checkbox" ;
        var txt = document.createElement("label") ;
        txt.style.margin = "0px 0px 0px 5px"
        txt.textContent = res.value + "  " ; 
        var del = document.createElement("button") ;
        del.style.fontSize = "12px" ;
        del.style.margin = "auto auto auto 5px" ;
        del.textContent = "刪除"
        del.addEventListener('click',function() { this.parentNode.remove() ;})
        var Ttop = document.getElementById('Ttop') ;

        Ttop.appendChild(div) ;
        div.appendChild(chkbox) ;
        div.appendChild(txt) ;
        div.appendChild(del) ;
    } 
    else if (res.value == ""){
        alert("尚未輸入待辦事項")
    }
}

document.addEventListener("DOMContentLoaded", function(){
    if (typeof (Storage) !== "undefined") {
    } else {
        alert("此瀏覽器不支援Web Storage")
    }
})