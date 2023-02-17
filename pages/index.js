
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Container } from 'react-bootstrap'
import { Banner } from '@/components/Banner'


export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Container>
        



        <section id="services" class="help">
          <div class="heading reveal">
            What we can help you with
          </div>
          <div class="cards_help" data-tilt data-tilt-reset="false" data-tilt-max="2" data-tilt-speed="200" data-tilt-perspective="900" data-tilt-reverse="true">
            <div class="hcard hcard1" data-tilt data-tilt-startX="85" data-tilt-startY="2" data-tilt-reset="false" data-tilt-max="2" data-tilt-speed="200" data-tilt-perspective="900" data-tilt-reverse="true">
              <div class="himg"><img src="images/b1p1.jpg" /></div>
              <div class="sub-head">Web Application Development</div>
              <div class="sub-para">Our web applications are marked by a robust, scalable architecture that supports high performance requirements and ease of management without compromising.</div>
            </div>

            <div class="hcard hcard2" data-tilt data-tilt-startX="2" data-tilt-startY="85" data-tilt-reset="false" data-tilt-max="2" data-tilt-speed="200" data-tilt-perspective="900" data-tilt-reverse="true">

              <div class="himg"><img src="images/b1p2.jpg" /></div>
              <div class="sub-head">Mobile Application Development</div>
              <div class="sub-para">We develop powerful applications that provide a thrilling experience for your users and bring tangible value to your business. Whether native, cross platform or web.</div>
            </div>

            <div class="hcard hcard3" data-tilt data-tilt-startX="85" data-tilt-startY="2" data-tilt-reset="false" data-tilt-max="2" data-tilt-speed="200" data-tilt-perspective="900" data-tilt-reverse="true">
              <div class="himg"><img src="images/b1p3.jpg" /></div>
              <div class="sub-head">Blockchain Apps Services</div>
              <div class="sub-para">We can assist you in developing cryptocurrency exchanges based on the model of the Peatio open-source exchange.</div>
            </div>

            <div class="hcard hcard4" data-tilt data-tilt-startX="2" data-tilt-startY="85" data-tilt-reset="false" data-tilt-max="2" data-tilt-speed="200" data-tilt-perspective="900" data-tilt-reverse="true">
              <div class="himg"><img src="images/b1p4.jpg" /></div>
              <div class="sub-head">UX/UI Design Development</div>
              <div class="sub-para">Based on many years of experience and extensive knowledge in the field of design, we are exploring the full concept of the application, user interaction, animation and visual design.</div>
            </div>
          </div>
        </section>






        <section id="about">
          <div class=" about_section">


            <div class="aleft_col" >
              <img class="about_img" src="images/IMG_9858-1.png" />
            </div>
            <div class="aright_col">
              <div class="about_heading sub-head reveal">About us</div>
              <div class="about_para sub-para">In particular we love to develop native iOS and Android apps. We know how to build advanced WordPress websites. If you are ready to start an e-commerce project, we have a lot of experience with the past and ongoing projects using Magneto, Shopify and WooCommerce. We know the difference and can advise what can suit you better.</div>
              <div class="about_btn"><a href="about.html">More</a></div>
            </div>
          </div>
        </section>

        <section id="projects">
          <div class="projects_heading heading reveal"><h3>A piece of our Projects</h3></div>
          <div class="project_list">

            <a href="calculator-lock.html" >
              <div class="project" data-projectName="Calculator Lock">
                <img src="images/Group-1198-300x146.png" />
              </div>
            </a>

            <a href="koko-mix-admin.html" >
              <div class="project" data-projectName="KOKO-MIX ADMIN">
                <img src="images/Screenshot-2020-09-25-at-3.26.37-PM-1024x508.png" />
              </div>
            </a>

            <a href="smrtsgn-2.html" >
              <div class="project" data-projectName="SMRTSGN" >
                <img src="images/Screenshot-2020-09-23-at-2.06.49-PM-1024x691.png" />
              </div>
            </a>

            <a href="smrt16.html" >
              <div class="project" data-projectName="SMRT16" >
                <img src="images/Screenshot-2020-09-25-at-3.19.07-PM-1024x501.png" />
              </div>
            </a>

            <a href="votemee-app.html" >
              <div class="project" data-projectName="Voteme App" >
                <img src="images/Screenshot-2020-09-22-at-12.59.53-PM-1024x525.png" />
              </div>
            </a>

            <a href="spin-deals-app.html" >
              <div class="project" data-projectName="SPIN DEALS APP" >
                <img src="images/Screenshot-2020-09-22-at-1.02.22-PM-1024x491.png" />
              </div>
            </a>

            <a href="abetterflorist.html" >
              <div class="project" data-projectName="ABETTERFLORIST" >
                <img src="images/Screenshot-2020-09-25-at-12.31.10-PM-1024x588.png" />
              </div>
            </a>

            <a href="housekeeper-world.html" >
              <div class="project" data-projectName="Housekeeper World" >
                <img src="images/Screenshot-2020-09-23-at-12.28.50-PM-1024x518.png" />
              </div>
            </a>


            <a href="cbay-rent-a-car.html" >
              <div class="project" data-projectName="CBAY RENT A CAR" >
                <img src="images/Screenshot-2020-09-25-at-12.37.15-PM-1024x620.png" />
              </div>
            </a>


          </div>

          <div class="project_btn reveal"><a href="portfolio.html">Check Our Portfolio</a></div>
        </section>



        <section id="" class="prices">
          <div class="prices_head heading reveal">Prices</div>
          <div class="small_line reveal" ></div>
          <div class="prices_para reveal">
            We simply create you a way to achieve your goals with low cost and less time!<br />

            We actively seek to build trust. This is why we set a transparent pricing model from the very beginning.<br />

            Basic Rate: 30 € per hour
          </div>
          <div class="btn_link reveal"><a href="price-list.html">Check Price List</a></div>
        </section>




        <section class="pricesCards reveal">
          <div class="pcard">
            <div class="pcard_head">
              Website Development
            </div>
            <div class="pcard_para">
              When it comes to website development, we create effective and understandable complex systems.
            </div>
            <div class="pcard_hilight">From 990 €</div>
            <div class="pcard_pic1 pcard_pic">
              <a href="https://www.abetterflorist.com/"><img src="images/Screenshot-2020-09-22-at-12.52.23-PM-1536x765.png" /></a>
            </div>
            <div class="pcard_line"></div>
            <div class="pcard_pic2 pcard_pic">
              <a href="https://www.inter-euro.com/"><img src="images/Screenshot-2020-09-22-at-12.53.50-PM-768x389.png" />
              </a>			</div>

          </div>



          <div class="pcard">
            <div class="pcard_head">
              Website & Web Applications
            </div>
            <div class="pcard_para">
              In this package you will have a website and Android & IOS applications. It is perfect for small businesses.
            </div>
            <div class="pcard_hilight">From 1990€</div>
            <div class="pcard_pic1 pcard_pic">
              <a href="https://nutribar.vasilkoff.info/"><img src="images/Screenshot-2020-09-23-at-12.31.19-PM-1024x567.png" /></a>
            </div>
            <div class="pcard_line"></div>
            <div class="pcard_pic2 pcard_pic">
              <a href="https://housekeeperworld.com/en/"><img src="images/Screenshot-2020-09-25-at-12.37.15-PM-1024x620.png" /></a>
            </div>

          </div>


          <div class="pcard">
            <div class="pcard_head">
              Mobile Apps Development
            </div>
            <div class="pcard_para">
              Do it native or cross-platform apps we optimise the code of your app compliant with the latest technological standards.
            </div>
            <div class="pcard_hilight">From 2490€ for each platform<br /> From 3490€ for cross platform</div>
            <div class="pcard_pic1 pcard_pic">
              <a href="https://votemee.com/"><img src="images/Screenshot-2020-09-22-at-12.59.53-PM-1024x525.png" /></a>
            </div>
            <div class="pcard_line"></div>
            <div class="pcard_pic2 pcard_pic">
              <a href="https://www.spindealsapp.com/"><img src="images/Screenshot-2020-09-22-at-1.02.22-PM-1024x491.png" />
              </a>			</div>

          </div>

          <div class="pcard">
            <div class="pcard_head">
              Blockchain<br /> Services
            </div>
            <div class="pcard_para">
              We are developing from crypto wallets, cryptocurrency exchange or stocks exchange to online payment systems.
            </div>
            <div class="pcard_hilight">From 2159 €</div>
            <div class="pcard_pic1 pcard_pic">
              <a href="https://coinagewallet.com/"><img src="images/Screenshot-2020-09-23-at-12.43.58-PM-1536x887.png" /></a>
            </div>
            <div class="pcard_line"></div>
            <div class="pcard_pic2 pcard_pic">
              <a href="https://garantex.io/"><img src="images/Screenshot-2020-09-23-at-12.43.41-PM-1536x775.png" /></a>
            </div>

          </div>
        </section>




        <section class="map" id="map">
          <div class="map_heading heading">
            Let's Talk Business!
          </div>
          <div class="map_para">We’re open to discussing your ideas and look forward to bringing them to life. Chat with us about software outsourcing. We’ll be happy to answer any questions you have. It’ll only take 15 minutes – and will be worth your time.</div>

          <div class="leftportion_map">
            <div class="left_head">
              Find our office in Paphos
            </div>
            <div class="left_para">
              +35796253566 or +35799169229<br />

              sp@vasilkoff.com or maxim@vasilkoff.com<br />

              Glastonos 12-14, 2nd Floor, Paphos 8010, Cyprus
            </div>
            <div class="gmap_container">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3277.230872061629!2d32.419172014577214!3d34.77496278674638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14e706f487090f1d%3A0xfcc6a7e859d3f58e!2sGladstonos%2012-2nd%20Floor%2C%20Paphos%208046%2C%20Cyprus!5e0!3m2!1sen!2s!4v1666251894571!5m2!1sen!2s" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </section>






        <section class="review">
          <div class="review_heading heading ">
            What our customers say about us
          </div>
          <div class="review_detail review_detail1">
            <div class="review_ppic">
              <img src="images/photo_2020-09-25-13.42.31-150x150.jpeg" />
            </div>
            <div class="review_right">
              <div class="review_right_quote">
                “I have been working with Vasilkoff LTD for a long time now and I am very happy with the professionalism and experience their team has. I strongly recommend them as we build a long lasting relationship based on trust”
              </div>
              <div class="review_right_name">Neofytos Siakos</div>
              <div class="review_right_desig"><a href="https://www.spindealsapp.com/">CEO of Spindeals App</a></div>
            </div>
          </div>

          <div class="review_detail review_detail2">
            <div class="review_ppic">
              <img src="images/photo_2020-10-07-10.01.38-150x150.jpeg" />
            </div>
            <div class="review_right">
              <div class="review_right_quote">
                I’ve challenged Vasilkoff several times over the past couple of years with a variety of projects. They have always pulled through for me and gone above and beyond to get the project done. It’s hard to find consistent quality work, Vasilkoff hits the nail on the head, every time. I wish I had found them a couple of years earlier.
              </div>
              <div class="review_right_name">Justin Farrell​</div>
              <div class="review_right_desig"><a href="">CEO of Cowts</a></div>
            </div>
          </div>
        </section>


      </Container>
      <Footer />
    </>
  )
}
