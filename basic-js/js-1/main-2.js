// Buat program untuk mendapatkan ongkos kirim berdasarkan berat dan area.
// Pulau Jawa Rp 5.000/kg, luar Jawa Rp 5.500/kg.
// Berat > 10kg, diskon Rp 500/kg sisa total 10

const isJava = true;

// ternary operator
const price = isJava ? 5000 : 5500;

let price = 0;
if (isJava) {
  price = 5000;
} else {
  price = 5500;
}

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
