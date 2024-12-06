let nome, idade, salario, sexo, estadoCivil;

function validarInfos(){
// Validação do Nome
do {
    nome = prompt("Por favor, insira seu nome (maior que 3 caracteres):");
    if (nome === null) {
        alert("Operação cancelada.");
        return; // Sai da função se o usuário cancelar
    }
    if (nome.length <= 3) {
        alert("Nome inválido! O nome deve ter mais de 3 caracteres.");
    }
} while (nome.length <= 3);

// Validação da Idade
do {
    idade = prompt("Por favor, insira sua idade (entre 0 e 150):");
    if (idade === null) {
        alert("Operação cancelada.");
        return; // Sai da função se o usuário cancelar
    }
    idade = parseInt(idade);
    if (isNaN(idade) || idade < 0 || idade > 150) {
        alert("Idade inválida! A idade deve ser um número entre 0 e 150.");
    }
} while (isNaN(idade) || idade < 0 || idade > 150);

// Validação do Salário
do {
    salario = prompt("Por favor, insira seu salário (maior que zero):");
    if (salario === null) {
        alert("Operação cancelada.");
        return; // Sai da função se o usuário cancelar
    }
    salario = parseFloat(salario);
    if (isNaN(salario) || salario <= 0) {
        alert("Salário inválido! O salário deve ser um valor maior que zero.");
    }
} while (isNaN(salario) || salario <= 0);

// Validação do Gênero
do {
    genero = prompt("Por favor, insira seu genero ('f' para feminino ou 'm' para masculino):");
    if (genero === null) {
        alert("Operação cancelada.");
        return; // Sai da função se o usuário cancelar
    }
    genero = genero.toLowerCase();
    if (genero !== 'f' && genero !== 'm') {
        alert("genero inválido! Insira 'f' para feminino ou 'm' para masculino.");
    }
} while (genero !== 'f' && genero !== 'm');

// Validação do Estado Civil
do {
    estadoCivil = prompt("Por favor, insira seu estado civil ('s' para solteiro, 'c' para casado, 'v' para viúvo, 'd' para divorciado):");
    if (estadoCivil === null) {
        alert("Operação cancelada.");
        return; // Sai da função se o usuário cancelar
    }
    estadoCivil = estadoCivil.toLowerCase();
    if (estadoCivil !== 's' && estadoCivil !== 'c' && estadoCivil !== 'v' && estadoCivil !== 'd') {
        alert("Estado civil inválido! Insira 's', 'c', 'v' ou 'd'.");
    }
} while (estadoCivil !== 's' && estadoCivil !== 'c' && estadoCivil !== 'v' && estadoCivil !== 'd');

alert(`Informações válidas:\nNome: ${nome} \nIdade: ${idade} \nSalário: ${salario} \nGênero: ${genero} \nEstado Civil: ${estadoCivil}`);
}
validarInfos();