import logo from '../assets/react.svg'
export default function AppHeader() {
    const titlePage = 'Il mio blog'

    return (
        <header>

            <img src={logo} alt="" />
            <h1>{titlePage}</h1>

        </header>
    )
}