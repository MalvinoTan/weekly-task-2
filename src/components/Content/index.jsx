/** Styles */
import styles from "./style.module.css";

/** Bootstrap Components */
import { Button } from "react-bootstrap";

const Content = ({ data }) => {

    const { title, description, screenshots, taskLink, summaryLink, summaryFile } = data;

    const screenshotsPath = screenshots.map((screenshot) => require(`../../assets/img/${screenshot}`));

    const summaryFilePath = require(`../../assets/summary/${summaryFile}`);

    const taskLinkType = typeof taskLink;

    return (
        <div className={styles.content_container}>
            <div className={styles.content_item}>
                <h2>{title}</h2>
            </div>

            <div className={styles.content_item}>
                <h4>Deskripsi</h4>
                <p>{description}</p>
            </div>

            <div className={styles.content_item}>
                <h4>Screenshots</h4>
                {
                    screenshotsPath.map((screenshotPath, screenshotPathIdx) => {
                        return (
                            <img src={screenshotPath} alt="hasil" key={screenshotPathIdx} />
                        );
                    })
                }
            </div>

            <div className={styles.content_item}>
                <h4>Link Tugas</h4>
                {
                    taskLinkType === "object" ?
                        <>
                            <Button href={taskLink[0]} target="_blank">Link Flowchart Soal 1</Button><br /><br />
                            <Button href={taskLink[1]} target="_blank">Link Flowchart Soal 2</Button><br /><br />
                            <Button href={taskLink[2]} target="_blank">Link Repositori</Button>
                        </> :
                        <Button href={taskLink} target="_blank">Link Tugas</Button>
                }
            </div>

            <div className={styles.content_item}>
                <h4>Link File Summary (GitHub - Private)</h4>
                <Button href={summaryLink} target="_blank">Link File Summary</Button>
            </div>

            <div className={styles.content_item}>
                <h4>Download File Summary</h4>
                <Button href={summaryFilePath} download={summaryFile}>Download</Button>
            </div>
        </div>
    );
};

export default Content;