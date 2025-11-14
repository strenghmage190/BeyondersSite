export const beyonderAbilities = [
    // --- Lord of Mysteries ---
    {
        category: "Lord of Mysteries",
        pathway: "CAMINHO DO TOLO",
        domain: {
            description: "A magia do Mistério, da Fraude e da História. Um Tolo não quebra as regras; ele as reescreve sem que ninguém perceba, rindo do conceito de uma 'realidade' absoluta.",
            particulas: [
                { name: "Neurospasta", translation: "Marionete", type: "Objeto", conceito: "A essência dos 'Fios do Espírito', os elos invisíveis de controle e destino que conectam todas as coisas. Este Domínio permite ao Tolo ver e manipular esses fios.", exemplo: "Et Neurospasta (Controlar Marionete) — A base para o poder de controlar os corpos de outras criaturas, forçando seus movimentos de forma sutil.", uso: "As Neurospasta (Destruir Marionete) — Não destrói a pessoa, mas corta permanentemente os Fios do Espírito que a ligam a um sentimento ou a outra pessoa." },
                { name: "Apatē", translation: "Falha", type: "Função", conceito: "A magia do 'erro'. Esta Função não causa azar, ela introduz uma falha lógica e fundamental em um sistema.", exemplo: "Apatē Machina (Falha em Mecanismo) — Faz uma arma emperrar no momento crucial.", uso: "Apatē Imu (Falha na Mente) — Introduz um lapso de memória ou um erro de julgamento." },
                { name: "Historia", translation: "História", type: "Objeto", conceito: "O registro etéreo do passado, os ecos de eventos que já aconteceram. Permite ao Tolo invocar e manipular esses fantasmas do tempo.", exemplo: "Ev Historia (Invocar História) — Traz uma 'Projeção Histórica' à existência, uma cópia de um ser ou objeto de um momento passado.", uso: "Al Historia (Alterar História) — Altera sutilmente o eco de um evento, mudando a forma como ele é lembrado coletivamente." }
            ]
        },
        sequences: {
            "Sequência 9: Vidente": [
                { name: "Adivinhação com Pêndulo", desc: "Gaste 1 PE e faça uma pergunta de 'sim' ou 'não'. Um teste de Espiritualidade + Ocultismo (Dif. 7) lhe dará a resposta correta." },
                { name: "Visão Além dos Véus", desc: "Gaste 1 PE por turno para ver o mundo espiritual, incluindo auras de vida, espíritos e resíduos de poder." },
                { name: "Alerta de Perigo", desc: "Como reação a um ataque surpresa, gaste 2 PE para aplicar sua Defesa total." },
                { name: "Leitura de Aura Básica", desc: "Com a Visão Espiritual ativa, você pode fazer um teste de Percepção + Empatia para deduzir o estado emocional básico de alguém." },
                { name: "Leitura de Tarô (Ativo)", desc: "Gaste 2 PE. Formule uma questão e, usando um baralho de Tarô, receba uma imagem ou um símbolo mental que representa a resposta de forma abrangente e simbólica." },
                { name: "Numerologia Básica (Ativo)", desc: "Gaste 1 PE. Calcule a fortuna ou o azar de um indivíduo ou evento baseando-se em números relevantes (datas de nascimento, sequências etc.)." }
            ],
            "Sequência 8: Palhaço": [
                { name: "Elasticidade Corporal", desc: "Passivo. Ganhe +2 dados em testes de Acrobacia e reduza em 2 o dano sofrido por quedas." },
                { name: "Bala de Ar Comprimido", desc: "Dispara um projétil de ar invisível. Ataque: Destreza + Furtividade. Dano: 1d6 + Sucessos Líquidos. Um ataque bem-sucedido não revela sua posição." },
                { name: "Transferência de Dano Menor", desc: "Ao sofrer dano, gaste 3 PE. Converta 10 de dano para 5." },
                { name: "Premonição Intuitiva", desc: "Passivo. Ganhe +2 dados em testes para detectar se alguém está mentindo para você." }
            ],
            "Sequência 7: Mágico": [
                { name: "Origami Substitutivo", desc: "Gaste 3 PE para animar uma pequena figura de papel. Você pode trocar de lugar com ela como uma reação, fazendo-a receber um ataque em seu lugar." },
                { name: "Ilusão Visual Simples", desc: "Gaste 2 PE. Crie uma imagem visual estática (não se move e não tem som) do tamanho de uma pessoa. Dura uma cena ou até ser tocada." },
                { name: "Chamas do Mágico", desc: "Gaste 1 PE para manipular uma fonte de fogo pequena (vela, tocha) a até 10 metros, movendo-a pelo ar ou duplicando seu tamanho por um turno." },
                { name: "Salto Flamejante", desc: "Gaste 3 PE. Se houver uma chama visível, você pode se teleportar instantaneamente para a posição dela." }
            ],
            "Sequência 6: Sem Rosto": [
                { name: "Mudança de Rosto", desc: "Gaste 3 PE. Assuma a aparência física exata (incluindo voz) de qualquer pessoa que você já viu de perto. Dura uma hora." },
                { name: "Ilusão Sonora", desc: "Gaste 2 PE para criar um som específico (passos, um grito, uma conversa murmurada) que se origina de um ponto que você possa ver." },
                { name: "Coelho na Cartola", desc: "Passivo. Você ganha acesso a um pequeno espaço de bolso extradimensional onde pode guardar objetos que caibam em suas mãos. Requer 1 PE para guardar ou retirar um item." },
                { name: "Figurino Ilusório", desc: "Ao usar Mudança de Rosto, gaste +2 PE para criar também uma réplica perfeita das roupas da pessoa. O disfarce se torna completo." }
            ],
            "Sequência 5: Marionetista": [
                { name: "Controle dos Fios Espirituais (Ativo)", desc: "Gaste 3 PE por turno. Faça um teste disputado de Espiritualidade + Lábia vs. Vontade do alvo. Se vencer, você controla o corpo dele como uma marionete por um turno." },
                { name: "Criar Marionete (Ativo)", desc: "Realize um ritual de 1 hora e gaste 10 PE sobre um corpo recém-falecido. Ele se torna uma marionete permanente sob seu controle." },
                { name: "Visão da Marionete (Passivo)", desc: "A qualquer momento, você pode perceber o mundo através dos sentidos de qualquer uma de suas marionetes, não importa a distância." },
                { name: "Escudo de Carne (Reação)", desc: "Gaste 2 PE. Force uma marionete (ou um alvo sob seu controle) a usar sua Reação para se mover e interceptar um ataque direcionado a você ou a um aliado." }
            ],
            "Sequência 4: Feiticeiro Bizarro": [
                { name: "Projeção Histórica (Ativo)", desc: "Gaste 8 PE para invocar um 'fantasma' de si mesmo de um momento do passado para lutar ao seu lado por 3 turnos." },
                { name: "Distorção da Realidade (Ativo)", desc: "Gaste 6 PE para alterar temporariamente a propriedade de um objeto por uma cena: transforme água em 'ácido', faça uma parede ficar 'escorregadia', etc." },
                { name: "Replicar Proeza (Ativo)", desc: "Ao observar alguém realizar uma ação física mundana excepcional, você pode gastar 5 PE para replicá-la perfeitamente em seu próximo turno." },
                { name: "Mestre das Marionetes (Passivo)", desc: "Você pode controlar ativamente até três alvos simultaneamente com seus Fios Espirituais, mas cada um exige seu próprio teste e custo de PE por turno." }
            ],
             "Sequência 3: Estudante do Outrora": [
                { name: "Invocar do Vazio Histórico (Ativo)", desc: "Gaste 10 PE e um item que pertenceu a uma pessoa falecida. Você invoca uma cópia perfeita daquela pessoa de quando ela estava viva." },
                { name: "Grafting Conceitual (Ativo)", desc: "Gaste 8 PE. Você 'enxerta' um conceito de um lugar para outro. Pode fazer com que uma porta se abra em um local completamente diferente." },
                { name: "Invocar Verme Espiritual (Ativo)", desc: "Gaste 5 PE. Você implanta um Verme Espiritual em um inimigo. Pelos próximos 3 turnos, ele fica confuso, com 25% de chance de atacar a si mesmo." },
                { name: "Parasita Histórico (Ativo)", desc: "Gaste 12 PE e 1 Vontade. Projete sua consciência para o passado de um objeto ou local. A experiência pode causar dano de Sanidade." }
            ],
            "Sequência 2: Invocador de Milagres": [
                { name: "Concessão de Desejo (Ativo)", desc: "Uma vez por história, você pode conceder um 'milagre'. Diga ao Narrador um desejo plausível. Ele o realizará, mas de forma literal e com uma reviravolta irônica ou perigosa." },
                { name: "Enxerto Abstrato (Ativo)", desc: "Gaste 15 PE para 'roubar' um conceito de um alvo por uma cena (velocidade, fogo, memória)." },
                { name: "Clone Perfeito (Ativo)", desc: "Gaste 10 PE e sofra 1 Nível de Degradação de Sanidade. Você cria um clone perfeito e senciente de si mesmo por 24 horas." },
                { name: "Reescrever o Script (Reação)", desc: "Ao testemunhar uma ação, gaste 10 PE para narrar um 'plot twist'. 'Na verdade, a bala que ele disparou era uma ilusão'." }
            ],
            "Sequência 1: Atendente do Mistério": [
                { name: "Adulteração da Realidade (Ativo)", desc: "Gaste 15 PE e 1 Vontade. Altere permanentemente uma regra física ou abstrata em um local ('Ninguém pode mentir nesta sala')." },
                { name: "Onipotência Parasitária (Passivo)", desc: "Ao tocar outro Beyonder, você pode usar um de seus poderes ativos uma única vez, gastando seus próprios PE." },
                { name: "Marionete Divina (Ativo)", desc: "Uma vez por história, tente controlar um Semideus ou Anjo por um único turno. Requer um custo imenso de PE e Sanidade." },
                { name: "O Tolo (Ativo)", desc: "Gaste 1 Ponto de Vontade. Por um único turno, você é tratado como um Beyonder de Sequência 0 - O Tolo. Pode usar qualquer habilidade de qualquer Sequência." }
            ]
        }
    },
    {
        category: "Lord of Mysteries",
        pathway: "CAMINHO DO ERRO",
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
    },
    {
        category: "Lord of Mysteries",
        pathway: "CAMINHO DA PORTA",
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
    },
    {
        category: "God Almighty",
        pathway: "CAMINHO DO VISIONÁRIO",
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
                { name: "Aplacar", desc: "Gaste 4 PE. Você pode acalmar uma pessoa, reduzindo sua agitação ou medo por um curto período." }
            ]
        }
    }
];