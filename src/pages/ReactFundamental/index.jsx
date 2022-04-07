import { useSelector } from "react-redux";

/** Components */
import Content from "../../components/Content";

const ReactFundamental = () => {

    const data = useSelector((state) => state.content.contents[1]);

    return (
        <Content data={data} />
    );
};

export default ReactFundamental;