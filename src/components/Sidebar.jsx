import React from "react";
import { Stack } from "@mui/material";

import { categories } from "../utils/constants";

const Sidebar = ({ selectedCategory, setSelectedCategory }) => (
	<Stack>
		{categories.map((category) => (
			<button>
				<span>{category.icon}</span>
				<span> {category.name}</span>
			</button>
		))}
	</Stack>
);

export default Sidebar;
