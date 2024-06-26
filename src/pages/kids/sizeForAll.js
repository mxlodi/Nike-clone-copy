// Function to generate HTML for size for all section
const sizeForAll = () => {
    return `
    <div class="max-w-[1850px] mx-auto mt-10">
        <h1 class="text-2xl md:pl-0 pl-6 py-7">Sizes for All</h1>
        <!-- Card containers -->
        <div
            class="md:grid hidden max-w-[1850px] h-auto  mx-auto text-white  col-span-1 md:grid-cols-2 md:grid-rows-7 gap-4"
        >
            <!-- Card -->
            <div class=" w-full row-span-4">
            <div class="relative w-full h-full">
                <img class="w-full h-full object-cover" src="../../images/kids/sizes-for-all/nike-kids-shoes-clothing-and-accessories-nike-com.jpg" alt="">

                <div class="flex max-w-[80%] flex-col items-start gap-4 w-full  absolute left-0  bottom-0 p-6 text-black">
                <p class="text-2xl">Big Kids</p>
                <h2 class="py-3">
                Explore apparel (XS-XL) <br>
                and shoes (3.5-7Y).
                </h2>
                <button class="bg-black px-4 py-1.5 hover:bg-black/70 rounded-full text-white mt-2">
                Shop
                </button>
                </div>
            </div>
            </div>
            <div class="w-full row-span-3">
            <div class="relative w-full h-full">
                <img class="w-full h-full object-cover" src="../../images/kids/sizes-for-all/nike-kids-shoes-clothing-and-accessories-nike-com (1).jpg" alt="">

                <div class="flex max-w-[80%] flex-col items-start gap-4 w-full  absolute left-0  bottom-0 p-6 text-black">
                <p class="text-2xl">Babies and Toddlers</p>
                <h2 class="py-3">
                Explore apparel (0M-4T) 
                and shoes (0C-10C).
                </h2>
                <button class="bg-black px-4 py-1.5 hover:bg-black/70 rounded-full text-white mt-2">
                Shop
                </button>
                </div>
            </div>
            </div>
            <div class="w-full row-span-4">
            <div class="relative w-full h-full">
                <img class="w-full h-full object-cover" src="../../images/kids/sizes-for-all/nike-kids-shoes-clothing-and-accessories-nike-com (3).jpg" alt="">

                <div class="flex max-w-[80%] flex-col items-start gap-4 w-full  absolute left-0  bottom-0 p-6 text-black">
                <p class="text-2xl">Little Kids</p>
                <h2 class="py-3">
                Explore apparel (4-7) 
                and shoes (10.5C-3Y).
                </h2>
                <button class="bg-black px-4 py-1.5 hover:bg-black/70 rounded-full text-white mt-2">
                Shop
                </button>
                </div>
            </div>
            </div>
            <div class="w-full row-span-3">
            <div class="relative w-full h-full">
                <img class="w-full h-full object-cover" src="../../images/kids/sizes-for-all/nike-kids-shoes-clothing-and-accessories-nike-com (2).jpg" alt="">

                <div class="flex max-w-[80%] flex-col items-start gap-4 w-full  absolute left-0  bottom-0 p-6 text-black">
                <p class="text-2xl">Teen Essentials</p>
                <h2 class="py-3">
                Explore apparel (XS-XL) 
                and shoes (3.5-7Y).
                </h2>
                <button class="bg-black px-4 py-1.5 hover:bg-black/70 rounded-full text-white mt-2">
                Shop
                </button>
                </div>
            </div>
            </div>
        </div>

        <!-- mobile -->
        <div class="flex flex-col gap-10 md:hidden max-w-[1850px] mx-auto px-6">
            <!-- card -->
            <div class=" w-full row-span-4">
            <div class="relative w-full h-full">
                <img class="w-full h-full object-cover" src="../../images/kids/sizes-for-all/nike-kids-shoes-clothing-and-accessories-nike-com-small.jpeg" alt="">

                <div class="mt-5 flex flex-col items-start gap-4 w-full text-black">
                <p class="text-2xl">Big Kids</p>
                <h2 class="py-3">
                Explore apparel (XS-XL) 
                and shoes (3.5-7Y).
                </h2>
                <button class="bg-black px-4 py-1.5 hover:bg-black/70 rounded-full text-white mt-2">
                Shop
                </button>
                </div>
            </div>
            </div>
            <!-- card -->
            <div class=" w-full row-span-4">
            <div class="relative w-full h-full">
                <img class="w-full h-full object-cover" src="../../images/kids/sizes-for-all/nike-kids-shoes-clothing-and-accessories-nike-com-small (1).jpeg" alt="">

                <div class="mt-5 flex flex-col items-start gap-4 w-full text-black">
                <p class="text-2xl">Babies and Toddlers</p>
                <h2 class="py-3">
                Explore apparel (0M-4T) 
                and shoes (0C-10C).
                </h2>
                <button class="bg-black px-4 py-1.5 hover:bg-black/70 rounded-full text-white mt-2">
                Shop
                </button>
                </div>
            </div>
            </div>

            <!-- card -->
            <div class=" w-full row-span-4">
                <div class="relative w-full h-full">
                <img class="w-full h-full object-cover" src="../../images/kids/sizes-for-all/nike-kids-shoes-clothing-and-accessories-nike-com-small (2).jpeg" alt="">

                <div class="mt-5 flex flex-col items-start gap-4 w-full text-black">
                    <p class="text-2xl">Little Kids</p>
                    <h2 class="py-3">
                    Explore apparel (4-7) 
                    and shoes (10.5C-3Y).
                    </h2>
                    <button class="bg-black px-4 py-1.5 hover:bg-black/70 rounded-full text-white mt-2">
                    Shop
                    </button>
                </div>
                </div>
            </div>

                <!-- card -->
            <div class=" w-full row-span-4">
            <div class="relative w-full h-full">
                <img class="w-full h-full object-cover" src="../../images/kids/sizes-for-all/nike-kids-shoes-clothing-and-accessories-nike-com-small (3).jpeg" alt="">

                <div class="mt-5 flex flex-col items-start gap-4 w-full text-black">
                <p class="text-2xl">Teen Essentials</p>
                <h2 class="py-3">
                Explore apparel (XS-XL) 
                and shoes (3.5-7Y).
                </h2>
                <button class="bg-black px-4 py-1.5 hover:bg-black/70 rounded-full text-white mt-2">
                Shop
                </button>
                </div>
            </div>
            </div>
        </div>
        </div>

    `
}
// Custom element class definition
class SizeForAll extends HTMLElement{
    constructor(){
        super();
    }
    // Callback function when the element is connected to the DOM
    connectedCallback(){
        this.innerHTML = sizeForAll();
    }
}
// Define the custom element with the specified name
customElements.define("size-for-all-content", SizeForAll);