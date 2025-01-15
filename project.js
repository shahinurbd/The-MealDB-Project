
document.getElementById("search-btn").addEventListener("click", (event) => {
    const inputValue = document.getElementById("search-box").value; 

    const loadItems = () => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`)
        .then((res)=>res.json())
        .then((data) => {  
            displayItem(data.meals);
        });
    };

    const displayItem = (Items) => {
        const ItemContainer = document.getElementById("menu-card");

        ItemContainer.innerHTML = '';
        if(Items==null){
            
            ItemContainer.innerHTML = `
            <h3>Item Not Found!</h3>
            `;

        }

        Items.forEach(item => {

            const div = document.createElement("div");
            div.classList.add("card");

            div.innerHTML = `
            <img onclick = "singleProduct('${item.idMeal}')" class="card-img" src="${item.strMealThumb}" />
            <h3 onclick = "singleProduct('${item.idMeal}')" class="text-primary fnt-2">${item.strMeal}</h3>
            `;

            ItemContainer.appendChild(div);
            
            document.getElementById("search-box").value ="";
        })
        
    }
    
    
    loadItems();
    
    });

const singleProduct = (id) => {
    
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(res=>res.json())
            .then(data=>productDetails(data.meals))};

    const productDetails = (Items) => {

        const mealDetails = document.getElementById("meal-details");
        mealDetails.innerHTML ='';
    Items.forEach(item => {

        const div = document.createElement("div");
        div.classList.add("details-card");

        div.innerHTML = `
            <img class="detail-img" src="${item.strMealThumb}" />
            <h6 class="p-2">${item.strMeal}</h6>
            <p class="p-2">Ingredients</p>
            <ul>
                <li>${item.strIngredient1}</li>
                <li>${item.strIngredient2}</li>
                <li>${item.strIngredient3}</li>
                <li>${item.strIngredient4}</li>
                <li>${item.strIngredient5}</li>
                <li>${item.strIngredient6}</li>
                <li>${item.strIngredient7}</li>
                <li>${item.strIngredient8}</li>
                <li>${item.strIngredient9}</li>
                
            </ul>

        `;

        mealDetails.appendChild(div);
    })

}
singleProduct();








    

    

  


