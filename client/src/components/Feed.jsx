import React from "react";
import { Box } from "@material-ui/core";
import Games from "./Games/Games";
import Books from "./Books/Books";
import Courses from "./Courses/Courses";

export default function Feed({ category }) {

  const renderCategoryPage = (category) =>{
    switch (category) {
      case "Games":
        return <Games />;
      case "Books":
        return <Books />;
      case "Courses":
        return <Courses />;
      default:
        return <></>;
    }
  }

  return (
    <Box width="35%">
      <h2>{category}</h2>
      {renderCategoryPage(category)}
    </Box>
  );
}
