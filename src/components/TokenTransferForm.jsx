import { blockmakerTokenABI } from '../contracts/ABIs'
import { Button, TextInput,Title } from "./ui"
import { useContractWrite, usePrepareContractWrite, useWaitForTransaction } from 'wagmi'
import { useState, useEffect } from 'react'
import { parseEther } from 'viem/utils'
import { toast } from 'react-hot-toast'

export default function TokenTransferForm() {
    const[to, setTo] = useState('')
    const[amount, setAmount] = useState('')
    

    /*aquí ya interactuamos con la blockchain*/
    const { config, error } = usePrepareContractWrite({
        address: import.meta.env.VITE_TOKEN_CONTRACT_ADDRESS,
        abi: blockmakerTokenABI,
        functionName: 'transfer',
        enabled: to && amount > 0,
        args: [to, parseEther(amount)]
      })

    const { data, write } = useContractWrite (config)

    const { 
        isLoading: isTransactionLoading,
        isSuccess: isTransactionSuccess,
        isError: isTransactionError,         
     } = useWaitForTransaction ({
        hash: data?.hash
    })
    
    const handleToInputChange = (event) => {
        /*console.log('to', event.target.value)*/
        setTo(event.target.value)
    }

    const handleAmountInputChange = (event) => {
        setAmount(event.target.value)
    }

    useEffect(() => {
        if (isTransactionSuccess) {
            toast.success('La transaccion se ha completado con exito')
            setTo('')
            setAmount('')
        }   
        if (isTransactionError) {
            toast.error('La transaccion ha fallado')
        }     
    }, [isTransactionSuccess, isTransactionError])   

    
    return (
        <section className="bg-white p-4 border shadow rounded-lg text-sm space-y-2">
            <Title>Token Transfer Form</Title>
            <form className="grip gap-2">    
                <TextInput label="To" placeholder="to" onChange={handleToInputChange} value={to}/>
                <TextInput label="amount" placeholder="amount" type='number' onChange={handleAmountInputChange}
                value={amount}/>

            {to && amount > 0 && <p>{error?.message}</p>}

            <TextInput label="amount" placeholder="amount" type="number" onChange={handleAmountInputChange}/>            

            <Button 
            onClick={() => write?.()} 
            disabled={!to || !amount || isTransactionLoading}
            isLoading={isTransactionLoading}
            >
            
            {isTransactionLoading ? 'Transfiriendo BM Tokens': 'Transferir BM Tokens'}
            </Button>
         </form>
        </section>
    )
}
