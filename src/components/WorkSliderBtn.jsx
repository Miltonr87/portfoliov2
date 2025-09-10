'use client'
import { useSwiper } from "swiper/react"
import { PiCaretLeft,PiCaretRight } from "react-icons/pi";
const WorkSliderBtn = ({containerStyle,btnStyle,iconStyle}) => {
    const swiper = useSwiper();
  return (
    <div className={containerStyle}>
      <button className={btnStyle} onClick={()=> swiper.slidePrev()}>
        <PiCaretLeft className={iconStyle}/>
      </button>
      <button className={btnStyle} onClick={()=> swiper.slideNext()}>
        <PiCaretRight className={iconStyle}/>
      </button>
      
    </div>
  )
}

export default WorkSliderBtn
