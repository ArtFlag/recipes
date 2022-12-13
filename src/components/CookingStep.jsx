import React from "react";
import FanUrl from "@site/static/img/fan.png";
import ThermometerUrl from "@site/static/img/thermometer.png";
import ClockUrl from "@site/static/img/clock.png";
import styles from "./styles.module.css";

const CookingStep = ({ time, temp, preheat = true, fan = false }) => {
  return (
    <>
      <span className={styles.cooking}>
        <img src={ThermometerUrl} />
        <strong>{temp}</strong>° {preheat ? <strong>preheated</strong> : ``}{" "}
        <img src={ClockUrl}/> <strong>{time}</strong>.{fan ? <img src={FanUrl} /> : ``}
      </span>
    </>
  );
};

export default CookingStep;
