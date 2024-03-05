import { ConnectKitProvider } from 'connectkit'
import { WagmiConfig } from 'wagmi'
import { AppLayout } from './components/ui/layouts'
import { config } from './config/wagmi'
import { Home } from './pages'
import { Toaster } from 'react-host-toast'

function App() {
  return (
    <WagmiConfig config={config}> 
      <Toaster position="botton-right"/>   
      <ConnectKitProvider mode="light">
        <AppLayout>
          <Home />
        </AppLayout>
      </ConnectKitProvider>
    </WagmiConfig>
  )
}

export default App









