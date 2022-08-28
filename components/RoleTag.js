import React from "react";

const RoleTag = ({ role }) => {
	return (
		<div
			style={{
				borderRadius: "40px",
				backgroundColor: "transparent",
				border: "1px solid black",
				paddingInline: "3%",
				paddingBlock: "1%",
				marginInline: "5px",
				fontSize: "14px",
			}}
		>
			<span> {role} </span>
		</div>
	);
};

export default RoleTag;
