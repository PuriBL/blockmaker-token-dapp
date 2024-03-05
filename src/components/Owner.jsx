import { useContractRead } from 'wagmi'
import { blockmakerTokenABI } from '../contracts/ABIs'
import { Title } from './ui'

function OwnerSkeleton() {
  return (
    <div className="bg-white border shadow px-3.5 py-5 rounded-md grid gap-2 w-[360px] sm:w-[469px]">
      <div className="h-5 bg-gray-300 rounded animate-pulse w-20" />
      <div className="h-7 bg-gray-300 rounded animate-pulse" />
    </div>
  )
}

export default function Owner() {
  const { data, isLoading } = useContractRead({
    address: import.meta.env.VITE_TOKEN_CONTRACT_ADDRESS,
    abi: blockmakerTokenABI,
    functionName: 'owner'
  })

  if (isLoading) return <OwnerSkeleton />

  return (
    <section className="bg-white p-4 shadow w-fit rounded-lg border"> 
    <Title>Owner</Title>   
    <p className="text-xs sm:text-sm bg-gray-100 p-2 rounded-md">{data}</p>
    </section>
  )
}

