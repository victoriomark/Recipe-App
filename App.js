
const body = document.querySelector('body');


const Recipe = async () => {
const Search =  document.querySelector('input');
const apiKey = '0+MqXToHwjmS0i7+RVhE1Q==BhuNr2wmhrzkujvH';
const apiEndpoint = `https://api.api-ninjas.com/v1/recipe?query=${Search.value}`

 const data = await fetch(apiEndpoint,{
    method:'GET',
    headers:{'X-Api-Key': apiKey},
    contentType: 'application/json'
 })
 const result = await  data.json();
result.forEach(e =>{
    const content = document.createElement('section');
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
    body.appendChild(content)
    content.classList.add("content")
})



 Search.value = "";
}



document.querySelector('form').addEventListener('submit',(e)=>{
   e.preventDefault()
  
   
})

const btnSearch = document.getElementById('btnSearch').addEventListener('click',()=>{
    Recipe()
})