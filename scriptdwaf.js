
function validateContactForm() {
  // Mengambil elemen input dari formulir kontak berdasarkan ID
  const nameInput = document.getElementById("contactFormName");
  const emailInput = document.getElementById("contactFormEmail");
  const phoneInput = document.getElementById("contactFormPhone");
  const messageInput = document.getElementById("contactFormMessage");

  // Mendapatkan nilai dari masing-masing input dan menghapus spasi pada awal dan akhirnya
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const phone = phoneInput.value.trim();
  const message = messageInput.value.trim();

  // Memeriksa apakah nama memiliki setidaknya 3 karakter
  if (name.length < 3) {
    alert("Please enter a name with at least 3 characters.");
    return false;
  }

  // Membuat ekspresi reguler untuk memeriksa apakah alamat email valid
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // Memeriksa apakah alamat email yang dimasukkan valid
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  // Membuat ekspresi reguler untuk memeriksa apakah nomor telepon hanya terdiri dari angka
  const phoneRegex = /^[0-9]+$/;
  // Memeriksa apakah nomor telepon yang dimasukkan hanya terdiri dari angka
  if (!phoneRegex.test(phone)) {
    alert("Please enter a valid email address.");
    return false;
  }

  // Memeriksa apakah message memiliki setidaknya 3 kata
  const messageWords = message.split(" ");
  if (messageWords.length < 3) {
    alert("Please enter a message with at least 3 words.");
    return false;
  }

  // Jika semua validasi valid
  return true;
}

// Mengambil elemen button kirim formulir berdasarkan ID
const submitBtn = document.getElementById("submitBtn");

// Menambahkan event listener untuk tombol kirim formulir
submitBtn.addEventListener("click", (event) => {
  // Jika validasi gagal, mencegah formulir dikirim
  if (!validateContactForm()) {
    event.preventDefault();
    // Jika validasi berhasil
  } else {//ini tidak muncul di console engga tau kenapa :'(
    console.log("Form submitted successfully");
  }
});
