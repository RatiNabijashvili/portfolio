import React from 'react'
import Styles from './myWork.module.css'
import Image1 from './img/bram-naus-N1gUD_dCvJE-unsplash.webp'
import Image2 from './img/christopher-gower-m_HRfLhgABo-unsplash.webp'
import Image3 from './img/clement-helardot-95YRwf6CNw8-unsplash.webp'
import Image4 from './img/sincerely-media-OOHsoUNRxt8-unsplash.webp'
import Image5 from './img/xps-2L-0vnCnzcU-unsplash.webp'
import Image6 from './img/xps-4TBSG2Oqu0Q-unsplash.webp'
import Image7 from './img/xps-yNvVnPcurD8-unsplash_1.webp'

const myWork = () => {
  return (
    <div className={Styles.div}>
      <img src={Image1} className={Styles.img} alt='image1' />
      <img src={Image2} className={Styles.img} alt='image2' />
      <img src={Image3} className={Styles.img} alt='image3' />
      <img src={Image4} className={Styles.img} alt='image4' />
      <img src={Image5} className={Styles.img} alt='image5' />
      <img src={Image6} className={Styles.img} alt='image6' />
      <img src={Image7} className={Styles.img} alt='image7' />
    </div>
  )
}

export default myWork
