import React, { FC, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { classNames } from "@/shared/helpers/ClassNames";
import Image from "next/image";
import styles from "./styles.module.scss";

const certificates = [
  {
    logo: "/icons/meta-icon.svg",
    image: "/MetaCertificate.jpg",
    companyName: "Meta",
    courseName: "Advanced React",
    overlayColor: "#8cb8ff",
  },
  {
    logo: "/skillfactory.png",
    image: "/CertificateSF.png",
    companyName: "SF",
    courseName: "Frontend Developer PRO",
    overlayColor: "#2ffaa9",
  },
  {
    logo: "/icons/mfti-icon.svg",
    image: "",
    description: 'Успешно прослушал курс лекций "Компьютерные сети" от МФТИ',
    companyName: "МФТИ",
    courseName: "Компьютерные сети",
    // "Успешно прослушал курс компьютерные сети от преподавателя МФТИ",
    overlayColor: "#5179e8",
  },
  {
    logo: "/icons/yandex-icon.svg",
    image: "",
    description: "На данный момент повышаю квалификацию на этом курсе",
    companyName: "Yandex",
    courseName: "Frontend Middle developer",
    overlayColor: "#fff67a",
  },
];

const Certificates: FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleCertificateVisible = (index: number) => {
    if (expandedIndex !== null && expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <div className={styles.certificates}>
      <h1 className={styles.certificates__head}> Учебные сертификаты</h1>
      <div className={styles.certificates__list}>
        {certificates.map((item, index) => (
          <div
            className={styles.certificates__item}
            key={index}
            style={{
              width: expandedIndex === index ? "400px" : "70px",
              transition: "width 0.5s ease-in-out",
              backgroundColor: `${item.overlayColor}`,
            }}
            onClick={() => toggleCertificateVisible(index)}
          >
            <div
              className={styles.certificates__overlay}
              style={{
                width: expandedIndex === index ? "70px" : "0",
                transition: "width 0.5s ease-in-out, opacity 0.5s ease-out",
                opacity: expandedIndex === index ? "1" : "0",
              }}
            ></div>
            <button className={styles.certificates__button}>
              <Image
                alt=""
                src={item.logo}
                width={50}
                height={30}
                style={{
                  marginBottom: item.companyName === "Meta" ? "5px" : "0",
                  borderRadius: "12px",
                }}
              />
            </button>
            <h3 className={styles.certificates__company}>{item.companyName}</h3>
            <div className={styles.certificates__content}>
              <div
                className={
                  expandedIndex === index
                    ? styles.certificates__expanded
                    : styles.certificates__hidden
                }
                style={{
                  width: expandedIndex === index ? "300px" : "70px",
                  transition: "width 0.5s ease-in-out, opacity 0.5s ease-out",
                  opacity: expandedIndex === index ? "1" : "0",
                }}
              >
                <span className={styles.certificates__course}>
                  {item.courseName}
                </span>
                {item.image ? (
                  <>
                    <Image
                      src={item.image}
                      alt=""
                      className={styles.certificates__certificate}
                      width={expandedIndex === index ? 300 : 70}
                      style={{
                        transition: "all 0.5s ease-in-out",
                      }}
                      height={expandedIndex === index ? 200 : 100}
                    />
                    <p className={styles.certificates__description}>
                      Узнать больше
                    </p>
                  </>
                ) : (
                  <div className={styles.certificates__descr}>
                    {item.description}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
