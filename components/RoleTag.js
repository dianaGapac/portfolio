import React from "react";

const RoleTag = ({ role }) => {
	return (
		<div
			style={{
				borderRadius: "40px",
				backgroundColor: "transparent",
				border: "1px solid black",
				paddingInline: "4%",
				paddingBlock: "2%",
				marginInline: "5px",
			}}
		>
			<span> {role} </span>
		</div>
	);
};

export default RoleTag;
