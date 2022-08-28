import Typography, {TypographyType} from "../Typography";
import {Line} from "react-chartjs-2";
import {FC, useMemo} from "react";
import {
    CategoryScale,
    Chart as ChartJS,
    Filler,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
} from 'chart.js';
import {TvlData} from "../../hooks/useUniswapDayQuery";
import moment from "moment";
import getPercentageDiff from "../../utilities/getPercentageDiff";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
);

export interface TvlUniSwapChart {
    data?: TvlData[]
}

const TvlUniSwapChart:FC<TvlUniSwapChart> = ({data}) => {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            filler: {}
        },
        scales: {
            x: {
                display: false
            }
        }
    };

    const percentageChange = useMemo(() => {
        if(!data) return 0;

        const oldest = data[0].tvlUSD;
        const newest = data[data.length - 1].tvlUSD;

        return getPercentageDiff(newest, oldest);

    }, [data]);

    const isUpPercentage = percentageChange > 0;

    const chartData = useMemo(() => {
        return {
            labels: data ? data.map(({date}) => moment((date * 1000)).format('DD-MM-YY')) : [],
            datasets: [
                {
                    label: 'TVL',
                    data: data ? data.map(day => day.tvlUSD.toFixed(2)) : [],
                    borderColor: 'rgb(255, 99, 132)',
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                    radius: 2.5,
                    fill: true,
                    lineTension: .3
                }
            ],
        }
    }, [data]);

  return (
      <div className="w-full bg-white p-8 rounded-lg">
          <div className="flex justify-between space-x-4 mb-8">
              <Typography type={TypographyType.Small}>
                  TVL (USD)
              </Typography>
              {
                  Boolean(percentageChange) && (
                      <Typography isBold color={isUpPercentage ? 'text-emerald-400' : 'text-red-400'} type={TypographyType.Small}>
                          <i className={`bi ${isUpPercentage ? 'bi-arrow-up' : 'bi-arrow-down'}`}/>  {`${percentageChange.toFixed(2)} %`}
                      </Typography>
                  )
              }
          </div>
          <div className="w-full max-h-96">
              <Line height={100} options={options} data={chartData} />
          </div>
      </div>
  )
}

export default TvlUniSwapChart;
