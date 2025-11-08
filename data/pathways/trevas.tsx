import { PathwayData } from '../../types';

export const trevasData: PathwayData = {
    category: "Eternal Darkness",
    pathway: "CAMINHO DAS TREVAS",
    pvBase: 10,
    pvPorAvanço: 4,
    peBase: 20,
    pePorAvanço: 6,
    vontadeBonus: 1,
    sanidade: 7,
    mecanicaUnica: {
        titulo: "Afinidade com a Noite",
        items: [
            { nome: "Poder Noturno", desc: "Durante a noite, o custo em PE de todas as suas habilidades é reduzido em 1 (mínimo 1)." },
            { nome: "Comunhão com as Sombras", desc: "Você pode 'sentir' o que acontece dentro de áreas de escuridão profunda perto de você, como se as sombras fossem uma extensão de seus sentidos." }
        ]
    },
    poderesInatos: [
        { seq: "9", nome: "Sem Dormir", desc: "Você não precisa mais dormir. Sua mente e corpo se recuperam através de um estado de meditação tranquila na escuridão." },
        { seq: "8", nome: "Galanteador", desc: "Ganhe +2 dados em todos os testes de Diplomacia e Sedução realizados durante a noite." },
        { seq: "7", nome: "Resistência aos Poemas da Noite", desc: "Você é um mestre da noite, não uma vítima. Você ganha +3 dados para resistir a quaisquer poderes que tentem te colocar para dormir ou induzir pesadelos." },
        { seq: "6", nome: "Xamanismo", desc: "Você aprende instintivamente a entender as intenções de espíritos errantes." },
        { seq: "5", nome: "Aura Acolhedora", desc: "Sua presença na escuridão é reconfortante para seres das trevas. Fantasmas e espíritos menores não-hostis são neutros ou até amigáveis com você." },
        { seq: "4", nome: "Especialista - Morte", desc: "Sua compreensão da alma lhe dá uma vantagem. Você causa +2 de dano contra espíritos e fantasmas." },
        { seq: "2", nome: "Integração", desc: "Ao selar um espírito (habilidade de Seq. 5), você pode escolher absorver uma de suas habilidades mundanas permanentemente, como se fosse sua." },
        { seq: "2 - Anjo", nome: "Maestria Arcana", desc: "O custo em PE de todas as suas habilidades Beyonder (de qualquer Sequência) é permanentemente reduzido pela metade (arredondado para cima)." }
    ],
    formaMitica: {
        nome: "Lobo Demoníaco das Sombras",
        disponivel: "(Habilidade disponível a partir da Sequência 4)",
        ativacao: "Requer uma ação completa e causa Degradação de Sanidade e acumula Pontos de Corrupção Mítica, conforme as regras do sistema.",
        descricao: "Seu corpo se transforma em uma criatura híbrida e aterrorizante de lobo e humanoide. Oito patas negras como carvão, terminadas em garras de obsidiana, brotam de seu corpo, junto com seis braços musculosos. Sua pelagem é feita de névoa sólida, e cada movimento seu deixa rastros de trevas que corroem a luz. Seus olhos vermelhos brilham como brasas no vácuo, e seu uivo silencia não apenas o som, mas a própria alma.",
        bonus: "Sua Destreza e Presença aumentam em +2.",
        poderes: [
            { tipo: "Passivo", nome: "Senhor das Sombras - Seq. 4", desc: "Você tem controle absoluto sobre a escuridão em um raio de 50m. Você pode moldá-la para criar paredes, tentáculos para agarrar inimigos ou torná-la sólida e sufocante." },
            { tipo: "Ação", nome: "Presa dos Pesadelos - Seq. 4 Requisito", desc: "Custo 6 PE. Ataque com garras sombrias que não ferem a carne, mas injetam escuridão na mente. Teste: Destreza + Intimidação. Dano: 1d8 + Sucessos de dano [Mental]. Alvos atingidos são afligidos por um Pesadelo Ativo por 3 turnos, sofrendo -1 dado em todos os testes." },
            { tipo: "Ação", nome: "Cortina da Quietude - Seq. 3", desc: "Gaste 10 PE. Você cria uma área de silêncio e escuridão absoluta e impenetrável. Nada entra, nada sai. Aliados dentro dela ganham camuflagem perfeita, enquanto inimigos ficam completamente cegos e surdos." },
            { tipo: "Reação", nome: "Dança das Seis Garras - Seq. 2", desc: "Custo 8 PE. Ao ser atacado, você responde com um frenesi de 6 ataques de garras sombrias. Cada ataque tem uma parada de dados de Destreza + Briga (com um bônus de +2 dados da forma mítica) e causa 1d6 + Sucessos de dano [Físico]." }
        ]
    },
    mythicalForm: {
      incomplete: { 
        tempHpBonus: 30,
        attributeBoosts: { destreza: 2, 'presença': 1 },
        sanityCostPerTurn: "1d2",
        abilities: [
          { name: "Manto de Sombras", desc: "Você pode se tornar invisível em áreas de escuridão ou sombra. O efeito se quebra se você atacar." },
          { name: "Sussurros Inquietantes", desc: "Você pode gastar 2 PE para forçar um alvo a fazer um teste de Vontade (DT 6) ou ele ficará assustado por um turno, sofrendo -1 em suas ações." }
        ]
      },
      complete: {
        tempHpBonus: 60,
        attributeBoosts: { destreza: 4, 'presença': 2 },
        abilities: [
          { name: "Um com a Noite", desc: "Você pode se fundir completamente com as sombras, viajando instantaneamente entre quaisquer duas sombras em sua linha de visão." },
          { name: "Invocar Pesadelo", desc: "Gaste 10 PE para mergulhar a mente de um alvo em um pesadelo vivo. O alvo fica paralisado de terror por 1d4 turnos e sofre dano de Sanidade." }
        ]
      }
    },
    domain: {
        description: "A magia da Noite, do Silêncio e dos Segredos velados na escuridão. Um seguidor das Trevas não comanda as sombras, ele se torna uma delas, compreendendo que o verdadeiro poder reside no que não pode ser visto ou nomeado.",
        particulas: [
            { name: "Nyx", translation: "Noite", type: "Característica/Objeto", conceito: "Não é apenas a ausência de luz (No-Lum), mas a presença da noite como uma entidade própria. É o domínio da escuridão profunda, do frio reconfortante e do silêncio que esconde.", exemplo: "Ev Locus Nyx (Criar Lugar da Noite) — Invoca uma área de escuridão mágica que abafa o som e resiste a fontes de luz não-mágicas.", uso: "Al Ani Nyx (Alterar Alma com a Noite) — Permite a um alvo 'vestir a noite', tornando sua alma e intenções indetectáveis para a maioria das formas de adivinhação e leitura de mentes." },
            { name: "Eros", translation: "Laço", type: "Característica", conceito: "A essência dos laços profundos e das paixões. No Caminho das Trevas, Eros representa a beleza e o perigo da sedução, da lealdade e da obsessão que florescem sob o manto da noite.", exemplo: "Al Ivi Eros (Alterar Pessoa com Laço) — Encanta sutilmente um alvo, fazendo-o se sentir mais confortável e confiante na presença do conjurador.", uso: "Un Ivi-Ivi Eros (Conectar Pessoa-Pessoa com Laço) — Fortalece ou corrompe um laço emocional já existente entre duas outras pessoas. Transforma amor em obsessão, ou lealdade em servidão fanática." },
            { name: "Phobetor", translation: "Pesadelo", type: "Objeto/Característica", conceito: "O poder dos medos e fobias que se escondem no subconsciente. Permite dar forma e substância aos terrores da mente.", exemplo: "Im Ivi Phobetor (Atacar Pessoa com Pesadelo) — Um ataque psíquico que faz o alvo reviver um de seus piores medos, causando dano de Sanidade.", uso: "Ev Phobetor (Invocar Pesadelo) — Manifesta o medo do alvo como uma criatura de sombra semi-real, visível e aterrorizante para todos ao redor." }
        ]
    },
    sequences: {
        "Sequência 9: Sem Dormir": [
            { name: "Visão Noturna Superior", desc: "Você pode ver perfeitamente em qualquer nível de escuridão. Para você, a noite mais escura é tão clara quanto o dia." },
            { name: "Afinidade Lunar", desc: "Passivo. A fase da lua afeta seus atributos. Lua Nova (+1 Força), Lua Crescente (+1 Destreza), Lua Cheia (+1 Inteligência), Lua Minguante (+1 Manipulação)." },
            { name: "Sentir Escuridão", desc: "Você sente a presença de todos os seres vivos em áreas de completa escuridão ao seu redor, como um sonar." },
            { name: "Bicho Papão", desc: "Passivo. Ganhe +2 dados em testes de Intimidação realizados em ambientes escuros." }
        ],
        "Sequência 8: Poeta da Meia-Noite": [
            { name: "Versos da Noite (Poema da Noite)", desc: "Causa o efeito Medo em todos que ouvem. Teste de Manipulação + Expressão vs Vontade do alvo. Alvos que falharem não podem se aproximar de você e sofrem -1 dado em suas ações." },
            { name: "Versos da Noite (Canção de Ninar)", desc: "Gaste 6 PE. Você canta uma canção de ninar sobrenatural. Alvos com baixa Vontade que a ouvem devem passar num teste de Vigor (Dif. 7) ou cairão em um sono leve." },
            { name: "Tinta de Sombra", desc: "Você pode usar sua própria sombra como tinta para escrever mensagens que só podem ser lidas na escuridão." },
            { name: "Serenata", desc: "Passivo. Habilidades e feitiços que você usa através da sua voz ou música têm a dificuldade para serem resistidos aumentada em 1." }
        ],
        "Sequência 7: Pesadelo": [
            { name: "Estado de Pesadelo (Ativo)", desc: "Gaste 6 PE para separar seu espírito de seu corpo adormecido. Nesta forma astral, você pode voar, se tornar invisível e atravessar paredes. Seu corpo físico fica vulnerável." },
            { name: "Invasão de Sonhos (Ativo)", desc: "Enquanto em Estado de Pesadelo, você pode entrar no sonho de uma pessoa adormecida para interrogá-la ou aterrorizá-la." },
            { name: "Tentáculos de Sombra (Ativo)", desc: "Você manifesta membros espectrais semelhantes a tentáculos. Pode usar para agarrar ou atacar inimigos a uma curta distância. Gaste 2 PE por turno." },
            { name: "Sonocinese (Ativo)", desc: "Toque um alvo adormecido. Você pode arrastá-lo fisicamente para dentro de seu próprio sonho, aprisionando-o em um pesadelo." }
        ],
        "Sequência 6: Segurador de Almas": [
            { name: "Calmante da Alma", desc: "Gaste 3 PE para cantar uma canção que acalma espíritos hostis e alivia a dor mental de aliados, curando 1d3 de dano de Sanidade." },
            { name: "Agitação da Alma", desc: "Uma canção dissonante. Ataque: Manipulação + Performance vs. Vontade do alvo. Dano: 1d10 + Sucessos de dano [Mental]." },
            { name: "Mãos que Seguram", desc: "Você pode tocar e 'segurar' a alma de uma pessoa, impedindo que ela seja possuída ou que seu espírito seja extraído. Requer concentração e um gasto de 2 PE por turno." },
            { name: "Aquietar o Corpo", desc: "Ao tocar alguém, você pode gastar 5 PE para colocá-lo em um estado de coma induzido por uma hora." }
        ],
        "Sequência 5: Feiticeiro dos Espíritos": [
            { name: "Selo Espiritual (Ativo)", desc: "Gaste 8 PE. Você pode selar um espírito de baixo poder dentro de um objeto ou até mesmo em um de seus próprios dentes. O espírito fica dormente e pode ser liberado mais tarde." },
            { name: "Comando Espiritual (Ativo)", desc: "Você pode dar ordens a espíritos que você selou. Use a força deles para criar pequenos fenômenos (um vento súbito, um objeto que cai) ou para atacar um inimigo, causando dano espiritual." },
            { name: "Invisibilidade Aperfeiçoada (Ativo)", desc: "Sua habilidade de camuflagem evolui. Gaste 5 PE para se tornar invisível por uma cena inteira. Você só se torna visível por um instante quando ataca." },
            { name: "Ataque do Espírito Selado (Ativo)", desc: "Libere um espírito selado em um ataque violento. A força do ataque depende do poder do espírito que você sacrificou no processo." }
        ],
        "Sequência 4: Observador Noturno": [
            { name: "Sono Sereno (Ativo)", desc: "Gaste 10 PE para colocar todos os inimigos em uma área em um sono profundo. Eles devem fazer um teste de Vontade (Dif. 8) para resistir. O sono dura até que sejam feridos." },
            { name: "Conceder Infortúnio Noturno (Ativo)", desc: "Sua conexão com a noite agora lhe permite manipular a sorte. Gaste 5 PE para amaldiçoar um alvo com azar, impondo -2 dados em todas as suas rolagens enquanto a noite durar." },
            { name: "Ocultação de Área (Ativo)", desc: "Gaste 12 PE. Você cria uma 'bolha' de escuridão e silêncio que esconde uma sala inteira ou um pequeno acampamento. Pessoas de fora não percebem nada de incomum." },
            { name: "Espiritualismo Adepto (Passivo)", desc: "Você ganha a capacidade de conversar livremente com espíritos e fantasmas como se estivessem falando seu idioma." }
        ],
        "Sequência 3: Bispo do Terror": [
            { name: "Senhor das Trevas (Emissão de Escuridão Destrutiva)", desc: "Gaste 15 PE. Você libera uma maré de escuridão viva que derrete e corrói tudo em um raio de 10m. Causa 8 dados de dano de Corrupção por turno a todos na área." },
            { name: "Senhor das Trevas (Aura de Terror)", desc: "Como ação, gaste 8 PE. Você emana uma aura de puro terror. Inimigos devem passar num teste de Vontade (Dif. 9) ou ficarão amedrontados, fugindo de você." },
            { name: "Teletransporte das Trevas (Ativo)", desc: "Sua habilidade de Caminhar nas Sombras evolui. Agora você pode se teletransportar para qualquer sombra que possa ver, não importa a distância." },
            { name: "Banir para o Reino dos Pesadelos (Ativo)", desc: "Toque um alvo. Gaste 10 PE e 1 Vontade. A consciência do alvo é aprisionada em um pesadelo sem fim, deixando seu corpo catatônico até que o efeito seja quebrado por magia de Anjo." }
        ],
        "Sequência 2: Servo da Ocultação": [
            { name: "Guardião do Segredo (Campo Secreto)", desc: "Gaste 20 PE para ocultar permanentemente um local. O local é apagado de todos os mapas e memórias, exceto daqueles que você escolher." },
            { name: "Guardião do Segredo (Ocultação Conceitual)", desc: "Gaste 15 PE. Você não esconde um objeto, você esconde o conceito dele. Pela próxima hora, ninguém consegue se lembrar para que serve uma chave, ou como usar uma arma de fogo." },
            { name: "Lâmina da Desgraça (Ativo)", desc: "Você manifesta uma lâmina de escuridão solidificada. Com um custo massivo de PE, cada um de seus 6 braços pode realizar um ataque com essa lâmina simultaneamente em um único alvo." },
            { name: "Maldição do Deseiramento (Reação)", desc: "Quando um inimigo usa uma habilidade, você suprime seu desejo de usá-la. O poder falha e o inimigo fica desencorajado (-2 em testes) por 2 rodadas." }
        ],
        "Sequência 1: Cavaleiro do Infortúnio": [
            { name: "Eclipse do Desespero (Habilidade Única)", desc: "Uma vez por história, invoque um eclipse sobrenatural que cobre o campo de batalha em trevas absolutas por 3 rodadas. Na escuridão, todos os seus poderes são amplificados." },
            { name: "Domínio das Sombras (Passivo)", desc: "Você é a noite. Em qualquer lugar do mundo onde for noite, você pode manifestar sua consciência, ver através das sombras ou usar seus poderes como se estivesse lá fisicamente." },
            { name: "Invocar o Infortúnio Final (Ativo)", desc: "Gaste 30 PE e sofra 1d3 de Degradação de Sanidade. Você pode infligir uma maldição de nível divino em um alvo, condenando-o a um destino terrível e narrativo." },
            { name: "Consumir a Noite (Ativo)", desc: "Uso único e épico. Você pode consumir a própria noite em uma região. Pelo próximo ano, o sol nunca se porá naquele lugar. Em troca, você absorve esse poder e atinge um estado de divindade temporária." }
        ]
    }
};
