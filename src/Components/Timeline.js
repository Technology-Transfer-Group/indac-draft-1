// import '../style/main.css';
import TinySlider from './TinySlider';
import Aos from "aos"
import { useEffect,useState } from "react";
import "aos/dist/aos.css";

const Timeline = ({setTitle ,setbutton1 ,setbutton2 ,setbuttonname1, setbuttonname2 ,setp1 ,setp2}) => {
   
    
    useEffect(()=>{
        Aos.init({duration:1500 });
        const modal = document.querySelector('.modalbox')
        const modalbuttons = document.querySelector(".road-map-slider").childNodes
        modalbuttons.forEach((ele)=>{
            ele.addEventListener("click",()=>{
                modal.classList.add('active');
                console.log('hell')
                setTitle(ele.dataset.title)
                setp1(ele.dataset.p1)
                setp2(ele.dataset.p2)
                setbutton1(ele.button1)
                setbutton2(ele.button2)
                setbuttonname1(ele.dataset.buttonname1)
                setbuttonname2(ele.dataset.buttonname2)
                console.log(ele.dataset)
            })
        })
        },[]);
    

    // tns({
    //     container: '.road-map-slider',
    //     items: 1,
    //     slideBy: 'page',
    //     autoplay: false,
    //     mouseDrag: true,
    //     gutter: 0,
    //     nav: true,
    //     controls: false,
    //     responsive: {
    //         0: {
    //             items: 2,
    //         },
    //         540: { 
    //             items: 3,
    //         },
    //         768: {
    //             items: 4,
    //         },
    //         992: {
    //             items: 4,
    //         },
    //         1170: {
    //             items: 6,
    //         }
    //     }
    // });

    return (
        <section className="road-map section" style={{backgroundImage:"url(" + "/images/road-map/bg.png" + ")"}}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title">
                            <h2 data-aos="fade-up"  data-aos-offset="180" data-aos-delay="100">Our Timeline</h2>
                            <p data-aos="fade-up"  data-aos-offset="180" data-aos-delay="200">
                                TTG organizes a wide range of events ranging from the IPR workshop educating the students about various scientific skills and ethics, to TEDx IIT Kharagpur, one of the most awaited events at KGP where lots of inspiring minds come together to explore and share their experiences with each other.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="top-row" data-aos="fade-up" data-aos-offset="180" data-aos-delay="100">
                    <div className="">
                        <TinySlider>
                            <div className="row road-map-slider">
                                <div className="col-lg-2 col-md-3 col-12 p-0" data-title='Tech Talks' data-p1='First Week of November' data-p2='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptatem nam nostrum commodi laudantium atque itaque vero labore numquam? Beatae, ducimus ipsam cupiditate at deserunt incidunt eius neque saepe provident ut facere magnam officiis distinctio inventore praesentium velit molestiae autem.' data-buttonname1='close' data-buttonname2='Yes' data-button1={()=>{
                                    document.querySelector(".modalbox").classList.remove("active")
                                }} data-button2={()=>{
                                    document.querySelector(".modalbox").classList.remove("active")
                                }}>

                                    <div className="single-map down">
                                        <span className="arrow"></span>
                                        <h3>First Week of November
                                            <span>Tech Talks</span>
                                        </h3>
                                    </div>

                                </div>
                                <div className="col-lg-2 col-md-3 col-12 p-0" data-title='IPR Workshop' data-p1='Weekends of December' data-p2='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptatem nam nostrum commodi laudantium atque itaque vero labore numquam? Beatae, ducimus ipsam cupiditate at deserunt incidunt eius neque saepe provident ut facere magnam officiis distinctio inventore praesentium velit molestiae autem.' data-buttonname1='close' data-buttonname2='Yes' data-button1={()=>{
                                    document.querySelector(".modalbox").classList.remove("active")
                                }} data-button2={()=>{
                                    document.querySelector(".modalbox").classList.remove("active")
                                }}>

                                    <div className="single-map">
                                        <span className="arrow"></span>
                                        <h3>Weekends of December
                                            <span>IPR Workshop</span>
                                        </h3>
                                    </div>

                                </div>
                                <div className="col-lg-2 col-md-3 col-12 p-0" data-title='TEDxIITKharagpur' data-p1='First Week of February' data-p2='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptatem nam nostrum commodi laudantium atque itaque vero labore numquam? Beatae, ducimus ipsam cupiditate at deserunt incidunt eius neque saepe provident ut facere magnam officiis distinctio inventore praesentium velit molestiae autem.' data-buttonname1='close' data-buttonname2='Yes' data-button1={()=>{
                                    document.querySelector(".modalbox").classList.remove("active")
                                }} data-button2={()=>{
                                    document.querySelector(".modalbox").classList.remove("active")
                                }}>

                                    <div className="single-map down">
                                        <span className="arrow"></span>
                                        <h3>First Week of February
                                            <span>TED<sr>x</sr>IITKharagpur</span>
                                        </h3>
                                    </div>

                                </div>
                                <div className="col-lg-2 col-md-3 col-12 p-0" data-title='Annual Research Meet' data-p1='Feb-March' data-p2='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptatem nam nostrum commodi laudantium atque itaque vero labore numquam? Beatae, ducimus ipsam cupiditate at deserunt incidunt eius neque saepe provident ut facere magnam officiis distinctio inventore praesentium velit molestiae autem.' data-buttonname1='close' data-buttonname2='Yes' data-button1={()=>{
                                    document.querySelector(".modalbox").classList.remove("active")
                                }} data-button2={()=>{
                                    document.querySelector(".modalbox").classList.remove("active")
                                }}>

                                    <div className="single-map">
                                        <span className="arrow"></span>
                                        <h3>Feb-March
                                            <span>Annual Research Meet</span>
                                        </h3>
                                    </div>

                                </div>
                                {/* <div className="col-lg-2 col-md-3 col-12 p-0">

                                    <div className="single-map">
                                        <span className="arrow"></span>
                                        <h3>March,2022
                                            <span>Lorem Ipsum</span>
                                        </h3>
                                    </div>

                                </div> */}


                            </div>
                        </TinySlider>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Timeline;