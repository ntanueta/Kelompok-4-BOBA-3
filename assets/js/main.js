let dataBuku = [];
console.log("test")
// fect katalog
    axios.get("http://localhost:3500/buku").then((response) => {
        console.log(response.data);
        dataBuku = response.data;
        document.getElementById('row-buku').innerHTML = dataBuku.map((buku) => {
            return `
             <div class="col-md-4 col-lg-3 col-sm-6" data-aos="zoom-in">
            <div class="card h-100 shadow">
              <img src="${buku.image}" class="card-img-top" alt="${buku.judul}">
              <div class="card-body text-center">
                <p class="card-penulis fw-light">${buku.penulis}</p>
                <h5 class="card-title">${buku.judul}</h5>
                <div class="card-footer">
                  <a href="detail.html?id=${buku.id}" class="btn btn-primary">Lihat detail</a>
                </div>
              </div>
            </div>
          </div>`;
        }).join("");
    }).catch(error => {
        console.error('Error fetching books:', error);
    });


//  detail buku
const params = new URLSearchParams(window.location.search);
const idBuku = params.get('id');

    if (idBuku) {
        axios.get(`http://localhost:3500/buku/${idBuku}`).then((response) => {
            const buku = response.data;

            document.querySelector('.cover').src = buku.image;
            document.querySelector('.judul').textContent = buku.judul;
            document.querySelector('.pathnav').textContent = buku.judul;
            document.querySelector('.penulis').textContent = `Penulis: ${buku.penulis}`;
            document.querySelector('.sinopsis').textContent = `Sinopsis: ${buku.sinopsis}`;
            document.querySelector('.penerbit').textContent = `Penerbit: ${buku.penerbit}`;
            document.querySelector('.terbit').textContent = `Tahun Terbit: ${buku.tahun_terbit}`;
            document.getElementById('judulBuku').value = buku.judul;
        }).catch(error => {
            console.error('Error fetching book details:', error);
        });
    }







