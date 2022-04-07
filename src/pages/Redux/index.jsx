import { useSelector } from "react-redux";

/** Components */
import Content from "../../components/Content";

const Redux = () => {

    const data = useSelector((state) => state.content.contents[6]);

    return (
        <Content data={data} />
    );
};

export default Redux;