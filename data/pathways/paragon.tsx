import { PathwayData } from '../../types';

export const paragonData: PathwayData = {
    category: "Key of Light",
    pathway: "CAMINHO DO PARAGON",
    pvBase: 5,
    pvPorAvanço: 3,
    peBase: 10,
    pePorAvanço: 4,
    vontadeBonus: 1,
    sanidade: 8,
    mecanicaUnica: {
        titulo: "A Forja do Gênio (Criação de Itens)",
        items: [
            { nome: "Recursos e Diagramas", desc: "Para criar, um Paragon precisa de Recursos (metais raros, reagentes alquímicos, componentes espirituais) e um Diagrama (um projeto, que pode ser encontrado, pesquisado ou inventado). A qualidade dos recursos e a complexidade do diagrama definem a Dificuldade da criação." },
            { nome: "O Teste de Criação", desc: "A criação de um item requer um teste estendido de Inteligência + Ofícios (Engenharia/Alquimia/etc.). O número de sucessos necessários depende da complexidade do item (um amuleto simples pode precisar de 5 sucessos, enquanto uma armadura autômato pode precisar de 20). Cada rolagem representa um dia de trabalho na oficina." },
            { nome: "Pontos de Gênio (PG)", desc: "Sua reserva de PG é igual ao seu atributo de Inteligência. Você os recupera quando tem um 'momento eureca'. Uso: Você pode gastar 1 PG para adicionar três (3) sucessos automáticos a um teste de criação, representando um surto de genialidade que resolveu um problema complexo." }
        ]
    },
    poderesInatos: [
        { seq: "9", nome: "Memória Fotográfica", desc: "Você nunca esquece um detalhe, diagrama ou fato que tenha visto ou lido." },
        { seq: "8", nome: "Especialista em Reconstrução", desc: "Você ganha +2 dados em testes para consertar itens quebrados, mundanos ou místicos." },
        { seq: "7", nome: "Olhar Afiado", desc: "Você pode avaliar a qualidade de um item e suas falhas estruturais com um simples olhar. A dificuldade para você sabotar um objeto diminui em 1." },
        { seq: "6", nome: "Síntese Complexa", desc: "Ao criar um artefato, você pode tentar adicionar uma função extra ou remover um efeito colateral negativo com um aumento moderado na dificuldade do teste de criação." },
        { seq: "5", nome: "Afinidade Estelar", desc: "Sua compreensão do cosmos se aprofunda. Você ganha +2 dados em testes relacionados a astrologia, navegação e materiais cósmicos." },
        { seq: "4", nome: "Criança de Da Vinci", desc: "Você é um polímata. Uma vez por sessão, você pode rolar um teste usando sua Inteligência no lugar de qualquer outro atributo, justificando com uma solução engenhosa e lógica." },
        { seq: "2", nome: "Exploração de Ruínas", desc: "Seu senso de perigo se aplica a estruturas. Você pode detectar instintivamente armadilhas mecânicas, pontos fracos em edifícios e passagens secretas com um teste de Percepção + Investigação." },
        { seq: "2 - Anjo", nome: "Maestria Arcana", desc: "O custo em PE de todas as suas habilidades Beyonder (de qualquer Sequência) é permanentemente reduzido pela metade (arredondado para cima)." }
    ],
    formaMitica: {
        nome: "Arquitetônica da Razão Pura",
        disponivel: "(Habilidade disponível a partir da Sequência 4)",
        ativacao: "Requer uma ação completa e causa Degradação de Sanidade e acumula Pontos de Corrupção Mítica, conforme as regras gerais do sistema.",
        descricao: "Seu corpo não se torna carne ou espírito, mas sim um construto de lógica perfeita e tecnologia impossível. Você se transforma em uma figura humanoide composta de membros biomecânicos, revestidos de ligas alienígenas e metal líquido. Seus olhos são substituídos por sensores quânticos que analisam a realidade em nível subatômico. Das suas costas, ergue-se um reator de singularidade em miniatura, pulsando com energia azulada, capaz de alimentar uma cidade inteira. Seu pensamento não é mais linear; é uma rede neural perfeita, processando dados em tempo real.",
        bonus: "Sua Inteligência aumenta em +3.",
        poderes: [
            { tipo: "Passivo", nome: "Análise de Realidade - Seq. 4", desc: "Você vê o mundo como ele realmente é: um conjunto de regras e sistemas. Você pode ver os pontos fracos em qualquer estrutura, a trajetória exata de qualquer projétil e a solução lógica para qualquer problema mundano. Você ganha +3 dados em todos os testes de Percepção e Investigação." },
            { tipo: "Ação", nome: "Criador Infalível - Seq. 4 Requisito", desc: "Itens fabricados por você enquanto nesta forma têm 50% de chance de serem indestrutíveis por uma cena. O custo de criação em tempo e recursos é reduzido pela metade." },
            { tipo: "Ação", nome: "Canhão de Matéria Escura - Seq. 3", desc: "Gaste 10 PE para reconfigurar seu reator e disparar um projétil de matéria exótica que causa 10 dados de dano de desintegração, ignorando qualquer tipo de armadura ou resistência." },
            { tipo: "Reação", nome: "Barreira de Fótons - Seq. 2", desc: "Ao ser alvo de um ataque, gaste 5 PE para criar um escudo hexagonal de pura energia que bloqueia completamente o ataque." }
        ]
    },
    mythicalForm: {
      incomplete: { 
        tempHpBonus: 25,
        attributeBoosts: { inteligencia: 3 },
        sanityCostPerTurn: "1d2",
        abilities: [
          { name: "Análise Tática", desc: "Você pode gastar uma ação para analisar um oponente, descobrindo uma de suas fraquezas físicas ou um padrão de ataque. Você ganha +2 dados no seu próximo ataque contra ele." },
          { name: "Ferramenta Improvisada", desc: "Gaste 3 PE para criar uma ferramenta ou item mundano simples (chave de fenda, corda, lockpick) a partir de materiais brutos. O item dura uma cena." }
        ]
      },
      complete: {
        tempHpBonus: 50,
        attributeBoosts: { inteligencia: 5 },
        abilities: [
          { name: "Blueprint Universal", desc: "Você entende instintivamente o funcionamento de qualquer dispositivo mecânico ou tecnológico que vê, sabendo como montá-lo, desmontá-lo ou sabotá-lo." },
          { name: "Singularidade de Bolso", desc: "Gaste 15 PE. Você cria uma pequena singularidade que pode ser arremessada. Ela explode em uma implosão que causa 8d10 de dano de força em uma área de 5m." }
        ]
      }
    },
    domain: {
        description: "A magia da Alquimia, da Criação Perfeita e da Engenhosidade Divina. Um Paragon é um mestre artesão que não apenas cria, mas imbui suas criações com uma lógica e uma harmonia que beiram a perfeição.",
        particulas: [
            { name: "Khemia", translation: "Alquimia", type: "Característica", conceito: "A essência da transmutação, da mistura e da busca pela perfeição material. Governa a criação de poções, elixires e a manipulação de propriedades químicas.", exemplo: "Ev Exa Khemia (Criar Inanimado com Alquimia) — A base para a criação de poções e itens encantados.", uso: "As Ivi Khemia (Destruir Pessoa com Alquimia) — Desfaz as 'ligações' alquímicas do corpo de um alvo, causando uma doença que separa suas energias vitais." },
            { name: "Sophrosyne", translation: "Moderação", type: "Função", conceito: "O poder de balancear, estabilizar e purificar energias. É a Função do equilíbrio perfeito.", exemplo: "Sophrosyne Miasma (Moderação na Corrupção) — Purifica um item ou pessoa de uma influência corruptora ou de uma maldição.", uso: "Sophrosyne Kaos (Moderação no Caos) — 'Filtra' o caos de um feitiço da Roda da Fortuna, permitindo remover o pior resultado possível." },
            { name: "Schema", translation: "Diagrama", type: "Objeto", conceito: "O 'projeto' perfeito de qualquer coisa. Representa a compreensão absoluta da estrutura e do propósito de um alvo.", exemplo: "Il Exa Schema (Revelar Inanimado com Diagrama) — Permite ver um objeto como um diagrama técnico, revelando seus pontos fracos.", uso: "Al Ani Schema (Alterar Alma com Diagrama) — Reorganiza temporariamente a 'estrutura' da alma de um alvo para torná-la resistente a um tipo específico de dano." }
        ]
    },
    sequences: {
        "Sequência 9: Savant": [
            { name: "Memória Eidética (Passivo)", desc: "Você pode fazer um teste de Inteligência (Dif. 6) para lembrar perfeitamente de qualquer detalhe que já tenha visto, lido ou ouvido." },
            { name: "Cálculo Rápido (Ativo)", desc: "Gaste 1 PE. Você resolve qualquer problema matemático ou lógico instantaneamente." },
            { name: "Organização Mental (Passivo)", desc: "Ganhe +2 dados em testes para resistir a poderes de confusão mental ou que tentem alterar suas memórias." },
            { name: "Leitura Dinâmica (Ativo)", desc: "Você pode ler um livro inteiro em minutos, absorvendo toda a informação. Custa 2 PE por livro." }
        ],
        "Sequência 8: Arqueólogo": [
            { name: "Desvendar Segredos (Ativo)", desc: "Ao examinar um objeto ou ruína antiga, faça um teste de Inteligência + Acadêmicos (História) (Dif. 7). Se tiver sucesso, o Narrador lhe dará uma pista sobre a origem, o propósito ou um segredo do local/item." },
            { name: "Sentir Artefatos (Ativo)", desc: "Gaste 2 PE para sintonizar sua percepção. Pela próxima cena, você pode sentir a presença de itens com poder Beyonder em um raio de 30 metros." },
            { name: "Material de Estudo (Passivo)", desc: "Você compreende a estrutura dos artefatos tão bem que consegue carregá-los com mais segurança. Você pode carregar um Artefato Selado adicional sem sofrer as penalidades normais por sobrecarga." },
            { name: "Análise Estrutural (Passivo)", desc: "Ganhe +1 dado em testes de criação para cada artefato que você já estudou e desmontou (máximo de +5)." }
        ],
        "Sequência 7: Avaliador": [
            { name: "Avaliar (Ativo)", desc: "Gaste 2 PE e toque um alvo ou objeto. Você determina instantaneamente suas características, habilidades e, mais importante, suas fraquezas e efeitos colaterais." },
            { name: "Inibição de Artefato (Ativo)", desc: "Ao usar avaliar em um Artefato Selado, você pode gastar +2 PE para desativar seus poderes por 5 turnos, desde que o nível do artefato não supere o seu." },
            { name: "Análise de Mercado (Ativo)", desc: "Você pode estimar o valor de mercado exato de qualquer item, desde uma gema rara a um Artefato Selado no mercado negro. Custa 1 PE." },
            { name: "Analisar Falha (Passivo)", desc: "Após Avaliar um Artefato Selado, você entende suas maldições e pode desenvolver um método de selamento personalizado para ele, reduzindo a dificuldade de contenção." }
        ],
        "Sequência 6: Artesão": [
            { name: "Epifania (Ativo)", desc: "Uma vez por sessão, ganhe uma inspiração divina. Pelos próximos 10 minutos, você ganha +5 dados em qualquer teste de Ofícios (Engenharia, Alquimia etc.)." },
            { name: "Amplificar Artefato (Ativo)", desc: "Toque um item místico. Gaste 4 PE. Pelos próximos 3 turnos, os efeitos do item são dobrados (dano, duração, bônus etc.). Existe um risco de o item quebrar após o uso." },
            { name: "Forja Astral (Ativo)", desc: "Gaste 5 PE por grau de poder. Você pode criar uma réplica temporária e fantasmagórica de qualquer arma ou armadura que você já tenha possuído e estudado." },
            { name: "Sobrecarga Segura (Ativo)", desc: "Você pode sobrecarregar a energia de um artefato para usá-lo com um custo de PE menor, ou como uma ação mais rápida. O risco de o item quebrar aumenta drasticamente." }
        ],
        "Sequência 5: Astrônomo": [
            { name: "Forja Estelar (Ativo)", desc: "Com materiais adequados (como metal de meteorito) e em um local com o céu limpo, você pode forjar Artefatos Cósmicos. Estes itens podem ter efeitos únicos que manipulam a gravidade, a luz estelar ou o vácuo." },
            { name: "Anã Vermelha - Fratura (Ativo)", desc: "Gaste 10 PE e sacrifique um de seus itens criados. O item implode, criando um pulso gravitacional que causa danos massivo (8 dados) e puxa todos os inimigos em um raio de 10m para o centro." },
            { name: "Campo Gravitacional (Ativo)", desc: "Gaste 5 PE por turno para alterar a gravidade em uma área. Você pode aumentar a gravidade (reduzindo o movimento dos inimigos), diminuí-la (permitindo saltos incríveis) ou invertê-la." },
            { name: "Feixe de Fótons (Ativo)", desc: "Gaste 4 PE para disparar um feixe de luz concentrada de um dispositivo em sua mão, causando 6 dados de dano de calor e fogo. Pode ser usado para fundir metais sem uma forja." }
        ],
        "Sequência 4: Alquimista (Engenheiro de Almas)": [
            { name: "Injetar Alma (Ativo)", desc: "A sua maior proeza. Com um ritual complexo, você pode injetar uma alma em um objeto inanimado, como um robô, uma arma ou uma armadura. O objeto ganha senciência e lealdade a você." },
            { name: "Nanomáquinas de Autoreparo (Ativo)", desc: "Gaste 6 PE. Você libera uma nuvem de nanobots que repara equipamentos e aliados em uma área. Recupera 2 níveis de Vitalidade em construtos ou 1d10 de 'HP' em equipamentos por 3 turnos." },
            { name: "Canhão Portátil (Ativo)", desc: "Como uma ação, você monta ou desmonta um canhão portátil. Dispará-lo custa 8 PE e causa 10 dados de dano de desintegração (ignora armadura) em linha reta." },
            { name: "Sobrecarga de Sistema (Passivo)", desc: "Uma vez por cena, você pode 'dar um overclock' em um de seus itens tecnológicos, dobrando seu efeito por um único uso, com 30% de chance de o item quebrar permanentemente." }
        ],
        "Sequência 3: Erudito Arcano (Forjador de Singularidades)": [
            { name: "Manipulação de Leis Arcanas (Ativo)", desc: "Gaste 15 PE. Você pode criar um efeito mágico 'do zero', sem seguir uma fórmula pré-existente. Você descreve o efeito, e o Narrador determina a Dificuldade e o custo." },
            { name: "Acesso ao Plano Arcano (Ativo)", desc: "Gaste 10 PE. Você pode abrir sua mente para a estrutura do universo, permitindo que você acesse informações como se estivesse usando uma enciclopédia cósmica." },
            { name: "Criação de Singularidade (Ativo)", desc: "Gaste 20 PE para criar um buraco negro em miniatura que suga tudo em um raio de 20m por um turno antes de implodir, causando danos massivo. Requer o gasto de um item cósmico como catalisador." },
            { name: "Reescrever Diagrama (Ativo)", desc: "Toque um item Beyonder. Gaste 12 PE e faça um teste de Inteligência + Ofícios. Se tiver sucesso, você pode alterar permanentemente uma de suas funções ou remover um de seus efeitos colaterais." }
        ],
        "Sequência 2: Magistrado do Conhecimento (Manipulador da Realidade)": [
            { name: "Manipulação de Leis da Física (Ativo)", desc: "Gaste 20 PE. Por uma cena, você pode alterar uma lei fundamental da física em uma área (alterar a força da gravidade, a velocidade da luz, a condutividade térmica etc.)." },
            { name: "Precognição Algorítmica (Ativo)", desc: "Gaste 10 PE. Pelos próximos 3 turnos, você tem uma visão probabilística perfeita do futuro imediato. Você pode declarar o resultado de 3 rolagens de d10 (suas ou de inimigos) antes que elas sejam feitas." },
            { name: "Invocar Drone de Assalto (Ativo)", desc: "Gaste 15 PE. Você materializa um Drone de Assalto autônomo (HP 40, Armadura 12, ataques de laser) que luta ao seu lado até ser destruído." },
            { name: "Biblioteca Universal (Ativo)", desc: "Em um estado de transe, você pode conectar sua mente ao 'conhecimento universal'. Você pode aprender qualquer Habilidade mundana ou conhecimento instantaneamente. Custa 10 PE por hora de uso." }
        ],
        "Sequência 1: Paragon": [
            { name: "Paragon da Tecnologia (Ativo)", desc: "Gaste 30 PE e 1 Ponto de Gênio. Você se funde com a tecnologia ao seu redor. Você pode se transformar em um veículo, se transferir para uma rede de dados, ou controlar todas as máquinas de uma cidade." },
            { name: "Singularidade Tecnológica (Ativo)", desc: "Habilidade de uso único e épico. Você se torna um catalisador para um salto evolucionário tecnológico. Sua existência causa um 'upgrade' em toda a tecnologia em uma nação." },
            { name: "Criação Absoluta (Ativo)", desc: "Você pode criar um artefato de nível de Semideus com um simples pensamento e o gasto massivo de energia, sem precisar de recursos ou diagramas. A criação leva apenas um turno." },
            { name: "Reset do Sistema (Ativo)", desc: "Uma vez por história, você pode tocar um item tecnológico ou Beyonder e 'resetá-lo para as configurações de fábrica'. O item perde todos os seus poderes e maldições. Você pode usar isso para destruir permanentemente um Artefato Selado perigoso." }
        ]
    }
};
