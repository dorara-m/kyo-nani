import { Recipe } from "./types";

const Card = ({ recipe }: { recipe: Recipe }) => {
  const cardContent = (
    <>
      <div className="recipe-img">
        <img
          src={recipe.thumb?.url || "/src/assets/noimage.jpg"} 
          alt={recipe.name} 
        />
      </div>
      <h2>{recipe.name}</h2>
      <div className="recipe-tags">
        {recipe.materialCategory.map((cat) => (
          <span key={cat.id} className="category-tag">
            {cat.name}
          </span>
        ))}
        {recipe.feeling.map((feel) => (
          <span key={feel} className="feeling-tag">
            {feel}
          </span>
        ))}
      </div>
    </>
  )

  return (
    <div key={recipe.id} className="recipe-card">
      {recipe.recipeUrl ? (
        <a href={recipe.recipeUrl} target="_blank" rel="noopener noreferrer">
          {cardContent}
        </a>
      ) : (
          cardContent
      )}
    </div>
  );
};

export default Card;