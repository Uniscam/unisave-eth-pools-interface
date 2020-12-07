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
    // {
    //     poolAddresses: {
    //         1: '0xc4d47d35f109dae8e33d5daa334a6b9f512ea2a1',
    //     },
    //     stakingTokenAddresses: [
    //         {
    //             1: '0x974af8c3d9e37673993265a244ca5ea86547a680',
    //             name: 'USDC/DAI LP',
    //             symbol: 'USDC/DAI LP',
    //             tokenSymbol: 'USDC/DAI LP',
    //             isWBNB: false,
    //             isLpToken: true,
    //             icon: 'y3d',
    //         }
    //     ],
    //     icon: 'y3d',
    //     name: 'StableLP Pool',
    //     p3d: 0,
    //     magnification: 1,
    // }
]
