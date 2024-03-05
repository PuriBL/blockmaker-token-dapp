import { useAccount } from 'wagmi'
import { Owner, TokenInfo, TokenTransferForm } from '../components'
import { LoadingSpinner, Button, ErrorInfo, TextInput, Title } from '../components/ui'


export default function Home(){
    const {address, isConnecting, isDisconnected } = useAccount()

    if (isConnecting) return <div>Connecting ... </div>
    if (isDisconnected) return <div>Disconnected</div>

    return (
        <div className= 'flex flex-col gap-6 pb-20 px-10'>      
            <div>Connected Wallet: {address}</div>      
            <LoadingSpinner className="h-12 w-12" />
            <div>
                <Button>Comprar Tokens</Button>
            </div>  
            <ErrorInfo message="Error: Internal Server Error"/>  
            <div>
                <TextInput />   
            </div> 
            <Title>Este es un titulo de muestra</Title>     
            <Owner />   
            <TokenInfo />
            <TokenTransferForm />
        </div>        
    )    
}

