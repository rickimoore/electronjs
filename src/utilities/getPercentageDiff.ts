const getPercentageDiff = (a = 0, b = 0): number => {
    return ((a - b) / b) * 100
}

export default getPercentageDiff;