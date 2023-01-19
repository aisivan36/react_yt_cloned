import { Stack, Box } from "@mui/material";
import React, { useEffect, useState } from "react";

import { Videos, Sidebar } from "./";

const Feed = () => {
	const [selectedCategory, setSelectedCategory] = useState("New");
	const [video, setVideos] = useState(null);

	useEffect(() => {
		setVideos(null);

		// FetchFromApi
	});

	return (
		<Stack sx={{ flexDirection: { sx: "column" } }}>
			<Box
				sx={{
					height: {
						sx: "auto",
						md: "92vh",
						borderRight: "1px solid #3d3d3d",
						// px: { sx: 0, md: 2 },
					},
				}}
			>
				<Sidebar />
			</Box>
		</Stack>
	);
};

export default Feed;
