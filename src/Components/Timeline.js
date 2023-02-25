import '../style/main.css';
import TinySlider from './TinySlider';
import Aos from "aos"
import { useEffect } from "react";
import "aos/dist/aos.css";

const Timeline = () => {
    useEffect(()=>{
        Aos.init({duration:1500 });
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
                                <div className="col-lg-2 col-md-3 col-12 p-0">

                                    <div className="single-map down">
                                        <span className="arrow"></span>
                                        <h3>First Week of November
                                            <span>Tech Talks</span>
                                        </h3>
                                    </div>

                                </div>
                                <div className="col-lg-2 col-md-3 col-12 p-0">

                                    <div className="single-map">
                                        <span className="arrow"></span>
                                        <h3>Weekends of December
                                            <span>IPR Workshop</span>
                                        </h3>
                                    </div>

                                </div>
                                <div className="col-lg-2 col-md-3 col-12 p-0">

                                    <div className="single-map down">
                                        <span className="arrow"></span>
                                        <h3>First Week of February
                                            <span>TED<sr>x</sr>IITKharagpur</span>
                                        </h3>
                                    </div>

                                </div>
                                <div className="col-lg-2 col-md-3 col-12 p-0">

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