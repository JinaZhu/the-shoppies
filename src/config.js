if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const config = {
  omdbAPIKey: process.env.REACT_APP_OMDB_API,
};

export default config;
