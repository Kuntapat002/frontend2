import React from 'react'
import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';


export default function about() {
  return (
    <>

    <Head>
      <title>Fortune Express About</title>
    </Head>
    
<style dangerouslySetInnerHTML={{__html: "\n      .bd-placeholder-img {\n        font-size: 1.125rem;\n        text-anchor: middle;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        user-select: none;\n      }\n\n      @media (min-width: 768px) {\n        .bd-placeholder-img-lg {\n          font-size: 3.5rem;\n        }\n      }\n\n      .b-example-divider {\n        width: 100%;\n        height: 3rem;\n        background-color: rgba(0, 0, 0, .1);\n        border: solid rgba(0, 0, 0, .15);\n        border-width: 1px 0;\n        box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);\n      }\n\n      .b-example-vr {\n        flex-shrink: 0;\n        width: 1.5rem;\n        height: 100vh;\n      }\n\n      .bi {\n        vertical-align: -.125em;\n        fill: currentColor;\n      }\n\n      .nav-scroller {\n        position: relative;\n        z-index: 2;\n        height: 2.75rem;\n        overflow-y: hidden;\n      }\n\n      .nav-scroller .nav {\n        display: flex;\n        flex-wrap: nowrap;\n        padding-bottom: 1rem;\n        margin-top: -1px;\n        overflow-x: auto;\n        text-align: center;\n        white-space: nowrap;\n        -webkit-overflow-scrolling: touch;\n      }\n\n      .btn-bd-primary {\n        --bd-violet-bg: #712cf9;\n        --bd-violet-rgb: 112.520718, 44.062154, 249.437846;\n\n        --bs-btn-font-weight: 600;\n        --bs-btn-color: var(--bs-white);\n        --bs-btn-bg: var(--bd-violet-bg);\n        --bs-btn-border-color: var(--bd-violet-bg);\n        --bs-btn-hover-color: var(--bs-white);\n        --bs-btn-hover-bg: #6528e0;\n        --bs-btn-hover-border-color: #6528e0;\n        --bs-btn-focus-shadow-rgb: var(--bd-violet-rgb);\n        --bs-btn-active-color: var(--bs-btn-hover-color);\n        --bs-btn-active-bg: #5a23c8;\n        --bs-btn-active-border-color: #5a23c8;\n      }\n      .bd-mode-toggle {\n        z-index: 1500;\n      }\n    " }} />

  <header data-bs-theme="dark">
    <div className="collapse text-bg-dark" id="navbarHeader">
      <div className="container">
        <div className="row">
          <div className="col-sm-8 col-md-7 py-4">
            <h4><Link class="py-2 link-body-emphasis " href="about">About</Link></h4>
            <p className="text-body-secondary">Add some information about the album below, the author, or any other background context. Make it a few sentences long so folks can pick up some informative tidbits. Then, link them off to some social networking sites or contact information.</p>
          </div>
          <div className="col-sm-4 offset-md-1 py-4">
            <h4><Link class="py-2 link-body-emphasis text-decoration-none" href="/contact">Contact</Link></h4>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">Follow on Twitter</a></li>
              <li><a href="#" className="text-white">Like on Facebook</a></li>
              <li><a href="#" className="text-white">Email me</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="navbar navbar-dark bg-dark shadow-sm">
      <div className="container">
        <Link href="/." className="navbar-brand d-flex align-items-center">
          <svg href="index" width={20} height={20} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} aria-hidden="true" className="me-2" viewBox="0 0 24 24"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" /><circle cx={12} cy={13} r={4} /></svg>
          <strong>Fortune Express</strong>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
      </div>
    </div>
  </header>


<main>
  <div className="container py-4">
    <div className="p-5 mb-4 text-bg-dark rounded-3" style={{ backgroundImage: 'url("#")' }}>
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">About Me</h1>
        <p className="col-md-8 fs-4">Hi, I'm Kuntapat wongvichit This is my resume for you to know me better I'm studying at Chiang Mai Technical College and I have a passion for design.</p>
        
        <div className="btn-group"> 
        <a href="https://www.canva.com/design/DAFQq1dmX8w/bDpEPJfQ9lc6mM0ocU84rA/edit?utm_content=DAFQq1dmX8w&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" className="btn btn-primary btn-lg" target="_blank" rel="noopener noreferrer">Learn more about me</a>
        </div>
      
      </div>
    </div>


    <div className="row align-items-md-stretch">
      <div className="col-md-6">
        <div className="h-100 p-5 text-bg-dark rounded-3" style={{ backgroundImage: 'url("#")' }}>
          <h2>Academic information</h2>
          <p>I received a certificate Thai Mooc project online learning Graphic Design Crash Course and Japanese Language for Being Elderly Caregiver.</p>
          <a href="https://www.canva.com/design/DAFQq1dmX8w/bDpEPJfQ9lc6mM0ocU84rA/edit?utm_content=DAFQq1dmX8w&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" className="btn btn-outline-light" target="_blank" rel="noopener noreferrer">Take a look</a>
        </div>
      </div>


      <div className="col-md-6">
        <div className="h-100 p-5 text-bg-dark border rounded-3" style={{ backgroundImage: 'url("#")' }}>
          <h2>Thank you</h2>
          <p>Thank you teachers for giving advice. in collecting documents, evidence and information In creating this portfolio (Portfolio) to be successful and thank you parents who has kindly assisted in the preparation of several documents and recommendations until the collection file This work is more complete.</p>
        </div>
      </div>
    </div>
    <footer className="pt-3 mt-4 text-body-secondary border-top">
      © 2023
    </footer>
  </div>
</main>


  
  <footer className="text-decoration-none ">
    <div className="container">
      <p className="float-end mb-1">
        <a href="#">Back to top</a>
      </p>
      <p className="mb-1">Album example is © Bootstrap, but please download and customize it for yourself!</p>
    </div>
  </footer>








    </>
  )
}
