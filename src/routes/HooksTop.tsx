import React from "react";
import { Outlet, Link } from "react-router-dom";

const HooksTop = () => {
    return(
        <>
            <div>hooks top</div>
            <nav>
                <ul>
                    <li><Link to={'callback'}>useCallback</Link></li>
                    <li><Link to={'memo'}>useMemo</Link></li>
                    <li>useEffect</li>
                    <li>useRef</li>
                    <li><Link to={'layout_effect'}>useLayoutEffect</Link></li>
                    <li>use...</li>
                </ul>
            </nav>
            <Outlet />

        </>
    )
}

export default HooksTop