import { PathwayData } from '../../types';

export const visionarioData: PathwayData = {
    category: "God Almighty",
    pathway: "CAMINHO DO VISIONÁRIO",
    pvBase: 5,
    pvPorAvanço: 3,
    peBase: 20,
    pePorAvanço: 6,
    vontadeBonus: 2,
    sanidade: 8,
    mecanicaUnica: {
        titulo: "Terapia Arcana (O Divã do Visionário)",
        items: [
            { nome: "Diagnosticar a Psique", desc: "Com um teste de Percepção + Ocultismo, você pode analisar a aura mental de uma pessoa e diagnosticar suas Perturbações Mentais, fobias ou a fonte de sua perda de Sanidade." },
            { nome: "Cirurgia Mental", desc: "Você pode guiar um personagem em uma sessão de 'terapia' para tentar curar a Degradação de Sanidade. Isso requer um ritual de uma hora e um teste disputado de Inteligência + Medicina (Psicologia) vs. Dificuldade do Trauma. Sucesso: O paciente recupera 1 ponto de Sanidade Máxima. Falha Crítica: Você acidentalmente absorve parte do trauma do paciente." }
        ]
    },
    poderesInatos: [
        { seq: "9", nome: "Espectador", desc: "A menos que você interaja diretamente, as pessoas tendem a não notar sua presença, como se você fosse parte do cenário. Você tem +2 dados em testes de Furtividade para se esconder à vista de todos." },
        { seq: "8", nome: "Mente Resiliente", desc: "Você ganha +2 em Vontade para resistir a poderes que tentam controlar ou ler sua mente." },
        { seq: "7", nome: "Autocontrole", desc: "Ganhe imunidade a efeitos que causem emoções de medo ou fúria." },
        { seq: "6", nome: "Corpo e Mente", desc: "Seus ataques mentais começam a afetar o físico. 50% do dano de Sanidade que você causa se manifesta como dano de Vitalidade real (hematomas, sangramentos nasais), o chamado dano psicossomático." },
        { seq: "5", nome: "Mestre da Imaginação", desc: "Seus poderes de ilusão se tornam mais convincentes. A dificuldade para os outros resistirem às suas ilusões aumenta em 1." },
        { seq: "4", nome: "Realeza das Raças", desc: "Seu controle mental se torna tão refinado que afeta a própria biologia. Você pode desenvolver escamas ilusórias para proteção ou usar um olhar para acalmar um animal feroz." },
        { seq: "2", nome: "Realidade Parallax", desc: "Sua mera presença distorce sutilmente a percepção alheia. Ataques contra você têm 10% de chance de simplesmente errar, como se o atacante tivesse mirado em uma ilusão." },
        { seq: "2 - Anjo", nome: "Maestria Arcana", desc: "O custo em PE de todas as suas habilidades Beyonder (de qualquer Sequência) é permanentemente reduzido pela metade (arredondado para cima)." }
    ],
    formaMitica: {
        nome: "Dragão da Mente",
        disponivel: "(Habilidade disponível a partir da Sequência 4)",
        ativacao: "Requer uma ação completa e causa Degradação de Sanidade e acumula Pontos de Corrupção Mítica, conforme as regras do sistema.",
        descricao: "Seu corpo não se transforma em carne, mas em um construto psíquico. Você se torna um dragão majestoso, com escamas feitas de fragmentos de pensamentos e cristal cinzento. Seus olhos são sóis dourados que irradiam uma luz hipnótica. Asas etéreas, tecidas de pura névoa psíquica, se estendem de suas costas, e sua cauda se dissolve em fios de pensamentos tangíveis.",
        bonus: "Sua Percepção e sua Presença (para poderes mentais) aumentam em +2.",
        poderes: [
            { tipo: "Passivo", nome: "Mente Soberana (Seq. 4)", desc: "Enquanto nesta forma, você é imune a todos os poderes de ilusão e controle mental de nível de Semideus ou inferior. Você pode fazer um teste de Percepção + Ocultismo para ver a 'verdadeira forma' dos seres ao seu redor." },
            { tipo: "Ação", nome: "Hipnose Dourada (Seq. 4 Requisito)", desc: "Gaste 6 PE. Todos os inimigos que fizerem contato visual com você devem passar em um teste de Vontade (Dif. 8) ou ficarão Fascinados por 3 turnos, obedecendo a comandos simples." },
            { tipo: "Ação", nome: "Invasão do Mundo Mental (Seq. 3)", desc: "Custo 10 PE. Você arrasta a consciência de um alvo para um duelo psíquico. É um teste disputado de Vontade vs Vontade. O perdedor sofre 3d10 de dano [Mental] direto à sua Sanidade." },
            { tipo: "Reação", nome: "Pesadelo Manifesto (Seq. 2)", desc: "Quando um inimigo sente medo, gaste 5 PE. Você dá forma ao medo dele, criando uma criatura de pesadelo que o ataca por um turno." }
        ]
    },
    mythicalForm: {
      incomplete: { 
        tempHpBonus: 20,
        attributeBoosts: { percepcao: 2, inteligencia: 1 },
        sanityCostPerTurn: "1d2", 
        abilities: [
          { name: "Sussurros Invasivos", desc: "Você pode projetar um pensamento simples na mente de um alvo, que o perceberá como uma ideia sua, mas não como um comando." },
          { name: "Paisagem Onírica Sutil", desc: "Você pode alterar levemente a percepção sensorial do ambiente de um alvo (cheiros, sons, pequenas ilusões visuais)." }
        ]
      },
      complete: {
        tempHpBonus: 40,
        attributeBoosts: { percepcao: 4, inteligencia: 2 },
        abilities: [
          { name: "Realidade Psíquica", desc: "Você pode manifestar uma de suas ilusões como um objeto físico temporário (dura 3 turnos), com a solidez de madeira." },
          { name: "Controle de Sonhos Coletivo", desc: "Você pode entrar e manipular os sonhos de múltiplos alvos (até o seu valor de Inteligência) simultaneamente, conectando-os em um sonho compartilhado." }
        ]
      }
    },
    domain: {
        description: "A magia da Mente, da Percepção e da paisagem onírica. Para um Visionário, a realidade objetiva é apenas um consenso frágil; o verdadeiro campo de batalha é o subconsciente.",
        particulas: [
            { name: "Hypnos", translation: "Sonho", type: "Objeto/Característica", conceito: "A essência dos sonhos e do subconsciente. Permite ao Visionário tratar o mundo onírico como um lugar real e tangível.", exemplo: "Et Hypnos (Controlar Sonho) — Molda a paisagem e os eventos dentro do sonho de um alvo adormecido.", uso: "Ev Hypnos Itam (Invocar Sonho Inerte) — Materializa uma criatura de pesadelo no mundo físico, vinculada a um 'gatilho'." },
            { name: "Placidus", translation: "Placidez", type: "Função", conceito: "A antítese do caos mental. Esta Função não força, mas acalma e organiza a mente. É o poder da psiquiatria arcana.", exemplo: "Placidus Ivi Miasma (Aplacar Pessoa com Corrupção Mental) — Estabiliza um personagem à beira da insanidade.", uso: "Placidus Pneuma (Aplacar Espírito) — Acalma um fantasma violento." },
            { name: "Eidolon", translation: "Avatar Psíquico", type: "Objeto", conceito: "O poder de projetar a própria consciência ou manifestar pensamentos como avatares semi-reais.", exemplo: "It Eidolon (Transportar Avatar Psíquico) — Permite viajar pelo mundo como um 'fantasma' invisível.", uso: "Ev Eidolon Imu (Criar Avatar Psíquico da Mente) — Invoca um 'dragão mental' para atacar a mente de seus inimigos." }
        ]
    },
    sequences: {
        "Sequência 9: Espectador": [
            { name: "Análise de Linguagem Corporal", desc: "Faça um teste de Percepção + Empatia. Você pode ler a linguagem corporal de alguém para deduzir seu estado emocional ou saber se está mentindo." },
            { name: "Observação Passiva", desc: "Você é um mestre em não ser notado. Em uma multidão, testes para te encontrar têm a dificuldade aumentada em 2." },
            { name: "Identificar Padrões Emocionais (Passivo)", desc: "Ao interagir com um indivíduo por pelo menos um minuto, você é capaz de notar padrões sutis em suas emoções ou pensamentos." },
            { name: "Visão Periférica", desc: "Passivo. Ganhe +2 dados em testes de Percepção para notar detalhes em seu campo de visão." },
            { name: "Ilusão Auditiva Direcionada (Ativo)", desc: "Gaste 2 PE. Você cria um som específico que apenas um único alvo percebe. Usado para distrações pontuais ou para plantar uma dúvida sutilmente." },
            { name: "Perfil de Base", desc: "Após observar alguém por 5 minutos, você pode fazer um teste de Inteligência + Empatia para criar um 'perfil' da personalidade dele, sabendo seus gatilhos e prováveis reações." }
        ],
        "Sequência 8: Telepata": [
            { name: "Sonda Mental", desc: "Gaste 3 PE para tentar ler os pensamentos superficiais de um alvo. Requer um teste disputado de Inteligência + Lábia vs. Vontade do alvo." },
            { name: "Sussurro Mental", desc: "Gaste 2 PE. Você pode enviar uma mensagem telepática curta (até 10 palavras) para qualquer pessoa em seu campo de visão." },
            { name: "Induzir Pensamento Superficial (Ativo)", desc: "Gaste 3 PE. Você toca um alvo. Se tiver sucesso em um teste de Manipulação + Empatia (Dif. 7), você pode 'plantar' um pensamento muito simples e neutro em sua mente." },
            { name: "Escudo Mental", desc: "Como reação, gaste 1 PE para erguer uma barreira psíquica. Ganhe +3 dados para resistir a uma única intrusão mental." },
            { name: "Filtro Empático (Passivo)", desc: "Você se torna mais resistente à sobrecarga emocional de outros. Ganha +1 dado em testes de Vontade para resistir aos seus efeitos imediatos." },
            { name: "Autopreservação Psíquica", desc: "Passivo. Você sente instintivamente quando alguém está tentando usar um poder em você, mesmo que não haja sinais visíveis." }
        ],
        "Sequência 7: Psiquiatra": [
            { name: "Aplacar", desc: "Gaste 4 PE. Você pode acalmar uma pessoa que esteja em um estado de pânico, fúria ou medo extremo. Faça um teste de Manipulação + Medicina para trazê-la de volta à razão." },
            { name: "Quebra de Memória Recente (Ativo)", desc: "Gaste 4 PE. Ao tocar um alvo, faça um teste disputado de Inteligência + Lábia vs. Vontade do alvo. Se vencer, o alvo temporariamente 'esquece' os últimos 10 segundos de eventos." },
            { name: "Terapia Onírica (Ativo)", desc: "Gaste 3 PE e passe 10 minutos em Meditação com um alvo disposto. Faça um teste de Percepção + Medicina (Psicologia) (Dif. 7) para identificar e ajudar o alvo a verbalizar uma preocupação oculta." },
            { name: "Vontade Dracônica", desc: "Gaste 4 PE e olhe nos olhos de um alvo. Ele deve passar em um teste de Vontade (Dif. 7) ou sentirá um Pavor sobrenatural, sofrendo -2 em todas as suas ações por 3 turnos." },
            { name: "Perfurar Consciência", desc: "Seus ataques mentais são precisos. Se você causar dano de Sanidade a um alvo, pode gastar +2 PE para que ele perca sua próxima ação, atordoado pelo choque psíquico." },
            { name: "Ataque Psíquico", desc: "Gaste 3 PE para lançar um 'parafuso' de força mental que causa 2d8+Sucessos líquidos de dano de contusão (dano de Sanidade em alvos suscetíveis)." }
        ],
        "Sequência 6: Hipnotizador": [
            { name: "Hipnose de Batalha", desc: "Gaste 4 PE. Você coloca um alvo em transe por 2 turnos (se ele falhar em um teste de Vontade). Em transe, você pode dar a ele uma única instrução hipnótica que ele seguirá." },
            { name: "Desviar Trauma (Ativo)", desc: "Gaste 5 PE. Toque um alvo que está sofrendo de Trauma Psicológico ou Perturbação Mental. Se tiver sucesso em um teste de Inteligência + Empatia (Dif. 8), você pode 'desviar' temporariamente a origem da penalidade por uma cena." },
            { name: "Invisibilidade Psicológica", desc: "Gaste 3 PE por minuto. Você emana uma aura que faz com que as pessoas simplesmente 'não te notem'. Elas te veem, mas suas mentes não registram sua presença." },
            { name: "Induzir Sono", desc: "Toque um alvo. Gaste 5 PE. Ele deve fazer um teste de Vigor (Dif. 8) ou cairá em um sono profundo e sem sonhos por uma hora." },
            { name: "Memória Falsa", desc: "Você pode gastar 1 Ponto de Vontade e 10 minutos para implantar uma memória falsa convincente em um alvo disposto ou contido." },
            { name: "Semiótica Onírica (Passivo)", desc: "Sua mente Hipnotizadora pode reconhecer e interpretar pequenos símbolos que se manifestam naturalmente em sonhos de outros, como indicações de medos ou desejos." }
        ],
        "Sequência 5: Andarilho dos Sonhos": [
            { name: "Travessia dos Sonhos (Ativo)", desc: "Gaste 4 PE. Você pode projetar sua consciência para dentro do sonho de uma pessoa adormecida, não importa a distância." },
            { name: "Santuário da Consciência (Ativo)", desc: "Gaste 10 PE e 1 Ponto de Vontade. Crie um pequeno espaço seguro no Mundo da Mente por 1 cena. Dentro, todos os Beyonders recebem +1 dado em testes de Vontade para resistir a Perda de Sanidade." },
            { name: "Construção Onírica (Ativo)", desc: "Dentro de um sonho (seu ou de outro), você pode gastar PE para manifestar objetos, criaturas ou alterar o ambiente." },
            { name: "Caminho pelo Mar da Consciência (Ativo)", desc: "Uma vez dentro de um sonho, você pode gastar 5 PE para 'pular' para o sonho de outra pessoa que o sonhador conheça." },
            { name: "Sonho Lúcido (Passivo)", desc: "Você está sempre ciente de quando está sonhando e tem controle total sobre seus próprios sonhos." },
            { name: "Visão do Pesadelo Primal (Ativo)", desc: "Gaste 12 PE. Você pode focar em um alvo que tenha presenciado ou infligido um Trauma Psicológico severo para visualizar o Gatilho de Perda de Controle associado." }
        ],
        "Sequência 4: Manipulador": [
            { name: "Manipulação do Subconsciente (Ativo)", desc: "Gaste 10 PE e 1 Vontade. Você pode alcançar diretamente o subconsciente de um alvo acordado, implantando uma compulsão ou comando." },
            { name: "Induzir Paranóia Suave (Ativo)", desc: "Gaste 8 PE e 1 Ponto de Vontade. Toque um alvo. Se vencer um teste disputado, o alvo desenvolve uma paranóia muito sutil em relação a um detalhe inocente do ambiente." },
            { name: "Teia Psíquica (Ativo)", desc: "Gaste 8 PE para criar uma 'teia' de conexão mental entre você e até 5 aliados voluntários por uma cena." },
            { name: "Leitura Profunda (Ativo)", desc: "Você pode ler memórias inteiras e segredos profundos, não apenas pensamentos superficiais. Requer contato físico e um teste difícil." },
            { name: "Tecelão de Eco (Ativo)", desc: "Gaste 6 PE. Você cria um 'eco' etéreo de uma habilidade social ou mental usada por outro Beyonder na última cena e pode replicá-la." },
            { name: "Acalmar Espírito (Passivo Melhorado)", desc: "Sua habilidade de Aplacar (Seq. 7) agora é muito mais potente. Com um toque, você pode suprimir a Besta Interior ou a Corrupção de outro Beyonder por um curto período." }
        ],
        "Sequência 3: Tecelão de Sonhos": [
            { name: "Tecelagem dos Sonhos (Ativo)", desc: "Gaste 15 PE. Você pode puxar um alvo acordado para um 'cenário onírico' indistinguível da realidade." },
            { name: "Pintar Realidade Compartilhada (Ativo)", desc: "Gaste 15 PE. Escolha uma área (5m de raio) e pode 'colorir' ou 'esculpir' elementos dessa realidade compartilhada (ex: mudar a cor da parede, criar a ilusão de cheiro de café)." },
            { name: "Labirinto dos Sonhos (Ativo)", desc: "Gaste 12 PE para prender a consciência de um grupo de inimigos em um labirinto mental. Eles ficam catatônicos no mundo real." },
            { name: "Ver através dos Olhos (Ativo)", desc: "Você pode se conectar a qualquer pessoa em seu campo de visão e ver o mundo através de seus olhos por um minuto." },
            { name: "Olhar Dracônico (Passivo)", desc: "Sua habilidade de ler mentes está permanentemente ativa, mas só funciona com quem faz contato visual direto com você." }
        ],
        "Sequência 2: Discernidor": [
            { name: "Catedral dos Desejos (Ativo)", desc: "Gaste 20 PE para conectar as mentes de todos em uma vasta área em um 'Mundo Mental Coletivo'. Dentro deste plano, você define as regras." },
            { name: "Profecia (Ativo)", desc: "Você pode tecer os sonhos coletivos da humanidade para escrever uma 'profecia'. A profecia se manifestará na realidade, mas muitas vezes de formas inesperadas." },
            { name: "Manifestar Sonho (Ativo)", desc: "Gaste 15 PE e 1 Ponto de Vontade. Você pode puxar um objeto ou criatura de um de seus sonhos e torná-lo real por uma cena." },
            { name: "Dominar o Mar da Consciência (Passivo)", desc: "Você não precisa mais de um 'sonho' como ponte. Você pode navegar livremente pelo mar do subconsciente coletivo." }
        ],
        "Sequência 1: Autor": [
            { name: "Autor da Realidade (Ativo)", desc: "Gaste 30 PE e 1d3 de Degradação de Sanidade para escrever uma 'profecia' ou 'capítulo' sobre um grupo de pessoas, e elas são compelidas pelo destino a seguir aquele roteiro." },
            { name: "Domínio do Mundo Mental (Habilidade Única)", desc: "Com um grande gasto de poder, você pode fundir as mentes de todos os inimigos em um alcance massivo, criando um Mundo Mental Coletivo temporário onde você é o deus absoluto." },
            { name: "Realidade como Sonho (Passivo)", desc: "Para você, a linha entre sonho e realidade se foi. Você pode sutilmente 'puxar' características do sonho para o mundo real sem custo." },
            { name: "Apagar Personagem (Ativo)", desc: "Uso único e épico. Gaste 50 PE e toda a sua Vontade. Você, como o 'Autor' da realidade, pode 'apagar' um personagem não-divino da existência." }
        ]
    }
};