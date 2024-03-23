// Fungsi untuk membuat jenis-jenis gulai
function buatGulai(jenisDaging) {
  let bumbu = ""; // Variabel untuk menyimpan bumbu-bumbu gulai
  
  // Tentukan bumbu-bumbu sesuai dengan jenis daging
  if (jenisDaging === "ayam") {
      bumbu = "Daging Ayam, santan, bawang merah, bawang putih, jahe, lengkuas, kemiri, cabai, kunyit, garam, gula";
  } else if (jenisDaging === "kambing") {
      bumbu = "Daging Kambing, santan, bawang merah, bawang putih, serai, daun jeruk, cabai, ketumbar, merica, garam, gula";
  } else if (jenisDaging === "sapi") {
      bumbu = "Daging Sapi, santan, bawang merah, bawang putih, jahe, serai, daun salam, daun jeruk, cabai, kunyit, ketumbar, garam, gula";
  } else {
      console.log("Jenis daging tidak dikenali");
      return;
  }
  
  // Tampilkan bumbu untuk jenis gulai yang dipilih
  console.log("Bumbu gulai " + jenisDaging + ": " + bumbu);
}

// Contoh pemanggilan fungsi untuk membuat gulai
buatGulai("ayam");