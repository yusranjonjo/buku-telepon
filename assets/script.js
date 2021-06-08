// selection 
const container = document.querySelector('.container');
const inputNomor = document.getElementById('inputNomor');
const inputNama = document.getElementById('inputNama');
const tombolTambah = document.getElementById('tombolTambah');




// function 
tombolTambah.addEventListener('click', tambahKontak);

// fungsi tambah
function tambahKontak(e) {
    // stop fungsi bawaan dari form
    e.preventDefault();
    tombolTambah.classList.toggle('btnToggle');
    setTimeout(() => {
        tombolTambah.classList.remove('btnToggle');
    }, 100);

    // membuat elemen
    const daftarKontak = document.createElement('div');
    const profil = document.createElement('div');
    const nomorDanNama = document.createElement('div');
    const edit = document.createElement('div');
    const hapus = document.createElement('div');

    const nomor = document.createElement('div');
    const nama = document.createElement('div');

    const iconProfil = document.createElement('i');
    const iconEdit = document.createElement('i');
    const iconHapus = document.createElement('i');


    container.appendChild(daftarKontak);
    daftarKontak.appendChild(profil);
    daftarKontak.appendChild(nomorDanNama);
    daftarKontak.appendChild(edit);
    daftarKontak.appendChild(hapus);

    nomorDanNama.appendChild(nomor);
    nomorDanNama.appendChild(nama);

    profil.appendChild(iconProfil);
    edit.appendChild(iconEdit);
    hapus.appendChild(iconHapus);

    // menambhkan kelas
    daftarKontak.classList.add('daftar-kontak');
    profil.classList.add('profil')
    nomorDanNama.classList.add('nomor-nama');
    edit.classList.add('edit');
    hapus.classList.add('hapus');

    iconProfil.classList.add('fas');
    iconProfil.classList.add('fa-user');

    iconEdit.classList.add('fas');
    iconEdit.classList.add('fa-pen');

    iconHapus.classList.add('fas');
    iconHapus.classList.add('fa-trash');

    nomor.classList.add('nomor');
    nama.classList.add('nama');

    nomor.innerHTML = inputNomor.value;
    nama.innerHTML = inputNama.value;


// reset inputan
    inputNomor.value = '';
    inputNama.value = '';
}


const kontak = document.querySelector('.daftar-kontak');
const profil1 = document.querySelector('.profil');
const nomorNama = document.querySelector('.nomor-nama');
const edit1 = document.querySelector('.edit');
const hapus1 = document.querySelector('.hapus');

container.addEventListener('click', remove);
//  funsi hapus
function remove(e) {
    if (e.target.className === 'hapus') {
        e.target.parentElement.classList.add('geser');
        setTimeout(() => {
            e.target.parentElement.remove(e);
        }, 500);
        // console.log(e.target);
    }
    // if (e.target.className == 'fas fa-trash') {
    //     e.target.parentElement.parentElement.remove();
    //     e.preventDefault();
    //     // console.log(e.target);
    // }
}