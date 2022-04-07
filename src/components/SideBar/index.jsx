import { Link } from "react-router-dom"
import { useSelector } from "react-redux";

/** Styles */
import styles from "./style.module.css";

const SideBar = () => {

    const menuData = useSelector((state) => state.sidebar.task);

    return (
        <>
            <div className={styles.sidebar}>
                {
                    menuData.map((data, dataIdx) => (
                        <Link to={data.path} className={styles.sidebar_item} key={dataIdx}>{data.title}</Link>
                    ))
                }
            </div>
        </>

    );
}

export default SideBar;