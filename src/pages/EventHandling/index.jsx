import { useSelector } from "react-redux";

/** Components */
import Content from "../../components/Content";

const EventHandling = () => {

    const data = useSelector((state) => state.content.contents[3]);

    return (
        <Content data={data} />
    );
};

export default EventHandling;