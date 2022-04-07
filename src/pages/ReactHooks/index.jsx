import { useSelector } from "react-redux";

/** Components */
import Content from "../../components/Content";

const ReactHooks = () => {

    const data = useSelector((state) => state.content.contents[4]);

    return (
        <Content data={data} />
    );
};

export default ReactHooks;