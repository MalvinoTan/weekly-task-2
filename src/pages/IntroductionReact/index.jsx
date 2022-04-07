import { useSelector } from "react-redux";

/** Components */
import Content from "../../components/Content";

const IntroductionReact = () => {

    const data = useSelector((state) => state.content.contents[0]);

    return (
        <Content data={data} />
    );
};

export default IntroductionReact;