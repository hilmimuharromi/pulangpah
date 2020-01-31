let jawaban = ['kiri', 'kanan', 'lurus', 'lurus', 'kiri']
let index = 0

function cekJawaban(ans) {
    let isTrue = false
    let selesai = false
    if (index == 0) {
        if (jawaban[index] == ans) {
            isTrue = true
        } else {
            let tombol = document.getElementById('tombol')
            tombol.style.display = 'none'
            let jalan = document.getElementById('jalan')
            jalan.style.display = 'none'
            let kalah = document.getElementById('kalah')
            setTimeout(() => {
                kalah.style.display = 'block'
            }, 1000);
            setTimeout(() => {
                playKalah()
            }, 1000);
            selesai = true  
            
        }
    } else {
        if (jawaban[index] == ans) {
            console.log('benar');
            isTrue = true
        } else {
            console.log('salah');
            let tombol = document.getElementById('tombol')
            tombol.style.display = 'none'
            let jalan = document.getElementById('jalan')
            jalan.style.display = 'none'
            let kalah = document.getElementById('kalah')
            setTimeout(() => {
                kalah.style.display = 'block'
            }, 1000);
            setTimeout(() => {
                playKalah()
            }, 1000);
            isTrue = false
            selesai = true
        }
    }
    if (isTrue) {
        index++
    }
    if (index === jawaban.length) {
        let tombol = document.getElementById('tombol')
        tombol.style.display = 'none'
        tombol.style.visibility = 'hidden'
        let jalan = document.getElementById('jalan')
        jalan.style.display = 'none'
        let menang = document.getElementById('menang');
        
        setTimeout(() => { menang.style.display = 'block'}, 1000);
        setTimeout(() => {
            playMenang()
        }, 1000);
        selesai = true
    }
    let jalan = document.getElementById('noJalan')
    jalan.innerHTML = index

    if (selesai == true){
        setTimeout(() => {
            location.replace("index.html")
        }, 6000);
        
    }
}



function playKiri() {
    var a = document.getElementById('kiriSuara');
    a.play();
}

function playKanan() {
    var a = document.getElementById('kananSuara');
    a.play();
}

function playLurus() {
    var a = document.getElementById('lurusSuara');
    a.play();
}

function playMenang() {
    var a = document.getElementById('menangSuara');
    // setInterval(a.play(), 3000)
    a.play();
}

function playKalah() {
    var a = document.getElementById('kalahSuara');
    // setInterval(a.play(), 3000)
    a.play();
}




