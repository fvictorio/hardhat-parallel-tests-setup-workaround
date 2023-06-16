## Hardhat tests in parallel mode and TASK_TEST_SETUP_TEST_ENVIRONMENT workaround

Hardhat's `TASK_TEST_SETUP_TEST_ENVIRONMENT` subtask can be overriden to setup the environment before running the tests. But at the moment, this subtask doesn't work when the tests are run in parallel mode. This repository shows a workaround for this problem using [Mocha's Root Hooks](https://mochajs.org/#root-hook-plugins).

The way this works is that a `beforeAll` hooks is registered that explicitly runs that subtask.

You can check that this works by running both `npx hardhat test` and `npx hardhat test --parallel`.
