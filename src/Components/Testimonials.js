import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import { tns } from 'tiny-slider/src/tiny-slider';
import 'tiny-slider/dist/tiny-slider.css';
function Testimonials() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  useEffect(() => {
    tns({
        container: '.testimonial-collection',
        slideBy: 'page',
        autoplay: false,
        mouseDrag: true,
        gutter: 0,
        nav: true,
        controls: false,
        items:2,
        responsive: {
                    0: {
                        items: 1,
                    },
                    540: { 
                        items: 1,
                    },
                    768: {
                        items: 2,
                    },
                    992: {
                        items: 2,
                    },
                    1170: {
                        items: 3,
                    }
                }
    })
}, [])
  return (
    <section id="testimonials" class="testimonial">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title">
              <h2 data-aos="fade-up" data-aos-offset="180" data-aos-delay="100">
               Testimonials
              </h2>
              <p data-aos="fade-up" data-aos-offset="180" data-aos-delay="200">
                TTG organizes a wide range of events ranging from the IPR
                workshop educating the students about various scientific skills
                and ethics, to TEDx IIT Kharagpur, one of the most awaited
                events at KGP where lots of inspiring minds come together to
                explore and share their experiences with each other.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="top-row"
        data-aos="fade-up"
        data-aos-offset="180"
        data-aos-delay="100"
      >
        <div className="">
          <div className="testimonial-collection" >
            <Card style={{ width: "28rem" }} >
              <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
            <Card style={{ width: "28rem" }}>
              <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
            <Card style={{ width: "28rem" }}>
              <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
            <Card style={{ width: "25rem" }}>
              <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
            <Card style={{ width: "25rem" }}>
              <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
            <Card style={{ width: "25rem" }}>
              <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
            <Card style={{ width: "25rem" }}>
              <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
