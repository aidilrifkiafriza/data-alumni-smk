// Menampilkan alert saat halaman dimuat
document.addEventListener("DOMContentLoaded", function() {
    alert("Selamat datang di halaman data alumni!");
});

// Fungsi untuk menambahkan baris baru ke tabel
function tambahAlumni() {
    let table = document.getElementById("alumniTable");
    let row = table.insertRow(-1);
    
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    
    cell1.innerHTML = "123";
    cell2.innerHTML = "Nama Baru";
    cell3.innerHTML = "email@example.com";
}

// Menambahkan event listener untuk tombol tambah
let btnTambah = document.getElementById("btnTambah");
if (btnTambah) {
    btnTambah.addEventListener("click", tambahAlumni);
}
