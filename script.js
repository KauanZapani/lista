const convidados = [
    "Ana", "Bruno", "Amanda", "Carlos", "Beatriz", 
    "Aline", "Ricardo", "Fernanda", "Alberto", "João"
];

const inputBusca = document.getElementById('searchInput');

function renderizarListas(filtro = "") {
    const listaGeralEl = document.getElementById('listaGeral');
    const listaAEl = document.getElementById('listaA');
    const listaLongosEl = document.getElementById('listaLongos');

    // Limpar listas antes de renderizar
    listaGeralEl.innerHTML = "";
    listaAEl.innerHTML = "";
    listaLongosEl.innerHTML = "";

    // Filtrar convidados com base na busca
    const convidadosFiltrados = convidados.filter(nome => 
        nome.toLowerCase().includes(filtro.toLowerCase())
    );

    // Processamento usando Loops e Condicionais
    convidadosFiltrados.forEach(nome => {
        const nomeUpper = nome.toUpperCase(); // Transformar em maiúsculo
        const novoItem = `<li>${nomeUpper}</li>`;

        // 1. Adicionar à Lista Geral
        listaGeralEl.innerHTML += novoItem;

        // 2. Adicionar à lista de quem começa com 'A'
        if (nomeUpper.startsWith("A")) {
            listaAEl.innerHTML += novoItem;
        }

        // 3. Adicionar à lista de nomes com mais de 5 letras
        if (nome.length > 5) {
            listaLongosEl.innerHTML += novoItem;
        }
    });
}

// Evento de busca em tempo real
inputBusca.addEventListener('input', (e) => {
    renderizarListas(e.target.value);
});

// Inicialização
renderizarListas();
