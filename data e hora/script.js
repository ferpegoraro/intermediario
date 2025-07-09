/*
 * MANIPULAÇÃO DE DATA E HORA EM JAVASCRIPT
 * Um resumo completo dos métodos e funcionalidades do objeto Date
 */

// ===== CRIAÇÃO DE OBJETOS DATE =====

// Data e hora atual
console.log('Data e hora atual:');
console.log(new Date());
const date = new Date()

// Data específica (ano, mês, dia)
// Obs: meses são indexados de 0-11 (0 = janeiro, 11 = dezembro)
console.log('\nData específica (8 de julho de 2025):');
console.log(new Date(2025, 6, 8));

// Data e hora específica (ano, mês, dia, hora, minuto, segundo)
console.log('\nData e hora específica (8 de julho de 2025, 12:30:00):');
console.log(new Date(2025, 6, 8, 12, 30, 0));

// A partir de string ISO
console.log('\nData a partir de string ISO:');
console.log(new Date("2025-07-08T12:30:00"));

// A partir de string em formato legível
console.log('\nData a partir de string legível:');
console.log(new Date("July 08 2025 12:30:00"));

// Data a partir de timestamp (milissegundos desde 01/01/1970)
console.log('\nData a partir de timestamp (01/01/1970):');
console.log(new Date(0));

// Timestamp atual (milissegundos desde 01/01/1970)
console.log('\nTimestamp atual:');
console.log(new Date().getTime());


// ===== MÉTODOS PARA OBTER COMPONENTES DA DATA =====

console.log('\n\nMÉTODOS PARA OBTER COMPONENTES DA DATA:');
const data = new Date("2025-07-08T12:30:00");
console.log('Data de referência:', data.toLocaleString());

// Dia do mês (1-31)
console.log('\nDia do mês (getDate):');
console.log(data.getDate()); // 8
//Ano
console.log(date.getFullYear())

//Hora
console.log(date.getHours())

//Minuto
console.log(date.getMinutes())

//Segundo
console.log(date.getSeconds())

let date2 = new Date("2025-07-08T12:30:00")
//Modificar o ano
console.log(date2.setFullYear(2026))

//Modificar o mes
console.log(date2.setMonth(6))

//Modificar o dia
console.log(date2.setDate(15))

//Modificar a hora
console.log(date2.setHours(12))

//Modificar o minuto
console.log(date2.setMinutes(30))

//Modificar o segundo
console.log(date2.setSeconds(0))


console.log(date2)



//formatar data e hora

let date3 = new Date("2025-07-08T12:30:00")
console.log(date3.toLocaleString())

//formatar data e hora em pt-BR
console.log(date3.toLocaleString("pt-BR"))
console.log(date3.toTimeString())

// ===== RESUMO DO MÉTODO toLocaleString() =====

// O método toLocaleString() formata datas e horas conforme convenções locais
const dataResumo = new Date("2025-07-08T12:30:00");

// Formato básico (sem parâmetros)
console.log('\ntoLocaleString() básico:');
console.log(dataResumo.toLocaleString()); // Formato padrão do sistema

// Com locale específico
console.log('\ntoLocaleString() com locale:');
console.log(dataResumo.toLocaleString('pt-BR')); // Formato brasileiro
console.log(dataResumo.toLocaleString('en-US')); // Formato americano

// Com opções de formatação
console.log('\ntoLocaleString() com opções:');
console.log(dataResumo.toLocaleString('pt-BR', {
  dateStyle: 'full',  // Estilo completo da data
  timeStyle: 'medium' // Estilo médio da hora
}));

// Personalização completa
console.log('\ntoLocaleString() personalizado:');
console.log(dataResumo.toLocaleString('pt-BR', {
  weekday: 'long',    // Nome completo do dia da semana
  day: 'numeric',     // Dia em formato numérico
  month: 'long',      // Nome completo do mês
  year: 'numeric',    // Ano em formato numérico
  hour: '2-digit',    // Hora com 2 dígitos
  minute: '2-digit',  // Minutos com 2 dígitos
  hour12: false       // Formato 24h (não 12h AM/PM)
}));

//fuso horário Intl
//Obtem informações da localidade atual
const currentLocale = Intl.DateTimeFormat().resolvedOptions()

console.log(currentLocale)
console.log(new Intl.DateTimeFormat("pt-br").format(new Date()))

const date5 = new Date()
console.log(date5.getTimezoneOffset())
console.log(date5.getTimezoneOffset() / 60)







