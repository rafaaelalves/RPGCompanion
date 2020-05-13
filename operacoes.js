// Empacotamento de ataque/dano
cabeca = {
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

bracos = {
    ap: 10,
    protecaoCinetica: 20,
    protecaoEnergia: 10,
    peso: 30,
    consumoDeEnergia: 10,
    estabilidadeDeTiro: 3,
    storageUnits: 1,
    transicao: 0, //apenas weapon arms
}

arma = {
    tipoDeArma: 'Fuzil',
    dadoDeDano: '2d8',
    modificadorDeDano: +5,
    tipoDeDano: 'Perfurante',
    proriedade: 'Duas Mãos',
    alcance: 24,
    capacidadeDoCarregador: 30,
    custoDaMunicao:20,
    peso: 4,
    consumoDeEnergia: 0,
    tempoDeRecarga: '1 ação'
}

let contadorMunicao = 30

function empacotarAtaque(acerto, lockon, rajada){ //acerto = 1d20, lockon false ou nome membro, rajada  true ou false
    ataqueEnviado = {
        lockon
    }
    ataqueEnviado.valorDoAcerto = acerto + bracos.estabilidadeDeTiro,
    ataqueEnviado.tipoDeDano = arma.tipoDeDano
    ataqueEnviado.valorDoDano = arma.dadoDeDano
    if (lockon != false){
        ataqueEnviado.valorDoAcerto -= 5
    }
    if (rajada == true){
        contadorMunicao -= 10
    } else{
        contadorMunicao --
    }
    return ataqueEnviado
}

//console.log('envio de dano: ', empacotarAtaque(9, 'cabeca', true))

// --------------------------------------------------------------------------
//Recepção de ataque/dano


const mech = {
    geral: {

    },
    componentes: {
        cabeca: {
            ap: 5
        },
        bracos: {
            ap:8
        },
        torso: {
            ap:16
        },
        pernas: {
            ap: 8
        }
    },
    reacoes: {
        reflexos: 13,
        protecaoCinetica: 4,
        protecaoEnergia: 2
    }
}


function somarDados(obj, key) {
    var valorDaSoma = 0;

    Object.values(obj).forEach(item => {
        if ("undefined" !== typeof(item[key])) {
            valorDaSoma += item[key];
        }
    });

    return valorDaSoma;
}

mech.geral.apTotal = somarDados(mech.componentes, 'ap')

let apAtual = {}

function iniciarRastreador(){
    for (let item in mech.componentes){
        apAtual[item] = mech.componentes[item].ap
    }
}
iniciarRastreador()
apAtual.apTotal = apAtual.cabeca + apAtual.bracos + apAtual.torso + apAtual.pernas

function receberAtaque(acerto, tipo, dano, lockon = false){ //tipo Cinétio ou Energia
    if (acerto < mech.reacoes.reflexos){
        return 'Esquiva bem sucedida!'
    }else if (tipo == 'Cinético'){
        dano -= mech.reacoes.protecaoCinetica
        if (dano <0){
            dano = 0
        }
        if (lockon != false){
            return apAtual[lockon] -= dano
        }else {
            return apAtual.apTotal -= dano
        }
    }else if (tipo == 'Energia'){
        dano -= mech.reacoes.protecaoEnergia
        if (dano <0){
            dano = 0
        }
        if (lockon != false){
            return apAtual[lockon] -= dano
        }else {
            return apAtual.apTotal -= dano
        }
    }else {
        return 'Houve um problema!'
    }
}

//É necessario a criação de um log

console.log(apAtual)
console.log('Inicio')
receberAtaque(9, 'Cinético', 5, 'pernas')
console.log(apAtual)
receberAtaque(5, 'Cinético', 9)
console.log(apAtual)
receberAtaque(10, 'Cinético', 12)
console.log(apAtual)
receberAtaque(10, 'Cinético', 9, 'cabeca')
console.log(apAtual)

console.log('fim da rodada')

receberAtaque(18, 'Cinético', 9)
console.log(apAtual)
receberAtaque(15, 'Cinético', 13)
console.log(apAtual)
receberAtaque(10, 'Energia', 6, 'pernas')
console.log(apAtual)
receberAtaque(5, 'Cinético', 5)
console.log(apAtual)

console.log('fim da rodada')

receberAtaque(12, 'Cinético', 5, 'bracos')
console.log(apAtual)
receberAtaque(4, 'Cinético', 13)
console.log(apAtual)
receberAtaque(11, 'Cinético', 6)
console.log(apAtual)
receberAtaque(6, 'Cinético', 9)
console.log(apAtual)