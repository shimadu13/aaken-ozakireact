import React from 'react';
import { NavLink } from 'react-router-dom';

// styleの定義を追加
const styles = {
    link: {
        backgroundColor: '#fff',
        border: 'solid 1px',
        borderColor: '#e70000',
        borderRadius: '2px',
        color: '#e70000',
        margin: '3px',
        padding: '8px',
        textDecoration: 'none'
    },
    linkActive: {
        backgroundColor: '#e70000',
        color: '#fff'
    }
};

function Header() {
    return (
        <div>
            <NavLink style={styles.link} activeStyle={styles.linkActive} to='/Hello'>Hello</NavLink>
            <NavLink style={styles.link} activeStyle={styles.linkActive} to='/Counter'>Counter</NavLink>
            <NavLink style={styles.link} activeStyle={styles.linkActive} to='/TodoList'>TodoList</NavLink>
        </div>
    );
}

export default Header;