export interface Addresses {
    [chainId: number]: string
}export interface Decimals {
    [chainId: number]: number
}

export const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000'
export const sushi = '0x0e2298e3b3390e3b945a5456fbf59ecc3f55da16'
export const sushiv2 = '0xaba8cac6866b83ae4eec97dd07ed254282f6ad8a'
export const sushiAddress = '0x43a7903E3a839a67192151eE300e11198985E54b'
export const masterChefAddress = '0x245A074cA9814fB46A21562bC70fAB92F8A3F779'
export const NFT_CLAIMER_ADDRESS = '0x49952ba7Da860f01236c071EdE58060b0F3b3fa7'
export const STABLECOIN_ADDRESS: Addresses = {
    1: '0xdac17f958d2ee523a2206206994597c13d831ec7',
    56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    97: '0xeD24FC36d5Ee211Ea25A80239Fb8C4Cfd80f12Ee'
}
export const STABLECOIN_DECIMALS: Decimals = {
    1: 6,
    56: 18,
    97: 18
}
export const WBNB_ADDRESS: Addresses = {
    56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
}
export const Y3D_ADDRESS: Addresses = {
    1: '0xc7fd9ae2cf8542d71186877e21107e1f3a0b55ef',
    56: '0x12e2fcfa079fc23ae82ab82707b402410321103f',
    97: '0xcfe6b7715b4164583ac63d8f21b5c71357a1e8ec'
}
export const ROUTER02_ADDRESS: Addresses = {
    56: '0x039b5818e51dfec86c1d56a4668787af0ed1c068'
}