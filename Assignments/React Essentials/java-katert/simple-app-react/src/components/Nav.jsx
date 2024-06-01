
import { NavLink } from "react-router-dom";

export default function Nav(){
    return (
        <>
            <header class="row align-center">
                <div class="col">
                    <nav class="navbar gap-2">
                        <h2>Logo</h2>
                        <ul class="navbar-menu remove-tablet">
                            <li>
                                <NavLink 
                                    to="/"
                                    className={({isActive}) => 
                                    isActive ? "active" : undefined
                                }
                                end
                                >Spring</NavLink>
                            </li>
                            <li>
                                <NavLink to="/summer"
                                className={({isActive}) => 
                                    isActive ? "active" : undefined
                                }
                                >Summer</NavLink>
                            </li>
                            <li><NavLink to="/fall"
                                className={({isActive}) => 
                                    isActive ? "active" : undefined
                                }
                                >Fall</NavLink>
                            </li>
                            <li><NavLink 
                                to="/winter"
                                className={({isActive}) => 
                                    isActive ? "active" : undefined
                                }
                                >Winter</NavLink>
                            </li>
                            <li><button class="btn">All Seasons</button></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
}