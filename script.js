const secao = document.querySelector("#secao")


async function buscar_info_api() {
    try {
        const requisicao = await fetch("https://rickandmortyapi.com/api/character")
        const resposta = await requisicao.json()

        console.log(resposta);
        return resposta;
    }
    catch (error) {
        console.log('deu ruim');
    }
}


function montar_card(personagem) {
    const div = document.createElement("div")

    const img = document.createElement("img")
    img.src = personagem.image

    const nova_div = document.createElement("div")
    nova_div.classList.add("dados")

    const h2_nome = document.createElement("h2")
    h2_nome.textContent = `nome: ${personagem.name}`
    nova_div.appendChild(h2_nome)

    const h2_especie = document.createElement("h2")
    h2_especie.textContent = `especies: ${personagem.species}`
    nova_div.appendChild(h2_especie)

    const h2_status = document.createElement("h2")
    h2_status.textContent = `status: ${personagem.status}`
    nova_div.appendChild(h2_status)

    const h2_localizacao = document.createElement("h2")
    h2_localizacao.textContent = `localizaçao: ${personagem.location.name}`
    nova_div.appendChild(h2_localizacao)

    
    div.appendChild(img)
    
    div.appendChild(nova_div)

    secao.appendChild(div)
}


async function mostrar_dados() {
    let personagens = []
    const resultados = await buscar_info_api()
    console.log(resultados);
    personagens = resultados.results;
    personagens.forEach(resultado => montar_card(resultado));

}
mostrar_dados()


