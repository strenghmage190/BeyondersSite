import { PathwayData } from '../../types';

export const torreBrancaData: PathwayData = {
    category: "God of Knowledge and Wisdom",
    pathway: "CAMINHO DA TORRE BRANCA",
    pvBase: 5,
    pvPorAvanço: 3,
    peBase: 20,
    pePorAvanço: 6,
    vontadeBonus: 2,
    sanidade: 8,
    mecanicaUnica: {
        titulo: "A Mente Analítica",
        items: [
            { nome: "Dedução Lógica", desc: "Uma vez por sessão, você pode fazer uma pergunta ao Narrador sobre um mistério ou problema lógico. Ele não lhe dará a resposta, mas sim um conjunto de 'fatos' ou 'variáveis' que sua mente percebeu e que o ajudarão a deduzir a solução por si mesmo." },
            { nome: "Memória Perfeita", desc: "Você tem memória fotográfica. Não precisa de teste para lembrar de algo que já viu ou leu." }
        ]
    },
    poderesInatos: [
        { seq: "9", nome: "Entusiasta", desc: "Ganhe +2 dados em todos os testes envolvendo livros e pesquisa." },
        { seq: "8", nome: "Processo Lógico", desc: "Ganhe +2 dados em testes de Investigação para conectar pistas e resolver quebra-cabeças." },
        { seq: "7", nome: "Olhar Afiado", desc: "Ganhe +2 dados em testes de Percepção para notar detalhes pequenos ou escondidos." },
        { seq: "6", nome: "Prodígio", desc: "Você pode usar qualquer perícia de Conhecimento que não possua como se tivesse 1 ponto nela." },
        { seq: "5", nome: "Teoria Mágica", desc: "Você entende a estrutura da magia tão bem que ganha +2 dados para identificar e resistir a feitiços." },
        { seq: "4", nome: "Acadêmico", desc: "Você se torna um mestre do conhecimento. A dificuldade para todos os seus testes baseados em Inteligência diminui em 1." },
        { seq: "2", nome: "Faro de Informações", desc: "Você pode sentir quando há um segredo ou informação importante a ser descoberta em um local, mesmo que não haja pistas visíveis." },
        { seq: "2 - Anjo", nome: "Maestria Arcana", desc: "O custo em PE de todas as suas habilidades Beyonder (de qualquer Sequência) é permanentemente reduzido pela metade (arredondado para cima)." }
    ],
    formaMitica: {
        nome: "Estantes Ilusórias do Caos",
        disponivel: "(Habilidade disponível a partir da Sequência 4)",
        ativacao: "Requer uma ação completa e tem um custo progressivo de Degradação de Sanidade.",
        descricao: "Seu corpo se dissolve em uma biblioteca etérea, um construto de estantes de luz e sombras líquidas. Cada livro flutuante é um fragmento de conhecimento.",
        bonus: "Sua Inteligência aumenta em +3.",
        poderes: [
            { tipo: "Poder", nome: "Conhecimento Absoluto (Seq. 4)", desc: "Você ganha Conhecimento Absoluto, sabendo qualquer fato que esteja escrito em algum livro do mundo. Pode usar a Análise da Essência (gasta 4 PE) para decifrar completamente a alma de um inimigo." },
            { tipo: "Poder", nome: "Visão das Fibras da Realidade (Seq. 3)", desc: "Ganha acesso à Visão das Fibras da Realidade, um poder de ação que custa 8 PE. Permite manipular as regras da realidade, seja para Desfiar (destruir barreiras) ou Reorganizar (cura 2d10)." },
            { tipo: "Poder", nome: "Profecia do Eterno Retorno (Seq. 2)", desc: "Ganha a Profecia do Eterno Retorno, uma habilidade de reação. Uma vez por cena, se você estiver para ser alvo de um ataque surpresa, tem uma premonição e pode agir para evitá-lo completamente." }
        ]
    },
    mythicalForm: {
      incomplete: { 
        tempHpBonus: 25,
        attributeBoosts: { inteligencia: 3 },
        sanityCostPerTurn: "1",
        abilities: [
          { name: "Análise Instantânea", desc: "Você pode gastar 3 PE para analisar um objeto ou pessoa, aprendendo um fato crucial sobre ele (uma fraqueza, um segredo, sua função)." },
          { name: "Cálculo de Probabilidade", desc: "Ao observar uma situação se desenrolar, você pode gastar 2 PE para perguntar ao Narrador qual é o resultado mais provável." }
        ]
      },
      complete: {
        tempHpBonus: 50,
        attributeBoosts: { inteligencia: 5 },
        abilities: [
          { name: "Acesso à Biblioteca Universal", desc: "Uma vez por transformação, você pode fazer uma pergunta complexa e obter uma resposta precisa e detalhada, como se tivesse consultado uma vasta biblioteca." },
          { name: "Reescrita Lógica", desc: "Gaste 15 PE. Você pode reescrever uma lei da lógica ou da física em uma pequena área por uma cena (ex: 'Neste quarto, o fogo congela', 'As palavras ditas aqui são esquecidas')." }
        ]
      }
    },
    domain: {
        description: "A magia do Conhecimento absoluto, da Lógica inflexível e da Razão pura. Um Sábio da Torre Branca não vê o universo como mágico, mas como um sistema complexo e perfeitamente decifrável.",
        particulas: [
            { name: "Logos", translation: "Lógica/Razão", type: "Característica", conceito: "A estrutura lógica fundamental da realidade. É o poder que governa as leis naturais e arcanas, e permite a sua compreensão e manipulação.", exemplo: "Il Exa Logos (Revelar Inanimado com Lógica) — Analisa instantaneamente a estrutura de um mecanismo, revelando seu propósito e funcionamento.", uso: "In Ala Kaos-Logos (Enfraquecer Abstrato Caos com Lógica) — Impõe uma ordem temporária a um efeito caótico, forçando um resultado aleatório a se tornar o mais provável." },
            { name: "Analysis", translation: "Análise", type: "Função", conceito: "O ato de desconstruir qualquer sistema em suas partes componentes, sejam elas físicas, metafísicas ou psicológicas. É a Função da dedução e da dissecação.", exemplo: "Analysis [Feitiço Alvo] — Desmonta um feitiço ativo, revelando sua Função, Objeto e Características constituintes e, portanto, sua fraqueza.", uso: "Analysis Ani (Análise da Alma) — Realiza uma 'necrópsia espiritual' em uma pessoa viva, deduzindo sua Sequência Beyonder." },
            { name: "Sophia", translation: "Sabedoria", type: "Função", conceito: "O poder de acessar e aplicar conhecimento universal. Não é adivinhar o futuro, mas deduzir a resposta 'correta' ou a solução 'ótima' para qualquer problema com base em todos os dados disponíveis.", exemplo: "Sophia Azi (Sabedoria da Informação) — Ao se deparar com um enigma ou código, esta Função concede um vislumbre da chave para resolvê-lo.", uso: "Sophia Fatum (Sabedoria do Destino) — Permite analisar as linhas de probabilidade de um evento e identificar a cadeia de ações exata que levará ao resultado desejado." }
        ]
    },
    sequences: {
        "Sequência 9: Leitor": [
            { name: "Sabedoria dos Livros", desc: "Gaste 1 PE e faça um teste de Inteligência para lembrar de algo útil que leu, ganhando um bônus de +2 dados." },
            { name: "Compreensão Rápida", desc: "Você pode ler e entender textos em qualquer idioma, desde que tenha um dicionário como referência." },
            { name: "Crítica Literária", desc: "Faça um teste de Inteligência + Acadêmicos para saber se um texto é falso ou contém mensagens codificadas." },
            { name: "Rato de Biblioteca", desc: "A dificuldade para encontrar informações em arquivos ou bibliotecas diminui em 1." }
        ],
        "Sequência 8: Estudante do Raciocínio": [
            { name: "Olho Clínico", desc: "Gaste 1 PE e passe um turno observando. Faça um teste de Percepção + Investigação para notar um detalhe crucial sobre o ambiente ou uma pessoa." },
            { name: "Dedução Acelerada", desc: "Gaste 3 PE para conectar duas pistas de um mistério, recebendo uma dica do Narrador sobre sua relação." },
            { name: "Perfil Psicológico", desc: "Passivo. Após uma breve conversa, ganhe +2 dados em testes para prever as reações sociais de alguém." },
            { name: "Cálculo Avançado", desc: "Passivo. Ganhe +3 dados em testes de matemática complexa." }
        ],
        "Sequência 7: Detetive": [
            { name: "Mente Estratégica", desc: "No início de um combate, gaste 4 PE. Você e seus aliados que seguirem seu plano tático ganham +2 na Iniciativa." },
            { name: "Lógica Dedutiva", desc: "Ao analisar 3 pistas, faça um teste de Inteligência + Investigação para deduzir corretamente o que aconteceu." },
            { name: "Encontrar Padrão", desc: "Passivo. Se um inimigo usar a mesma tática duas vezes, na terceira vez você o antecipa e ganha +3 dados para se defender." },
            { name: "Análise de Fraqueza", desc: "Gaste 3 PE e observe um oponente por um turno para identificar uma de suas fraquezas físicas ou mentais." }
        ],
        "Sequência 6: Polímata": [
            { name: "Mímica", desc: "Gaste 4 PE e observe um poder Beyonder ser usado. Com um teste de Inteligência + Ocultismo, você pode replicar aquele poder uma única vez." },
            { name: "Capacidade de Aprendizado", desc: "Passivo. O custo em Pontos de Atuação (PA) para aumentar suas perícias de Conhecimento é permanentemente reduzido pela metade." },
            { name: "Conhecimento é Poder", desc: "Você pode canalizar seu entendimento sobre um assunto para criar 'manuais' ou 'teses'. Gaste 10 PAs e uma semana de pesquisa para criar um manual sobre uma criatura, poder ou Caminho." },
            { name: "Mimetismo de Combate", desc: "Após observar um lutador por uma cena, você pode imitar seu estilo, usando temporariamente a mesma perícia de arma que ele." }
        ],
        "Sequência 5: Magister": [
            { name: "Magia Inventiva (Ativo)", desc: "Sua compreensão das leis místicas permite que você crie feitiços. Gaste 8 PE e faça um teste de Inteligência + Ocultismo para criar um efeito mágico de baixo nível que dura por uma cena." },
            { name: "Misticismo Analítico (Passivo)", desc: "Você pode analisar a estrutura de um feitiço ou ritual enquanto ele é realizado. Com um teste de Percepção + Ocultismo, pode descobrir seu propósito, custo e uma possível forma de neutralizá-lo." },
            { name: "Eficiente (Passivo)", desc: "O custo de materiais para qualquer feitiçaria ritualística que você realizar é reduzido pela metade." },
            { name: "Ritualismo Aplicado a Magia (Ativo)", desc: "Ao usar sua Magia Inventiva, você pode escolher aplicar o componente 'Preço de Sangue', sofrendo 1 nível de dano Letal para aumentar a parada de dados do seu feitiço em 2 dados." }
        ],
        "Sequência 4: Profeta": [
            { name: "Visão do Destino (Ativo)", desc: "Gaste 6 PE. Você tem uma visão clara de um evento futuro que acontecerá nas próximas horas. A visão é garantida, mas interpretá-la corretamente pode exigir um teste de Raciocínio." },
            { name: "Análise do Provável (Ativo)", desc: "Faça uma pergunta ao Narrador sobre o resultado mais provável de uma ação ('O que aconteceria se eu atacasse o guarda?'). O Narrador deve responder honestamente. Custa 5 PE." },
            { name: "Anular Profecia (Reação)", desc: "Gaste 10 PE e 1 Ponto de Vontade para interferir no destino. Você pode anular uma adivinhação ou profecia de nível inferior que tenha você ou um aliado como alvo." },
            { name: "Leitura do Caos (Ativo)", desc: "Sua mente analítica se torna tão poderosa que você pode 'ler' o caos. Compreende qualquer idioma, código ou ritual automaticamente. Custa 3 PE por turno de uso." }
        ],
        "Sequência 3: Conhecedor": [
            { name: "Percepção Arcana (Passivo)", desc: "Sua mente está permanentemente sintonizada com as leis do universo. Você pode 'ver' os princípios arcanos que regem pessoas, lugares e objetos." },
            { name: "Visão do Passado (Ativo)", desc: "Toque um objeto e gaste 8 PE. Você pode ver uma cena importante de seu passado. A clareza da visão depende do quão antigo e poderoso é o objeto." },
            { name: "Analisar Estrutura de Poder (Ativo)", desc: "Gaste 12 PE. Você olha para um Beyonder e, com um teste de Inteligência + Ocultismo, pode identificar seu Caminho e sua Sequência exata." },
            { name: "Teia de Conhecimento (Ativo)", desc: "Você pode conectar sua mente à 'biblioteca do cosmos' por um minuto. Você ganha acesso temporário a todas as perícias de Conhecimentos como se tivesse 3 pontos em cada uma. Custa 10 PE e 1 Vontade." }
        ],
        "Sequência 2: Sábio (Barreira do Conhecimento)": [
            { name: "Transformação em Torrente de Informação", desc: "Gaste 20 PE. Por uma cena, você pode se transformar em uma corrente de pura informação, viajando através de cabos de telégrafo, espelhos ou outros meios. Nesta forma, você é intangível." },
            { name: "Escudo do Esquecimento (Passivo)", desc: "Qualquer poder mental direcionado a você (leitura de mente, controle) é anulado, e o conjurador esquece que tentou usá-lo." },
            { name: "Invólucro do Sábio (Ativo)", desc: "Gaste 15 PE. Você invoca um avatar do Sábio Oculto, que concede Onisciência Temporária (conhece as fraquezas de todos) e Dano Cósmico (ignora resistências)." },
            { name: "Ocultar o Futuro (Ativo)", desc: "Gaste 18 PE. Você pode colocar um 'véu' sobre um evento, tornando impossível para qualquer ser prevê-lo através de adivinhação." }
        ],
        "Sequência 1: Imperador do Conhecimento": [
            { name: "Olho Onisciente (Ativo)", desc: "Gaste 20 PE por segundo de uso. Você vê TUDO sobre um único alvo. Sua história, segredos, poderes, fraquezas, destino. O uso prolongado causa Degradação de Sanidade." },
            { name: "Conhecimento como Arma (Ativo)", desc: "Gaste 15 PE. Você injeta conhecimento diverso e contraditório na mente de um alvo. Ele deve fazer um teste de Inteligência (Dif. 10) ou sua mente entra em colapso, causando 3d6 de dano." },
            { name: "Avatar do Caos Mental (Ativo)", desc: "Habilidade única. Por 3 rodadas, você pode se tornar um avatar do conhecimento, sabendo a resposta para qualquer pergunta e alterando leis físicas locais. (Custo: 12 PE e Degradação de Sanidade permanente)." },
            { name: "A Palavra Final (Ativo)", desc: "Uso único e épico. Gaste 30 PE e toda a sua Vontade. Você aprende e pronuncia o 'Conceito Verdadeiro' de um objeto ou criatura não-divina, ganhando controle absoluto sobre ele pelo resto da cena." }
        ]
    }
};