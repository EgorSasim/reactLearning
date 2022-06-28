ReactDOM.createRoot(document.querySelector('.root'))
.render(
    <div>
        <Page />
    </div>
)


function NavBar() {
    return (
        <div className="navBar">
            <img src="./src/react_logo.png" alt="react logo" />
            <ul>            
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}

function Header() {
    return (
        <div>
            <NavBar />
            <h1>Reasons to learn React</h1>
        </div>
        
    )
}

function Content() {
    return (
        <ul>
        <li>Reason 1</li>
        <li>Reason 2</li>
        <li>Reason 3</li>
        <li>Reason 4</li>
    </ul>
    )
}

function Footer() {
    return (
        <footer><small>Some small text</small></footer>
    )
}

function Page() {
    return (
        <div>
            <Header />
            <Content />
            <Footer />
        </div>
    )
}