/** Styles */
import styles from "./style.module.css";

const Header = ({ title }) => {
    return (
        <header className={styles.header}>
            <h1>{title}</h1>
        </header>
    );
};

export default Header;