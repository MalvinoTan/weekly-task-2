import { useSelector } from "react-redux";

/** Components */
import Content from "../../components/Content";

const ReactForm = () => {

    const data = useSelector((state) => state.content.contents[5]);

    return (
        <Content data={data} />
    );
};

export default ReactForm;