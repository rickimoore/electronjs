import Typography, {TypographyType} from "../components/Typography";
import Button, {ButtonFace} from "../components/Button";
import useUniswapTopTokens from "../hooks/useUniswapTopTokens";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {Pagination} from "swiper";
import Abbreviate from "../utilities/abbreviate";
import {formatLocalCurrency} from "../utilities/formatLocalCurrency";
import useContainerSize from "../hooks/useContainerSize";

const Products = () => {
    const {data} = useUniswapTopTokens();

    const { ref, width } = useContainerSize();

    return (
        <div ref={ref} className="w-full h-full flex justify-center">
            <div className="w-full max-w-6xl">
                <div className="w-full p-8">
                    <Typography className="mb-8" type={TypographyType.Large}>Products</Typography>
                    <div className="w-full rounded-lg bg-highlight mb-10 p-8">
                        <div className="mb-28">
                            <Typography color="text-white" isBold type={TypographyType.XLarge}>Provide Liquidity <br/> Earn Rewards</Typography>
                            <Typography color="text-white" type={TypographyType.Small}>Choose your pair and start earning rewards now!</Typography>
                        </div>
                        <Button target="_blank" href="https://app.uniswap.org/#/pool?chain=mainnet" face={ButtonFace.SECONDARY}>Visit UniSwap</Button>
                    </div>
                    <div className="w-full pb-24">
                        <Typography className="mb-8" type={TypographyType.Small}>Top Tokens On UniSwap</Typography>
                        <Swiper
                            slidesPerView={width > 624 ? 3 : 1}
                            spaceBetween={30}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Pagination]}
                            className="mySwiper"
                        >
                            {data.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className="w-full h-80 bg-white rounded-lg p-8">
                                        <div className="h-40 w-full bg-lightGrey rounded-lg mb-4 flex items-center justify-center">
                                            <Typography isBold>{item.symbol}</Typography>
                                        </div>
                                        <Typography color="text-slate-400" type={TypographyType.Small}>Total Volume: ${Abbreviate(Number(item.volumeUSD))}</Typography>
                                        <Typography color="text-slate-400" type={TypographyType.Small}>Daily Fee: ~ ${Abbreviate(Number(item.tokenDayData[0].feesUSD))}</Typography>
                                        <Typography color="text-slate-400" type={TypographyType.Small}>Price: ${formatLocalCurrency(item.tokenDayData[0].priceUSD)}</Typography>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Products;