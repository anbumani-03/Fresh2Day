
    // Product data (add as many as you want)
    const products = [
        { name: "aachi chicken", price: 64, image: "images/masala/aachichicken.jpg", op1: "100 gm", op2: "50 gm" },
        { name: "Aachi Chicken Kabab", price: 32, image: "images/masala/chickenkabab.jpg", op1: "100 gm", op2: "50 gm" },
        { name: "Aachi Chicken Masala", price: 26, image: "images/masala/cicken masala.jpg", op1: "100 gm", op2: "50 gm" },
        { name: "Aachi Chilli Powder", price: 22, image: "images/masala/aachicillipowder.jpg", op1: "100 gm", op2: "50 gm" },
        { name: "Aachi Coriander Powder", price:14, image: "images/masala/opt_aachi_coriander_powder_50gm_1789.jpg", op1: "100 gm", op2: "50 gm" },
        { name: "Aachi Garam Masala", price:36, image: "images/masala/opt_2acdd3d9-4a4c-4305-b0f4-2793b6fb0326-520.jpg", op1: "100 gm", op2: "50 gm" },
        { name: "Aachi Fish cury Masala", price:31, image: "images/masala/opt_aachi_fish_curry_masala_50gm_2037.jpg", op1: "100 gm", op2: "50 gm" },
        { name: "Aachi Cumin Powder", price:37, image: "images/masala/opt_aachi_cumin_powder_50gm_1769.jpg", op1: "100 gm", op2: "50 gm" },
        { name: "Aachi Fish Fry Masala", price:31, image: "images/masala/opt_aachi_fish_fry_masala_50gm_1844.jpg", op1: "100 gm", op2: "50 gm" },
        { name: "Aachi Madras Sambar", price:50, image: "images/masala/opt_aachi_madras_sambar_powder_1pack.jpg", op1: "100 gm", op2: "50 gm" },
        
       
    ];

    // Select container
    const container = document.getElementById("products");

    // Loop and create cards
    products.forEach((product, index) => {
        const div = document.createElement("div");
        div.classList.add("card");

        div.innerHTML = `
        <img src="${product.image}"  style=" width: 100%;
     height: 150px;
     object-fit: contain;">

            <h3 style="font-size: 16px;
     margin: 10px 0;">${product.name}</h3>
            <select style="height:35px;
     width: 100%;
     padding: 5px;
     margin: 10px 0;
     border:1px solid #E6E6E6;
     border-radius:5px;">
                <option>${product.op1}</option>    
                <option>${product.op2}</option>    
            </select>
            <div style="color: #4FAD21;
     font-weight: bold;
     margin: 10px 0;">₹${product.price}</div>

            <button style="position: absolute;
     bottom: -18px; left: 50%;
     transform: translateX(-50%);
     border: 1px solid #4FAD21;
     width: 35px;
     height: 35px;
     border-radius: 50%;
     background: #EAF5E4;
     color: #4FAD21;
     font-size: 20px;
     cursor: pointer;" onclick="addToCart(${index})">+</button>
            
        `;
        container.appendChild(div);
    });

    function addToCart(index) {
  let cart = JSON.parse(localStorage.getItem('cart') || '[]');
  const product = products[index];
  cart.push(product);  // Add full product object
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${product.name} added to cart!`);  // Optional feedback
}

// In card creation loop, update button:
button.onclick = () => addToCart(index);







    // Simple Add to Cart function
    // function addToCart(index) {
    //     alert(products[index].name + " added to cart!");
    // }










    //     // const container = document.getElementById("cartproducts");
    //     let container=document.getElementById("cartproducts");
    //     const div=document.createElement("div");
    //     div.classList.add("card");
    //      div.innerHTML = `
    //     <img src="${products[index].image}"  style=" width: 100%;
    //  height: 150px;
    //  object-fit: contain;">

    //         <h3 style="font-size: 16px;
    //  margin: 10px 0;">${products[index].name}</h3>
    //         <select style="height:35px;
    //  width: 100%;
    //  padding: 5px;
    //  margin: 10px 0;
    //  border:1px solid #E6E6E6;
    //  border-radius:5px;">
    //             <option>${products[index].op1}</option>    
    //             <option>${products[index].op2}</option>    
    //         </select>
    //         <div style="color: #4FAD21;
    //  font-weight: bold;
    //  margin: 10px 0;">₹${products[index].price}</div>

    //         <button style="position: absolute;
    //  bottom: -18px; left: 50%;
    //  transform: translateX(-50%);
    //  border: 1px solid #4FAD21;
    //  width: 35px;
    //  height: 35px;
    //  border-radius: 50%;
    //  background: #EAF5E4;
    //  color: #4FAD21;
    //  font-size: 20px;
    //  cursor: pointer;">+</button>
            
    //     `;
    //     container.appendChild(div);
        