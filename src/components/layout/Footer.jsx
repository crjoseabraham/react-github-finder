const Footer = () => {
    const footerYear = new Date().getFullYear()

    return (
        <footer className='footer p-10 bg-gray-700 text-primary-content footer-center'>
            <div>
                <p>
                    Copyright &copy; {footerYear}. Developed by
                    <a href='https://github.com/crjoseabraham'> José Abraham Castillo</a>
                </p>
            </div>
        </footer>
    )
}

export default Footer
