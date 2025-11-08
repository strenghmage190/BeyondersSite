export const magicData = {
    funcoes: [
        { palavra: "Al", nome: "Alterar", desc: "O poder da modificação. Altera propriedades, não a substância. Usado por ilusionistas e sabotadores." },
        { palavra: "Ar", nome: "Aprisionar", desc: "O poder da contenção. Impõe barreiras e restrições, físicas ou conceituais. Usado por guardiões e caçadores." },
        { palavra: "Im", nome: "Atacar/Ferir", desc: "O poder do dano bruto e direto. Focado em causar dano através de uma força manifesta." },
        { palavra: "Am", nome: "Proteger", desc: "O poder da defesa. Cria escudos e barreiras contra forças externas. Usado para salvaguarda e preservação." },
        { palavra: "Et", nome: "Controlar", desc: "O poder da manipulação e do domínio. Comanda o movimento ou as ações de um alvo, impondo vontade." },
        { palavra: "As", nome: "Destruir", desc: "O poder da desconstrução e da entropia. Desfaz a estrutura fundamental de um alvo." },
        { palavra: "In", nome: "Enfraquecer", desc: "O poder da debilitação. Suprime as propriedades ou a força de um alvo, tornando-o menos eficaz." },
        { palavra: "Ev", nome: "Invocar/Criar", desc: "O poder da criação a partir do nada. Traz à existência algo que não estava lá antes." },
        { palavra: "An", nome: "Restaurar", desc: "O poder da cura e do conserto. Reverte um estado danificado para um estado anterior de plenitude." },
        { palavra: "Il", nome: "Revelar", desc: "O poder do conhecimento e da percepção. Traz à tona o que está oculto, seja invisível, secreto ou codificado." },
        { palavra: "It", nome: "Transportar", desc: "O poder do movimento anômalo. Move algo ou alguém de um ponto a outro sem cruzar o espaço intermediário." },
        { palavra: "Un", nome: "Juntar/Conectar", desc: "O poder da união. Cria uma ligação, física ou etérea, entre dois ou mais alvos, fazendo-os compartilhar propriedades ou destino." },
        { palavra: "Es", nome: "Marcar", desc: "O poder do rastreamento e da simbologia. Aplica um sigilo arcano a um alvo, permitindo ao conjurador rastreá-lo ou afetá-lo à distância." },
        { palavra: "Lues", nome: "Corromper", desc: "O poder da mácula e da blasfêmia. Infunde um alvo com a energia caótica do Abismo ou da insanidade." }
    ],
    objetos: [
        { palavra: "Ivi", nome: "Pessoa", desc: "O receptáculo mortal. Refere-se a qualquer ser humanoide senciente, englobando seu corpo, mente e vontade de forma holística." },
        { palavra: "Ali", nome: "Animal", desc: "A besta primordial. Refere-se a criaturas não sencientes, de insetos a feras, que operam primariamente pelo instinto." },
        { palavra: "Exa", nome: "Inanimado", desc: "A criação do homem. Refere-se a qualquer objeto fabricado e sem vida, desde uma simples chave a uma complexa máquina a vapor." },
        { palavra: "Ora", nome: "Vegetação", desc: "O pulso da terra. Refere-se a toda forma de vida vegetal, desde um musgo delicado até uma floresta ancestral." },
        { palavra: "Eli", nome: "Elemento", desc: "A matéria bruta do cosmos. Refere-se às forças primordiais da natureza — fogo, água, terra, ar — que devem ser definidas por uma Característica." },
        { palavra: "Ani", nome: "Alma", desc: "A essência imaterial. Refere-se à energia espiritual, à consciência pura e à força vital de um ser. Uma das Partículas mais perigosas e difíceis de manipular." },
        { palavra: "Azi", nome: "Informação", desc: "O segredo sussurrado. Refere-se a conhecimentos, memórias, dados, segredos e a verdade abstrata contida em textos, pensamentos ou no próprio ambiente." },
        { palavra: "Ala", nome: "Abstrato", desc: "O conceito intangível. Um Objeto abrangente que se refere a forças ou ideias sem forma física: o som, o tempo, a sorte, a coragem, o medo, a dor." },
        { palavra: "Eva", nome: "Cadáver", desc: "A casca vazia. Refere-se aos restos de qualquer criatura que já foi viva, mantendo um eco residual de sua antiga existência. A base para a necromancia." },
        { palavra: "Omu", nome: "Construção", desc: "A obra da civilização. Refere-se a estruturas arquitetônicas complexas: prédios, pontes, muralhas, navios. Diferente de Inanimado, foca em estruturas maiores." },
        { palavra: "Pneuma", nome: "Espírito", desc: "O eco do invisível. Refere-se a espectros, fantasmas e outras entidades não corpóreas que habitam o Mundo Espiritual. Diferente de Alma, não está atrelado a um corpo físico." },
        { palavra: "Hypnos", nome: "Sonho", desc: "A realidade maleável. Refere-se ao plano dos sonhos, ao subconsciente e às paisagens mentais de um ser adormecido. Um domínio com suas próprias regras e perigos." },
        { palavra: "Locus", nome: "Lugar/Terreno", desc: "O palco do mundo. Refere-se a um local específico e suas propriedades ambientais — o chão de um beco, o ar de uma sala, a água de um poço." }
    ],
    caracteristicas: {
        "Características Elementais Fundamentais": [
            { nome: "Fogo", palavra: "Ig", desc: "A essência do calor, combustão e fúria. Associado ao ataque direto.", die: "d10" },
            { nome: "Água", palavra: "Quan", desc: "A essência do frio, fluidez e adaptabilidade. Usado tanto para ataques de gelo quanto para controle.", die: "d8" },
            { nome: "Ar", palavra: "Aer", desc: "A essência do vento, do som e da eletricidade. A Característica da velocidade e da tempestade.", die: "d10" },
            { nome: "Terra", palavra: "Mun", desc: "A essência da pedra, estabilidade, peso e metal. A base de toda defesa e solidez.", die: "d10" }
        ],
        "Características de Essência e Percepção": [
            { nome: "Luz", palavra: "Lum", desc: "A natureza da iluminação, verdade, ordem e purificação. Essencial para rituais de consagração e para combater a escuridão.", die: "d8" },
            { nome: "Escuridão", palavra: "Ten", desc: "A natureza das sombras, ocultação, silêncio e medo. Perfeita para feitiços de sigilo e terror.", die: "d8" },
            { nome: "Mente", palavra: "Imu", desc: "A natureza dos pensamentos, da lógica, da memória e da percepção. O alicerce de toda magia de ilusão e telepatia.", die: "d8" },
            { nome: "Corpo", palavra: "Phys", desc: "A natureza da carne, da biologia, das doenças e da vitalidade física. Usado para cura, maldições biológicas ou aprimoramento físico.", die: "d8" },
            { nome: "Espírito", palavra: "Pneuma", desc: "A natureza do etéreo, de almas, fantasmas e da energia do Mundo Espiritual. Indispensável para necromancia, exorcismos e viagens astrais." }
        ],
        "Características Conceituais e Divinas": [
            { nome: "Adivinhação", palavra: "Divinatio", desc: "A essência da premonição e do conhecimento obtido por meios sobrenaturais." },
            { nome: "Corrupção", palavra: "Miasma", desc: "A essência da insanidade, da decadência e da influência maligna do Abismo.", die: "d8" },
            { nome: "Destino", palavra: "Fatum", desc: "A essência da sorte, azar, probabilidade e causalidade." },
            { nome: "Dimensional", palavra: "Rat", desc: "A essência do espaço e dos portais." },
            { nome: "Tempo", palavra: "Kronos", desc: "A essência da causalidade." },
            { nome: "Caos", palavra: "Kaos", desc: "A essência da entropia e do paradoxo.", die: "d8" },
            { nome: "Tecnologia", palavra: "Machina", desc: "A essência das engrenagens, do vapor e dos diagramas. É a magia da era industrial." }
        ]
    },
    complementos: [
        { nome: "Maior", palavra: "Mor", desc: "Aumenta a escala geral do feitiço (dano, área, duração, etc.). É um dos modificadores de intensidade mais diretos e comuns." },
        { nome: "Menor", palavra: "Min", desc: "Diminui a escala geral do feitiço (dano, área, duração, etc.). É um dos modificadores de intensidade mais diretos e comuns." },
        { nome: "Forma: Esfera", palavra: "San", desc: "Manifesta a magia como uma aura esférica ao redor de um ponto, uma cúpula protetora ou um orbe de energia." },
        { nome: "Forma: Parede", palavra: "Sar", desc: "Manifesta a magia como uma barreira linear e reta, como um muro ou uma linha no chão." },
        { nome: "Forma: Objeto", palavra: "Sin", desc: "Condensa a energia mágica na forma de um objeto simples e temporário. O objeto é visivelmente mágico e se desfaz após o uso ou com o tempo." },
        { nome: "Inerte", palavra: "Itam", desc: "Torna o feitiço dormente e vinculado a um 'gatilho' narrativo. A magia só se ativa quando a condição é cumprida." },
        { nome: "Ritual", palavra: "Ritus", desc: "Transforma o feitiço em um ritual de no mínimo 10 minutos. Permite canalizar muito mais poder, mas uma falha crítica tem consequências desastrosas." },
        { nome: "Persistente", palavra: "Durans", desc: "O efeito do feitiço torna-se permanente até ser ativamente desfeito. Para manter essa magia, o conjurador deve sacrificar 1 Ponto de Espiritualidade (PE) permanentemente." },
        { nome: "Sanguis", palavra: "Sacrifício de Sangue", desc: "Um Modificador que permite ao conjurador pagar com sua própria força vital. O conjurador deve aceitar sofrer um Nível de Vitalidade em dano letal em troca de: Ignorar resistência mágica, dobrar duração/área ou aumentar a Dificuldade para resistir em +3." }
    ],
    criadores: [
        { nome: "Variação", palavra: "Ada-", desc: "Prefixo que cria uma variação lógica de uma Característica conectada a ele, desdobrando-a em um conceito relacionado.", exemplos: ["adaQuan (Variação de Água) → Gelo", "adaPhys (Variação de Corpo) → Metamorfose", "adaAzi (Variação de Informação) → Segredo"] },
        { nome: "Negação", palavra: "No-", desc: "Prefixo que nega completamente o conceito de uma Característica, criando seu oposto direto.", exemplos: ["noLum (Negação de Luz) → Escuridão Absoluta", "noMul (Negação de Som) → Silêncio Absoluto", "noFatum (Negação de Destino) → Anarquia Probabilística"] },
        { nome: "Adição", palavra: "Ag", desc: "Conector que une duas Características para criar um efeito híbrido, combinando as qualidades de ambas.", exemplos: ["IgAgMun (Fogo + Terra) → Magma", "AerAgQuan (Ar + Água) → Tempestade"] },
        { nome: "Derivação", palavra: "Mut-", desc: "Prefixo que transforma um Objeto em uma Característica, permitindo imbuir outra coisa com suas qualidades.", exemplos: ["Ev Eli MutIvi → 'Invocar Elemento com a Característica de Pessoa'", "Am Phys MutMun → 'Proteger Corpo com a Característica de Terra'"] }
    ]
};