async function loadProdusts(){
    const response = await fetch('http://127.0.0.1:5000/api/products');
    const products = await response.json();

    const tbody = document.getElementById('product-list');
    tbody.innerHTML = '';

    products.forEach(item => {
        const row = `
            <tr>
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>${item.price}</td>
                <td>${item.quantity}</td>
                <td>
                    <button onclick="deleteProduct(${item.id})">ลบ</button>
                </td>
            </tr>
        `;
        tbody.innerHTML += row;        
    });
}

async function deleteProduct(id) {
    if (confirm("ยืนยันที่จะลบสินค้า")) {
        await fetch(`http://127.0.0.1:5000/api/products/${id}`, {
            method: 'DELETE'
        });
        loadProdusts();
        
    }
    
}

loadProdusts();