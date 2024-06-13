module.exports = {
  ci: {
    assert: {
      preset: "lighthouse:recommended",
    },
    collect: {
      staticDistDir: "./.output/public",
      url: ["http://localhost/about", "http://localhost/contact", "http://localhost/exercises"],
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
