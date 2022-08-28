import {gql} from "@apollo/client";

export const GET_TOP_TOKENS_UNISWAP = gql`
    query getTopTokensUniSwap {
        tokens(orderBy: volumeUSD, orderDirection: desc, first: 5) {
            symbol,
            volumeUSD,
            tokenDayData(orderBy: date, orderDirection: desc, first: 1) {
              priceUSD,
              feesUSD
            }
        }
    }
`