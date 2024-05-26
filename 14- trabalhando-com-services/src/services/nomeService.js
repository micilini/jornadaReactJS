// Função para buscar nomes na API
export const fetchNomes = async () => {
    try {
        // Faz a requisição para a API
        const response = await fetch('https://randomuser.me/api/?results=10');
        // Verifica se a requisição foi bem sucedida
        if (response.ok) {
            // Converte a resposta para JSON
            const data = await response.json();
            // Extrai os nomes dos dados obtidos da API
            const nomes = data.results.map(result => `${result.name.first} ${result.name.last}`);
            // Retorna os nomes obtidos da API
            return nomes;
        } else {
            // Se a resposta da API não for bem sucedida, lança um erro
            throw new Error('Erro ao buscar nomes da API');
        }
    } catch (error) {
        console.error(error);
        // Em caso de erro, retorna uma lista vazia
        return [];
    }
};
