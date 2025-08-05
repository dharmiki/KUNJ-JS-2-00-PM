const SearchBox = document.querySelector('.SearchBox');
const SearchBtn = document.querySelector('.SearchBtn');
const recipeContainer = document.querySelector('.recipe-container');
const recipeDetailsContent = document.querySelector('.recipe-details-content');
const recipecloseBtn = document.querySelector('.recipe-close-btn');

// Function to fetch recipes
const fetchRecipes = async (query) => {
    recipeContainer.innerHTML = "<h2>Fetching Recipes...</h2>";

    const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    const response = await data.json();

    recipeContainer.innerHTML = "";

    response.meals.forEach(meal => {
        const recipeDiv = document.createElement('div');
        recipeDiv.classList.add("recipe");
        recipeDiv.innerHTML = `
            <img src="${meal.strMealThumb}"> 
            <h3>${meal.strMeal}</h3>
            <p><span>${meal.strArea}</span> Dish</p>
            <p>Belongs To <span>${meal.strCategory}</span> Category</p>
        `;

        const Button = document.createElement('button');
        Button.textContent = "View Recipe..";
        recipeDiv.appendChild(Button);

        // Button event listener
        Button.addEventListener('click', () => {
            openRecipePopup(meal);
        });

        recipeContainer.appendChild(recipeDiv);
    });
};

// Fetch ingredients list
const fetchIngredients = (meal) => {
    let IngredientsList = "";
    for (let i = 1; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}`];
        const measure = meal[`strMeasure${i}`];
        if (ingredient && ingredient.trim()) {
            IngredientsList += `<li>${measure} ${ingredient}</li>`;
        } else {
            break;
        }
    }
    return IngredientsList;
}

// Show recipe details popup
const openRecipePopup = (meal) => {
    recipeDetailsContent.innerHTML = `
        <h2 class="recipeName">${meal.strMeal}</h2>
        <h3>Ingredients:</h3>
        <ul class="IngredientList">${fetchIngredients(meal)}</ul>
        <div class="recipeInstruction">
            <h3>Instructions:</h3>
            <p>${meal.strInstructions}</p>
        </div>
    `;

    recipeDetailsContent.parentElement.style.display = "block";
}

// Close popup
recipecloseBtn.addEventListener('click', () => {
    recipeDetailsContent.parentElement.style.display = "none";
});

// Search
SearchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const SerchInput = SearchBox.value.trim();
    if (SerchInput) {
        fetchRecipes(SerchInput);
    }
});

