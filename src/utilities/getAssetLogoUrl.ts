export const getAssetLogoUrl = (symbol?: string) => {
    if (!symbol) return

    const asset = symbol.startsWith('v') ? symbol.slice(1) : symbol

    return `https://cryptologos.cc/logos/usd-coin-${symbol.toLowerCase()}-logo.png`
}
