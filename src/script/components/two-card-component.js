
const createTwoCardComponent = () => {
    return `

    <div class="max-w-[1850px] mx-auto p-3 mt-10">
    <p class="text-2xl">Trending</p>
    <div class="md:flex hidden gap-4 my-7">
        <div class="w-full"> 
            <div class="w-full relative"> 
                <img src="../../images/kids/trending/nike-kids-shoes-clothing-and-accessories-nike-com (4).jpg" alt="Member Product" class="w-full h-full  object-cover"> 
                <div class="absolute bottom-8 left-8 text-white/90"> 
                    <p class="text-2xl">Jordan Summer Styles</p> 
                    <button class="bg-white px-4 py-1.5 rounded-full text-black/90 mt-4 font-semibold">Shop</button> 
                </div> 
            </div> 
        </div>

        <div class="w-full"> 
            <div class="w-full relative"> 
                <img src="../../images/kids/trending/nike-kids-shoes-clothing-and-accessories-nike-com (5).jpg" alt="Member Product" class="w-full h-full  object-cover"> 
                <div class="absolute bottom-8 left-8 text-white/90"> 
                    <p class="text-2xl">The Latest Air Max</p> 
                    <button class="bg-white px-4 py-1.5 rounded-full text-black/90 mt-4 font-semibold">Shop</button> 
                </div> 
            </div> 
        </div>
    </div>

    <!-- small -->
    <div class="md:hidden flex-col my-8">
        <div class="w-full my-2"> 
            <div class="w-full relative"> 
                <img src="../../images/kids/trending/pink-glasses-small.jpeg" alt="Member Product" class="w-full h-full  object-cover"> 
                <div class="absolute bottom-8 left-8 text-white/90"> 
                    <p class="text-2xl">Jordan Summer Styles</p> 
                    <button class="bg-white px-4 py-1.5 rounded-full text-black/90 mt-4 font-semibold">Shop</button> 
                </div> 
            </div> 
        </div>

        <div class="w-full"> 
            <div class="w-full relative"> 
                <img src="../../images/kids/trending/shoes-small.jpeg" alt="Member Product" class="w-full h-full  object-cover"> 
                <div class="absolute bottom-8 left-8 text-white/90"> 
                    <p class="text-2xl">The Latest Air Max</p> 
                    <button class="bg-white px-4 py-1.5 rounded-full text-black/90 mt-4 font-semibold">Shop</button> 
                </div> 
            </div> 
        </div>
    </div>
</div>
    `
}

class TwoCardComponent extends HTMLElement {
    connectedCallback() {
        const firstCardArray = JSON.parse(this.getAttribute("firstCardArray"));
        console.log(firstCardArray)
        this.innerHTML = createTwoCardComponent()
    }
}

customElements.define("two-card-component", TwoCardComponent)