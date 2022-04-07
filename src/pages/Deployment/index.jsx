import { useSelector } from "react-redux";

/** Components */
import Content from "../../components/Content";

const Deployment = () => {

    const data = useSelector((state) => state.content.contents[8]);

    return (
        <Content data={data} />
    );
};

export default Deployment;