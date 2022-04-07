import { useSelector } from "react-redux";

/** Components */
import Content from "../../components/Content";

const ReactRouting = () => {

    const data = useSelector((state) => state.content.contents[2]);

    return (
        <Content data={data} />
    );
};

export default ReactRouting;