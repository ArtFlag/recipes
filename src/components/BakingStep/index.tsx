import React from 'react'
import FanUrl from '@site/static/img/fan.png'
import ThermometerUrl from '@site/static/img/thermometer.png'
import ClockUrl from '@site/static/img/clock.png'
import styles from './styles.module.css'

export default function BakingStep({
  time,
  temp,
  preheat = true,
  fan = false,
}): JSX.Element {
  return (
    <>
      <span className={styles.baking}>
        <img src={ThermometerUrl} />
        <strong>{temp}</strong>° {fan ? <img src={FanUrl} /> : ``}{' '}
        {preheat ? <strong>preheated</strong> : ``} <img src={ClockUrl} />{' '}
        <strong>{time}</strong>.
      </span>
    </>
  )
}
