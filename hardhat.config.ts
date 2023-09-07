import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config";

const PRIVATE_KEY: string = process.env.PRIVATE_KEY as string;
const config: HardhatUserConfig = {
  solidity: "0.8.19",
  defaultNetwork: "local",
  networks: {
    hardhat: {},
    local: {
      chainId: 31415926,
      url: "http://127.0.0.1:1234/rpc/v1",
      accounts: [PRIVATE_KEY],
    },
    calibration: {
      chainId: 314159,
      url: "https://api.calibration.node.glif.io/rpc/v1",
      accounts: [PRIVATE_KEY],
    },
    filecoin: {
      chainId: 314,
      url: "https://api.node.glif.io",
      accounts: [PRIVATE_KEY],
    },
  },
};

export default config;
