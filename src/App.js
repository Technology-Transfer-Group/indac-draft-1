import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import { Route, Routes } from 'react-router-dom';
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
  return (
    <div className="App">
      <header id="header" class="fixed-top ">
    <div class="container d-flex align-items-center">

      <h1 class="logo me-auto"><a href="index.html">Arsha</a></h1>

      <nav id="navbar" class="navbar">
        <ul>
          <li><a class="nav-link scrollto active" href="/#heroes">Home</a></li>
          <li><a class="nav-link scrollto" href="/#about">About</a></li>
          <li><a class="nav-link scrollto" href="/#timeline">Timeline</a></li>
          <li><a class="nav-link scrollto" href="/#testimonials">Testimonials</a></li>
          <li><a class="nav-link   scrollto" href="/spons">Sponsors</a></li>
          <li><a class="nav-link scrollto" href="/teams">Team</a></li>
          <li class="dropdown"><a href="/industry"><span>Industry</span> </a>
            <ul>
              <li><a href="#">Drop Down 1</a></li>
              <li class="dropdown"><a href="#"><span>Deep Drop Down</span> <i class="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="#">Deep Drop Down 1</a></li>
                  <li><a href="#">Deep Drop Down 2</a></li>
                  <li><a href="#">Deep Drop Down 3</a></li>
                  <li><a href="#">Deep Drop Down 4</a></li>
                  <li><a href="#">Deep Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="#">Drop Down 2</a></li>
              <li><a href="#">Drop Down 3</a></li>
              <li><a href="#">Drop Down 4</a></li>
            </ul>
          </li>
          <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
          <li><a class="getstarted scrollto" href="#about">Get Started</a></li>
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
    </div>
  );
}

export default App;
