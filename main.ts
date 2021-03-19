import { InvokeBuy } from "./invoke";
import { TokenTypes } from "./tokenModels";
import { ToWei } from "./utils";


async function main() {

    let service= new InvokeBuy()
    async function maxTrade(){
      let inputAmounts=[];
      for(let i=1;i<5;i++){
        inputAmounts.push(Number(ToWei(i*10+"","DAI")));
      }

     return await service.maxTrade({toToken: TokenTypes.DAI, fromToken:TokenTypes.WETH,inputAmounts});
     
    }
    maxTrade();   
}
// npx ts-node main
main()
  .then()
  .catch(e => console.error(e));