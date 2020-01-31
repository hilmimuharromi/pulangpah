function hapus() {
    let peta = document.getElementById('peta');
    peta.style.display = 'none'
    let tombol = document.getElementById('tombol')
    tombol.style.visibility = 'initial'
    let jalan = document.getElementById('jalan')
    jalan.style.visibility = 'initial'
}
setInterval(hapus, 8000)


var timeleft = 6;
var downloadTimer = setInterval(function () {
    document.getElementById("detik").innerHTML = timeleft;
    timeleft -= 1;
    if (timeleft <= 0) {
        clearInterval(downloadTimer);
    }
}, 1000);