import axios from "axios";
import { OptimalRatesWithPartnerFeesSell } from "paraswap";
import { TokenSymbols } from "./tokenModels";
import { ToWei } from "./utils";


export class Api{

    private readonly URL_BASE = 'https://apiv2.paraswap.io/v2';
    async getRates(tokenSymbol: TokenSymbols) {
        
        const { data } = await axios.get(`${this.URL_BASE}/prices/?from=${tokenSymbol.fromToken}&to=${tokenSymbol.toToken}&amount=${ToWei(tokenSymbol.inputAmount+"",tokenSymbol.toToken)}&side=SELL&version=3.0.0&max_impact=100`);

        return data.priceRoute as OptimalRatesWithPartnerFeesSell;
    }


}
