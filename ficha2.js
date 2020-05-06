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
        inteligencia:-1,
        carisma:3
    },

    geral: {
        dadosdevida: 6,
        pontosdevidatemporarios: 0,
        essencia: 0,
        carma: 0,
        proficiencia: 2,
        inspiracao: 0
    },

    reacoes:{
        deslocamento: 9,
        armadura: [8,5],
        escudo: [2,0]
    }

//     pericias:{
//         acrobacia: destreza + proficiencia,
//         arcanismo: inteligencia + proficiencia,
//         atletismo: forca + proficiencia,
//         atuacao: carisma + proficiencia,
//         blefe: carisma + proficiencia,
//         furtividade: destreza + proficiencia,
//         historia: inteligencia + proficiencia,
//         intimidacao: carisma + proficiencia,
//         intuicao: sabedoria + proficiencia,
//         investigacao: inteligencia + proficiencia,
//         medicina: sabedoria + proficiencia,
//         natureza: inteligencia + proficiencia,
//         percepcao: sabedoria + proficiencia,
//         persuasao: carisma + proficiencia,
//         prestidigitacao: destreza + proficiencia,
//         religiao: inteligencia + proficiencia,
//         sobrevivencia: sabedoria + proficiencia,
//         animal: sabedoria + proficiencia,
//         computadores: inteligencia + proficiencia,
//         engenharia: inteligencia + proficiencia,
//         pilotagem: destreza + proficiencia,
//         reparo: sabedoria + proficiencia
//     }
}

piloto.geral.carryweight = piloto.atributos.forca *15,
piloto.geral.pontosdevida = piloto.geral.dadosdevida * piloto.atributos.constuicao,

piloto.reacoes.iniciativa = piloto.atributos.destreza,
piloto.reacoes.percepcaopassiva = piloto.atributos.sabedoria + piloto.geral.proficiencia,
piloto.reacoes.reflexos = 10 + piloto.atributos.destreza + piloto.geral.proficiencia,
piloto.reacoes.vitalidade = 10 + piloto.atributos.constuicao + piloto.geral.proficiencia,
piloto.reacoes.psique = 10 + piloto.atributos.inteligencia + piloto.geral.proficiencia,
piloto.reacoes.protecaocinetica = 10 + piloto.reacoes.armadura[0] + piloto.reacoes.escudo[0],
piloto.reacoes.protecaoenergia = 10 + piloto.reacoes.armadura[1] + piloto.reacoes.escudo[1]

//----------------------------------------------------------------------------------------------------------------
const mech = {
    geral: {
        nível: 1,
        chassi: 'berserker',
        //pontosdevidatemporarios: 0
    },

    atributos: {
        forca: 1,
        destreza: 2,
        constuicao: 2,
        sabedoria: 0,
        inteligencia:-1,
        carisma:3
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
            capacidadeDeCarga: 30,
            consumoDeEnergia: 10,
            movimentacao: 9,
            salto: 2, //tanques nao podem saltar
            saltoAprimorado: 0, //apenas bipé invertido
            protecaoAprimorada: 10, //apenas bipé comum
            readyPosition: true //tanques e tetrapods são false
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

    reacoes:{
        //deslocamento: 9,
        //armadura: [8,5],
        //escudo: [2,0]
    }
}

mech.geral.carryweight = mech.atributos.forca *150,
//mech.geral.pontosdevida = mech.geral.dadosdevida * mech.atributos.constuicao,

mech.reacoes.iniciativa = mech.atributos.destreza,
//mech.reacoes.percepcaopassiva = mech.atributos.sabedoria + piloto.geral.proficiencia, //este item deve ser excluido ou deve ser tirado do piloto
mech.reacoes.reflexos = 10 + mech.atributos.destreza + piloto.geral.proficiencia,
mech.reacoes.vitalidade = 10 + mech.atributos.constuicao + piloto.geral.proficiencia,
mech.reacoes.psique = 10 + mech.atributos.inteligencia + piloto.geral.proficiencia //a psique do mech se refere a proteção contra jamming, hacking, etc
//mech.reacoes.protecaocinetica = 10 + mech.reacoes.armadura[0] + mech.reacoes.escudo[0],
//mech.reacoes.protecaoenergia = 10 + mech.reacoes.armadura[1] + mech.reacoes.escudo[1]

console.log(mech.componentes.cabeca.hasOwnProperty('ap'))
console.log(mech.componentes.cabeca.ap)

for (let item in mech.componentes){
    if (item.hasOwnProperty('ap')){
        console.log(item.ap)
    }else {
        console.log(item, 'não possui ap')
    }
}