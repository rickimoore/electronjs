import TvlUniSwapChart from "../components/Charts/TvlUniSwapChart";
import useUniSwapDayQuery from "../hooks/useUniswapDayQuery";
import VolumeUsdUniSwap from "../components/Charts/VolumeUsdUniSwap";
import FeesUsdUniSwap from "../components/Charts/FeesUsdUniSwap";
import TotalTxCountUniSwap from "../components/Charts/TotalTxCountUniSwap";
import Typography, {TypographyType} from "../components/Typography";

const Base = () => {
    const {data} = useUniSwapDayQuery();

  return (
      <div className="w-full h-full p-8 flex flex-col items-center">
          <div className="w-full max-w-6xl pb-24">
              <div className="flex items-center space-x-4 mb-8">
                  <Typography type={TypographyType.Large}>Explore UniSwap V3</Typography>
                  <Typography type={TypographyType.Small}>~ Last 30 days</Typography>
              </div>
              <TvlUniSwapChart data={data} />
              <div className="flex flex-col md:flex-row justify-between items-center md:items-stretch space-y-8 md:space-y-0 md:space-x-8 mt-8">
                  <TotalTxCountUniSwap data={data}/>
                  <VolumeUsdUniSwap data={data}/>
                  <FeesUsdUniSwap data={data}/>
              </div>
          </div>
      </div>
  )
}

export default Base;