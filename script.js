let cards=document.querySelectorAll(".card");

window.addEventListener("load",()=>{ 

for(let i =0; i< cards.length;i++){

    let cardElement = cards[i];
    setTimeout(() => {       
    cardElement.style=`opacity:1;z-index:${i+1}`;
}, 5000 * i);

}

});


let buyButtonForBgColoBouquet = document.querySelector(".bg_color_bouquet .text_container > .price_content > button");

buyButtonForBgColoBouquet.addEventListener("click",()=>{
        buyButtonForBgColoBouquet.innerHTML="redirecting...";
})