let nomePlay1 = ''
let nomePlay2 = ''

function inicio() {
    nomePlay1 = document.getElementById('nPlay1').value
    nomePlay2 = document.getElementById('nPlay2').value

    const casa = document.getElementById('home')
    casa.style.setProperty('Display', 'none')
    const hjogo = document.getElementById('jogo')
    hjogo.style.setProperty('Display', 'block')

    let idplay1 = document.getElementById('idplay1')
    idplay1.innerText = `👉 ${nomePlay1.toUpperCase()} você Jogar com X`
    let idplay2 = document.getElementById('idplay2')
    idplay2.innerText = `${nomePlay2.toUpperCase()} você Jogar com O`

    return nomePlay1, nomePlay2
}
let mensagem = ''
let vez = 1
let vit = 8
let jDVez = 0
let play1 = 'X'
let play2 = 'O'
const i = []
let po1 = 1
let po2 = 2
let po3 = 3
let po4 = 4
let po5 = 5
let po6 = 6
let po7 = 7
let po8 = 8
let po9 = 9
let ganhador = 'jogador'



if (vez == 1) {
    jDVez = play1
    vez = 2
} else {
    jDVez = play2
    vez = 1
}

const c1l1 = document.getElementById('c1l1')
c1l1.addEventListener('click', a1)

const c2l1 = document.getElementById('c2l1')
c2l1.addEventListener('click', a2)

const c3l1 = document.getElementById('c3l1')
c3l1.addEventListener('click', a3)

const c1l2 = document.getElementById('c1l2')
c1l2.addEventListener('click', b1)

const c2l2 = document.getElementById('c2l2')
c2l2.addEventListener('click', b2)

const c3l2 = document.getElementById('c3l2')
c3l2.addEventListener('click', b3)

const c1l3 = document.getElementById('c1l3')
c1l3.addEventListener('click', c1)

const c2l3 = document.getElementById('c2l3')
c2l3.addEventListener('click', c2)

const c3l3 = document.getElementById('c3l3')
c3l3.addEventListener('click', c3)

function a1() {
    for (index = 0; index < i.length; index = index + 1) {
        if (i[index] == 'a1') {
            alert('posição ja jogada escolha outra')
            return
        }
    }
    i.push('a1')
    pVez()
    c1l1.setAttribute('value', jDVez)
    po1 = jDVez
    validacaoVitori()
    velha()
    if (vez == 1) {
        jDVez = play1
        vez = 2
    } else {
        jDVez = play2
        vez = 1
    }
    return vez, i, po1
}

function a2() {
    for (index = 0; index < i.length; index = index + 1) {
        if (i[index] == 'a2') {
            alert('posição ja jogada escolha outra')
            return
        }
    }
    i.push('a2')

    pVez()
    c2l1.setAttribute('value', jDVez)
    po2 = jDVez
    validacaoVitori()
    velha()
    if (vez == 1) {
        jDVez = play1
        vez = 2
    } else {
        jDVez = play2
        vez = 1
    }
    return vez, i, po2
}

