import { render } from '@czechitas/render';
import { RecipeCard } from '../components/RecipeCard/RecipeCard';
import { RecipeForm } from '../components/RecipeForm/RecipeForm';
import '../global.css';
import './index.css';
import '../components/RecipeCard/RecipeCard.css'
import '../components/RecipeForm/RecipeForm.css'

// ----- ZÍSKÁNÍ DAT Z API ------- //
const response = await fetch("http://localhost:4000/api/recepty")
const json = await response.json()
const recepty = json.data

// ------ VYPSÁNÍ STRÁNKY -------- //
document.querySelector('#root').innerHTML = render(
  <>
    <h1 className='title'>Kuchtík</h1>
    <div className="recipes-container">
      {recepty.map((item) => <RecipeCard key={item.id} props={item} />)}
    </div>
    <RecipeForm />
  </>
);

// ------ POST ------ //
document.querySelector(".add-recipe").addEventListener("submit", async (e) => {
  e.preventDefault()
  
  const title = document.querySelector(".add-recipe__title").value
  const image = document.querySelector(".add-recipe__image").value
  const description = document.querySelector(".add-recipe__description").value
  const instructions = document.querySelector(".add-recipe__instructions").value
  const ingredients = document.querySelector(".add-recipe__ingredients").value.split(",")

  const response = await fetch("http://localhost:4000/api/recepty", {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      title: title,
      image: image,
      description: description,
      instructions: instructions,
      ingredients: ingredients
    })
  })

  const data = await response.data

  window.location.reload()
})

// ----- DELETE ----- //
document.querySelectorAll(".recipe__delete").forEach((btn) => {
  btn.addEventListener("click", async (e) => {
    console.log("funguju vole")

    const index = btn.dataset.id
    const response = await fetch(`http://localhost:4000/api/recepty/${index}`, {
      method: 'DELETE',
    });
    const data = await response.data
  
    window.location.reload()
  })
})
