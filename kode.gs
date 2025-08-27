function doGet() {
  return HtmlService.createHtmlOutputFromFile('index.html');
}

function calculate(panjang, lebar, tinggi, dayaSebar, jumlahLapisan) {
  // Menghitung hasil sesuai dengan rumus yang diberikan
  var hasil = ((2 * (panjang * tinggi)) + (2 * (lebar * tinggi))) * jumlahLapisan / dayaSebar;
  return hasil;
}

