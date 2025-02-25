// Data alumni (bisa juga diambil dari server / file JSON)
const alumni = [
    { id: 1, nama: "Budi Santoso", email: "budi@email.com" },
    { id: 2, nama: "Siti Aisyah", email: "siti@email.com" },
    { id: 3, nama: "Joko Widodo", email: "joko@email.com" }
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
                    <td>${alum.email}</td>
                   </tr>`;
        alumniTable.innerHTML += row;
    });
}
