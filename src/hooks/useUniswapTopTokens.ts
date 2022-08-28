import {useQuery} from "@apollo/client";
import {GET_TOP_TOKENS_UNISWAP} from "../apollo/topTokensUniswap";

export type TokenDayData = {
    priceUSD: string,
    feesUSD: string,
}

export type Token = {
    symbol: string,
    volumeUSD: string,
    txCount: string,
    tokenDayData: TokenDayData[]
}

export interface TokenResults {
    tokens: Token[]
}

const useUniswapTopTokens = () => {
    const {data} = useQuery<TokenResults>(GET_TOP_TOKENS_UNISWAP);

    return {
        data: data ? data.tokens : []
    }
}

export default useUniswapTopTokens;