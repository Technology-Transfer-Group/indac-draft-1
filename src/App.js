import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import SponsorsPage from './Components/SponsorsPage';
import IndustryPage from './Components/IndustryPage';
import { useEffect, useState } from 'react';
import Modal from './Components/Modal';
import TeamAndContact from './Components/TeamAndContact'
function App() {
  const [title, setTitle] = useState("")
  const [p1, setp1] = useState("")
  const [p2, setp2] = useState("")
  const [buttonname1, setbuttonname1] = useState("")
  const [buttonname2, setbuttonname2] = useState("")
  const [button1, setbutton1] = useState()
  const [button2, setbutton2] = useState()
  useEffect(() => {
    const select = (el, all = false) => {
      el = el.trim()
      if (all) {
        return [...document.querySelectorAll(el)]
      } else {
        return document.querySelector(el)
      }
    }
  
    /**
     * Easy event listener function
     */
    const on = (type, el, listener, all = false) => {
      let selectEl = select(el, all)
      if (selectEl) {
        if (all) {
          selectEl.forEach(e => e.addEventListener(type, listener))
        } else {
          selectEl.addEventListener(type, listener)
        }
      }
    }
  
    /**
     * Easy on scroll event listener 
     */
    const onscroll = (el, listener) => {
      el.addEventListener('scroll', listener)
    }
  
    /**
     * Navbar links active state on scroll
     */
    let navbarlinks = select('#navbar .scrollto', true)
    const navbarlinksActive = () => {
      let position = window.scrollY + 200
      navbarlinks.forEach(navbarlink => {
        if (!navbarlink.hash) return
        let section = select(navbarlink.hash)
        if (!section) return
        if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
          navbarlink.classList.add('active')
        } else {
          navbarlink.classList.remove('active')
        }
      })
    }
    window.addEventListener('load', navbarlinksActive)
    onscroll(document, navbarlinksActive)
  
    /**
     * Scrolls to an element with header offset
     */
    const scrollto = (el) => {
      let header = select('#header')
      let offset = header.offsetHeight
  
      let elementPos = select(el).offsetTop
      window.scrollTo({
        top: elementPos - offset,
        behavior: 'smooth'
      })
    }
  
    /**
     * Toggle .header-scrolled class to #header when page is scrolled
     */
    let selectHeader = select('#header')
    if (selectHeader) {
      const headerScrolled = () => {
        if (window.scrollY > 100) {
          selectHeader.classList.add('header-scrolled')
        } else {
          selectHeader.classList.remove('header-scrolled')
        }
      }
      window.addEventListener('load', headerScrolled)
      onscroll(document, headerScrolled)
    }
  
    /**
     * Back to top button
     */
    let backtotop = select('.back-to-top')
    if (backtotop) {
      const toggleBacktotop = () => {
        if (window.scrollY > 100) {
          backtotop.classList.add('active')
        } else {
          backtotop.classList.remove('active')
        }
      }
      window.addEventListener('load', toggleBacktotop)
      onscroll(document, toggleBacktotop)
    }
  
    /**
     * Mobile nav toggle
     */
    on('click', '.mobile-nav-toggle', function(e) {
      select('#navbar').classList.toggle('navbar-mobile')
      this.classList.toggle('bi-list')
      this.classList.toggle('bi-x')
    })
  
    /**
     * Mobile nav dropdowns activate
     */
    on('click', '.navbar .dropdown > a', function(e) {
      if (select('#navbar').classList.contains('navbar-mobile')) {
        e.preventDefault()
        this.nextElementSibling.classList.toggle('dropdown-active')
      }
    }, true)
  
    /**
     * Scrool with ofset on links with a class name .scrollto
     */
    on('click', '.scrollto', function(e) {
      if (select(this.hash)) {
        e.preventDefault()
  
        let navbar = select('#navbar')
        if (navbar.classList.contains('navbar-mobile')) {
          navbar.classList.remove('navbar-mobile')
          let navbarToggle = select('.mobile-nav-toggle')
          navbarToggle.classList.toggle('bi-list')
          navbarToggle.classList.toggle('bi-x')
        }
        scrollto(this.hash)
      }
    }, true)
  
    /**
     * Scroll with ofset on page load with hash links in the url
     */
    window.addEventListener('load', () => {
      if (window.location.hash) {
        if (select(window.location.hash)) {
          scrollto(window.location.hash)
        }
      }
    });
    let preloader = select('#preloader');
      if (preloader) {
        window.addEventListener('load', () => {
          preloader.remove()
        });
      }
  }, [])
  let location = useLocation()
  useEffect(() => {
  console.log('location.pathname', location.pathname)
  document.querySelectorAll(".nav-link").forEach((ele)=>{
    ele.classList.remove("active")
  })
  document.getElementById(location.pathname.slice(1)+"-").classList.add("active")
  }, [location.pathname])
  
  return (
    <div className="App">
      <header id="header" class="fixed-top ">
    <div class="container d-flex align-items-center">

      <h1 class="logo me-auto"><Link to="/">Arsha</Link></h1>

      <nav id="navbar" class="navbar">
        <ul>
          <li class="dropdown"><Link class="nav-link scrollto active" to="/" id='-'>Home</Link>
          <ul>
          <li><Link class="nav-link scrollto" to="/#about">About</Link></li>
          <li><Link class="nav-link scrollto" to="/#timeline">Timeline</Link></li>
          <li><Link class="nav-link scrollto" to="/#testimonials">Testimonials</Link></li>
            </ul>
          </li>
          
          
          
          <li><Link class="nav-link scrollto" to="/spons" id='spons-'>Sponsors</Link></li>
          <li><Link class="nav-link scrollto" to="/teams" id='teams-'>Team</Link></li>
          <li class="dropdown"><Link to="/industry" className='nav-link scrollto' id='industry-'>Industry </Link>
            <ul>
              <li><Link to="#">Drop Down 1</Link></li>
              <li class="dropdown"><Link to="#"><span>Deep Drop Down</span> <i class="bi bi-chevron-right"></i></Link>
                <ul>
                  <li><Link to="#">Deep Drop Down 1</Link></li>
                  <li><Link to="#">Deep Drop Down 2</Link></li>
                  <li><Link to="#">Deep Drop Down 3</Link></li>
                  <li><Link to="#">Deep Drop Down 4</Link></li>
                  <li><Link to="#">Deep Drop Down 5</Link></li>
                </ul>
              </li>
              <li><Link to="#">Drop Down 2</Link></li>
              <li><Link to="#">Drop Down 3</Link></li>
              <li><Link to="#">Drop Down 4</Link></li>
            </ul>
          </li>
          {/* <li><Link class="nav-link scrollto" to="#contact">Contact</Link></li> */}
          <li><Link class="getstarted scrollto" to="/#about">Get Started</Link></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>

    </div>
  </header>
  <div className="modalbox" ><Modal title={title} p1=
      {p1} p2={p2} button1={button1} button2={button2} buttonname1={buttonname1} buttonname2={buttonname2} /></div>
        

  <Routes>
    <Route exact path='/' element={<Home setTitle={setTitle} setp1={setp1} setp2={setp2} setbutton1={setbutton1} setbutton2={setbutton2} setbuttonname1={setbuttonname1} setbuttonname2={setbuttonname2}/>} />
    <Route exact path='/spons' element={<SponsorsPage setTitle={setTitle} setp1={setp1} setp2={setp2} setbutton1={setbutton1} setbutton2={setbutton2} setbuttonname1={setbuttonname1} setbuttonname2={setbuttonname2}/>} />
    <Route exact path='/teams' element={< TeamAndContact/>}/>
    <Route exact path='/industry' element={<IndustryPage setTitle={setTitle} setp1={setp1} setp2={setp2} setbutton1={setbutton1} setbutton2={setbutton2} setbuttonname1={setbuttonname1} setbuttonname2={setbuttonname2}/>} />

    </Routes> 
    <footer id="footer">
{/* <div class="footer-newsletter">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6">
            <h4>Join Our Newsletter</h4>
            <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
            <form action="" method="post">
              <input type="email" name="email"/><input type="submit" value="Subscribe"/>
            </form>
          </div>
        </div>
      </div>
    </div> */}

    <div class="footer-top">
      <div class="container">
        <div class="row">

          <div class="col-lg-3 col-md-6 footer-contact">
            <h3>Arsha</h3>
            <p>
              A108 Adam Street <br/>
              New York, NY 535022<br/>
              United States <br/><br/>
              <strong>Phone:</strong> +1 5589 55488 55<br/>
              <strong>Email:</strong> info@example.com<br/>
            </p>
          </div>

          <div class="col-lg-3 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Home</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">About us</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Services</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Web Design</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Web Development</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Product Management</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Marketing</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Graphic Design</a></li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-6 footer-links">
            <h4>Our Social Networks</h4>
            <p>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
            <div class="social-links mt-3">
              <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
              <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
              <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
              <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
              <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
            </div>
          </div>

        </div>
      </div>
    </div>

    <div class="container footer-bottom clearfix">
      <div class="copyright">
        &copy; Copyright <strong><span>Arsha</span></strong>. All Rights Reserved
      </div>
      <div class="credits">
        {/* <!-- All the links in the footer should remain intact. -->
        <!-- You can delete the links only if you purchased the pro version. -->
        <!-- Licensing information: https://bootstrapmade.com/license/ -->
        <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/arsha-free-bootstrap-html-template-corporate/ --> */}
        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
      </div>
    </div>
</footer>
    </div>
  );
}

export default App;
