import { createConfig } from 'wagmi'
import { getDefaultConfig } from 'connectkit'
import {sepolia} from 'wagmi/chains'

export const config = createConfig(
    getDefaultConfig({
        alchemyId: import.meta.env.VITE_ALCHEMY_ID,        
        walletConnectProjectId: import.meta.env.
        VITE_WALLETCONNECT_PROJECT_ID,

        appName: 'blockmaker-token-dapp',

        chains: [sepolia]

        /*appDescription:........*/
        /*appUrl: ...............*/
        /*appIcon: ..............*/    
    })        
)

export default config 

        

