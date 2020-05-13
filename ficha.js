const piloto = {
    caracteristicas: {
        nivel: 1,
        alinhamento: 'Neutral/Good',
        raca: 'humano',
        carreira: {
            classe: 'guerreiro',
            arquetipo: 'campeao',
            antecedente: 'soldado',
            profissao: 'soldado'
        }
    },

    atributos: {
        forca: 1,
        destreza: 2,
        constuicao: 2,
        sabedoria: 0,
        inteligencia: -1,
        carisma: 3
    },

    geral: {
        dadosdevida: 6,
        pontosdevidatemporarios: 0,
        essencia: 0,
        carma: 0,
        proficiencia: 2,
        inspiracao: 0
    },

    reacoes: {
        deslocamento: 9,
        armadura: [8, 5],
        escudo: [2, 0]
    },

    pericias: {

    }
}

piloto.geral.carryweight = piloto.atributos.forca * 15
piloto.geral.pontosdevida = piloto.geral.dadosdevida * piloto.atributos.constuicao

piloto.reacoes.iniciativa = piloto.atributos.destreza,
    piloto.reacoes.percepcaopassiva = piloto.atributos.sabedoria + piloto.geral.proficiencia
piloto.reacoes.reflexos = 10 + piloto.atributos.destreza + piloto.geral.proficiencia
piloto.reacoes.vitalidade = 10 + piloto.atributos.constuicao + piloto.geral.proficiencia
piloto.reacoes.psique = 10 + piloto.atributos.inteligencia + piloto.geral.proficiencia
piloto.reacoes.protecaocinetica = 10 + piloto.reacoes.armadura[0] + piloto.reacoes.escudo[0]
piloto.reacoes.protecaoenergia = 10 + piloto.reacoes.armadura[1] + piloto.reacoes.escudo[1]

function criarPericia(nomeDaPericia, atributoDaPericia, possuiProficiencia = false) {
    piloto.pericias[nomeDaPericia] = piloto.atributos[atributoDaPericia]
    if (possuiProficiencia == true) {
        piloto.pericias[nomeDaPericia] += piloto.geral.proficiencia
    }
    return nomeDaPericia

}

criarPericia('acrobacia', 'destreza', true)
criarPericia('arcanismo', 'inteligencia', false)
criarPericia('atletismo', 'forca', true)
criarPericia('atuacao', 'carisma', false)
criarPericia('blefe', 'carisma', false)
criarPericia('computadores', 'inteligencia', true)
criarPericia('engenharia', 'inteligencia', true)
criarPericia('furtividade', 'destreza', false)
criarPericia('historia', 'inteligencia', false)
criarPericia('intimidacao', 'carisma', false)
criarPericia('intuicao', 'sabedoria', false)
criarPericia('investigacao', 'inteligencia', false)
criarPericia('lidarComAnimais', 'sabedoria', false)
criarPericia('medicina', 'sabedoria', false)
criarPericia('natureza', 'inteligencia', false)
criarPericia('percepcao', 'sabedoria', false)
criarPericia('persuasao', 'carisma', false)
criarPericia('pilotagem', 'destreza', false)
criarPericia('prestidigitacao', 'destreza', false)
criarPericia('religiao', 'inteligencia', false)
criarPericia('sobrevivencia', 'sabedoria', false)
criarPericia('reparo', 'sabedoria', false)

//----------------------------------------------------------------------------------------------------------------
const mech = {
    geral: {
        nível: 1,
        chassi: 'Berserker',
        //pontosdevidatemporarios: 0
    },

    atributos: {
        destreza: 2,
        sabedoria: 0, //verificar a necessidade deste atributo
        inteligencia: -1,
        carisma: 3
    },

    componentes: {
        cabeca: {
            ap: 10,
            protecaoCinetica: 20,
            protecaoEnergia: 10,
            peso: 30,
            consumoDeEnergia: 10,
            areaDoLockon: 12,
            alcanceDoLockon: 9,
            tempoDoLockon: 1,
            tempoDoLockonFoguetes: 2,
            lockonSimultanepFoguetes: 3,
            maxSubunits: 6
        },

        bracos: {
            ap: 10,
            protecaoCinetica: 20,
            protecaoEnergia: 10,
            peso: 30,
            consumoDeEnergia: 10,
            estabilidadeDeTiro: 5,
            storageUnits: 1,
            transicao: 0, //apenas weapon arms
        },

        torso: {
            ap: 10,
            protecaoCinetica: 20,
            protecaoEnergia: 10,
            peso: 30,
            storageUnit: 0,
            producaoDeEnergia: 90,
            armazenamentoDeEnergia: 240,
            //resistenciaJumming: 5,
        },

        pernas: {
            ap: 10,
            protecaoCinetica: 20,
            protecaoEnergia: 10,
            capacidadeDeCarga: 130,
            consumoDeEnergia: 10,
            movimentacao: 9,
            salto: 2, //tanques nao podem saltar
            saltoAprimorado: 0, //apenas bipé invertido
            protecaoAprimorada: 10, //apenas bipé comum
            needsReadyPosition: true //tanques e tetrapods são false
        },

        boosters: {
            peso: 30,
            consumoDeEnergia: 20,
            boostPower: 12, //movimentação em voo
            highBoost: 18, //movimentação em dash
            consumoHighBoost: 45,
            lowBoost: 1, //movimentação em corrida
            consumoLowBoost: 12 //pairar e cair de vagar fazem uso
        }
    },

    reacoes: {
        //deslocamento: 9,
    }
}

function somarDados(obj, key) {
    var valorDaSoma = 0;

    Object.values(obj).forEach(item => {
        if ("undefined" !== typeof (item[key])) {
            valorDaSoma += item[key];
        }
    });

    return valorDaSoma;
}

//console.log(mech.componentes.cabeca.hasOwnProperty('ap'))
//console.log(mech.componentes.cabeca.ap)

mech.geral.apTotal = somarDados(mech.componentes, 'ap')
mech.geral.pesoTotal = somarDados(mech.componentes, 'peso') + '/' + mech.componentes.pernas.capacidadeDeCarga //alterar o codigo posteriormente, pois está retornando a capacidade e o valor usado, essa exibição deve ser feita pelo front
mech.geral.energiaTotal = somarDados(mech.componentes, 'consumoDeEnergia') + '/' + mech.componentes.torso.producaoDeEnergia + '/' + mech.componentes.torso.armazenamentoDeEnergia //alterar o codigo posteriormente, pois está retornando a produção, o valor usado e a capacidade de armazenamento, essa exibição deve ser feita pelo front
mech.geral.sincronia = 20 //Recebe o valor de 1d20 e funciona como os atributos 20 = +5, 1 = -5... Deve ser apliada no calculo de reflexos.

mech.reacoes.reflexos = 10 + mech.atributos.destreza + piloto.geral.proficiencia
mech.reacoes.psique = 10 + mech.atributos.inteligencia + piloto.geral.proficiencia //a psique do mech se refere a proteção contra jamming, hacking, etc
mech.reacoes.protecaocinetica = somarDados(mech.componentes, 'protecaoCinetica')
mech.reacoes.protecaoenergia = somarDados(mech.componentes, 'protecaoEnergia')