import { Footer, Header } from "../components";
import PropTypes from 'prop-types'

export function PublicLayout({ children }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

PublicLayout.propTypes = {
    children: PropTypes.node.isRequired,
}