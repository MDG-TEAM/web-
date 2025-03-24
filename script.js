function simpanNama() {
    let nama = document.getElementById('nama').value;
    if (nama.trim() === '') {
        alert("Nama tidak boleh kosong!");
        return;
    }
    localStorage.setItem('nama', nama);
    window.location.href = 'play.html';
}

document.addEventListener("DOMContentLoaded", function () {
    let gasText = document.getElementById("gasText");
    if (gasText) {
        let nama = localStorage.getItem("nama");
        if (nama) {
            gasText.textContent = `YOK GAS LOGIN, ${nama.toUpperCase()}!`;
        }
    }
});