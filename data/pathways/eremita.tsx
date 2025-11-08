import { PathwayData } from '../../types';

export const eremitaData: PathwayData = {
    category: "God of Knowledge and Wisdom",
    pathway: "CAMINHO DO EREMITA",
    pvBase: 5,
    pvPorAvanço: 3,
    peBase: 20,
    pePorAvanço: 6,
    vontadeBonus: 1,
    sanidade: 7,
    mecanicaUnica: {
        titulo: "Os Olhos do Mistério",
        items: [
            { nome: "Visão Penetrante", desc: "Passivamente, você tem a habilidade de perceber falhas sutis na realidade, como o contorno de uma ilusão ou a aura de um objeto encantado." },
            { nome: "Toque do Oculto", desc: "Você ganha permanentemente +2 PE por avanço de Sequência. Sua alma é naturalmente mais sintonizada com a energia mística do mundo." }
        ]
    },
    poderesInatos: [
        { seq: "9", nome: "Toque do Oculto", desc: "Sua reserva máxima de PE é aumentada permanentemente em 2." },
        { seq: "8", nome: "Visão Privilegiada", desc: "Ao usar sua Visão Espiritual, você pode usar seu atributo de Inteligência no lugar de Destreza para ataques de pontaria, pois você 'prevê' a trajetória." },
        { seq: "7", nome: "Físico Desafortunado", desc: "Seu corpo definha em favor da mente. Você ganha +1 em um atributo mental, mas sofre -1 em um atributo físico." },
        { seq: "6", nome: "Feitiçaria Antiga", desc: "Você aprende instintivamente um ritual antigo à sua escolha." },
        { seq: "5", nome: "Espreitar Segredos", desc: "Sua Visão Espiritual agora pode ver através de paredes finas e portas fechadas." },
        { seq: "4", nome: "Texto Original", desc: "Ao transcrever um feitiço, você pode alterar sutilmente sua natureza (ex: mudar a Afinidade do dano) com um teste de Inteligência + Ocultismo." },
        { seq: "2", nome: "Bússola Natural", desc: "Você nunca se perde no Mundo Espiritual e pode sempre sentir a direção de 'portas' ou anomalias dimensionais." },
        { seq: "2 - Anjo", nome: "Maestria Arcana", desc: "O custo em PE de todas as suas habilidades Beyonder (de qualquer Sequência) é permanentemente reduzido pela metade (arredondado para cima)." }
    ],
    formaMitica: {
        nome: "Arauto do Sábio Oculto",
        disponivel: "(Habilidade disponível a partir da Sequência 4)",
        ativacao: "Requer uma ação completa e tem um custo progressivo de Degradação de Sanidade.",
        descricao: "Seu corpo físico se desfaz, tornando-se uma massa de carne translúcida e flutuante, coberta por milhares de olhos frios e sem cílios. Cada olho brilha com a luz de uma estrela distante. Entre os olhos, runas cósmicas e diagramas astrológicos pulsam como constelações vivas. Tentáculos feitos de pergaminhos antigos e tinta estelar emergem de suas costas, e sua voz é um coro de sussurros de milênios passados.",
        bonus: "Sua Inteligência aumenta em +3.",
        poderes: [
            { tipo: "Passivo", nome: "Visão das Estrelas - Seq. 4", desc: "Seus olhos veem tudo. Você é imune a invisibilidade, ilusões e disfarces. Você pode enxergar através de qualquer matéria mundana e ver o fluxo da energia espiritual e as leis da realidade." },
            { tipo: "Ação", nome: "Ritual da Estrela Cadente - Seq. 4 Requisito", desc: "Gaste 10 PE. Você realiza um ritual instantâneo que invoca um meteorito estelar, causando dano massivo de luz e impacto e criando uma área Banhada pelo Conhecimento, que concede bônus a testes mágicos." },
            { tipo: "Ação", nome: "Extração do Grimório - Seq. 3", desc: "Toque um objeto ou cadáver e gaste 8 PE. Você extrai todo o conhecimento contido nele, aprendendo instantaneamente um de seus segredos ou uma de suas habilidades por 3 rodadas." },
            { tipo: "Reação", nome: "Profecia das Esferas - Seq. 2", desc: "Ao ver um inimigo iniciar uma ação, você prevê seu movimento. Gaste 5 PE para anular ou redirecionar a ação para outro alvo." }
        ]
    },
    mythicalForm: {
      incomplete: { 
        tempHpBonus: 25,
        attributeBoosts: { inteligencia: 2, percepcao: 1 },
        sanityCostPerTurn: "1d2", 
        abilities: [
          { name: "Visão Reveladora", desc: "Seus olhos podem perceber hidden magical writings and symbols on surfaces that are invisible to others." },
          { name: "Círculo de Proteção Rápido", desc: "You can spend a full action to trace a small circle on the ground that grants +2 to Defesa against magical attacks for anyone inside it." }
        ]
      },
      complete: {
        tempHpBonus: 50,
        attributeBoosts: { inteligencia: 4, percepcao: 2 },
        abilities: [
          { name: "Conexão com o Conhecimento Universal", desc: "Once per transformation, ask the Narrator a single question about a hidden truth. You receive a cryptic but true answer." },
          { name: "Desfazer Feitiço", desc: "You can touch an ongoing magical effect of Semideus level or lower and attempt to unravel it with an Inteligência + Ocultismo test." }
        ]
      }
    },
    domain: {
        description: "A magia do Segredo, da Introspecção e da proteção do conhecimento. Um Eremita sabe que o poder mais verdadeiro não está no que é gritado, mas no que é sussurrado em silêncio absoluto.",
        particulas: [
            { name: "Mysterion", translation: "Segredo", type: "Objeto/Característica", conceito: "O conhecimento que deseja permanecer oculto. Representa segredos, cifras e o próprio ato de esconder.", exemplo: "Am Azi Mysterion (Proteger Informação com Segredo) — Criptografa magicamente um texto ou uma conversa.", uso: "Ev Mysterion (Invocar Segredo) — Não revela um segredo, mas invoca sua 'sombra', uma presença espiritual que distrai e confunde." },
            { name: "Kryptos", translation: "Ocultação", type: "Função", conceito: "O poder de esconder perfeitamente, removendo algo da percepção em todos os níveis — físico, espiritual e mental. É a invisibilidade perfeita.", exemplo: "Kryptos Exa (Ocultar Inanimado) — Esconde um objeto. Ele não está invisível; para todos os efeitos, ele 'não está lá'.", uso: "Kryptos Ala-Hypnos (Ocultar Abstrato do Sonho) — Esconde o significado de um sonho, deixando apenas as imagens confusas." },
            { name: "Magia", translation: "Mageia", type: "Objeto/Característica", conceito: "A essência da própria magia como uma força. Permite ao Eremita interagir com feitiços e energias arcanas como se fossem objetos tangíveis.", exemplo: "As Mageia (Destruir Magia) — Um contra-feitiço direto e poderoso.", uso: "Al Mageia (Alterar Magia) — Sutilmente edita um feitiço de longa duração que já está ativo no ambiente." }
        ]
    },
    sequences: {
        "Sequência 9: Espreitador": [
            { name: "Visão Espiritual Espreitar", desc: "Gaste 1 PE por turno. Você pode 'focar' sua visão para enxergar através de paredes finas de madeira ou pedra. O uso prolongado causa dores de cabeça." },
            { name: "Espreitar o Futuro", desc: "Faça um teste de Percepção + Ocultismo. Com sucesso, você tem uma pequena visão do resultado mais provável de uma ação que está prestes a tomar. Custa 2 PE." },
            { name: "Invasão de Conhecimento", desc: "Passivo. Sua mente está constantemente sendo bombardeada por informações do cosmos. Você sofre -1 em testes para resistir a confusão, mas pode fazer um teste de Inteligência para se lembrar de um fato aleatório." },
            { name: "Espreitar o Perigo", desc: "Passivo. Sua intuição te alerta para perigos ocultos. Ganhe +2 dados em testes de Percepção para notar armadilhas e emboscadas." }
        ],
        "Sequência 8: Estudioso do Corpo a Corpo": [
            { name: "Olho do Combate", desc: "Gaste 2 PE por cena. Sua mente analisa os movimentos de combate. Você pode usar seu atributo de Inteligência no lugar de Destreza para rolagens de ataque e defesa." },
            { name: "Antecipar Golpe", desc: "Como reação a um ataque corpo a corpo, você pode fazer um teste de Raciocínio + Luta. Se vencer o atacante, você prevê o golpe e ganha +3 na sua Defesa contra aquele ataque." },
            { name: "Analisar Estilo", desc: "Após observar um lutador por um turno, você pode gastar 3 PE para entender seu estilo de luta, descobrindo suas aberturas e manobras favoritas. Seus próximos ataques contra ele têm a dificuldade diminuída em 1." },
            { name: "Artes Marciais", desc: "Passivo. Ganhe proficiência em Luta ou em uma arma corpo a corpo de sua escolha." }
        ],
        "Sequência 7: Bruxo": [
            { name: "Manipulação de Pó (Chamas)", desc: "Usando pós e ervas como catalisadores, você pode criar uma pequena explosão de chamas. Causa 4 dados de dano de fogo. Custa 2 PE." },
            { name: "Manipulação de Pó (Vento)", desc: "Usando pós transparentes, você cria uma rajada de vento que pode empurrar inimigos ou limpar uma área de gás. Custa 2 PE." },
            { name: "Manipulação de Pó (Mão Invisível)", desc: "Gaste 3 PE para criar uma mão de força telecinética que pode manipular objetos a até 10 metros por uma cena." },
            { name: "Desejo de Exploração", desc: "Passivo. Você é treinado em Sobrevivência e sua velocidade de movimento base aumenta em 2." }
        ],
        "Sequência 6: Professor de Pergaminhos": [
            { name: "Escrever Pergaminho", desc: "Passe uma hora e gaste o custo do feitiço +2 PE. Você pode transcrever um feitiço ou poder Beyonder que você conhece em um pergaminho." },
            { name: "Runa Arcana", desc: "Você pode criar runas mágicas com efeitos variados (alarme, enfraquecer parede, etc.). O efeito é único e requer pesquisa e materiais. Custa 3 PE + custo de materiais." },
            { name: "Queimar Registro", desc: "Você pode ativar um de seus pergaminhos como uma ação livre, em vez de uma ação padrão. O pergaminho se desintegra no processo." },
            { name: "Foco Absoluto", desc: "Passivo. Você pode se concentrar em uma tarefa mental complexa e se tornar imune a distrações, ganhando +2 dados no teste." }
        ],
        "Sequência 5: Mestre das Constelações": [
            { name: "Via Láctea (Convocação)", desc: "Gaste 10 PE para invocar 10 'estrelas ilusórias' que orbitam você. Enquanto orbitado, poderes de adivinhação direcionados a você falham automaticamente." },
            { name: "Supernova", desc: "Você pode fazer duas ou mais de suas estrelas ilusórias colidirem em um alvo. Cada estrela causa 1d10 de dano cósmico." },
            { name: "Gaiola Estelar", desc: "Use uma estrela ilusória para prender um alvo em uma gaiola de luz. A gaiola dura por 3 turnos ou até o alvo passar em um teste de Força (Dif. 8)." },
            { name: "Segregação Cósmica", desc: "Use oito estrelas ilusórias para criar uma área de 10m de raio que isola o local de outras dimensões, impedindo teleporte ou convocações. Dura uma cena." }
        ],
        "Sequência 4: Misticologista": [
            { name: "Visão Mística", desc: "Seus Olhos do Mistério evoluem. Agora você pode ver através de qualquer ilusão, disfarce ou forma de ocultação, não importa o quão poderosa." },
            { name: "Maldição Mística", desc: "Você aprende a criar suas próprias maldições. Gaste 8 PE e descreva um efeito negativo. O Narrador determina a dificuldade para o alvo resistir." },
            { name: "Teleporte Místico", desc: "Você pode replicar o teleporte de outros Caminhos (como o da Porta), mas de forma imperfeita. Gaste 10 PE, mas há chance de erro no destino." },
            { name: "Adivinhação Perfeita", desc: "Gaste 5 PE para realizar uma adivinhação. A resposta vem clara e sem ambiguidades." }
        ],
        "Sequência 3: Conhecedor": [
            { name: "Clarividência (Ver o Passado)", desc: "Ao tocar um objeto ou estar em um local, você pode gastar 12 PE para ver a cena exata de qualquer evento passado que tenha acontecido ali." },
            { name: "Clarividência (Fazer Profecia)", desc: "Você pode 'ler' o Rio do Destino para fazer uma profecia sobre o futuro de uma pessoa ou nação. Custa 15 PE e 1 Degradação de Sanidade." },
            { name: "Fragmentar Consciência", desc: "Você pode se concentrar em até 3 tarefas mentais ao mesmo tempo (analisar, decifrar, vigiar) como se fossem ações separadas. Custa 3 PE por turno." },
            { name: "Conversão de Energia", desc: "Passivo. Enquanto usa Visão Espiritual, o custo em PE de todas as suas habilidades é reduzido pela metade." }
        ],
        "Sequência 2: Sábio (Barreira do Conhecimento)": [
            { name: "Transformação em Torrente de Informação", desc: "Gaste 20 PE. Por uma cena, você pode se transformar em uma corrente de pura informação, viajando através de cabos de telégrafo, espelhos ou outros meios. Nesta forma, você é intangível." },
            { name: "Escudo do Esquecimento (Passivo)", desc: "Qualquer poder mental direcionado a você (leitura de mente, controle) é anulado, e o conjurador esquece que tentou usá-lo." },
            { name: "Invólucro do Sábio (Ativo)", desc: "Gaste 15 PE. Você invoca um avatar do Sábio Oculto, que concede Onisciência Temporária (conhece as fraquezas de todos) e Dano Cósmico (ignora resistências)." },
            { name: "Ocultar o Futuro (Ativo)", desc: "Gaste 18 PE. Você pode colocar um 'véu' sobre um evento, tornando impossível para qualquer ser prevê-lo através de adivinhação." }
        ],
        "Sequência 1: Imperador do Conhecimento": [
            { name: "Conhecimento é Poder (Empoderar)", desc: "Toque um documento. Gaste 25 PE para torná-lo um Artefato Selado de baixo nível, com poderes relacionados ao seu conteúdo." },
            { name: "Conhecimento como Arma (Injetar)", desc: "Gaste 15 PE para injetar tanto conhecimento na mente de um alvo que ela colapsa, causando 3d6 de dano e reduzindo seus atributos mentais a 1 permanentemente." },
            { name: "Abismo do Conhecimento Infinito (Habilidade Única)", desc: "Sua Forma Mítica atinge o ápice. Gaste 20 PE e 1 Vontade. Você abre um portal para o Mar do Conhecimento. Aliados ganham bônus massivos, enquanto inimigos são inundados com informação." },
            { name: "A Chave Final (Ativo)", desc: "Uso único e épico. Gaste toda a sua energia e 1d4 de Degradação de Sanidade. Você aprende o Segredo da Apoteose de um Caminho Beyonder à sua escolha (exceto o seu). Você não pode usá-lo, mas sabe o que é necessário." }
        ]
    }
};
