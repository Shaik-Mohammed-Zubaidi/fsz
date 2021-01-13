import React from "react";
import { Box } from "@material-ui/core";

export default function Categories(props) {
  const { categoriesList, setCategory } = props;
  return (
    <Box width="25%" position="relative">
      <div style={{ position: "sticky", top: "5vh" }}>
        <h2>Categories</h2>
        {categoriesList.map((category, index) => (
        <div
            key={category + index}
            onClick={() => setCategory(category)}
            className="category flex"
        >
            {category}
        </div>
        ))}
      </div>
    </Box>
  );
}
