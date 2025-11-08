import { PathwayData } from '../../types';

export const erroData: PathwayData = {
    category: "Lord of Mysteries",
    pathway: "CAMINHO DO ERRO",
    pvBase: 5,
    pvPorAvanço: 3,
    peBase: 15,
    pePorAvanço: 5,
    vontadeBonus: 0,
    sanidade: 6,
    mecanicaUnica: {
        titulo: "Enganar o Sistema",
        items: [
            { nome: "Roubar do Ambiente", desc: "Uma vez por sessão, você pode fazer um teste de Percepção + Crime (Dif. 7) para 'encontrar' um item mundano útil em um local, mesmo que seja improvável que ele estivesse ali. Você não o cria, sua sorte o 'colocou' lá para você." },
            { nome: "Imunidade a Regras", desc: "Você é estranhamente bom em contornar regras. A dificuldade para você burlar sistemas burocráticos ou sociais diminui em 1." }
        ]
    },
    poderesInatos: [
        { seq: "9", nome: "Mãos Leves", desc: "Você ganha +2 dados em todos os testes de Crime para bater carteiras, arrombar fechaduras e prestidigitação." },
        { seq: "8", nome: "Mestre da Mentira", desc: "A dificuldade para os outros detectarem suas mentiras aumenta em 1." },
        { seq: "7", nome: "Antivírus", desc: "Ganhe +2 dados para resistir a poderes de controle mental e ilusões. Você aprendeu a 'debugar' a percepção alheia." },
        { seq: "6", nome: "Subtração", desc: "Quando você usa uma habilidade de roubo (de poder, conhecimento, etc.), a dificuldade para o alvo usar aquela habilidade roubada aumenta em 2 enquanto ela estiver com você." },
        { seq: "5", nome: "Monopólio do Conhecimento", desc: "Quando você rouba conhecimento com sucesso, o alvo temporariamente esquece aquela informação." },
        { seq: "4", nome: "Hábitos Noturnos", desc: "Você ganha visão no escuro." },
        { seq: "2", nome: "Especialista em Roubos", desc: "A dificuldade de todas as suas habilidades baseadas em roubo diminui em 1." },
        { seq: "2 - Anjo", nome: "Maestria Arcana", desc: "O custo em PE de todas as suas habilidades Beyonder (de qualquer Sequência) é permanentemente reduzido pela metade (arredondado para cima)." }
    ],
    formaMitica: {
        nome: "Relógio do Verme do Tempo",
        disponivel: "(Habilidade disponível a partir da Sequência 4)",
        ativacao: "Requer uma ação completa e causa Degradação de Sanidade e acumula Pontos de Corrupção Mítica, conforme as regras gerais do sistema.",
        descricao: "Seu corpo não se transforma, ele falha. Você se torna uma figura humanoide composta de inúmeros 'Vermes do Tempo' iridescentes, se contorcendo e formando um relógio vivo. Engrenagens fantasmagóricas e ponteiros feitos de luz se movem dentro de você, e cada 'tique' que seu corpo emite soa como um eco distorcido que perturba a mente.",
        bonus: "Sua Destreza e Inteligência aumentam em +2.",
        poderes: [
            { tipo: "Passivo", nome: "Corpo Temporal (Seq. 4)", desc: "Ataques físicos mundanos contra você têm uma alta chance de falhar. Você pode gastar 1 PE para forçar um oponente a rolar novamente um ataque bem-sucedido." },
            { tipo: "Ação", nome: "Acelerar/Retardar (Seq. 4 Requisito)", desc: "Gaste 4 PE. Você pode acelerar ou retardar um alvo. Acelerado: ele ganha uma ação extra no turno. Retardado: ele perde sua próxima ação." },
            { tipo: "Reação", nome: "Paradoxo Local (Seq. 3)", desc: "Quando alvo de um ataque, gaste 5 PE. Você troca de lugar no tempo e no espaço com uma versão de si mesmo de 1 segundo no futuro. O ataque erra e você se move para qualquer ponto a até 10 metros de distância." },
            { tipo: "Ação", nome: "Roubar Momento (Seq. 2)", desc: "Custo de 10 PE. Toque um alvo. Ele esquece completamente os últimos 5 segundos. Qualquer ação que ele tenha feito nesse tempo, você pode replicar como sua próxima ação." }
        ]
    },
    mythicalForm: {
      incomplete: { 
        tempHpBonus: 20,
        attributeBoosts: { destreza: 2, inteligencia: 1 },
        sanityCostPerTurn: "1d2", 
        abilities: [
          { name: "Passo Anômalo", desc: "Você pode dar pequenos e instantâneos 'saltos' no espaço, ignorando ataques de oportunidade e reaparecendo a até 2 metros de distância como uma ação livre." },
          { name: "Olhar que Encontra Falhas", desc: "Seu olhar percebe 'bugs' na realidade. Você ganha +2 dados em testes para encontrar fraquezas em objetos, sistemas ou argumentos." }
        ]
      },
      complete: { 
        tempHpBonus: 45,
        attributeBoosts: { destreza: 4, inteligencia: 2 },
        abilities: [
          { name: "Parasita Temporal", desc: "Ao roubar uma habilidade ou poder, você pode mantê-lo ativo por até uma hora, em vez de apenas um uso." },
          { name: "Rebobinar Pessoal", desc: "Uma vez por cena, você pode gastar 10 PE para voltar 6 segundos no tempo, afetando apenas a si mesmo para refazer uma ação." }
        ]
      }
    },
    domain: {
        description: "A magia da Falha, do Paradoxo e do poder encontrado nas brechas da realidade. O seguidor do Erro não se opõe à ordem, ele se alimenta dela.",
        particulas: [
            { name: "Paradoxon", translation: "Paradoxo", type: "Característica", conceito: "A essência da contradição lógica. Magias com esta Característica forçam dois estados opostos a existirem simultaneamente.", exemplo: "Am Locus Paradoxon (Proteger Lugar com Paradoxo) — Uma porta que está simultaneamente aberta e trancada.", uso: "An Ivi Paradoxon (Restaurar Pessoa com Paradoxo) — 'Cura' uma ferida ao mesmo tempo em que a inflige." },
            { name: "Klepsýdra", translation: "Roubo Temporal", type: "Função", conceito: "O ato de 'roubar' um conceito de um alvo e adicioná-lo a si mesmo. É uma magia parasitária e de manipulação de alto nível.", exemplo: "Klepsýdra [Habilidade] — 'Rouba' uma habilidade mundana ou um poder Beyonder simples por um breve período.", uso: "Klepsýdra Kronos (Roubar o Tempo) — O conjurador não para o tempo, mas rouba '5 segundos' do futuro imediato de um alvo." },
            { name: "Nihil", translation: "Vazio/Lacuna", type: "Objeto", conceito: "A representação das 'lacunas' e 'espaços em branco' da realidade. É o poder sobre as brechas, os erros de sistema e o nada que existe entre as coisas.", exemplo: "It Nihil (Transportar através do Vazio) — Não é um teleporte, mas um 'atalho' através do nada.", uso: "Ev Nihil (Invocar o Vazio) — Invoca uma 'bolha de nada conceitual'. Ev Nihil-Lex apagaria a Lei de um local." }
        ]
    },
    sequences: {
        "Sequência 9: Maroto": [
            { name: "Arte do Roubo", desc: "Faça um teste de Destreza + Crime. Com um sucesso, você pode roubar um objeto pequeno do bolso de alguém sem que ele perceba. Custa 2 PE." },
            { name: "Achar Brecha", desc: "Você pode fazer um teste de Percepção + Crime (Dif. 7) para encontrar a falha estrutural em uma fechadura, cofre ou sistema de segurança simples, ganhando +3 dados na sua próxima tentativa de arrombá-lo." },
            { name: "Desaparecer na Multidão", desc: "Em uma área com muitas pessoas, gaste 2 PE. Pelos próximos minutos, testes para te encontrar têm a dificuldade aumentada em 2." },
            { name: "Mãos Ágeis", desc: "Passivo. Ganhe +1 dado permanente em todos os testes de Crime." }
        ],
        "Sequência 8: Vigarista": [
            { name: "Ilusão da Fraude", desc: "Gaste 3 PE. Você cria uma ilusão visual e sonora convincente, mas simples (um maço de dinheiro falso, o som de um guarda se aproximando, a aparência de um documento forjado)." },
            { name: "Língua de Prata", desc: "Ao tentar enganar alguém, gaste 2 PE para adicionar seu rating de Manipulação como dados bônus ao seu teste de Lábia ou Enganação." },
            { name: "Golpista", desc: "Passivo. Ganhe +1 em Manipulação e -1 em Força." },
            { name: "Distração", desc: "Como uma ação, você cria uma distração chamativa. Todos os alvos que puderem ver ou ouvir devem passar em um teste de Vontade (Dif. 7) ou terão sua atenção voltada para a distração." }
        ],
        "Sequência 7: Criptologista": [
            { name: "Craquear", desc: "Gaste 1 PE por nível de complexidade. Você pode decifrar códigos, linguagens ou cifras. Faça um teste de Inteligência + Ciências." },
            { name: "Extrair Intenção", desc: "Ao ouvir uma conversa, faça um teste de Inteligência + Empatia (Dif. 8). Se tiver sucesso, você pode 'ler nas entrelinhas' e descobrir a verdadeira intenção." },
            { name: "Injetar Falha (Custo: 8 PE)", desc: "Faça um teste de Inteligência + Ocultismo vs. a Vontade de um alvo. Se vencer, você insere uma 'falha' em sua próxima ação." },
            { name: "Código Fonte", desc: "Passivo. Você aprende a 'criptografar' seus pensamentos. Poderes de leitura mental contra você têm a dificuldade aumentada em 2." },
            { name: "Definir Nome Honorífico", desc: "Com informações suficientes sobre um ser, você pode fazer um teste de Inteligência + Ocultismo para descobrir partes de seu Nome Honorífico." }
        ],
        "Sequência 6: Prometheus": [
            { name: "Sifonagem de Energia", desc: "Gaste 6 PE e toque um Beyonder. Você 'rouba' um de seus poderes ativos de nível baixo por 10 minutos." },
            { name: "Drenagem Parasitária", desc: "Toque um alvo com um ataque bem-sucedido. Em vez de causar dano normalmente, você drena sua vitalidade, causando 1d8 + Sucessos Líquidos de dano e recuperando a metade." },
            { name: "Escudo de Poder Roubado", desc: "Reação. Quando alvo de um poder Beyonder, você pode fazer um teste disputado de Espiritualidade vs Espiritualidade. Se vencer, você 'rouba' metade da energia do ataque." },
            { name: "Destreza Espiritual", desc: "Passivo. Adicione seu atributo de Destreza para calcular seus ganhos de PE por avanço de Sequência." }
        ],
         "Sequência 5: Ladrão de Sonhos": [
            { name: "Roubo de Conhecimento (Ativo)", desc: "Toque um alvo adormecido ou inconsciente e gaste 6 PE. Faça um teste de Inteligência + Lábia vs. Vontade. Se tiver sucesso, você pode 'roubar' uma informação ou memória específica." },
            { name: "Invasão Mental (Ativo)", desc: "Você entra fisicamente no sonho de um alvo adormecido. Gaste 8 PE. Você pode plantar uma ideia, causar um pesadelo ou extrair informações." },
            { name: "Espólios do Saqueador (Passivo)", desc: "Você pode guardar seus furtos em um subespaço fora da realidade, acessível apenas por você. Pode armazenar até o equivalente ao seu Inteligência x 2 em espaço." },
            { name: "Monopólio do Conhecimento (Passivo Melhorado)", desc: "Quando você rouba uma memória com sucesso, o alvo a esquece completamente por 24 horas." }
        ],
        "Sequência 4: Parasita": [
            { name: "Drenagem Sutil (Ativo)", desc: "Você pode se 'conectar' a um alvo a até 10 metros. Gaste 4 PE. Pelos próximos 3 turnos, a cada vez que o alvo gastar PE para usar uma habilidade, você recupera metade daquele valor." },
            { name: "Corpo Hospedeiro (Ativo)", desc: "Gaste 10 PE e 1 Vontade. Você se transforma em um 'espectro parasitário' e entra no corpo de um hospedeiro (não-Beyonder). Você fica dormente e indetectável." },
            { name: "Transferência de Maldição (Ativo)", desc: "Se você estiver sob um efeito negativo, você pode tocar em outra pessoa e fazer um teste de Espiritualidade vs. Vigor. Se tiver sucesso, você transfere o efeito para ela." },
            { name: "Cavalo de Tróia (Passivo)", desc: "Passivo. Se você estiver dentro de uma área protegida por uma barreira mágica, você é considerado parte do 'sistema'. Você ganha +3 dados em qualquer tentativa de sabotar ou desativar a barreira por dentro." }
        ],
        "Sequência 3: Mentor do Engano": [
            { name: "Engano Abstrato (Ativo)", desc: "Gaste 10 PE. Você pode enganar as leis da física em uma pequena área. Pode convencer a gravidade a 'esquecer' de um objeto por alguns segundos." },
            { name: "Criação de Avatar (Ativo)", desc: "Gaste 15 PE e sofra 1 Nível de Degradação de Sanidade. Você cria um clone de si mesmo que possui todos os seus conhecimentos e habilidades mundanas, mas nenhum poder Beyonder." },
            { name: "Injetar Falha (Ativo)", desc: "Gaste 8 PE. Você insere uma 'falha' em uma construção ou plano. Em um momento crucial (definido por você), a arma do inimigo irá falhar, a ponte irá ceder, etc." },
            { name: "Manipular (Passivo Melhorado)", desc: "Ganhe permanentemente +1 dado em todos os testes de Enganação, Diplomacia e Fraude." }
        ],
        "Sequência 2: Cavalo de Tróia do Destino": [
            { name: "Reiniciar Avatar (Ativo)", desc: "Se um dos seus Avatares for destruído, você pode gastar 1 Ponto de Vontade para que ele se recomponha instantaneamente em outro lugar." },
            { name: "Manipulação do Tempo (Acelerar/Retardar)", desc: "Gaste 10 PE. Você pode parar o tempo em uma área de 10m por um único segundo (que para você, são 10 segundos)." },
            { name: "Roubar Destino (Ativo)", desc: "Toque um alvo. Pela duração da cena, a sorte de vocês se inverte. Qualquer sucesso do alvo é uma falha simples. Qualquer falha sua é um sucesso moderado." },
            { name: "Reversão do Tempo (Ativo)", desc: "Uma vez por história, você pode reverter o tempo em até 1 minuto para todos em uma cena, exceto para si mesmo. Custa 25 PE e causa 1d3 Níveis de Degradação de Sanidade." }
        ],
        "Sequência 1: Verme do Tempo": [
            { name: "Bug na Realidade (Ativo)", desc: "Uso único e épico. Você encontra um 'bug' na realidade e o explora. Pode 'duplicar' um item, criar um 'save-state' de si mesmo, ou 'deletar' um evento." },
            { name: "'Isso não é um erro.' (Ativo)", desc: "Uma vez por sessão, se você cometer uma Falha Crítica, pode gastar 1 ponto de Vontade para declarar: 'Isso não é um erro, é uma característica.' O Narrador reinterpreta a falha." }
        ]
    }
};