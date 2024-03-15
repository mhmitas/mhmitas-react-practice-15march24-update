export default function Header({cartCount}){
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
                    <span>{cartCount}</span>
                </div>
            </div>
        </div>
    )
}