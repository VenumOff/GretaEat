fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then((res) => res.json())
    .then((data) => {
        const meal = data.meals[0];
        document.getElementById("meal-name").textContent = meal.strMeal;
        document.getElementById("meal-img").src = meal.strMealThumb;
        document.getElementById("meal-instructions").textContent =
            meal.strInstructions;
    })
    .catch((error) =>
        console.error("Erreur lors du chargement des données :", error)
    );
