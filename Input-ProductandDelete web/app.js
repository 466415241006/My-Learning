document.getElementById('save-btn').addEventListener('click',async function senttext() {
    const nameval = document.getElementById('p-name').value;
    const priceval = document.getElementById('p-price').value;
    const qtyval = document.getElementById('p-qty').value;
    console.log("ค่าที่จับได้:",nameval,priceval,qtyval);

    const response = await fetch('http://127.0.0.1:5000/api/products',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ 
            name: nameval,
            price:priceval,
            quantity: qtyval
        })
    });

    const result = await response.json();

    document.getElementById('msg').innerText = result.message;
});