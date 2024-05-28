const subFooter = () => {
    return `
    <!-- sub footer --> 
    <div class="max-w-[900px] mx-auto md:block hidden p-3 mt-20 transition-all ease-in-out duration-300 flex-row h-[185px] overflow-y-hidden hover:h-full"> 
        <div class="flex flex-row gap-20 text-gray-500"> 
            <ul> 
                <li class="text-black/95 mb-5">Women's Shoes</li> 
                <li class="mb-3 text-black/55 cursor-pointer hover:text-black/80">All Women's Shoes</li> 
                <li class="mb-3 text-black/55 cursor-pointer hover:text-black/80">Running</li> 
                <li class="mb-3 text-black/55 cursor-pointer hover:text-black/80">Basketball</li> 
                <li class="mb-3 text-black/55 cursor-pointer hover:text-black/80">Tennis</li> 
                <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Soccer</li> 
                <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Gym & Training</li>
                <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Lifestyle</li>
                <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Slides & Sandals</li>
                <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Cleats & Spikes</li>
                <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Customize with Nike By You</li>
            </ul> 
            <ul> 
                <li class="text-black/95 mb-5">Women's Clothing</li> 
                <li class="mb-3 text-black/55 cursor-pointer hover:text-black/80">All Women's Clothing</li> 
                <li class="mb-3 text-black/55 cursor-pointer hover:text-black/80">Plus Size</li> 
                <li class="mb-3 text-black/55 cursor-pointer hover:text-black/80">Sport Bras</li> 
                <li class="mb-3 text-black/55 cursor-pointer hover:text-black/80">Tops & T-Shirts</li> 
                <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Basketball</li>
                <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Shorts</li>
                <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Joggers & Sweatpants</li>
                <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Pants & Leggings</li>
                <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Hoodies & Sweatshirts</li>
                <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Tanks & Sleeveless Tops</li>
                <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Compression & Nike Pro</li>
            </ul> 
            <ul> 
                <li class="text-black/95 mb-5">Women's Gear</li> 
                <li class="mb-3 text-black/55 cursor-pointer hover:text-black/80">Accessories & Equipment</li> 
                <li class="mb-3 text-black/55 cursor-pointer hover:text-black/80">Bags & Backpacks</li> 
                <li class="mb-3 text-black/55 cursor-pointer hover:text-black/80">Hats & Headbands</li> 
                <li class="mb-3 text-black/55 cursor-pointer hover:text-black/80">Gloves</li> 
                <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Sunglasses</li>
                <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Socks</li>
                <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Soccer Balls</li>
                <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Sleeveless & Arm Bands</li>
                <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Totes</li>
                <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Duffel Bags</li>
            </ul> 
            <ul> 
                <li class="text-black/95 mb-5">Featured</li> 
                <li class="mb-3 text-black/55 cursor-pointer hover:text-black/80">Luxe Leggings</li> 
                <li class="mb-3 text-black/55 cursor-pointer hover:text-black/80">Compare Sports Bras</li> 
                <li class="mb-3 text-black/55 cursor-pointer hover:text-black/80">Indy Sports Bras</li> 
                <li class="mb-3 text-black/55 cursor-pointer hover:text-black/80">Yoga</li> 
                <li class="mb-3 text-black/55 cursor-pointer hover:text-black/80">Air Max</li> 
                <li class="mb-3 text-black/55 cursor-pointer hover:text-black/80">Trending Styles</li> 
                <li class="mb-3 text-black/55 cursor-pointer hover:text-black/80">New Releases</li> 
                <li class="mb-3 text-black/55 cursor-pointer hover:text-black/80">Best Sellers</li> 
                <li class="mb-3 text-black/55 cursor-pointer hover:text-black/80">Clearance</li> 
            </ul> 
        </div> 
    </div> 
    <!-- small screen -->
    <div class="max-w-[900px] md:hidden block mx-auto p-3 mt-14 mb-4 pl-4"> 
        <div class="flex flex-col gap-20 text-gray-500"> 
            <div>
                <div>
                    <button id="womenShoesBtn" class="text-black/95 mb-5">Women's Shoes</button>
                    <div id="womenShoesContent" class="h-0 overflow-hidden duration-500">
                        <ul class="pl-4"> 
                            <li class="mb-3 text-black/55 cursor-pointer hover:text-black/80">All Women's Shoes</li> 
                            <li class="mb-3 text-black/55 cursor-pointer hover:text-black/80">Running</li> 
                            <li class="mb-3 text-black/55 cursor-pointer hover:text-black/80">Basketball</li> 
                            <li class="mb-3 text-black/55 cursor-pointer hover:text-black/80">Tennis</li> 
                            <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Soccer</li> 
                            <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Gym & Training</li>
                            <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Lifestyle</li>
                            <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Slides & Sandals</li>
                            <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Cleats & Spikes</li>
                            <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Customize with Nike By You</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <button id="womenClothingBtn" class="text-black/95 mb-5">Women's Clothing</button>
                    <div id="womenClothingContent" class="h-0 overflow-hidden duration-500">
                        <ul class="pl-4"> 
                            <li class="mb-3 text-black/55 cursor-pointer hover:text-black/80">All Women's Clothing</li> 
                            <li class="mb-3 text-black/55 cursor-pointer hover:text-black/80">Plus Size</li> 
                            <li class="mb-3 text-black/55 cursor-pointer hover:text-black/80">Sport Bras</li> 
                            <li class="mb-3 text-black/55 cursor-pointer hover:text-black/80">Tops & T-Shirts</li> 
                            <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Basketball</li>
                            <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Shorts</li>
                            <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Joggers & Sweatpants</li>
                            <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Pants & Leggings</li>
                            <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Hoodies & Sweatshirts</li>
                            <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Tanks & Sleeveless Tops</li>
                            <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Compression & Nike Pro</li>
                        </ul> 
                    </div>
                </div>
                <div>
                    <button id="womenGearBtn" class="text-black/95 mb-5">Women's Gear</button>
                    <div id="womenGearContent" class="h-0 overflow-hidden duration-500">
                        <ul class="pl-4"> 
                            <li class="mb-3 text-black/55 cursor-pointer hover:text-black/80">Accessories & Equipment</li> 
                            <li class="mb-3 text-black/55 cursor-pointer hover:text-black/80">Bags & Backpacks</li> 
                            <li class="mb-3 text-black/55 cursor-pointer hover:text-black/80">Hats & Headbands</li> 
                            <li class="mb-3 text-black/55 cursor-pointer hover:text-black/80">Gloves</li> 
                            <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Sunglasses</li>
                            <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Socks</li>
                            <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Soccer Balls</li>
                            <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Sleeveless & Arm Bands</li>
                            <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Totes</li>
                            <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Duffel Bags</li>
                        </ul> 
                            
                    </div>
                </div>
                <div>
                    <button id="womenFeaturedBtn" class="text-black/95 mb-5">Featured</button>
                    <div id="womenFeaturedContent" class="h-0 overflow-hidden duration-500">
                        <ul class="pl-4"> 
                            <li class="mb-3 text-black/55 cursor-pointer hover:text-black/80">Luxe Leggings</li> 
                            <li class="mb-3 text-black/55 cursor-pointer hover:text-black/80">Compare Sports Bras</li> 
                            <li class="mb-3 text-black/55 cursor-pointer hover:text-black/80">Indy Sports Bras</li> 
                            <li class="mb-3 text-black/55 cursor-pointer hover:text-black/80">Yoga</li> 
                            <li class="mb-3 text-black/55 cursor-pointer hover:text-black/80">Air Max</li> 
                            <li class="mb-3 text-black/55 cursor-pointer hover:text-black/80">Trending Styles</li> 
                            <li class="mb-3 text-black/55 cursor-pointer hover:text-black/80">New Releases</li> 
                            <li class="mb-3 text-black/55 cursor-pointer hover:text-black/80">Best Sellers</li> 
                            <li class="mb-3 text-black/55 cursor-pointer hover:text-black/80">Clearance</li> 
                        </ul> 
                    </div>
                </div>
            </div>
        </div> 
    </div> 
    `
};
class SubFooter extends HTMLElement{
    constructor(){
        super()
    }
    connectedCallback(){
        this.innerHTML = subFooter();
        // function for dropdown
        function sideDropdown(btn, content, h) {
            const Btn = document.querySelector(`#${btn}`);
            const Content = document.querySelector(`#${content}`);

            Btn.addEventListener("click", function () {
                Content.classList.toggle(`${h}`)
            })
        }
        sideDropdown("womenShoesBtn", "womenShoesContent" , "h-[380px]")
        sideDropdown("womenClothingBtn", "womenClothingContent" , "h-[410px]")
        sideDropdown("womenGearBtn", "womenGearContent" , "h-[380px]")
        sideDropdown("womenFeaturedBtn", "womenFeaturedContent" , "h-[290px]")
    }
};

customElements.define ("sub-footer-content", SubFooter);