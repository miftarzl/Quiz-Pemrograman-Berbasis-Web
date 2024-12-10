const quizData = [
  {
    question: "Property CSS yang digunakan untuk mengatur teks atau tulisan disebut...",
    options: [
      "A. Text color",
      "B. Text transform",
      "C. Text align",
      "D. Text decoration"
    ],
    answer: "B. Text transform"
  },
  {
    question: "Tag yang digunakan untuk menggabungkan sel baris adalah...",
    options: [
      "A. Rowspan",
      "B. Cellspacing",
      "C. Cellpadding",
      "D. Colspan"
    ],
    answer: "A. Rowspan"
  },
  {
    question: "Property yang mengatur bagaimana elemen dari suatu tag akan ditampilkan adalah...",
    options: [
      "A. Tag",
      "B. Markup",
      "C. Atribut",
      "D. Elemen"
    ],
    answer: "C. Atribut"
  },
  {
    question: "Atribut yang digunakan untuk mengatur jarak antara garis tepi, dari bagian dalam dengan garis tepi di bagian luar adalah...",
    options: [
      "A. Colspan",
      "B. Cellpadding",
      "C. Cellspacing",
      "D. Rowspan"
    ],
    answer: "C. Cellspacing"
  },
  {
    question: "Tag yang digunakan untuk membuat ukuran karakter kecil yang diletakkan di bagian atas teks adalah...",
    options: [
      "A. Selector",
      "B. Superscript",
      "C. Subscript",
      "D. Style"
    ],
    answer: "B. Superscript"
  },
  {
    question: "Penulisan CSS menggunakan tag <style>..</style> yang ditulis dalam elemen <head>...</head> serta hanya digunakan pada satu halaman html yang terdiri dari sedikit selector, merupakan fungsi dari...",
    options: [
      "A. Internal CSS",
      "B. Inline CSS",
      "C. Selector",
      "D. External CSS"
    ],
    answer: "A. Internal CSS"
  },
  {
    question: "Tag yang digunakan pada elemen untuk mempertegas bagian penting pada sebuah halaman web page, ditampilkan sesuai dengan ukuran yang ditentukan adalah...",
    options: [
      "A. Heading",
      "B. Font",
      "C. Selector",
      "D. Inframe"
    ],
    answer: "A. Heading"
  },
  {
    question: "Tag yang digunakan untuk membuat ukuran karakter kecil yang diletakkan di bagian bawah teks adalah...",
    options: [
      "A. Subscript",
      "B. Superscript",
      "C. Selector",
      "D. Style"
    ],
    answer: "A. Subscript"
  },
  {
    question: "Penulisan CSS dengan menggunakan atribut style yang langsung dituliskan di dalam tag HTML, digunakan jika CSS memiliki satu atau dua property yang bersifat permanen, merupakan fungsi dari...",
    options: [
      "A. Selector",
      "B. External CSS",
      "C. Internal CSS",
      "D. Inline CSS"
    ],
    answer: "D. Inline CSS"
  },
  {
    question: "Selector yang memiliki penulisan tanda titik ( . ) diawal dan menyebutkan nama class dari suatu tag yang akan dimodifikasi adalah...",
    options: [
      "A. Selector id",
      "B. Selector universal",
      "C. Selector tag",
      "D. Selector class"
    ],
    answer: "D. Selector class"
  },
  {
    question: "Suatu obyek yang berisi data-data, yang mana dapat di modifikasi selama pengeksekusian program adalah....",
    options: [
      "A. Karakter",
      "B. Integer",
      "C. Variabel",
      "D. Konstanta"
    ],
    answer: "C. Variabel"
  },
  {
    question: "Sebuah blok deklarasi terdiri dari beberapa deklarasi yang dipisahkan oleh.....",
    options: [
      "A. ",
      "B. >",
      "C. ,",
      "D. )"
    ],
    answer: "C. ,"
  },
  {
    question: "Tag enumerasi untuk membuat daftar dimana tiap bagiannya memiliki nomor secara berurut adalah...",
    options: [
      "A. <ul>",
      "B. <tr>",
      "C. col",
      "D. <li>"
    ],
    answer: "<ol>"
  },
  {
    question: "Small-caps termasuk font.",
    options: [
      "A. Variant",
      "B. Weight",
      "C. Style",
      "D. Size"
    ],
    answer: "A. Variant"
  },
  {
    question: "Dalam mengakses sebuah properti, perlu penulisan dengan bentuk",
    options: [
      "A. nama objek nama properti",
      "B. nama objelcnama_properti",
      "C. nama objek.nama properti",
      "D. nama objeicnama properti"
    ],
    answer: "C. nama objek.nama properti"
  },
  {
    question: "URL merupakan singkatan dari",
    options: [
      "A. Uniform Ring Locator",
      "B. Uniform Resource Location",
      "C. Uniform Resource Locator",
      "D. Uniform Ring Location"
    ],
    answer: "C. Uniform Resource Locator"
  },
  {
    question: "Berikut yang bukan termasuk web browser, yaitu",
    options: [
      "A. Apache",
      "B. Chrome",
      "C. Safari",
      "D. Mozilla Firefox"
    ],
    answer: "A. Apache"
  },
  {
    question: "Atribut dari sebuah objek adalah...",
    options: [
      "A. Status",
      "B. Metode",
      "C. Penanganan Kejadian",
      "D. Properti"
    ],
    answer: "D. Properti"
  },
  {
    question: "Yang perlu dipelajari untuk membuat aplikasi berbasis web di sisi client, yaitu",
    options: [
      "A. Server side scripting (PHP, JSP, ASP, dll)",
      "B. Sintaks pengalamatan dokumen web (URL)",
      "C. Protokol komunikasi (HTTP)",
      "D. Sintaks pembuatan dokumen web (HTML & CSS)"
    ],
    answer: "D. Sintaks pembuatan dokumen web (HTML & CSS)"
  },
  {
    question: "HTTP merupakan singkatan dari",
    options: [
      "A. Hyper Text Transfer Provider",
      "B. Hyper Text Transfer Protocol",
      "C. HyperText Transformasi Protocol",
      "D. HyperText Transmit Protocol"
    ],
    answer: "B. Hyper Text Transfer Protocol"
  },
  {
    question: "(.) termasuk operator",
    options: [
      "A. String/Penggabungan",
      "B. Aritmetika",
      "C. Bitwise",
      "D. Increment/Decrement"
    ],
    answer: "A. String/Penggabungan"
  },
  {
    question: "Dalam konstanta penulisan \"\", karakter yang dimaksud....",
    options: [
      "A. Tanda dolar",
      "B. Newline",
      "C. Petik ganda",
      "D. Backslash"
    ],
    answer: "C. Petik ganda"
  },
  {
    question: "Dapat mendataksi pesan kesalahan (Error Code) pada chent dengan menggunakan lebih dari dua puluh bahasa adalah",
    options: [
      "A. Localisation",
      "B. Connectivity",
      "C. Concurrency",
      "D. Interface"
    ],
    answer: "A. Localisation"
  },
  {
    question: "Mampu meningars data dalam skala besar dengan jumlah resource lebih dari 50 juta dan 60 ribu tabel serta 5 miliar bans adalah...",
    options: [
      "A. Command dan Function",
      "B. Security",
      "C. Scalability dan Limits",
      "D. Column Types"
    ],
    answer: "C. Scalability dan Limits"
  },
  {
    question: "Tipe data PHP yang menyimpan nilai bilangan bulat adalah",
    options: [
      "A. Integer",
      "B. Floating Point",
      "C. String",
      "D. Null"
    ],
    answer: "A. Integer"
  },
  {
    question: "Kecepatan yang baik dalam menangani query sederhana adalah",
    options: [
      "A. Portability",
      "B. Performance Tuning",
      "C. Multiuser",
      "D. Open Source"
    ],
    answer: "B. Performance Tuning"
  },
  {
    question: "Fungsi-fungsi MySQL yang dapat diakses untuk menjalankan suatu permintaan terhadap suatu database, termasuk dalam",
    options: [
      "A. MySQL select",
      "B. MySQL do query",
      "C. MySQL query",
      "D. MySQL select"
    ],
    answer: "C. MySQL query"
  },
  {
    question: "Merupakan tipe data terstruktur yang berguna untuk menyimpan sejumlah data yang bertipe sama adalah",
    options: [
      "A. Array",
      "B. Constant",
      "C. Operator",
      "D. Variable"
    ],
    answer: "A. Array"
  },
  {
    question: "Dilengkapi dengan berbagai tool yang dapat digunakan untuk administrasi basis data adalah",
    options: [
      "A. PHP",
      "B. Javascript",
      "C. SQL",
      "D. MySQL"
    ],
    answer: "D. MySQL"
  },
  {
    question: "Nama variabel diawali dengan tanda salah dan tidak diawali oleh",
    options: [
      "A. Huruf atau K",
      "B. Angka atau Titik",
      "C. Angka atau Underscore",
      "D. Huruf atau Underscore"
    ],
    Answer: "D. Huruf atau Underscore"
  },
  {
    question: "Operasi data dalam database umumnya mengikuti pola yang sama, yaitu melalui langkah sebagai berikut:",
    options: [
      "A. Membuka sambungan dengan database server, Memilih dan membuka database yang diinginkan, Mengirim perintah untuk mengambil/mengubah/menghapus, Mengakses hasil pengambilan data, Mengakhiri sambungan",
      "B. Memilih dan membuka database yang diinginkan, Membuka sambungan dengan database server, Mengirim perintah untuk mengambil/mengubah/menghapus, Mengakses hasil pengambilan data, Mengakhiri sambungan",
      "C. Membuka sambungan dengan database server, Memilih dan membuka database yang diinginkan, Mengakses hasil pengambilan data, Mengirim perintah untuk mengambil/mengubah/menghapus, Mengakhiri sambungan",
      "D. A, B dan C benar"
    ],
    answer: "D. A, B dan C benar"
  },
  {
    question: "Perintah untuk menghapus record dari tabel anggota yang bernomor ‘3’ adalah:",
    options: [
      "A. delete from anggota",
      "B. drop from anggota",
      "C. delete from anggota where nomor = 3",
      "D. drop from anggota where nomor=3"
    ],
    answer: "C. delete from anggota where nomor = 3"
  },
  {
    question: "Salah satu teknologi yang digunakan untuk memperindah halaman situs sesuai dengan selera pembuat adalah:",
    options: [
      "A. PHP",
      "B. XML",
      "C. CSS",
      "D. CMS"
    ],
    answer: "C. CSS"
  },
  {
    question: "HTML yang benar untuk membuat sebuah hyperlink adalah:",
    options: [
      "A. <a href='http://www.gunadarma.ac.id'>Universitas Gunadarma</a>",
      "B. <a name='http://www.gunadarma.ac.id'> Universitas Gunadarma </a>",
      "C. <a url='http://www.gunadarma.ac.id'> gunadarma.ac.id</a>",
      "D. <a>http://www.gunadarma.ac.id</a>"
    ],
    answer: "A. <a href='http://www.gunadarma.ac.id'>Universitas Gunadarma</a>"
  },
  {
    question: "Penulisan variable pada skrip PHP diawali dengan:",
    options: [
      "A. &",
      "B. ?",
      "C. $",
      "D. @"
    ],
    answer: "C. $"
  },
  {
    question: "CMS dapat memberikan pengaturan yang fleksibilitas dalam:",
    options: [
      "A. Hak akses dan Workline",
      "B. Workflow dan Hak Angket",
      "C. Alur Kerja dan Workline",
      "D. Workflow (alur kerja) dan Hak akses"
    ],
    answer: "D. Workflow (alur kerja) dan Hak akses"
  },
  {
    question: "Hasil dari kompilasi program Java adalah:",
    options: [
      "A. exe",
      "B. asm",
      "C. bytecode",
      "D. Bahasa Mesin (biner)"
    ],
    answer: "C. bytecode"
  },
  {
    question: "Bahasa JavaScript mirip dengan bahasa:",
    options: [
      "A. HTML/Java",
      "B. Java/C++",
      "C. Pascal/C++",
      "D. Java/Pascal"
    ],
    answer: "B. Java/C++"
  },
  {
    question: "Cara mengkompilasi file Java yang benar adalah:",
    options: [
      "A. javac HelloWorld.java",
      "B. javac HelloWorld",
      "C. java HelloWorld.java",
      "D. java HelloWorld.javac"
    ],
    answer: "A. javac HelloWorld.java"
  },
  {
    question: "Script yang digunakan untuk menampilkan output seperti 4 + 5 adalah:",
    options: [
      "A. echo(4+5=.4+5);",
      "B. echo(“4+5=”.4+5);",
      "C. echo(4+5=.4+5);",
      "D. echo(“4+5=”.4+5);"
    ],
    answer: "D. echo(“4+5=”.4+5);"
  },
  {
    question: "Hasil yang ditampilkan pada browser untuk <h1> adalah:",
    options: [
      "A. Text dengan garis atas",
      "B. Text dengan garis bawah",
      "C. Text dengan garis tengah",
      "D. Text tanpa dekorasi"
    ],
    answer: "A. Text dengan garis atas"
  },
  {
    question: "Hasil yang ditampilkan pada browser untuk <h2> adalah:",
    options: [
      "A. Text dengan garis bawah",
      "B. Text dengan garis tengah",
      "C. Text tanpa dekorasi",
      "D. Text dengan garis atas"
    ],
    answer: "B. Text dengan garis tengah"
  },
  {
    question: "Hasil yang ditampilkan pada browser untuk <h3> adalah:",
    options: [
      "A. Text dengan garis bawah",
      "B. Text dengan garis tengah",
      "C. Text tanpa dekorasi",
      "D. Text dengan garis atas"
    ],
    answer: "A. Text dengan garis bawah"
  },
  {
    question: "Hasil yang ditampilkan pada browser untuk <a> adalah:",
    options: [
      "A. Text dengan hyperlink",
      "B. Text tanpa hyperlink",
      "C. Text dengan garis bawah",
      "D. Text dengan garis tengah"
    ],
    answer: "A. Text dengan hyperlink"
  },
  {
    question: "Apakah hasil dari HTML di bawah ini:",
    options: [
      "A. Selamat Mengerjakan Soal Ujian langan nyontek ya!!",
      "B. Selamat Mengerjakan Soal Ujian Jangan nyontek ya!!",
      "C. Selamat Mengerjakan Soal Ujian langan nyontek ya!!",
      "D. Selamat Mengerjakan Soal Ujian Jangan nyontek ya!!"
    ],
    answer: "A. Selamat Mengerjakan Soal Ujian langan nyontek ya!!"
  },
  {
    question: "Kode stylesheet internal dituliskan di bagian:",
    options: [
      "A. <HTML>",
      "B. <BODY>",
      "C. <HEAD>",
      "D. <TITLE>"
    ],
    answer: "C. <HEAD>"
  },
  {
    question: "Untuk mengaitkan stylesheet eksternal dengan nama 'styleku.css':",
    options: [
      "A. <link rel = 'stylesheet' type = 'text/css' href = 'styleku.css'>",
      "B. <style = 'text/css'>",
      "C. <style = 'text/css' href = 'styleku.css'>"
    ],
    answer: "A. <link rel = 'stylesheet' type = 'text/css' href = 'styleku.css'>"
  },
  {
    question: "Tag tertentu yang memerintahkan navigator untuk memperlakukan bahwa skrip tersebut adalah skrip dari JavaScript:",
    options: [
      "A. <script language = 'java script'> </script>",
      "B. <? = 'java script'> </?>",
      "C. <% language = 'java script'> </%>",
      "D. Semua Salah"
    ],
    answer: "A. <script language = 'java script'> </script>"
  },
  {
    question: "Untuk mengakses sebuah properti, perlu penulisan dengan bentuk sebagai berikut:",
    options: [
      "A. nama_objek.nama_properti",
      "B. nama_properti.nama_objek",
      "C. nama_objek.nama_properti.nama_method",
      "D. Semua Salah"
    ],
    answer: "A. nama_objek.nama_properti"
  },
  {
    question: "Perhatikan program di bawah ini: <HTML><HEAD><TITLE>Contohfor</TITLE></HEAD><BODY><SCRIPT LANGUAGE = 'javaScript'>//var X = 0; for (X = 10; X <= 15; X++) document.write(X + '<BR>');//</SCRIPT></BODY></HTML> Output program diatas adalah:",
    options: [
      "A. 10",
      "B. 11 11 12 12 13 13 14 14 15 15",
      "C. 10",
      "D. Semua salah 11 12 13 14"
    ],
    answer: "B. 11 11 12 12 13 13 14 14 15 15"
  },
  {
    question: "Pemrogram web yang dapat berdiri sendiri ataupun disisipkan diantara kode-kode HTML sehingga dapat langsung ditampilkan bersama dengan kode-kode HTML tersebut adalah:",
    options: [
      "A. JavaScript",
      "B. PHP",
      "C. CSS",
      "D. Semua jawaban benar"
    ],
    answer: "D. Semua jawaban benar"
  },
  {
    question: "Aplikasi pada umumnya akan memberikan hasil pada web browser, tetapi prosesnya secara keseluruhan dijalankan web server. Pernyataan yang benar yang berhubungan pernyataan diatas adalah:",
    options: [
      "A. Client side scripting",
      "B. JavaScript, PHP",
      "C. Server side scripting",
      "D. Common Gateway Interface"
    ],
    answer: "C. Server side scripting"
  },
  {
    question: "Pilihlah pernyataan di bawah ini yang benar:",
    options: [
      "A. Semua elemen XML harus ditulis menggunakan huruf kecil",
      "B. Semua dokumen XML harus mempunyai sebuah DTD",
      "C. Semua elemen XML harus mempunyai tag pembuka dan tag penutup",
      "D. Penulisan script XML lebih mudah dibandingkan dari HTML"
    ],
    answer: "C. Semua elemen XML harus mempunyai tag pembuka dan tag penutup"
  },
  {
    question: "XML merupakan singkatan dari:",
    options: [
      "A. eXample Markup Language",
      "B. eXtra Modern Link",
      "C. eXtensible Markup Language",
      "D. X-Markup Language"
    ],
    answer: "C. eXtensible Markup Language"
  },
  {
    question: "Tag HTML untuk mendefinisikan internal style sheet:",
    options: [
      "A. <script>",
      "B. <style>",
      "C. <css>",
      "D. <input style>"
    ],
    answer: "B. <style>"
  },
  {
    question: "Data XML dideskripsikan dengan menggunakan:",
    options: [
      "A. HTML",
      "B. DTD",
      "C. CSS",
      "D. XSL"
    ],
    answer: "B. DTD"
  },
  {
    question: "Output program berikut ini:",
    code: `<?php
for($i = 0; $i < 5; $i++) {
    if($i == 2) {
        continue;
    }
}
echo("Nilai i : $i <br>");
echo("Loop Selesai");
?>`,
    options: [
      "A. Nilai i : 0",
      "B. Nilai i : 0\nNilai i : 1\nNilai i : 3\nNilai i : 4\nLoop Selesai",
      "C. Nilai i : 0",
      "D. Nilai i : 0\nNilai i : 1\nLoop Selesai\nNilai i : 3\nNilai i : 4"
    ],
    answer: "B. Nilai i : 0\nNilai i : 1\nNilai i : 3\nNilai i : 4\nLoop Selesai"
  },
  {
    question: "Output dari potongan program berikut ini adalah:",
    code: `<?php
function tambahSatu($angka) {
    $angka++;
}

$a = 7;
tambahSatu($a);
echo("Nilai a = " . $a);
?>`,
    options: [
      "A. Nilai a = 8",
      "B. Nilai a = 6",
      "C. Nilai a = 7",
      "D. Nilai a = 9"
    ],
    answer: "C. Nilai a = 7"
  },
  {
    question: "Output dari potongan program berikut ini adalah:",
    code: `<?php
function testVar() {
    $a = 3;
    $a = 3++;
}

echo($a);
?>`,
    options: [
      "A. 3",
      "B. Error",
      "C. 4",
      "D. Tidak ada jawaban yang benar"
    ],
    answer: "B. Error"
  },
  {
    question: "Statement apa yang harus diisi pada titik-titik di atas agar menghasilkan output: 'Selamat Belajar PHP'",
    code: `<?php
$bahasa = "PHP";
print("\"Selamat Belajar PHP\"<BR>\n");
//....................
?>`,
    options: [
      "A. print(\"$bahasa= \\\"$bahasa\");",
      "B. print(\"$bahasa= $bahasa\");",
      "C. print(\"$bahasa= $bahasa\");",
      "D. print(\"$bahasa= \\$bahasa\");"
    ],
    answer: "A. print(\"$bahasa= \\\"$bahasa\");"
  },
  {
    question: "Apa yang dimaksud dengan Value pada CSS?",
    options: [
      "A. Tag yang ingin diberikan style",
      "B. Atribut dari background",
      "C. Atribut yang ingin didefinisikan",
      "D. Nilai dari atribut"
    ],
    answer: "D. Nilai dari atribut"
  },
  {
    question: "Yang merupakan objek tertinggi dalam JavaScript adalah:",
    options: [
      "A. String",
      "B. Document",
      "C. Math",
      "D. Window"
    ],
    answer: "D. Window"
  },
  {
    question: "Lengkapi atribut di bawah ini:",
    code: `<img ....="computer.gif">`,
    options: [
      "A. rsc",
      "B. src",
      "C. scr",
      "D. rc"
    ],
    answer: "B. src"
  },
  {
    question: "Di bawah ini adalah kelemahan dari HTML daripada XML kecuali:",
    options: [
      "A. Tidak memberikan 'informasi' tentang isi dari sebuah halaman page",
      "B. Tampilan bias di parsing, dan tidak bisa digunakan kembali",
      "C. Tampilan tidak bisa di parsing, dan tidak bisa digunakan kembali",
      "D. Terbatas hanya untuk melakukan format tampilan pada web browser"
    ],
    answer: "D. Terbatas hanya untuk melakukan format tampilan pada web browser"
  },
  {
    question: "HTML merupakan singkatan dari:",
    options: [
      "A. Hyperlinks and Text Markup Language",
      "B. Hyper Text Markup Language",
      "C. Home Tool Markup Language",
      "D. Hyper Text Multi Language"
    ],
    answer: "B. Hyper Text Markup Language"
  },
  {
    question: "Siapakah yang membuat standar di Web?",
    options: [
      "A. Microsoft",
      "B. The World Wide Web Consortium",
      "C. Mozilla Firefox",
      "D. Internet Explorer"
    ],
    answer: "B. The World Wide Web Consortium"
  },
  {
    question: "namestyle (property;) merupakan bentuk umum penulisan CSS menggunakan metode:",
    options: [
      "A. Atribut ID",
      "B. Class",
      "C. Tag",
      "D. Inline"
    ],
    answer: "D. Inline"
  },
  {
    question: "Manakah sintaks HTML berikut ini yang tidak valid?",
    options: [
      "A. <font face = 'verdana, arial'>",
      "B. <font face = 'verdana'>",
      "C. <fontface = 'verdana'>",
      "D. Jawaban A, B, dan C salah"
    ],
    answer: "C. <fontface = 'verdana'>"
  },
  {
    question: "Penulisan variabel PHP yang tepat:",
    options: [
      "A. $2dua",
      "B. $my−Var",
      "C. $variabelku",
      "D. $nomor saya"
    ],
    answer: "C. $variabelku"
  },
  {
    question: "Nama web server pada XAMPP adalah:",
    options: [
      "A. IIS",
      "B. PHP",
      "C. MySQL",
      "D. Apache"
    ],
    answer: "D. Apache"
  },
  {
    question: "Sintaks HTML untuk mengatur agar teks di dalam sel table menjadi rata kanan:",
    options: [
      "A. <td align='right'>",
      "B. <td rightalign>",
      "C. <td valign='right'>",
      "D. <tdright>"
    ],
    answer: "A. <td align='right'>"
  },
  {
    question: "Untuk mengatur warna border pada CSS menggunakan properti:",
    options: [
      "A. border−color:",
      "B. border color:",
      "C. color−border:",
      "D. colorborder:"
    ],
    answer: "A. border−color:"
  },
  {
    question: "Protokol yang berfungsi untuk mentransfer dokumen dalam World Wide Web (WWW) disebut:",
    options: [
      "A. TCP/IP",
      "B. HTTP",
      "C. SNMP",
      "D. www (web3)"
    ],
    answer: "B. HTTP"
  },
  {
    question: "h1 (color: #00FF00) digunakan untuk mengatur:",
    options: [
      "A. warna background",
      "B. warna text",
      "C. warna border",
      "D. warna table"
    ],
    answer: "B. warna text"
  },
  {
    question: "Untuk menghubungkan PHP dengan database MySQL menggunakan perintah:",
    options: [
      "A. mysql_connect('localhost');",
      "B. connect_mysql('localhost');",
      "C. mysql_open('localhost');",
      "D. dbopen('localhost');"
    ],
    answer: "A. mysql_connect('localhost');"
  },
  {
    question: "Untuk menampilkan kalimat 'Selamat pagi' dalam PHP:",
    options: [
      "A. 'Selamat pagi';",
      "B. response.write('Selamat pagi')",
      "C. document.write('Selamat pagi');",
      "D. echo 'Selamat pagi';"
    ],
    answer: "D. echo 'Selamat pagi';"
  },
  {
    question: "Statemen PHP diakhiri dengan tanda:",
    options: [
      "A. !",
      "B. ;",
      "C. #",
      "D. ?"
    ],
    answer: "B. ;"
  },
  {
    question: "Apa HTML yang benar untuk menambahkan warna latar (background)?",
    options: [
      "A. <background>yellow</background>",
      "B. <body color='yellow'>",
      "C. <body bgcolor='yellow'>",
      "D. <background color='yellow'>"
    ],
    answer: "C. <body bgcolor='yellow'>"
  },
  {
    question: "Selain tag <b>, untuk menebalkan teks dapat juga menggunakan:",
    options: [
      "A. <fat>",
      "B. <bold>",
      "C. <dark>",
      "D. <strong>"
    ],
    answer: "D. <strong>"
  },
  {
    question: "Tag HTML dimulai dan diakhiri dengan tanda:",
    options: [
      "A. < dan >",
      "B. #< dan #>",
      "C. (? dan !)",
      "D. (? dan ?)"
    ],
    answer: "A. < dan >"
  },
  {
    question: "Tag dan teks yang tidak ditampilkan secara langsung di halaman web diletakkan di:",
    options: [
      "A. Table",
      "B. Head",
      "C. Body",
      "D. Frame"
    ],
    answer: "B. Head"
  },
  {
    question: "CSS singkatan dari:",
    options: [
      "A. Creative Style Sheets",
      "B. Cascading Style Sheets",
      "C. Cascade Style Sheets",
      "D. Colorful Style Sheets"
    ],
    answer: "B. Cascading Style Sheets"
  },
  {
    question: "Deklarasi untuk mendefinisikan versi XML yang digunakan:",
    options: [
      "A. <xml version='1.0'>",
      "B. <xml version='1.0.0'>",
      "C. <xml version='1.0.1'>",
      "D. <xml version='1.1'>"
    ],
    answer: "A. <xml version='1.0'>"
  },
  {
    question: "Statemen PHP diakhiri dengan tanda:",
    options: [
      "A. !",
      "B. ;",
      "C. #",
      "D. ?"
    ],
    answer: "B. ;"
  },
  {
    question: "Tag HTML untuk menjalankan program JavaScript yang disimpan dalam bentuk file adalah:",
    options: [
      "A. <script href='file.js'> </script>",
      "B. <script language='file.js'> </script>",
      "C. <script src='file.js'> </script>",
      "D. <script name='file.js'> </script>"
    ],
    answer: "C. <script src='file.js'> </script>"
  },
  {
    question: "Contoh CMS Open Source:",
    options: [
      "A. V7 Content Management Suite",
      "B. Roxen CMS",
      "C. RedDot",
      "D. PostNuke"
    ],
    answer: "D. PostNuke"
  },
  {
    question: "Penulisan elemen XML yang salah di bawah ini:",
    options: [
      "A. <xmldocument>",
      "B. <NAME>",
      "C. <umur>",
      "D. <Note>"
    ],
    answer: "A. <xmldocument>"
  },
  {
    question: "Tag HTML yang digunakan untuk mendefinisikan internal style sheet adalah:",
    options: [
      "A. <style>",
      "B. <text/style>",
      "C. <css>",
      "D. <script>"
    ],
    answer: "A. <style>"
  },
  {
    question: "Pernyataan yang salah tentang XML:",
    options: [
      "A. Semua elemen XML harus diakhiri dengan tag penutup",
      "B. Bersifat case sensitive",
      "C. Elemen XML tidak boleh overlapping",
      "D. Dokumen XML tidak harus mempunyai satu root element"
    ],
    answer: "D. Dokumen XML tidak harus mempunyai satu root element"
  },
  {
    question: "Manakah penulisan CSS yang benar?",
    options: [
      "A. (body; color: blue}",
      "B. body (color: blue}",
      "C. body: color=blue(body}",
      "D. body: color=blue"
    ],
    answer: "D. body: color=blue"
  },
  {
    question: "DTD merupakan singkatan dari:",
    options: [
      "A. Dynamic Type Definition",
      "B. Direct Type Definition",
      "C. Document Type Definition",
      "D. Dynamic Type Declaration"
    ],
    answer: "C. Document Type Definition"
  },
  {
    question: "Tag <a> dan </a> digunakan untuk:",
    options: [
      "A. Mengatur teks",
      "B. Mengatur background",
      "C. Menambahkan image",
      "D. Menambahkan link"
    ],
    answer: "D. Menambahkan link"
  },
  {
    question: "Cara menyisipkan komentar pada file CSS:",
    options: [
      "A. /* ini komentar */",
      "B. ' ini komentar",
      "C. // ini komentar //",
      "D. // ini komentar"
    ],
    answer: "A. /* ini komentar */"
  },
  {
    question: "Kelebihan dari XML adalah:",
    options: [
      "A. Informasi dapat dipertukarkan dari satu sistem ke sistem yang berbeda",
      "B. Pelantufolirsman script XML lebih mudah dibandingkan HTML",
      "C. Informasi membutuhkan memori yang kecil",
      "D. Informasi yang dipertukarkan hanya berbentuk karakter"
    ],
    answer: "A. Informasi dapat dipertukarkan dari satu sistem ke sistem yang berbeda"
  },
  {
    question: "Script PHP dimulai dan diakhiri dengan:",
    options: [
      "A. <?php ... ?>",
      "B. <?php> .... </?>",
      "C. <script> </script>",
      "D. <&> </&>"
    ],
    answer: "A. <?php ... ?>"
  },
  {
    question: "Output dari program JavaScript berikut adalah:",
    code: `<script type="text/javascript">
document.write(Math.max(5,7,8,3,10,11) + "<br />");
</script>`,
    options: [
      "A. 11",
      "B. 10",
      "C. 3 5 7 8 10 11",
      "D. 11 10 8 7 5 3"
    ],
    answer: "A. 11"
  },
  {
    question: "Bagaimana membuat fungsi pada JavaScript?",
    options: [
      "A. function: myFunction()",
      "B. function = myFunction()",
      "C. create myFunction()",
      "D. function myFunction()"
    ],
    answer: "D. function myFunction()"
  },
  {
    question: "Pernyataan yang paling tepat tentang CMS:",
    options: [
      "A. Sebuah sistem yang dibutuhkan untuk menyusun dan menyajikan informasi dengan format yang tidak mengandung format standard",
      "B. Sebuah sistem untuk menampilkan informasi dan berfokus pada bagaimana informasi terlihat",
      "C. Sebuah sistem yang memberikan kemudahan kepada para penggunanya dalam mengelola dan mengadakan perubahan isi sebuah website dinamis tanpa sebelumnya dibekali pengetahuan tentang hal-hal yang bersifat teknis",
      "D. Sebuah sistem untuk memperindah tampilan halaman web"
    ],
    answer: "C. Sebuah sistem yang memberikan kemudahan kepada para penggunanya dalam mengelola dan mengadakan perubahan isi sebuah website dinamis tanpa sebelumnya dibekali pengetahuan tentang hal-hal yang bersifat teknis"
  },
  {
    question: "Apa HTML yang benar untuk menambahkan warna latar (background)?",
    options: [
      "A. <background>yellow</background>",
      "B. <body color=\"yellow\">",
      "C. <body bgcolor=\"yellow\">",
      "D. <background color=\"yellow\">"
    ],
    answer: "C. <body bgcolor=\"yellow\">"
  },
  {
    question: "<!ELEMENT hewan (kucing)> artinya:",
    options: [
      "A. Elemen hewan dapat berisi elemen lain",
      "B. Elemen hewan boleh mempunyai lebih dari satu elemen kucing",
      "C. Elemen hewan tidak memiliki elemen lain",
      "D. Elemen hewan hanya boleh memiliki satu elemen kucing"
    ],
    answer: "D. Elemen hewan hanya boleh memiliki satu elemen kucing"
  },
  {
    question: "Selain tag <b>, untuk menebalkan teks dapat juga menggunakan:",
    options: [
      "A. <strong>",
      "B. <bold>",
      "C. <dark>",
      "D. <fat>"
    ],
    answer: "A. <strong>"
  },
  {
    question: "Manakah sintaks HTML berikut ini yang tidak valid?",
    options: [
      "A. <fontface = \"verdana\">",
      "B. <font face = \"verdana\">",
      "C. <font face = \"verdana, arial\">",
      "D. Jawaban A, B, dan C salah"
    ],
    answer: "A. <fontface = \"verdana\">"
  },
  {
    question: "Salah satu ciri JavaScript yang membedakan dengan Java adalah:",
    options: [
      "A. Hubungan statis, objek harus ada saat program dikompilasi",
      "B. JavaScript dapat diinterpretasikan langsung oleh browser",
      "C. Kode program tidak dapat diakses",
      "D. JavaScript dan Java adalah sama"
    ],
    answer: "B. JavaScript dapat diinterpretasikan langsung oleh browser"
  },
  {
    question: "Output script berikut:",
    script: "<script type=\"text/javascript\"> document.write(Math.round(8.51)); </script>",
    options: ["A. 8", "B. 9", "C. 8.5", "D. 8.51"],
    answer: "B. 9"
  },
  {
    question: "Penulisan nilai atribut pada XML yang benar:",
    options: [
      "A. <pesan dari=\"danang\">",
      "B. <pesan dari= $danang >",
      "C. <pesan dari= @danang >",
      "D. <pesan dari='danang'>"
    ],
    answer: "A. <pesan dari=\"danang\">"
  },
  {
    question: "Untuk menghubungkan PHP dengan database MySQL menggunakan perintah:",
    options: [
      "A. connect_mysql(\"localhost\");",
      "B. mysql_open(\"localhost\");",
      "C. dbopen(\"localhost\");",
      "D. mysql_connect(\"localhost\");"
    ],
    answer: "D. mysql_connect(\"localhost\");"
  },
  {
    question: "Jika kita hendak menggunakan external style sheet, maka HTML yang benar adalah:",
    options: [
      "A. <style src=\"mainstyle.css\">",
      "B. <stylesheet>mainstyle.css</stylesheet>",
      "C. <link rel=\"stylesheet\" type=\"text/css\" href=\"mainstyle.css\">",
      "D. <link url=\"stylesheet\" type=\"text/css\" href=\"mainstyle.css\">"
    ],
    answer: "C. <link rel=\"stylesheet\" type=\"text/css\" href=\"mainstyle.css\">"
  },
  {
    question: "Di bawah ini adalah kelebihan CSS, kecuali:",
    options: [
      "A. Memperindah tampilan halaman web",
      "B. Mempermudah pembuatan dan pemeliharaan halaman web",
      "C. Memperlambat proses pembacaan HTML",
      "D. Memisahkan presentasi halaman web dari konten halaman web itu sendiri"
    ],
    answer: "C. Memperlambat proses pembacaan HTML"
  },
  {
    question: "Output dari program di bawah ini adalah:",
    script: "<script type=\"text/javascript\"> i=0; while (i<=3) { document.write(\"No. \" + i); document.write(\"<br />\"); i++; } </script>",
    options: [
      "A. No. 0 No. 1 No. 2",
      "B. No. 1 No. 2 No. 3",
      "C. No. 0 No. 1 No. 2 No. 3",
      "D. No. 1 No. 2 No. 3 No. 4"
    ],
    answer: "C. No. 0 No. 1 No. 2 No. 3"
  },
  {
    question: "Tag HTML untuk membuat text area adalah:",
    options: [
      "A. <input type=\"textarea\">",
      "B. <input type=\"textbox\">",
      "C. <input text>",
      "D. <textarea>"
    ],
    answer: "D. <textarea>"
  },
  {
    question: "Properti CSS yang digunakan untuk mengatur ukuran huruf:",
    options: [
      "A. font-size",
      "B. text-size",
      "C. font-style",
      "D. text-style"
    ],
    answer: "A. font-size"
  },
  {
    question: "Bagaimana cara mendefinisikan DTD secara eksternal?",
    options: [
      "A. <!DOCTYPE hewan SYSTEM \"hewan.dtd\" >",
      "B. <!DOCTYPE hewan SYSTEM \"hewan.dtd\" />",
      "C. <?DOCTYPE hewan SYSTEM \"hewan.dtd\" ?>",
      "D. Semua jawaban salah"
    ],
    answer: "A. <!DOCTYPE hewan SYSTEM \"hewan.dtd\" >"
  },
  {
    question: "Nama web server pada XAMPP adalah:",
    options: [
      "A. IIS",
      "B. PHP",
      "C. ASP.Net",
      "D. Apache"
    ],
    answer: "D. Apache"
  },
  {
    question: "Penulisan variabel PHP yang tepat:",
    options: [
      "A. $2dua",
      "B. $my−Var",
      "C. $variabelku",
      "D. $nomor saya"
    ],
    answer: "C. $variabelku"
  },
  {
    question: "Di bawah ini manakah yang bukan merupakan tipe data pada Perl?",
    options: [
      "A. Skalar",
      "B. Variable",
      "C. Hash",
      "D. Array"
    ],
    answer: "B. Variable"
  },
  {
    question: "Sintaks HTML untuk mengatur agar teks di dalam sel table menjadi rata kiri:",
    options: [
      "A. <td leftalign>",
      "B. <td align=\"left\">",
      "C. <td valign=\"left\">",
      "D. <tdleft>"
    ],
    answer: "B. <td align=\"left\">"
  },
  {
    question: "Sintaks untuk mendefinisikan array pada JavaScript:",
    options: [
      "A. var myarray = array new;",
      "B. var myarray = new Array();",
      "C. var new Array() = myarray;",
      "D. var new array = myarray;"
    ],
    answer: "B. var myarray = new Array();"
  },
  {
    question: "Dalam CSS, untuk mengubah warna teks dari suatu elemen menggunakan:",
    options: [
      "A. text-color:",
      "B. text-color=",
      "C. color:",
      "D. font-color:"
    ],
    answer: "C. color:"
  },
  {
    question: "Aturan yang harus dimiliki oleh dokumen XML dijelaskan pada:",
    options: [
      "A. HTML",
      "B. Atribut",
      "C. Elemen XML",
      "D. DTD"
    ],
    answer: "D. DTD"
  },
  {
    question: "Di bawah ini adalah manfaat CMS, kecuali:",
    options: [
      "A. Memperindah tampilan halaman web",
      "B. Mempercepat proses ‘update’ isi web",
      "C. Memberikan fasilitas kepada para penggunanya untuk mengelola bagian atau isi mana saja yang akan ditampilkan",
      "D. Memberikan kemungkinan kepada sebuah website untuk membagi isinya kepada website−website yang lain"
    ],
    answer: "D. Memberikan kemungkinan kepada sebuah website untuk membagi isinya kepada website−website yang lain"
  },
  {
    question: "Properti CSS yang digunakan untuk mengatur warna latar:",
    options: [
      "A. bgcolor:",
      "B. bg-color:",
      "C. background-color:",
      "D. color:"
    ],
    answer: "C. background-color:"
  },
  {
    question: "Jika kita hendak menggunakan style sheet dalam suatu halaman web, maka metode yang dapat digunakan antara lain:",
    options: [
      "A. Dreamweaver, GoLive atau FrontPage",
      "B. Handcoded, Generated atau WYSIWYG",
      "C. Inline, internal dan eksternal",
      "D. XAMPP, PHP Triad atau Apache"
    ],
    answer: "C. Inline, internal dan eksternal"
  },
  {
    question: "Untuk menampilkan kalimat “Selamat pagi” dalam PHP:",
    options: [
      "A. \"Selamat pagi\";",
      "B. echo \"Selamat pagi\";",
      "C. document.write(\"Selamat pagi\");",
      "D. response.write(\"Selamat pagi\");"
    ],
    answer: "B. echo \"Selamat pagi\";"
  },
  {
    question: "Perintah PHP untuk menambahkan 1 pada variabel $hitung adalah:",
    options: [
      "A. ++hitung",
      "B. hitung++;",
      "C. $hitung++;",
      "D. $hitung =+1"
    ],
    answer: "C. $hitung++;"
  },
  {
    question: "Siapakah yang membuat standar di Web?",
    options: [
      "A. Microsoft",
      "B. Mozilla Firefox",
      "C. Internet Explorer",
      "D. The World Wide Web Consortium"
    ],
    answer: "D. The World Wide Web Consortium"
  },
  {
    question: "Suatu bentuk hubungan interaktif dimana client dapat mengirimkan masukan ke server, dan server mengolah masukan tersebut kemudian dikembalikan kepada client, adalah konsep dari:",
    options: [
      "A. CGI",
      "B. HTML",
      "C. JavaScript",
      "D. Internet"
    ],
    answer: "A. CGI"
  },
  {
    question: "Merupakan syarat penamaan variabel di PHP, kecuali:",
    options: [
      "A. Tidak diperbolehkan menggunakan spasi",
      "B. Karakter pertama berupa huruf",
      "C. Diperbolehkan menggunakan tanda baca",
      "D. Diperbolehkan menggunakan '_' (underscore)"
    ],
    answer: "C. Diperbolehkan menggunakan tanda baca"
  },
  {
    question: "Kelebihan dari XML adalah:",
    options: [
        "A. Informasi dapat dipertukarkan dari satu sistem ke sistem yang berbeda platform",
        "B. Penulisan script XML lebih mudah dibandingkan dari HTML",
        "C. Informasi membutuhkan memori yang kecil",
        "D. Informasi yang dipertukarkan hanya berbentuk karakter"
    ],
    answer: "A. Informasi dapat dipertukarkan dari satu sistem ke sistem yang berbeda platform"
    },
    {
        question: "Tiga jenis tipe data yang ada pada Perl adalah:",
        options: [
            "A. Integer, array, hash",
            "B. Integer, string, hash",
            "C. Skalar, string, hash",
            "D. Skalar, array, hash"
        ],
        answer: "D. Skalar, array, hash"
    },
    {
        question: "Aturan penulisanan script dengan menggunakan CSS adalah:",
        options: [
            "A. Tidak dapat dikelompokkan selector",
            "B. Jika property lebih dari satu maka pemisah antar property adalah tanda koma (,)",
            "C. Jika value berupa lebih dari satu kata, maka harus diapit dengan kutip dua",
            "D. Antara property dan value harus dipisahkan dengan tanda titik koma (;)"
        ],
        answer: "D. Antara property dan value harus dipisahkan dengan tanda titik koma (;)"
    },
    {
        question: "Yang dimaksud dengan istilah cookies pada pemrograman web adalah:",
        options: [
            "A. Sepotong data yang disimpan dalam server dan digunakan oleh halaman web dalam mengingat informasi",
            "B. Sepotong data yang disimpan dalam harddisk local milik pengunjung dan digunakan oleh halaman web dalam mengingat informasi",
            "C. Sepotong data yang digunakan oleh halaman web untuk menyimpan suatu informasi yang telah dihapus oleh klien",
            "D. Sepotong data yang disimpan pada server untuk progress report klien"
        ],
        answer: "B. Sepotong data yang disimpan dalam harddisk local milik pengunjung dan digunakan oleh halaman web dalam mengingat informasi"
    },
    {
        question: "Output dari script berikut adalah: <script type='text/javascript'> document.write(Math.max(5,7,8,3,10,11) + '<br />'); </script>",
        options: [
            "A. 10",
            "B. 11",
            "C. 3 5 7 8 10 11",
            "D. 11 10 8 7 5 3"
        ],
        answer: "B. 11"
    },
    {
        question: "Manakah pemberian nama yang salah untuk elemen XML?",
        options: [
            "A. <age>",
            "B. <NAME>",
            "C. <first name>",
            "D. Semua jawaban salah"
        ],
        answer: "C. <first name>"
    },
    {
        question: "Komentar dalam program Perl dengan simbol:",
        options: [
            "A. *",
            "B. $",
            "C. //",
            "D. #"
        ],
        answer: "D. #"
    },
    {
        question: "Tag <!−−> pada JavaScript digunakan untuk:",
        options: [
            "A. Menampilkan kotak pesan JavaScript",
            "B. Menampilkan pesan kepada pengguna yang browsernya belum mendukung JavaScript",
            "C. Memberitahukan bahwa script yang dituliskan adalah JavaScript",
            "D. Mencegah browser lama menampilkan isi program JavaScript"
        ],
        answer: "C. Memberitahukan bahwa script yang dituliskan adalah JavaScript"
    },
];