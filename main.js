// Các sản phẩm trong trang
const products = [
    { name: 'Product 1', price: 99, image: './path/to/image1.jpg', description: 'Description of Product 1' },
    { name: 'Product 2', price: 149, image: './path/to/image2.jpg', description: 'Description of Product 2' },
    // ...Thêm các sản phẩm khác vào đây...
];

// Số sản phẩm trên một trang
const productsPerPage = 6;

// Tính tổng số trang
const totalPages = Math.ceil(products.length / productsPerPage);

// Lấy các phần tử HTML
const productGrid = document.getElementById('productGrid');
const pagination = document.getElementById('pagination');

// Hiển thị các sản phẩm trong trang
function displayProducts(pageNumber) {
    // Xóa các sản phẩm đang hiển thị
    productGrid.innerHTML = '';

    // Tính chỉ số bắt đầu và kết thúc của sản phẩm trong trang
    const startIndex = (pageNumber - 1) * productsPerPage;
    const endIndex = Math.min(startIndex + productsPerPage, products.length);

    // Hiển thị các sản phẩm trong trang
    for (let i = startIndex; i < endIndex; i++) {
        const product = products[i];
        const productElement = createProductElement(product);
        productGrid.appendChild(productElement);
    }
}

// Tạo phần tử HTML cho một sản phẩm
function createProductElement(product) {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');

    // Tạo nội dung cho phần tử sản phẩm
    // ...
    // ...

    return productDiv;
}

// Tạo các nút phân trang
function createPaginationButtons() {
    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.innerText = i;
        button.addEventListener('click', () => {
            displayProducts(i);
        });
        pagination.appendChild(button);
    }
}

// Khởi tạo trang đầu tiên khi trang được tải
displayProducts(1);

// Tạo các nút phân trang khi trang được tải
createPaginationButtons();

