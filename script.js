const formulario = document.getElementById('formulariologin');
const campoemail = document.getElementById('campoemail');
const camposenha = document.getElementById('camposenha');
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const botao = document.getElementById('botaoentrar');
const aviso = document.getElementById('aviso');

function emailvalido(valor) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor);
}

function marcarinvalido (caixinha, invalido) {
    caixinha.classList.toggle ('invalido', invalido);
}

email.addEventListener ('input', () => marcarinvalido(campoemail,false));
senha.addEventListener ('input', () => marcarinvalido(camposenha,false));

formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();

    aviso.classList.remove('mostrar');

    let tudocerto = true;
    if (!emailvalido(email.value.trim())) {
        marcarinvalido(campoemail, true);
        tudocerto = false;
    }

    if (senha.value.length < 6) {
        marcarinvalido(camposenha, true);
        tudocerto = false;
    }

    if (!tudocerto) {
        return;
    }

    botao.setAttribute('datacarregando', 'true');
    setTimeout(function () {
        botao.removeAttribute('datacarregando');
        aviso.classList.add('mostrar');
    }, 1200);
});
