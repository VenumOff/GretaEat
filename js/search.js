document.addEventListener("DOMContentLoaded", () => {
    const div = document.querySelector("#results");
    const button = document.getElementById("searchButton"); 
    const input = document.getElementById("searchByName");

    button.addEventListener("click", () => {
        div.innerHTML = "";
        const userInput = input.value.trim();

        if (userInput !== "") {
            fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${userInput}`)
                .then((res) => res.json())
                .then((data) => {
                    if (!data.meals) {
                        div.innerHTML = "<p class='text-center text-gray-600'>Aucun plat trouvé pour votre recherche.</p>";
                        return;
                    }

                    const mealsFound = data.meals;
                    mealsFound.forEach((meal) => {
                        const mealContainer = document.createElement("div");
                        mealContainer.classList.add("bg-[#f8f3e7]", "p-4", "rounded-lg", "shadow-md", "hover:shadow-xl", "transition-shadow", "border", "border-gray-300");

                        const link = document.createElement("a");
                        link.href = `meal.html?i=${meal.idMeal}`;
                        link.classList.add("block", "text-center");

                        const h2 = document.createElement("h2");
                        h2.textContent = meal.strMeal;
                        h2.classList.add("text-xl", "font-semibold", "text-[#222222]", "mt-2");

                        const img = document.createElement("img");
                        img.src = meal.strMealThumb;
                        img.alt = meal.strMeal;
                        img.classList.add("w-full", "h-auto", "rounded-lg", "mt-4");

                        link.appendChild(h2);
                        link.appendChild(img);
                        mealContainer.appendChild(link);

                        div.appendChild(mealContainer);
                    });
                })
                .catch((error) => {
                    console.error("Erreur lors du chargement des données :", error);
                    div.innerHTML = "<p class='text-center text-red-500'>Une erreur est survenue lors de la recherche. Veuillez réessayer.</p>";
                });
        } else {
            div.innerHTML = "<p class='text-center text-gray-600'>Veuillez entrer un nom de plat pour effectuer la recherche.</p>";
        }
    });

    const menuToggle = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");

    menuToggle.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
    });
});
