const infotransmitir = (prefix, pushname) => {
return`
Olá ${pushname}, irei explicar como funciona os seguintes comando:

${prefix}rgtm

${prefix}tirardatm

${prefix}fazertm

${prefix}listatm

O comando rgtm, você entra no grupo ou privado de alguém que deseja que ele receba transmissão, digita ${prefix}rgtm

E caso queira tirar o grupo da transmissão, entra nele e digita 

${prefix}tirardatm ou se já saiu dele, procura o id dele no comando ${prefix}listatm

E caso queira fazer a transmissão para todos os grupos que foi registrado para transmissão, digita 

${prefix}fazertm e digita o que quer enviar para todos os grupos que foi registrado ou marque uma imagem já com legenda, ou envie uma imagem com legenda, ou documento, ou vídeo, ou texto, então é isso..
`;
};

exports.infotransmitir = infotransmitir;


const anotacao = (prefix) => {
return `

Olá. Se você está lendo isso, provavelmente está curioso sobre o comando anotação. 

Existe os seguintes comando:

1 ${prefix}anotações

2 ${prefix}anotar

3 ${prefix}tirar_nota

4 ${prefix}nota titulo


O primeiro ele mostra todas as anotações do grupo, criada. 

O segundo, ele é usado para criar a nota, tipo um bloco de notas, exemplo: ${prefix}anotar ABC|ABC são 3 letras do alfabeto, utilizada bastante

Isso foi um exemplo, mas pode ser utilizado da fórma que quiser, mas lembre que antes do | é o título, depois é a anotação.

Ja o terceiro, é pra tirar a nota, Exemplo como expliquei, ${prefix}tirar_nota ABC 

Com isso a anotação que estava criada foi apagada. 

Já o terceiro, ele é pra buscar a anotação que deseja, pelo título, exemplo: ${prefix}nota ABC

É isso... 

Boa sorte. 
`;
};

exports.anotacao = anotacao;

const alugueltxt = (prefix) => {
return `*_»⟩Tabela de preços para alugar o bot ⟨«_*

1️⃣⧽ R$ 5.00 (15 dias)
2️⃣⧽ R$ 10.00 (30 dias)
3️⃣⧽ R$ 18.00 (60 dias)
4️⃣⧽ R$ 27.00 (90 dias)
5️⃣⧽ R$ 35.00 (120 dias)

❪🍧ฺ࣭࣪͘ꕸ▸ _digite *${prefix}dono* para alugar e *${prefix}inforent* caso queira obter mais informações_`
}

exports.alugueltxt = alugueltxt;

const inforent = (prefix) => {
return `*Olá caro viajante, está perdido de como alugar o Black ?? Ett vou lhe dar uma rápida dica.* 🧐
  
*Como visto na tabela acima, tem os preços de aluguel mensal... O preço diminui dependendo da quantidade de meses; porém o preço é unitário por grupo.* 😃

*Por exemplo, se alugar dois grupos por 1 mês, vai ser 10+10 = 20$. Ou se alugar dois grupos por dois meses, será 18+18 = 36$.* 💵

*Caso você queira alugar o bot ou queira mais informações, chame meu ${prefix}dono no PV* 👑`
}

exports.inforent = inforent;