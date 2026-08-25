document.getElementById('reg-btn').addEventListener('click',async() => {
    const userVal = document.getElementById('reg-user').value;
    const passVal = document.getElementById('reg-pass').value;
    console.log("name",userVal);
    console.log("pass",passVal);

    const res = await fetch('http://127.0.0.1:5000/api/register',{
        method : 'POST',
        headers : {'Content-Type': 'application/json'},
        body : JSON.stringify({ username:userVal,password:passVal})
    });

    const data = await res.json();
    document.getElementById('reg-msg').innerText = data.message;

    if (data.status === 'success'){
        setTimeout(() => window.location.href = 'index.html',1500 );
    }
});