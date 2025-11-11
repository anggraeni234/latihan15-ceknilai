function cekNilai () {
  //mengambil value dari elemen input nilai
//simpan kedalam variabel bersama "nilai"
let nilai = Number(document.getElementById('nilai').value)

//menginisiasi variabel "hasil" isinya string kosong ""
let hasil = ""

//menentukan angka A B C D berdasarkan isi variabel "nilai"
//menggunakan percabangan if (jika)
//dan membandingkan variabel "nilai"
if (nilai >= 88) {
  hasil = "Nilai A (sangat baik)"
} else if (nilai >= 75) {
  hasil = "Nilai B (Baik)"
} else if (nilai >=50) {
  hasil = "Nilai C (Cukup)"
} else if (nilai >= 30) {
  hasil = " Nilai D (kurang)"
}else if (nilai >= 0)
hasil = " Nilai E (sangat-sangat kurang)"

//tampilkan isi variabel "hasil" ke elemen "hasil" di html
document.getElementById('hasil').innerText = hasil
}