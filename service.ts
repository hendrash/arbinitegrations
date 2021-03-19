

import { Api } from "./api";
import { TokenSymbols } from "./tokenModels";
import { FromWei } from "./utils";


export class BuyService{
    private api = new Api();
    maximum: any;
    async maxTrade(tokenSymbol: TokenSymbols){
        let resp=await this.api.getRates(tokenSymbol)
        let desAmt=FromWei(resp.destAmount,tokenSymbol.fromToken)
        let token2:TokenSymbols=({toToken:tokenSymbol.fromToken, fromToken: tokenSymbol.toToken});
        token2.inputAmount=Number(desAmt);
        let final=Number(FromWei((await this.api.getRates(token2)).destAmount,tokenSymbol.toToken))
        console.log(final)
        if(!this.maximum||tokenSymbol.inputAmount &&final>tokenSymbol.inputAmount){
            this.maximum=resp;
           console.log(final) 
            return final;
        }       

    }
}