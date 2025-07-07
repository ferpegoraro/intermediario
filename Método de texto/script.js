/**
 * RESUMO: MÉTODOS DE TEXTO EM JAVASCRIPT
 * 
 * Os métodos de texto em JavaScript são funções incorporadas que permitem manipular 
 * e transformar strings de várias maneiras.
 * 
 * MÉTODOS BÁSICOS:
 * 
 * - length: Propriedade que retorna o comprimento (número de caracteres) de uma string
 * - toUpperCase(): Converte todos os caracteres da string para maiúsculas
 * - toLowerCase(): Converte todos os caracteres da string para minúsculas
 * 
 * OUTROS MÉTODOS IMPORTANTES:
 * 
 * - charAt(index): Retorna o caractere na posição especificada
 * - indexOf(substring): Retorna a posição da primeira ocorrência de uma substring
 * - substring(start, end): Extrai uma parte da string entre as posições especificadas
 * - slice(start, end): Similar ao substring, mas aceita índices negativos
 * - replace(search, replacement): Substitui uma substring por outra
 * - split(separator): Divide a string em um array de substrings
 * - trim(): Remove espaços em branco do início e fim da string
 * - includes(substring): Verifica se a string contém uma substring específica
 * - startsWith(prefix): Verifica se a string começa com determinado prefixo
 * - endsWith(suffix): Verifica se a string termina com determinado sufixo
 */

// Exemplo prático de métodos de texto
let message = "Estou estudando fundamentos JS";

// Demonstração dos métodos básicos
console.log("String original:", message);
console.log("Comprimento (length):", message.length);
console.log("Maiúsculas (toUpperCase):", message.toUpperCase());
console.log("Minúsculas (toLowerCase):", message.toLowerCase());

// Demonstração de outros métodos importantes
console.log("Caractere na posição 0 (charAt):", message.charAt(0));
console.log("Posição da palavra 'fundamentos' (indexOf):", message.indexOf("fundamentos"));
console.log("Substring da posição 6 a 15 (substring):", message.substring(6, 15));
console.log("Slice da posição 6 a 15 (slice):", message.slice(6, 15));
console.log("Substituir 'JS' por 'JavaScript' (replace):", message.replace("JS", "JavaScript"));
console.log("Dividir por espaços (split):", message.split(" "));

// Métodos adicionais (ES6+)
console.log("Inclui a palavra 'estudando'? (includes):", message.includes("estudando"));
console.log("Começa com 'Estou'? (startsWith):", message.startsWith("Estou"));
console.log("Termina com 'JS'? (endsWith):", message.endsWith("JS"));

// Exemplo do método trim()
let textoComEspacos = "   Texto com espaços no início e no fim   ";
console.log("Texto original:", textoComEspacos);
console.log("Texto após trim():", textoComEspacos.trim());
console.log("Comprimento antes do trim():", textoComEspacos.length);
console.log("Comprimento após trim():", textoComEspacos.trim().length);

let password = 1234578
if (String(password).length >= 7) {
    console.log("Senha válida")
} else {
    console.log("Senha inválida")
}

// Exemplo de padStart e padEnd com cartão de crédito
console.log("\n--- Exemplo de padStart e padEnd com cartão de crédito ---");

// Simulando o número de um cartão de crédito
let numeroCartao = "5432109876543210";

// Ocultar os dígitos do meio, mostrando apenas os últimos 4 dígitos
let ultimosDigitos = numeroCartao.slice(-4); // Pega os últimos 4 dígitos
let cartaoOculto = ultimosDigitos.padStart(numeroCartao.length, "*");
console.log("Cartão original:", numeroCartao);
console.log("Cartão com dígitos ocultos:", cartaoOculto);

// Formatação de cartão em grupos de 4 dígitos
let grupo1 = numeroCartao.slice(0, 4);
let grupo2 = numeroCartao.slice(4, 8);
let grupo3 = numeroCartao.slice(8, 12);
let grupo4 = numeroCartao.slice(12, 16);

// Formatação com espaços
let cartaoFormatado = `${grupo1} ${grupo2} ${grupo3} ${grupo4}`;
console.log("Cartão formatado com espaços:", cartaoFormatado);

