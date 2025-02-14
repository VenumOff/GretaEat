const a = document.querySelector("a");
const select = document.querySelector("#categorieChoice");
const button = document.querySelector("button");

button.addEventListener("click", () => {
    a.innerHTML = "";
    fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${select.value}`
    )
        .then((res) => res.json())
        .then((data) => {
            const meal = data.meals;
            const lenMeal = meal.length;
            for (index = 0; index < lenMeal; index++) {
                let h2 = document.createElement("h2");
                let img = document.createElement("img");
                h2.textContent = meal[index].strMeal;
                img.src = meal[index].strMealThumb;

                a.appendChild(h2);
                a.appendChild(img);
            }
        })
        .catch((error) =>
            console.error("Erreur lors du chargement des données :", error)
        );
});
