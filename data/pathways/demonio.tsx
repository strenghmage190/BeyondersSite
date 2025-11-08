import { PathwayData } from '../../types';

export const demonioData: PathwayData = {
    category: "Father of Devils",
    pathway: "CAMINHO DO DEMÔNIO",
    pvBase: 10,
    pvPorAvanço: 4,
    peBase: 15,
    pePorAvanço: 5,
    vontadeBonus: 0,
    sanidade: 6,
    mecanicaUnica: {
        titulo: "Alimentar-se do Medo",
        items: [
            { nome: "Colheita de Pavor", desc: "Toda vez que um inimigo falhar em um teste de Vontade para resistir a um dos seus poderes de medo ou intimidação, você recupera 1 PE." },
            { nome: "Aura de Desconforto", desc: "Passivo. Mortais na sua presença se sentem inexplicavelmente desconfortáveis e ansiosos. A dificuldade para você usar Intimidação diminui em 1." }
        ]
    },
    poderesInatos: [
        { seq: "9", nome: "Delicadeza", desc: "Você ganha permanentemente -1 em Vigor, mas +1 em Destreza." },
        { seq: "8", nome: "Sentidos Aprimorados", desc: "Ganhe +1 permanente em Percepção." },
        { seq: "7", nome: "Adivinhação Corrompida", desc: "Você aprende instintivamente a usar espelhos para rituais de adivinhação, ganhando +2 dados nesses testes." },
        { seq: "6", nome: "Existe alguém mais bela do que eu?", desc: "Sua aparência se torna hipnótica e perturbadora. Você pode usar seu atributo de Aparência (Carisma) no lugar de Manipulação para testes de Intimidação." },
        { seq: "5", nome: "Catalisador Mágico", desc: "Partes do seu corpo (cabelo, unhas, sangue) se tornam catalisadores potentes para rituais e feitiçaria, reduzindo o custo de qualquer ritual que você realize em 2 PE." },
        { seq: "4", nome: "Tomo Profano", desc: "Seu conhecimento sobre o lado sombrio da magia se aprofunda. Você aprende a lançar um feitiço de domínio Corrompido à sua escolha." },
        { seq: "2", nome: "Descendência Diabólica", desc: "Você ganha resistência a dano de fontes Degenerativas e de Corrupção (recebe +3 dados para absorver esse tipo de dano)." },
        { seq: "2 - Anjo", nome: "Maestria Arcana", desc: "O custo em PE de todas as suas habilidades Beyonder (de qualquer Sequência) é permanentemente reduzido pela metade (arredondado para cima)." }
    ],
    formaMitica: {
        nome: "Medusa da Perdição",
        disponivel: "(Habilidade disponível a partir da Sequência 4)",
        ativacao: "Requer uma ação completa e causa Degradação de Sanidade e acumula Pontos de Corrupção Mítica, conforme as regras gerais do sistema.",
        descricao: "Seu corpo se funde com a essência de um terror primordial. Sua pele adquire um brilho pétreo, como mármore rachado. Seus cabelos se transformam em um ninho de serpentes negras e sibilantes com olhos vermelhos. Seus próprios olhos brilham com um verde fosforescente, capaz de petrificar não apenas a carne, mas a alma. Vestes esvoaçantes de tecido corroído pelo tempo e fios invisíveis de energia demoníaca se conectam de suas mãos ao mundo ao redor, prontas para tecer desastres.",
        bonus: "Sua Destreza e Aparência (Carisma/Manipulação) aumentam em +2.",
        poderes: [
            { tipo: "Passivo", nome: "Aura Petrificante - Seq. 4", desc: "A dificuldade para resistir a todos os seus poderes de medo ou controle mental aumenta em 2. Qualquer um que olhe diretamente para você deve fazer um teste de Vontade (Dif. 7) ou fica hesitante, sofrendo -2 na sua iniciativa." },
            { tipo: "Ação", nome: "Olhar da Medusa - Seq. 4 Requisito", desc: "Gaste 4 PE e foque seu olhar em um alvo. Ele deve passar num teste de Vigor (Dif. 8) ou seu corpo começa a se petrificar, sofrendo -2 em Destreza por 3 turnos. Se falhar por 3 ou mais sucessos, ele fica completamente petrificado e paralisado por um turno." },
            { tipo: "Ação", nome: "Beijo da Morte - Seq. 3", desc: "Gaste 10 PE e toque um alvo. Ele sofre dano Agravado massivo (5d10) de pura entropia. Se morrer, seu corpo se transforma em uma estátua de sal que explode, causando danos a todos ao redor." },
            { tipo: "Reação", nome: "Pele de Mármore - Seq. 2", desc: "Ao ser alvo de um ataque físico, gaste 5 PE. Sua pele se torna dura como mármore, ganhando Rd 10 contra aquele ataque. O atacante sofre dano igual ao que você absorveu." }
        ]
    },
    mythicalForm: {
      incomplete: { 
        tempHpBonus: 30,
        attributeBoosts: { destreza: 2, manipulacao: 1 },
        sanityCostPerTurn: "1d2", 
        abilities: [
          { name: "Olhar Perturbador", desc: "Qualquer um que te encarar deve fazer um teste de Vontade (DT 6) ou sofrer -1 em todas as ações no próximo turno devido ao medo." },
          { name: "Cabelos de Serpente", desc: "Seus cabelos se animam como serpentes venenosas. Você pode fazer um ataque extra por turno com eles (Dano: 1d4 + veneno leve)." }
        ]
      },
      complete: {
        tempHpBonus: 60,
        attributeBoosts: { destreza: 4, manipulacao: 2 },
        abilities: [
          { name: "Olhar Petrificante Verdadeiro", desc: "Sua habilidade Olhar da Medusa não requer mais um gasto de PE e a dificuldade para resistir aumenta para 9." },
          { name: "Toque da Entropia", desc: "Seus toques aceleram a decadência. Objetos não-mágicos envelhecem e se desfazem, e seres vivos sofrem 1d6 de dano degenerativo por turno enquanto você os tocar." }
        ]
      }
    },
    domain: {
        description: "A magia da Tentação, da Corrupção da Vontade e da manifestação dos Pecados Capitais. Um Demônio não quebra as leis com força, mas sussurra no ouvido dos homens as razões perfeitas para que eles mesmos as quebrem.",
        particulas: [
            { name: "Paroxyno", translation: "Instigação", type: "Função", conceito: "O poder de inflamar uma emoção negativa latente até seu ponto de ruptura. É a arte de empurrar alguém para o frenesi com um único sussurro.", exemplo: "Paroxyno Ivi (Instigar Pessoa) — Pega uma irritação e a transforma em fúria homicida, ou uma preocupação e a transforma em pânico paralisante.", uso: "Paroxyno Pathos (Instigar o Desejo) — Amplifica um desejo (cobiça, luxúria) a tal ponto que ele se torna uma compulsão que sobrepuja toda a lógica e autocontrole." },
            { name: "Pathos", translation: "Desejo", type: "Característica", conceito: "A essência da emoção crua, da tentação e dos impulsos que governam os seres vivos. Infunde magia com uma irresistível força de vontade.", exemplo: "Al Ivi Pathos (Alterar Pessoa com Desejo) — Amplifica um desejo latente em um alvo, fazendo-o agir sobre ele.", uso: "Un Ala-Pathos (Conectar Abstrato-Desejo) — Vincula o desejo de um alvo a um objeto. Enquanto o objeto permanecer intacto, o alvo será incapaz de abandonar aquele desejo." },
            { name: "Corruptus", translation: "Corromper", type: "Função", conceito: "A Função de manchar, perverter e degradar. Diferente de Enfraquecer, Corruptus não diminui o poder, mas o torce para um propósito sombrio.", exemplo: "Corruptus Locus (Corromper Lugar) — Transforma um lugar sagrado em profano.", uso: "Corruptus Lex (Corromper a Lei) — Perverte uma regra ou proibição mágica." }
        ]
    },
    sequences: {
        "Sequência 9: Assassino": [
            { name: "Visão Noturna", desc: "Você pode enxergar perfeitamente na escuridão, mesmo na ausência total de luz." },
            { name: "Passo Silencioso", desc: "Passivo. Ganhe +2 dados em todos os testes de Furtividade para se mover em silêncio." },
            { name: "Ataque Surpresa (Decisivo)", desc: "Ao atacar um inimigo que não está ciente de sua presença, seu primeiro ataque é automaticamente um Sucesso Crítico." },
            { name: "Aura de Desordem", desc: "Passivo. Sua presença causa desconforto. Testes de Vontade para resistir à sua intimidação têm a dificuldade aumentada em 1." }
        ],
        "Sequência 8: Instigador": [
            { name: "Instigação", desc: "Gaste 3 PE e faça um teste disputado de Manipulação + Lábia vs. Vontade do alvo. Se vencer, você pode plantar uma ideia ou emoção simples na mente dele." },
            { name: "Canalizador de Emoções", desc: "Passivo. Você está sempre ciente da emoção dominante de todos em um raio de 5 metros, permitindo que você explore seus medos e desejos." },
            { name: "Presença Fraca", desc: "Você pode gastar 2 PE para suprimir sua aura. Pelos próximos 10 minutos, as pessoas tendem a te ignorar e esquecer que você está na sala." },
            { name: "Submergir em Caos", desc: "Passivo. Enquanto estiver em combate contra 3 ou mais inimigos, você ganha +1 na sua Defesa. A confusão é seu ambiente natural." }
        ],
        "Sequência 7: Bruxa": [
            { name: "Substituto de Espelho", desc: "Gaste 5 PE. Você cria uma duplicata perfeita de si mesmo a partir de uma superfície reflexiva. A duplicata é uma ilusão que dura por uma cena." },
            { name: "Pente do Pavor", desc: "Gaste 3 PE e passe um pente em seu cabelo. O pente pode então ser jogado e se transforma em uma barreira de espinhos que cria terreno difícil." },
            { name: "Lançar Maldição Menor", desc: "Você pode tocar em um objeto e amaldiçoá-lo. A próxima pessoa a tocar no objeto sofre uma pequena onda de azar (sua próxima ação tem -2 dados). Custa 2 PE." },
            { name: "Escudo de Cabelo", desc: "Como reação a um ataque, gaste 2 PE. Seu cabelo se move por conta própria e endurece para bloquear o ataque, concedendo +3 dados na sua Defesa." }
        ],
        "Sequência 6: Prazer": [
            { name: "Teia de Aranha Invisível", desc: "Gaste 4 PE. Você cria fios invisíveis e pegajosos em uma área de 5m². Inimigos que entram na área devem fazer um teste de Percepção (Dif. 7) ou ficarão presos." },
            { name: "Espalhar Doença (Praga)", desc: "Gaste 5 PE. Você pode afligir um alvo com uma doença sobrenatural. Ele deve passar num teste de Vigor (Dif. 7) a cada dia ou sofrerá uma penalidade (cumulativo)." },
            { name: "Aura Acolhedora", desc: "Passivo. Seu magnetismo se torna perigoso. Seres de mesma Sequência ou inferior que passam muito tempo perto de você devem fazer testes de Vontade para não desenvolverem uma lealdade ou obsessão doentia por você." },
            { name: "Súcubo/Íncubo", desc: "Gaste 1 Ponto de Vontade. Em uma interação íntima, você pode drenar a força vital ou a vontade de um alvo, recuperando 2d6 PE ou ganhando temporariamente uma de suas memórias ou habilidades." }
        ],
        "Sequência 5: Aflições": [
            { name: "Praga (Ativo)", desc: "Toque um alvo. Gaste 6 PE para infectá-lo com uma doença sobrenatural debilitante. A cada dia, ele deve fazer um teste de Vigor (Dificuldade 8) ou um de seus atributos Físicos será reduzido em 1." },
            { name: "Aura de Desespero (Ativo)", desc: "Gaste 5 PE. Por uma cena, sua aura exala desespero. Aliados dos seus inimigos em um raio de 10m têm -2 dados em testes de Vontade para manter a moral em combate." },
            { name: "Contágio do Medo (Reação)", desc: "Quando um inimigo falha em um teste de Vontade contra um de seus poderes de medo, você pode gastar 3 PE para que o medo 'salte' para outro inimigo próximo." },
            { name: "Arma de Doença (Ativo)", desc: "Gaste 4 PE para imbuir sua arma com pestilência. Além do dano normal, o alvo atingido deve passar em um teste de Vigor (Dif. 7) ou contrairá uma doença que lhe causa uma penalidade de -1 em todos os testes Físicos por 24 horas." }
        ],
        "Sequência 4: Desespero": [
            { name: "Névoa Tóxica (Ativo)", desc: "Gaste 10 PE para criar uma névoa densa e venenosa em uma vasta área (até 30m de raio) por uma cena. Todos dentro da névoa (exceto você) sofrem -4 em testes de Percepção e devem passar num teste de Vigor (Dif. 7) a cada turno ou sofrerão 2d10 de dano de veneno." },
            { name: "Sombra da Morte (Ativo)", desc: "Gaste 8 PE e marque um alvo com seu olhar. Pela próxima hora, você sempre sabe a localização geral dele e o alvo é atormentado por visões de sua própria morte, sofrendo -2 em todos os testes de Vontade." },
            { name: "Petrificar Alma (Ativo)", desc: "Você pode forçar o efeito do Olhar da Medusa (da sua Forma Mítica) sem precisar se transformar. Gaste 6 PE. Requer um teste disputado de Espiritualidade + Intimidação vs Vontade do alvo." },
            { name: "Prazer na Dor (Passivo)", desc: "Toda vez que um inimigo sofre dano de um efeito seu de praga ou doença, você recupera 1 PE." }
        ],
        "Sequência 3: Sem Idade (Unaging)": [
            { name: "Parar o Tempo Corporal (Ativo)", desc: "Gaste 12 PE. Você toca um alvo. Pelo próximo ano, ele para completamente de envelhecer." },
            { name: "Drenar Juventude (Ativo)", desc: "Toque um alvo. Gaste 10 PE e 1 Vontade. Faça um teste disputado de Espiritualidade vs Vigor. Se vencer, você 'rouba' uma década de vida do alvo. Este ato causa danos massivo (1d4) à Sanidade do alvo." },
            { name: "Corpo de Porcelana (Passivo)", desc: "Seu corpo se torna perfeito e imutável. Você não pode mais ser fisicamente desfigurado por cicatrizes, e é imune a poderes que tentem alterar sua forma." },
            { name: "Terror Ancestral (Ativo)", desc: "Gaste 8 PE. Você projeta uma imagem mental do Demônio Primordial na mente de um alvo. Ele deve fazer um teste de Vontade (Dificuldade 10) ou sua Sanidade é reduzida permanentemente em 1 (Degradação)." }
        ],
        "Sequência 2: Catástrofe": [
            { name: "Desastre Natural (Ativo)", desc: "Gaste 20 PE para invocar uma catástrofe localizada (um pequeno terremoto, uma inundação repentina, uma nevasca antinatural). Afeta uma área do tamanho de um quarteirão e causa danos (3d10)." },
            { name: "Calamidade Pandêmica (Ativo)", desc: "Sua habilidade de Praga evolui. Você cria uma doença que não só debilita, mas se espalha ativamente pelo ar ou pela água. O uso desta habilidade para criar uma pandemia tem graves consequências narrativas e cósmicas." },
            { name: "Invocar a Medusa (Ativo)", desc: "Você pode invocar sua Forma Mítica completa por 1 minuto sem custo contínuo de Degradação de Sanidade. No entanto, o Teste de Expiação no final da cena tem sua dificuldade aumentada para 9." },
            { name: "Campo de Desespero (Passivo)", desc: "Sua aura de desespero (Seq. 5) se torna permanente e mais forte. Qualquer inimigo em sua presença que não tenha nível de Semideus ou superior age como se estivesse sob um efeito de medo constante." }
        ],
        "Sequência 1: Apocalipse": [
            { name: "Chuva de Fogo (Ativo)", desc: "Gaste 30 PE e sofra 1d3 Níveis de Degradação de Sanidade. Você invoca uma chuva de meteoros sobre uma vasta área. A destruição é total." },
            { name: "Personificação do Fim (Passivo)", desc: "Você não é mais um ser, mas um conceito. Você pode ser 'destruído', mas não 'morto'. A menos que sua própria existência seja apagada por um poder de nível igual ou superior, você eventualmente se reformará." },
            { name: "Silenciar a Esperança (Ativo)", desc: "Gaste 25 PE para criar uma 'zona morta' de esperança. Em um raio de 1 km, todos os poderes baseados em fé, coragem e esperança simplesmente falham em funcionar por uma hora." },
            { name: "O Sorriso da Demônia Primordial (Ativo)", desc: "Uso único e épico. Você se oferece como um avatar para a própria Demônia Primordial. Por uma cena, você canaliza seu poder absoluto. No final, seu corpo e alma são completamente consumidos." }
        ]
    }
};