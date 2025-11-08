import { PathwayData } from '../../types';

export const acorrentadoData: PathwayData = {
    category: "Unknown",
    pathway: "CAMINHO DO ACORRENTADO",
    pvBase: 15,
    pvPorAvanço: 5,
    peBase: 10,
    pePorAvanço: 4,
    vontadeBonus: 0,
    sanidade: 7,
    mecanicaUnica: {
        titulo: "A Prisão da Carne",
        items: [
            { nome: "Maldições Sequenciais", desc: "A cada avanço de Sequência, o Beyonder não apenas ganha poder, mas também uma nova maldição temática que o assola (descritas em cada Sequência)." },
            { nome: "Pontos de Bestialidade (PB)", desc: "Em vez de usar PE para alguns de seus poderes de transformação, o Acorrentado acumula Pontos de Bestialidade. Cada PB aumenta o poder de suas transformações, mas o deixa mais perto de um frenesi irracional. A cada 5 PBs, a dificuldade para resistir ao frenesi na lua cheia aumenta em 1. Ele perde PBs com descanso e calma." }
        ]
    },
    poderesInatos: [
        { seq: "9", nome: "Improviso do Cativo", desc: "Você tem um talento sobrenatural para escapar. Ganhe +2 dados em testes para arrombar fechaduras, quebrar amarras ou improvisar ferramentas de fuga." },
        { seq: "8", nome: "Aprimoramento Físico", desc: "Seu corpo se torna mais forte e resistente. Adicione permanentemente +1 ponto para distribuir entre seus atributos de Força ou Vigor." },
        { seq: "7", nome: "Amizade Lupina", desc: "Lobos e cães selvagens te reconhecem como um predador alfa e não te atacarão, a menos que provocados." },
        { seq: "6", nome: "Recuperação Acelerada", desc: "Sua biologia amaldiçoada acelera sua cura. Recupere um nível de Vitalidade adicional a cada dia de descanso." },
        { seq: "5", nome: "Afinidade Espiritual", desc: "Seu corpo está tão saturado de poder que se torna uma âncora para o mundo espiritual. Você pode ver fantasmas e espíritos facilmente." },
        { seq: "4", nome: "Tomo do Desmorto", desc: "Você aprende instintivamente um ritual do domínio da Morte, permitindo-lhe realizar necromancia básica." },
        { seq: "2", nome: "Eco da Lua", desc: "Suas habilidades custam +2 PE durante a lua cheia, mas também causam +50% de dano. A influência da lua o sobrecarrega com poder bruto e perigoso." },
        { seq: "2 - Anjo", nome: "Maestria Arcana", desc: "O custo em PE de todas as suas habilidades Beyonder (de qualquer Sequência) é permanentemente reduzido pela metade (arredondado para cima)." }
    ],
    formaMitica: {
        nome: "Amálgama de Maldições",
        disponivel: "(Disponível a partir da Sequência 4)",
        ativacao: "Requer uma ação completa. Causa Degradação de Sanidade e acumula Pontos de Corrupção Mítica, conforme as regras gerais do sistema.",
        descricao: "Seu corpo se desfaz em uma massa amorfa de sombras e matéria orgânica. Sua forma final é definida pelas maldições que você acumulou: às vezes um gigante feito de correntes negras, outras um enxame de espíritos acorrentados. Sua presença corrompe o ambiente, deixando marcas de ferrugem e sangue seco no ar.",
        bonus: "Seu Vigor e sua Presença (no sentido de ser aterrorizante) aumentam em +2.",
        poderes: [
            { tipo: "Habilidade Passiva", nome: "Corpo Amaldiçoado Seq. 4", desc: "Você ganha 5 pontos de Armadura natural. Além disso, armas de metal que te atingem corroem e enferrujam, recebendo uma penalidade cumulativa de -1 de dano a cada golpe." },
            { tipo: "Habilidade de Ação", nome: "Corrente da Alma Partida Seq. 4", desc: "Gaste 5 PE. Lance correntes espectrais que se prendem à alma de um inimigo. Ele fica enredado (não pode se mover) e vulnerável (sofre +2 de dano de todas as fontes) por 3 turnos." },
            { tipo: "Habilidade Passiva", nome: "Aura da Maldição Seq. 3", desc: "Sua aura se torna um campo de azar. A dificuldade de todos os testes realizados por inimigos a até 10 metros de você aumenta em 1." },
            { tipo: "Habilidade de Reação", nome: "Maldição do Espelho Quebrado Seq. 3", desc: "Quando alvo de um poder Beyonder, gaste 8 PE para refleti-lo de volta ao conjurador. Você ainda sofre metade dos efeitos." },
            { tipo: "Habilidade Passiva", nome: "Natureza Dupla Seq. 3", desc: "Sua forma se torna ainda mais instável e poderosa. Você pode escolher manifestar características de Lobisomem (garras e fúria) ou de Fantasma (intangibilidade parcial) no início de cada turno." },
            { tipo: "Habilidade de Ação", nome: "Zumbi Abissal Seq. 3", desc: "Gaste 10 PE. Ao matar um inimigo, ele se reergue instantaneamente como um Zumbi corrompido (estatísticas aprimoradas) sob seu comando por uma cena." },
            { tipo: "Habilidade Passiva", nome: "Senhor das Maldições Seq. 2", desc: "Você é imune a todas as maldições de nível inferior ao seu e pode absorver sua energia para recuperar PE." },
            { tipo: "Habilidade de Ação", nome: "Armagedom das Correntes Seq. 2", desc: "Uma vez por história, como um ato de poder supremo, gaste 20 PE e sofra 1d3 Níveis de Degradação de Sanidade. Você libera todas as suas correntes em um vórtice de escuridão que atinge todos em uma vasta área." }
        ]
    },
    mythicalForm: {
      incomplete: { 
        tempHpBonus: 40,
        attributeBoosts: { forca: 2, vigor: 2 },
        sanityCostPerTurn: "1d2",
        abilities: [
          { name: "Correntes Espectrais Menores", desc: "Você pode gastar 4 PE para manifestar correntes que agarram um alvo, impondo uma penalidade de -2 em suas ações físicas." },
          { name: "Regeneração Grotesca", desc: "Você regenera 1 nível de Vitalidade a cada 3 turnos, mas o processo é visualmente perturbador." }
        ]
      },
      complete: {
        tempHpBonus: 80,
        attributeBoosts: { forca: 4, vigor: 4 },
        abilities: [
          { name: "Senhor das Correntes", desc: "Suas Correntes da Alma Partida podem agora prender até 3 alvos simultaneamente." },
          { name: "Amálgama Imortal", desc: "Você não pode ser morto por meios convencionais. Se seu corpo for destruído, ele se reformará a partir de sombras e matéria amaldiçoada no próximo dia, a menos que seja purificado por poder sagrado." }
        ]
      }
    },
    domain: {
        description: "A magia da Mutação, da Maldição que concede poder e da Fúria bestial. O corpo de um Acorrentado é sua própria prisão e sua maior arma, uma amálgama de carne e poder sobrenatural que constantemente anseia por liberdade.",
        particulas: [
            { name: "Allax", translation: "Mutação", type: "Função/Característica", conceito: "O poder da transformação física grotesca e instável. Allax não segue as leis da biologia, mas as do pesadelo.", exemplo: "Al Phys Allax (Alterar Corpo com Mutação) — A base para as transformações em Lobisomem ou Zumbi, manifestando características bestiais.", uso: "As Exa Allax (Destruir Inanimado com Mutação) — Infunde um objeto com 'crescimento' cancerígeno, fazendo-o se contorcer e se desfazer em matéria orgânica tumoral." },
            { name: "Desmos", translation: "Corrente", type: "Objeto/Característica", conceito: "A maldição como um vínculo. Representa a prisão e a ligação inescapável que definem este Caminho.", exemplo: "Ar Ivi Desmos (Aprisionar Pessoa com Corrente) — Manifesta correntes espectrais que prendem o corpo e a alma do alvo.", uso: "An Ivi Desmos (Restaurar Pessoa com Corrente) — Uma cura perversa. O Acorrentado pode 'puxar' um aliado de volta da beira da morte, curando-o, mas ao custo de vinculá-lo a uma nova maldição ou dependência de si mesmo." },
            { name: "Therion", translation: "Frenesi Bestial", type: "Função/Característica", conceito: "A manifestação da 'Besta Interior'. É a perda de controle como uma arma de poder bruto e irracional.", exemplo: "Am Ivi Therion (Proteger Pessoa com o Frenesi) — Resiste a efeitos de medo ou dor ao canalizar a fúria primal interior.", uso: "Ev Therion (Invocar o Frenesi) — Projeta uma manifestação espectral da Besta Interior para atacar um inimigo de forma independente." }
        ]
    },
    sequences: {
        "Sequência 9: Prisioneiro": [
            { name: "Maldição da Apatia (Passivo)", desc: "Sua capacidade de expressar emoções está acorrentada. Você sofre -2 dados em testes sociais positivos, mas ganha +2 dados para resistir a poderes mentais e de empatia." },
            { name: "Aprisionamento Voluntário (Ativo)", desc: "Gaste 2 PE. Você abraça sua apatia, escondendo suas intenções. Pelos próximos minutos, testes para ler sua mente ou intenções falham automaticamente." },
            { name: "Fúria do Cativo (Ativo)", desc: "Uma vez por cena, você pode gastar 1 PE e 1 Vontade para ganhar +2 em Força por um turno, mas sofre -2 em Inteligência e não pode recuar." },
            { name: "Força Inabalável (Passivo)", desc: "Você ganha +2 dados em testes de Força para quebrar objetos e arrombar portas." }
        ],
        "Sequência 8: Lunático": [
            { name: "Maldição da Insanidade (Passivo)", desc: "Sua mente fraturada o protege. Ganhe +2 dados para resistir a poderes de medo e pânico. Em troca, o Narrador pode exigir testes de Vontade para você não ter surtos emocionais." },
            { name: "Surto Psicótico (Ativo)", desc: "Gaste 4 PE e 1 Vontade. Por 1d4 turnos, você ignora todas as penalidades de ferimentos e sua mente não pode ser lida. No final do efeito, sofre 1 nível de dano Agravado." },
            { name: "Indiferença à Dor (Passivo)", desc: "Ganhe 1 ponto permanente de Armadura natural. Sua mente aprendeu a ignorar a dor." },
            { name: "Insanidade Própria (Reação)", desc: "Gaste 1 ponto de Vontade para usar sua própria loucura para confundir um poder mental. O poder inimigo falha, mas você perde temporariamente a memória da última hora." }
        ],
        "Sequência 7: Lobisomem": [
            { name: "Maldição do Predador (Passivo)", desc: "Você se torna um predador noturno. Ganha a habilidade Visão Noturna e +2 dados em testes de Furtividade durante a noite." },
            { name: "Licantropia Parcial (Ativo)", desc: "Gaste 1 Ponto de Bestialidade. Transforme uma parte do seu corpo: seus braços (+2 em Força), suas pernas (movimento dobrado) ou suas mãos (garras que causam danos Letal). Dura uma cena." },
            { name: "Metamorfose (Ativo)", desc: "Gaste 3 Pontos de Bestialidade. Você se transforma em um lobisomem completo por 5 turnos, ganhando todos os benefícios da Licantropia Parcial. Deve fazer um teste de Vontade (Dif. 7) a cada turno para não atacar o alvo mais próximo." },
            { name: "Regeneração Lupina (Passivo)", desc: "No início do seu turno, se você sofreu danos no turno anterior, recupere 1 nível de Vitalidade. Esta habilidade não funciona contra danos de prata ou fogo." }
        ],
        "Sequência 6: Zumbi": [
            { name: "Maldição da Voracidade (Passivo)", desc: "Você pode consumir carne humana para acelerar sua regeneração, recuperando um nível extra de Vitalidade por dia de descanso. Cada vez que o faz, arrisca perder Sanidade." },
            { name: "Comandante da Horda (Ativo)", desc: "Gaste 6 PE para animar até três cadáveres como zumbis lentos sob seu comando. Duram até serem destruídos." },
            { name: "Semi-Imortal (Passivo)", desc: "Você não pode ser 'morto' a menos que sua cabeça seja destruída ou sofra dano Agravado em seu último nível de Vitalidade." },
            { name: "Toque Pútrido (Ativo)", desc: "Gaste 4 PE e toque um ser vivo. Ele deve passar em um teste de Vigor (Dif. 7) ou um de seus membros necrosa e fica inutilizável pela cena." }
        ],
        "Sequência 5: Fantasma": [
            { name: "Forma Espectral (Ativo)", desc: "Gaste 4 PE por turno. Você se torna intangível, imune a dano físico mundano, mas vulnerável a ataques espirituais." },
            { name: "Possessão (Ativo)", desc: "Enquanto em Forma Espectral, você pode tentar possuir um corpo com um teste disputado de Espiritualidade vs. Vontade. Custa 10 PE para iniciar." },
            { name: "Grito Espectral (Ativo)", desc: "Gaste 5 PE. Libera um grito que ataca a mente. Todos que o ouvem devem fazer um teste de Vontade (Dif. 8) ou ficarão atordoados e com medo por 1d4 turnos." },
            { name: "Invisibilidade (Ativo)", desc: "Gaste 3 PE para se tornar invisível, mesmo para visões espirituais de baixo nível. O efeito se quebra se você atacar." }
        ],
        "Sequência 4: Fantoche (Senhor das Correntes)": [
            { name: "Telecinese Menor (Ativo)", desc: "Gaste 2 PE para mover objetos pequenos (até 10kg) com a mente." },
            { name: "Controle de Artefato Selado (Ativo)", desc: "Tente controlar um Artefato Selado que não esteja sendo segurado. Faça um teste de Espiritualidade vs. Dificuldade do Artefato." },
            { name: "Animar Correntes (Ativo)", desc: "Gaste 5 PE. Correntes (físicas ou espectrais) na área ganham vida sob seu comando por uma cena." },
            { name: "Partilhar Visão (Ativo)", desc: "Gaste 2 PE para se conectar a um fantasma ou zumbi sob seu comando. Você pode ver e ouvir através dos sentidos dele." }
        ],
        "Sequência 3: Discípulo do Silêncio (Hex da Bestialidade)": [
            { name: "Transformação Silenciosa (Ativo)", desc: "Gaste 8 PE. Você toca um alvo (vivo ou morto) e o transforma em uma estátua de osso silenciosa por uma hora." },
            { name: "Maldição da Mortalidade (Ativo)", desc: "Gaste 10 PE e 1 Vontade. Toque um alvo imortal. Pela próxima cena, a regeneração dele é anulada e ele pode ser ferido como um mortal." },
            { name: "Sopro do Espírito (Ativo)", desc: "Gaste 6 PE. Você exala uma névoa que extrai o espírito do corpo dos inimigos. Eles devem fazer um teste de Vigor (Dif. 8) ou ficarão exaustos." },
            { name: "Prisão da Alma (Ativo)", desc: "Gaste 12 PE e 1 Ponto de Bestialidade. Você aprisiona a alma de uma criatura que acabou de morrer em um objeto, criando um item mal-assombrado." }
        ],
        "Sequência 2: Pacto das Sombras (Maldição Antiga)": [
            { name: "Ritual do Círculo de Lamentações (Ativo)", desc: "Realize um ritual de 1 minuto e gaste 15 PE. Você invoca um círculo de espíritos acorrentados em uma área. Inimigos dentro do círculo sofrem dano de Sanidade contínuo." },
            { name: "Absorver Maldição (Reação)", desc: "Quando um aliado é alvo de uma maldição, você pode, como reação, puxá-la para si mesmo." },
            { name: "Contrato com a Sombra (Ativo)", desc: "Gaste 1 Ponto de Vontade permanente para fazer um pacto com sua própria Besta interior. Você pode acessar uma das suas habilidades da Forma Mítica por uma cena sem se transformar." }
        ],
        "Sequência 1: Abominação": [
            { name: "Invocar Correntes do Abismo (Ativo)", desc: "Gaste 20 PE. Correntes feitas da pura matéria do Abismo surgem do chão e atacam todos os inimigos. Os alvos sofrem dano Agravado massivo e suas habilidades Beyonder podem ser temporariamente 'seladas'." },
            { name: "Tornar-se a Maldição (Ativo)", desc: "Gaste 15 PE. Você se dissolve e possui uma de suas maldições, entrando em um objeto ou pessoa amaldiçoada. Enquanto estiver lá, você é quase invulnerável e pode amplificar a maldição em 1000%." },
            { name: "Libertação Final (Ativo)", desc: "Uso único e épico. Você se liberta de todas as suas correntes. Sua forma monstruosa e bestial se vai. Você se torna humano novamente, perdendo todos os seus poderes Beyonder, mas recuperando toda a sua Sanidade." },
            { name: "Abraçar o Abismo (Ativo)", desc: "Uso único e épico. O oposto da Libertação. Você cede completamente, tornando-se uma verdadeira Abominação, um deus-monstro. Seu primeiro ato é devorar a alma de suas Âncoras." }
        ]
    }
};