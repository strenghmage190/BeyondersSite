import { PathwayData } from '../../types';

export const abismoData: PathwayData = {
    category: "Eternal Darkness",
    pathway: "CAMINHO DO ABISMO",
    pvBase: 10,
    pvPorAvanço: 4,
    peBase: 15,
    pePorAvanço: 5,
    vontadeBonus: 1,
    sanidade: 6,
    mecanicaUnica: {
        titulo: "O Pacto da Carne (Aspectos Infernais)",
        items: [
            { nome: "Ganhando Aspectos", desc: "Você começa sem nenhum Aspecto na Sequência 9. A cada nova Sequência que você alcança (8, 7, 6, etc.), você ganha um novo Aspecto Infernal. Você escolhe qual traço demoníaco seu personagem manifesta." },
            { nome: "Libertando o Poder", desc: "Cada Aspecto possui uma forma passiva (sutil) e uma forma Liberta (ativa e poderosa). Para libertar o poder de um Aspecto por uma cena, você deve gastar 2 PE. Enquanto liberto, os efeitos do Aspecto são drasticamente aumentados, mas a sua Besta Interior se aproxima." },
            { nome: "Manto Luciferiano", desc: "Sua pele ganha uma textura coriácea (+1 Armadura). Forma Liberta: O manto se estende de suas costas, formando um par de asas que permitem voar por uma cena." },
            { nome: "Manoplas de Azazel", desc: "Suas unhas são tão duras quanto metal. Forma Liberta: Suas mãos se transformam em garras demoníacas, causando danos Agravado em combate desarmado (Força + Luta)." },
            { nome: "Arcada de Belzebu", desc: "Seus dentes se tornam serrilhados, permitindo que você se alimente de carne crua para recuperar 1 Nível de Vitalidade uma vez por dia. Forma Liberta: Uma segunda fileira de dentes cresce e sua mordida causa dano Letal." },
            { nome: "Cauda de Asmodeus", desc: "Uma cauda preênsil cresce em sua base da coluna. Forma Liberta: A cauda pode ser usada para realizar um ataque extra por turno com -2 dados na parada." },
            { nome: "Desejo de Leviatã", desc: "Seus olhos adquirem uma cor hipnótica. Ganhe +2 dados em testes de Sedução. Forma Liberta: Qualquer um que faça contato visual com você deve passar em um teste de Vontade (Dif. 7) ou ficará Encantado por um turno." },
            { nome: "Escamas de Belphegor", desc: "Sua pele se torna coberta por escamas sutis. Ganhe +2 dados para resistir a venenos e doenças. Forma Liberta: As escamas refletem poderes arcanos; você ganha +2 dados para resistir a qualquer poder Beyonder direcionado a você." },
            { nome: "Impertinência de Mammon", desc: "Você desenvolve um par de braços espectrais. Forma Liberta: Os braços se tornam físicos, permitindo que você interaja com o dobro de objetos ou segure mais armas." }
        ]
    },
    poderesInatos: [
        { seq: "9", nome: "Versatilidade", desc: "Você ganha +1 em uma perícia social (Lábia, Intimidação ou Sedução) e em uma perícia física (Briga ou Armas Brancas)." },
        { seq: "8", nome: "Aprimoramento Físico", desc: "Seu corpo se torna anormalmente robusto. Adicione permanentemente +1 ao seu atributo de Vigor." },
        { seq: "7", nome: "Filho do Abismo", desc: "Você ganha resistência a fogo e veneno, recebendo +2 dados para absorver dano desses tipos." },
        { seq: "6", nome: "Língua Profana", desc: "Você aprende instintivamente o idioma do Abismo, uma língua de poder que pode ser usada para aterrorizar mortais e negociar com demônios." },
        { seq: "5", nome: "Aspecto Infernal", desc: "Você desenvolve um traço físico demoníaco sutil (olhos que brilham no escuro, pele anormalmente quente, etc.). Você pode gastar 1 PE para ocultá-lo." },
        { seq: "4", nome: "Maligno", desc: "Você causa +2 de dano em ataques contra seres de domínio 'Bom' ou 'Ordeiro'." },
        { seq: "2", nome: "Sucumbir", desc: "Sua tolerância à corrupção aumentou. O risco de seus poderes de corrupção se voltarem contra você diminui." },
        { seq: "2 - Anjo", nome: "Maestria Arcana", desc: "O custo em PE de todas as suas habilidades Beyonder (de qualquer Sequência) é permanentemente reduzido pela metade (arredondado para cima)." }
    ],
    formaMitica: {
        nome: "Emissário do Caos",
        disponivel: "(Habilidade disponível a partir da Sequência 4)",
        ativacao: "Requer uma ação completa e causa Degradação de Sanidade e acumula Pontos de Corrupção Mítica, conforme as regras do sistema.",
        descricao: "Sua Forma Mítica agora é única para você. É uma fusão grotesca de todos os Aspectos que você escolheu ao longo de sua jornada, envoltos na aura entrópica do caos. Um Demônio com a Cauda, as Asas e as Garras serão visualmente diferente de um com a Arcada, as Escamas e os Olhos.",
        bonus: "Sua Força e Manipulação aumentam em +2.",
        poderes: [
            { tipo: "Passivo", nome: "Aura de Corrupção - Seq. 4", desc: "A dificuldade para todos os testes de Vontade para resistir à tentação, medo ou poderes de controle mental em um raio de 10m aumenta em 2. A própria realidade ao seu redor se torna mais 'maleável' à sua influência." },
            { tipo: "Ação", nome: "Fogo Infernal - Seq. 4 Requisito", desc: "Gaste 3 PE para lançar uma bola de chamas verdes que explode ao atingir um alvo, causando 6 dados de dano de fogo e deixando o chão em chamas por 2 turnos." },
            { tipo: "Ação", nome: "Sussurros do Abismo - Seq. 3", desc: "Gaste 8 PE. Você sussurra uma tentação irresistível na mente de um alvo. Ele deve fazer um teste de Vontade (Dif. 9) ou cederá ao seu desejo mais sombrio (trair um aliado, fugir da luta, etc.)." },
            { tipo: "Reação", nome: "Correntes de Sombras - Seq. 2", desc: "Ao ser atacado, gaste 4 PE. Correntes de sombras brotam do chão e prendem o atacante. Ele fica imobilizado por um turno, a menos que passe em um teste de Força (Dif. 8)." }
        ]
    },
    mythicalForm: {
      incomplete: { 
        tempHpBonus: 35,
        attributeBoosts: { forca: 2, manipulacao: 2 },
        sanityCostPerTurn: "1d2",
        abilities: [
          { name: "Aura de Tentação Menor", desc: "A dificuldade para resistir aos seus poderes de Sedução e Manipulação aumenta em 1." },
          { name: "Manifestar Aspecto Sutil", desc: "Você pode manifestar a forma passiva de um de seus Aspectos Infernais sem custo, tornando seu traço demoníaco mais evidente e poderoso." }
        ]
      },
      complete: { 
        tempHpBonus: 70,
        attributeBoosts: { forca: 4, manipulacao: 4 },
        abilities: [
          { name: "Comandar Demônios Menores", desc: "Uma vez por cena, gaste 12 PE para invocar 1d4+1 demônios menores que o servem até serem destruídos." },
          { name: "Palavra de Corrupção", desc: "Gaste 8 PE. Você fala uma palavra profana que corrompe um objeto ou uma pequena área, tornando água em veneno, comida em cinzas ou uma arma sagrada em um item profano por uma cena." }
        ]
      }
    },
    domain: {
        description: "A magia do Vazio Frio, da Corrupção inevitável e da Loucura primordial que espreita entre as estrelas. O seguidor do Abismo não tenta, ele consome.",
        particulas: [
            { name: "Miasma", translation: "Corrupção Entrópica", type: "Característica", conceito: "A essência da degeneração e da influência maligna do Vazio. É uma força que degrada a matéria, a mente e as próprias leis da física.", exemplo: "Al Phys Miasma (Alterar Corpo com Corrupção) — Infunde um alvo com uma degeneração lenta, fazendo com que a carne se torne doentia e a mente, paranoica.", uso: "As Mageia Miasma (Destruir Magia com Corrupção) — Libera uma onda de entropia que não anula a magia, mas a 'corrói'." },
            { name: "Abyssus", translation: "O Vazio", type: "Objeto/Função", conceito: "Representa o Abismo não como um lugar, mas como uma consciência ou força faminta. É o poder de abrir canais para o Vazio.", exemplo: "Vat Abyssus (Divinar pelo Vazio) — A base para ouvir os sussurros do Abismo, ganhando um conhecimento proibido ao custo de um teste de Sanidade.", uso: "It Ivi Abyssus (Transportar Pessoa para o Vazio) — Não é um teleporte, mas um banimento temporário. O alvo é 'apagado' da realidade por alguns instantes." },
            { name: "Erebos", translation: "Escuridão Primordial", type: "Característica", conceito: "Não é a sombra (Ten) nem a ausência de luz (No-Lum). Erebos é a escuridão original de antes da Criação, uma escuridão que possui peso, substância e uma fome própria.", exemplo: "Ev Locus Erebos (Criar Lugar de Escuridão Primordial) — Preenche uma área com uma escuridão sobrenatural que não pode ser penetrada por fontes de luz normais.", uso: "An Ivi Erebos (Restaurar Pessoa com Escuridão Primordial) — Uma forma perversa de 'cura'. O seguidor do Abismo se envolve na escuridão para reverter ferimentos, mas este processo o deixa mais sintonizado com o Vazio." }
        ]
    },
    sequences: {
        "Sequência 9: Criminoso": [
            { name: "Herdar Pecado (Ira)", desc: "Gaste 2 PE. Pela próxima cena, adicione +2 dados de dano a todos os seus ataques corpo a corpo, mas sofra -1 na sua Defesa. Você luta com fúria cega." },
            { name: "Herdar Pecado (Gula)", desc: "Ao consumir comida ou bebida, gaste 1 PE. Os efeitos positivos (como cura de poções) são dobrados." },
            { name: "Herdar Pecado (Avareza)", desc: "Ganhe +2 dados em testes de Lábia e Manha para barganhar ou avaliar o valor de objetos." },
            { name: "Soberba Arrogante", desc: "Você ganha +2 dados para resistir a poderes de intimidação." }
        ],
        "Sequência 8: Anjo sem Asas": [
            { name: "Transformação Demoníaca Menor", desc: "Gaste 2 PE. Você ganha um traço demoníaco temporário por uma cena: garras afiadas (dano de Luta +1), pele endurecida (Armadura +1) ou asas vestigiais que permitem planar." },
            { name: "Visão do Desejo", desc: "Gaste 1 PE e foque em um alvo. Você sabe instintivamente qual dos Sete Pecados é a maior fraqueza daquela pessoa, ganhando uma vantagem para explorá-la." },
            { name: "Toque da Luxúria", desc: "Toque um alvo. Gaste 3 PE e faça um teste disputado de Manipulação + Sedução vs. Vontade. Se vencer, ele fica encantado por você por uma cena." },
            { name: "Sede de Sangue (Habilidade de Série)", desc: "Após realizar seu primeiro ataque em um combate, você deve passar num teste de Vontade (Dif. 6) ou usará sua próxima ação para atacar novamente." }
        ],
        "Sequência 7: Assassino em Série": [
            { name: "Gume Infernal", desc: "Gaste 3 PE para imbuir uma arma com fogo profano por uma cena. Ela causa +2 de dano de fogo em cada ataque e seus ferimentos são mais difíceis de curar." },
            { name: "Aura de Medo", desc: "Gaste 4 PE para emanar uma aura de terror por uma cena. Inimigos a até 10 metros que falharem em um teste de Vontade (Dif. 7) recebem uma penalidade de -1 dado em todas as suas ações por medo." },
            { name: "Invisibilidade Sombria", desc: "Em qualquer área que não estejam diretamente iluminadas, gaste 5 PE para se tornar completamente invisível por até um minuto. O efeito se quebra se você atacar." },
            { name: "Conhecimento Profano", desc: "Você realiza um ritual de 10 minutos para contatar uma entidade menor do Abismo. Gaste 5 PE e faça um teste de Ocultismo (Dif. 8). Se tiver sucesso, você pode fazer uma pergunta e receber uma resposta verdadeira, mas enigmática." }
        ],
        "Sequência 6: Diabo": [
            { name: "Fogo Infernal Esfera Sulfúrica", desc: "Gaste 4 PE. Lance uma bola de chamas verdes que causa 6 dados de dano de fogo e deixa uma poça de fogo infernal no chão por 3 turnos." },
            { name: "Língua Profana Corromper", desc: "Sua fala se torna veneno. Gaste 4 PE para amaldiçoar um alvo. A dificuldade de todos os seus testes de resistência aumenta em 2 por uma cena." },
            { name: "Contrato Menor", desc: "Você pode criar um contrato mágico com um mortal. Se ele quebrar o pacto, você pode infligir dor (dano de Vitalidade), azar (penalidades em testes) ou roubar uma de suas memórias." },
            { name: "Armadura Demoníaca", desc: "Gaste 5 PE. Uma armadura de osso e sombras se forma ao redor do seu corpo por uma cena, concedendo +4 dados para absorver dano." }
        ],
        "Sequência 5: Apóstolo do Desejo": [
            { name: "Plantar Semente (Ativo)", desc: "Toque um alvo não hostil e gaste 1 Ponto de Vontade. Você planta uma 'semente' de um desejo específico (luxúria, ganância, ira) em sua mente. Em um momento futuro, pode gastar 1 PE para fazer essa semente 'germinar'." },
            { name: "Metamorfose (Ativo)", desc: "Como uma ação completa, gaste 10 PE e 1 Vontade. Você ativa a Forma Liberta de TODOS os Aspectos Infernais que adquiriu simultaneamente por uma cena. Você se torna um demônio completo." },
            { name: "Corpo de Desejos (Passivo)", desc: "Sua conexão com os pecados o fortalece. Para cada personagem na cena agindo movido por um desejo intenso, você ganha +1 dado em seus testes sociais." },
            { name: "Voz da Tentação (Ativo)", desc: "Gaste 5 PE. Você faz uma oferta irrecusável a um alvo. Ele deve fazer um teste de Vontade (Dif. 9) para recusar seu comando." },
            { name: "Letargia (Ativo)", desc: "Toque um alvo. Ele deve passar num teste de Vigor (Dif. 8) ou cairá num sono profundo e sobrenatural, do qual não poderá ser acordado por um turno." }
        ],
        "Sequência 4: Demônio": [
            { name: "Sussurros do Abismo (Ativo)", desc: "Gaste 8 PE e 1 Vontade. Você força todos os inimigos em um raio de 10m a ouvirem os sussurros enlouquecedores do Abismo. Eles devem fazer um teste de Vontade (Dif. 8) ou ficarão confusos por 1d3 turnos." },
            { name: "Transformação Demoníaca Completa (Ativo)", desc: "Gaste 10 PE. Você assume sua forma demoníaca por uma cena. Suas estatísticas Físicas aumentam em +2, você ganha asas de couro e uma cauda preênsil." },
            { name: "Corromper Terreno (Ativo)", desc: "Gaste 6 PE. Você corrompe uma área de 15m. O chão se torna profano, curas sagradas causam danos na área e seres de domínio bom sofrem -2 de penalidade em todas as suas ações." },
            { name: "Invocação Maior (Ativo)", desc: "Com um ritual complexo de 1 minuto, gaste 12 PE e um sacrifício. Você pode invocar um demônio menor para lutar por você por uma cena." }
        ],
        "Sequência 3: Tagarela (Corruptor da Realidade)": [
            { name: "Palavras de Poder (Ativo)", desc: "Gaste 10 PE. Você fala uma única palavra na Língua Profana que altera a realidade. Exemplos: 'Quebre', 'Sangre', 'Caia'." },
            { name: "Mentira que se Torna Verdade (Ativo)", desc: "Gaste 12 PE e conte uma mentira plausível sobre o ambiente. Faça um teste de Manipulação + Lábia (Dif. 9). Se tiver sucesso, a mentira se torna real por uma cena." },
            { name: "Anular Magia (Reação)", desc: "Gaste uma quantidade de PE igual ao custo do feitiço de um inimigo para tentar anulá-lo com pura entropia. Faça um teste disputado de Espiritualidade vs Espiritualidade." },
            { name: "Toque da Entropia (Ativo)", desc: "Gaste 8 PE. Você toca um objeto. Ele envelhece séculos em um instante, apodrecendo e se desfazendo em pó. Em um alvo vivo, causa danos Agravado massivo." }
        ],
        "Sequência 2: Arquiduque Sangrento": [
            { name: "Maldição do Arquiduque (Ativo)", desc: "Gaste 15 PE para amaldiçoar um alvo. Por uma cena, o alvo é vulnerável a todos os tipos de dano e sangra profusamente, perdendo 1 nível de Vitalidade por turno." },
            { name: "Pacto com o Abismo (Ativo)", desc: "Você pode oferecer um sacrifício massivo em troca de um favor direto de uma entidade do Abismo. O Narrador decide o resultado e a consequência cósmica." },
            { name: "Comandar Legião (Ativo)", desc: "Gaste 20 PE. Você abre um portal para o Abismo e invoca uma legião de demônios menores (cerca de 10-15) para lutar por você por uma cena." }
        ],
        "Sequência 1: Monarca Imundo": [
            { name: "Contaminação (Ativo)", desc: "Sua aura se torna uma praga viva. Gaste 10 PE. Pelo resto da cena, tudo ao seu redor (terreno, objetos, ar) é corrompido. Inimigos sofrem dano contínuo de podridão." },
            { name: "Verdadeiro Nome (Passivo)", desc: "Você aprende o Verdadeiro Nome de um demônio ou anjo menor. Saber o nome lhe dá controle absoluto sobre ele." },
            { name: "Apagar a Ordem (Ativo)", desc: "Uso único e épico. Gaste 30 PE e sofra 1d6 Níveis de Degradação de Sanidade. Você pode apagar temporariamente uma lei fundamental da natureza em uma área." },
            { name: "O Trono Vazio (Ativo)", desc: "Você tenta usurpar o poder de uma entidade existente. Ao matar um ser de poder equivalente, você pode, através de um ritual profano, roubar um de seus conceitos fundamentais." }
        ]
    }
};
