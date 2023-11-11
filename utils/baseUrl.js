const baseUrl =
	process.env.NODE_ENV === "production"
		? "https://indice-working-8quk.vercel.app"
		: "http://localhost:3000";

export default baseUrl;
