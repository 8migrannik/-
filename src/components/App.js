import banner_image from '../img/banner_image.png';
import browser from '../img/browser.jpg';
import alejandro1 from '../img/alejandro1.jpg';
import amy from '../img/amy.jpg';
import mark from '../img/mark.jpg';
import logo from '../img/logo.png';
import icon_1 from '../img/icons/icon_1.png';
import icon_2 from '../img/icons/icon_2.png';
import icon_3 from '../img/icons/icon_3.png';
import icon_4 from '../img/icons/icon_4.png';
import icon_5 from '../img/icons/icon_5.png';
import icon_6 from '../img/icons/icon_6.png';
import s1 from '../img/screenshots/1.jpg';
import thb_s1 from '../img/screenshots/thb_1.jpg';
import s2 from '../img/screenshots/2.jpg';
import thb_s2 from '../img/screenshots/thb_2.jpg';
import s3 from '../img/screenshots/3.jpg';
import thb_s3 from '../img/screenshots/thb_3.jpg';
import s4 from '../img/screenshots/4.jpg';
import thb_s4 from '../img/screenshots/thb_4.jpg';
import s5 from '../img/screenshots/5.jpg';
import thb_s5 from '../img/screenshots/thb_5.jpg';
import s6 from '../img/screenshots/6.jpg';
import thb_s6 from '../img/screenshots/thb_6.jpg';
import '../css/style.css';
import {IconCard} from './cards';
import {GalleryCard} from './cards';
import {CustomersCard} from './cards';

