import Footer from '../../Footer'
import Header from '../../Header'
import PropTypes from 'prop-types'

export default function AppLayout({children}){
    return (
        <>
            <Header/>
            <main>{children}</main>
            <Footer/>
        </>          
    )
}
AppLayout.propTypes = {
    children: PropTypes.node.isRequired
}
