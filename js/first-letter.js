let letter = "";
const resultContainer = document.querySelector("#container");

document.addEventListener("click", function (event) {
    if (event.target.tagName === "A") {
        letter = event.target.textContent.trim().toLowerCase();

        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
            .then((res) => res.json())
            .then((data) => {
                resultContainer.innerHTML = "";

                if (!data.meals) {
                    resultContainer.innerHTML = "<p>Aucun résultat trouvé</p>";
                    return;
                }

                data.meals.forEach((meal) => {
                    const h2 = document.createElement("h2");
                    const img = document.createElement("img");
                    const newMeal = document.createElement("div");

                    h2.textContent = meal.strMeal;
                    img.src = meal.strMealThumb;
                    img.alt = meal.strMeal;

                    newMeal.appendChild(h2);
                    newMeal.appendChild(img);
                    resultContainer.appendChild(newMeal);
                });
            })
            .catch((error) =>
                console.error("Erreur lors du chargement des données :", error)
            );
    }
});
