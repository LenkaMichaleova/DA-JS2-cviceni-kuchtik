export const RecipeForm = () => (
  <form className='add-recipe'>
    <h2 className='add-recipe__h2'>Přidat recept</h2>
    <label className='add-recipe__label'>Napiš název receptu:
      <input className='add-recipe__title' type="text" />
    </label>
    <label className='add-recipe__label'>Přidej odkaz na obrázek: 
      <input className='add-recipe__image' type="text" />
    </label>
    <label className='add-recipe__label'>Popis receptu: 
      <input className='add-recipe__description' type="text" />
    </label>
    <label className='add-recipe__label'>Ingredience (odděl čárkou)
      <input className='add-recipe__ingredients' type="text" />
    </label>
    <label className='add-recipe__label'>Postup
      <input className='add-recipe__instructions' type="text" />
    </label>
    <button type="submit">Přidat recept</button>
  </form>
)
