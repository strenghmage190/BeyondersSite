import { PathwayData } from '../../types';

export const rodaDaFortunaData: PathwayData = {
    category: "Wheel of Fortune",
    pathway: "CAMINHO DA RODA DA FORTUNA",
    pvBase: 5,
    pvPorAvanço: 3,
    peBase: 10,
    pePorAvanço: 4,
    vontadeBonus: 0,
    sanidade: 6,
    mecanicaUnica: {
        titulo: "Atributo Sorte",
        items: [
            { nome: "Rating de Sorte", desc: "Você ganha 1 ponto neste traço nas Sequências 9, 7, 5, 3 e 1." },
            { nome: "Reserva de Sorte", desc: "Sua reserva de Pontos de Sorte é igual ao seu rating permanente no início de cada sessão." },
            { nome: "Uso", desc: "Gaste 1 Ponto de Sorte para ativar poderes, rolar novamente dados falhos ou forçar um oponente a rolar novamente um sucesso." }
        ]
    },
    poderesInatos: [
        { seq: "9", nome: "Mediunidade", desc: "Ao consumir sua primeira poção, role um d10. Se for ímpar, você tem um vislumbre confuso do futuro de alguém que tocar; se for par, um vislumbre do passado." },
        { seq: "8", nome: "Prever Trajetória", desc: "Você ganha +2 dados em todos os testes para se Esquivar de ataques de projéteis." },
        { seq: "7", nome: "Sexto Sentido", desc: "Sua visão espiritual desperta. Você ganha +2 dados em testes de Percepção para sentir presenças sobrenaturais." },
        { seq: "7", nome: "Protegido do Destino", desc: "Ataques críticos contra você são rebaixados para normais. Uma vez por cena, um golpe fatal simplesmente erra." },
        { seq: "6", nome: "Desenvolvimento Cômico", desc: "Sua sorte distorce a realidade. Quando você usa Sorte para ajudar um aliado, o sucesso dele pode vir de uma forma cômica e improvável, criando vantagens narrativas." },
        { seq: "4", nome: "Numerologia", desc: "Sucesso automático em testes de matemática, o que lhe concede +2 dados em todos os testes de Armas de Fogo." },
        { seq: "4", nome: "Gravidade do Acaso", desc: "Seus Sucessos Críticos causam o dano máximo possível, em vez de dobrar os dados." },
        { seq: "2", nome: "Contra Adivinhação", desc: "Uma vez por cena, ao ser alvo de um poder de adivinhação, gaste 2 PE. A adivinhação falha e o adivinho recebem uma informação falsa." },
        { seq: "2 - Anjo", nome: "Maestria Arcana", desc: "O custo em PE de todas as suas habilidades Beyonder (de qualquer Sequência) é permanentemente reduzido pela metade (arredondado para cima)." }
    ],
    formaMitica: {
        nome: "Ouroboros do Destino",
        disponivel: "(Habilidade disponível e evolutiva a partir da Sequência 4)",
        ativacao: "Ativação (Seq. 4 e 3): Requer uma ação completa. Custo: Ao ativar, e a cada turno que a forma for mantida, você sofre 1 Nível de Degradação de Sanidade. Você também acumula 1 Ponto de Corrupção Mítica por turno. Ativação (Seq. 2 e 1): O dano automático de Sanidade por turno é removido, mas o sistema de Pontos de Corrupção Mítica e o Teste de Expiação final permanecem.",
        descricao: "Seu corpo se desfaz em uma serpente cósmica de luz estelar e escamas negras, mordendo a própria cauda. Fios luminosos do destino tecem e se desfazem ao seu redor.",
        bonus: "Seu Vigor e seu rating de Sorte aumentam em +2. Sua Vitalidade e Reserva de Sorte são totalmente restauradas.",
        poderes: [
            { tipo: "Passivo", nome: "Roda do Renascimento - Seq. 4", desc: "Você recupera um nível de Vitalidade perdido no início de cada um dos seus turnos." },
            { tipo: "Reação", nome: "Girar a Roda - Seq. 2", desc: "Ao falhar em um teste, gaste 3 PE para rolar novamente com uma quantidade de dados bônus igual ao seu rating de Sorte." },
            { tipo: "Ação", nome: "Colapso das Eras - Seq. 3", desc: "Gaste 6 PE para invocar um desastre localizado (chuva de granizo de vidro, tentáculos de azar) que causa 8 dados de dano em uma área e cria terreno difícil." }
        ]
    },
    mythicalForm: {
      incomplete: { 
        tempHpBonus: 30,
        attributeBoosts: { vigor: 2, inteligencia: 1 },
        sanityCostPerTurn: "1",
        abilities: [
          { name: "Aura de Sorte Menor", desc: "Aliados próximos podem rolar novamente um dado com resultado '1' uma vez por cena." },
          { name: "Ajuste de Probabilidade", desc: "Gaste 2 PE para adicionar ou subtrair 1 do resultado de um único dado rolado por você ou por um alvo." }
        ]
      },
      complete: {
        tempHpBonus: 60,
        attributeBoosts: { vigor: 4, inteligencia: 2 },
        abilities: [
          { name: "Reescrever Falha Crítica", desc: "Uma vez por transformação, você pode transformar uma falha crítica sua ou de um aliado em um sucesso simples." },
          { name: "Forçar Sucesso", desc: "Gaste 1 Ponto de Sorte e 10 PE para garantir que uma ação sua ou de um aliado (que não seja um ataque) seja bem-sucedida, sem necessidade de rolagem." }
        ]
      }
    },
    domain: {
        description: "A magia do Destino, da Probabilidade e do Acaso como uma lei universal. Um seguidor deste Caminho não acredita em sorte; ele a calcula e a manipula como um apostador divino que sempre conhece as cartas.",
        particulas: [
            { name: "Fatum", translation: "Destino", type: "Característica/Objeto", conceito: "A essência da causalidade, da sorte e do azar como uma energia que pode ser acumulada, roubada ou direcionada.", exemplo: "Im Ivi Fatum (Atacar Pessoa com Destino) — Não causa dano direto, mas inflige uma 'maldição suave' que garante que a próxima ação importante do alvo falhará.", uso: "Un Ala-Fatum Ivi (Conectar Abstrato-Destino a Pessoa) — 'Acorrenta' a sorte de dois alvos. Por um breve período, o sucesso de um significará o fracasso do outro." },
            { name: "Dyspote", translation: "Infortúnio", type: "Função", conceito: "O poder de invocar uma calamidade localizada. Não é apenas azar, é o universo ativamente conspirando contra o alvo.", exemplo: "Dyspote Machina (Infortúnio no Mecanismo) — Faz uma série de falhas catastróficas acontecerem em um mecanismo, resultando em uma explosão.", uso: "Dyspote Hypnos (Infortúnio no Sonho) — Garante que os pesadelos de um alvo se tornem proféticos, manifestando-se como maus presságios no mundo real." },
            { name: "Palin", translation: "Reiniciar", type: "Função", conceito: "A habilidade de 'rebobinar' o tempo em uma escala extremamente limitada, forçando a repetição de um evento.", exemplo: "Palin aplicado a um teste falho permite que o jogador o role novamente.", uso: "Palin Ivi (Reiniciar Pessoa) — Força um alvo a repetir sua última ação, seja ela qual for, preso em um micro-loop temporal." }
        ]
    },
    sequences: {
        "Sequência 9: Monstro": [
            { name: "Premonição (Ativo)", desc: "Gaste 1 PE para receber um vago vislumbre de um perigo imediato, ganhando +2 dados no seu próximo teste de defesa." },
            { name: "Sorte do Dia (Passivo)", desc: "No início de cada dia, role um d4. Você pode adicionar este número como bônus a qualquer uma de suas rolagens de dados durante o dia. Usado uma vez, o bônus se vai." },
            { name: "A Prova de Falhas (Ativo)", desc: "Ao tirar um '1' em um teste, gaste 1 Ponto de Sorte para rolar aquele dado novamente. (Requisito: Sorte do Dia)." },
            { name: "Tropeço do Inimigo (Passivo)", desc: "O primeiro inimigo a te atacar em corpo a corpo em uma cena deve passar em um teste de Destreza (Dif. 6) ou cair, perdendo a ação." }
        ],
        "Sequência 8: Robô": [
            { name: "Cálculo de Combate (Ativo)", desc: "Como uma ação, gaste 2 PE. Pelos próximos 3 turnos, adicione seu atributo de Raciocínio à sua Defesa total, enquanto você prevê e calcula os movimentos inimigos." },
            { name: "Ricochete Perfeito (Ativo)", desc: "Ao usar uma arma de fogo, gaste 2 PE para declarar um ataque de ricochete. Seu tiro pode ignorar cobertura e acertar um alvo que você não vê diretamente." },
            { name: "Análise de Falha (Reação)", desc: "Quando um inimigo próximo obtém uma Falha Crítica, você pode gastar 1 PE como uma reação para ganhar uma ação de movimento gratuita e imediata, explorando a abertura." },
            { name: "Recálculo de Dano (Ativo)", desc: "Gaste 1 Ponto de Sorte. Em sua próxima rolagem de dano bem-sucedida, você pode rolar novamente até 3 dados." }
        ],
        "Sequência 7: Sortudo": [
            { name: "Abençoar Sorte (Ativo)", desc: "Gaste 1 Ponto de Sorte. Você ou um aliado que tocar pode rolar novamente todos os dados que falharam em seu próximo teste." },
            { name: "Maldição Suave (Ativo)", desc: "Gaste 1 Ponto de Sorte. O próximo teste de um inimigo que você puder ver terá a dificuldade aumentada em 2." },
            { name: "Azar Acidental (Ativo)", desc: "Gaste 2 PE para amaldiçoar um objeto (arma, maçaneta). A próxima pessoa a usá-lo deve fazer um teste de Sorte (Dificuldade 7). Se falhar, o objeto funciona de maneira desastrosa." },
            { name: "Encontrar o Improvável (Ativo)", desc: "Gaste 5 PE e um minuto de concentração para procurar por algo. O Narrador lhe dará uma pista de como 'ter a sorte' de encontrá-la, mesmo que parecesse impossível." }
        ],
        "Sequência 6: Sacerdote da Calamidade": [
            { name: "Invocar Calamidade (Ativo)", desc: "Gaste 4 PE para marcar um alvo. Pelos próximos 3 turnos, o ambiente se volta contra ele, impondo -2 dados em todas as suas rolagens. (Usa 1 Dado de Corrupção)." },
            { name: "Destino Inconstante (Passivo)", desc: "No início de cada dia, role 3d10 e guarde os resultados. Você pode gastar 1 Ponto de Sorte para substituir o resultado de qualquer d10 rolado em sua presença por um de seus resultados guardados." },
            { name: "Pagamento de Dívidas (Reação)", desc: "Quando um inimigo te acerta com um ataque, você pode gastar 3 PE para 'transferir o azar'. Você sofre o dano, mas a arma ou poder do inimigo se torna inutilizável pelo próximo turno." },
            { name: "Karma Reativo (Ativo)", desc: "Se um inimigo obteve um Sucesso Crítico na rodada anterior, gaste 2 PE. Seu próximo ataque contra aquele inimigo específico tem sua dificuldade reduzida em 2." }
        ],
        "Sequência 5: Vencedor": [
            { name: "Reescrever Resultado (Ativo)", desc: "Uma vez por sessão, se uma de suas ações resultar em falha, você pode gastar 1 Ponto de Vontade e 1 Ponto de Sorte para declarar: 'Não foi isso que aconteceu.' A realidade se ajusta, e a sua falha é reescrita como um sucesso moderado (2 sucessos)." },
            { name: "Zona de Acaso Controlado (Ativo)", desc: "Gaste 8 PE para criar uma aura de 10m de raio que dura por uma cena. Dentro desta zona, você tem controle sobre as probabilidades. Escolha entre Ordem (Ninguém pode obter Sucessos Críticos) ou Caos (Todos os resultados '1' e '10' são tratados como Críticos)." },
            { name: "Armadilha de Paradoxos (Ativo)", desc: "Você toca uma superfície e gasta 1 Ponto de Sorte e 4 PE. A área está amaldiçoada. O primeiro inimigo a entrar é pego em um loop de azar. Sua próxima ação bem-sucedida se torna uma falha, e sua próxima falha causa danos a si mesmo." },
            { name: "Autopreservação do Destino (Poder de Classe Passivo Melhorado)", desc: "Sua habilidade Protegido do Destino (Seq. 7) evolui. Agora, não apenas o primeiro golpe fatal da cena erra, mas ele também atinge o inimigo mais próximo de você." }
        ],
        "Sequência 4: Feiticeiro do Infortúnio": [
            { name: "Zona de Azar (Ativo)", desc: "Gaste 6 PE. Uma aura de má sorte com 20 metros de raio emana de você por 3 turnos. Todos os inimigos dentro dela tratam qualquer '1' e '2' rolados em seus testes como uma Falha Crítica." },
            { name: "Roubar Sorte (Reação)", desc: "Uma vez por cena, quando um inimigo obtiver um Sucesso Crítico, você pode gastar 1 Ponto de Sorte. O sucesso dele é rebaixado para um sucesso normal. Você, em troca, recupera 1d6 PE." },
            { name: "Sifão de Probabilidade (Ativo)", desc: "Gaste 10 PE e mire em um alvo. Faça um teste disputado de Espiritualidade + Sorte vs. Vontade + Sorte do alvo. Se você vencer, pelos próximos 3 turnos, você pode forçar o alvo a rolar dois dados para cada ação e ficar com o pior resultado." },
            { name: "Armadilha de Infortúnio (Ativo)", desc: "Toque uma superfície e gaste 1 Ponto de Sorte. A próxima pessoa a tocar na área deve passar num teste de Vontade (Dificuldade 8) ou todas as suas rolagens pelo próximo turno são automaticamente Falhas Críticas." }
        ],
        "Sequência 3: Andarilho do Caos": [
            { name: "Sorte Caótica (Ativo)", desc: "Gaste 5 PE e 1 Ponto de Sorte. Você pode introduzir um elemento narrativo caótico na cena (ex: 'Reforços', 'Fuga', 'Traição'). O Narrador então o implementa de uma forma totalmente inesperada." },
            { name: "Passo Incerto (Ativo)", desc: "Gaste 3 PE. Você se teleporta para qualquer lugar que possa ver, atravessando barreiras. O destino garante que você chegue seguro, mas sua chegada pode ser levemente imprecisa no tempo ou no espaço." },
            { name: "Desviar do Destino (Passivo)", desc: "Você se torna imune a ataques de oportunidade e não pode ser rastreado por magias de adivinhação de nível inferior ao seu." },
            { name: "Realidade Maleável (Ativo)", desc: "Gaste 8 PE e 1 Vontade. Toque uma fechadura não mágica; ela se abre. Toque uma arma normal; ela se desfaz em pó. Toque uma parede fina; uma porta se forma. O efeito é permanente, mas só pode ser usado em objetos mundanos." }
        ],
        "Sequência 2: Adivinho": [
            { name: "Destino Invertido (Ativo)", desc: "Uma vez por história, você pode apagar uma ação que acabou de acontecer. Gaste 10 PE, 2 Vontade e 3 Pontos de Sorte. A cena é 'rebobinada' para o momento antes da ação, permitindo que todos ajam de forma diferente." },
            { name: "Reescrever Detalhes (Ativo)", desc: "Gaste 5 PE e 1 Ponto de Sorte para introduzir um fato retroativamente na cena: 'Na verdade, eu sempre tive a chave para esta sala no meu bolso'." },
            { name: "Olhar o Tear (Ativo)", desc: "Gaste 15 PE e sofra 1 Nível de Degradação de Sanidade. Você faz uma única pergunta ao Narrador sobre o futuro (até uma semana adiante) e recebe uma resposta 100% precisa e detalhada." },
            { name: "Exílio da Sorte (Ativo)", desc: "Gaste 10 PE. Você bane o conceito de 'sorte' de um alvo por uma cena. O alvo não pode mais se beneficiar de sucessos críticos ou de gastos de recursos como Vontade ou Sorte." }
        ],
        "Sequência 1: Cobra do Destino": [
            { name: "Ressurreição (Passivo Inato)", desc: "Ao morrer, você reencarna como um bebê, sem memórias, mas com seu Caminho intacto. Este poder não precisa ser comprado." },
            { name: "Parar a Roda (Ativo)", desc: "Gaste 20 PE e 5 Pontos de Sorte. Por um minuto, o caos e a probabilidade são silenciados em uma área de 1 km. Todas as rolagens de dados são proibidas. Qualquer ação que exija um teste é automaticamente considerada um sucesso mediano (1 sucesso)." },
            { name: "Âncora da Alma (Ativo)", desc: "Antes de morrer, você pode realizar um ritual poderoso para 'ancorar' sua alma a uma linhagem ou a um objeto. Em vez de reencarnar aleatoriamente, seu próximo personagem terá uma conexão predestinada com essa âncora." },
            { name: "Consumir o Fim (Ativo)", desc: "Uma vez, e apenas uma vez. Você pode usar seu poder supremo para apagar um evento, uma criatura (não-divina) ou um local da existência. Não é apenas destruído; ele é retroativamente removido da linha do tempo." }
        ]
    }
};