// Exemplo de padEnd para completar um código de produto
let codigoProduto = "PROD123";
let codigoCompleto = codigoProduto.padEnd(10, "0");
console.log("\nCódigo original:", codigoProduto);
console.log("Código completado com padEnd:", codigoCompleto);

// Exemplos detalhados de split e join
console.log("\n--- Exemplos de split e join ---");

// Exemplo 1: Transformar uma frase em um array de palavras e depois voltar para string
let frase = "JavaScript é uma linguagem muito poderosa";
let palavras = frase.split(" "); // Divide a string em um array usando espaço como separador
console.log("Frase original:", frase);
console.log("Array após split:", palavras);

// Usando join para juntar o array novamente em uma string
let fraseReconstruida = palavras.join(" "); // Junta o array usando espaço como separador
console.log("Frase reconstruida com join:", fraseReconstruida);

// Exemplo 2: Inverter palavras de uma frase
let fraseInvertida = palavras.reverse().join(" ");
console.log("Frase com palavras invertidas:", fraseInvertida);

// Exemplo 3: Formatar uma data
let dataString = "2025-07-07"; // Formato ISO (AAAA-MM-DD)
let partesData = dataString.split("-"); // Divide em [ano, mês, dia]
let dataFormatada = `${partesData[2]}/${partesData[1]}/${partesData[0]}`; // Formato DD/MM/AAAA
console.log("\nData original:", dataString);
console.log("Data formatada (DD/MM/AAAA):", dataFormatada);

// Exemplo 4: Filtrar e processar elementos de uma lista
let listaCompras = "maçã,banana,laranja,uva,abacaxi";
let itens = listaCompras.split(","); // Divide a string em um array de itens

// Filtra apenas itens que começam com 'a'
let itensFiltrados = itens.filter(item => item.startsWith("a"));
console.log("\nLista de compras original:", listaCompras);
console.log("Itens que começam com 'a':", itensFiltrados);
console.log("Itens filtrados unidos novamente:", itensFiltrados.join(" e "));

// Exemplos detalhados de indexOf e métodos relacionados
console.log("\n--- Exemplos de indexOf e métodos relacionados ---");

// Exemplo 1: indexOf básico
let texto = "JavaScript é uma linguagem de programação. JavaScript é muito popular.";
console.log("Texto original:", texto);

// Encontrar a primeira ocorrência de "JavaScript"
let primeiraOcorrencia = texto.indexOf("JavaScript");
console.log("Primeira ocorrência de 'JavaScript':", primeiraOcorrencia);

// Encontrar a segunda ocorrência de "JavaScript"
let segundaOcorrencia = texto.indexOf("JavaScript", primeiraOcorrencia + 1);
console.log("Segunda ocorrência de 'JavaScript':", segundaOcorrencia);

// Verificar se uma substring existe
let palavraBuscada = "Python";
let resultadoBusca = texto.indexOf(palavraBuscada);
console.log(`A palavra '${palavraBuscada}' ${resultadoBusca === -1 ? 'não existe' : 'existe'} no texto.`);

// Exemplo 2: lastIndexOf
// Encontrar a última ocorrência de "JavaScript"
let ultimaOcorrencia = texto.lastIndexOf("JavaScript");
console.log("\nÚltima ocorrência de 'JavaScript':", ultimaOcorrencia);

// Exemplo 3: Contar ocorrências de uma substring
function contarOcorrencias(texto, substring) {
    let contador = 0;
    let posicao = texto.indexOf(substring);
    
    while (posicao !== -1) {
        contador++;
        posicao = texto.indexOf(substring, posicao + 1);
    }
    
    return contador;
}

let palavra = "JavaScript";
let ocorrencias = contarOcorrencias(texto, palavra);
console.log(`\nA palavra '${palavra}' aparece ${ocorrencias} vezes no texto.`);

// Exemplo 4: search com expressões regulares
// Encontrar a primeira ocorrência de uma palavra que começa com maiúscula
let padraoMaiuscula = /[A-Z][a-z]+/g;
let posicaoPalavraComMaiuscula = texto.search(padraoMaiuscula);
console.log("\nPosição da primeira palavra com maiúscula:", posicaoPalavraComMaiuscula);
console.log("Palavra encontrada:", texto.slice(posicaoPalavraComMaiuscula, posicaoPalavraComMaiuscula + 10));
