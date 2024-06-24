import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { AuthContext } from '../contexts/AuthContext';

// const NavBar = () => {
//     return (
//         <AuthContext.Consumer>{(authContext) => (
//             <ThemeContext.Consumer>{(themeContext) => {
//                 const {isAuthenticated, toggleAuth} = authContext;
//                 const {isLightTheme, light, dark} = themeContext;
//                 const theme = isLightTheme ? light : dark;
//                 return (
//                     <nav style={{background: theme.ui, color: theme.syntax}}>
//                 <h1> Context </h1>
//                 <button onClick={toggleAuth}>
//                     {isAuthenticated ? 'Log out?' : 'Log in?'}
//                 </button>
//                 <ul>
//                     <li>Home</li>
//                     <li>About</li>
//                     <li>Contact</li>
//                 </ul>
//             </nav>
//                 );
//             }}</ThemeContext.Consumer>
//         )}
//         </AuthContext.Consumer>   
//   );
// }

// functional without provider and consumer is much easier
const NavBar = () => {
    const {isLightTheme, light, dark} = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    const {isAuthenticated, toggleAuth} = useContext(AuthContext);
    return (
        <nav style={{background: theme.ui, color: theme.syntax}}>
                <h1> Context </h1>
                <button onClick={toggleAuth}>
                     {isAuthenticated ? 'Log out?' : 'Log in?'}
                 </button>
                 <ul>
                     <li>Home</li>
                     <li>About</li>
                    <li>Contact</li>
              </ul>
            </nav>
    )
}

export default NavBar