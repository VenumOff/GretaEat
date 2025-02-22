const mealName = document.getElementById("meal-name");
const mealImg = document.getElementById("meal-img");
const mealInstructions = document.getElementById("meal-instructions");
const newRecipeBtn = document.getElementById("new-recipe-btn");

function fetchRandomMeal() {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
        .then((res) => res.json())
        .then((data) => {
            const meal = data.meals[0];
            mealName.textContent = meal.strMeal;
            mealImg.src = meal.strMealThumb;
            mealImg.alt = meal.strMeal;
            mealInstructions.textContent = meal.strInstructions;
        })
        .catch((error) => {
            console.error("Erreur lors du chargement des données :", error);
            mealName.textContent = "Erreur de chargement...";
        });
}

fetchRandomMeal();

newRecipeBtn.addEventListener("click", fetchRandomMeal);

document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");

    menuToggle.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
    });
});