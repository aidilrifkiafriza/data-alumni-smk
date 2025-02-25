// Data alumni (bisa juga diambil dari server / file JSON)
const alumni = [
    { id: 1, nama: "Budi Santoso", tahun lulus: "2020", jurusan: "RPL", pekerjaan: "Software Engineer", kontak: "andi@example.com" }
    { id: 2, nama: "Siti Aminah", tahun lulus: "2019", jurusan: "TKJ", pekerjaan: "Network Administrator", kontak: "siti@example.com" }
    { id: 3, nama: "Budi Rahman", tahun lulus: "2021", jurusan: "Multimedia", pekerjaan: "Graphic Designer", kontak: "budi@example.com" }
];

// Simulasi username & password
const validUsername = "admin";
const validPassword = "12345";

function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === validUsername && password === validPassword) {
        document.getElementById("login-container").style.display = "none";
        document.getElementById("alumni-container").style.display = "block";
        loadAlumni();
    } else {
        document.getElementById("login-error").innerText = "Username atau password salah!";
    }
}

function logout() {
    document.getElementById("login-container").style.display = "block";
    document.getElementById("alumni-container").style.display = "none";
}

function loadAlumni() {
    let alumniTable = document.getElementById("alumni-data");
    alumniTable.innerHTML = "";

    alumni.forEach((alum) => {
        let row = `<tr>
                    <td>${alum.id}</td>
                    <td>${alum.nama}</td>
                    <td>${alum.tahun lulus}</td>
                    <td>${alum.jurusan}</td>
                    <td>${alum.pekerjaan}</td>
                    <td>${alum.kontak}</td>
                   </tr>`;
        alumniTable.innerHTML += row;
    });
}
