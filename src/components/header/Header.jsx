export default function Header({cartProducts}){
    return (
        <div className="header">
            <h3>Lets Practice</h3>
            <ul>
                <li>Home</li>
                <li>Contact</li>
                <li>About</li>
            </ul>
            <div>
                <div className="side-logo">
                    <span>{cartProducts.length}</span>
                </div>
            </div>
        </div>
    )
}