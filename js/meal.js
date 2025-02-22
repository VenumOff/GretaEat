const div = document.querySelector("#meal-container");
const params = new URLSearchParams(window.location.search);

fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.get("i")}`)
    .then((res) => res.json())
    .then((data) => {
        const mealSelected = data.meals[0];
        const article = document.createElement("article");
        article.classList.add("bg-white", "border", "border-gray-200", "rounded-lg", "shadow-lg", "p-6", "space-y-6");

        const mealName = document.createElement("h2");
        mealName.textContent = mealSelected.strMeal;
        mealName.classList.add("text-3xl", "font-bold", "text-center", "text-[#222222]");

        const mealImg = document.createElement("img");
        mealImg.src = mealSelected.strMealThumb;
        mealImg.alt = mealSelected.strMeal;
        mealImg.classList.add("w-full", "h-auto", "rounded-lg", "shadow-md", "mx-auto");

        const mealArea = document.createElement("p");
        mealArea.textContent = `Area: ${mealSelected.strArea}`;
        mealArea.classList.add("text-lg", "text-[#222222]");

        const mealCategory = document.createElement("p");
        mealCategory.textContent = `Category: ${mealSelected.strCategory}`;
        mealCategory.classList.add("text-lg", "text-[#222222]");

        const listIngredients = document.createElement("ul");
        listIngredients.classList.add("space-y-2");

        for (let index = 0; index < 20; index++) {
            const ingredient = mealSelected[`strIngredient${index + 1}`];
            const measure = mealSelected[`strMeasure${index + 1}`];

            if (ingredient && ingredient.trim() !== "") {
                const ingredientItem = document.createElement("li");
                ingredientItem.textContent = `${ingredient}: ${measure}`;
                ingredientItem.classList.add("text-lg", "text-[#222222]");
                listIngredients.appendChild(ingredientItem);
            }
        }

        article.appendChild(mealName);
        article.appendChild(mealImg);
        article.appendChild(mealArea);
        article.appendChild(mealCategory);
        article.appendChild(listIngredients);

        div.appendChild(article);
    })
    .catch((error) => {
        console.error("Erreur lors du chargement des données :", error);
        div.innerHTML = "<p class='text-center text-red-500'>Erreur de chargement des données. Veuillez réessayer plus tard.</p>";
    });

    document.addEventListener("DOMContentLoaded", () => {
        const menuToggle = document.getElementById("menu-toggle");
        const mobileMenu = document.getElementById("mobile-menu");
    
        menuToggle.addEventListener("click", () => {
            mobileMenu.classList.toggle("hidden");
        });
    });