var vontadePalestrarSim = document.getElementById('vontade-palestrar-sim'),
    vontadePalestrarNao = document.getElementById('vontade-palestrar-nao'),
    vontadePalestrarDiv = document.getElementById('vontade-palestrar'),
    jaPalestrouSim = document.getElementById('ja-palestrou-sim'),
    jaPalestrouNao = document.getElementById('ja-palestrou-nao')
    jaPalestrouDiv = document.getElementById('ja-palestrou'),
    ideiaDoQueFalarDiv = document.getElementById('ideia-do-que-falar'),
    ideiaDoQueFalarSim = document.getElementById('ideia-do-que-falar-sim'),
    ideiaDoQueFalarNao = document.getElementById('ideia-do-que-falar-nao'),
    feedbackPalestraProntaDiv = document.getElementById('feedback-palestra-pronta'),
    feedbackPalestraProntaSim = document.getElementById('feedback-palestra-pronta-sim'),
    feedbackPalestraProntaNao = document.getElementById('feedback-palestra-pronta-nao'),
    feedbackPalestraNovaDiv = document.getElementById('feedback-palestra-nova'),
    feedbackPalestraNovaSim = document.getElementById('feedback-palestra-nova-sim'),
    feedbackPalestraNovaNao = document.getElementById('feedback-palestra-nova-nao'),
    palestraMontadaDiv = document.getElementById('palestra-montada'),
    palestraMontadaSim = document.getElementById('palestra-montada-sim'),
    palestraMontadaNao = document.getElementById('palestra-montada-nao'),
    formCriarIdeiaText = document.getElementById('form-criar-ideia'),
    formPalestraProntaText = document.getElementById('form-palestra-pronta'),
    formMontarPalestraText = document.getElementById('form-montar-palestra'),
    naoText = document.getElementById('nao');

vontadePalestrarSim.addEventListener('click', function() {
    hide(vontadePalestrarDiv);
    show(jaPalestrouDiv);
});

vontadePalestrarNao.addEventListener('click', function() {
    hide(vontadePalestrarDiv);
    show(naoText);
});

jaPalestrouSim.addEventListener('click', function() {
    hide(jaPalestrouDiv);
    show(feedbackPalestraProntaDiv);
});

jaPalestrouNao.addEventListener('click', function() {
    hide(jaPalestrouDiv);
    show(ideiaDoQueFalarDiv);
});

ideiaDoQueFalarSim.addEventListener('click', function() {
    hide(ideiaDoQueFalarDiv);
    show(palestraMontadaDiv);   
});

ideiaDoQueFalarNao.addEventListener('click', function() {
    hide(ideiaDoQueFalarDiv);
    show(formCriarIdeiaText);
});

palestraMontadaSim.addEventListener('click', function() {
    hide(palestraMontadaDiv);
    show(formPalestraProntaText);   
});

palestraMontadaNao.addEventListener('click', function() {
    hide(palestraMontadaDiv);
    show(formMontarPalestraText);
});

feedbackPalestraProntaSim.addEventListener('click', function() {
    hide(feedbackPalestraProntaDiv);
    show(formPalestraProntaText);
});

feedbackPalestraProntaNao.addEventListener('click', function() {
    hide(feedbackPalestraProntaDiv);
    show(feedbackPalestraNovaDiv);
});

feedbackPalestraNovaSim.addEventListener('click', function() {
    hide(feedbackPalestraNovaDiv);
    show(ideiaDoQueFalarDiv);
});

feedbackPalestraNovaNao.addEventListener('click', function() {
    hide(feedbackPalestraNovaDiv);
    show(naoText);
});

function show(el) {
    el.style.display = 'block';
}

function hide(el) {
    el.style.display = 'none';
}