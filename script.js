// Validasi form sebelum dikirim
document.getElementById("formPetani").addEventListener("submit", function (e) {
  const nama = document.getElementById("nama").value.trim();
  const hp = document.getElementById("no_hp").value.trim();
  const luas = document.getElementById("luas").value;

  if (nama === "" || hp === "" || luas === "") {
    alert("Nama, No HP, dan Luas Lahan wajib diisi!");
    e.preventDefault();
    return;
  }
  if (isNaN(hp)) {
    alert("No HP harus berupa angka!");
    e.preventDefault();
  }
});

// Ambil dan tampilkan data petani
function muatData() {
  fetch("tampil.php")
    .then(res => res.json())
    .then(data => {
      let html = "<table><tr><th>No</th><th>Nama</th><th>Alamat</th><th>No HP</th><th>Luas</th></tr>";
      data.forEach((p, i) => {
        html += `<tr><td>${i + 1}</td><td>${p.nama}</td><td>${p.alamat}</td><td>${p.no_hp}</td><td>${p.luas_lahan}</td></tr>`;
      });
      html += "</table>";
      document.getElementById("hasil").innerHTML = html;
    });
}
muatData();