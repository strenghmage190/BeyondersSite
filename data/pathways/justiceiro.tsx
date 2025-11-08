import { PathwayData } from '../../types';

export const justiceiroData: PathwayData = {
    category: "God Almighty",
    pathway: "CAMINHO DO JUSTICEIRO",
    pvBase: 10,
    pvPorAvanço: 4,
    peBase: 10,
    pePorAvanço: 4,
    vontadeBonus: 2,
    sanidade: 8,
    mecanicaUnica: {
        titulo: "A Lei e o Território",
        items: [
            { nome: "Estabelecer Território", desc: "Ao passar um tempo significativo em um local (um prédio, um bairro), você pode declará-lo seu 'Território'. Dentro dele, seus poderes são mais fortes e você está ciente de tudo o que acontece. Você pode gastar 1 Vontade para estender esse senso de autoridade." },
            { nome: "Hierarquia da Ordem", desc: "Um Justiceiro tem um respeito natural por autoridades superiores. Em contrapartida, eles podem exercer uma autoridade intimidadora sobre aqueles que consideram 'criminosos' ou 'caóticos', ganhando +1 dado em testes de Intimidação contra eles." }
        ]
    },
    poderesInatos: [
        { seq: "9", nome: "Autoridade Intrínseca", desc: "Sua convicção é sua força. Você pode usar seu atributo de Vontade no lugar de Manipulação para testes de Intimidação e Liderança." },
        { seq: "8", nome: "Perspicaz", desc: "Você ganha uma reação defensiva extra por turno." },
        { seq: "7", nome: "Aplicar a Lei", desc: "Dentro do seu Território, se um aliado for atacado, você pode usar sua reação para fazer um ataque contra o agressor." },
        { seq: "6", nome: "Perdição do Caos", desc: "Passivo. Seres de domínio 'Caótico' ou 'Abissal' têm -2 dados em testes de resistência contra seus poderes." },
        { seq: "5", nome: "Defensor da Ordem", desc: "Ataques contra seres de inclinação maligna ou caótica recebem +2 no dano base." },
        { seq: "4", nome: "Adaptabilidade", desc: "Ganhe +3 permanentes na sua perícia de Reflexos." },
        { seq: "2", nome: "Autoridade Inquestionável", desc: "Seres de Sequência inferior à sua (não-divinos) devem passar em um teste de Vontade (Dif. 8) para conseguir mentir diretamente para você." },
        { seq: "2 - Anjo", nome: "Maestria Arcana", desc: "O custo em PE de todas as suas habilidades Beyonder (de qualquer Sequência) é permanentemente reduzido pela metade (arredondado para cima)." }
    ],
    formaMitica: {
        nome: "Árbitro da Lei Eterna",
        disponivel: "(Habilidade disponível a partir da Sequência 4)",
        ativacao: "Requer uma ação completa e causa Degradação de Sanidade e acumula Pontos de Corrupção Mítica, conforme as regras gerais do sistema.",
        descricao: "Seu corpo se reveste de uma armadura dourada e prateada, cravejada com runas pulsantes que ditam leis cósmicas. Seus olhos brilham como faróis brancos, iluminando a verdade oculta e queimando as mentiras. Uma corrente de julgamento flutua ao seu redor, pronta para acorrentar transgressores. Em suas mãos, um martelo celestial emana uma aura de autoridade inquestionável, enquanto um grimório flutuante registra todas as infrações em tempo real. Sua voz ecoa como um tribunal divino, impondo silêncio e respeito.",
        bonus: "Seu Vigor e sua Presença aumentam em +2.",
        poderes: [
            { tipo: "Passivo", nome: "Bastião da Ordem - Seq. 4", desc: "Enquanto nesta forma, você e seus aliados em um raio de 10m ganham Armadura 3 contra-ataques de fontes caóticas ou profanas." },
            { tipo: "Ação", nome: "Édito da Supressão - Seq. 4 Requisito", desc: "Gaste 6 PE para estabelecer uma Zona de Ordem. Escolha uma regra simples (ex: 'Não usar habilidades místicas'). Quem a violar na área sofre dano mental (8 dados) e fica silenciado por um turno." },
            { tipo: "Reação", nome: "Escudo da Legalidade - Seq. 3", desc: "Quando um aliado dentro da sua Zona de Ordem é atacado, gaste 3 PE. Ele ganha RD 10 e reflete o ataque de volta ao agressor como dano de luz." },
            { tipo: "Ação", nome: "Espreitador da Lei - Seq. 2", desc: "Gaste 5 PE. Você invoca um Espectro da Sentença, uma entidade de pura lei que persegue um alvo específico e o pune toda vez que ele quebra uma das suas regras." }
        ]
    },
    mythicalForm: {
      incomplete: { 
        tempHpBonus: 35,
        attributeBoosts: { vigor: 2, presença: 1 },
        sanityCostPerTurn: "1",
        abilities: [
          { name: "Aura da Lei Menor", desc: "Aliados em um raio de 5m ganham +1 em testes de Vontade para resistir a medo e caos." },
          { name: "Correntes do Julgamento", desc: "Você pode gastar 4 PE para lançar correntes de luz que prendem um alvo. O alvo deve fazer um teste de Força (DT 7) para se libertar." }
        ]
      },
      complete: {
        tempHpBonus: 70,
        attributeBoosts: { vigor: 4, presença: 2 },
        abilities: [
          { name: "Santuário da Ordem", desc: "Sua 'Zona de Ordem' se torna absoluta. Nenhuma habilidade caótica ou de ilusão de nível Semideus ou inferior pode funcionar dentro dela." },
          { name: "Decreto Inquebrável", desc: "Uma vez por transformação, você pode gastar 12 PE para emitir um decreto que deve ser obedecido por todos na área (exceto seres de nível igual ou superior). O comando deve ser uma proibição simples ('Não atacar', 'Soltar armas')." }
        ]
      }
    },
    domain: {
        description: "A magia da Lei, da Ordem e da Autoridade como forças primordiais. Para um Justiceiro, as regras não são uma invenção social, mas pilares que sustentam a própria realidade. Quebrar suas leis é convidar o caos.",
        particulas: [
            { name: "Lex", translation: "Lei", type: "Objeto/Característica", conceito: "A essência da regra, do decreto e da ordem absoluta. É a estrutura conceitual que define o que é permitido e o que é proibido.", exemplo: "Am Locus Lex (Proteger Lugar com Lei) — Cria uma 'Zona de Ordem', uma área onde habilidades caóticas ou de enganação se tornam mais difíceis de usar.", uso: "As Ala Lex (Destruir Abstrato com Lei) — 'Julga' um conceito, como a 'escuridão' em uma sala ou o 'medo' em uma pessoa, e o destrói temporariamente." },
            { name: "Iudex", translation: "Julgamento", type: "Função", conceito: "O ato de perceber e expor uma 'transgressão'. Não revela segredos como Il, mas sim falhas, fraquezas ou violações de uma ordem.", exemplo: "Iudex Ivi (Julgar Pessoa) — Revela a fraqueza fundamental ou o crime mais pesado na consciência de um alvo, deixando-o mentalmente vulnerável.", uso: "Iudex Magia (Julgar Magia) — Analisa um feitiço inimigo e declara um 'veredito' que o enfraquece." },
            { name: "Dikē", translation: "Equilíbrio", type: "Função", conceito: "O poder de impor um equilíbrio perfeito e intransigente. Dikē não é sobre justiça, é sobre a retribuição matemática e inevitável.", exemplo: "Dikē Ivi (Equilibrar Pessoa) — Qualquer dano que o alvo causar a outros nos próximos turnos, ele sofrerá metade desse dano em si mesmo.", uso: "Dikē [Conceito] (Equilibrar [Conceito]) — Estabelece um equilíbrio conceitual. Dikē Lum Ten (Equilibrar Luz e Escuridão) forçaria uma área a ter exatamente 50% de luz e 50% de sombra." }
        ]
    },
    sequences: {
        "Sequência 9: Árbitro": [
            { name: "Persuasão Divina", desc: "Gaste 2 PE e dê uma ordem simples ('Solte!', 'Pare!'). Faça um teste de Presença + Intimidação vs. Vontade do alvo. Se vencer, ele obedece por um turno." },
            { name: "Sentir Desordem", desc: "Gaste 1 PE para sentir a presença de intenções caóticas ou atos ilegais recentes em um local." },
            { name: "Voz da Autoridade", desc: "Passivo. A dificuldade para você usar Liderança com soldados ou guardas diminui em 1." },
            { name: "Defensor da Ordem (Menor)", desc: "Passivo. Você causa +1 de danos contra criaturas que o Narrador defina como 'caóticas' (ex: demônios, alguns tipos de fantasmas)." }
        ],
        "Sequência 8: Xerife": [
            { name: "Visão da Justiça", desc: "Gaste 2 PE. Você pode 'marcar' um alvo que já tenha visto (mesmo que por foto). Pelos próximos 10 minutos, você tem uma sensação vaga da direção em que ele se encontra." },
            { name: "Eloquência", desc: "Passivo. Ganhe +2 dados em testes sociais para debates formais e argumentação baseada em lógica e lei." },
            { name: "Muralha", desc: "Passivo. Para cada inimigo que estiver engajado em combate corpo a corpo com você, sua Defesa aumenta em 1." },
            { name: "Recompensa per Capita", desc: "Passivo. Seu instinto para caçar é aprimorado. Ganhe +2 dados em testes de Investigação para rastrear um alvo que tenha uma recompensa por sua cabeça." }
        ],
        "Sequência 7: Interrogador": [
            { name: "Sonda Mental", desc: "Gaste 4 PE. Foque nos olhos de um alvo. Ele deve passar num teste de Vontade (Dif. 8) ou você poderá extrair a resposta verdadeira para uma pergunta simples." },
            { name: "Lugar, Hora e Lei", desc: "Ao investigar uma cena de crime, gaste 3 PE. O Narrador lhe dará uma pista crucial que outros teriam deixado passar." },
            { name: "Proficiência Bélica", desc: "Passivo. Escolha um tipo de arma (espadas, pistolas, etc.). Você se torna treinado nela, ganhando +1 dado em todos os ataques com ela." },
            { name: "Perseguidor da Insanidade", desc: "Passivo. Você é treinado em entender a mente quebrada. Ganhe +2 dados em testes para prever as ações de um personagem com Sanidade baixa." }
        ],
        "Sequência 6: Juiz": [
            { name: "Veredito - Emprisionar", desc: "Como uma ação, gaste 2 PE para criar uma parede invisível que o aprisiona por 1 minuto ou até ele passar em um teste de Força para quebrá-la." },
            { name: "Veredito - Libertar", desc: "Gaste 2 PE. Você anula qualquer efeito de controle mental ou paralisia em um alvo que falhou em seu teste de resistência." },
            { name: "Veredito - Açoitar", desc: "Gaste 3 PE. O alvo sofre 3 dados de dano de pura dor (dano Letal que ignora armadura)." },
            { name: "Veredito - Exilar", desc: "Gaste 4 PE. Se o alvo falhar em um teste de Vigor (Dif. 7), ele é arremessado 100 metros para longe, fora do combate." }
        ],
        "Sequência 5: Paladino Disciplinar": [
            { name: "Punição (Ativo)", desc: "Toque um alvo. Gaste 8 PE para infligir um castigo temático: um ladrão pode ter suas mãos paralisadas; um mentiroso pode perder a voz. Requer um teste de Presença + Intimidação vs. Vontade." },
            { name: "Decreto de Proibição (Ativo)", desc: "Gaste 3 PE e declare uma proibição em uma área de 10m por uma cena (ex: 'É proibido usar armas de fogo'). Qualquer um que quebrar a regra deve fazer um teste de Vontade (Dif. 8)." },
            { name: "Agravante (Reação)", desc: "Quando um inimigo quebra um de seus Decretos, você pode gastar 2 PE como reação para aplicar um de seus Vereditos (Seq. 6) nele instantaneamente." },
            { name: "Armadura da Fé (Ativo)", desc: "Gaste 5 PE. Você conjura uma armadura de luz espectral que lhe concede +4 dados para absorver dano por uma cena." }
        ],
        "Sequência 4: Mago Imperativo": [
            { name: "Privação (Ativo)", desc: "Gaste 10 PE e mire em um Beyonder. Faça um teste disputado de Espiritualidade vs. Espiritualidade. Se vencer, você 'proíbe' o alvo de usar um de seus poderes por uma cena." },
            { name: "Olhar da Verdade (Passivo)", desc: "Seus olhos se tornam detectores de mentiras perfeitos. Você sempre sabe quando alguém está mentindo para você." },
            { name: "Prisão Lógica (Ativo)", desc: "Gaste 8 PE. Você prende um alvo em um labirinto mental de lógica e paradoxos. Ele fica incapacitado por 1d4 turnos, tentando resolver um enigma impossível." },
            { name: "Selo da Lei (Ativo)", desc: "Você pode criar selos mágicos para trancar portas ou caixas. Os selos só podem ser quebrados por força ou magia de nível de Semideus ou superior. Custa 5 PE por selo." }
        ],
        "Sequência 3: Caçador do Caos": [
            { name: "Caos (Ativo)", desc: "Gaste 10 PE. Você projeta a entropia sobre um alvo, causando efeitos aleatórios e imprevisíveis. Role 1d6 na tabela de caos do Narrador." },
            { name: "Anular Caos (Reação)", desc: "Gaste 12 PE para anular um poder de domínio do Azar ou Caos usado perto de você." },
            { name: "Cadeia da Ordem (Ativo)", desc: "Sua habilidade Veredito - Emprisionar evolui. Agora você pode acorrentar até 3 inimigos." },
            { name: "Presença Ordenadora (Passivo)", desc: "Sua Aura de Ordem se torna mais potente. Dentro dela, a dificuldade de todos os poderes sobrenaturais aumenta em 1." }
        ],
        "Sequência 2: Balanceador": [
            { name: "Equilíbrio da Justiça (Ativo)", desc: "Gaste 15 PE. Escolha até três alvos. Você pode redistribuir os níveis de Vitalidade entre eles ou redistribuir danos, curando um aliado ao ferir um inimigo." },
            { name: "Anulação Conceitual (Ativo)", desc: "Gaste 18 PE. Você pode temporariamente 'proibir' um conceito abstrato em uma área por um turno. Proíba 'dano', 'movimento' ou 'fogo'." },
            { name: "Mão da Ordem (Ativo)", desc: "Gaste 10 PE por turno. Você manifesta um campo de força dourado que pode ser moldado como um punho, uma parede ou uma cúpula." },
            { name: "Zona de Ordem Absoluta (Passivo)", desc: "Sua Zona de Ordem (Seq. 4) agora é permanente ao redor de você. Você pode ter até 3 regras ativas ao mesmo tempo." }
        ],
        "Sequência 1: Mão da Ordem": [
            { name: "Decreto de Ordem (Ativo)", desc: "Gaste 25 PE para declarar um decreto sobre uma vasta área. O decreto deve ser uma regra simples ('Não haverá violência esta noite')." },
            { name: "Julgamento Final (Ativo)", desc: "Uma vez por história. Você pode invocar o poder da Lei Eterna e julgar uma criatura. Faça um teste de Vontade + Espiritualidade contra o poder total do alvo." },
            { name: "O Grande Legislador (Passivo)", desc: "Sua conexão com a ordem é tão profunda que você se torna imune ao caos. Você é imune a poderes da Roda da Fortuna e do Erro." },
            { name: "A Prisão Perfeita (Ativo)", desc: "Uso único e épico. Gaste 30 PE e 1 Degradação de Sanidade permanente. Você pode prender uma entidade em um loop infinito de lógica paradoxal." }
        ]
    }
};