function a3() {
    for (index = 0; index < i.length; index = index + 1) {
        if (i[index] == 'a3') {
            alert('posição ja jogada escolha outra')
            return
        }
    }
    i.push('a3')
    pVez()
    c3l1.setAttribute('value', jDVez)
    po3 = jDVez
    validacaoVitori()
    velha()
    if (vez == 1) {
        jDVez = play1
        vez = 2
    } else {
        jDVez = play2
        vez = 1
    }
    return vez, i, po3
}
function b1() {
    for (index = 0; index < i.length; index = index + 1) {
        if (i[index] == 'b1') {
            alert('posição ja jogada escolha outra')
            return
        }
    }
    i.push('b1')
    pVez()
    c1l2.setAttribute('value', jDVez)
    po4 = jDVez
    validacaoVitori()
    velha()
    if (vez == 1) {
        jDVez = play1
        vez = 2
    } else {
        jDVez = play2
        vez = 1
    }
    return vez, i, po4
}
function b2() {
    for (index = 0; index < i.length; index = index + 1) {
        if (i[index] == 'b2') {
            alert('posição ja jogada escolha outra')
            return
        }
    }
    i.push('b2')
    pVez()
    c2l2.setAttribute('value', jDVez)
    po5 = jDVez
    validacaoVitori()
    velha()
    if (vez == 1) {
        jDVez = play1
        vez = 2
    } else {
        jDVez = play2
        vez = 1
    }
    return vez, i, po5
}
function b3() {
    for (index = 0; index < i.length; index = index + 1) {
        if (i[index] == 'b3') {
            alert('posição ja jogada escolha outra')
            return
        }
    }
    i.push('b3')
    pVez()
    c3l2.setAttribute('value', jDVez)
    po6 = jDVez
    validacaoVitori()
    velha()
    if (vez == 1) {
        jDVez = play1
        vez = 2
    } else {
        jDVez = play2
        vez = 1
    }
    return vez, i, po6
}
function c1() {
    for (index = 0; index < i.length; index = index + 1) {
        if (i[index] == 'c1') {
            alert('posição ja jogada escolha outra')
            return
        }
    }
    i.push('c1')
    pVez()
    c1l3.setAttribute('value', jDVez)
    po7 = jDVez
    validacaoVitori()
    velha()
    if (vez == 1) {
        jDVez = play1
        vez = 2
    } else {
        jDVez = play2
        vez = 1
    }
    return vez, i, po7
}
function c2() {
    for (index = 0; index < i.length; index = index + 1) {
        if (i[index] == 'c2') {
            alert('posição ja jogada escolha outra')
            return
        }
    }
    i.push('c2')
    pVez()
    c2l3.setAttribute('value', jDVez)
    po8 = jDVez
    validacaoVitori()
    velha()
    if (vez == 1) {
        jDVez = play1
        vez = 2
    } else {
        jDVez = play2
        vez = 1
    }
    return vez, i, po8
}
function c3() {
    for (index = 0; index < i.length; index = index + 1) {
        if (i[index] == 'c3') {
            alert('posição ja jogada escolha outra')
            return
        }
    }
    i.push('c3')
    pVez()
    c3l3.setAttribute('value', jDVez)
    po9 = jDVez
    validacaoVitori()
    velha()
    if (vez == 1) {
        jDVez = play1
        vez = 2
    } else {
        jDVez = play2
        vez = 1
    }
    return vez, i, po9
}
function validacaoVitori() {
    if (jDVez == 'X' && play1 == 'X') {
        ganhador = nomePlay1.toUpperCase()
    } else if (jDVez == 'O' && play1 == 'O') {
        ganhador = nomePlay1.toUpperCase()
    } else {
        ganhador = nomePlay2.toUpperCase()
    }

    if (po1 == po2 && po2 == po3) {
        alert(`Parabrés ${ganhador} você GANHOU!!`)
        replay()
    } else if (po4 == po5 && po5 == po6) {
        alert(`Parabrés ${ganhador} você GANHOU!!`)
        replay()
    } else if (po7 == po8 && po8 == po9) {
        alert(`Parabrés ${ganhador} você GANHOU!!`)
        replay()
    } else if (po1 == po4 && po4 == po7) {
        alert(`Parabrés ${ganhador} você GANHOU!!`)
        replay()
    } else if (po2 == po5 && po5 == po8) {
        alert(`Parabrés ${ganhador} você GANHOU!!`)
        replay()
    } else if (po3 == po6 && po6 == po9) {
        alert(`Parabrés ${ganhador} você GANHOU!!`)
        replay()
    } else if (po1 == po5 && po5 == po9) {
        alert(`Parabrés ${ganhador} você GANHOU!!`)
        replay()
    } else if (po3 == po5 && po5 == po7) {
        alert(`Parabrés ${ganhador} você GANHOU!!`)
        replay()
    }
}
function pVez() {
    if (jDVez == 'O') {
        let idplay1 = document.getElementById('idplay1')
        idplay1.innerHTML = `👉 ${nomePlay1.toUpperCase()} você joga com X`
        let idplay2 = document.getElementById('idplay2')
        idplay2.innerHTML = `${nomePlay2.toUpperCase()} você Jogar com O`
    } else if (jDVez == 'X') {
        let idplay1 = document.getElementById('idplay1')
        idplay1.innerHTML = `${nomePlay1.toUpperCase()} você Jogar com X`
        let idplay2 = document.getElementById('idplay2')
        idplay2.innerHTML = `👉 ${nomePlay2.toUpperCase()} você joga com O`
    }
}
function velha() {
    if (po1 == 'X' || po1 == 'O' && po2 == 'X' || po2 == 'O' && po3 == 'X' || po3 == 'O') {
        vit = vit - 1
    } else if (po4 == 'X' || po4 == 'O' && po5 == 'X' || po5 == 'O' && po6 == 'X' || po6 == 'O') {
        vit = vit - 1
    } else if (po7 == 'X' || po7 == 'O' && po8 == 'X' || po8 == 'O' && po9 == 'X' || po9 == 'O') {
        vit = vit - 1
    } else if (po1 == 'X' || po1 == 'O' && po4 == 'X' || po4 == 'O' && po7 == 'X' || po7 == 'O') {
        vit = vit - 1
    } else if (po2 == 'X' || po2 == 'O' && po5 == 'X' || po5 == 'O' && po8 == 'X' || po8 == 'O') {
        vit = vit - 1
    } else if (po3 == 'X' || po3 == 'O' && po6 == 'X' || po6 == 'O' && po9 == 'X' || po9 == 'O') {
        vit = vit - 1
    } else if (po1 == 'X' || po1 == 'O' && po5 == 'X' || po5 == 'O' && po9 == 'X' || po9 == 'O') {
        vit = vit - 1
    } else if (po3 == 'X' || po3 == 'O' && po5 == 'X' || po5 == 'O' && po7 == 'X' || po7 == 'O') {
        vit = vit - 1
    }
    if (vit == 0) {
        alert('Deu Velha!')
        replay()
    }
    return vit
}
function replay(){
    mensagem = confirm('jogar novamente?')
    if(mensagem == true){
        c1l1.setAttribute('value', ' ')
        c2l1.setAttribute('value', ' ')
        c3l1.setAttribute('value', ' ')
        c1l2.setAttribute('value', ' ')
        c2l2.setAttribute('value', ' ')
        c3l2.setAttribute('value', ' ')
        c1l3.setAttribute('value', ' ')
        c2l3.setAttribute('value', ' ')
        c3l3.setAttribute('value', ' ')
        po1 = 1
        po2 = 2
        po3 = 3
        po4 = 4
        po5 = 5
        po6 = 6
        po7 = 7
        po8 = 8
        po9 = 9
        while(i.length > 0) {
            i.shift()
        }
        vit = 8
        return vit, i, po1, po2, po3, po4, po5, po6, po7, po8, po9
    }else{
        location.reload()
    }
}
