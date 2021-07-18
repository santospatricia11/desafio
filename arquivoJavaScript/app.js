const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').valueS;
    e.preventDefault();
    let data={
        nome,
        email,
    }
    let convertData =JSON.stringify(data);
    localStorage.setItem('lead',convertData);
    let content =document.getElementById('content')
    let carregando = `<p>carregado...</p>`
    let pronto = `<p>pronto...</p>`
    content.innerHTML = carregando

    setTimeout(()=>{
        content.innerHTML = pronto

    })
},1000)


