const productsDiv = document.getElementById("products");

fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => {
        data.forEach((product) => {
        productsDiv.innerHTML += `
            <div class="col-md-3 mb-4">
            <div class="card h-100 shadow">
                <img src="${product.image}" class="card-img-top p-3" style="height:200px; object-fit:contain;" alt="product">
                <div class="card-body d-flex flex-column">
                <h6 class="card-title">${product.title}</h6>
                <p class="card-text text-muted mb-1">$${product.price}</p>
                <p class="card-text small text-secondary flex-grow-1">
                    ${product.description.substring(0, 80)}...
                </p>
                <button class="btn btn-primary btn-sm mt-auto">Add To Cart</button>
                </div>
            </div>
            </div>
        `;
        });
    })
    .catch((err) => {
        console.log(err);
        productsDiv.innerHTML = `<p class="text-danger">Failed to load products.</p>`;
    });