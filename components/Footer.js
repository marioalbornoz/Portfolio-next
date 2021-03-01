

export const Footer = () => {
    return (
        <footer className="bg-dark text-light text-center">
            <div className="container p-4">
                <h1>&copy; Mario Albornoz Portfolio</h1>
                <p>2020 - {new Date().getFullYear()}</p>
                <p>All rights reserved.</p>
            </div>
        </footer>
    )
}
