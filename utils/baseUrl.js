const baseUrl =
	process.env.NODE_ENV === "production"
		? "https://indice-dynamic-js-test.onrender.com"
		: "http://localhost:3000";

export default baseUrl;
