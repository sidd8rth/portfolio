import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
    featuredPortfolio,
    desktopPortfolio,
    pythonPortfolio,
    webPortfolio,
} from "../../data";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

export default function Portfolio() {
    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([]);
    const list = [
        {
            id: "featured",
            title: "Featured",
        },
        {
            id: "desktop",
            title: "Desktop App",
        },
        {
            id: "python",
            title: "Python Projects",
        },
        {
            id: "web",
            title: "Web Dev",
        },
    ];

    useEffect(() => {
        switch (selected) {
            case "featured":
                setData(featuredPortfolio);
                break;
            case "desktop":
                setData(desktopPortfolio);
                break;
            case "python":
                setData(pythonPortfolio);
                break;
            case "web":
                setData(webPortfolio);
                break;
            default:
                setData(featuredPortfolio);
        }
    }, [selected]);

    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map((item) => (
                    <PortfolioList
                        title={item.title}
                        active={selected === item.id}
                        setSelected={setSelected}
                        id={item.id}
                    />
                ))}
            </ul>
            <div className="container">
                {data.map((d) => (
                    <div className="item">
                        <img
                            src={d.img}
                            alt=""
                        />
                        {/*<a href={d.link}></a>*/}
                        <h3>{d.title}</h3>
                    </div>
                ))}
            </div>
            <div>
                <a href='#contact'>
                    <KeyboardArrowDownIcon className='arrow'/>
                </a>
            </div>
        </div>

    );
}