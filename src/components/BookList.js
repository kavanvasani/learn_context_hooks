import React from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

const BookList = () => {
    // const contexType = useContext(ThemeContext);
    // const {isLightTheme, light, dark} = contexType;
    // const theme = isLightTheme ? light : dark;
  return (
        <ThemeContext.Consumer>{(themeContext) => {
            const {isLightTheme, light, dark} = themeContext;
            const theme = isLightTheme ? light : dark;
            return (
               <div className='book-list' style={{color:theme.syntax, background: theme.bg}}>
                   <ul>
                       <li style={{background: theme.ui}}>Atomic Habits</li>
                       <li style={{background: theme.ui}}>Duma Key</li>
                       <li style={{background: theme.ui}}>Power of Habits</li>
                   </ul>
               </div>
            );
        }}</ThemeContext.Consumer>
    
    
  );
}

export default BookList