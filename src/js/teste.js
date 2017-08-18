
module.exports = function(contentDiv, toggleContentBtn){

    var showContent = false;
    
    toggleContentBtn.addEventListener('click', toggleContentVisibility);
    updateContentDiv();
    
    function toggleContentVisibility()
    {
        showContent = !showContent;
        updateeToggleContentBtn();
        updateContentDiv();
    }
    
    function updateeToggleContentBtn()
    {
        toggleContentBtn.textContent = showContent ? "Ocultar conteúdo" : "Mostrar conteúdo";
    }
    
    function updateContentDiv()
    {
        contentDiv.style.display = showContent ? "block" : "none";
    }

};