import React from "react";

const Form = (props) => {
	return (
		<form onSubmit={props.getWeather} action="">
			<input type="text" placeholder="City..." name="city" />
			<input type="text" placeholder="Country..." name="country" />
			<button>submit</button>
		</form>
	);
};

export default Form;
