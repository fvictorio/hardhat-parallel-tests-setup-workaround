exports.mochaHooks = {
  async beforeAll() {
    const hre = require("hardhat");
    const { TASK_TEST_SETUP_TEST_ENVIRONMENT } = require('hardhat/builtin-tasks/task-names');

    await hre.run(TASK_TEST_SETUP_TEST_ENVIRONMENT);
  },
};
