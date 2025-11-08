import { PathwayData } from '../../types';

export const giganteData: PathwayData = {
    category: "Calamity of Destruction",
    pathway: "CAMINHO DO GIGANTE DO CREPÚSCULO",
    pvBase: 15,
    pvPorAvanço: 5,
    peBase: 10,
    pePorAvanço: 4,
    vontadeBonus: 2,
    sanidade: 7,
    mecanicaUnica: {
        titulo: "Honra do Gigante",
        items: [
            { nome: "Postura de Muralha", desc: "Se você gastar sua ação de movimento para não se mover, mas sim se firmar no chão, sua Defesa aumenta em 2 até seu próximo turno. Você se torna um bastião imóvel." },
            { nome: "Código de Duelo", desc: "Se você desafiar um único inimigo e se concentrar apenas nele (não atacar outros alvos), você ganha +1 dado em todas as suas rolagens de ataque e dano contra aquele inimigo." }
        ]
    },
    poderesInatos: [
        { seq: "9", nome: "Descendente dos Gigantes", desc: "Você é grande e robusto. Adicione +1 permanente ao seu atributo de Vigor." },
        { seq: "8", nome: "Lutador Experiente", desc: "Você se torna treinado em uma categoria de arma de sua escolha (ex: Espadas Grandes, Machados, etc.), ganhando +1 dado em ataques com elas." },
        { seq: "7", nome: "Autodefesa", desc: "Seus ataques desarmados agora causam danos Letal, não contundente." },
        { seq: "6", nome: "Constituição", desc: "Ganhe +3 dados em todos os testes de Vigor para resistir a veneno, doença ou exaustão." },
        { seq: "5", nome: "Paladino", desc: "Ganhe resistência a dano de fontes degenerativas e de frio (+2 dados de absorção)." },
        { seq: "4", nome: "Corpo Reforçado", desc: "Sua trilha de Vitalidade ganha um nível de saúde adicional 'Escoriado'. Você se torna mais difícil de ferir." },
        { seq: "2", nome: "Resistência Paranormal", desc: "Sua pele se torna tão dura quanto pedra. Ganhe permanentemente Armadura 3 contra todo tipo de dano físico." },
        { seq: "2 - Anjo", nome: "Maestria Arcana", desc: "O custo em PE de todas as suas habilidades Beyonder (de qualquer Sequência) é permanentemente reduzido pela metade (arredondado para cima)." }
    ],
    formaMitica: {
        nome: "Ciclope do Crepúsculo",
        disponivel: "(Habilidade disponível a partir da Sequência 4)",
        ativacao: "Requer uma ação completa e causa Degradação de Sanidade e acumula Pontos de Corrupção Mítica, conforme as regras gerais do sistema.",
        descricao: "Seu corpo se expande para quase 7 metros de altura. Sua pele se torna negra e azulada, marcada por veios luminosos que brilham com a luz do entardecer. Em seu rosto, todos os traços desaparecem, exceto por um único e enorme olho central que irradia uma luz âmbar, capaz de ver através de qualquer disfarce e revelar as fraquezas inimigas. Suas mãos se transformam em garras de metal líquido. Das suas costas, ergue-se uma armadura de placas de crepúsculo cristalizado.",
        bonus: "Sua Força e seu Vigor aumentam em +3.",
        poderes: [
            { tipo: "Passivo", nome: "Sangue do Crepúsculo - Seq. 4", desc: "Seu alcance de ataque corpo a corpo dobra. Testes para te intimidar ou te mover à força têm a dificuldade aumentada em 3." },
            { tipo: "Ação", nome: "Barreira do Ocaso - Seq. 4 Requisito", desc: "Gaste 4 PE para assumir uma postura defensiva total. Você ganha RD 25 (Redução de Dano) e reflete 30% do dano que sofreria de volta aos atacantes como luz crepuscular. Você não pode atacar nesta postura." },
            { tipo: "Ação", nome: "Martelo do Alvorecer - Seq. 3", desc: "Gaste 8 PE. Você forja um martelo de luz dourada e sombras que ataca com 2d8 de dano de impacto e pode atordoar o alvo. À noite, ele causa danos de decadência adicional." },
            { tipo: "Reação", nome: "Lâmina Mercurial - Seq. 2", desc: "Ao ser atacado corpo a corpo, seu braço se transforma em metal líquido e contra-ataca automaticamente. Custa 3 PE." }
        ]
    },
    mythicalForm: {
      incomplete: { 
        tempHpBonus: 50,
        attributeBoosts: { forca: 3, vigor: 3 },
        sanityCostPerTurn: "1",
        abilities: [
          { name: "Pele de Rocha", desc: "Sua pele endurece como pedra, concedendo 5 pontos de armadura natural que se acumula com outras armaduras." },
          { name: "Golpe Devastador", desc: "Seus ataques desarmados causam +1d8 de dano e podem quebrar objetos mundanos (portas de madeira, paredes de pedra) com facilidade." }
        ]
      },
      complete: {
        tempHpBonus: 100,
        attributeBoosts: { forca: 5, vigor: 5 },
        abilities: [
          { name: "Corpo Colossal", desc: "Você cresce para um tamanho imenso (até 10 metros). Seus ataques corpo a corpo ganham alcance e causam dano em área a alvos adjacentes." },
          { name: "Ira da Montanha", desc: "Uma vez por cena, você pode esmagar o chão, forçando todos os inimigos em um raio de 10m a fazerem um teste de Destreza (Dif. 8) ou cairão." }
        ]
      }
    },
    domain: {
        description: "A magia da Guerra como Força Bruta, da Honra e da inevitabilidade do Crepúsculo. Um Gigante é a personificação da muralha inabalável e da força que encerra todas as eras.",
        particulas: [
            { name: "Machē", translation: "Combate", type: "Objeto/Característica", conceito: "A essência do combate singular e da proeza marcial. Diferente de Polemos (Guerra estratégica), Machē é a arte do duelo e da força do guerreiro.", exemplo: "Am Ivi Machē (Proteger Pessoa com Combate) — Concede ao alvo um instinto de combate aprimorado, permitindo-lhe aparar um ataque que normalmente o atingiria.", uso: "Al Locus Machē (Alterar Lugar com Combate) — Imbui uma área com as 'regras de um duelo'. Fugir se torna psicologicamente difícil, e interferências externas são magicamente desencorajadas." },
            { name: "Dusk", translation: "Crepúsculo", type: "Característica", conceito: "A essência do fim de uma era, da decadência inevitável e da glória final. Não é a escuridão, mas a luz que morre, cheia de beleza e melancolia.", exemplo: "Im Exa Dusk (Atacar Inanimado com Crepúsculo) — Infunde um ataque com uma energia que acelera massivamente o envelhecimento de um objeto.", uso: "An Eva Dusk (Restaurar Cadáver com Crepúsculo) — Anima um guerreiro morto com um 'último momento de glória', permitindo que ele lute por mais uma cena." },
            { name: "Achelō", translation: "Guardião", type: "Função", conceito: "O ato de se tornar a defesa absoluta. Achelō é uma Função de proteção que anula completamente um ataque, em vez de apenas mitigá-lo, ao custo da própria imobilidade.", exemplo: "Achelō Ivi (Guardar Pessoa) — O Gigante assume uma postura inabalável e intercepta completamente um único ataque direcionado a um aliado próximo. Ele não pode se mover no seu próximo turno.", uso: "Achelō Locus (Guardar Lugar) — O Gigante se torna uno com um local (uma porta, uma ponte), tornando-o indestrutível enquanto ele permanecer ali." }
        ]
    },
    sequences: {
        "Sequência 9: Guerreiro": [
            { name: "Força Sobrenatural", desc: "Passivo. Ganhe +2 dados em todos os testes de Força para levantar peso, quebrar objetos ou em disputas de agarrar." },
            { name: "Arremessar", desc: "Você pode arrancar um pedaço do cenário (uma pedra, um poste) e arremessá-lo como uma arma. Faça um ataque com Força + Esportes. Custa 2 PE." },
            { name: "Quebrar", desc: "Com um teste de Força + Briga contra a durabilidade de um objeto, você pode estilhaçar paredes, portas e armas com um único golpe. Custa 1 PE." },
            { name: "Salto Poderoso", desc: "Sua força nas pernas permite que você salte distâncias incríveis, vertical ou horizontalmente, muito além de um humano normal." }
        ],
        "Sequência 8: Pugilista": [
            { name: "Ataque Duplo", desc: "Ao usar duas armas (ou seus punhos), gaste 2 PE. Você pode fazer um ataque extra em seu turno, ambos com uma penalidade de -1 dado." },
            { name: "Desarmar", desc: "Com um ataque corpo a corpo bem-sucedido, você pode gastar 1 PE para tentar desarmar seu oponente, em vez de causar dano." },
            { name: "Resistir à Dor", desc: "Uma vez por cena, gaste 1 Ponto de Vontade para ignorar todas as penalidades de ferimentos por um turno." },
            { name: "Briga de Rua", desc: "Passivo. Você ganha +1 dado em todos os seus testes de Luta, Esquiva e Bloqueio." }
        ],
        "Sequência 7: Mestre das Armas": [
            { name: "Maestria em Armas (Adaptar)", desc: "Você pode pegar qualquer arma que encontrar e usá-la com proficiência, sem sofrer penalidades por não estar treinado." },
            { name: "Maestria em Armas (Potencializar)", desc: "Gaste 2 PE. Adicione seu atributo de Força à sua rolagem de dano uma segunda vez em um único ataque." },
            { name: "Proficiência Bélica", desc: "Passivo. Você se torna treinado em um segundo tipo de arma, ou, se já for treinado, se torna um especialista, ganhando +1 dado em ataque e dano com ela." },
            { name: "Guerreiro da Purificação", desc: "Passivo. Sua força vem com uma convicção pura. Você ganha +2 dados para resistir a poderes de corrupção ou tentação." }
        ],
        "Sequência 6: Paladino da Alvorada": [
            { name: "Físico do Gigante (Crescer)", desc: "Como uma ação, gaste 4 PE. Você aumenta sua altura em 50% por uma cena. Enquanto estiver assim, seus ataques causam +4 de dano e você ganha +2 dados em testes de Intimidação." },
            { name: "Luz do Amanhecer", desc: "Gaste 3 PE para criar uma aura de luz suave. Inimigos sombrios (mortos-vivos, demônios) em sua presença sofrem -1 dado em suas ações." },
            { name: "Armadura do Amanhecer", desc: "Você pode gastar 5 PE para conjurar uma armadura de luz prateada que concede Armadura 4 por uma cena." },
            { name: "Espada do Amanhecer", desc: "Você pode gastar 3 PE para conjurar uma espada larga de luz que causa danos sagrado e pode ferir criaturas incorpóreas." }
        ],
        "Sequência 5: Guardião": [
            { name: "Protetor (Postura de Guarda)", desc: "Como uma ação, gaste 1 PE por turno para entrar em um estado de guarda. Sua Defesa dobra e você ganha Armadura 3, mas você não pode atacar." },
            { name: "Protetor (Tomar Dano)", desc: "Como reação, se um aliado adjacente for ser atingido por um ataque, você pode se colocar no caminho. Você sofre o dano no lugar dele." },
            { name: "Imunidade a Ilusões", desc: "Passivo. Sua percepção é direta e honesta. Você é imune a ilusões visuais e auditivas." },
            { name: "Aura do Guardião", desc: "Passivo. Aliados a até 10 metros de você ganham +1 de Defesa. Sua presença inspira uma defesa mais robusta." }
        ],
        "Sequência 4: Caçador de Demônios": [
            { name: "Exorcismo Infernal", desc: "Passivo. Seus ataques causam dano bônus de 1d10 a Demônios e outras criaturas do Abismo." },
            { name: "Olho de Caça", desc: "Você pode gastar 3 PE para analisar um inimigo por um turno. No final, você descobre uma de suas vulnerabilidades (ex: prata, fogo) ou seu principal poder." },
            { name: "Alquimia de Bruxo", desc: "Sua experiência em caçar o mal te ensinou a usar partes dele. Você pode criar poções simples de proteção usando ingredientes de monstros." },
            { name: "Gladiador Rúnico", desc: "Você pode portar um Artefato Selado adicional sem sofrer as penalidades mentais normais de sua maldição." }
        ],
        "Sequência 3: Cavaleiro de Prata": [
            { name: "Liquefação de Mercúrio", desc: "Gaste 5 PE. Por uma cena, seu corpo se torna de metal líquido prateado. Você é resistente a dano (Armadura 5) e pode passar por frestas." },
            { name: "Florete de Prata", desc: "Você pode condensar seu corpo de metal líquido em feixes de luz prateada, atacando à distância com seu poder. Custa 2 PE por feixe." },
            { name: "Ocultação de Luz", desc: "Você pode dobrar a luz ao seu redor, tornando-se invisível. Custa 3 PE por turno." },
            { name: "Mestre de Campo", desc: "Passivo. Sua consciência tática é sublime. No final de cada um dos seus turnos, você pode conceder a um aliado uma ação de movimento extra e gratuita." }
        ],
        "Sequência 2: Glória": [
            { name: "Glória do Crepúsculo", desc: "Você manifesta uma espada de luz vermelho-alaranjada que pode rasgar o espaço, permitindo ataques que ignoram distância e barreiras. Gaste 10 PE." },
            { name: "Salto pelo Mundo Espiritual", desc: "Gaste 8 PE. Você pode dar um único passo através do Mundo Espiritual para escapar de uma situação ou se reposicionar instantaneamente em qualquer ponto do campo de batalha." },
            { name: "Golpe do Fim dos Dias", desc: "Seu poder é tamanho que seus golpes aceleram o tempo em seus alvos. Gaste 12 PE. Seu próximo ataque, se bem-sucedido, causa danos (1d10) de decadência massivo, envelhecendo e enfraquecendo o alvo permanentemente." },
            { name: "Aura do Herói", desc: "Passivo. Sua presença se torna uma lenda viva. Aliados que lutam ao seu lado se tornam imunes ao medo e ganham um bônus de +1 em Vontade." }
        ],
        "Sequência 1: Mão de Deus": [
            { name: "Julgamento Divino (Mão de Deus)", desc: "Gaste 20 PE. Você manifesta uma mão colossal de pura luz e crepúsculo. A mão pode agarrar, esmagar ou proteger com uma força que pode conter demônios e abalar fortalezas. Ela age sob seu comando por uma cena." },
            { name: "Bênção do Crepúsculo", desc: "Gaste 15 PE para abençoar seus aliados com a força do crepúsculo. Por uma cena, eles ganham +1 em todos os atributos Físicos e seus ataques causam dano sagrado." },
            { name: "Decadência Inevitável", desc: "Passivo. O tempo se curva ao seu redor. Qualquer um que o ataque corpo a corpo envelhece uma semana. Qualquer objeto mundano que você segura por muito tempo se torna quebradiço." },
            { name: "Último Bastião", desc: "Uma vez por história. Se você for o último de seus aliados de pé em uma batalha, você pode ativar esta habilidade. Pelo resto do combate, você é imortal. Você não pode ser derrubado abaixo de 1 de vida, não importando o dano. No final do combate, você cai em coma por uma semana." }
        ]
    }
};