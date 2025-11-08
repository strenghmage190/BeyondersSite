import { PathwayData } from '../../types';

export const portaData: PathwayData = {
    category: "Lord of Mysteries",
    pathway: "CAMINHO DA PORTA",
    pvBase: 5,
    pvPorAvanço: 3,
    peBase: 20,
    pePorAvanço: 6,
    vontadeBonus: 1,
    sanidade: 7,
    mecanicaUnica: {
        titulo: "Bússola Espacial",
        items: [
            { nome: "Sentido de Direção Perfeito", desc: "Você nunca se perde. Mesmo em um local desconhecido ou em completa escuridão, você sempre sabe para onde está o norte e pode refazer seu caminho." },
            { nome: "Mapeamento Mental", desc: "Depois de passar por uma área, você cria um mapa mental perfeito dela, lembrando-se de cada corredor, porta e layout." }
        ]
    },
    poderesInatos: [
        { seq: "9", nome: "Guia", desc: "Você pode abrir qualquer porta ou fechadura não-mágica com um toque. Custa 1 PE." },
        { seq: "8", nome: "Conversão de Emergência", desc: "Em uma emergência, você pode converter sua própria força vital em combustível. Sofra 1 nível de dano Letal para recuperar 2 PE." },
        { seq: "7", nome: "Afinidade Espiritual", desc: "Sua conexão com o cosmos se aprofunda. Adicione seu atributo de Inteligência à sua reserva máxima de PE." },
        { seq: "6", nome: "Tese Mágica", desc: "Você consegue discernir entre resquícios espirituais causados por eventos naturais e os causados por feitiçaria, sabendo se alguém esteve 'brincando' com a realidade local." },
        { seq: "5", nome: "Luz Estelar", desc: "Durante a noite e sob as estrelas, o custo em PE de suas habilidades é reduzido em 1 (mínimo 1)." },
        { seq: "4", nome: "Reserva do Trapaceiro", desc: "Sua reserva máxima de PE aumenta permanentemente em 10." },
        { seq: "2", nome: "Corpo Astral", desc: "Você se torna parcialmente etéreo. Você ganha +2 dados para resistir a venenos e doenças, pois seu corpo não é inteiramente físico." },
        { seq: "2 - Anjo", nome: "Maestria Arcana", desc: "O custo em PE de todas as suas habilidades Beyonder (de qualquer Sequência) é permanentemente reduzido pela metade (arredondado para cima)." }
    ],
    formaMitica: {
        nome: "Vazio de Incontáveis Portões",
        disponivel: "(Habilidade disponível a partir da Sequência 4)",
        ativacao: "Requer uma ação completa e causa Degradação de Sanidade e acumula Pontos de Corrupção Mítica, conforme as regras do sistema.",
        descricao: "Seu corpo físico se desfaz, não em carne ou energia, mas no próprio espaço. Você se torna um vazio humanoide, uma silhueta recortada na realidade, preenchida com a visão de um cosmos estrelado. Ao redor do seu corpo, inúmeros portões feitos de vermes estelares se abrem e fecham aleatoriamente.",
        bonus: "Sua Inteligência e sua Destreza aumentam em +2.",
        poderes: [
            { tipo: "Passivo", nome: "Corpo Dimensional (Seq. 4)", desc: "Ataques físicos mundanos que te atravessam são teleportados para um ponto aleatório a 10 metros de distância. Você é imune a efeitos de agarrar e imobilização." },
            { tipo: "Ação", nome: "Abismo na Palma da Mão (Seq. 4 Requisito)", desc: "Gaste 8 PE. Você abre um pequeno portal na sua mão que suga um ataque direcionado a você, seja físico ou mágico, negando-o completamente." },
            { tipo: "Ação", nome: "Exílio Momentâneo (Seq. 3)", desc: "Toque um alvo. Gaste 10 PE. Você o bane para uma dimensão aleatória por 1d4 turnos." },
            { tipo: "Reação", nome: "Salto entre Planos (Seq. 2)", desc: "Ao ser alvo de um ataque que você não pode negar, gaste 5 PE para 'piscar' para fora da realidade por um instante, evitando o ataque." }
        ]
    },
    mythicalForm: {
      incomplete: { 
        tempHpBonus: 25,
        attributeBoosts: { inteligencia: 2, destreza: 1 },
        sanityCostPerTurn: "1d2", 
        abilities: [
          { name: "Piscar Espacial", desc: "Você pode se teleportar a curtas distâncias (até 10m) como uma ação de movimento, deixando um breve rastro de estrelas." },
          { name: "Sentir Chaves", desc: "Você sente a presença e o estado (trancada, aberta, emperrada) de todas as portas e fechaduras em um raio de 50 metros." }
        ]
      },
      complete: {
        tempHpBonus: 50,
        attributeBoosts: { inteligencia: 4, destreza: 2 },
        abilities: [
          { name: "Cadeado Conceitual", desc: "Você pode gastar 10 PE para 'trancar' um conceito abstrato em uma área (ex: 'movimento', 'som', 'magia')." },
          { name: "Viagem Estelar", desc: "Você pode gastar 15 PE para abrir um portal para qualquer local sob o céu estrelado que você possa ver, não importa a distância." }
        ]
      }
    },
    domain: {
        description: "A magia do Espaço, da Viagem e da Chave Universal. O seguidor da Porta sabe que o universo é uma casa cheia de salas, e ele possui a chave para todas elas.",
        particulas: [
            { name: "Pylē", translation: "Porta", type: "Objeto/Característica", conceito: "A essência das passagens, portais, limiares e fronteiras, sejam elas físicas ou dimensionais.", exemplo: "It Ivi Pylē (Transportar Pessoa via Porta) — A base para o teleporte e viagens espaciais.", uso: "Ar Locus Pylē (Aprisionar Lugar com Porta) — Cria um 'Selo', tornando um cômodo ou área inacessível." },
            { name: "Graphō", translation: "Registro", type: "Função", conceito: "O poder de 'copiar' e 'colar' a realidade. Esta Função armazena a estrutura de um feitiço, um objeto ou até mesmo uma pessoa para replicá-lo depois.", exemplo: "Graphō [Fórmula Mágica] — Permite ao Mago copiar um feitiço que ele acabou de testemunhar para usá-lo uma vez.", uso: "Ev Graphō Ivi (Invocar Registro de Pessoa) — Cria uma 'Cópia Espacial' de um aliado." },
            { name: "Aster", translation: "Estrela", type: "Objeto/Característica", conceito: "Canaliza o poder dos corpos celestes e a matemática do cosmos. É a magia da astrologia e da navegação universal.", exemplo: "Im Eli Aster (Atacar com Elemento Estelar) — Invoca um pequeno meteoro ou um raio de luz estelar destrutiva.", uso: "Il Fatum Aster (Revelar Destino com Estrela) — Conduz um ritual de Astrologia, permitindo mapear o futuro provável de uma pessoa." }
        ]
    },
    sequences: {
        "Sequência 9: Aprendiz": [
            { name: "Abrir Porta", desc: "Gaste 2 PE para criar uma 'porta' em qualquer superfície sólida com até 1 metro de espessura. A porta dura 1 minuto." },
            { name: "Visão Sem Fronteiras", desc: "Gaste 1 PE por turno. Sua visão pode atravessar estruturas simples, permitindo que você veja dentro de salas ou baús fechados." },
            { name: "Pequeno Salto", desc: "Como uma ação de movimento, gaste 2 PE para se teleportar para qualquer ponto que você possa ver a até 5 metros." },
            { name: "Sentir Portais", desc: "Passivo. Você pode sentir a presença de portais, passagens dimensionais e espaços ocultos em um raio de 30 metros." }
        ],
        "Sequência 8: Mestre de Truques Estelar": [
            { name: "Flash de Luz", desc: "Gaste 1 PE como reação. Você emite um flash de luz que ofusca todos ao seu redor. Inimigos devem fazer um teste de Vigor (Dif. 6) ou sofrerão -2 dados na próxima ação." },
            { name: "Névoa Mágica", desc: "Gaste 3 PE para criar uma névoa mágica em um raio de 5m que obscurece a visão e impõe -1 em todos os testes de ataques." },
            { name: "Tombo", desc: "Gaste 1 PE. Você altera a lei da fricção em uma pequena área. O alvo deve fazer um teste de Destreza (Dif. 7) ou cairá." },
            { name: "Resfriar/Abrasador", desc: "Gaste 1 PE para tocar um objeto. Ele se torna extremamente frio ou quente por um minuto." }
        ],
        "Sequência 7: Astrólogo": [
            { name: "Previsão Astrológica", desc: "Com um ritual de 10 minutos usando um mapa estelar, você pode fazer uma pergunta sobre o futuro. A resposta virá de forma vaga e simbólica. Custa 4 PE." },
            { name: "Disrupção Espiritual", desc: "Gaste 3 PE. Você cria uma 'estática' espiritual em uma área. A dificuldade de todos os testes de adivinhação feitos na área aumenta em 2." },
            { name: "Identificação Cósmica", desc: "Ao observar a aura de uma pessoa sob as estrelas, você pode fazer um teste de Percepção + Ocultismo para determinar seu verdadeiro nome, alinhamento ou Caminho." },
            { name: "Astrologia", desc: "Passivo. Ganhe +2 dados em todos os testes relacionados a astronomia, navegação estelar e o uso de ferramentas de adivinhação." }
        ],
        "Sequência 6: Escriba": [
            { name: "Transcrever Habilidade", desc: "Ao testemunhar um poder Beyonder, você pode fazer um teste de Inteligência + Ocultismo para criar um 'registro' dele em um pergaminho. Gaste 1 PE. Mais tarde, você pode queimar o registro para replicar o poder uma única vez." },
            { name: "Runa de Teleporte", desc: "Gaste 5 PE. Você pode gravar uma runa em duas superfícies. Qualquer pessoa pode usar a runa como uma 'porta' de mão única para se teleportar para a outra." },
            { name: "Círculo de Aprisionamento", desc: "Gaste 4 PE. Desenhe um círculo rúnico no chão. O primeiro ser sobrenatural a pisar nele fica preso, incapaz de sair até o círculo ser quebrado." },
            { name: "Tomo da Elemental", desc: "Passivo. Sua compreensão sobre as leis universais se aprofunda. Você aprende um feitiço elemental de baixo nível de outro Caminho." }
        ],
        "Sequência 5: Viajante": [
            { name: "Porta do Viajante", desc: "Sua habilidade de Abrir Porta evolui. Gaste 5 PE para abrir um portal para qualquer local que você já tenha visitado pessoalmente." },
            { name: "Lampejo", desc: "A evolução do Pequeno Salto. Você pode se teleportar instantaneamente para qualquer lugar que possa ver como uma ação de movimento. Custa 2 PE por uso." },
            { name: "Trilhar Caminhos", desc: "Ao criar um portal, você pode gastar +5 PE para permitir que outras pessoas viajem através dele com você." },
            { name: "Bússola Natural", desc: "Passivo. Você sempre sabe a direção do local mais seguro próximo ou de um portal dimensional ativo." }
        ],
        "Sequência 4: Segredos do Feiticeiro": [
            { name: "Guarda Secreta (Parte Oculta)", desc: "Gaste 10 PE. Você pode 'dobrar' o espaço e ocultar uma sala inteira. A sala se torna inacessível e invisível, a menos que se use uma 'chave'." },
            { name: "Guarda Secreta (Selo)", desc: "Você pode criar selos mágicos que impõem regras a um local (ex: 'Ninguém pode mentir aqui'). Requer um ritual e um custo de 8 PE por selo." },
            { name: "Guarda Secreta (Exílio)", desc: "Toque um alvo. Faça um teste disputado de Espiritualidade vs. Vontade. Se vencer, você o exila para uma dimensão de bolso inofensiva por uma hora. Custa 12 PE." },
            { name: "Porta Ilusória", desc: "Gaste 5 PE. Você cria a ilusão de uma porta em uma parede. A primeira pessoa a tentar abri-la sofre um choque psíquico, sofrendo dano de Sanidade." }
        ],
        "Sequência 3: Andarilho": [
            { name: "Vagar (Viagem Astral)", desc: "Gaste 15 PE. Você pode projetar sua consciência para o Mundo Astral, o plano que reflete o cosmos." },
            { name: "Vagar (Entrar no Cosmos)", desc: "Com um grande risco, você pode usar o Mundo Astral como uma ponte para viajar fisicamente para outros planetas ou dimensões conhecidas." },
            { name: "Gravar Coordenadas", desc: "Ao visitar um local, você pode gastar 1 Vontade para 'gravar' suas coordenadas espaciais em sua mente. Isso permite que sua Porta do Viajante se abra para esse local com perfeição." },
            { name: "Mestre dos Portais", desc: "Passivo. A quantidade de portais que você pode manter abertos simultaneamente agora é igual ao seu rating de Inteligência." }
        ],
        "Sequência 2: Andarilho dos Planos": [
            { name: "Espaço-Trocador", desc: "Gaste 20 PE. Escolha duas áreas que você possa ver. Você troca instantaneamente a posição delas." },
            { name: "Cópia Espacial", desc: "Gaste 15 PE. Você cria uma duplicata perfeita, mas temporária, de uma sala ou área pequena." },
            { name: "Planes Walker", desc: "Passivo. Sua habilidade Vagar evolui. Agora você pode levar outras pessoas consigo em suas viagens astrais ou cósmicas com segurança." },
            { name: "Replicação de Efeito", desc: "Uma vez por cena, gaste 10 PE como reação para 'copiar' um poder Beyonder que acabou de ser usado em sua presença e 'colá-lo' em outro alvo." }
        ],
        "Sequência 1: Chave das Estrelas": [
            { name: "Chave das Estrelas (Abertura Universal)", desc: "Sua habilidade Porta do Viajante se torna absoluta. Gaste 20 PE. Você pode abrir um portal para qualquer lugar que você possa imaginar." },
            { name: "Chave das Estrelas (Conectar)", desc: "Você pode criar portais permanentes que conectam dois locais, criando uma rede de viagem pessoal. Custa um sacrifício permanente de Vontade." },
            { name: "Teletransporte Aleatório", desc: "Uso supremo. Gaste 30 PE e 1 Degradação de Sanidade. Você pode mover as próprias estrelas e planetas, mas o resultado é imprevisível." },
            { name: "A Porta Final", desc: "Uso único e épico. Gaste toda a sua energia e se sacrifique. Você abre uma porta para o 'lado de fora' do universo, para o Caos além da realidade." }
        ]
    }
};