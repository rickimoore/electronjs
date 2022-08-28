const abbreviate = (value: number, options?: {local: string, maxFractions: number}) => {
    const { local, maxFractions } = options || {local: 'en-US', maxFractions: 1};
    return Intl.NumberFormat(local, {
        notation: "compact",
        maximumFractionDigits: maxFractions
    }).format(value)
};

export default abbreviate;
