import {TvlData} from "../../hooks/useUniswapDayQuery";
import {FC} from "react";
import StatCard from "../StatCard";

export interface TotalTxCountUniSwapProps {
    data?: TvlData[]
}

const TotalTxCountUniSwap:FC<TotalTxCountUniSwapProps> = ({data}) => {
    const totalFees = data ? data.map(item => Number(item.txCount)).reduce((a, b) => a + b) : 0;

    return (
        <StatCard bgColor="cyan" title="Total TXs" highlight={totalFees}/>
    )
}

export default TotalTxCountUniSwap;