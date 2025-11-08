import { PathwayData } from '../../types';

export const imperadorNegroData: PathwayData = {
    category: "Eternal Darkness",
    pathway: "CAMINHO DO IMPERADOR NEGRO",
    pvBase: 10,
    pvPorAvanço: 4,
    peBase: 15,
    pePorAvanço: 5,
    vontadeBonus: 1,
    sanidade: 7,
    mecanicaUnica: {
        titulo: "A Corrupção do Sistema",
        items: [
            { nome: "Encontrar a Brecha", desc: "Em qualquer situação envolvendo um contrato, uma lei ou um conjunto de regras, você pode fazer um teste de Inteligência + Direito (Dif. 7) para encontrar uma brecha ou uma tecnicalidade que possa ser explorada a seu favor." },
            { nome: "Aura de Desconfiança", desc: "As pessoas sentem instintivamente que você não é confiável. A dificuldade para você usar Carisma para interações honestas aumenta em 1, mas a dificuldade para usar Enganação diminui em 1." }
        ]
    },
    poderesInatos: [
        { seq: "9", nome: "Eloquência", desc: "Ganhe +1 dado em todos os testes de Lábia e Diplomacia." },
        { seq: "8", nome: "Brigão", desc: "Você se torna treinado em uma categoria de arma corpo a corpo de sua escolha." },
        { seq: "7", nome: "Quebra de Contrato", desc: "Seus ataques contra alvos com os quais você tem algum tipo de acordo ou pacto (mesmo que um acordo social vago) ignoram 2 pontos de armadura." },
        { seq: "6", nome: "Domínio Especial - Corrupção", desc: "A perícia Direito agora pode ser usada para encontrar maneiras de corromper sistemas, não apenas para segui-los. Ganhe +2 dados em testes de Direito para encontrar brechas." },
        { seq: "5", nome: "Sob Pressão", desc: "Você ganha +2 dados em testes para resistir a intimidação e a poderes de interrogatório. Você é acostumado a estar sob escrutínio." },
        { seq: "4", nome: "Progenitor das Falhas", desc: "Você pode sentir as fraquezas emocionais e lógicas de qualquer ser que observar por um minuto." },
        { seq: "2", nome: "Realeza", desc: "Seres mortais e mundanos (guardas, plebeus, animais) com baixa Vontade sentem um medo inato de sua autoridade e hesitam em desafiá-lo diretamente." },
        { seq: "2 - Anjo", nome: "Maestria Arcana", desc: "O custo em PE de todas as suas habilidades Beyonder (de qualquer Sequência) é permanentemente reduzido pela metade (arredondado para cima)." }
    ],
    formaMitica: {
        nome: "Babuíno da Anarquia",
        disponivel: "(Habilidade disponível a partir da Sequência 4)",
        ativacao: "Requer uma ação completa e causa Degradação de Sanidade e acumula Pontos de Corrupção Mítica, conforme as regras do sistema.",
        descricao: "Seu corpo se transforma em um primata colossal e grotesco, com pelos negros e encaracolados e olhos vermelhos incandescentes. Suas nádegas expostas brilham com runas caóticas que mudam constantemente. Suas mãos são garras retorcidas, capazes de rasgar não apenas carne, mas as próprias regras da realidade. Sua respiração emite uma névoa púrpura que corrompe a lógica ao seu redor.",
        bonus: "Sua Força e sua Presença aumentam em +2.",
        poderes: [
            { tipo: "Passivo", nome: "Aura da Desordem - Seq. 4", desc: "Regras simples param de funcionar ao seu redor. Fechaduras emperram, máquinas falham, ordens são mal compreendidas. Qualquer uso de tecnologia complexa em um raio de 10m tem 25% de chance de falhar." },
            { tipo: "Ação", nome: "Distorção da Regra - Seq. 4 Requisito", desc: "Gaste 4 PE. Escolha uma regra social ou física simples (ex: 'Não pode voar', 'Portas precisam de chaves') e distorça-a a seu favor por 3 turnos." },
            { tipo: "Reação", nome: "Suborno do Caos - Seq. 3", desc: "Quando uma ação seria desfavorável para você, gaste uma quantidade de PE (rolando 1d6) para 'subornar' a realidade. Um ataque crítico pode se tornar um erro cômico. Se você rolar '1' no d6 de custo, o suborno se volta contra você." },
            { tipo: "Ação", nome: "Isolamento do Caos - Seq. 2", desc: "Gaste 10 PE. Você cria uma barreira caótica que isola uma área. Dentro dela, todas as regras são distorcidas: gravidade invertida, fogo que congela, etc. É uma zona de caos puro que dura por uma cena." }
        ]
    },
    mythicalForm: {
      incomplete: { 
        tempHpBonus: 30,
        attributeBoosts: { forca: 2, manipulacao: 1 },
        sanityCostPerTurn: "1d2",
        abilities: [
          { name: "Aura de Desordem Menor", desc: "Pequenos objetos ao seu redor se comportam de maneira estranha (canetas rolam da mesa, portas rangem). Testes que dependem de precisão (Maquinaria, Ofícios) perto de você têm a dificuldade aumentada em 1." },
          { name: "Sussurro Corruptor", desc: "Você pode gastar 3 PE para sussurrar uma mentira convincente a um alvo. O alvo deve fazer um teste de Vontade (DT 7) ou acreditará na mentira por um curto período." }
        ]
      },
      complete: {
        tempHpBonus: 60,
        attributeBoosts: { forca: 4, manipulacao: 2 },
        abilities: [
          { name: "Campo de Anarquia", desc: "Sua Aura da Desordem se expande para 20m. Qualquer tecnologia mais complexa que uma roldana falha automaticamente na área. Feitiços baseados em ordem têm sua dificuldade aumentada em 2." },
          { name: "Decreto do Tirano", desc: "Gaste 10 PE. Você emite um comando que quebra uma lei social ou física em uma área por uma cena (ex: 'Mentir é impossível aqui', 'Armas não disparam')." }
        ]
      }
    },
    domain: {
        description: "A magia da Anarquia, da Distorção das Regras e da Corrupção da Ordem. O Imperador Negro não quebra as leis com força bruta; ele as torce e as reescreve a seu favor.",
        particulas: [
            { name: "Kaos", translation: "Caos", type: "Característica", conceito: "A essência da entropia, do paradoxo e da desordem. Kaos não é simplesmente mal; é a ausência de regras, a pura aleatoriedade.", exemplo: "Al Locus Kaos (Alterar Lugar com Caos) — Torna as leis físicas de uma área temporariamente imprevisíveis.", uso: "An Ivi Kaos (Restaurar Pessoa com Caos) — Uma forma de cura bizarra que reconstrói de forma 'errada' e grotesca." },
            { name: "Lacuna", translation: "Brecha", type: "Função", conceito: "O poder de encontrar e explorar falhas em qualquer sistema, seja ele um contrato legal, uma barreira mágica ou a armadura de um inimigo.", exemplo: "Il Lex Lacuna (Revelar na Lei uma Brecha) — Encontra uma brecha em qualquer conjunto de regras ou contrato, permitindo contorná-lo legalmente.", uso: "Im Ivi Lacuna (Atacar Pessoa pela Brecha) — Um ataque que ignora completamente a armadura e as defesas convencionais." },
            { name: "Tyrannis", translation: "Tirania", type: "Função", conceito: "A imposição da própria vontade como lei. Diferente de Lex do Justiceiro, Tyrannis não é sobre ordem, é sobre poder absoluto.", exemplo: "Tyrannis Ivi (Tirania sobre Pessoa) — Emite um decreto que compele obediência por puro medo.", uso: "Tyrannis Lex (Tirania sobre a Lei) — Declara uma 'exceção' para si mesmo de uma lei existente. 'Esta lei não se aplica a mim'." }
        ]
    },
    sequences: {
        "Sequência 9: Advogado": [
            { name: "Argumento Irrefutável", desc: "Gaste 2 PE. Faça um teste de Manipulação + Direito vs. Vontade de um alvo. Se vencer, o alvo fica confuso por um turno, incapaz de agir." },
            { name: "Encontrar Brecha Legal", desc: "Ao analisar um contrato ou um conjunto de regras, faça um teste de Inteligência + Direito (Dif. 7) para encontrar uma tecnicalidade ou brecha que pode ser explorada." },
            { name: "Lógica Fria", desc: "Passivo. Ganhe +2 dados em testes para resistir a manipulação emocional ou sedução." },
            { name: "Especialista em Contratos", desc: "Passivo. Ganhe +1 permanente em seu atributo de Inteligência." }
        ],
        "Sequência 8: Bárbaro": [
            { name: "Golpe Brutal", desc: "Gaste 3 PE. Seu próximo ataque corpo a corpo causa +3 de dano e força o alvo a fazer um teste de Vigor (Dif. 7) ou ficar atordoado por um turno." },
            { name: "Não Aqui Comigo Aqui", desc: "Reação. Quando um inimigo tenta usar um poder de controle ou debuff em você, você pode gastar 1 Ponto de Vontade para forçar um novo teste de resistência com +2 dados a seu favor." },
            { name: "Ignorar as Regras", desc: "Passivo. Você pode agir com brutalidade onde outros usariam fineza. Use seu atributo de Força no lugar de Manipulação para testes de Intimidação." },
            { name: "Ignorar Dor", desc: "Uma vez por cena, você pode ignorar as penalidades de um nível de Vitalidade por um turno." }
        ],
        "Sequência 7: Subornador": [
            { name: "Suborno", desc: "Gaste 4 PE e faça uma oferta (dinheiro, um favor, uma informação). O alvo deve passar num teste de Vontade (Dif. 8) para recusar seu suborno e a ordem." },
            { name: "Comprar Influência", desc: "Gaste PE em uma cena social para representar o dinheiro que você está gastando. Para cada 2 PE gastos, ganhe +1 dado em um teste social para obter favores ou acesso." },
            { name: "Suborno-Enfraquecer", desc: "Gaste 3 PE. Você oferece um 'presente' envenenado. O alvo que o aceita sofre -1 em todos os atributos Físicos por uma hora." },
            { name: "Dominância Espiritual", desc: "Passivo. Ganhe +1 permanente em seu atributo de Presença." }
        ],
        "Sequência 6: Barão da Corrupção": [
            { name: "Distorção de Palavras", desc: "Gaste 4 PE. Você pode alterar sutilmente o que um alvo ouve ou diz, torcendo o significado de uma frase. Ótimo para sabotar negociações." },
            { name: "Aura de Corrupção", desc: "Passivo. Pessoas de baixa Vontade que passam muito tempo perto de você começam a adotar seus vícios e visões de mundo. A dificuldade para você corromper NPCs diminui em 1." },
            { name: "Corromper Tecnologia", desc: "Toque um dispositivo mecânico simples. Gaste 3 PE. O dispositivo falha de uma maneira que lhe beneficia (um cofre que se abre, uma arma que emperra)." },
            { name: "Comprar Silêncio", desc: "Ao subornar alguém, gaste +2 PE para que a pessoa esqueça magicamente da transação, lembrando-se apenas de um sentimento vago de lealdade a você." }
        ],
        "Sequência 5: Mentor da Desordem": [
            { name: "Transtorno (Ativo)", desc: "Gaste 8 PE. Escolha entre Transtorno-Local (cria desordem em um local, impondo -2 dados em testes de Percepção) ou Transtorno-Alvo (impõe desordem na mente de um alvo, 25% de chance de errar qualquer ação)." },
            { name: "Distorção de Intenções (Ativo)", desc: "Gaste 6 PE. Altere sutilmente a intenção por trás da ação de um alvo. Ele ainda ataca, mas pode atacar o alvo errado; ele ainda fala, mas diz algo embaraçoso." },
            { name: "Contaminar Poder (Ativo)", desc: "Toque um objeto ou local imbuído com o poder de outro Beyonder. Gaste 10 PE para corrompê-lo, fazendo com que o poder funcione de forma errática ou com efeitos colaterais negativos." },
            { name: "Mestre da Falha (Passivo)", desc: "A dificuldade para você explorar brechas em sistemas e regras (habilidade única) diminui em 2." }
        ],
        "Sequência 4: Conde dos Caídos": [
            { name: "Subversão de Lei (Ativo)", desc: "Gaste 8 PE. Você toca um alvo sob efeito de uma lei, regra ou estado e pode inverter ou transferir o efeito." },
            { name: "Corrupção Sistêmica (Ativo)", desc: "Gaste 15 PE e um dia de trabalho. Você planta a semente da corrupção em uma organização, que com o tempo começará a ruir." },
            { name: "Manipulador de Falhas (Ativo)", desc: "Gaste 5 PE para atacar um alvo explorando uma 'falha' em sua existência. O ataque ignora completamente Defesa e Armadura e causa danos de Caos puro." },
            { name: "Transtorno-Libertação (Ativo)", desc: "Você pode causar desordem em si mesmo, gastando 3 PE, para se livrar de qualquer efeito de controle (paralisia, medo), ganhando +2 em Agilidade por um turno." }
        ],
        "Sequência 3: Invocador da Ruína": [
            { name: "Frenesi de Lei (Ativo)", desc: "Gaste 12 PE. Você entra em um frenesi onde ignora as leis da física por um turno. No final do efeito, você sofre 1d3 de dano Agravado pelo esforço." },
            { name: "Exploração de Lacuna (Reação)", desc: "Uma vez por cena, se um inimigo obtiver uma Falha Crítica, você pode gastar 5 PE para explorar a brecha e realizar uma ação de ataque completa contra ele imediatamente." },
            { name: "Ressurreição da Desordem (Passivo)", desc: "Se você morrer enquanto houver pelo menos uma de suas distorções de regras ou leis ativas na cena, você revive com 50% de sua Vitalidade. Custa 1d10 de Degradação de Sanidade permanente." },
            { name: "Dominação do Absurdo (Ativo)", desc: "Gaste 8 PE. Você força um inimigo a realizar uma ação completamente absurda e ilógica. Requer um teste de Manipulação vs. Vontade (Dif. 9)." }
        ],
        "Sequência 2: Duque da Entropia": [
            { name: "Caos de Lei (Ativo)", desc: "Gaste 20 PE. Você reverte uma lei da física em uma grande área por um minuto. A gravidade empurra em vez de puxar. O fogo congela em vez de queimar." },
            { name: "Distorção da Realidade (Ativo)", desc: "Gaste 15 PE para reescrever as regras locais da realidade, como Inverter a Gravidade ou criar uma Barreira do Vazio." },
            { name: "Falha em Cascata (Ativo)", desc: "Gaste 15 PE. Você toca em um sistema. Uma pequena falha criada por você (um parafuso solto) causa uma cascata de falhas que resulta em um colapso completo." },
            { name: "Anarquia Conceitual (Passivo)", desc: "Sua própria presença causa desordem em conceitos abstratos. Poderes baseados em 'Ordem' ou 'Lei' têm sua dificuldade aumentada em 2 quando usados perto de você." }
        ],
        "Sequência 1: Príncipe da Abolição": [
            { name: "Abolição de Leis (Ativo)", desc: "Uso único e épico. Gaste 30 PE e sofra 1d3 Níveis de Degradação de Sanidade. Você pode apagar permanentemente uma lei fundamental da física ou da magia em uma vasta área." },
            { name: "Onipotência do Caos (Ativo)", desc: "Enquanto estiver em sua Forma Mítica, por 3 rodadas, você ganha imunidade a dano físico e pode anular uma habilidade inimiga por rodada sem custo. Custa 12 PE e 1 Degradação de Sanidade." },
            { name: "Colapso da Realidade (Reação)", desc: "Como uma reação ao seu próprio uso da Onipotência do Caos, sua existência se torna instável. Você perde permanentemente 1 ponto em um atributo, mas inflige uma marca de caos em um inimigo." },
            { name: "Estandarte da Desordem (Passivo)", desc: "Aliados perto de você que agem de forma caótica ganham bônus, enquanto inimigos que tentam seguir a lógica e a ordem sofrem penalidades. Sua simples presença recompensa a anarquia." }
        ]
    }
};
