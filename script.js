// Função para mostrar a seção selecionada e ocultar as outras
function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    
    // Esconde todas as seções e remove a classe 'active'
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Mostra a seção selecionada e adiciona a classe 'active'
    document.getElementById(sectionId).classList.add('active');
}

// Exibe a primeira seção por padrão
document.addEventListener('DOMContentLoaded', () => {
    showSection('personal-info');
});
