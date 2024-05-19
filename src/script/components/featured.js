const featured = (data) => {
    return `
    <div class="max-w-[1850px] mx-auto p-3 mt-10"> 
        ${data.map((card) => {
            return`
            <h2 class="text-2xl mb-5">Featured</h2> 
            <div class="flex gap-3 md:flex-row cursor-pointer flex-col"> 
                <!-- CARD 1 --> 
                <div class="w-full h-[680px] relative "> 
                    <img class="w-full h-full object-cover block md:hidden" src="${card.imgURL_1}" alt=""> 
                    <img class="w-full h-full object-cover md:block hidden"  src="${card.imgURL_2}" alt="">
                    <div class="absolute bottom-8 left-8 p-2 text-white"> 
                        <p>${card.title_1}</p> 
                        <h2 class="text-2xl mb-5">${card.title_2}</h2> 
                        <a href="../../pages/newfeatured/newfeatured.html" class="bg-white px-4 py-1.5 rounded-full font-semibold text-black mt-4 hover:bg-gray-200">${card.button}</a> 
                    </div> 
                </div> 
            </div> 
            `;
        }).join("")}
    </div>   
    `;
};

class Featured extends HTMLElement {
    connectedCallback(){
        const listItems = JSON.parse(this.getAttribute("listItems"));
        this.innerHTML = featured(listItems);
    }
}

customElements.define("featured-component", Featured);