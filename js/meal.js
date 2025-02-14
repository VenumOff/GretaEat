

const div = document.querySelector("div");

fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=53083`)
    .then((res) => res.json())
    .then((data) => {
        const mealSelected = data.meals[0];
        const article = document.createElement("article");
        const listIngredient = document.createElement("ul");
        const listMeasure = document.createElement("ul");
        const mealName = document.createElement("h2");
        mealName.textContent = mealSelected.strMeal;

        // Créer les ingrédients et les mesures
        for (let index = 0; index < 20; index++) {
            const mealIngredient = document.createElement("li");
            const mealMeasure = document.createElement("li");
            const ingredient = mealSelected[`strIngredient${index + 1}`];
            const measure = mealSelected[`strMeasure${index + 1}`];

            if (ingredient !== "") {
                mealIngredient.textContent = ingredient;
                listIngredient.appendChild(mealIngredient);
            }

            if (measure !== " ") {
                mealMeasure.textContent = measure;
                listMeasure.appendChild(mealMeasure);
            }
        }
        const mealImg = document.createElement("img");
        mealImg.src = mealSelected.strMealThumb;
        const mealArea = document.createElement("span");
        mealArea.textContent = `Area: ${mealSelected.strArea}`;
        const mealCategorie = document.createElement("span");
        mealCategorie.textContent = `Category: ${mealSelected.strCategory}`;

        article.appendChild(mealName);
        article.appendChild(listIngredient);
        article.appendChild(listMeasure);
        article.appendChild(mealImg);
        article.appendChild(mealArea);
        article.appendChild(mealCategorie);

        div.appendChild(article);
    })
    .catch((error) =>
        console.error("Erreur lors du chargement des données :", error)
    );
