import { PathwayData } from '../../types';

export const tiranoData: PathwayData = {
    category: "Calamity of Destruction",
    pathway: "CAMINHO DO TIRANO",
    pvBase: 15,
    pvPorAvanço: 5,
    peBase: 15,
    pePorAvanço: 5,
    vontadeBonus: 1,
    sanidade: 7,
    mecanicaUnica: {
        titulo: "Fúria da Tempestade",
        items: [
            { nome: "Acumular Fúria", desc: "Para cada 5 de vida que você perde em combate, você ganha 1 Ponto de Fúria temporário." },
            { nome: "Gastar Fúria", desc: "Você pode gastar Pontos de Fúria para adicionar +2 de dano a uma habilidade elemental para cada Ponto gasto. A Fúria se dissipa ao final do combate." }
        ]
    },
    poderesInatos: [
        { seq: "9", nome: "Predador das Profundezas", desc: "Você pode respirar debaixo d'água e ganha +1 dado em testes de Sobrevivência em ambientes aquáticos." },
        { seq: "8", nome: "Visão Noturna", desc: "Você pode enxergar perfeitamente na escuridão, mesmo na ausência total de luz." },
        { seq: "7", nome: "Fluidez", desc: "Enquanto estiver na chuva ou em meio aquático, ganhe +1 na sua Defesa." },
        { seq: "6", nome: "Fôlego", desc: "Seu Vigor é considerado 1 ponto mais alto para testes de resistência contra exaustão e afogamento." },
        { seq: "5", nome: "Sangue dos Tritões", desc: "Você desenvolve guelras sutis e pode se comunicar com criaturas marinhas de forma básica." },
        { seq: "4", nome: "Linhagem Ancestral", desc: "Você se torna um condutor natural de poder. Adicione seu atributo de Força à sua reserva de PE, além dos bônus normais." },
        { seq: "2", nome: "Estática Aprimorada", desc: "Sua afinidade com relâmpagos se torna tão grande que você pode enviar mensagens através de pulsos elétricos, como um telégrafo natural." },
        { seq: "2 - Anjo", nome: "Maestria Arcana", desc: "O custo em PE de todas as suas habilidades Beyonder (de qualquer Sequência) é permanentemente reduzido pela metade (arredondado para cima)." }
    ],
    formaMitica: {
        nome: "Leviatã do Caos Eletrizante",
        disponivel: "(Habilidade disponível a partir da Sequência 4)",
        ativacao: "Requer uma ação completa e causa Degradação de Sanidade e acumula Pontos de Corrupção Mítica, conforme as regras do sistema.",
        descricao: "Seu corpo se transforma em uma criatura abissal colossal. Sua pele se torna uma armadura de escamas azul-escuras pulsantes com energia, e seus olhos brilham como faróis nas profundezas. Tentáculos feitos de água solidificada e envoltos em relâmpagos dourados emergem de seu corpo. Uma tempestade primordial gira ao seu redor, misturando furacões, tsunamis e raios. Seu rugido não é apenas som, é o próprio trovão.",
        bonus: "Seu Vigor e sua Força aumentam em +2.",
        poderes: [
            { tipo: "Passivo", nome: "Corpo da Tempestade (Seq. 4)", desc: "Você é imune a dano de eletricidade e pressão da água. Inimigos que te atacam corpo a corpo sofrem 1d6 dados de dano elétrico por retaliação." },
            { tipo: "Ação", nome: "Canção do Abismo (Seq. 4 Requisito)", desc: "Gaste 8 PE. Você canta uma melodia ancestral que paralisa inimigos em um alcance médio por 2 turnos, a menos que passem em um teste de Vontade (Dif. 8)." },
            { tipo: "Ação", nome: "Fúria do Oceano (Seq. 3)", desc: "Gaste 10 PE. Você invoca uma onda colossal (15m de altura) ou um tornado aquático que arrasta inimigos, causando 3d10 dados de dano e remodelando o campo de batalha." },
            { tipo: "Reação", nome: "Raio Celeste (Seq. 2)", desc: "Ao ser alvo de um ataque, você pode se dissolver em um raio de luz e se teletransportar para um ponto a até 30 metros, evitando o ataque. Custa 5 PE." }
        ]
    },
    mythicalForm: {
      incomplete: {
        tempHpBonus: 40,
        attributeBoosts: { forca: 2, vigor: 2 },
        sanityCostPerTurn: "1",
        abilities: [
          { name: "Corpo Tempestuoso", desc: "Seu corpo é envolto por ventos e relâmpagos, concedendo +3 de armadura e causando 1d4 de dano elétrico a quem o tocar." },
          { name: "Rugido da Maré", desc: "Você pode soltar um rugido que funciona como um ataque sônico em cone, empurrando inimigos para trás." }
        ]
      },
      complete: {
        tempHpBonus: 80,
        attributeBoosts: { forca: 4, vigor: 4 },
        abilities: [
          { name: "Um com a Tempestade", desc: "Você pode se transformar em um relâmpago para viajar grandes distâncias instantaneamente." },
          { name: "Invocar o Leviatã", desc: "Uma vez por história, você pode invocar uma criatura marinha colossal para lutar ao seu lado por uma cena." }
        ]
      }
    },
    domain: {
        description: "A magia da Tempestade Indomável, do Poder Esmagador e da Autoridade Absoluta sobre os Elementos. Um Tirano não pede; ele comanda.",
        particulas: [
            { name: "Keraunos", translation: "Tempestade", type: "Objeto/Característica", conceito: "A essência da tempestade em sua totalidade: ventos uivantes, relâmpagos crepitantes e ondas esmagadoras. É o poder bruto e incontrolável do clima como uma arma.", exemplo: "Ev Locus Keraunos (Criar Lugar de Tempestade) — Invoca uma chuva torrencial e ventos fortes em uma área.", uso: "Al Ani Keraunos (Alterar Alma com Tempestade) — Imbui a alma do Tirano com a natureza de uma tempestade, fazendo com que sua aura emita uma pressão espiritual aterrorizante." },
            { name: "Basileus", translation: "Soberano", type: "Característica", conceito: "A autoridade tirânica sobre os outros. Esta Característica infunde a magia com um comando inquestionável, não através da lógica (Lex) ou da sedução (Pathos), mas através da pura intimidação e poder esmagador.", exemplo: "Et Ivi Basileus (Controlar Pessoa como Soberano) — Um comando vocal simples (ex: 'Ajoelhe-se!') que o alvo deve passar em um teste de Vontade com alta dificuldade ou obedecer.", uso: "In Magia Basileus (Enfraquecer Magia como Soberano) — Tenta subjugar um feitiço inimigo com sua própria autoridade." },
            { name: "Pontus", translation: "Oceano", type: "Objeto", conceito: "O poder primordial e esmagador do mar profundo. Representa a pressão das profundezas, as marés e as criaturas abissais.", exemplo: "Im Locus Pontus (Atacar Lugar com Oceano) — Faz com que uma onda fantasmagórica ou um jato de água pressurizada surja do chão para atacar os inimigos.", uso: "It Pneuma Pontus (Transportar Espírito para o Oceano) — Em vez de banir um espírito, o Tirano o 'afoga' nas profundezas conceituais do oceano." }
        ]
    },
    sequences: {
        "Sequência 9: Marinheiro": [
            { name: "Força do Vento", desc: "Como uma ação completa, você pode fortalecer seu corpo com energia espiritual por 2 turnos. Sua Força é considerada 2 pontos mais alta para levantar objetos ou para testes de agarrar. Custa 4 PE." },
            { name: "Equilíbrio Perfeito", desc: "Passivo. Você nunca perde o equilíbrio em um navio ou superfície instável. Ganhe +2 dados em testes para resistir a ser derrubado." },
            { name: "Sentir o Clima", desc: "Você tem um pressentimento sobre o clima, sabendo com horas de antecedência se uma tempestade se aproxima." },
            { name: "Navegação", desc: "Passivo. Você sempre sabe onde está o norte e pode navegar pelos mares usando as estrelas, mesmo que nunca tenha sido ensinado." }
        ],
        "Sequência 8: Povo da Fúria": [
            { name: "Golpe Violento", desc: "Você pode canalizar sua fúria em um único ataque devastador. Gaste 3 Pontos de Fúria e 2 PE para adicionar +4 dados à sua próxima rolagem de dano corpo a corpo." },
            { name: "Fúria Cega", desc: "Quando sua Vitalidade chega a 'Ferido', você pode entrar em uma fúria. Ganhe +2 em Força, mas sofra -2 em Inteligência e não pode recuar. Dura até o fim do combate." },
            { name: "Mergulhador", desc: "Passivo. Você pode prender a respiração pelo triplo do tempo normal e sua velocidade de nado é dobrada." },
            { name: "Até a Morte", desc: "Passivo. Enquanto estiver em um estado de Fúria, você é imune a poderes que causam medo." }
        ],
        "Sequência 7: Marítimo": [
            { name: "Manipulação da Água (Jato de Água)", desc: "Gaste 2 PE para disparar um jato de água pressurizada que causa 1d8 dados de dano de contusão e empurra o alvo 3 metros para trás." },
            { name: "Manipulação da Água (Escudo de Água)", desc: "Como reação, gaste 3 PE para criar um escudo de água que absorve 15 de dano de um único ataque. É especialmente eficaz contrafogo." },
            { name: "Respiração Aquática", desc: "Passivo. A mecânica de Predador das Profundezas (Seq. 9) evolui. Agora você pode respirar debaixo d'água indefinidamente, como um peixe." },
            { name: "Névoa Espessa", desc: "Gaste 4 PE. Você conjura uma névoa densa em uma área de 10m, obscurecendo a visão. Todos os ataques à distância dentro ou através da névoa têm -3 dados de penalidade." }
        ],
        "Sequência 6: Abençoado pelo Vento": [
            { name: "Manipulação do Vento (Pás Eólicas)", desc: "Gaste 3 PE para lançar lâminas invisíveis de vento que causam 1d8+3 dados de dano de corte a um alvo." },
            { name: "Manipulação do Vento (Almofada de Ar)", desc: "Como reação a uma queda (sua ou de um aliado), gaste 2 PE. O dano da queda é completamente anulado." },
            { name: "Voo de Curta Distância", desc: "Gaste 4 PE por turno. Correntes de vento o sustentam no ar, permitindo que você voe lentamente." },
            { name: "Resistência da Tempestade (Reação)", desc: "Uma vez por rodada, ao ser alvo de um ataque, você pode gastar 3 PE para canalizar a fúria da tempestade, ganhando uma quantidade de dados bônus na sua rolagem de Absorção igual ao seu atributo de Vigor" },
            { name: "Silenciar com o Vento", desc: "Você pode manipular o ar para criar uma bolha de silêncio em torno de um alvo. Ótimo para furtividade ou para anular conjuradores. Custa 3 PE por turno." }
        ],
        "Sequência 5: Cantor do Oceano": [
            { name: "Canção das Marés (Canto da Sereia)", desc: "Gaste 6 PE e faça um teste de Presença + Performance. Inimigos que ouvem seu canto devem fazer um teste de Vontade (Dif. 8) ou ficarão fascinados por 3 turnos." },
            { name: "Canção do Trovão", desc: "Gaste 5 PE. Você libera um grito sônico que causa 6 dados de dano de trovão em um cone e pode atordoar os alvos." },
            { name: "Invocar Criatura Marinha", desc: "Em um corpo d'água grande, você pode gastar 10 PE para invocar uma criatura marinha poderosa para lutar por você." },
            { name: "Comunicação Telepática Aquática", desc: "Passivo. Você pode se comunicar telepaticamente com qualquer criatura que respire água." }
        ],
        "Sequência 4: Cataclisma": [
            { name: "Tsunami (Ativo)", desc: "Gaste 15 PE para invocar uma onda gigantesca que devasta uma grande área. Causa dano massivo (5d10) e remodela o terreno permanentemente." },
            { name: "Furacão (Ativo)", desc: "Gaste 12 PE para criar um furacão localizado. Ventos violentos arremessam inimigos e objetos, causando dano (2d6) contínuo." },
            { name: "Terremoto (Ativo)", desc: "Gaste 12 PE. Você pisa no chão, causando um terremoto em um raio de 50m. Estruturas desabam, fissuras se abrem. (3d10 de dano)" },
            { name: "Rugido Sônico", desc: "Gaste 8 PE. A evolução da Canção do Trovão. Seu rugido agora pode estilhaçar aço e quebrar ossos. Causa 4d6 dados de dano sônico e ignora armadura." }
        ],
        "Sequência 3: Rei do Mar": [
            { name: "Domínio do Oceano (Ativo)", desc: "Enquanto estiver no mar, gaste 20 PE para assumir o controle de uma vasta área (1km de raio). Você pode elevar ilhas, criar redemoinhos e comandar toda a vida marinha na região." },
            { name: "Comandar a Tempestade (Ativo)", desc: "Sua habilidade de Furacão evolui. Você agora pode invocar uma tempestade completa, com ventos de furacão e relâmpagos contínuos. Custa 15 PE e 1 Vontade." },
            { name: "Forma de Água (Ativo)", desc: "Sua afinidade com a água é absoluta. Você pode se transformar em um elemental de água, tornando-se imune a dano físico e capaz de se espremer por qualquer fresta. Gaste 10 PE por cena." },
            { name: "Comandar o Kraken (Passivo)", desc: "Sua habilidade de invocar criaturas marinhas agora pode, com um ritual muito mais poderoso e caro, invocar um Kraken lendário." }
        ],
        "Sequência 2: Calamidade": [
            { name: "Congelamento Extremo (Ativo)", desc: "Você pode sugar todo o calor de uma área, causando um congelamento instantâneo. Gaste 18 PE. Inimigos podem ficar presos em gelo sólido." },
            { name: "Fúria Elétrica (Ativo)", desc: "Gaste 15 PE. Você se torna um avatar da eletricidade. Seu corpo se transforma em um relâmpago vivo. Nesta forma, você se move instantaneamente e seus ataques causam dano de eletricidade massivo." },
            { name: "Pressão Abissal (Ativo)", desc: "Você invoca a pressão esmagadora das profundezas do oceano em um alvo. Gaste 12 PE. O corpo e o equipamento do alvo são esmagados como se estivessem a 10.000 metros de profundidade." },
            { name: "Supremacia dos Kraken (Ativo)", desc: "Gaste 25 PE e 1 Vontade para invocar dois Krakens Elétricos que lutam por você e explodem em energia ao serem destruídos." }
        ],
        "Sequência 1: Deus do Trovão": [
            { name: "Ira do Deus Todo-Poderoso (Habilidade Única)", desc: "Com um custo massivo de poder, você libera todo o poder do Mar do Caos. Seus ataques causam danos máximo, você ganha controle absoluto sobre a água e a eletricidade, e pode invocar tsunamis de 50m de altura. Dura 3 rodadas e causa Degradação de Sanidade no final." },
            { name: "Julgamento de Trovão (Ativo)", desc: "Uso único e épico. Você aponta para o céu e invoca um único raio de poder divino. O raio atinge um alvo que você designar, não importa onde ele esteja no mundo. A destruição é absoluta." },
            { name: "Tempestade Perpétua (Passivo)", desc: "Aonde quer que você vá, uma tempestade sobrenatural o segue. Não é apenas chuva e vento; é uma manifestação de sua presença, com chuva ácida e relâmpagos estáticos que afetam seus inimigos." },
            { name: "Unidade com o Mar (Passivo)", desc: "Você se torna um com o oceano. Enquanto estiver em qualquer corpo de água, você é efetivamente imortal. Você pode se dissolver na água e se reformar em qualquer outro ponto do oceano globalmente." }
        ]
    }
};