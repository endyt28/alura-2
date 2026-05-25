function calcularEconomia() {
    // Pega o valor digitado pelo usuário no input
    const hectaresInput = document.getElementById('hectares').value;
    const hectares = parseFloat(hectaresInput);

    // Validação de segurança
    if (!hectares || hectares <= 0) {
        alert("Por favor, digite um número válido de hectares!");
        return;
    }

    // Cálculo estimado (Cerca de 20.000 litros economizados por hectare ao ano com irrigação inteligente)
    const litresEconomizados = hectares * 20000;

    // Captura os elementos da página
    const resultadoDiv = document.getElementById('resultado');
    const textoResultado = document.getElementById('texto-resultado');

    // Modifica o texto dinamicamente
    textoResultado.innerHTML = `Utilizando sistemas de irrigação inteligente e monitoramento por drones em <strong>${hectares} hectares</strong>, a propriedade pode economizar cerca de <strong>${litresEconomizados.toLocaleString('pt-BR')} litros de água</strong> por ano!<br><br>Isso prova que o <strong>Agro forte e o futuro sustentável</strong> andam de mãos dadas! 🌍🌾`;

    // Exibe o bloco de resultado aplicando a animação do CSS
    resultadoDiv.style.display = 'block';
}
