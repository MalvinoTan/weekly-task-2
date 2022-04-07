import { useSelector } from "react-redux";

/** Components */
import Content from "../../components/Content";

const Testing = () => {

    const data = useSelector((state) => state.content.contents[7]);

    return (
        <Content data={data} />
    );
};

export default Testing;