function criaCartao(categoria, pergunta, resposta) {
    let container = document.getElementById('container')
    let cartao = document.createElement('article')
        cartao.className = 'cartao'
       
        cartao.innerHTML = `
        <div class="cartao__conteudo">
        <h3>{ingles}</h3>
        <div class="cartao__conteudo__pergunta">
            <p>{o que é hello em ingles?}</p>
        </div>
        <div class="cartao__conteudo__resposta">
            <p>{hello em ingles é olá}</p>
        </div>
        </div>
        `
        container.appendChild(cartao)
    
    }