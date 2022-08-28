import { formatUnits } from '@ethersproject/units'
import { BigNumberish } from 'ethers'

const formatBigNumber = (amount: BigNumberish, decimals = 18): number =>
    parseFloat(formatUnits(amount.toString(), decimals))

export default formatBigNumber
