// Program utama
console.log("Aplikasi siap dijalankan...");

const mysql = require('mysql');

// Fitur koneksi ke database
function connectDatabase() {
    const connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "db_mahasiswa"
    });

    connection.connect(function(err) {
        if (err) throw err;
        console.log("✅ Berhasil terkoneksi ke database!");
        
        // Setelah terkoneksi, tambahkan data baru
        tambahData(connection);
    });
}

// Fitur tambah data ke database
function tambahData(connection) {
    const sql = "INSERT INTO mahasiswa (nama, jurusan) VALUES ('Okta Lestari', 'Teknik Informatika')";
    connection.query(sql, function(err, result) {
        if (err) throw err;
        console.log("✅ Data berhasil ditambahkan ke tabel mahasiswa!");
    });
}

// Jalankan koneksi ke database
connectDatabase();
