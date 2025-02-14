const div = document.querySelector("div");

fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
    .then((res) => res.json())
    .then((data) => {
        const categories = data.categories;
        const len = categories.length;

        for (let index = 0; index < len; index++) {
            let h2 = document.createElement("h2");
            h2.textContent = categories[index].strCategory;
            div.appendChild(h2);
        }
    })
    .catch((error) =>
        console.error("Erreur lors du chargement des données :", error)
    )
