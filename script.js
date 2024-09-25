

// Product Object
const products = [{
        id: "5960bf40-9603-4a39-9ff6-6cf9f1ce4815",
        category: "Cap",
        name: "Original wix bucket",
        seller: "Addidas",
        img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
        details: {
            price: 227,
            stock: 14,
            shipping: 14,
            quantity: 0,
        },
        ratingsInfo: {
            ratings: 4,
            ratingsCount: 3,
        },
    }, 
    
    {
        id: "5991add1-f4ba-4fb9-9b6b-ec59aa2dda60",
        category: "Cap",
        name: "SST Plus Strap-Back Hat",
        seller: "Addidas",
        img: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-madebymath-90946.jpg&fm=jpg",
        details: {
            price: 330,
            stock: 14,
            shipping: 47,
            quantity: 0,
        },
        ratingsInfo: {
            ratings: 4,
            ratingsCount: 32,
        },
    }, 

    {
        id: "5690e579-a943-4b42-9ffe-dfc65b71c560",
        category: "Cap",
        name: "Dispatch Trucker Hat",
        seller: "Addidas",
        img: "https://media.istockphoto.com/id/1040885986/photo/world-wide-cargo-transportation.webp?a=1&b=1&s=612x612&w=0&k=20&c=5U_7xB5ujE2WdP0hsq0QRPXawesEkWhVDNH4WmNw-a8=",
        details: {
            price: 280,
            stock: 16,
            shipping: 14,
            quantity: 0,
        },
        ratingsInfo: {
            ratings: 4,
            ratingsCount: 30,
        },
    }, 
    
    {
        id: "be7a4d0a-c681-416c-ab8d-f9be28223f4e",
        category: "Earphones",
        name: "adidas Z.N.E. 01 True Wireless Earbuds",
        seller: "Addidas",
        img: "https://media.istockphoto.com/id/2059568063/photo/close-up-of-bottle.jpg?s=612x612&w=0&k=20&c=F26X-DJFfTTY6nvvg4fHN_CGoV04BJJ7wRsbUrba-Zk=",
        details: {
            price: 142,
            stock: 11,
            shipping: 23,
            quantity: 0,
        },
        ratingsInfo: {
            ratings: 5,
            ratingsCount: 22,
        },
    }, 
    
    {
        id: "b278e667-ca17-465c-b603-af1af4319b7b",
        category: "Earphones",
        name: "adidas Z.N.E. 01 ANC True Wireless Earbuds",
        seller: "Addidas",
        img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
        details: {
            price: 135,
            stock: 16,
            shipping: 30,
            quantity: 0,
        },
        ratingsInfo: {
            ratings: 5,
            ratingsCount: 51,
        },
    }, 
    
    {
        id: "1f56c0e5-4407-44bf-9225-90f592d2924a",
        category: "Earphones",
        name: "FWD-01 Sport In-Ear Headphones",
        seller: "Addidas",
        img: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-madebymath-90946.jpg&fm=jpg",
        details: {
            price: 185,
            stock: 8,
            shipping: 15,
            quantity: 0,
        },
        ratingsInfo: {
            ratings: 4,
            ratingsCount: 66,
        },
    }, 
    
    {
        id: "4ead4708-68e8-4a93-b28e-5e99ccc4d75c",
        category: "Earphones",
        name: "adidas FWD-02 Sport True Wireless Earbuds",
        seller: "Addidas",
        img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
        details: {
            price: 162,
            stock: 14,
            shipping: 29,
            quantity: 0,
        },
        ratingsInfo: {
            ratings: 4,
            ratingsCount: 6,
        },
    }, 
    
    {
        id: "d1116075-10f2-49c4-985e-0d41e19ce1b3",
        category: "Earphones",
        name: "adidas Z.N.E. 01 ANC True Wireless Earbuds",
        seller: "Addidas",
        img: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-madebymath-90946.jpg&fm=jpg",
        details: {
            price: 110,
            stock: 15,
            shipping: 48,
            quantity: 0,
        },
        ratingsInfo: {
            ratings: 5,
            ratingsCount: 9,
        },
    }, 
];

// Product Display Function

function productDisplay(){
    for (let item of products){

        const card = document.createElement('div');
        card.innerHTML = 
        `
            <div class="card bg-base-100 w-96 shadow-xl border-2">
                <figure>
                    <img src= ${item.img} alt="Shoes" />
                </figure>

                <div class="card-body ">
                    <h2 class="card-title">
                        <span>${item.name}  </span>
                        <div class="badge badge-secondary">NEW</div>
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <p class="badge bg-[#d16527] text-white text-md font-semibold py-5 px-5 text-center mx-auto" >Price: ${item.details.price}  TK. </p>
                    <div class="card-actions justify-center items-center mb-5">
                        
                        <div class="badge badge-outline">Stock Availabe : ${item.details.stock} </div>
                        <div class="badge badge-outline ">Sold : ${item.details.shipping} Pices</div>
                        
                    </div>
                    
                    <div class="flex justify-between gap-1">
                        <button class="btn bg-[#d16527] w-40">Buy Now</button>
                        <button onclick=" addToCart('${item.name}', ${item.details.price} ) " class="btn bg-[#010a5e] w-40">Add To Cart</button>
                    </div>
                </div>
            </div>
        `
        document.getElementById('product-list').append(card)
    }
}
productDisplay()


// Add to Cart Function
let cartCount = 0
let totalPrice = 0
function addToCart(name, price, ){
    cartCount ++
    totalPrice = totalPrice + price
    
    const cartItemCount = document.getElementById('cartItem')
    const itemCountNumber = document.getElementById('cart-dropDown')
    const subTotal = document.getElementById('sub-total')

    cartItemCount.innerText = cartCount
    itemCountNumber.innerText = cartCount
    subTotal.innerText = totalPrice

}