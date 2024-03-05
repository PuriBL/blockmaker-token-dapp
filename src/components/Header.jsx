import { ConnectKitButton } from 'connectkit'

export default function Header() {
    return (
        <header className="border-b shadow py-2 px-3 flex justify-between items-center">
            {/*logo para versión desktop aclaración*/}
            <img src="/logo-blockmaker grande.png" alt="blockmaker-desktop-logo"
            className="hidden sm:block" width={300} />  
            <img src="/Blockmaker logo.png" alt="blockmaker-mobile-logo" className="sm:hidden" width={47}/>
            {/*logo para versión mobile aclaración*/}                
            <ConnectKitButton showBalance/>

        </header>
    )
}

