import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { tabsData } from "@/utils/tabs.data";
import styles from "./DynamicTabs.module.scss";

const DynamicTabs = ({ tabsData }) => {
  const [activeTab, setActiveTab] = useState(tabsData[0].id);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const tabsDataSlice = tabsData.slice(0, 5);

  return (
    <div className={styles["tabs-sec"]}>
      {/* Tab List Start */}
      <div className={styles["tabs-list"]}>
        <ul className={`${styles["nav"]} ${styles["nav-tabs"]}`}>
          {tabsDataSlice.map((tab) => (
            // eslint-disable-next-line react/jsx-key
            <li
              key={tab.id}
              className={`${styles["tab"]} ${
                activeTab === tab.id ? `${styles["active"]}` : ""
              }`}
              onClick={() => handleTabClick(tab.id)}
            >
              <span className={styles["title"]}>{tab.title}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Tab Content Start */}
      <div className={styles["tab-content"]}>
        {tabsDataSlice.map((tab) => (
          <div
            key={tab.id}
            className={`${styles["content"]} ${
              activeTab === tab.id ? `${styles["active"]}` : ""
            }`}
          >
            <div className={styles["tab-pane"]}>
              <div className="contanier">
                <div className={`row ${styles["tabcontentrow"]}`}>
                  <div className={`col-md-6 ${styles["left-col"]}`}>
                    <div className={styles["content_tabs"]}>
                      {/* <h3 className={styles["title"]}>{tab.title}</h3> */}
                      <div className={styles["content-p"]}>{tab.content}</div>
                    </div>
                  </div>
                  <div className={`col-md-6 ${styles["right-col"]}`}>
                    <div className={styles["image-col"]}>
                      <Image
                        className={styles["first-img"]}
                        src={tab.fimage}
                        alt=""
                        width={350}
                        height={400}
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DynamicTabs;
