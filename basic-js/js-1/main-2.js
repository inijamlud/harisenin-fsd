// Buat program untuk mendapatkan ongkos kirim berdasarkan berat dan area.
// Pulau Jawa Rp 5.000/kg, luar Jawa Rp 5.500/kg.
// Berat > 10kg, diskon Rp 500/kg

const isJava = true;
const price = isJava ? 5000 : 5500;
const berat = 12;
let total = 0;

total = berat * price;

if (berat > 10) {
  const beratDiskon = berat - 10;
  const totalDiskon = beratDiskon * 500;
  console.log({ totalDiskon });
  total = total - totalDiskon;
}

console.log({ total, price, berat });
