import { PathwayData } from '../../types';

export const morteData: PathwayData = {
    category: "Eternal Darkness",
    pathway: "CAMINHO DA MORTE",
    pvBase: 15,
    pvPorAvanço: 5,
    peBase: 20,
    pePorAvanço: 6,
    vontadeBonus: 1,
    sanidade: 7,
    mecanicaUnica: {
        titulo: "Afinidade com a Morte",
        items: [
            { nome: "Sentir a Morte", desc: "Você pode sentir a presença de mortos-vivos e fantasmas, bem como saber se uma pessoa está perto da morte ou possui uma doença terminal." },
            { nome: "Cura Alterada", desc: "Poderes de cura sagrados e de vida na verdade lhe causam dano. Em contrapartida, você pode se 'curar' absorvendo energia da morte, como descansar em um cemitério ou tocar em um corpo em decomposição. Isso recupera Vitalidade, mas pode exigir testes de Sanidade." }
        ]
    },
    poderesInatos: [
        { seq: "9", nome: "Mortificação", desc: "Sua pele se torna pálida e fria ao toque. Você ganha +1 dado para resistir a dano de frio e degenerativo." },
        { seq: "8", nome: "Hábitos Noturnos", desc: "Ganhe +2 dados em testes de Furtividade durante a noite ou em locais de morte (cemitérios, necrotérios)." },
        { seq: "7", nome: "Domínio Sobre a Vida", desc: "Seu entendimento sobre a vida (e como terminá-la) lhe concede +1 Nível de Vitalidade extra." },
        { seq: "6", nome: "Ritos dos Mortos", desc: "Você aprende instintivamente um ritual necromântico à sua escolha, sem precisar de um grimório." },
        { seq: "5", nome: "Templo Abominável", desc: "Sua alma se torna um farol no mundo espiritual. Você pode escolher 'abrigar' voluntariamente um espírito errante em seu corpo, ganhando acesso a uma de suas perícias mundanas." },
        { seq: "4", nome: "Guia", desc: "Criaturas mortas-vivas inferiores (zumbis, esqueletos) sem um mestre te reconhecem como uma autoridade e não te atacarão." },
        { seq: "2", nome: "Corpo Aberto", desc: "Sua alma está tão ligada à morte que você sofre -2 para resistir a possessões, mas você pode agora comandar qualquer espírito que o possua com um teste disputado de Vontade." },
        { seq: "2 - Anjo", nome: "Maestria Arcana", desc: "O custo em PE de todas as suas habilidades Beyonder (de qualquer Sequência) é permanentemente reduzido pela metade (arredondado para cima)." }
    ],
    formaMitica: {
        nome: "Serpente Emplumada do Abismo",
        disponivel: "(Habilidade disponível a partir da Sequência 4)",
        ativacao: "Requer uma ação completa e causa Degradação de Sanidade e acumula Pontos de Corrupção Mítica, conforme as regras do sistema.",
        descricao: "Seu corpo se transforma em uma serpente alada colossal, coberta não de escamas, mas de penas brancas e âmbar com uma textura cerosa que repele sangue e magia. Seus olhos são como dois buracos negros, sugando a luz ao redor. De suas asas, emana um zumbido ancestral que silencia até mesmo o medo. Sua cauda é uma espiral de ossos cósmicos, e seu sopro libera uma névoa que acelera a decomposição da matéria.",
        bonus: "Sua Inteligência e sua Espiritualidade aumentam em +2.",
        poderes: [
            { tipo: "Passivo", nome: "Penhasco da Carne - Seq. 4", desc: "Você ganha RD 15 (Redução de Dano) contra dano físico e é imune a efeitos de sangramento. Sua essência não está mais contida em sua carne." },
            { tipo: "Ação", nome: "Cortejo Fúnebre - Seq. 4 Requisito", desc: "Gaste 10 PE. Você invoca 4 cavaleiros espectrais em corcéis de sombra. Eles atacam seus inimigos, causando dano espiritual e arrastando-os com correntes de alma. (1d8 de dano por cavaleiro)" },
            { tipo: "Ação", nome: "Veredito do Silêncio - Seq. 3", desc: "Custo 8 PE. Ataca com uma foice de entropia pura. Teste: Espiritualidade + Armas Brancas. Dano: 2d8 + Sucessos de dano [Profano] e aplica a condição 'Silêncio Mágico' (alvo não pode usar poderes Beyonder) por 2 rodadas." },
            { tipo: "Reação", nome: "Dança das Sombras - Seq. 2", desc: "Ao ser alvo de um ataque, gaste 5 PE para se teleportar através do Mundo Espiritual, deixando um rastro de decadência para trás. Inimigos no rastro sofrem dano e penalidades." }
        ]
    },
    mythicalForm: {
      incomplete: {
        tempHpBonus: 40,
        attributeBoosts: { inteligencia: 2, espiritualidade: 2 },
        sanityCostPerTurn: "1",
        abilities: [
          { name: "Aura de Decadência", desc: "Matéria orgânica não-viva (madeira, papel, comida) envelhece e se desfaz rapidamente ao seu redor. Inimigos em contato físico sofrem 1 de dano degenerativo por turno." },
          { name: "Comando Menor dos Mortos", desc: "Você pode dar comandos simples a até 3 mortos-vivos de baixo nível (zumbis, esqueletos) que não estejam sob o controle de outro ser." }
        ]
      },
      complete: {
        tempHpBonus: 80,
        attributeBoosts: { inteligencia: 4, espiritualidade: 4 },
        abilities: [
          { name: "Ceifador de Almas", desc: "Seus ataques corpo a corpo podem, com um gasto de 5 PE, atacar diretamente a alma do alvo, ignorando armadura e causando dano de Vontade." },
          { name: "Portão do Submundo", desc: "Uma vez por transformação, você pode gastar 15 PE para abrir um portal para o rio das almas, puxando inimigos próximos para dentro e causando dano massivo de sanidade." }
        ]
      }
    },
    domain: {
        description: "A magia da Finalidade, do fim inevitável e do silêncio eterno. Um servo da Morte não é um assassino cruel, mas um ceifador sereno, o guardião que garante que todo ciclo chegue à sua conclusão natural e pacífica.",
        particulas: [
            { name: "Thanatos", translation: "Morte", type: "Característica", conceito: "A essência da entropia e do fim. Imbui a magia com o poder de encerrar processos. Não causa necessariamente dano, mas impõe um estado de finalidade.", exemplo: "Im Phys Thanatos (Atacar Corpo com Morte) — Um toque que não causa ferimento, mas inflige uma ferida necrótica que não pode ser curada por meios convencionais.", uso: "As Fatum Thanatos (Destruir Destino com Morte) — Aplica a um alvo um estado de 'fim conceitual'. Sua próxima grande ação está fadada ao fracasso." },
            { name: "Telos", translation: "Finalidade", type: "Função", conceito: "O poder de 'decretar um fim'. É uma Função que não destrói violentamente, mas simplesmente faz algo parar de existir ou funcionar.", exemplo: "Telos Ig (Finalidade no Fogo) — Extingue uma chama, não importa o quão grande ou mágica.", uso: "Telos Bhas (Finalidade na Emoção) — Remove completamente uma emoção de um alvo (medo, raiva, amor) por um período." },
            { name: "Styx", translation: "Rio das Almas", type: "Objeto", conceito: "Representa a fronteira entre a vida e a morte, o caminho que as almas percorrem. Permite interagir com esse caminho e seus viajantes.", exemplo: "Ev Styx (Invocar o Rio das Almas) — Cria uma barreira de névoa fantasmagórica que apenas os mortos ou intangíveis podem atravessar.", uso: "Ar Ani Styx (Aprisionar Alma no Rio) — 'Atrasa' a jornada de uma alma recém-partida, aprisionando-a em seu cadáver por tempo suficiente para um último interrogatório." }
        ]
    },
    sequences: {
        "Sequência 9: Colecionador de Cadáveres": [
            { name: "Animação Rudimentar (Ativo)", desc: "Gaste 4 PE e passe um minuto com um cadáver fresco. Você pode reanimá-lo como um 'Cadáver Trôpego'. Ele é extremamente lento, fraco e desmorona após uma hora ou com qualquer dano." },
            { name: "Visão Espiritual Necrópsia", desc: "Gaste 1 PE por turno. Seus olhos veem as 'cicatrizes' espirituais em corpos. Ganhe +2 dados em testes de Medicina para realizar necrópsias." },
            { name: "Falar com a Carne Morta (Ativo)", desc: "Toque um cadáver. Você pode fazer um teste de Espiritualidade + Medicina para ver um eco do último minuto de vida dele." },
            { name: "Preservar o Receptáculo (Ativo)", desc: "Gaste 2 PE para interromper o processo de decomposição de um corpo por 24 horas." }
        ],
        "Sequência 8: Coveiro": [
            { name: "Necromancia: Zumbi Menor (Ativo)", desc: "Sua necromancia evolui. Gaste 5 PE. Você agora pode animar um cadáver como um Zumbi Menor permanente. Você pode controlar uma quantidade igual ao seu rating de Espiritualidade. (Este poder substitui 'Animação Rudimentar')." },
            { name: "Espiritualista (Comunicar-se)", desc: "Gaste 2 PE para ter uma conversa simples com um espírito ou fantasma disposto." },
            { name: "Olho da Morte", desc: "Sua Visão Espiritual agora pode discernir claramente as auras, humor e intenções de criaturas vivas." },
            { name: "Paz para os Inquietos", desc: "Com um pequeno ritual, acalme um espírito errante para que ele encontre o descanso." }
        ],
        "Sequência 7: Espírito Médium": [
            { name: "Necromancia: Zumbi Aprimorado (Passivo)", desc: "Seus Zumbis Menores agora são mais fortes. Eles ganham +1 em Força e Vigor e podem entender comandos complexos." },
            { name: "Possessão Espiritual (Ativo)", desc: "Gaste 6 PE e faça um teste disputado de Espiritualidade vs Vontade. Você pode forçar um espírito a possuir um de seus zumbis, dando a ele senciência temporária." },
            { name: "Língua dos Caídos", desc: "Você aprende a Língua da Morte. Com ela, mortos-vivos de baixo nível te veem com respeito e hesitam em te atacar." },
            { name: "Magia Espiritual", desc: "Peça um favor a um espírito local. Gaste 4 PE e ele pode criar um efeito menor para você." }
        ],
        "Sequência 6: Guia Espiritual": [
            { name: "Necromancia: Lorde dos Cadáveres (Passivo)", desc: "O número de Zumbis que você pode controlar agora é igual ao seu Espiritualidade x 2. Além disso, você pode animar esqueletos." },
            { name: "Purificar Espírito", desc: "Libera uma onda de energia que guia os mortos. Contra espíritos malignos ou mortos-vivos, causa 2d8 + Sucessos de dano[Sagrado]." },
            { name: "Armadura de Ossos", desc: "Gaste 4 PE. Fragmentos de ossos e ectoplasma o cobrem, concedendo Armadura 3 por uma cena." },
            { name: "Transferência Vital", desc: "Gaste 3 PE para transferir sua força vital, curando seus servos mortos-vivos." }
        ],
        "Sequência 5: Porteiro": [
            { name: "Porta do Submundo (Ativo)", desc: "Gaste 10 PE e 1 Vontade. Você abre um portal para as periferias do Reino dos Mortos por 3 turnos. O portão tem uma forte sucção que puxa inimigos próximos." },
            { name: "Comandante dos Mortos (Ativo)", desc: "Sua habilidade de Necromancia - Cadáver agora pode animar criaturas mais fortes ou em maior número, como Ghouls ou um pequeno exército de zumbis." },
            { name: "Arrastar Espírito (Ativo)", desc: "Foque em um alvo. Gaste 5 PE por turno para tentar arrancar sua alma do corpo. É um teste disputado de Espiritualidade vs. Vontade do alvo." },
            { name: "Necromancia Espírito (Ativo)", desc: "Você pode dominar um espírito ou fantasma errante, forçando-o a servi-lo. Requer um teste de Espiritualidade + Intimidação e um custo de 5 PE." }
        ],
        "Sequência 4: Imortal": [
            { name: "Ressurreição (Passivo)", desc: "Uma vez por século, se você for morto, seu corpo se reconstrói no submundo. A cada ressurreição, você sofre 1d3 Níveis de Degradação de Sanidade permanentes." },
            { name: "Vedação da Morte (Ativo)", desc: "Gaste 12 PE e toque um Artefato Selado. Você pode usar sua conexão com a morte para impor um selo que suprime a maldição do artefato pela metade." },
            { name: "Rajada de Vento Frio (Ativo)", desc: "Você exala o vento do submundo. Inimigos em um cone são atingidos por um frio que não apenas congela a carne, mas apodrece a alma, causando dano Agravado. Custa 8 PE." },
            { name: "Viagem Espiritual (Ativo)", desc: "Você pode projetar sua alma para fora do corpo, viajando pelo Mundo Espiritual livremente por até uma hora. Seu corpo fica vulnerável. Custa 6 PE." }
        ],
        "Sequência 3: Barqueiro": [
            { name: "Olhar da Morte (Morte Instantânea)", desc: "Gaste 15 PE e 1 Vontade. Faça um teste disputado de Espiritualidade vs. Vigor + Vontade. Se vencer, o alvo morre instantaneamente. Se falhar, você sofre dano massivo de Sanidade." },
            { name: "Rio dos Mortos (Ativo)", desc: "Gaste 10 PE. Você transforma o chão em um trecho do rio do submundo. Inimigos que tocarem a área têm sua força vital drenada e correm o risco de ter suas almas arrastadas." },
            { name: "Toque da Mortalidade (Ativo)", desc: "Gaste 12 PE. Por uma cena, você impõe a mortalidade a um ser imortal, negando seus poderes de regeneração e imortalidade." },
            { name: "Resistência Absoluta da Morte (Passivo)", desc: "Você se torna imune a veneno, doença e paralisia. Você não sente dor e qualquer dano não-Agravado que sofrer é reduzido pela metade." }
        ],
        "Sequência 2: Cônsul da Morte": [
            { name: "Sopro da Morte (Ativo)", desc: "Gaste 20 PE para cuspir uma chama branca e pálida que incinera não o corpo, mas a alma. Causa 2d10 que atinge diretamente a Sanidade do alvo e impede a ressurreição." },
            { name: "Decreto Final (Ativo)", desc: "Gaste 18 PE. Você pode decretar a forma como um alvo morrerá. O destino se encarregará de cumprir seu decreto da forma mais irônica possível." },
            { name: "Barreira de Almas (Ativo)", desc: "Gaste 15 PE. Você cria uma barreira feita de almas lamentando-se que absorve completamente qualquer poder Beyonder de nível de Semideus ou inferior." },
            { name: "Comandar a Morte (Passivo)", desc: "Sua autoridade é absoluta. Você pode comandar qualquer ser morto-vivo com um simples comando verbal, sobrepondo a vontade do mestre original." }
        ],
        "Sequência 1: Imperador Pálido": [
            { name: "Senhor da Morte (Murchar)", desc: "Sua mera presença se torna um anátema para a vida. Plantas morrem, comida apodrece e seres vivos envelhecem a uma taxa acelerada. Você pode gastar 25 PE para focar este poder e envelhecer um alvo décadas em segundos." },
            { name: "Senhor da Morte (Negar)", desc: "Uma vez por história, como reação, você pode 'negar' a morte de um aliado. A alma dele é forçada a retornar ao corpo. Custa 20 PE e 1 Degradação de Sanidade." },
            { name: "A Morte da Morte (Ativo)", desc: "Gaste 30 PE e 1 Vontade. Você pode tocar um alvo e 'matar' o conceito de morte nele. O alvo se torna verdadeiramente imortal, mas também estagnado, incapaz de mudar, aprender ou se curar." },
            { name: "Maré do Rio Eternal (Habilidade Única)", desc: "Uma vez por história. Você invoca o Rio da Escuridão Eterna para inundar o campo de batalha. Aliados mortos-vivos são curados, enquanto inimigos sofrem dano necrótico." }
        ]
    }
};
