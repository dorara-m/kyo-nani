import { Recipe } from "./types";

const Card = ({ recipe }: { recipe: Recipe }) => {
  return (
    <div key={recipe.id} className="recipe-card">
      {recipe.thumb && <img src={recipe.thumb.url} alt={recipe.name} />}
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
    </div>
  );
};

export default Card;