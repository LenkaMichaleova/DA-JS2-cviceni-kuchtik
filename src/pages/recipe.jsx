import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import './recipe.css'

const params = new URLSearchParams(window.location.search)
const recipe = params.get("id")

const response = await fetch(`http://localhost:4000/api/recepty/${recipe}`)
const json = await response.json()

const RecipePage = ({props}) => (
  <div>
    <img className="recipe__image" src={props.image} alt={`img: ${props.title}`} />
    <h1 className="recipe__title">{props.title}</h1>
    <ul className="recipe__ingredients">
      {props.ingredients.map((ingredience) => <li>{ingredience}</li>)}
    </ul>
    <p className="recipe__instruction">{props.instructions}</p>
    <button className="btn-home">
      <a href="index.html">Zpět na všechny recepty</a>
    </button>
  </div>
)

document.querySelector('#root').innerHTML = render(
  <>
    <RecipePage props={json.data}/>
  </>
);
