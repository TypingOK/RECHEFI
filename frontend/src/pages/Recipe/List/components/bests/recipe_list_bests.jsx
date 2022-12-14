import React from "react";
import { Container } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import BestRecipeCard from "./recipe_list_bests_card";
import TitleWithDivider from "../../../../../common/components/title_with_divider";
import { useNavigate } from "react-router-dom";

function RecipeListBests({ bestRecipes }) {
  const navigate = useNavigate();

  return (
    <Container>
      <TitleWithDivider textVariant="h5" title="베스트 레시피" />
      <Carousel animation="slide" interval="6000" sx={{ width: "100%" }}>
        {bestRecipes.map((item, i) => (
          <BestRecipeCard
            bestRecipe={item}
            key={i}
            onClick={() => {
              navigate(`/recipe/postId=${item.id}`);
            }}
          />
        ))}
      </Carousel>
    </Container>
  );
}

RecipeListBests.defaultProps = {
  bestRecipes: [],
};

export default RecipeListBests;
