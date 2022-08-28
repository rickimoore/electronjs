import {useQuery} from "@apollo/client";
import {GET_UNISWAP_DAY_QUERY} from "../apollo/uniswapDayQuery";

export type TvlData = {
    tvlUSD: number,
    date: number,
    txCount: string,
    feesUSD: string,
    volumeUSD: string,
    volumeETH: string,
}

export interface TxGasQueryResults {
    uniswapDayDatas: TvlData[]
}

const useUniSwapDayQuery = () => {
  const { data } = useQuery<TxGasQueryResults>(GET_UNISWAP_DAY_QUERY);

  return {
      data: data && [...data.uniswapDayDatas]
          .sort((a,b) => a.date - b.date)
          .map(data => ({...data, tvlUSD: Number(data.tvlUSD)}))
  }
}

export default useUniSwapDayQuery;