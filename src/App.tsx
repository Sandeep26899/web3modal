import viteLogo from "/vite.svg";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { createWeb3Modal, defaultConfig } from "@web3modal/ethers5/react";
import { Component } from "./Component";

function App() {
  const projectId = "0a14338d9a274f994a8f3e2919f04250";

  const mumbai = {
    chainId: 80001,
    name: "Polygon Matic Testnet",
    currency: "MATIC",
    explorerUrl: "https://mumbai.polygonscan.com/",
    rpcUrl: "https://rpc-mumbai.maticvigil.com",
  };

  const metadata = {
    name: "My Website",
    description: "My Website description",
    url: "https://mywebsite.com",
    icons: ["https://avatars.mywebsite.com/"],
  };

  createWeb3Modal({
    ethersConfig: defaultConfig({ metadata }),
    chains: [mumbai],
    projectId,
    enableAnalytics: true, // Optional - defaults to your Cloud configuration
  });

  return (
    <div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Web3Modal Integration</h1>
      <h3>Vite + React</h3>
      <div className="card">
        <w3m-button />
        <Component />
      </div>
    </div>
  );
}

export default App;
