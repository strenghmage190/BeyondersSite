import { PathwayData } from '../../types';

export const toloData: PathwayData = {
    category: "Lord of Mysteries",
    pathway: "CAMINHO DO TOLO",
    pvBase: 5,
    pvPorAvanço: 3,
    peBase: 20,
    pePorAvanço: 6,
    vontadeBonus: 0,
    sanidade: 6,
    mecanicaUnica: {
        titulo: "O Corpo do Tolo",
        items: [
            { nome: "Aparência Fluida", desc: "Mesmo sem poderes ativos, você pode sutilmente alterar pequenas características suas para se misturar, ganhando +1 dado em testes de Disfarce." },
            { nome: "Resistência à Adivinhação", desc: "A dificuldade para que outros Beyonders usem poderes de adivinhação contra você aumenta permanentemente em 1." }
        ]
    },
    poderesInatos: [
        { seq: "9", nome: "Visão Espiritual Básica", desc: "Você aprende a ver o mundo espiritual, distinguindo auras de vida e resíduos espirituais." },
        { seq: "8", nome: "Coordenação de Palhaço", desc: "Enquanto não usar armadura pesada, você pode adicionar seu atributo de Inteligência à sua Defesa base." },
        { seq: "8", nome: "Agilidade do Palhaço", desc: "Você ganha uma ação de movimento extra por turno, que pode ser usada apenas para manobras acrobáticas ou de fuga." },
        { seq: "7", nome: "Resistência à Loucura", desc: "Ganhe +2 dados para resistir a poderes que causam medo ou confusão mental." },
        { seq: "6", nome: "Alomorfia", desc: "Ao assumir a aparência de alguém, você sempre o reconhecerá, não importa o disfarce dele. É impossível te enganar com disfarces mundanos." },
        { seq: "5", nome: "Mestre da Fuga", desc: "Uma vez por cena, se você estiver contido fisicamente, pode gastar 1 Ponto de Vontade para escapar automaticamente de forma contorcionista e inexplicável." },
        { seq: "4", nome: "Conservadora Exagerada", desc: "A dificuldade para que mintam para você diminui em 1. Você se tornou um especialista em enganação e, portanto, em detectá-la." },
        { seq: "2", nome: "Imunidade a Controle", desc: "Você se torna imune a efeitos que tentariam controlar seu corpo diretamente (como os Fios Espirituais de outro Tolo ou poderes de controle mental de baixo nível)." },
        { seq: "2 - Anjo", nome: "Maestria Arcana", desc: "O custo em PE de todas as suas habilidades Beyonder (de qualquer Sequência) é permanentemente reduzido pela metade (arredondado para cima)." }
    ],
    formaMitica: {
        nome: "Avatar da Loucura",
        disponivel: "(Habilidade disponível a partir da Sequência 4)",
        ativacao: "Requer uma ação completa. O uso da forma causa Degradação de Sanidade e acumula Pontos de Corrupção Mítica, conforme as regras gerais do sistema, sendo mais perigoso nas Sequências 4 e 3.",
        descricao: "Seu corpo físico se desfaz em uma massa incontável de 'Vermes Espirituais' translúcidos, contorcendo-se com padrões que desafiam a lógica. Uma máscara sorridente, branca e vazia, flutua onde seu rosto deveria estar. Inúmeros fios de marionete, finos como teias de aranha e igualmente invisíveis, se estendem de você em todas as direções.",
        bonus: "Sua Inteligência e Manipulação aumentam em +2. Você é imune a dano de contusão mundano e pode atravessar aberturas estreitas como se fosse líquido.",
        poderes: [
            { tipo: "Passivo", nome: "Teia do Marionetista (Seq. 4)", desc: "Você sente a presença de todos os seres vivos em um raio de 50 metros como se fossem vibrações em uma teia invisível." },
            { tipo: "Ação", nome: "Letargia (Seq. 5 Requisito)", desc: "A dificuldade para um alvo resistir aos seus Fios Espirituais aumenta em 2." },
            { tipo: "Ação", nome: "Adulterar Memória (Seq. 3)", desc: "Gaste 8 PE. Você pode adulterar a memória de uma cena inteira na mente de todos os presentes (não-Beyonders), fazendo-os lembrar do que você desejar." },
            { tipo: "Reação", nome: "Vazio Histórico (Seq. 2)", desc: "Ao ser alvo de um ataque, gaste 5 PE. Você se apaga da história por um instante. O ataque o atravessa sem efeito, pois naquele momento, você 'nunca esteve ali'." }
        ]
    },
    mythicalForm: {
      incomplete: { 
        tempHpBonus: 30,
        attributeBoosts: { inteligencia: 2, manipulacao: 1 },
        sanityCostPerTurn: "1d2", 
        abilities: [
          { name: "Presença Inconsistente", desc: "Sua forma parcialmente dissolvida é difícil de acertar. Ataques físicos à distância têm 25% de chance de passar através de você sem causar dano." },
          { name: "Controle de Fios Simplificado", desc: "Você pode controlar uma marionete com uma ação, mas todos os testes relacionados a ela sofrem uma penalidade de -2 dados." }
        ]
      },
      complete: {
        tempHpBonus: 60,
        attributeBoosts: { inteligencia: 4, manipulacao: 2 },
        abilities: [
          { name: "Mestre das Marionetes", desc: "Você pode controlar ativamente até 3 marionetes simultaneamente sem penalidades." },
          { name: "Distorção de Realidade Menor", desc: "Uma vez por cena, você pode gastar 10 PE para alterar temporariamente uma propriedade física de um objeto não-mágico (ex: tornar uma parede escorregadia, tornar água em ácido fraco)." }
        ]
      }
    },
    domain: {
        description: "A magia do Mistério, da Fraude e da História. Um Tolo não quebra as regras; ele as reescreve sem que ninguém perceba, rindo do conceito de uma 'realidade' absoluta.",
        particulas: [
            { name: "Neurospasta", translation: "Marionete", type: "Objeto", conceito: "A essência dos 'Fios do Espírito', os elos invisíveis de controle e destino que conectam todas as coisas. Este Domínio permite ao Tolo ver e manipular esses fios.", exemplo: "Et Neurospasta (Controlar Marionete) — A base para o poder de controlar os corpos de outras criaturas, forçando seus movimentos de forma sutil.", uso: "As Neurospasta (Destruir Marionete) — Não destrói a pessoa, mas corta permanentemente os Fios do Espírito que a ligam a um sentimento ou a outra pessoa." },
            { name: "Apatē", translation: "Falha", type: "Função", conceito: "A magia do 'erro'. Esta Função não causa azar, ela introduz uma falha lógica e fundamental em um sistema.", exemplo: "Apatē Machina (Falha em Mecanismo) — Faz uma arma emperrar no momento crucial.", uso: "Apatē Imu (Falha na Mente) — Introduz um lapso de memória ou um erro de julgamento." },
            { name: "Historia", translation: "História", type: "Objeto", conceito: "O registro etéreo do passado, os ecos de eventos que já aconteceram. Permite ao Tolo invocar e manipular esses fantasmas do tempo.", exemplo: "Ev Historia (Invocar História) — Traz uma 'Projeção Histórica' à existência, uma cópia de um ser ou objeto de um momento passado.", uso: "Al Historia (Alterar História) — Altera sutilmente o eco de um evento, mudando a forma como ele é lembrado coletivamente." }
        ]
    },
    sequences: {
        "Sequência 9: Vidente": [
            { name: "Adivinhação com Pêndulo", desc: "Gaste 1 PE e faça uma pergunta de 'sim' ou 'não'. Um teste de Espiritualidade + Ocultismo (Dif. 7) lhe dará a resposta correta." },
            { name: "Visão Além dos Véus", desc: "Gaste 1 PE por turno para ver o mundo espiritual, incluindo auras de vida, espíritos e resíduos de poder." },
            { name: "Alerta de Perigo", desc: "Como reação a um ataque surpresa, gaste 2 PE para aplicar sua Defesa total." },
            { name: "Leitura de Aura Básica", desc: "Com a Visão Espiritual ativa, você pode fazer um teste de Percepção + Empatia para deduzir o estado emocional básico de alguém." },
            { name: "Leitura de Tarô (Ativo)", desc: "Gaste 2 PE. Formule uma questão e, usando um baralho de Tarô, receba uma imagem ou um símbolo mental que representa a resposta de forma abrangente e simbólica." },
            { name: "Numerologia Básica (Ativo)", desc: "Gaste 1 PE. Calcule a fortuna ou o azar de um indivíduo ou evento baseando-se em números relevantes (datas de nascimento, sequências etc.)." }
        ],
        "Sequência 8: Palhaço": [
            { name: "Elasticidade Corporal", desc: "Passivo. Ganhe +2 dados em testes de Acrobacia e reduza em 2 o dano sofrido por quedas." },
            { name: "Bala de Ar Comprimido", desc: "Dispara um projétil de ar invisível. Ataque: Destreza + Furtividade. Dano: 1d6 + Sucessos Líquidos. Um ataque bem-sucedido não revela sua posição." },
            { name: "Transferência de Dano Menor", desc: "Ao sofrer dano, gaste 3 PE. Converta 10 de dano para 5." },
            { name: "Premonição Intuitiva", desc: "Passivo. Ganhe +2 dados em testes para detectar se alguém está mentindo para você." }
        ],
        "Sequência 7: Mágico": [
            { name: "Origami Substitutivo", desc: "Gaste 3 PE para animar uma pequena figura de papel. Você pode trocar de lugar com ela como uma reação, fazendo-a receber um ataque em seu lugar." },
            { name: "Ilusão Visual Simples", desc: "Gaste 2 PE. Crie uma imagem visual estática (não se move e não tem som) do tamanho de uma pessoa. Dura uma cena ou até ser tocada." },
            { name: "Chamas do Mágico", desc: "Gaste 1 PE para manipular uma fonte de fogo pequena (vela, tocha) a até 10 metros, movendo-a pelo ar ou duplicando seu tamanho por um turno." },
            { name: "Salto Flamejante", desc: "Gaste 3 PE. Se houver uma chama visível, você pode se teleportar instantaneamente para a posição dela." }
        ],
        "Sequência 6: Sem Rosto": [
            { name: "Mudança de Rosto", desc: "Gaste 3 PE. Assuma a aparência física exata (incluindo voz) de qualquer pessoa que você já viu de perto. Dura uma hora." },
            { name: "Ilusão Sonora", desc: "Gaste 2 PE para criar um som específico (passos, um grito, uma conversa murmurada) que se origina de um ponto que você possa ver." },
            { name: "Coelho na Cartola", desc: "Passivo. Você ganha acesso a um pequeno espaço de bolso extradimensional onde pode guardar objetos que caibam em suas mãos. Requer 1 PE para guardar ou retirar um item." },
            { name: "Figurino Ilusório", desc: "Ao usar Mudança de Rosto, gaste +2 PE para criar também uma réplica perfeita das roupas da pessoa. O disfarce se torna completo." }
        ],
        "Sequência 5: Marionetista": [
            { name: "Controle dos Fios Espirituais (Ativo)", desc: "Gaste 3 PE por turno. Faça um teste disputado de Espiritualidade + Lábia vs. Vontade do alvo. Se vencer, você controla o corpo dele como uma marionete por um turno." },
            { name: "Criar Marionete (Ativo)", desc: "Realize um ritual de 1 hora e gaste 10 PE sobre um corpo recém-falecido. Ele se torna uma marionete permanente sob seu controle." },
            { name: "Visão da Marionete (Passivo)", desc: "A qualquer momento, você pode perceber o mundo através dos sentidos de qualquer uma de suas marionetes, não importa a distância." },
            { name: "Escudo de Carne (Reação)", desc: "Gaste 2 PE. Force uma marionete (ou um alvo sob seu controle) a usar sua Reação para se mover e interceptar um ataque direcionado a você ou a um aliado." }
        ],
        "Sequência 4: Feiticeiro Bizarro": [
            { name: "Projeção Histórica (Ativo)", desc: "Gaste 8 PE para invocar um 'fantasma' de si mesmo de um momento do passado para lutar ao seu lado por 3 turnos." },
            { name: "Distorção da Realidade (Ativo)", desc: "Gaste 6 PE para alterar temporariamente a propriedade de um objeto por uma cena: transforme água em 'ácido', faça uma parede ficar 'escorregadia', etc." },
            { name: "Replicar Proeza (Ativo)", desc: "Ao observar alguém realizar uma ação física mundana excepcional, você pode gastar 5 PE para replicá-la perfeitamente em seu próximo turno." },
            { name: "Mestre das Marionetes (Passivo)", desc: "Você pode controlar ativamente até três alvos simultaneamente com seus Fios Espirituais, mas cada um exige seu próprio teste e custo de PE por turno." }
        ],
         "Sequência 3: Estudante do Outrora": [
            { name: "Invocar do Vazio Histórico (Ativo)", desc: "Gaste 10 PE e um item que pertenceu a uma pessoa falecida. Você invoca uma cópia perfeita daquela pessoa de quando ela estava viva." },
            { name: "Grafting Conceitual (Ativo)", desc: "Gaste 8 PE. Você 'enxerta' um conceito de um lugar para outro. Pode fazer com que uma porta se abra em um local completamente diferente." },
            { name: "Invocar Verme Espiritual (Ativo)", desc: "Gaste 5 PE. Você implanta um Verme Espiritual em um inimigo. Pelos próximos 3 turnos, ele fica confuso, com 25% de chance de atacar a si mesmo." },
            { name: "Parasita Histórico (Ativo)", desc: "Gaste 12 PE e 1 Vontade. Projete sua consciência para o passado de um objeto ou local. A experiência pode causar dano de Sanidade." }
        ],
        "Sequência 2: Invocador de Milagres": [
            { name: "Concessão de Desejo (Ativo)", desc: "Uma vez por história, você pode conceder um 'milagre'. Diga ao Narrador um desejo plausível. Ele o realizará, mas de forma literal e com uma reviravolta irônica ou perigosa." },
            { name: "Enxerto Abstrato (Ativo)", desc: "Gaste 15 PE para 'roubar' um conceito de um alvo por uma cena (velocidade, fogo, memória)." },
            { name: "Clone Perfeito (Ativo)", desc: "Gaste 10 PE e sofra 1 Nível de Degradação de Sanidade. Você cria um clone perfeito e senciente de si mesmo por 24 horas." },
            { name: "Reescrever o Script (Reação)", desc: "Ao testemunhar uma ação, gaste 10 PE para narrar um 'plot twist'. 'Na verdade, a bala que ele disparou era uma ilusão'." }
        ],
        "Sequência 1: Atendente do Mistério": [
            { name: "Adulteração da Realidade (Ativo)", desc: "Gaste 15 PE e 1 Vontade. Altere permanentemente uma regra física ou abstrata em um local ('Ninguém pode mentir nesta sala')." },
            { name: "Onipotência Parasitária (Passivo)", desc: "Ao tocar outro Beyonder, você pode usar um de seus poderes ativos uma única vez, gastando seus próprios PE." },
            { name: "Marionete Divina (Ativo)", desc: "Uma vez por história, tente controlar um Semideus ou Anjo por um único turno. Requer um custo imenso de PE e Sanidade." },
            { name: "O Tolo (Ativo)", desc: "Gaste 1 Ponto de Vontade. Por um único turno, você é tratado como um Beyonder de Sequência 0 - O Tolo. Pode usar qualquer habilidade de qualquer Sequência." }
        ]
    }
};