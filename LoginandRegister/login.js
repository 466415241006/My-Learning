document.getElementById('log-btn').addEventListener('click',async () =>{
    const userVal = document.getElementById('log-user').value;
    const passVal = document.getElementById('log-pass').value;

    const res =await fetch('http://127.0.0.1:5000/api/login',{
        method : 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({username:userVal,password:passVal})
    });

    const data = await res.json();
    document.getElementById('log-msg').innerText = data.message;

    if (data.status === 'success'){
        alert('Welcome'+data.username);
    }
})