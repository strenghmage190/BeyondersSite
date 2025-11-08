import { PathwayData } from '../../types';

export const luaData: PathwayData = {
    category: "Goddess of Origin",
    pathway: "CAMINHO DA LUA",
    pvBase: 10,
    pvPorAvanço: 4,
    peBase: 15,
    pePorAvanço: 5,
    vontadeBonus: 0,
    sanidade: 7,
    mecanicaUnica: {
        titulo: "A Besta Interior e a Sede de Sangue",
        items: [
            { nome: "Sede de Sangue", desc: "A partir da Sequência 7, você precisa consumir sangue humano regularmente para manter seu poder. Não o fazer resulta em penalidades e na manifestação da 'Besta' uma fúria irracional." },
            { nome: "Hierarquia Sanguínea", desc: "Vampiros de Sequência alta podem exercer um domínio natural sobre os de Sequência mais baixa. A dificuldade para resistir aos poderes sociais de um Vampiro mais antigo aumenta em 1." }
        ]
    },
    poderesInatos: [
        { seq: "9", nome: "Alquimista", desc: "Ganhe +1 dado em todos os testes de Ofícios (Alquimia) para criar poções e elixires." },
        { seq: "8", nome: "Predador", desc: "Você ganha +2 dados em testes de Intimidação contra animais e mortais." },
        { seq: "7", nome: "Filho da Lua", desc: "Durante a noite, todos os seus atributos Físicos aumentam em +1. Você se torna vulnerável à Luz Solar, sofrendo dano Agravado dela, e não pode recuperar Vitalidade ou PE sob o sol." },
        { seq: "7", nome: "Imortalidade Condicional", desc: "Você para de envelhecer e é imune a todas as doenças e venenos mundanos. Você pode ser 'morto', mas não morre de causas naturais." },
        { seq: "7", nome: "A Sede de Sangue", desc: "Sua nova biologia requer sangue para funcionar. Você deve consumir o equivalente a um nível de Vitalidade de sangue humano fresco a cada 2-3 dias." },
        { seq: "7", nome: "O Beijo", desc: "Você ganha a habilidade de criar 'Crias'. Ao drenar um mortal e alimentá-lo com seu próprio sangue (gastando 1 Ponto de Vontade), você o transforma em uma criatura sob seu comando, equivalente a um Beyonder de Sequência 8." },
        { seq: "6", nome: "Mestre das Misturas", desc: "Poções que você cria têm seus efeitos (positivos ou negativos) aumentados." },
        { seq: "5", nome: "Mestre", desc: "Você pode ter até três Crias Vampíricas (vampiros de nível inferior criados por você) ao mesmo tempo." },
        { seq: "4", nome: "Benção do Luar", desc: "Sob a luz da lua cheia, o custo de todos os seus poderes em PE é reduzido em 1 (mínimo 1)." },
        { seq: "2", nome: "Sangue Nobre", desc: "Seu sangue se torna um potente agente curativo. 250ml do seu sangue podem curar doenças normais e restaurar 2d6 de Vitalidade em seres vivos." },
        { seq: "2 - Anjo", nome: "Maestria Arcana", desc: "O custo em PE de todas as suas habilidades Beyonder (de qualquer Sequência) é permanentemente reduzido pela metade (arredondado para cima)." }
    ],
    formaMitica: {
        nome: "Arauto da Lua Sanguínea",
        disponivel: "(Habilidade disponível a partir da Sequência 4)",
        ativacao: "Requer uma ação completa e causa Degradação de Sanidade e acumula Pontos de Corrupção Mítica, conforme as regras do sistema.",
        descricao: "Seu corpo se torna uma estátua de luz lunar solidificada, translúcida e prateada. Seus olhos brilham com um vermelho carmesim intenso, e runas lunares cintilam em sua pele como constelações. Suas mãos se transformam em garras afiadas e uma aura de névoa prateada envolve você, distorcendo a luz e a realidade ao seu redor.",
        bonus: "Sua Agilidade e Manipulação aumentam em +2.",
        poderes: [
            { tipo: "Passivo", nome: "Corpo Lunar - Seq. 4", desc: "Você se torna etéreo. Ataques físicos têm 25% de chance de simplesmente atravessá-lo. Você pode se mover pelas paredes como um fantasma." },
            { tipo: "Ação", nome: "Lâmina da Lua Crescente - Seq. 4 Requisito", desc: "Gaste 3 PE. Você conjura uma espada de luz lunar que ataca com sua Agilidade + Armas Brancas, causando danos Agravado (ignora armadura, mas não Vigor) e deixando os alvos 'Sangrando'." },
            { tipo: "Ação", nome: "Pesadelo da Lua Cheia - Seq. 3", desc: "Gaste 8 PE. Inimigos em um raio de 15m devem fazer um teste de Vontade (Dif. 8). Se falharem, ficam paralisados por 2 turnos, presos em um sonho onde revivem seus maiores medos." },
            { tipo: "Reação", nome: "Rugido do Lobisomem - Seq. 3 Requisito", desc: "Ao ser atacado, você pode gastar 4 PE para se transformar parcialmente em uma besta lunar, ganhando +10 na sua Defesa por um turno e realizando um contra-ataque imediato com suas garras." },
            { tipo: "Passivo", nome: "Luar Curativo - Seq. 2", desc: "Enquanto estiver sob a luz da noite (mesmo que nublado), você regenera 2 níveis de Vitalidade por turno." }
        ]
    },
    mythicalForm: {
      incomplete: { 
        tempHpBonus: 30,
        attributeBoosts: { destreza: 2, manipulacao: 1 },
        sanityCostPerTurn: "1d2",
        abilities: [
          { name: "Corpo Lunar Parcial", desc: "Você se torna parcialmente etéreo. Ataques não-mágicos têm 15% de chance de falhar." },
          { name: "Sussurros Sedutores", desc: "A dificuldade para resistir aos seus poderes de sedução e intimidação aumenta em 1." }
        ]
      },
      complete: {
        tempHpBonus: 60,
        attributeBoosts: { destreza: 4, manipulacao: 2 },
        abilities: [
          { name: "Domínio Lunar", desc: "Você pode controlar a luz da lua em uma área, criando zonas de escuridão total ou de brilho intenso." },
          { name: "Comandar o Sangue", desc: "Gaste 10 PE. Você pode controlar o sangue dentro do corpo de um alvo, causando dor intensa (-2 em todas as ações) ou paralisando um membro por 3 turnos. Requer um teste disputado de Espiritualidade vs Vigor." }
        ]
      }
    },
    domain: {
        description: "A magia do Ciclo da Noite, dos instintos primordiais e da monstruosidade sedutora. Um seguidor da Lua é uma criatura da escuridão, que extrai poder tanto da beleza fria do luar quanto da fúria selvagem da besta interior.",
        particulas: [
            { name: "Selene", translation: "Lua", type: "Objeto/Característica", conceito: "A essência da influência lunar. Rege o frio, as marés, os ciclos, a metamorfose e a insanidade sutil.", exemplo: "Al Phys Selene (Alterar Corpo com a Lua) — A base da licantropia. Permite a transformação em uma forma bestial ou híbrida.", uso: "Un Anima Selene (Conectar Almas com a Lua) — Cria um 'pacto de matilha', um elo mental e empático entre vários aliados sob o luar." },
            { name: "Hem", translation: "Sangue", type: "Característica", conceito: "Para o Vampiro, o sangue é a vida, a linhagem e o poder. Hem governa a vitalidade que pode ser roubada ou concedida.", exemplo: "Et Hem (Controlar Sangue) — A base dos poderes vampíricos para controlar o próprio sangue ou o de outros.", uso: "Il Azi Hem (Revelar Informação do Sangue) — Permite ler a história de uma linhagem ou as emoções recentes de uma pessoa através de uma gota de seu sangue." },
            { name: "Bestia", translation: "Besta Interior", type: "Objeto", conceito: "A fúria irracional e a fome primordial. Para o Caminho da Lua, esta não é uma fraqueza, mas uma fonte de poder bruto a ser domada.", exemplo: "Am Ivi Bestia (Proteger Pessoa com a Besta) — Resiste a um feitiço de medo ou controle mental ao canalizar a fúria primal interior.", uso: "Ev Bestia (Invocar a Besta) — Projeta uma manifestação espectral da Besta Interior para atacar um inimigo de forma independente." }
        ]
    },
    sequences: {
        "Sequência 9: Boticário": [
            { name: "Alquimia Básica", desc: "Você pode gastar tempo e ingredientes para criar poções simples de cura (restaura 1 nível de Vitalidade) ou venenos leves (causa -1 em Vigor por uma hora). Requer um teste de Inteligência + Ofícios." },
            { name: "Diluir Veneno", desc: "Gaste 2 PE. Você neutraliza um veneno comum em uma bebida ou em uma ferida." },
            { name: "Sentido Químico", desc: "Você pode identificar a composição de qualquer substância com um simples cheiro, detectando venenos ou ingredientes raros." },
            { name: "Poção do Hiper Foco", desc: "Uma de suas criações. Concede +2 dados em testes de Inteligência e Percepção por uma hora, mas -1 em todos os atributos sociais." }
        ],
        "Sequência 8: Domador": [
            { name: "Companheiro Fiel", desc: "Você pode formar um vínculo profundo com um animal (lobo, corvo, etc.). Ele se torna seu companheiro leal e vocês podem se comunicar de forma básica e empática." },
            { name: "Tocar Alma", desc: "Você pode gastar 2 PE para se comunicar com qualquer animal, enviando emoções e intenções e entendendo as deles." },
            { name: "Olhar do Predador", desc: "Faça um teste de Manipulação + Intimidação contra um animal ou um humano com Vontade baixa. Se tiver sucesso, ele ficará aterrorizado e evitará te confrontar." },
            { name: "Visão Noturna da Fera", desc: "Você ganha a capacidade de enxergar perfeitamente na escuridão, mesmo na ausência total de luz." }
        ],
        "Sequência 7: Vampiro (Sedução Vampírica)": [
            { name: "Garras Escarlates (Ativo)", desc: "Gaste 1 PE. Suas unhas se transformam em garras afiadas que causam danos Letal (rolagem com Destreza + Luta) e deixam os alvos sangrando (sofrem 1 de dano por turno até serem curados)." },
            { name: "Sanguessuga Espiritual (Reação)", desc: "Ao causar dano com suas garras, você pode gastar 2 PE extras para absorver não apenas sangue, mas a essência espiritual do ferimento. Você recupera PE igual à metade do dano causado." },
            { name: "Bala de Sangue (Ativo)", desc: "Gaste 1 nível de Vitalidade e 1 PE. Você condensa seu próprio sangue em um projétil endurecido que dispara de sua mão. Ele ataca com Destreza + Armas de Fogo e causa 5 dados de dano perfurante." },
            { name: "Arma de Sangue Sintetizada (Ativo)", desc: "Gaste 2 PE e 1 nível de Vitalidade. Você molda seu sangue em uma arma corpo a corpo de sua escolha (espada, lança, machado)." },
            { name: "Asas de Sombra (Ativo)", desc: "Gaste 4 PE. Sombras se aglutinam em suas costas, formando um par de asas de morcego que lhe permitem voar por uma cena inteira." },
            { name: "Forma de Névoa (Ativo)", desc: "Gaste 5 PE. Você se dissolve em uma névoa sombria e turva por até um minuto. Nesta forma, você é imune a ataques físicos normais." },
            { name: "Camuflagem nas Sombras (Ativo)", desc: "Em qualquer área que não estejam diretamente iluminada, gaste 2 PE para se tornar efetivamente invisível." },
            { name: "Grilhões do Abismo (Ativo)", desc: "Gaste 4 PE. Você comanda as sombras para prender um alvo. Faça um teste de Manipulação + Ocultismo vs. Destreza + Vontade do alvo." },
            { name: "Olhar Hipnótico (Ativo)", desc: "Gaste 3 PE e faça um teste de Manipulação + Intimidação vs. Vontade de um alvo que esteja fazendo contato visual com você. Se tiver sucesso, ele fica em transe e obedecerá a um comando simples." },
            { name: "Presença Cativante (Passivo)", desc: "Seu carisma se torna sobrenatural. Ganhe +2 dados em todos os testes de Sedução e Performance." },
            { name: "Comando sobre Feras (Ativo)", desc: "Você pode exercer seu domínio sobre animais noturnos como lobos, ratos e morcegos. Custa 2 PE por comando." }
        ],
        "Sequência 6: Professor de Poções": [
            { name: "Mestre das Poções", desc: "Sua alquimia se torna sobrenatural. Você pode criar poções com efeitos mágicos complexos (invisibilidade, teleporte curto, sopro de fogo). Requer ingredientes raros." },
            { name: "Poção Complexa", desc: "Gaste 5 PE para misturar duas poções em uma, combinando seus efeitos (positivos e negativos)." },
            { name: "Afinidade Tenebre (Passivo)", desc: "Você se torna resistente a poderes mentais e de sonho, ganhando +3 dados para resistir a eles." },
            { name: "Sangue Alquímico", desc: "Você pode usar seu próprio sangue como catalisador em qualquer poção, dispensando um ingrediente raro ou tornando seu efeito mais potente. Custa 1 Nível de Vitalidade." }
        ],
        "Sequência 5: Estudioso Escarlate": [
            { name: "Luar Sangrento", desc: "Gaste 6 PE para invocar uma aura de luar vermelho (10m) que concede +1 em Atributos Físicos a aliados e impõe -1 em Vontade a inimigos por 3 turnos." },
            { name: "Manipulação de Sombras", desc: "Gaste 5 PE para solidificar sombras e criar armas, escudos ou garras. A arma dura por uma cena e seus ataques são mágicos." },
            { name: "Chamado do Clã", desc: "Gaste 10 PE para invocar todas as suas Crias Vampíricas para sua localização instantaneamente, desde que estejam na mesma cidade." },
            { name: "Presença Terrível", desc: "Sua aura se torna opressora. Mortais com baixa Vontade não conseguem mentir para você e animais fogem de sua presença." }
        ],
        "Sequência 4: Mestre Xamã": [
            { name: "Olhar das Trevas", desc: "Gaste 10 PE e marque um inimigo. Lance sobre ele a maldição 'Engolir pela Escuridão' (paralisado em sombras por um turno) ou 'Esmagar pela Destruição' (sofre 8 dados de dano de Corrupção)." },
            { name: "Convocação de Bestas Noturnas", desc: "Gaste 8 PE para invocar um bando de lobos sombrios ou morcegos sobrenaturais para lutar por você por uma cena." },
            { name: "Domínio dos Sonhos", desc: "Você pode entrar livremente no sonho de um alvo adormecido. Lá dentro, você é quase um deus, podendo remodelar o ambiente do sonho e extrair segredos profundos." },
            { name: "Lua de Sangue Portátil", desc: "Gaste 1 Ponto de Vontade. Por uma cena, você cria uma lua de sangue ilusória no céu que só afeta você, concedendo-lhe todos os bônus de lua cheia de seus poderes." }
        ],
        "Sequência 3: Alto Invocador": [
            { name: "Invocar Criatura Lunar", desc: "Gaste 12 PE para abrir um portal para o lado escuro da lua, invocando uma poderosa Criatura Lunar para lutar por você por 3 turnos. O uso deste poder sempre adiciona um Dado de Corrupção." },
            { name: "Nuvem de Morte Viva", desc: "Gaste 6 PE para se dissolver em uma nuvem de morcegos sombrios. Nesta forma, você é imune a dano físico e pode atacar todos os inimigos em uma área simultaneamente." },
            { name: "Porta da Lua", desc: "Você pode usar qualquer fonte de luar como um portal para se teleportar para qualquer outra fonte de luar que você possa ver ou conhecer. Custa 8 PE por viagem." }
        ],
        "Sequência 2: Doador da Vida": [
            { name: "Criação: Beleza da Vida", desc: "Gaste 10 PE. Você preenche uma criatura com um sentimento de apreciação pela vida. Se ela falhar em um teste de Vontade, fica 'Encantada' e não pode te ferir. O poder também cura doenças e remove maldições leves." },
            { name: "Selo da Lua Nova", desc: "Gaste 15 PE para criar um selo lunar em uma área de 30m. O tempo congela para todos, exceto você e seus aliados, por um único turno." },
            { name: "Dádiva de Lilith", desc: "Gaste 1 Ponto de Vontade e sofra 1 Nível de Degradação de Sanidade para elevar uma de suas Crias Vampíricas para a Sequência 7 - Vampiro. Ela se torna um verdadeiro vampiro independente." }
        ],
        "Sequência 1: Deusa da Beleza": [
            { name: "Realidade Lunar (Passivo)", desc: "Sua conexão com a Lua é absoluta. Você pode manifestar um 'luar' pessoal ao seu redor. Você não sofre mais as penalidades da luz do sol (embora ela ainda anule seus poderes e sua regeneração)." },
            { name: "Domínio sobre o Sangue", desc: "Gaste 20 PE e faça um teste de Espiritualidade + Medicina (Dif. 9). Você pode controlar o sangue dentro do corpo de um inimigo para paralisá-lo ou causar aneurismas fatais." },
            { name: "Renascer da Lua (Ativo)", desc: "Uma vez por história, se você for destruído, gaste todos os seus Pontos de Vontade para reencarnar instantaneamente a partir da sombra de uma de suas crias." },
            { name: "Eclipse da Vida (Ativo)", desc: "Uso supremo. Gaste 25 PE e 1d3 Níveis de Degradação. Você invoca um eclipse sangrento sobre uma vasta área (uma cidade). A luz do sol é bloqueada, o poder divino de deuses solares é anulado." }
        ]
    }
};
