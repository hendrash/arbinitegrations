
export enum TokenTypes {
    WETH="WETH", DAI="DAI", USDC="USDC", USDT="USDT", LINK="LINK", AAVE="AAVE", UNI="UNI", SAI="SAI", MKR="MKR"
}
export enum ExchangeTypes {
    ONE_SPLIT_ADDRESS="ONE_SPLIT_ADDRESS",
    ZRX_EXCHANGE_ADDRESS="ZRX_EXCHANGE_ADDRESS",
    UNISWAP_FACTORY_ADDRESS="UNISWAP_FACTORY_ADDRESS",
    UNISWAP_ROUTER_ADDRESS="UNISWAP_ROUTER_ADDRESS",
    ARBITRAGE_ADDRESS="ARBITRAGE_ADDRESS"
}






export type TokenSymbols={
    toToken: TokenTypes,
    fromToken: TokenTypes,
    inputAmount?: number;
    inputAmounts?: number[];
}