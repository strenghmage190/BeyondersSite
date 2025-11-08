import { PathwayData } from '../../types';

export const enforcadoData: PathwayData = {
    category: "Eternal Darkness",
    pathway: "CAMINHO DO ENFORCADO",
    pvBase: 5,
    pvPorAvanço: 3,
    peBase: 20,
    pePorAvanço: 6,
    vontadeBonus: 0,
    sanidade: 6,
    mecanicaUnica: {
        titulo: "O Fardo do Conhecimento",
        items: [
            { nome: "Sussurros Constantes", desc: "No início de cada sessão, o Narrador pode lhe dar um segredo enigmático ou uma verdade perturbadora. Este conhecimento pode ser útil, mas também perigoso." },
            { nome: "Pacto de Sacrifício", desc: "Você pode realizar um pequeno ritual de autoflagelo para se concentrar. Sofra 5 de dano em si mesmo para ganhar +2 dados no seu próximo teste de Ocultismo ou Intimidação." }
        ]
    },
    poderesInatos: [
        { seq: "9", nome: "Maldição - Corrupção Superior", desc: "A conexão com o abismo deixa uma cicatriz permanente em sua alma. Sua Sanidade Máxima é reduzida em 1." },
        { seq: "8", nome: "Dádiva do Ouvinte", desc: "Sua audição se torna sobrenatural. Você pode ouvir conversas sussurradas a uma sala de distância e ganha +2 dados para detectar perigos baseados em som." },
        { seq: "7", nome: "Corpo Aberto", desc: "Sua alma se torna mais 'aberta' a influências. A dificuldade para você usar poderes de ritual diminui em 1, mas você também sofre -1 para resistir à possessão." },
        { seq: "6", nome: "Esculpir a Carne", desc: "Você aprende a usar seu próprio corpo como recurso. Você pode sofrer 1 nível de dano Agravado para gerar 5 PE." },
        { seq: "5", nome: "Espírito Apodrecido", desc: "Ataques mentais direcionados a você são parcialmente corrompidos. Metade do dano de Sanidade que você sofreria é refletido de volta para o atacante como dano degenerativo." },
        { seq: "4", nome: "Cultista", desc: "O tempo para preparar e lançar qualquer ritual de Ocultismo é reduzido pela metade." },
        { seq: "2", nome: "Sem dor, sem ganhos", desc: "Para cada 5 pontos de Perícia em Ocultismo, você aprende um novo ritual gratuitamente." },
        { seq: "2 - Anjo", nome: "Maestria Arcana", desc: "O custo em PE de todas as suas habilidades Beyonder (de qualquer Sequência) é permanentemente reduzido pela metade (arredondado para cima)." }
    ],
    formaMitica: {
        nome: "Sombra da Degeneração",
        disponivel: "(Habilidade disponível a partir da Sequência 4)",
        ativacao: "Requer uma ação completa e causa Degradação de Sanidade e acumula Pontos de Corrupção Mítica, conforme as regras do sistema.",
        descricao: "Seu corpo físico se desfaz em uma massa de sombras líquidas e pulsantes, com olhos brilhantes escondidos em véus de escuridão. Membros alongados feitos de trevas sólidas e correntes quebradas emergem de suas costas, e sua voz ecoa como o sussurro de mil almas aprisionadas.",
        bonus: "Sua Espiritualidade e Inteligência aumentam em +2.",
        poderes: [
            { tipo: "Passivo", nome: "Corpo Sombrio - Seq. 4", desc: "Você é resistente a dano físico (Armadura 5) e pode se mover através de sombras como se estivesse se teleportando." },
            { tipo: "Ação", nome: "Corrente das Almas Penitentes - Seq. 4 Requisito", desc: "Gaste 6 PE. Você invoca correntes espectrais que prendem todos os inimigos em uma área de 10m. Eles ficam enredados e sofrem 2d6 de dano de degeneração por turno." },
            { tipo: "Reação", nome: "Eco das Almas Perdidas - Seq. 3", desc: "Quando um aliado morrer perto de você, gaste 8 PE. Você captura a alma dele e a usa como combustível, ganhando +3 dados em todos os seus testes pelas próximas 3 rodadas." },
            { tipo: "Ação", nome: "Dança das Sombras Famintas - Seq. 2", desc: "Gaste 10 PE. Suas sombras se multiplicam e atacam todos em um alcance médio, causando 2d8 de dano de degeneração e impondo -2 em testes de Sanidade nos sobreviventes." }
        ]
    },
    mythicalForm: {
      incomplete: { 
        tempHpBonus: 30,
        attributeBoosts: { espiritualidade: 2, inteligencia: 1 },
        sanityCostPerTurn: "1d3",
        abilities: [
          { name: "Sombra Estendida", desc: "Sua sombra se torna semi-independente, capaz de interagir com objetos pequenos e criar distrações a até 10 metros de você." },
          { name: "Toque Sacrificial", desc: "Você pode sofrer 1d6 de dano para adicionar +2 dados ao seu próximo teste de Ocultismo." }
        ]
      },
      complete: { 
        tempHpBonus: 60,
        attributeBoosts: { espiritualidade: 4, inteligencia: 2 },
        abilities: [
          { name: "Devorar Sombra", desc: "Você pode consumir as sombras em uma área para se curar (1 nível de Vitalidade) ou recuperar 5 PE. A área fica sobrenaturalmente iluminada por um turno." },
          { name: "Portador da Corrupção", desc: "Seu toque pode infligir uma maldição menor em um alvo, impondo -2 dados em um atributo à sua escolha por uma cena. Custa 8 PE." }
        ]
      }
    },
    domain: {
        description: "A magia do Sacrifício Voluntário, da Visão através da dor e da Conexão blasfema com o invisível.",
        particulas: [
            { name: "Anker", translation: "Ancorar", type: "Função", conceito: "A capacidade de prender uma força, um espírito ou um conceito a um novo 'recipiente'. O Enforcado serve como uma ponte, um ponto de sacrifício para criar um vínculo onde não deveria existir.", exemplo: "Anker Pneuma Exa (Ancorar Espírito em Inanimado) — A base para criar um item mal-assombrado.", uso: "Anker Miasma Ivi (Ancorar Corrupção em Pessoa) — Transfere uma maldição, insanidade ou influência do Abismo de um alvo para outra pessoa." },
            { name: "Umbra", translation: "Sombra Viva", type: "Objeto/Característica", conceito: "Não a escuridão comum (Ten), mas a sombra senciente, uma fina camada do Abismo que se agarra à realidade. Ela tem fome e corrompe o que toca.", exemplo: "Ev Umbra (Invocar Sombra Viva) — Anima a própria sombra para se tornar um servo tridimensional.", uso: "As Lum Umbra (Destruir Luz com Sombra Viva) — Invoca uma escuridão que não apenas remove a luz, mas ativamente a 'devora'." },
            { name: "Abyssus", translation: "Abismo", type: "Objeto", conceito: "A porta para o conhecimento proibido e a insanidade cósmica. Usar esta Partícula é abrir um canal direto para uma força avassaladora e indiferente.", exemplo: "Vat Abyssus (Divinar pelo Abismo) — O ritual para obter uma resposta verdadeira, mas sempre ambígua e perturbadora do Abismo.", uso: "Lues Locus Abyssus (Corromper Lugar com Abismo) — Abre uma pequena e temporária 'ferida' na realidade, fazendo com que um local seja regido pelas leis do caos." }
        ]
    },
    sequences: {
        "Sequência 9: Suplicante de Segredos": [
            { name: "Vidente do Abismo", desc: "Gaste 1 PE e 1 minuto. Você pode sondar os segredos de um objeto, recebendo um vislumbre de seu dono anterior ou de seu propósito original através de um teste de Espiritualidade + Investigação." },
            { name: "Pequeno Sacrifício", desc: "Você pode sacrificar um item pessoal de valor (emocional ou monetário) em um pequeno ritual para obter a resposta para uma pergunta simples." },
            { name: "Audição Espiritual", desc: "Passivo. Você pode ouvir os 'ecos' de emoções fortes que aconteceram em um local, sabendo se houve raiva, medo ou tristeza ali." },
            { name: "Resistência Inicial", desc: "Ganhe +1 dado em todos os testes de Vontade." }
        ],
        "Sequência 8: Ouvinte": [
            { name: "Sussurro do Abismo", desc: "Gaste 1 PE por pergunta. Você faz uma pergunta específica ao Abismo. O Narrador lhe dará uma resposta verdadeira, mas sempre ambígua. Falhar em um teste de Vontade (Dif. 6) após ouvir a resposta causa 1d2 de dano de Sanidade." },
            { name: "Mão Fantasma", desc: "Você aprende a interagir com objetos no mundo espiritual que são invisíveis no mundo físico." },
            { name: "Encontrar o Escondido", desc: "Gaste 3 PE. Se houver um objeto ou pessoa escondida por meios não-mágicos perto de você, você tem uma sensação súbita de sua localização." },
            { name: "Corpo Aberto", desc: "Sua alma se torna mais sensível. A dificuldade para realizar rituais diminui em 1, mas a dificuldade para resistir a possessão aumenta em 1." }
        ],
        "Sequência 7: Asceta das Sombras": [
            { name: "Sombra Servidora (Ativo)", desc: "Gaste 4 PE para animar sua própria sombra. Ela se destaca de você e se torna uma criatura tridimensional feita de trevas, obedecendo a seus comandos mentais por uma cena." },
            { name: "Caminhar nas Sombras (Ativo)", desc: "Gaste 2 PE. Você pode entrar em uma sombra e sair em outra a até 10 metros de distância. Se gastar +2 PE, pode levar um passageiro." },
            { name: "Manto de Sombras (Reação)", desc: "Gaste 3 PE ao ser atacado. As sombras se adensam, concedendo +4 dados para sua parada de Esquiva contra aquele ataque." },
            { name: "Lâmina de Trevas Sifão", desc: "Gaste 2 PE para imbuir uma arma. Por uma cena, seus ataques causam -1 no atributo de Vigor do alvo (cumulativo, dura até o fim da cena)." },
            { name: "Contrato de Sombras", desc: "Você pode realizar um ritual para vincular sua Sombra Servidora a um local ou pessoa, tornando-a permanente até ser destruída." }
        ],
        "Sequência 6: Bispo Rosa": [
            { name: "Flesh Creek (Córrego de Carne)", desc: "Gaste 5 PE. Você pode se liquefazer e viajar através do corpo de uma criatura viva (aliada ou não), permanecendo indetectável dentro dela." },
            { name: "Flesh Bomb (Bomba de Carne)", desc: "Gaste 4 PE e 1 Nível de Vitalidade. Você arranca um pedaço de si mesmo e o arremessa. Ele explode causando danos biológico e de ácido em área." },
            { name: "Magia de Carne: Cura (Ativo)", desc: "Gaste PE para curar. Para cada PE gasto, restaure um nível de Vitalidade em um alvo tocado. A cura é grotesca." },
            { name: "Fios de Carne (Ativo)", desc: "Gaste 3 PE. Você projeta tentáculos de seus próprios músculos para agarrar um inimigo a até 5 metros. Faça um teste de Força + Briga." },
            { name: "Pergaminho de Pele", desc: "Você pode realizar um ritual doloroso onde remove uma camada de sua própria pele para criar um pergaminho para rituais ou poções. O ato custa 1 nível de dano Agravado." },
            { name: "Flesh Feed (Alimentação de Carne)", desc: "Você pode consumir carne e sangue de seres mortos recentemente para recuperar PE na base de 1 PE por quilo de carne consumida." }
        ],
        "Sequência 5: Pastor": [
            { name: "Pastorear Almas (Ativo)", desc: "Ao consumir um corpo recentemente falecido, você pode escolher aprisionar a alma em vez de consumi-la. Gaste 5 PE. Você pode 'hospedar' uma quantidade de almas igual ao seu rating de Espiritualidade. (Habilidade Gratuita)" },
            { name: "Tomai e Comei (Ativo)", desc: "A evolução do Flesh Feed. Ao consumir um corpo, você também consome e 'acolhe' a alma, ganhando acesso a uma de suas Habilidades mundanas ou uma habilidade Beyonder aleatória. (Habilidade Gratuita)" },
            { name: "Comando Espiritual (Ativo)", desc: "Você pode dar ordens mentais complexas às almas que você 'pastoreia'. Custa 2 PE por alma comandada." },
            { name: "Devorar Existência (Ativo)", desc: "Em vez de comandar, você pode consumir uma alma que você pastoreia, recuperando 1d10 PE e 1 Ponto de Vontade." },
            { name: "Gaiola de Costelas (Passivo)", desc: "Seu corpo se torna uma prisão espiritual. Você pode aprisionar almas hostis ou espíritos com um teste disputado de Espiritualidade vs Vontade." }
        ],
        "Sequência 4: Cavaleiro Negro": [
            { name: "Ceifar Almas (Ativo)", desc: "Você manifesta uma foice espectral feita de sombras e dor. Ataques com esta arma causam danos Agravado que atinge diretamente a Vitalidade e a Sanidade do alvo (metade para cada). Custa 8 PE por cena." },
            { name: "Onda de Degeneração (Ativo)", desc: "Gaste 10 PE para liberar uma onda de entropia. Inimigos em um cone de 15m têm um de seus equipamentos corroído e quebrado, ou sofrem uma penalidade de -2 em um atributo físico por uma cena." },
            { name: "Corcel das Sombras (Ativo)", desc: "Você tece um cavalo feito de pura escuridão. A montaria é sobrenaturalmente rápida e pode cavalgar sobre a água ou pelo ar. Dura uma cena e custa 8 PE." },
            { name: "Crucificado (Passivo)", desc: "As vozes das almas que você pastoreia se tornam mais claras. Você pode conversar com elas, mas suas lamentações constantes te impõem -1 em todos os testes de Percepção." }
        ],
        "Sequência 3: Trindade Templária": [
            { name: "Corpo Trindade (Ativo)", desc: "Gaste 12 PE e 1 Ponto de Vontade. Você pode se dividir em três corpos idênticos. Você controla os três, mas sua consciência e paradas de dados são divididas entre eles." },
            { name: "Abate da Carne Espiritual (Ativo)", desc: "Gaste 10 PE. Você realiza um ataque que não corta a carne, mas o espírito. O alvo sofre 4d10 dados de dano direto à sua mente e não pode usar seus poderes Beyonder por um turno." },
            { name: "Manipular o Rebanho (Ativo)", desc: "Você pode 'descarregar' até três almas que você pastoreia em um único aliado, que ganha acesso temporário às suas habilidades e resistências." },
            { name: "Caminhar com os Mortos (Passivo)", desc: "Você se torna uma autoridade no mundo espiritual. Fantasmas, espectros e outros mortos-vivos de baixo nível te veem como um líder." }
        ],
        "Sequência 2: Presbítero Profano": [
            { name: "Palavra Má (Ativo)", desc: "Gaste 15 PE. Você fala uma única palavra na língua do Abismo que impõe um sacrifício ao alvo ('Arrependa-se', 'Sacrifique', 'Confesse')." },
            { name: "Divisão da Alma (Passivo)", desc: "Sua habilidade Corpo Trindade evolui. Agora, quando se divide, cada corpo pode agir de forma independente, com sua própria parada de dados completa." },
            { name: "Comandar o Abismo (Ativo)", desc: "Gaste 20 PE para abrir um pequeno portal para o abismo. Você pode sugar um inimigo para dentro ou invocar um horror menor." }
        ],
        "Sequência 1: Anjo Negro": [
            { name: "O Destino do Enforcado (Ativo)", desc: "Gaste 30 PE e sofra 1d4 Níveis de Degradação de Sanidade. Você pode tocar um alvo e trocá-lo de lugar no 'galho' do destino (transferir maldições, bênçãos, etc.)." },
            { name: "Rasgar o Véu (Ativo)", desc: "Com um grande ritual, você pode rasgar o véu entre o mundo físico e o espiritual em um local, criando uma zona permanente de caos sobrenatural." },
            { name: "A Palavra Final (Ativo)", desc: "Uso único e épico. Você se sacrifica, proferindo uma única palavra que apaga um conceito abstrato da realidade por 24 horas (esperança, fogo, morte)." },
            { name: "Pastor do Fim dos Tempos (Passivo)", desc: "Você se torna um psicopompo. Todas as almas de quem morre em sua presença são automaticamente atraídas para você, tornando-se parte do seu 'rebanho'." }
        ]
    }
};
