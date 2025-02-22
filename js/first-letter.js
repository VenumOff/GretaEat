let letter = "";
const resultContainer = document.querySelector("#container");

document.addEventListener("click", function (event) {
    const target = event.target;

    if (target.classList.contains("letter")) {
        letter = target.textContent.trim().toLowerCase();

        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
            .then((res) => res.json())
            .then((data) => {
                resultContainer.innerHTML = "";

                if (!data.meals) {
                    resultContainer.innerHTML = `<p class="font-bold flex justify-center w-screen">Aucun résultat trouvé</p>`;
                    return;
                }

                data.meals.forEach((meal) => {
                    const h2 = document.createElement("h2");
                    const img = document.createElement("img");
                    const newMeal = document.createElement("a");

                    h2.textContent = meal.strMeal;
                    h2.classList.add("text-xl", "font-bold", "text-center", "mb-2");

                    img.src = meal.strMealThumb;
                    img.alt = meal.strMeal;

                    newMeal.appendChild(h2);
                    newMeal.appendChild(img);
                    newMeal.classList.add("Meal", "bg-white", "border", "border-gray-200", "rounded-lg", "p-4", "shadow-lg", "hover:shadow-xl", "transition-shadow", "flex", "flex-col", "items-center", "justify-center");

                    newMeal.setAttribute("data-id", meal.idMeal);
                    newMeal.href = `meal.html?i=${meal.idMeal}`;

                    resultContainer.appendChild(newMeal);
                });
            })
            .catch((error) => console.error("Erreur lors du chargement des données :", error));
    }

    const mealElement = target.closest(".Meal");
    if (mealElement) {
        const mealId = mealElement.getAttribute("data-id");
        window.location.href = `meal.html?i=${mealId}`;
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");

    menuToggle.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
    });
});