// Garante que a página sempre carregue no topo e limpa a URL de âncoras (#)
window.addEventListener('load', () => {
    history.replaceState(null, document.title, window.location.pathname);
    window.scrollTo(0, 0);
});
