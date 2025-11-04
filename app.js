// Program utama
console.log("Aplikasi siap dijalankan...");

// Fitur koneksi ke database
function connectDatabase() {
    const mysql = require('mysql');
    const connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "db_mahasiswa"
    });

    connection.connect(function(err) {
        if (err) throw err;
        console.log("✅ Berhasil terkoneksi ke database!");
    });
}

connectDatabase();

