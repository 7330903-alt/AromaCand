function toggleCategory(blockId) {
    const targetBlock = document.getElementById(blockId);
    const allBlocks = document.querySelectorAll('.category-item');
    
    allBlocks.forEach(block => {
        if (block === targetBlock) {
            block.classList.toggle('active');
        } else {
            block.classList.remove('active');
        }
    });
}