function App() { 
  return (
  <div>
    <header>
      <div className="row">
        <div id="logo" className="eight columns">
          <h1><img src={logo} title="Landing Page" height="35" width="40" />Landed</h1>
          <h2>WordPress Landing Page Theme</h2> 
        </div>
      </div> 
    </header>
    <section id="banner" role="banner">
      <div className="row">
        <div className="six columns">
          <h1>A powerful WordPress <br/> landing page theme</h1>
          <p>This theme focuses on the key elements: the product itself, building trust and closing the deal. It's very easy to customize, and it runs on the powerful WordPress platform!</p>
          <ul>
            <li>Unlimited colors; banner with image, slider or video</li>
            <li>Fully responsive and powered by HTM5 and CSS3</li>
            <li>Very easy to customize: set up in minutes</li>
          </ul>
        </div>
        <div id="banner_image" className="six columns">
          <img src={banner_image} alt="JustLanded" height="398" width="378" id="image_bottom" />
        </div>
      </div>
    </section>
    <article role="main"> 
      <div className="row">
        <section id="features">
          <h2>Build professional landing pages in minutes</h2>
          <h3>Clean, flexible and designed to convert.</h3>
          <ul>
            <IconCard
              src={icon_1}
              h4="Sell your product online"
              p="Use a professional landing page template that just converts."
            />
            <IconCard
              src={icon_2}
              h4="Very easy to customize"
              p="Create your landing page without writing any code, within minutes."
            />
             <IconCard
              src={icon_3}
              h4="Unlimited Colors"
              p="Apply the build-in presets or use your own color combinations."
            />
             <IconCard
              src={icon_4}
              h4="Responsive, HTML5 & CSS3"
              p="The latest standards for maximum compatibility, on any device!"
            />
             <IconCard
              src={icon_5}
              h4="Designed to convert"
              p="Use our custom landing page blocks that are proven to work."
            />
             <IconCard
              src={icon_6}
              h4="No Boundaries"
              p="Create multiple landing pages, each with unique layout & design."
            />
          </ul>
        </section>
      </div>
      <div className="row">
        <section id="description">
          <img src={browser} width="460" height="430" alt="Landing Page" title="Landing Page" className="position_left"/>
          <div className="six columns">
            <h2>We don’t leave you stranded.</h2>
            <h3>Our customer service is second to none</h3>
            <p>If there is anything we can help you with, please let us know. Whether you have discovered a problem or need help customizing our product to fit your needs, we are always happy to help out and point you into the right direction.</p>
            <ul>
              <li>We provide free installation support.</li>
              <li>Our agents are professionals and available 7 days a week.</li>
              <li>A knowledgebase containing tutorials for the most common tasks is available for registered customers, as are free extensions through our customer portal.</li>
              <li>The comprehensive illustrated user manual covers all aspects of the theme.</li>
              <li>Customers have free access to all future versions of the theme.</li>
            </ul>
            <p><strong>Free customer support</strong>  is available for the lifetime of the product. The full customer service policy is available on our website.</p>
          </div>
        </section>
      </div>
      <div className="row">
        <section id="screenshots">
          <h2>Take a look at our Screenshots</h2>
          <div>
            <GalleryCard
              href={s1}
              src={thb_s1}
            />
            <GalleryCard
              href={s2}
              src={thb_s2}
            />
            <GalleryCard
              href={s3}
              src={thb_s3}
            />
            <GalleryCard
              href={s4}
              src={thb_s4}
            />
            <GalleryCard
              href={s5}
              src={thb_s5}
            />
            <GalleryCard
              href={s6}
              src={thb_s6}
            />
          </div>              
        </section>
      </div>
      <div className="row">
        <section>
          <blockquote className="testimonial_big">
            <q>"I love the ability to create new landing pages on the fly, mixing and matching page parts for special purposes. The support is also the best I've ever experienced."</q>
            <footer>
              <div>Jon D. </div>
              - on themeforest
            </footer>
          </blockquote>
        </section>
      </div>
      <div className="row">
        <section>
          <div id="work" className="six columns">
            <h2>How it works</h2>
            <p>JustLanded has been designed with ease of use in mind. You can use the demo data we provide with the installation package – or you can follow the outline of our detailed manual.</p>
            <ul>
              <li className="six mobile-two columns">
                <h4>It is easy to use</h4>
                <p>Setup your landing page within minutes, it is that easy.</p>
              </li>
              <li className="six mobile-two columns">
                <h4>Designed to convert</h4>
                <p>Using key principals of successful landing pages</p>
              </li>
              <li className="six mobile-two columns">
                <h4>Powered by HTML5</h4>
                <p>Using the fabulous HTML5/CSS3 mixed with WordPress</p>
              </li>
              <li className="six mobile-two columns">
                <h4>Video support</h4>
                <p>Include your product videos for a greater presentation</p>
              </li>
            </ul>
          </div>
          <div className="six columns">
            <h2>Learn more about our product</h2>
            <div className="embed_container">
              <iframe src="http://player.vimeo.com/video/23534361?title=0&amp;byline=0&amp;portrait=0&amp;color=ffffff"></iframe>
            </div>
          </div>
        </section>
      </div>
      <div className="row">
        <section id="testimonials">
          <h2>What our customers are saying</h2>
          <h3>If we did not convince you, maybe a few words from our customers will!</h3>
          <CustomersCard
            q="The JustLanded for WordPress theme is great, super easy to use and to customize and the support is just awesome: super fast and reliable."
            src={alejandro1}
            p1="Alejandro G."
            p2="alejandrogallego.es"
          />
           <CustomersCard
            q="Very happy with the theme and incredibly easy to configure, well done! I cannot emphasize how awesome this theme and developer support are."
            src={amy}
            p1="Amy V."
            p2="wickedwptutorials.com"
          />
           <CustomersCard
            q="Definitely a great theme and the support team are fantastic. Customer support is numero uno and ShapingRain have got this spot on. Cheers guys."
            src={mark}
            p1="Mark R."
            p2="BestFiveReviewed.com"
          />
        </section>
      </div>
      <div className="row">
        <aside>
          <div id="newsletter">
            <div id="newsletter_inner">
              <h2>Join our newsletter for exclusive deals</h2>
              <form>
                <input type="text" name="e-mail" id="e-mail" value="Your E-mail Address" onBlur="if(this.value == '') { this.value = 'Your E-mail Address'; }" onFocus="if(this.value == 'Your E-mail Address') { this.value = ''; }" />
                <input id="submit" className="gradient" type="submit" value="Subscribe" name="submit" />
              </form>
            </div>
          </div>
        </aside>
      </div>
      <div className="row">
        <footer role="contentinfo">
          <div id="page_footer">
            <ul>
            <li><a href="about.html">Landing Page</a></li>
              <li><a href="about.html">About Us</a></li>
              <li><a href="about.html">Blog</a></li>
              <li><a href="about.html">Contact Us</a></li>
              <li><a href="about.html">JustLanded for WordPress</a></li>
              <li><a href="about.html">ShapingRain.com</a></li>
            </ul>
            <aside id="social_elements">
              <ul>
                <li><a href="#" className="facebook" title="Facebook"><span>Facebook</span></a></li>
                <li><a href="#" className="googleplus" title="Google+"><span>Google+</span></a></li>
                <li><a href="#" className="twitter" title="Twitter"><span>Twitter</span></a></li>
                <li><a href="#" className="stumbleupon" title="StumbleUpon"><span>StumbleUpon</span></a></li>
                <li><a href="#" className="feedback" title="Feedback"><span>Feedback</span></a></li>
              </ul>
            </aside>
            <p>© 2021 JustLanded. All Rights Reserved.</p>
          </div>
        </footer>
      </div>
    </article>  
  </div>  
  );
}

export default App;
