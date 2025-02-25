// Data alumni yang akan ditampilkan (bisa juga dari database)
const alumni = [
    { Andi Susanto,2020,RPL,Software Engineer,andi@example.com }
    { Siti Aminah,2019,TKJ,Network Administrator,siti@example.com }
    { Budi Rahman,2021,Multimedia,Graphic Designer,budi@example.com }
];

// Username & password untuk login
const validUsername = "admin";
const validPassword = "12345";

function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === validUsername && password === validPassword) {
        // Sembunyikan form login, tampilkan data alumni
        document.getElementById("login-container").style.display = "none";
        document.getElementById("alumni-container").style.display = "block";

        // Memuat data alumni
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
    alumniTable.innerHTML = ""; // Hapus isi sebelumnya

    alumni.forEach((alum) => {
        let row = `<tr>
                    <td>${alum.id}</td>
                    <td>${alum.nama}</td>
                    <td>${alum.email}</td>
                   </tr>`;
        alumniTable.innerHTML += row;
    });
}
