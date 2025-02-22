const div = document.querySelector("#container");

fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
  .then((res) => res.json())
  .then((data) => {
    const categories = data.categories;
    const len = categories.length;

    for (let index = 0; index < len; index++) {
      const category = categories[index];

      const newCategory = document.createElement("div");
      newCategory.classList.add(
        "bg-white",
        "border",
        "border-gray-200",
        "rounded-lg",
        "shadow-md",
        "hover:shadow-lg",
        "transition-shadow",
        "p-6",
        "flex",
        "flex-col",
        "items-center",
        "justify-center",
        "cursor-pointer"
      );

      const h2 = document.createElement("h2");
      h2.textContent = category.strCategory;
      h2.classList.add("text-xl", "font-semibold", "text-[#222222]", "mb-4");

      const img = document.createElement("img");
      img.src = category.strCategoryThumb;
      img.alt = category.strCategory;
      img.classList.add("w-32", "h-32", "object-cover", "rounded-full", "mb-4");

      newCategory.appendChild(img);
      newCategory.appendChild(h2);
      div.appendChild(newCategory);
    }
  })
  .catch((error) =>
    console.error("Erreur lors du chargement des données :", error)
  );

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
});
