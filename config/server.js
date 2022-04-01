module.exports = ({ env }) => {
  return {
    host: env("HOST", "0.0.0.0"),
    port: env.int("PORT", 2000),
    app: {
      keys: env.array("APP_KEYS"),
    },
  };
};
