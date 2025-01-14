import { ethers } from "ethers";
import { UserOperationMiddlewareFn } from "../../types";

export const EOASignature =
  (signer: ethers.Signer): UserOperationMiddlewareFn =>
  async (ctx) => {
    ctx.op.signature = await signer.signMessage(
      ethers.utils.arrayify(ctx.getUserOpHash())
    );
    console.log("================================");
    console.log(await ctx.getUserOpHash());
    console.log(await signer.signMessage((ctx.getUserOpHash())));
    console.log(await signer.signMessage(ethers.utils.arrayify(ctx.getUserOpHash())));
    console.log("================================");
  };
