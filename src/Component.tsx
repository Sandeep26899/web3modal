import {
  useWeb3ModalProvider,
  useWeb3ModalAccount,
} from "@web3modal/ethers5/react";
import { ethers } from "ethers";
import UsdcABI from "./USDC.ABI.json";

export const Component = () => {
  const { address, isConnected } = useWeb3ModalAccount();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { walletProvider }: any = useWeb3ModalProvider();
  const USDTAddress = "0xBa0492B07944485C0A2E0B0706e61b68e3f6880D";

  const getBalance = async () => {
    if (!isConnected) throw Error("User disconnected");

    const ethersProvider = new ethers.providers.Web3Provider(walletProvider);
    const signer = ethersProvider.getSigner();
    // The Contract object
    const USDTContract = new ethers.Contract(USDTAddress, UsdcABI, signer);
    const USDTBalance = await USDTContract.balanceOf(address);

    console.log(ethers.utils.formatUnits(USDTBalance, 6));
  };

  const mint = async () => {
    if (!isConnected) throw Error("User disconnected");

    const ethersProvider = new ethers.providers.Web3Provider(walletProvider);
    const signer = ethersProvider.getSigner();
    // The Contract object
    const USDTContract = new ethers.Contract(USDTAddress, UsdcABI, signer);
    const result = await USDTContract.mint(address, '10000000');
    console.log('USDTBalance', result)
  };
  return (
    <>
      <button onClick={getBalance}>Get User Balance</button>
      <button onClick={mint}>Mint</button>
    </>
  );
};
