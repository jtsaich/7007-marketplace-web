import { MODEL_TOKEN_CONTRACT_ADDRESS } from "@/constants";
import { useState } from "react";
import { formatEther, parseEther } from "viem";
import { erc20ABI, useContractWrite } from "wagmi";

export default function MintModelToken() {
  const [ethPerToken, setEthPerToken] = useState(parseEther("0.1"));
  const [numberOfToken, setNumberOfToken] = useState("1");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // const { write, isLoading, isSuccess } = useContractWrite({
  //   address: MODEL_TOKEN_CONTRACT_ADDRESS,
  //   abi: erc20ABI,
  //   functionName: "mint",
  // });

  const totalPrice = () => {
    return formatEther(ethPerToken * BigInt(numberOfToken));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // await write()
  };

  return (
    <main className="flex min-h-screen flex-col p-48">
      <h1 className="text-2xl font-bold mb-4">Mint Your Model Token</h1>
      <h2>Model Name</h2>
      <p>
        Aliquet pulvinar sit amet id. Venenatis auctor vel turpis quis integer
        at risus. Venenatis auctor vel turpis quis integer at risus.
      </p>
      <span>Price: {formatEther(ethPerToken)} ETH per token</span>

      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Number of token to mint</span>
        </div>
        <input
          type="number"
          value={numberOfToken}
          className="input input-bordered"
          onChange={(e) => setNumberOfToken(e.target.value)}
        />
      </label>
      <input
        type="submit"
        value={`Mint for ${totalPrice()} ETH`}
        className="btn"
        disabled={isSubmitting || BigInt(numberOfToken) <= 0}
        onClick={handleSubmit}
      />
    </main>
  );
}
