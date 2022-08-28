import formatBigNumber from "./formatBigNumber";

export type formatLocalCurrencyOptions = {
    locale?: string
    isBigNumber?: boolean
    isStrict?: boolean
    specificity?: number
    units?: number
}

export const formatLocalCurrency = (
    amount: string | number | undefined = 0,
    options?: formatLocalCurrencyOptions,
): string => {
    const {
        isStrict,
        specificity = 2,
        locale = 'en-US',
        isBigNumber,
        units = 6,
    } = options || {}

    const amountAsNumber =
        typeof amount === 'string' ? parseFloat(amount) : amount

    const decimals = isStrict && amountAsNumber % 1 === 0 ? 0 : specificity

    return (
        isBigNumber ? formatBigNumber(amountAsNumber, units) : amountAsNumber
    ).toLocaleString(locale, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
    })
}
