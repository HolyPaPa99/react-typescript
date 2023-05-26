
export default function NavSideBar() {

    return (
        <nav>
            <ul>
                <li>
                    菜单1
                </li>
                <li>
                    菜单2
                </li>
                <li>
                    菜单3
                    <ul>
                        <li>
                            菜单3-1
                        </li>
                        <li>
                            菜单3-2
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    )
}