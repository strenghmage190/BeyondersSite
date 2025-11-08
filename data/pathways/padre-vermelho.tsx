import { PathwayData } from '../../types';

export const padreVermelhoData: PathwayData = {
    category: "Calamity of Destruction",
    pathway: "CAMINHO DO PADRE VERMELHO",
    pvBase: 10,
    pvPorAvanço: 4,
    peBase: 10,
    pePorAvanço: 4,
    vontadeBonus: 2,
    sanidade: 7,
    mecanicaUnica: {
        titulo: "Fúria Tática",
        items: [
            { nome: "Alimentar as Chamas", desc: "Toda vez que você ou um aliado inflige um Sucesso Crítico em um inimigo, você recupera 1 PE. O fervor da batalha alimenta seu fogo interior." },
            { nome: "Olho para a Ira", desc: "Você consegue sentir instintivamente os gatilhos emocionais de uma pessoa. Ganhe +1 dado em todos os testes para provocar, irritar ou insultar alguém." }
        ]
    },
    poderesInatos: [
        { seq: "9", nome: "Emboscar", desc: "Armadilhas que você cria (sejam elas físicas ou mágicas) causam +1 de dano." },
        { seq: "8", nome: "Karma", desc: "As pessoas simplesmente se irritam mais facilmente com você. A dificuldade para você usar Intimidação (Provocação) diminui em 1." },
        { seq: "7", nome: "Resistência ao Fogo", desc: "Você ganha +3 dados para absorver dano de fogo e calor." },
        { seq: "6", nome: "Fofoca", desc: "Sua habilidade de reunir e espalhar informações se torna sobrenatural. Ganhe +2 dados em testes para conseguir informações ou espalhar boatos." },
        { seq: "5", nome: "Visão Penetrante", desc: "Seus olhos podem ver através de fumaça, névoa e escuridão mágica de baixo nível." },
        { seq: "4", nome: "Aprimoramento Físico - Abate", desc: "Você se torna um mestre do combate. Ganhe +1 em Destreza." },
        { seq: "2", nome: "Mestre da Guerra", desc: "Sua mente tática se torna lendária. No início de um combate, você pode conceder a todos os seus aliados +2 dados em suas rolagens de iniciativa." },
        { seq: "2 - Anjo", nome: "Maestria Arcana", desc: "O custo em PE de todas as suas habilidades Beyonder (de qualquer Sequência) é permanentemente reduzido pela metade (arredondado para cima)." }
    ],
    formaMitica: {
        nome: "Gigante da Calamidade Flamejante",
        disponivel: "(Habilidade disponível a partir da Sequência 4)",
        ativacao: "Requer uma ação completa e causa Degradação de Sanidade e acumula Pontos de Corrupção Mítica, conforme as regras gerais do sistema.",
        descricao: "Seu corpo se transforma em uma figura colossal feita de fuligem e ferro negro incandescente. Chamas púrpuras e espectrais envolvem você como um manto e uma armadura esquelética brilha com o calor de uma forja. Seus olhos são como dois meteoros em queda, e tempestades de fogo e raios giram ao seu redor.",
        bonus: "Sua Força e Destreza aumentam em +2.",
        poderes: [
            { tipo: "Passivo", nome: "Corpo Incinerador - Seq. 4", desc: "Você é imune a dano de fogo e calor. Qualquer um que o ataque corpo a corpo sofre 3 dados de dano de fogo de sua aura flamejante." },
            { tipo: "Ação", nome: "Legião das Chamas Púrpuras - Seq. 4 Requisito", desc: "Gaste 8 PE. Você invoca 5 soldados espectrais feitos de fogo negro. Eles lutam por 3 turnos, e cada um pode explodir, causando 5 dados de dano em área." },
            { tipo: "Ação", nome: "Cataclismo Meteórico - Seq. 3", desc: "Gaste 12 PE. Você invoca um único meteoro que cai sobre uma área designada, causando 10 dados de dano de impacto e fogo e deixando o terreno permanentemente derretido." },
            { tipo: "Reação", nome: "Manipulação do Aço Flamejante - Seq. 2", desc: "Ao ser alvo de um ataque com arma de metal, gaste 5 PE. Você superaquece a arma do inimigo, forçando-o a soltá-la ou sofrer dano contínuo." }
        ]
    },
    mythicalForm: {
      incomplete: { 
        tempHpBonus: 40,
        attributeBoosts: { forca: 2, destreza: 2 },
        sanityCostPerTurn: "1d2", 
        abilities: [
          { name: "Aura de Calor Intenso", desc: "Inimigos a 2 metros de você sofrem 1d4 de dano de fogo no início de seus turnos." },
          { name: "Arma de Fogo Espiritual", desc: "Você pode gastar 3 PE para imbuir uma arma com fogo. A arma causa +1d6 de dano de fogo por 3 turnos." }
        ]
      },
      complete: {
        tempHpBonus: 80,
        attributeBoosts: { forca: 4, destreza: 4 },
        abilities: [
          { name: "Comandar o Campo de Batalha", desc: "Uma vez por cena, você pode dar um comando tático a todos os seus aliados, concedendo-lhes +2 na iniciativa e uma ação de movimento extra no próximo turno." },
          { name: "Chama da Aniquilação", desc: "Gaste 10 PE para lançar um cone de fogo negro que causa 8d10 de dano e ignora armadura não-mágica." }
        ]
      }
    },
    domain: {
        description: "A magia da Guerra como uma arte, da Intriga e da Chama da Conspiração. Um Padre Vermelho não apenas luta; ele provoca, manipula e comanda, usando a fúria dos outros e a sua própria chama interior para incinerar inimigos e inspirar legiões.",
        particulas: [
            { name: "Polemos", translation: "Guerra", type: "Objeto/Característica", conceito: "A essência da guerra como um sistema complexo: tática, logística, moral e estratégia. Diferente do combate singular, Polemos governa o campo de batalha.", exemplo: "Am Ivi Polemos (Proteger Pessoa com Guerra) — Concede a um aliado um bônus tático.", uso: "Lues Locus Polemos (Corromper Lugar com Guerra) — Infunde um local pacífico com a energia do conflito." },
            { name: "Mēkhanē", translation: "Intriga", type: "Função", conceito: "O poder da conspiração e da manipulação indireta. É a arte de plantar sementes de dúvida e colher a discórdia, tudo sem revelar a mão.", exemplo: "Mēkhanē Azi (Intriga com Informação) — Cria um boato ou planta uma informação falsa.", uso: "Mēkhanē Hypnos (Intriga no Sonho) — Em vez de invadir um sonho, você sutilmente 'edita' uma memória onírica recente." },
            { name: "Pyrrhos", translation: "Fogo do Ardíl", type: "Característica", conceito: "A chama da fúria e da provocação. Diferente do Fogo (Ig) que queima matéria, o Pyrrhos queima a paciência e incendeia as paixões.", exemplo: "Im Eli Pyrrhos (Atacar com Elemento Fogo do Ardíl) — Cria um fogo que não queima tanto, mas é excepcionalmente doloroso e humilhante.", uso: "Un Ani Pyrrhos (Conectar Alma ao Fogo do Ardíl) — Cria um elo entre a raiva de um alvo e uma fonte de chama próxima." }
        ]
    },
    sequences: {
        "Sequência 9: Caçador": [
            { name: "Mestre das Armadilhas", desc: "Gaste 2 PE e um minuto para criar uma armadilha simples (laço, fosso, armadilha de urso) com materiais do ambiente." },
            { name: "Conhecimento do Terreno", desc: "Ganhe +2 dados em testes de Sobrevivência e Furtividade em ambientes selvagens." },
            { name: "Disparo Certeiro", desc: "Ao usar um arco ou rifle, gaste 1 PE para mirar. Se não se mover neste turno, seu próximo ataque ganha +2 dados na parada." },
            { name: "Caçar", desc: "Passivo. Ganhe +1 dado permanente em todos os seus testes de Rastreamento." }
        ],
        "Sequência 8: Provocador": [
            { name: "Provocar", desc: "Faça um teste de Manipulação + Intimidação contra um alvo. Se vencer, o alvo é compelido a te atacar em seu próximo turno. Custa 2 PE." },
            { name: "Visão de Túnel", desc: "Quando você e um inimigo estão se atacando mutuamente, ambos causam +1 de dano um ao outro." },
            { name: "Escudo de Insultos", desc: "Você pode usar sua perícia Intimidação para se defender em combate social. Role Manipulação + Intimidação para resistir a tentativas de persuasão ou sedução." },
            { name: "Perícia Especial - Provocação", desc: "Passivo. A dificuldade para você usar o talento Intimidação com o propósito de irritar alguém diminui em 1." }
        ],
        "Sequência 7: Piromaníaco": [
            { name: "Bola de Fogo", desc: "Gaste 2 PE. Arremesse uma pequena esfera de fogo que causa 5 dados de dano em um único alvo." },
            { name: "Manto de Chamas", desc: "Gaste 2 PE por turno. Um manto de chamas te envolve, concedendo Armadura 2 e causando 1 de dano a qualquer um que te agarre." },
            { name: "Corvos Chamuscados", desc: "Gaste 3 PE para conjurar 3 corvos de fogo. Cada um pode ser enviado para atacar um alvo diferente (causando 2 de dano cada) ou para distrair inimigos (impondo -1 de penalidade)." },
            { name: "Lança de Apolo", desc: "Gaste 4 PE. Você concentra uma lança de fogo que causa 6 dados de dano perfurante e de fogo. Pode ser usada corpo a corpo ou arremessada." }
        ],
        "Sequência 6: Conspirador": [
            { name: "Manipulação Mental", desc: "Gaste 4 PE para plantar uma sugestão na mente de um alvo. A sugestão deve ser sutil ('Talvez seu chefe não seja confiável.')." },
            { name: "Teia de Intriga", desc: "Você gasta um dia espalhando boatos e informações falsas. Faça um teste de Manipulação + Lábia (Dif. 8) para criar um conflito entre duas facções." },
            { name: "Módulo de Chamas - Dispersão", desc: "Ao usar uma habilidade de fogo, você pode sacrificar parte do dano para aumentar sua área. Uma Bola de Fogo pode se tornar uma Onda de Fogo, por exemplo." },
            { name: "Experiência", desc: "Passivo. Ganhe +2 dados em testes de Percepção e Investigação para descobrir conspirações e fraudes." }
        ],
        "Sequência 5: Ceifador": [
            { name: "Visão de Pontos Fracos", desc: "Gaste 4 PE. Pela próxima cena, seus olhos veem as falhas na defesa. Seus ataques ignoram 3 pontos de Armadura de seus alvos." },
            { name: "Ataque Incendiário", desc: "Ao acertar um ataque com arma, gaste 3 PE. A arma explode em chamas, e o alvo começa a queimar, sofrendo 2 dados de dano de fogo por 3 turnos." },
            { name: "Tática da Terra Queimada", desc: "Gaste 6 PE. Você deixa um rastro de fogo mágico por onde se move por um turno. Inimigos que cruzarem o rastro sofrem dano." },
            { name: "Fogo que Pensa", desc: "Suas chamas ganham uma senciência rudimentar. Quando você usa Bola de Fogo, ela pode desviar de cobertura para atingir o alvo." }
        ],
        "Sequência 4: Cavaleiro Sangue de Ferro": [
            { name: "Forja Ardente", desc: "Gaste 8 PE. Você conjura uma arma ou uma armadura completa feita de ferro negro e chamas. A arma causa danos Agravado; a armadura concede +5 dados para absorver dano." },
            { name: "Aura de Medo e Fogo", desc: "Passivo. Sua aura se torna fisicamente quente e aterrorizante. Inimigos a até 5 metros de você sofrem -1 de penalidade em testes de Vontade." },
            { name: "Comandar a Ira", desc: "Gaste 5 PE. Você direciona o efeito de suas provocações. Em vez de fazer com que um inimigo te ataque, você pode forçá-lo a atacar um de seus próprios aliados por um turno." },
            { name: "Mestre de Guerra", desc: "Passivo. Seus planos de batalha se tornam mais eficazes. Seus aliados que seguirem um plano tático definido por você no início do combate ganham +1 dado em suas ações ofensivas." }
        ],
        "Sequência 3: Bispo de Guerra": [
            { name: "Transmissão de Poder", desc: "Gaste 10 PE e toque um aliado. Por uma cena, você concede a ele sua afinidade com o fogo. Ele pode usar suas habilidades de Piromaníaco (Seq. 7) como se fossem dele." },
            { name: "Clima Caótico (Tempestade de Fogo)", desc: "Gaste 15 PE para criar uma tempestade de fogo localizada, com chuva de brasas e ventos superaquecidos, em uma área de 50m." },
            { name: "Muralha de Chamas", desc: "Gaste 8 PE para erguer uma parede de fogo intransponível com 20m de comprimento e 5m de altura, que dura por uma cena." },
            { name: "Sacrifício Tático", desc: "Como uma reação, você pode sofrer o dano de um ataque direcionado a um aliado próximo." }
        ],
        "Sequência 2: Feiticeiro do Tempo (de Batalha)": [
            { name: "Acelerar o Tempo de Batalha", desc: "Gaste 20 PE. Por 3 turnos, você e todos os seus aliados podem realizar uma ação extra por turno." },
            { name: "Exército da Destruição", desc: "Gaste 15 PE para invocar um exército de 10 guerreiros demoníacos feitos de lava e obsidiana." },
            { name: "Dominar o Fogo", desc: "Gaste 12 PE para assumir o controle de qualquer fonte de fogo não-divino em seu campo de visão, usando-a como sua arma." },
            { name: "Fúria da Guerra Infinita (Passivo)", desc: "Para cada inimigo derrotado por você ou por seus aliados, você ganha um Ponto de Fúria temporário, que pode ser gasto para adicionar sucessos automáticos a testes de dano." }
        ],
        "Sequência 1: Conquistador": [
            { name: "Chama da Conquista", desc: "Gaste 30 PE e sofra 1 Degradação de Sanidade. Você invoca a 'Chama Primordial', um fogo conceitual que queima a história e a alma. O dano é absoluto e final." },
            { name: "Armagedom da Guerra Infinita", desc: "Uso único e épico. Gaste 30 PE e sofra 1d4 Níveis de Degradação de Sanidade. Você invoca um portal para um campo de batalha eterno." },
            { name: "Onipresença Tática", desc: "Gaste 15 PE. Por uma cena, você pode dar uma ordem e estar simultaneamente em múltiplos lugares do campo de batalha." },
            { name: "Eu Sou a Guerra (Passivo)", desc: "Sua própria existência se torna um ato de guerra. Sua presença em um local por tempo prolongado naturalmente começa a incitar conflito e agressão." }
        ]
    }
};
