const title = document.getElementById("title");
const price = document.getElementById("price");
const taxes = document.getElementById("taxes");
const ads = document.getElementById("ads");
const discount = document.getElementById("discount");
const total = document.querySelector(".total-box b");
const count = document.getElementById("count");
const category = document.getElementById("category");
const addBtn = document.querySelector(".add-box button");
const tbody = document.querySelector("tbody");
const removeAllBtn = document.querySelector(".removeAll");
const toggleModeBtn = document.querySelector(".toggle-mode i");
const serachedProduct = document.getElementById("serached-product");
const search = document.getElementById("search");
search.oninput = searchProducts;
serachedProduct.onchange = searchProducts;

let products = JSON.parse(localStorage.getItem("products")) || [
    {
        title: "Sample Bag",
        price: 300,
        taxes: 30,
        ads: 0,
        discount: 20,
        category: "Accessories",
    },
];

let currentEditId = null;

function calcTotal() {
    if (price.value !== "") {
        let result =
        (+price.value || 0) +
        (+taxes.value || 0) +
        (+ads.value || 0) -
        (+discount.value || 0);
        total.innerText = result;
        document.querySelector(".total-box").style.background = "#e97c7c;";
    } else {
        total.innerText = "";
        document.querySelector(".total-box").style.background = "#e97c7c;";
    }
    }

    [price, taxes, ads, discount].forEach((input) => {
    input.oninput = calcTotal;
    });

    addBtn.onclick = function () {
    if (title.value && price.value && category.value) {
        if (currentEditId) {
        products[currentEditId - 1] = getProductData();
        currentEditId = null;
        addBtn.innerText = "Add Product";
        } else {
        let c = count.value || 1;
        for (let i = 0; i < c; i++) products.push(getProductData());
        }
        saveAndRender();
        clearInputs();
    }
    };

    function getProductData() {
    return {
        title: title.value,
        price: +price.value,
        taxes: +taxes.value,
        ads: +ads.value,
        discount: +discount.value,
        category: category.value,
    };
    }

    function renderProducts() {
    tbody.innerHTML = "";
    products.forEach((p, i) => {
        let totalPrice = p.price + p.taxes + p.ads - p.discount;
        tbody.innerHTML += `
        <tr>
            <td>${i + 1}</td>
            <td>${p.title}</td>
            <td>${p.price}</td>
            <td>${p.taxes}</td>
            <td>${p.category}</td>
            <td>${totalPrice}</td>
            <td><button class="btn btn-success btn-sm" onclick="editProduct(${
            i + 1
            })">Edit</button></td>
            <td><button class="btn btn-danger btn-sm" onclick="deleteProduct(${
            i + 1
            })">Remove</button></td>
        </tr>
        `;
    });
    removeAllBtn.innerText = `Remove All [${products.length}]`;
    }

    function editProduct(id) {
    let p = products[id - 1];
    title.value = p.title;
    price.value = p.price;
    taxes.value = p.taxes;
    ads.value = p.ads;
    discount.value = p.discount;
    category.value = p.category;
    currentEditId = id;
    addBtn.innerText = "Update Product";
    window.scrollTo({ top: 0, behavior: "smooth" });
    calcTotal();
    }

    function deleteProduct(id) {
    products.splice(id - 1, 1);
    saveAndRender();
    }

    removeAllBtn.onclick = function () {
    products = [];
    saveAndRender();
    };

    function saveAndRender() {
    localStorage.setItem("products", JSON.stringify(products));
    renderProducts();
    }
    function searchProducts() {
    const searchBy = serachedProduct.value;
    const searchFor = search.value.trim().toLowerCase();
    const filteredProducts = products.filter(ele => ele[searchBy].toLowerCase().includes(searchFor));
    showProducts(filteredProducts);
    removeAllBtn.disabled = searchFor.length > 0;
}
function showProducts(list) {
    tbody.innerHTML = "";
    list.forEach((p, i) => {
        let totalPrice = p.price + p.taxes + p.ads - p.discount;
        tbody.innerHTML += `
        <tr>
            <td>${i + 1}</td>
            <td>${p.title}</td>
            <td>${p.price}</td>
            <td>${p.taxes}</td>
            <td>${p.category}</td>
            <td>${totalPrice}</td>
            <td><button class="btn btn-success btn-sm" onclick="editProduct(${products.indexOf(p) + 1})">Edit</button></td>
            <td><button class="btn btn-danger btn-sm" onclick="deleteProduct(${products.indexOf(p) + 1})">Remove</button></td>
        </tr>
        `;
    });
}
    function clearInputs() {
    title.value =
        price.value =
        taxes.value =
        ads.value =
        discount.value =
        count.value =
        category.value =
        "";
    total.innerText = "";
    }

    document.querySelector(".toggle-mode").onclick = function () {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        toggleModeBtn.classList.replace("fa-moon", "fa-sun");
    } else {
        toggleModeBtn.classList.replace("fa-sun", "fa-moon");
    }
    };

saveAndRender();
calcTotal();
