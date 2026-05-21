// Dados dos alunos
let alunos = ["joão", "juliana", "ana", "caio"];
let medias = [10, 8, 7.5, 9];

// Função para buscar aluno e retornar média
function buscarAluno(nomeAluno) {
    // Procura a posição do aluno na lista
    let posicao = alunos.indexOf(nomeAluno);
    
    // Verifica se encontrou
    if (posicao !== -1) {
        return `A média de ${nomeAluno} é ${medias[posicao]}`;
    } else {
        return `Aluno ${nomeAluno} não foi encontrado`;
    }
}

// Testando
console.log(buscarAluno("ana"));     // A média de ana é 7.5
console.log(buscarAluno("pedro"));   // Aluno pedro não foi encontrado