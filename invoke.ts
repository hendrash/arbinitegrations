import { Api } from "./api";
import { BuyService } from "./service";
import { TokenSymbols } from "./tokenModels";

export class InvokeBuy{

    api= new Api(); 
    service= new BuyService();


    async maxTrade(tokenSymbol: TokenSymbols){
    return await Promise.all(tokenSymbol.inputAmounts!.map(async l=> {
      tokenSymbol.inputAmount=l;
      return await this.service.maxTrade(tokenSymbol)})
    ).then(t=>{
      let newList=t.filter(t=>t)

      console.log("Most profitable"+newList[newList.length-1])})
    }
}
