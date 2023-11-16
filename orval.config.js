module.exports = {
  // Ignore error
  main: {
    input: "./shared/api/schema.yaml",
    output: {
      target: "./shared/api/generated.ts",
      prettier: true,
      override: {
        mutator: {
          path: "./shared/api/api-instance.ts",
          name: "createInstance",
        },
      },
    },
  },
};
