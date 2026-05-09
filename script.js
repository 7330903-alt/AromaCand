function toggleCategory(id) {
    const block = document.getElementById(id);
    
    // Если блок уже открыт — закрываем, иначе открываем
    if (block.classList.contains('active')) {
        block.classList.remove('active');
    } else {
        // Сначала закроем все остальные блоки (необязательно, но красиво)
        document.querySelectorAll('.category-item').forEach(item => {
            item.classList.remove('active');
        });
        block.classList.add('active');
    }
}
