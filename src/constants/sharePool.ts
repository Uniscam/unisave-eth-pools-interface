import { Addresses } from './tokenAddresses'

// export interface Addresses {
//     [chainId: number]: string
// }

export interface StakingTokenAddressObj extends Addresses {
    name: string
    symbol: string
    tokenSymbol: string
    isWBNB: boolean
    isLpToken: boolean
    icon: string
}

export interface SharePoolObj {
    poolAddresses: Addresses
    stakingTokenAddresses: Array<StakingTokenAddressObj>
    icon: string
    name: string
    p3d: number
    magnification: number
}

export const SharePools: Array<SharePoolObj> = [
    {
        poolAddresses: {
            1: '0x443aca7e5c087ef9ad000e7f693a63087d0247ae',
        },
        stakingTokenAddresses: [
            {
                1: '0x974af8c3d9e37673993265a244ca5ea86547a680',
                name: 'USDC/DAI LP',
                symbol: 'USDC/DAI LP',
                tokenSymbol: 'USDC/DAI LP',
                isWBNB: false,
                isLpToken: true,
                icon: 'y3d',
            },
            {
                1: '0x6643e0cb075f71261e2d14ac979234a63ed4db09',
                name: 'USDC/USDx LP',
                symbol: 'USDC/USDx LP',
                tokenSymbol: 'USDC/USDx LP',
                isWBNB: false,
                isLpToken: true,
                icon: 'y3d',
            }            
        ],
        icon: 'y3d',
        name: 'StableLP Pool',
        p3d: 0,
        magnification: 1,
    }
]
