import {formatUnits} from 'ethers/lib/utils';

const formatEth = (amount: number, decimals = 18) => parseFloat(formatUnits(amount.toString(), decimals));

export default formatEth;