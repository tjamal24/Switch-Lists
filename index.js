function showRecipes(recipeType) {
    const recipeList = document.getElementById('recipe-list');

    if (recipeType === 'sweet') {
        recipeList.innerHTML = `
            <ul>
                <li>Eyeballs Appetizer</li>
                <li>Breadstick Serpents</li>
                <li>Pumpkin Baked Brie</li>
            </ul>
        `;
    } else if (recipeType === 'savory') {
        recipeList.innerHTML = `
            <ul>
                <li>Spider Pizzas</li>
                <li>Ghost Veggies and Hummus</li>
                <li>Breadstick Serpents</li>
            </ul>
        `;
    }
}