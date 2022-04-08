import { useSelector } from "react-redux";

/** Components */
import Content from "../../components/Content";

const IntroductionAlgorithm = () => {

    const data = useSelector((state) => state.content.contents[9]);

    return (
        <Content data={data} />
    );
};

export default IntroductionAlgorithm;