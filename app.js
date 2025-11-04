// Program utama
console.log("Aplikasi siap dijalankan...");

// Fitur tambah data ke database
function tambahData() {
    const mysql = require('mysql');
    const connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "db_mahasiswa"
    });

    connection.connect(function(err) {
        if (err) throw err;
        console.log("✅ Koneksi berhasil!");
        const sql = "INSERT INTO mahasiswa (nama, jurusan) VALUES ('Okta Lestari', 'Teknik Informatika')";
        connection.query(sql, function(err, result) {
            if (err) throw err;
            console.log("✅ Data berhasil ditambahkan ke tabel mahasiswa!");
        });
    });
}

tambahData();

