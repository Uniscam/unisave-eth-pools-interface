import React from 'react'
import { utils } from "ethers";
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import { useWallet } from 'use-wallet'

import Button from '../../components/Button'
import Page from '../../components/Page'
import PageHeader from './components/PageHeader'
import WalletProviderModal from '../../components/WalletProviderModal'

import useModal from '../../hooks/useModal'
import { useY3dPrice } from '../../hooks/useY3dPrice'

import Farm from '../Farm'
import FarmCards from './components/FarmCards'
import { STABLECOIN_DECIMALS } from '../../constants/tokenAddresses';

const Farms: React.FC = () => {
  const { path } = useRouteMatch()
  const y3dPrice = useY3dPrice()
  const { account, chainId } = useWallet()
  const readablePriceInUSDT = utils.formatUnits(y3dPrice.priceInUSD, STABLECOIN_DECIMALS[chainId] || 18).slice(0, 9)
  const [onPresentWalletProviderModal] = useModal(<WalletProviderModal />)
  return (
    <Switch>
      <Page>
        {account ? (
          <>
            <Route exact path={path}>
              <PageHeader title="Stake LP tokens to earn Y3D" subtitle={`Y3D PRICE: $${readablePriceInUSDT}`} />
              <FarmCards />
            </Route>
            <Route path={`${path}/:farmId`}>
              <Farm />
            </Route>
          </>
        ) : (
          <div
            style={{
              alignItems: 'center',
              display: 'flex',
              flex: 1,
              justifyContent: 'center',
            }}
          >
            <Button
              onClick={onPresentWalletProviderModal}
              text="🔓 Unlock Wallet"
            />
          </div>
        )}
      </Page>
    </Switch>
  )
}

export default Farms
