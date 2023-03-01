import React from 'react'

function TeamAndContact() {
  return (
    <div><div class="container">
    <div class="card">
      <div class="content">
        <div class="img"><img src="https://unsplash.it/200/200"/></div>
        <div class="cardContent">
          <h3>Luis Molina<br/><span>Web Developer</span></h3>
        </div>
      </div>
      <ul class="sci">
        <li style="--i:1">
          <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
        </li>
        <li style="--i:2">
          <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
        </li>
        <li style="--i:3">
          <a href="#"><i class="fa fa-github" aria-hidden="true"></i></a>
        </li>
    </ul>
    </div>
    <div class="card">
      <div class="content">
        <div class="img"><img src="https://unsplash.it/200/201"/></div>
        <div class="cardContent">
          <h3>Someone Else<br/><span>Grafic Designer</span></h3>
        </div>
      </div>
      <ul class="sci">
        <li style="--i:1">
          <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
        </li>
        <li style="--i:2">
          <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
        </li>
        <li style="--i:3">
          <a href="#"><i class="fa fa-github" aria-hidden="true"></i></a>
        </li>
    </ul>
    </div>
  </div>
  </div>
  )
}

export default TeamAndContact