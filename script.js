document.addEventListener("DOMContentLoaded", async function() {
    try {
        const response = await fetch('https://64e2f2b5bac46e480e77f31c.mockapi.io/food');
        if (response.ok) {
            const data = await response.json();
            const recipeListContainer = document.getElementById("recipe-list");

            data.forEach(recipe => {
                const recipeElement = document.createElement("div");
                recipeElement.classList.add("recipe");
                recipeElement.innerHTML = `
                    <h3>${recipe.title}</h3>
                    <p>${recipe.description}</p>
                    <img src="${recipe.img_url}" alt="${recipe.title}" />
                `;
                recipeListContainer.appendChild(recipeElement);
            });
        } else {
            throw new Error("Network response was not OK");
        }
    } catch (err) {
        console.error('err', err);
    }
});