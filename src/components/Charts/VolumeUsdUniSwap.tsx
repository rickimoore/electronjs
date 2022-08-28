import {TvlData} from "../../hooks/useUniswapDayQuery";
import {FC} from "react";
import StatCard from "../StatCard";

export interface VolumeUsdUniSwapProps {
    data?: TvlData[]
}

const VolumeUsdUniSwap:FC<VolumeUsdUniSwapProps> = ({data}) => {
    const volumeData = data ? data.map(item => Number(item.volumeUSD)) : [];
    const average = volumeData.length ? volumeData.reduce((a, b) => a + b, 0) / volumeData.length : 0

    const sortedVolume = volumeData.length ? [...volumeData].sort((a, b) => b - a) : undefined;

  return (
      <StatCard delimiter="$" title="USD Volume Average" highlight={average}
                secondary={{text: "Highest Daily", value: sortedVolume && sortedVolume[0]}}
                tertiary={{text: "Lowest Daily", value: sortedVolume && sortedVolume[sortedVolume.length - 1]}}
      />
  )
}

export default VolumeUsdUniSwap;