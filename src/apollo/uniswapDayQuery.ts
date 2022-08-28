import {gql} from "@apollo/client";

export const GET_UNISWAP_DAY_QUERY = gql`
    query getUniswapDayData {
        uniswapDayDatas(orderBy: date, orderDirection: desc, first: 30) {
            date,
            tvlUSD,
            txCount,
            feesUSD,
            volumeUSD,
            volumeETH,
        }
    }
`