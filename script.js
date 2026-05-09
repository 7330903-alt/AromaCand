/**
 * Универсальная функция для раскрытия разделов
 * @param {string} blockId - ID элемента, который нужно раскрыть
 */
function toggleCategory(blockId) {
    // Находим нужный нам блок по его ID
    const targetBlock = document.getElementById(blockId);
    
    // Сначала находим все блоки категорий
    const allBlocks = document.querySelectorAll('.category-item');
    
    // Проходимся по всем блокам
    allBlocks.forEach(block => {
        // Если это тот блок, на который нажали — переключаем его состояние (открыть/закрыть)
        if (block === targetBlock) {
            block.classList.toggle('active');
        } else {
            // Остальные блоки закрываем, чтобы не загромождать экран
            block.classList.remove('active');
        }
    });
}
