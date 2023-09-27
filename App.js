const Item_Container = document.querySelector(".Item_Container");
const navlink = document.querySelector("#navlink");
const animated = document.querySelector("picture");
const loader = document.querySelector(".loader");
let Search = document.querySelector("input");
// my Api
const Recipe = async () => {
  let Search = document.querySelector("input");
  const apiKey = "gYj/k1hzhwfBA5am2CCSOQ==cVKQFAQVeFngEUYm";
  const apiEndpoint = `https://api.api-ninjas.com/v1/recipe?query=${Search.value}`;
  const data = await fetch(apiEndpoint, {
    method: "GET",
    headers: { "X-Api-Key": apiKey },
    contentType: "application/json",
  });
  const result = await data.json();
  result.forEach((e) => {
    const content = document.createElement("section");
    content.innerHTML = `
    <h1>${e.title}</h1>
        <p>
           ${e.ingredients}
        </p>
        <span>
            ${e.servings}
        </span>
        <details>
            <summary>instructions</summary>
            <p>
                ${e.instructions}
            </p>
        </details>
    
    `;
    Item_Container.appendChild(content);
    content.classList.add("content");
  });

  Search.value = "";
};

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
});

const btnSearch = document
  .getElementById("btnSearch")
  .addEventListener("click", () => {
    if(Search.value === "" ){
      alert("Please input Your Recipe !")
    }else{
      loader.classList.add("active_LOADER");
      setTimeout(() => {
        loader.classList.remove("active_LOADER");
        Recipe();
        animated.classList.add("deactivated");
      }, 4000);
    }



  
  });

const burger = document
  .querySelector("#burger")
  .addEventListener("click", () => {
    navlink.classList.toggle("activeNav");
  });

// FAQ JS

let span = document.querySelectorAll(" h5 .span");
let contents = document.querySelectorAll(".infos");

span.forEach((e, index_span) => {
  e.addEventListener("click", () => {
    contents.forEach((e, index) => {
      if (index === index_span) {
        e.classList.toggle("active_Contents");
      }
    });
  });
});

 const DarkMode = () => {
   let DarIcon = document.querySelector(".darkMode");
   let body = document.querySelector('body')
   let card = document.querySelectorAll(".card")
   let container = document.querySelectorAll('.container')
   let footer = document.querySelector('footer')

    DarIcon.addEventListener("click",()=>{
    body.classList.toggle("activeLightMode");
    card.forEach(e =>{e.classList.toggle('activeCard')})
    container.forEach(e =>{e.classList.toggle('FAQactive')})
    footer.classList.toggle("footerActive");
   })

 }
 DarkMode()