import {apple, bill, google} from '../assets';
import styles, {layout} from '../style';



const Billing = () => (
    <section id="product" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt="billing" 
        className='w-[100%] h-[100%] relative z-[5]'/>
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Easily control your <br  className='sm:block hidden'/>
        billing & invoicing</h2>
        <p className={`${styles.paragraph} max-w-[470px]`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quas maiores ipsam </p>
        <div className='flex align-center flex-wrap flex-row sm:mt10 mt-6'>
          <img  src={apple} alt="apple-store" className='w-[127px] h-[4p2px] object-contain cursor-pointer mr-5'  />
          <img  src={google} alt="google-play" className='w-[127px] h-[4p2px] object-contain cursor-pointer mr-5'  />
        </div>
      </div>
    </section>
  )


export default Billing