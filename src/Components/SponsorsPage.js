import React, { useEffect } from 'react'
import SponsorPagecard from './SponsorPagecard'
import AOS from "aos"

const SponsorsPage = ({setTitle ,setbutton1 ,setbutton2 ,setbuttonname1, setbuttonname2 ,setp1 ,setp2}) => {
    useEffect(() => {
        window.addEventListener('load', () => {
            AOS.init({
              duration: 1000,
              easing: "ease-in-out",
              once: true,
              mirror: false
            });
          });
    }, [])
    
  return (
    <div className='sponsPage'>
        <div className="sponsheading">Sponsors</div>
        {/* <div className=' sponsCardContainer'>
        <article style={{"--n": 3,"--i": 0, "--cost": 9, "--grad": "#0fcf7b, #0c9f30"}}>
    <header>
      <h3 data-name="basic"></h3>
    </header>
    <section>
      <button>sign up</button>
    </section>
  </article>  
  <article style={{"--n": 3,"--i": 1, "--cost": 9, "--grad": "#0fcf7b, #0c9f30"}}>
    <header>
      <h3 data-name="basic"></h3>
    </header>
    <section>
      <button>sign up</button>
    </section>
  </article>  
  <article style={{"--n": 3,"--i": 2, "--cost": 9, "--grad": "#0fcf7b, #0c9f30"}}>
    <header>
      <h3 data-name="basic"></h3>
    </header>
    <section>
      <button>sign up</button>
    </section>
  </article>  
  <article style={{"--n": 3,"--i": 3, "--cost": 9, "--grad": "#0fcf7b, #0c9f30"}}>
    <header>
      <h3 data-name="basic"></h3>
    </header>
    <section>
      <button>sign up</button>
    </section>
  </article>  
  <article style={{"--n": 3,"--i": 3.5, "--cost": 9, "--grad": "#0fcf7b, #0c9f30"}}>
    <header>
      <h3 data-name="basic"></h3>
    </header>
    <section>
      <button>sign up</button>
    </section>
  </article>  
  <article style={{"--n": 3,"--i": 4, "--cost": 9, "--grad": "#0fcf7b, #0c9f30"}}>
    <header>
      <h3 data-name="basic"></h3>
    </header>
    <section>
      <button>sign up</button>
    </section>
  </article>  
  <article style={{"--n": 3,"--i": 4.5, "--cost": 9, "--grad": "#0fcf7b, #0c9f30"}}>
    <header>
      <h3 data-name="basic"></h3>
    </header>
    <section>
      <button>sign up</button>
    </section>
  </article>  
        </div> */}
        {/* <div className='sponscardcontainer'>
        <div class="card 1">
  <div class="card_image"> <img src="https://i.redd.it/b3esnz5ra34y.jpg" /> </div>
  <div class="card_title title-white">
    <p>Card Title</p>
  </div>
</div><div class="card 2">
  <div class="card_image"> <img src="https://i.redd.it/b3esnz5ra34y.jpg" /> </div>
  <div class="card_title title-white">
    <p>Card Title</p>
  </div>
</div><div class="card 3">
  <div class="card_image"> <img src="https://i.redd.it/b3esnz5ra34y.jpg" /> </div>
  <div class="card_title title-white">
    <p>Card Title</p>
  </div>
</div><div class="card 4">
  <div class="card_image"> <img src="https://i.redd.it/b3esnz5ra34y.jpg" /> </div>
  <div class="card_title title-white">
    <p>Card Title</p>
  </div>
</div>
        </div> */}
<div className='sponsfullcardcontainer' >

    <SponsorPagecard title={"Card Title"} p1={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque cum, dolore eveniet at sapiente maiores sed amet cumque fugiat est, inventore nostrum saepe quis, corporis a libero quaerat ullam. Voluptate incidunt totam, quasi et deleniti doloremque provident deserunt maiores odio."} p2={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque cum, dolore eveniet at sapiente maiores sed amet cumque fugiat est, inventore nostrum saepe quis, corporis a libero quaerat ullam. Voluptate incidunt totam, quasi et deleniti doloremque provident deserunt maiores odio." }setTitle={setTitle} setp1={setp1} setp2={setp2} setbutton1={setbutton1} setbutton2={setbutton2} setbuttonname1={setbuttonname1} setbuttonname2={setbuttonname2} />
    <SponsorPagecard title={"Card Title"} p1={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque cum, dolore eveniet at sapiente maiores sed amet cumque fugiat est, inventore nostrum saepe quis, corporis a libero quaerat ullam. Voluptate incidunt totam, quasi et deleniti doloremque provident deserunt maiores odio."} p2={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque cum, dolore eveniet at sapiente maiores sed amet cumque fugiat est, inventore nostrum saepe quis, corporis a libero quaerat ullam. Voluptate incidunt totam, quasi et deleniti doloremque provident deserunt maiores odio." }setTitle={setTitle} setp1={setp1} setp2={setp2} setbutton1={setbutton1} setbutton2={setbutton2} setbuttonname1={setbuttonname1} setbuttonname2={setbuttonname2} reverse={true}/>
    <SponsorPagecard title={"Card Title"} p1={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque cum, dolore eveniet at sapiente maiores sed amet cumque fugiat est, inventore nostrum saepe quis, corporis a libero quaerat ullam. Voluptate incidunt totam, quasi et deleniti doloremque provident deserunt maiores odio."} p2={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque cum, dolore eveniet at sapiente maiores sed amet cumque fugiat est, inventore nostrum saepe quis, corporis a libero quaerat ullam. Voluptate incidunt totam, quasi et deleniti doloremque provident deserunt maiores odio." }setTitle={setTitle} setp1={setp1} setp2={setp2} setbutton1={setbutton1} setbutton2={setbutton2} setbuttonname1={setbuttonname1} setbuttonname2={setbuttonname2} />
    <SponsorPagecard title={"Card Title"} p1={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque cum, dolore eveniet at sapiente maiores sed amet cumque fugiat est, inventore nostrum saepe quis, corporis a libero quaerat ullam. Voluptate incidunt totam, quasi et deleniti doloremque provident deserunt maiores odio."} p2={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque cum, dolore eveniet at sapiente maiores sed amet cumque fugiat est, inventore nostrum saepe quis, corporis a libero quaerat ullam. Voluptate incidunt totam, quasi et deleniti doloremque provident deserunt maiores odio." }setTitle={setTitle} setp1={setp1} setp2={setp2} setbutton1={setbutton1} setbutton2={setbutton2} setbuttonname1={setbuttonname1} setbuttonname2={setbuttonname2} reverse={true}/>
    <SponsorPagecard title={"Card Title"} p1={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque cum, dolore eveniet at sapiente maiores sed amet cumque fugiat est, inventore nostrum saepe quis, corporis a libero quaerat ullam. Voluptate incidunt totam, quasi et deleniti doloremque provident deserunt maiores odio."} p2={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque cum, dolore eveniet at sapiente maiores sed amet cumque fugiat est, inventore nostrum saepe quis, corporis a libero quaerat ullam. Voluptate incidunt totam, quasi et deleniti doloremque provident deserunt maiores odio." }setTitle={setTitle} setp1={setp1} setp2={setp2} setbutton1={setbutton1} setbutton2={setbutton2} setbuttonname1={setbuttonname1} setbuttonname2={setbuttonname2} />
    <SponsorPagecard title={"Card Title"} p1={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque cum, dolore eveniet at sapiente maiores sed amet cumque fugiat est, inventore nostrum saepe quis, corporis a libero quaerat ullam. Voluptate incidunt totam, quasi et deleniti doloremque provident deserunt maiores odio."} p2={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque cum, dolore eveniet at sapiente maiores sed amet cumque fugiat est, inventore nostrum saepe quis, corporis a libero quaerat ullam. Voluptate incidunt totam, quasi et deleniti doloremque provident deserunt maiores odio." }setTitle={setTitle} setp1={setp1} setp2={setp2} setbutton1={setbutton1} setbutton2={setbutton2} setbuttonname1={setbuttonname1} setbuttonname2={setbuttonname2} reverse={true}/>
    <SponsorPagecard title={"Card Title"} p1={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque cum, dolore eveniet at sapiente maiores sed amet cumque fugiat est, inventore nostrum saepe quis, corporis a libero quaerat ullam. Voluptate incidunt totam, quasi et deleniti doloremque provident deserunt maiores odio."} p2={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque cum, dolore eveniet at sapiente maiores sed amet cumque fugiat est, inventore nostrum saepe quis, corporis a libero quaerat ullam. Voluptate incidunt totam, quasi et deleniti doloremque provident deserunt maiores odio." }setTitle={setTitle} setp1={setp1} setp2={setp2} setbutton1={setbutton1} setbutton2={setbutton2} setbuttonname1={setbuttonname1} setbuttonname2={setbuttonname2} />
    <SponsorPagecard title={"Card Title"} p1={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque cum, dolore eveniet at sapiente maiores sed amet cumque fugiat est, inventore nostrum saepe quis, corporis a libero quaerat ullam. Voluptate incidunt totam, quasi et deleniti doloremque provident deserunt maiores odio."} p2={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque cum, dolore eveniet at sapiente maiores sed amet cumque fugiat est, inventore nostrum saepe quis, corporis a libero quaerat ullam. Voluptate incidunt totam, quasi et deleniti doloremque provident deserunt maiores odio." }setTitle={setTitle} setp1={setp1} setp2={setp2} setbutton1={setbutton1} setbutton2={setbutton2} setbuttonname1={setbuttonname1} setbuttonname2={setbuttonname2} reverse={true}/>
    <SponsorPagecard title={"Card Title"} p1={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque cum, dolore eveniet at sapiente maiores sed amet cumque fugiat est, inventore nostrum saepe quis, corporis a libero quaerat ullam. Voluptate incidunt totam, quasi et deleniti doloremque provident deserunt maiores odio."} p2={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque cum, dolore eveniet at sapiente maiores sed amet cumque fugiat est, inventore nostrum saepe quis, corporis a libero quaerat ullam. Voluptate incidunt totam, quasi et deleniti doloremque provident deserunt maiores odio." }setTitle={setTitle} setp1={setp1} setp2={setp2} setbutton1={setbutton1} setbutton2={setbutton2} setbuttonname1={setbuttonname1} setbuttonname2={setbuttonname2} />
    <SponsorPagecard title={"Card Title"} p1={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque cum, dolore eveniet at sapiente maiores sed amet cumque fugiat est, inventore nostrum saepe quis, corporis a libero quaerat ullam. Voluptate incidunt totam, quasi et deleniti doloremque provident deserunt maiores odio."} p2={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque cum, dolore eveniet at sapiente maiores sed amet cumque fugiat est, inventore nostrum saepe quis, corporis a libero quaerat ullam. Voluptate incidunt totam, quasi et deleniti doloremque provident deserunt maiores odio." }setTitle={setTitle} setp1={setp1} setp2={setp2} setbutton1={setbutton1} setbutton2={setbutton2} setbuttonname1={setbuttonname1} setbuttonname2={setbuttonname2} reverse={true}/>
    <SponsorPagecard title={"Card Title"} p1={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque cum, dolore eveniet at sapiente maiores sed amet cumque fugiat est, inventore nostrum saepe quis, corporis a libero quaerat ullam. Voluptate incidunt totam, quasi et deleniti doloremque provident deserunt maiores odio."} p2={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque cum, dolore eveniet at sapiente maiores sed amet cumque fugiat est, inventore nostrum saepe quis, corporis a libero quaerat ullam. Voluptate incidunt totam, quasi et deleniti doloremque provident deserunt maiores odio." }setTitle={setTitle} setp1={setp1} setp2={setp2} setbutton1={setbutton1} setbutton2={setbutton2} setbuttonname1={setbuttonname1} setbuttonname2={setbuttonname2} />
    <SponsorPagecard title={"Card Title"} p1={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque cum, dolore eveniet at sapiente maiores sed amet cumque fugiat est, inventore nostrum saepe quis, corporis a libero quaerat ullam. Voluptate incidunt totam, quasi et deleniti doloremque provident deserunt maiores odio."} p2={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque cum, dolore eveniet at sapiente maiores sed amet cumque fugiat est, inventore nostrum saepe quis, corporis a libero quaerat ullam. Voluptate incidunt totam, quasi et deleniti doloremque provident deserunt maiores odio." }setTitle={setTitle} setp1={setp1} setp2={setp2} setbutton1={setbutton1} setbutton2={setbutton2} setbuttonname1={setbuttonname1} setbuttonname2={setbuttonname2} reverse={true}/>
    <SponsorPagecard title={"Card Title"} p1={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque cum, dolore eveniet at sapiente maiores sed amet cumque fugiat est, inventore nostrum saepe quis, corporis a libero quaerat ullam. Voluptate incidunt totam, quasi et deleniti doloremque provident deserunt maiores odio."} p2={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque cum, dolore eveniet at sapiente maiores sed amet cumque fugiat est, inventore nostrum saepe quis, corporis a libero quaerat ullam. Voluptate incidunt totam, quasi et deleniti doloremque provident deserunt maiores odio." }setTitle={setTitle} setp1={setp1} setp2={setp2} setbutton1={setbutton1} setbutton2={setbutton2} setbuttonname1={setbuttonname1} setbuttonname2={setbuttonname2} />
    
  

</div>
    </div>
  )
}

export default SponsorsPage