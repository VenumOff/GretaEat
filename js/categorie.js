const resultContainer = document.querySelector("#container");
const select = document.querySelector("#categorieChoice");
const button = document.querySelector("#searchButton");

button.addEventListener("click", () => {
    const category = select.value;
    resultContainer.innerHTML = "";

    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
        .then((res) => res.json())
        .then((data) => {
            if (!data.meals) {
                resultContainer.innerHTML = "<p>Aucun plat trouvé.</p>";
                return;
            }

            data.meals.forEach((meal) => {
                const newMeal = document.createElement("a");
                newMeal.classList.add("meal-card", "block", "bg-white", "border", "border-gray-200", "rounded-lg", "shadow-md", "hover:shadow-lg", "transition-shadow", "duration-300", "p-4");
                newMeal.setAttribute("data-id", meal.idMeal);
                newMeal.href = `meal.html?i=${meal.idMeal}`;

                const h2 = document.createElement("h2");
                h2.classList.add("text-xl", "font-semibold", "text-[#222222]", "mb-2");
                h2.textContent = meal.strMeal;

                const img = document.createElement("img");
                img.src = meal.strMealThumb;
                img.alt = meal.strMeal;
                img.classList.add("w-full", "h-64", "object-cover", "rounded-md");

                newMeal.appendChild(img);
                newMeal.appendChild(h2);
                resultContainer.appendChild(newMeal);
            });
        })
        .catch((error) => console.error("Erreur lors du chargement des données :", error));
});

document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");

    menuToggle.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
    });
});