import { PathwayData } from '../../types';

export const solData: PathwayData = {
    category: "Key of Light",
    pathway: "CAMINHO DO SOL",
    pvBase: 10,
    pvPorAvanço: 4,
    peBase: 15,
    pePorAvanço: 5,
    vontadeBonus: 2,
    sanidade: 8,
    mecanicaUnica: {
        titulo: "A Fé que Queima",
        items: [
            { nome: "Status Especial - Fé", desc: "Sua Presença se torna o atributo Fé. Ele governa a força de seus poderes sagrados e sua capacidade de inspirar os outros." },
            { nome: "Luz Interior", desc: "Você pode gastar 1 PE para emitir uma luz suave de seu corpo, iluminando uma área de 5 metros ao seu redor por uma cena. Esta luz é considerada luz solar para efeitos de vulnerabilidade de criaturas da noite." }
        ]
    },
    poderesInatos: [
        { seq: "9", nome: "Orquestra", desc: "Você se torna treinado em um instrumento musical à sua escolha, ganhando +1 dado em testes de Performance com ele." },
        { seq: "8", nome: "Perdição dos Mortos", desc: "Sua luz interior se torna um anátema para os mortos-vivos. Mortos-vivos de baixo nível hesitam em te atacar e sofrem -1 dado em testes para resistir aos seus poderes." },
        { seq: "7", nome: "Domínio do Sol", desc: "Você aprende a moldar a luz. Você ganha acesso à habilidade Raio Solar." },
        { seq: "6", nome: "Corpo Iluminado", desc: "Passivo. Você ganha resistência a dano de fontes sombrias ou degenerativas (+2 dados para absorção)." },
        { seq: "5", nome: "Aura da Verdade", desc: "A dificuldade para mentir em sua presença aumenta em 1. Sua luz revela a verdade." },
        { seq: "4", nome: "Vitalidade Aconchegante", desc: "Você se torna imune a doenças mundanas e venenos." },
        { seq: "2", nome: "Iluminado", desc: "Você pode ver através de qualquer escuridão, seja ela mundana ou mágica." },
        { seq: "2 - Anjo", nome: "Maestria Arcana", desc: "O custo em PE de todas as suas habilidades Beyonder (de qualquer Sequência) é permanentemente reduzido pela metade (arredondado para cima)." }
    ],
    formaMitica: {
        nome: "Fênix da Purificação",
        disponivel: "(Habilidade disponível a partir da Sequência 4)",
        ativacao: "Requer uma ação completa e causa Degradação de Sanidade e acumula Pontos de Corrupção Mítica, conforme as regras do sistema.",
        descricao: "Seu corpo se transfigura em uma fênix colossal de penas douradas e plumas flamejantes que queimam com luz divina. Seus olhos são como dois sóis em miniatura, e cada batida de suas asas libera uma onda de calor purificador. De suas garras, emanam runas sagradas que selam a escuridão, e seu canto cura feridas e desfaz maldições. Um halo de luz pura ao seu redor incinera impurezas e corrupção.",
        bonus: "Sua Presença (Fé) e seu Vigor aumentam em +2.",
        poderes: [
            { tipo: "Passivo", nome: "Chama Eterna (Seq. 4)", desc: "Você e seus aliados em um raio de 10m são imunes a dano de fogo e regeneram 8 de vida por turno." },
            { tipo: "Ação", nome: "Lâmina Solar (Seq. 4 Requisito)", desc: "Gaste 4 PE. Você conjura uma espada de luz solar pura. A arma causa danos bônus (1d10 + Sucessos líquidos) em criaturas da noite e aplica o efeito Queimadura Purificadora (1d6 dano por 2 turnos)." },
            { tipo: "Ação", nome: "Proclamação do Martírio (Seq. 3)", desc: "Gaste 8 PE para marcar um inimigo. A marca explode em luz, fazendo-o sofrer dano dobrado de todas as fontes por um turno. Ou, marque um aliado, concedendo a ele +10 de Armadura contra o próximo ataque." },
            { tipo: "Reação", nome: "Onda de Purificação (Seq. 2)", desc: "Quando um aliado é atingido por uma maldição, você libera um pulso de luz (custo 5 PE) que purifica o efeito e reflete o dano como dano sagrado de volta ao conjurador." }
        ]
    },
    mythicalForm: {
      incomplete: { 
        tempHpBonus: 30,
        attributeBoosts: { Vigor: 2, 'Presença (Fé)': 1 },
        sanityCostPerTurn: "1", 
        abilities: [
          { name: "Aura de Calor", desc: "Uma aura de calor suave emana de você, causando 1 de dano de fogo a quem o tocar." },
          { name: "Olhos da Verdade", desc: "Você ganha +2 dados em testes para detectar mentiras e ilusões." }
        ]
      },
      complete: {
        tempHpBonus: 60,
        attributeBoosts: { Vigor: 4, 'Presença (Fé)': 2 },
        abilities: [
          { name: "Corpo de Sol", desc: "Você se torna imune a fogo e luz. Seus ataques desarmados causam dano de fogo sagrado." },
          { name: "Canto da Aurora", desc: "Você pode cantar para curar ferimentos leves (1 nível de Vitalidade) em todos os aliados próximos a cada turno." }
        ]
      }
    },
    domain: {
        description: "A magia da Glória, da Luz Inquestionável e da Purificação pelo Fogo Sagrado. Um servo do Sol não é um estudioso da luz, ele é a personificação dela.",
        particulas: [
            { name: "Helios", translation: "Sol", type: "Objeto/Característica", conceito: "A essência da luz solar pura e da energia radiante. É uma força de purificação, ordem e vida que queima tudo que é profano.", exemplo: "Im Pneuma Helios (Atacar Espírito com Sol) — Um raio de luz que causa dano agravado a espíritos, mortos-vivos e demônios.", uso: "An Azi Helios (Restaurar Informação com Sol) — Usa a luz para 'queimar' a falsidade de um documento ou a ilusão de um feitiço, revelando a verdade nua por baixo." },
            { name: "Kydos", translation: "Glória", type: "Função/Característica", conceito: "A manifestação da autoridade divina e de uma presença inspiradora. Kydos é a fé transformada em arma.", exemplo: "Ev Ala Kydos (Invocar Abstrato como Glória) — Cria uma aura de luz dourada que inspira coragem inabalável em aliados e impõe um pavor sagrado em inimigos.", uso: "Am [Ação] Kydos (Proteger Ação com Glória) — Imbui uma ação de um aliado com poder divino." },
            { name: "Lysis", translation: "Libertação", type: "Função", conceito: "O poder de libertar das amarras da escuridão. Lysis é a função oposta de Aprisionar, focada em quebrar correntes e purificar maldições.", exemplo: "Lysis Ivi (Libertação da Pessoa) — Quebra instantaneamente qualquer efeito de paralisia, aprisionamento ou maldição de nível inferior.", uso: "Lysis Umbra (Libertação da Sombra) — 'Liberta' uma sombra de sua fonte, transformando a sombra de um inimigo em uma área de luz purificadora." }
        ]
    },
    sequences: {
        "Sequência 9: Bardo": [
            { name: "Canto Inspirador (Coragem)", desc: "Gaste 2 PE. Aliados que ouvem sua canção ganham +2 dados para resistir ao medo por uma cena." },
            { name: "Canto Inspirador (Força)", desc: "Gaste 2 PE. Aliados que ouvem sua canção ganham +2 dado em seus testes de dano corpo a corpo por uma cena." },
            { name: "Melodia da Calma", desc: "Sua música pode acalmar animais hostis e neutralizar tensões sociais. Faça um teste de Presença (Fé) + Performance para acalmar uma situação." },
            { name: "Palavra de Esperança", desc: "Com um breve discurso, você pode conceder a um aliado um Ponto de Vontade temporário. Custa 3 PE e só pode ser usado uma vez por cena por aliado." }
        ],
        "Sequência 8: Suplicante da Luz": [
            { name: "Luz Solar", desc: "Gaste 3 PE para criar uma esfera de luz do dia que ilumina uma vasta área, dissipando escuridão mágica de baixo nível por 10 minutos." },
            { name: "Visão Solar", desc: "Gaste 2 PE. Você imbui seus olhos com a luz do sol, permitindo-lhe ver a verdadeira forma de criaturas sob efeito de ilusão ou mudança de forma." },
            { name: "Toque Purificador", desc: "Ao tocar um alvo, gaste 2 PE. Você pode remover venenos ou doenças comuns." },
            { name: "Benção do Sol", desc: "Passivo. Enquanto estiver sob a luz direta do sol, ganhe +1 dado em todos os seus testes Físicos." }
        ],
        "Sequência 7: Sumo Sacerdote Solar": [
            { name: "Água Benta do Sol", desc: "Com um ritual de 10 minutos, você pode consagrar um frasco de água. Arremessar esta água em mortos-vivos ou criaturas das trevas causa 2d8. Custa 4 PE." },
            { name: "Fogo de Luz", desc: "Gaste 5 PE. Você conjura uma explosão de chamas sagradas em um ponto. Causa 1d8 dados de dano de fogo e sagrado, e inimigos atingidos devem fazer um teste de Vontade (Dif. 7) ou ficarão amedrontados." },
            { name: "Santo Juramento (Buff)", desc: "Gaste 4 PE e 1 Vontade. Por uma cena, você abençoa a si mesmo ou a um aliado, concedendo +1 em todos os atributos e fazendo com que seus ataques com armas causem dano sagrado adicional." },
            { name: "Clivagem da Purificação", desc: "Passivo. Qualquer arma que você empunhar é considerada sagrada e causa +1 de dano a criaturas malignas." }
        ],
        "Sequência 6: Notário": [
            { name: "Notarização (Amplificação)", desc: "Gaste 5 PE. O próximo poder de um aliado tem seu efeito (dano, duração, etc.) aumentado em 50%." },
            { name: "Notarização (Anulação)", desc: "Gaste 5 PE. O próximo poder de um inimigo falha automaticamente, desde que seja de nível igual ou inferior ao seu." },
            { name: "Notarização (Autenticação)", desc: "Gaste 3 PE. Você toca um objeto e sabe se é falso, amaldiçoado ou se tem uma história oculta." },
            { name: "Contrato (Ativo)", desc: "Gaste 8 PE para supervisionar um contrato verbal. A parte que o quebrar sofrerá um terrível onda de azar (-3 em todos os testes por uma semana)." }
        ],
        "Sequência 5: Sacerdote da Luz": [
            { name: "Luz da Glória (Ativo)", desc: "Gaste 8 PE. Você se torna um avatar da luz por uma cena. Inspira aliados (+1 dado) e intimida inimigos. Seus ataques causam +2 de dano sagrado." },
            { name: "Combate Versátil (Passivo)", desc: "Você se torna treinado em todas as armas de combate corpo a corpo." },
            { name: "Imunidade a Efeitos Negativos (Passivo)", desc: "Você se torna imune a medo, doenças e maldições de nível inferior ao seu." },
            { name: "Armadura de Luz (Reação)", desc: "Gaste 4 PE ao ser atacado. Uma armadura de luz dourada se manifesta, concedendo +5 dados para absorver aquele dano." }
        ],
        "Sequência 4: Sem Sombra (Arauto da Luz)": [
            { name: "Purificação Absoluta (Ativo)", desc: "Gaste 10 PE para liberar uma onda de luz branca. Remove todas as maldições, doenças e venenos de aliados em um raio de 10m. Causa dano massivo (8 dados) a todas as criaturas sombrias na área." },
            { name: "Criação de Luz Sólida (Ativo)", desc: "Gaste 6 PE por turno. Você pode moldar a luz em construtos sólidos: paredes, pontes, armas, ou uma prisão para conter um inimigo." },
            { name: "Separar Características (Ativo)", desc: "Gaste 15 PE em um ritual para purificar um Artefato Selado, separando a maldição do poder." },
            { name: "Teleporte de Luz (Ativo)", desc: "Você pode se dissolver em um feixe de luz e viajar instantaneamente para qualquer local que possa ver. Custa 5 PE." }
        ],
        "Sequência 3: Justiça Mentora (Julgamento da Fênix)": [
            { name: "Luz da Verdade (Ativo)", desc: "Gaste 8 PE e ilumine um alvo. Ele não pode mentir por uma cena e sua verdadeira aparência é revelada." },
            { name: "Julgamento da Fênix (Ativo)", desc: "Gaste 12 PE. Invoca uma pequena fênix de fogo sagrado. Ela pode curar um aliado completamente ou explodir em um inimigo, causando 10 dados de dano Agravado." },
            { name: "Bênção de Atributo (Ativo)", desc: "Gaste 10 PE. Conceda um bônus de +2 em um atributo (Força, Vigor, etc.) a um aliado por uma cena." },
            { name: "Comandar a Luz (Passivo)", desc: "Você tem controle absoluto sobre qualquer fonte de luz em seu campo de visão." }
        ],
        "Sequência 2: Seguidor da Luz (Pacto Solar)": [
            { name: "Pacto Solar (Ativo)", desc: "Gaste 20 PE e 1 Vontade. Estabeleça um contrato cósmico com um aliado. Pela próxima semana, o aliado compartilha de suas resistências e regeneração." },
            { name: "Escudo do Amanhecer (Passivo)", desc: "No início de cada cena, você e seus aliados ganham automaticamente RD 10 contra o primeiro ataque sobrenatural." },
            { name: "Onda de Purificação Divina (Ativo)", desc: "Sua Purificação Absoluta evolui. Agora pode até 'curar' um Beyonder que perdeu o controle. Custa 25 PE e é extremamente arriscado." },
            { name: "Punição Solar (Reação)", desc: "Quando um inimigo mata um aliado, gaste 15 PE. Pelo resto da cena, seus ataques contra aquele alvo causam o dano máximo." }
        ],
        "Sequência 1: Anjo Branco": [
            { name: "Asas da Pureza (Ativo)", desc: "Você manifesta permanentemente suas asas de anjo de pura luz, concedendo voo e uma aura de cura." },
            { name: "Oceano de Luz Divina (Ativo)", desc: "Gaste 30 PE e sofra 1d3 Níveis de Degradação de Sanidade. Transforme uma vasta área em um domínio de luz pura por uma hora." },
            { name: "Redução de Sequência (Ativo)", desc: "Gaste 25 PE e 1 Ponto de Vontade. Toque um Beyonder inimigo. Por uma cena, ele é rebaixado em 1 nível de Sequência." },
            { name: "Renascimento da Fênix (Passivo)", desc: "Se você for morto, seu corpo explode em uma supernova. Após 24 horas, você renasce das cinzas, mas com a Sanidade permanentemente reduzida em 1 ponto." }
        ]
    }
};