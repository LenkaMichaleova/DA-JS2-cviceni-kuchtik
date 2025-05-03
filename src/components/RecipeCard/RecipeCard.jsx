export const RecipeCard = ({props}) => (
    <div key={props.id} className="recipe">
        <img className="recipe__image" src={props.image} alt={`img: ${props.title}`} />
        <h1 className="recipe__title">{props.title}</h1>
        <p className="recipe__description">{props.description}</p>
        <button className="recipe__detail">
            <a href={`/recipe.html?id=${props.id}`}>Zobrazit recept</a>
        </button>
        <div className="recipe__buttons">
            <button className="recipe__delete" data-id={props.id}>Odstranit recept</button>
        </div>
    </div>
)
