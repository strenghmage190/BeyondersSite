import { PathwayData } from '../../types';

export const maeData: PathwayData = {
    category: "Goddess of Origin",
    pathway: "CAMINHO DA MÃE",
    pvBase: 10,
    pvPorAvanço: 4,
    peBase: 15,
    pePorAvanço: 5,
    vontadeBonus: 2,
    sanidade: 8,
    mecanicaUnica: {
        titulo: "Afinidade com a Vida",
        items: [
            { nome: "Comunhão com a Natureza", desc: "Plantas e animais não-hostis são sempre indiferentes ou amigáveis a você. Você pode fazer um teste de Manipulação + Empatia com Animais para se comunicar de forma básica com eles." },
            { nome: "Solo Fértil", desc: "Passivo. Pequenas plantas (grama, flores) crescem um pouco mais rápido ao seu redor e raramente morrem." }
        ]
    },
    poderesInatos: [
        { seq: "9", nome: "Natureba", desc: "Você pode distinguir plantas venenosas de plantas comestíveis e medicinais com um simples olhar." },
        { seq: "8", nome: "Aura Curativa", desc: "Uma vez por dia, durante um descanso, você e todos os aliados descansando a até 5 metros de você recuperam 1 nível de Vitalidade adicional." },
        { seq: "7", nome: "Dedos Prósperos", desc: "Plantas cultivadas e poções feitas por você têm seus efeitos positivos (cura, crescimento) aumentados em 50%." },
        { seq: "6", nome: "Curiosidade Blasfêmica - Genética", desc: "Sua mente se abre para os segredos da carne. Você ganha a perícia Ciências (Genética) e pode começar a estudá-la." },
        { seq: "5", nome: "Anatomia Narcótica", desc: "Seu próprio corpo se torna um jardim de propriedades únicas. Uma vez por sessão, você pode usar seu próprio cabelo, sangue ou pele como um ingrediente potente para um ritual ou poção, reduzindo o custo em PE ou aumentando a eficácia." },
        { seq: "4", nome: "Corpo Fértil", desc: "Você se torna completamente imune a doenças mundanas." },
        { seq: "2", nome: "Limite da Medicina", desc: "Suas habilidades de cura podem agora estabilizar ferimentos que seriam considerados impossíveis de curar, como membros decepados (embora a regeneração completa ainda exija rituais e poder)." },
        { seq: "2 - Anjo", nome: "Maestria Arcana", desc: "O custo em PE de todas as suas habilidades Beyonder (de qualquer Sequência) é permanentemente reduzido pela metade (arredondado para cima)." }
    ],
    formaMitica: {
        nome: "Matriarca da Vida e Pestilência",
        disponivel: "(Habilidade disponível a partir da Sequência 4)",
        ativacao: "Requer uma ação completa e causa Degradação de Sanidade e acumula Pontos de Corrupção Mítica, conforme as regras gerais do sistema.",
        descricao: "Seu corpo se funde com a própria terra. Raízes ancestrais e videiras carmesim brotam de suas costas, enquanto uma névoa esverdeada, que é ao mesmo tempo símbolo de pestilência e de cura, envolve você. Seus olhos brilham como dois sóis dourados, refletindo o ciclo infinito de vida e morte. Uma veste tecida de folhas vivas e espinhos venenosos brota em sua pele, e sua voz soa como o sussurro do vento e o farfalhar das folhas.",
        bonus: "Seu Vigor e sua Inteligência aumentam em +2. Sua Vitalidade é totalmente restaurada ao ativar.",
        poderes: [
            { tipo: "Passivo", nome: "Abraço da Mãe - Seq. 4", desc: "Você e seus aliados em um raio de 10m ganham +4 dados em testes para resistir a venenos, doenças e pragas. Você também ganha uma armadura natural de casca e vinhas que concede 3 dados extras para absorver dano." },
            { tipo: "Ação", nome: "Praga das Sete Chagas - Seq. 4 Requisito", desc: "Gaste 8 PE. Você libera uma nuvem de esporos que atinge todos os inimigos em um raio de 15m. Eles sofrem dano contínuo (2 dados, ignorando armadura) por 3 turnos e a dificuldade para resistir a doenças aumenta em 2." },
            { tipo: "Ação", nome: "Jardim da Perdição - Seq. 3", desc: "Gaste 10 PE. Raízes e vinhas brotam do chão, agarrando todos os inimigos na área, que devem passar em um teste de Força (Dif. 8) ou ficarão imobilizados." },
            { tipo: "Reação", nome: "Lírio da Ressurreição - Seq. 2", desc: "Quando um aliado morrer, gaste 15 PE e sofra 1d3 Níveis de Degradação de Sanidade. Ele volta à vida com metade de sua Vitalidade. Uma vez por história." }
        ]
    },
    mythicalForm: {
      incomplete: {
        tempHpBonus: 35,
        attributeBoosts: { vigor: 2, inteligencia: 1 },
        sanityCostPerTurn: "1",
        abilities: [
          { name: "Aura de Vida Menor", desc: "Aliados adjacentes a você regeneram 1 Ponto de Vida por turno." },
          { name: "Toque Enferrujado", desc: "Seu toque pode causar uma doença leve em um alvo (teste de Vigor DT 6 ou sofre -1 em todos os atributos físicos por uma hora)." }
        ]
      },
      complete: {
        tempHpBonus: 70,
        attributeBoosts: { vigor: 4, inteligencia: 2 },
        abilities: [
          { name: "Santuário Vivo", desc: "Você se torna uno com a natureza ao seu redor. Em um ambiente natural, você pode se teleportar entre plantas e comandá-las para atacar ou prender inimigos." },
          { name: "Peste Devastadora", desc: "Gaste 15 PE para criar uma praga que afeta uma área de 50m. Todos na área devem fazer um teste de Vigor (DT 8) a cada turno ou sofrem 1d10 de dano degenerativo." }
        ]
      }
    },
    domain: {
        description: "A magia do Ciclo da Vida, da Natureza fértil e da Morte que gera vida. Uma seguidora da Mãe entende que tudo é parte do mesmo ciclo — crescimento, abundância, praga e decomposição.",
        particulas: [
            { name: "Zoe", translation: "Vida", type: "Característica", conceito: "A essência pura da fertilidade, crescimento e vitalidade biológica. Diferente de An (Restaurar), Zoe não conserta, ela cresce.", exemplo: "Al Ora Zoe (Alterar Vegetação com Vida) — Acelera o crescimento de plantas, fazendo uma semente brotar em segundos.", uso: "Ev Ani Zoe (Criar Alma com Vida) — Imbui uma Quimera com uma centelha de verdadeira senciência." },
            { name: "Physis", translation: "Natureza", type: "Objeto", conceito: "A consciência coletiva de um ecossistema. Permite ao conjurador se comunicar e comandar a totalidade de um ambiente natural.", exemplo: "Et Physis (Controlar Natureza) — Pedir a um bosque para que seus galhos agarrem um invasor.", uso: "Un Ivi Physis (Conectar Pessoa com Natureza) — Transfere a consciência de uma pessoa para uma árvore, permitindo-lhe sobreviver à morte de seu corpo físico." },
            { name: "Nosos", translation: "Peste", type: "Função/Característica", conceito: "O reverso da Vida. O poder da doença, da praga e da decomposição como uma força ativa. É o inverno do ciclo da vida.", exemplo: "Im Ivi Nosos (Atacar Pessoa com Peste) — Infesta um alvo com uma doença sobrenatural.", uso: "Lues Locus Nosos (Corromper Lugar com Peste) — Transforma uma área fértil em um pântano podre." }
        ]
    },
    sequences: {
        "Sequência 9: Plantador": [
            { name: "Semeadura Explosiva", desc: "Você pode encantar uma semente. Gaste 2 PE e arremesse-a. Ela explode ao atingir um alvo, causando 4 dados de dano de contusão em uma pequena área." },
            { name: "Acelerar Crescimento", desc: "Gaste 2 PE. Toque uma planta ou semente. Ela passa por um ciclo de crescimento de um dia inteiro em questão de segundos." },
            { name: "Videiras Construtivas", desc: "Você pode fazer com que raízes e vinhas ao seu redor cresçam e se entrelacem, criando barreiras simples ou terreno difícil em uma área de 5m². Custa 3 PE." },
            { name: "Comunhão Herbácea", desc: "Passivo. Você sabe exatamente do que uma planta precisa (água, luz, nutrientes) apenas ao tocá-la." }
        ],
        "Sequência 8: Doutor": [
            { name: "Cura Integral", desc: "Gaste 3 PE e toque um alvo. Ele recupera 2 níveis de Vitalidade. Esta habilidade pode ser usada para curar tanto ferimentos físicos quanto doenças leves." },
            { name: "Suturar a Alma", desc: "Para curar danos à Sanidade, você precisa de um ritual de 10 minutos. Gastando 5 PE e usando agulhas de prata e fios de seda, você pode restaurar 1 ponto da Sanidade (não máxima) de um alvo." },
            { name: "Diagnóstico Preciso", desc: "Gaste 1 PE e faça um teste de Percepção + Medicina (Dif. 6). Você descobre a causa exata de qualquer doença, ferimento ou veneno em um paciente." },
            { name: "Instinto do Fiel", desc: "Passivo. Você pode gastar 1 ponto de Vontade para ganhar sucesso automático em qualquer teste de Medicina para estabilizar um paciente moribundo." }
        ],
        "Sequência 7: Sacerdote da Colheita": [
            { name: "Bênção da Terra", desc: "Abençoe uma área de terra do tamanho de um grande jardim por 24 horas. Todas as plantas ali crescem duas vezes mais rápido e se tornam imunes a pragas. Custa 5 PE." },
            { name: "Invocar Enxame", desc: "Você invoca um enxame de insetos (gafanhotos, abelhas) que ataca seus inimigos em um raio de 10m, causando -2 de penalidade em suas paradas de dados por 3 turnos. Custa 4 PE." },
            { name: "Análise (Poder de Classe)", desc: "Gaste 1 PE e passe um turno analisando um ser vivo. Você descobre suas fraquezas físicas, doenças e condições (envenenado, etc.)." },
            { name: "Pele de Casca", desc: "Como reação, gaste 2 PE para enrijecer sua pele. Ganhe 3 dados de armadura contra um único ataque." }
        ],
        "Sequência 6: Biólogo": [
            { name: "Cruzamento Quimérico Menor", desc: "Em um laboratório, você pode passar um dia e gastar 10 PE para combinar duas espécies de plantas ou animais pequenos, criando um híbrido bizarro." },
            { name: "Mutação Controlada", desc: "Gaste 5 PE para induzir uma mutação temporária em si mesmo por uma cena. Exemplos: desenvolver guelras, garras retráteis, ou pele que muda de cor." },
            { name: "Toxina Potente", desc: "Gaste 4 PE. Você extrai uma potente toxina de uma planta ou de seu próprio corpo. O alvo atingido deve fazer um teste de Vigor (Dif. 7) ou sofrerá -2 em seus Atributos Físicos por uma hora." },
            { name: "Estudo Transcendente", desc: "Passivo. Quando você estuda com sucesso os restos de uma criatura Beyonder, você aprende a emular uma de suas resistências ou fraquezas por 24 horas." }
        ],
        "Sequência 5: Druida": [
            { name: "Geração de Videiras (Ativo)", desc: "Gaste 6 PE. Do chão ao seu redor, brotam vinhas espessas e vivas que você controla. Elas podem ser usadas para agarrar inimigos ou para formar paredes." },
            { name: "Metamorfose Animal (Ativo)", desc: "Gaste 5 PE. Você se transforma em um animal comum poderoso (urso, lobo, águia) por uma hora, ganhando seus atributos físicos e habilidades naturais." },
            { name: "Criança da Natureza (Ativo)", desc: "Uma vez por dia, se você estiver perto de uma planta grande, pode gastar 10 PE e transferir sua consciência para ela. Se seu corpo for destruído, sua consciência pode sobreviver na planta." },
            { name: "Cirurgião Enlouquecido (Ativo)", desc: "Gaste 8 PE. Sua compreensão da genética lhe permite unir membros de criaturas diferentes, criando quimeras e híbridos bizarros, porém funcionais, que servem a você." }
        ],
        "Sequência 4: Alquimista Clássico (Mãe das Feras e das Ervas)": [
            { name: "Vida Alquímica (Ativo)", desc: "Em um ritual de um dia que gasta 15 PE, você pode animar um construto de materiais naturais, como um Golem de Madeira ou um Homem de Argila, que o servirá lealmente." },
            { name: "Sussurros da Terra Fertilizada (Ativo)", desc: "Gaste 10 PE. Aliados em um raio de 15 metros ganham regeneração de 1 nível de Vitalidade por turno e imunidade a venenos por 3 rodadas. Inimigos na mesma área sofrem 1d6 de dano de praga." },
            { name: "Mestre dos Híbridos (Passivo)", desc: "Suas criações Quiméricas (da Seq. 6) agora são mais potentes e podem ter traços de Beyonders de baixa sequência." },
            { name: "Transformação de Membro (Ativo)", desc: "Gaste 4 PE. Você transforma um de seus braços em uma arma viva: uma lâmina de osso, um tentáculo com espinhos venenosos, ou um chicote de vinha." }
        ],
        "Sequência 3: Carregador do Caixão (Jardim da Perdição)": [
            { name: "Invocar Túmulo de Plantas (Ativo)", desc: "Gaste 8 PE. Você invoca plantas que cresceram sobre os túmulos de guerreiros, sábios ou artistas. A planta assume características de quem está enterrado." },
            { name: "Raízes da Devoração (Ativo)", desc: "Gaste 6 PE. Raízes afiadas brotam do chão, atacando todos os inimigos em uma área. A rolagem de ataque é Inteligência + Ocultismo." },
            { name: "A Praga que enfurece (Ativo)", desc: "Gaste 10 PE e marque um alvo. Ele é afligido por uma doença que o leva a uma fúria bestial, fazendo-o atacar a criatura mais próxima por 3 turnos." },
            { name: "Reciclagem Vital (Reação)", desc: "Após a morte de uma de suas criações (Golem, Quimera), você absorve sua energia vital, recuperando 5 PE e 2 níveis de Vitalidade." }
        ],
        "Sequência 2: Matriarca Desolada": [
            { name: "Floração Selvagem (Ativo)", desc: "Gaste 12 PE. Você invoca uma explosão de vida vegetal mutante em um raio de 30 metros. O local se torna uma selva caótica e consciente que ataca e cura." },
            { name: "Ciclo da Fertilidade (Passivo)", desc: "No início de cada cena, você e seus aliados ganham +1d10 em todos os testes de resistência (Vigor). Sua aura inspira vitalidade pura." },
            { name: "Chuva de Esperança e Desespero (Ativo)", desc: "Gaste 10 PE. Você conjura uma chuva dourada em uma área. Aliados são curados em 3 níveis de Vitalidade. Inimigos são afligidos por um desespero avassalador." },
            { name: "A Peste Perfeita (Ativo)", desc: "Com um ritual prolongado e um custo de Degradação de Sanidade, você pode criar uma doença totalmente nova, definindo seus sintomas, transmissão e letalidade." }
        ],
        "Sequência 1: Mãe Terra": [
            { name: "Retorno à Terra (Ativo)", desc: "Você pode se fundir completamente com um ecossistema (uma floresta, um pântano), controlando-o inteiramente por até uma hora. Custa 20 PE e 1 Vontade." },
            { name: "O Sopro da Vida (Ativo)", desc: "Uso único e épico. Gastando uma quantidade imensa de energia e Vontade, você pode trazer de volta à vida um ecossistema que foi completamente aniquilado." },
            { name: "Toque da Matriarca (Passivo)", desc: "Sua aura de vida é tão forte que matéria orgânica morta não apodrece perto de você, e ferimentos leves em seus aliados se curam lentamente a cada hora." },
            { name: "A Peste que Devora Mundos (Ativo)", desc: "A contraparte do Sopro da Vida. Um ritual que leva dias e custa uma porção permanente de sua alma para criar uma praga capaz de destruir a vida de um continente." }
        ]
    }
};
