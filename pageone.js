alert("ini page pertama javascript");
var nama = prompt("Selamat datang, tuliskan nama anda : "),
    alamat = prompt("masukan alamat anda : ");
while (nama == '' || alamat == '') {
    nama = prompt('mohon input nama anda : ');
    alamat = prompt('mohon input alamat lengkap anda : ');
}
alert('silahkan cek nama dan alamat anda di console !!!');
console.log('nama: ' + nama);
console.log('alamat : ' + alamat);
alert('terimakasih partisipasi nya');