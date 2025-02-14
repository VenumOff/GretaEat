const div = document.querySelector("div");
const button = document.querySelector("button");
const input = document.querySelector("input");

button.addEventListener("click", () => {
    div.innerHTML = "";
    let userInput = "";
    userInput = input.value;
    if (userInput !== "") {
        fetch(
            `https://www.themealdb.com/api/json/v1/1/search.php?s=${userInput}`
        )
            .then((res) => res.json())
            .then((data) => {
                const mealsFound = data.meals;
                const mealsFoundLen = mealsFound.length;
                for (index = 0; index < mealsFoundLen; index++) {
                    const h2 = document.createElement("h2");
                    const img = document.createElement("img");
                    h2.textContent = mealsFound[index].strMeal;
                    img.src = mealsFound[index].strMealThumb;
                    div.appendChild(h2);
                    div.appendChild(img);
                }
            })
            .catch((error) => {
                console.error("Erreur lors du chargement des données :", error);
            });
    } else {
        div.textContent = "Aucun résultat disponible";
    }
});
