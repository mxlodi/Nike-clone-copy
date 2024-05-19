// create a function
const classicsSpotlightWomen =() => {
    return `
    
    <!-- classics -->
    <div class="max-w-[1850px] mx-auto p-3 mt-16 overflow-hidden">
        <h2 class="text-2xl my-6">Classics Spotlight</h2>     
    </div>

    <div class="max-w-[2600px] mx-auto relative overflow-hidden">
        <div id="classic-women" class="md:overflow-hidden overflow-x-auto flex gap-4 items-center cursor-pointer ">
            <div class="w-full mb-10">
                <div class="min-[1900px]:w-[530px] min-[1900px]:h-[550px] w-[320px] h-[340x]">
                    <img src="../../images/men/classics-spotlight/men-s-shoes-clothing-accessories(4).jpg" alt="">
                </div>
            </div>
        
            <div class="w-full mb-10">
                <div class="min-[1900px]:w-[530px] min-[1900px]:h-[550px] w-[320px] h-[340x]">
                    <img src="../../images/men/classics-spotlight/men-s-shoes-clothing-accessories(5).jpg" alt="">
                </div>
            </div>
        
            <div class="w-full mb-10">
                <div class="min-[1900px]:w-[530px] min-[1900px]:h-[550px] w-[320px] h-[340x]">
                    <img src="../../images/men/classics-spotlight/men-s-shoes-clothing-accessories(6).jpg" alt="">  
                </div>
            </div>
        
            <div class="w-full mb-10">
                <div class="min-[1900px]:w-[530px] min-[1900px]:h-[550px] w-[320px] h-[340x]">
                    <img src="../../images/men/classics-spotlight/men-s-shoes-clothing-accessories(7).jpg" alt="">
                </div>
            </div>
        
            <div class="w-full mb-10">
                <div class="min-[1900px]:w-[530px] min-[1900px]:h-[550px] w-[320px] h-[340x]">
                    <img src="../../images/men/classics-spotlight/men-s-shoes-clothing-accessories(8).jpg" alt="">
                </div>
            </div>
        
            <div class="md:flex hidden absolute justify-between items-center w-full"> 
                <div class="pl-6"> 
                    <button id="left-women-classic" class="bg-[#e5e5e5] w-10 h-10 rounded-full flex justify-center items-center"> 
                        <img src="../../images/home/trending/left-chevron.png" alt="" class="w-[20px] "> 
                    </button> 
                </div> 
                <div class="pr-12"> 
                    <button id="right-women-classic" class="bg-[#e5e5e5] w-10 h-10 rounded-full flex justify-center items-center"> 
                        <img src="../../images/home/trending/chevron.png" alt="" class="w-[20px]"> 
                    </button> 
                </div> 
            </div>
        </div>
    </div>
    `
}

// call the function to class
class ClassicsSpotlightWomen extends HTMLElement {
    connectedCallback() {
        this.innerHTML = classicsSpotlightWomen();
        const classicWomen= document.querySelector("#classic-women");
        const leftClassic = document.querySelector("#left-women-classic");
        const rightClassic = document.querySelector("#right-women-classic");
        // carousel
        
          rightClassic.addEventListener("click", () => {
            classicWomen.scrollBy({
              left: 625,
              behavior: "smooth"
            })
          })
          leftClassic.addEventListener("click", () => {
            classicWomen.scrollBy({
              left: -625,
              behavior: "smooth"
            })
          })
        }

    }

// create a component name to call in html
customElements.define("classics-spotlight-component", ClassicsSpotlightWomen);