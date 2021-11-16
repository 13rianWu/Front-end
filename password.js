function login(){
    var id = document.getElementById('ID');
    var pwd = document.getElementById('PWD');
    if (id.value == "" || pwd.value == ""){
        alert("尚未輸入帳號或密碼")
    }else if (id.value == "admin" && pwd.value == "admin"){
        alert("以管理員身分登入")
        window.location = "index.html"
    }else {
        alert("帳號或密碼輸入錯誤")
    }
}

document.addEventListener("DOMContentLoaded", function(){
    if (typeof (Storage) !== "undefined") {
    } else {
        alert("此瀏覽器不支援Web Storage")
    }
})