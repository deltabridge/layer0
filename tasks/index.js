
// set the Oracle address for the OmniCounter
task("omniCounterSetOracle", "set the UA (an OmniCounter contract) to use the specified oracle for the destination chain",
    require("./omniCounterSetOracle"))
    .addParam("targetNetwork", "the target network name, ie: fuji, or mumbai, etc (from hardhat.config.js)")
    .addParam("oracle", "the Oracle address for the specified targetNetwork")

// get the Oracle for sending to the destination chain
task("omniCounterGetOracle", "get the Oracle address being used by the OmniCounter",
    require("./omniCounterGetOracle"))
    .addParam("targetNetwork", "the target network name, ie: fuji, or mumbai, etc (from hardhat.config.js)")

//
task("omniCounterIncrementCounter", "increment the destination OmniCounter",
    require("./omniCounterIncrementCounter"))
    .addParam("targetNetwork", "the target network name, ie: fuji, or mumbai, etc (from hardhat.config.js)")
    .addOptionalParam("n", "number of tx", 1, types.int)

//
task("omniCounterIncrementMultiCounter", "increment the destination OmniCounter",
    require("./omniCounterIncrementMultiCounter"))
    .addParam("targetNetworks", "target network names, separated by comma (no spaces)")

//
task("omniCounterSetRemote", "setRemote(chainId, remoteAddr) to allow the local contract to receive messages from known remote contracts",
    require("./omniCounterSetRemote"))
    .addParam("targetNetwork", "the target network to let this instance receive messages from")

//
task("omniCounterPoll", "poll the counter of the OmniCounter",
    require("./omniCounterPoll"))

task("omniCounterIncrementWithParamsV1", "increment the destination OmniCounter with gas amount param",
    require("./omniCounterIncrementWithParamsV1"))
    .addParam("targetNetwork", "the target network name, ie: fuji, or mumbai, etc (from hardhat.config.js)")
    .addParam("gasAmount", "the gas amount for the destination chain")

task("omniCounterIncrementWithParamsV2", "increment the destination OmniCounter with gas amount param",
    require("./omniCounterIncrementWithParamsV2"))
    .addParam("targetNetwork", "the target network name, ie: fuji, or mumbai, etc (from hardhat.config.js)")
    .addParam("gasAmount", "the gas amount for the destination chain")
    .addParam("airDropEthQty", "the amount of eth to drop")
    .addParam("airDropAddr", "the air drop address")

// task("deleteAndRedeploy", "remove contracts from folder and redeploy", require("./deleteAndRedeploy"))
//     .addParam("e", "the environment ie: mainnet, testnet")
//     .addOptionalParam("contract", "the contract to delete and redeploy")
//     .addOptionalParam("ignore", "csv of network names to ignore", "", types.string)

task('routerAddLiquidityETH', 'addLiquidityETH to the V2 Router', require('./routerAddLiquidityETH'))
    .addParam('router', 'the router address')
    .addParam('token', 'the token address')

task('swapNativeForNative', 'swap native on one chain thru StargateComposed to native on another chainr', require('./swapNativeForNative'))
    .addParam('targetNetwork', 'the destination network name')
    .addParam('bridgeToken', 'the address of the token that will be bridged (the pools token)')
    .addParam('srcPoolId', 'the poolId to bridge')
    .addParam('dstPoolId', 'the poolId to bridge')
    .addParam('qty', 'the quanitty of native to swap in')