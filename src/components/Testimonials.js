import React from 'react';
/*import '../Testimonials.css';*/
/*import '../App.css';*/
import { ImQuotesLeft } from 'react-icons/im';
import { FaStar } from 'react-icons/fa';
import { FaStarHalfStroke } from 'react-icons/fa6';
import { FaRegStar } from 'react-icons/fa';
import Testimonial1 from '../images/Testimonial1.jpg';
import Testimonial2 from '../images/Testimonial2.jpg';
import Testimonial3 from '../images/Testimonial3.jpg';
 

function Testimonial() {
  return (
    <section className='testimonials'>
      <div className='title'>
        <h1>TESTIMONIALS</h1>
      </div>
      <div className='row'>
        <div className='col'><img src={Testimonial1} alt=''/>
              <div>
          <p><ImQuotesLeft color="#FFFFFF" size="1rem"/> The ambiance of Little Lemon adds another layer to the dining experience. The decor is tasteful, creating an intimate and cozy setting that enhances the enjoyment of the meal.</p>
          <h4>John Kelly</h4>
          <FaStar color="#F4CE14" size="1rem"/>
          <FaStar color="#F4CE14" size="1rem"/>
          <FaStar color="#F4CE14" size="1rem"/>
          <FaStar color="#F4CE14" size="1rem"/>
          <FaStar color="#F4CE14" size="1rem"/>
              </div> 
        </div>
        <div className='col'><img src={Testimonial2} alt=''/>
              <div>
          <p><ImQuotesLeft color="#FFFFFF" size="1rem"/> The service was as impressive as the food. The staff demonstrated attentiveness without being intrusive, providing recommendations and ensuring that every aspect of my dining experience was seamless.</p>
          <h4>Ellie Anderson</h4>
          <FaStar color="#F4CE14" size="1rem"/>
          <FaStar color="#F4CE14" size="1rem"/>
          <FaStar color="#F4CE14" size="1rem"/>
          <FaStar color="#F4CE14" size="1rem"/>
          <FaRegStar color="#F4CE14" size="1rem" />
              </div>
        </div>
        <div className='col'><img src={Testimonial3} alt=''/>
              <div>
          <p><ImQuotesLeft color="#FFFFFF" size="1rem"/> The menu at Little Lemon is a gastronomic delight, offering a diverse range of dishes that cater to various palates. I opted for the chef's special, and it was a symphony of flavors that danced on my taste buds.</p>
          <h4>Juliet Holmes</h4>
          <FaStar color="#F4CE14" size="1rem"/>
          <FaStar color="#F4CE14" size="1rem"/>
          <FaStar color="#F4CE14" size="1rem"/>
          <FaStar color="#F4CE14" size="1rem"/>
          <FaStarHalfStroke color="#F4CE14" size="1rem"/>
              </div>
        </div>

      </div>
    </section>
    
  )
}
export default Testimonial;





/*function App() {
  return (
    <div className='wrapper'>
      <div className='box'>
        <ImQuotesLeft color="#495E57" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consectetur sem eget lectus mollis, eget lobortis turpis pulvinar. Etiam vitae mollis augue.</p>
        <div className='content'>
          <div className='info'>
            <div className='name'>Alex Smith</div>
            <div className='job'> Designer | Developer</div>
            <div className='stars'>
              <FaStar color="#F4CE14" size="1rem"/>
              <FaStar color="#F4CE14" size="1rem"/>
              <FaStar color="#F4CE14" size="1rem"/>
              <FaStar color="#F4CE14" size="1rem"/>
              <FaStar color="#F4CE14" size="1rem"/>
            </div>
          </div>
          <div className='image'>
            <img src={Testimonial1} alt=''/>
          </div>
        </div>
      </div>
      <div className='box'>
        <ImQuotesLeft color="#495E57" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consectetur sem eget lectus mollis, eget lobortis turpis pulvinar. Etiam vitae mollis augue.</p>
        <div className='content'>
          <div className='info'>
            <div className='name'>Kristina Bellis</div>
            <div className='job'> Freelancer | Advertiser</div>
            <div className='stars'>
              <FaStar color="#F4CE14" size="1rem"/>
              <FaStar color="#F4CE14" size="1rem"/>
              <FaStar color="#F4CE14" size="1rem"/>
              <FaStar color="#F4CE14" size="1rem"/>
              <FaRegStar color="#F4CE14" size="1rem" />
            </div>
          </div>
          <div className='image'>
            <img src={Testimonial2} alt=''/>
          </div>
        </div>
      </div>
      <div className='box'>
        <ImQuotesLeft color="#495E57" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consectetur sem eget lectus mollis, eget lobortis turpis pulvinar. Etiam vitae mollis augue.</p>
        <div className='content'>
          <div className='info'>
            <div className='name'>Sarah Williams</div>
            <div className='job'> YouTuber | Blogger</div>
            <div className='stars'>
              <FaStar color="#F4CE14" size="1rem"/>
              <FaStar color="#F4CE14" size="1rem"/>
              <FaStar color="#F4CE14" size="1rem"/>
              <FaStar color="#F4CE14" size="1rem"/>
              <FaStarHalfStroke color="#F4CE14" size="1rem"/>
            </div>
          </div>
          <div className='image'>
            <img src={Testimonial3} alt=''/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;*/
