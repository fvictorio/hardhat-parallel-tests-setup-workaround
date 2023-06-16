const { TASK_TEST_SETUP_TEST_ENVIRONMENT } = require('hardhat/builtin-tasks/task-names');

task(TASK_TEST_SETUP_TEST_ENVIRONMENT, async (_, hre) => {
  hre.foo = 123;
});

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  mocha: {
    require: ["test/setup.js"]
  }
};
