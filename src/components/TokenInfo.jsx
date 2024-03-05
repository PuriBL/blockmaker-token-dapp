import { useToken } from 'wagmi'
import { Title, ErrorInfo } from './ui'
import PropTypes from 'prop-types'

function TokenInfoItem({ label, value }) {
  return (
    <li className="bg-gray-100 p-2 rounded-lg flex items-center gap-1">
      <span className="font-semibold text-gray-700 capitalize">{label}:</span>
      <p className="text-xs sm:text-sm">{value}</p>
    </li>
  )
}

TokenInfoItem.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
}

export default function TokenInfo() {
  const { data, isError, isLoading } = useToken({
    address: import.meta.env.VITE_TOKEN_CONTRACT_ADDRESS
  })

  if (isLoading) return <p>Cargando...</p>

  /*const { totalSupply, ...restData } = data - esto daba error lo quito*/
  
  return (
    <section className="grid gap-2 bg-white p-4 shadow w-fit rounded-lg border text-sm">
      <Title>Token Info</Title>

      {isError ? (
        <ErrorInfo message="Error cargando la información del token. Prueba de nuevo." />
      ) : (
        <ul className="grid gap-3">
         
          {/* Ejemplo Normal ver ejemplo pro de su Github */}
          <TokenInfoItem label="Name" value={data?.name} />
          <TokenInfoItem label="Symbol" value={data?.symbol} />
          <TokenInfoItem label="Address" value={data?.address} />
          <TokenInfoItem label="Decimals" value={data?.decimals} />
        </ul>
      )}
    </section>
  )
}

