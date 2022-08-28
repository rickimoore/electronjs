import {TvlData} from "../../hooks/useUniswapDayQuery";
import {FC} from "react";
import StatCard from "../StatCard";

export interface VolumeUsdUniSwapProps {
    data?: TvlData[]
}

const FeesUsdUniSwap:FC<VolumeUsdUniSwapProps> = ({data}) => {
    const totalFees = data ? data.map(item => Number(item.feesUSD)).reduce((a, b) => a + b) : 0;

  return (
      <StatCard bgColor="amber" delimiter="$" title="Total Fees USD" highlight={totalFees}/>
  )
}

export default FeesUsdUniSwap;