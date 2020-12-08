import { useCallback, useEffect, useMemo, useState } from "react";
import { provider } from 'web3-core'
import { useWallet } from "use-wallet";
import { formatUnits } from "ethers/utils";
import { getContract } from "../utils/pool";

export function usePoolApy(poolAddress: string, everyRewardTokenInMiddleToken: string, everyStakingTokenInMiddleToken: string,
    rewardTokenDecimal: string, stakingTokenDecimal: string) {

    console.log('poolAddresspoolAddress', poolAddress, everyRewardTokenInMiddleToken, everyStakingTokenInMiddleToken, rewardTokenDecimal, stakingTokenDecimal)
    const { account, ethereum } = useWallet()
    const [rewardRate, updateRewardRate] = useState("0")
    const [totalStaked, updateTotalStaked] = useState("0")

    const contract = useMemo(() => {
        return getContract(ethereum as provider, poolAddress)
    }, [ethereum, poolAddress])

    const update = useCallback(async () => {
        // rewardRate = reward for every second staking
        const rewardRate = await contract.methods.rewardRate().call();
        // totalStaked amounts for this pool
        const totalStaked = await contract.methods.totalSupply().call();

        updateRewardRate(rewardRate)
        updateTotalStaked(totalStaked)
    }, [contract])

    // let apyForDisplay = '---.--'
    // if (rewardRate !== '0' || totalStaked !== '0' ) {
    //     // 365天，24小时，每个小时3600秒
    //     const yearlyRewardInBNB = Number(rewardRate) * 365 * 24 * 3600
    //     // 年利润 / 总抵押额。均以BNB为计价单位
    //     const _apy = (yearlyRewardInBNB / Number(totalStaked))
    //     apyForDisplay = (_apy * 100).toFixed(2)
    // }

    // const memoizedApy = useMemo(() => {
    //     if (Number(rewardTokenDecimal) === 0 || Number(stakingTokenDecimal) === 0) {
    //         return '---.--'
    //     }
    //     // BNB is 18 long
    //     const formattedRewardTokenInBNB = formatUnits(everyRewardTokenInMiddleToken, 18)
    //     const formattedStakingTokenInBNB = formatUnits(everyStakingTokenInMiddleToken, 18)

    //     const formattedRewardRate = formatUnits(rewardRate, rewardTokenDecimal)
    //     const formattedtotalStaked = formatUnits(totalStaked, stakingTokenDecimal)

    //     // 365天，24小时，每个小时3600秒
    //     const yearlyRewardInBNB = Number(formattedRewardRate) * 365 * 24 * 3600 * Number(formattedRewardTokenInBNB)
    //     const totalStakedTokenInBNB = Number(formattedtotalStaked) * Number(formattedStakingTokenInBNB)
    //     const apy = (yearlyRewardInBNB / totalStakedTokenInBNB)
    //     const apyForDisplay = (apy * 100).toFixed(6)
    //     return apy === Number.POSITIVE_INFINITY ?
    //         '---.--' : apyForDisplay
    // }, [
    //     everyRewardTokenInMiddleToken, everyStakingTokenInMiddleToken,
    //     rewardTokenDecimal, stakingTokenDecimal,
    //     rewardRate, totalStaked]);
    const [apy] = useState("0")

    useEffect(() => {
        if (account && contract) {
            update()
        }
    }, [contract, account, update])

    return { update, apy, totalStake: totalStaked, rewardRate: rewardRate }
}
