import React, {
  useEffect
} from 'react';
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

const Home = () => {

  useEffect(() => {
    const toggle = document.querySelector('.toggle');
    const ul = document.querySelector('nav ul');

    const links = document.querySelectorAll("nav a");

    const handleToggleClick = () => {
      toggle.classList.toggle('toggler');
      ul.classList.toggle("active");
    };

    const handleScroll = () => {
      const sec = document.querySelectorAll("section");
      sec.forEach((section) => {
        let top = window.scrollY;
        let offset = section.offsetTop / 1.3;
        let height = section.offsetHeight;
        let id = section.getAttribute("id");

        if (top >= offset && top < offset + height) {
          links.forEach((link) => {
            link.classList.remove("indicate");
          });
          document.querySelector("nav a[href='#" + id + "']").classList.add("indicate");
        }
      });
    };

    toggle.addEventListener("click",
      handleToggleClick);
    window.addEventListener('scroll',
      handleScroll);

    return () => {
      toggle.removeEventListener("click",
        handleToggleClick);
      window.removeEventListener('scroll',
        handleScroll);
    };
  }, []);


  return (
    <>
    <Head>
 <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
 <title>Web Developer Portfolio Dynamic Websites | My Portfolio</title>
 <meta name="title" content="Web Developer Portfolio Dynamic Websites | My Portfolio" />
 <meta
  name="description"
  content="Explore the digital showcase of a talented web developer skilled in HTML, CSS, JavaScript, and Nextjs. Discover services"
  />
 <meta
name="keywords"
content="Web, developer, html, css, js, JavaScript, React, NextJs"
/>
<script type="application/ld+json">
 {`
{
"@context": "https://schema.org",
"@type": "FundingAgency",
"name": "My portfolio",
"url": "/",
"logo": "/favicon.ico",
"sameAs": [
"/",
"https://twitter.com/7T7NIAZI",
"https://github.com/NIAZI77"
]
}
`}
</script>
 <meta name="robots" content="index, follow" />
 <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
 <meta name="language" content="English" />
<meta property="og:title" content="Niazi Portfolio" />
<meta property="og:site_name" content="Portfolio" />
<meta property="og:url" content="https://niazi.vercel.app" />
<meta property="og:description" content="Explore the digital showcase of a talented web developer skilled in HTML, CSS, JavaScript, and Nextjs. Discover services." />
<meta property="og:type" content="website" />
<meta property="og:image" content="/favicon.ico" />
<link rel="canonical" href="niazi.vercel.app" />
 </Head>
<div>
 <header>
 <nav>
 <div className="logo">
 <Link title="My Portfolio" href="/">
 <h1> PORTFOLIO</h1>
 </Link>
</div>
 <div className="links">
 <div className="toggle"></div>
 <ul>
 <li><a title="My Portfolio" href="#home" className="indicate">Home</a></li>
 <li><a title="My Portfolio" href="#about">About</a></li>
 <li><a title="My Portfolio" href="#services">Services</a></li>
 <li><a title="My Portfolio" href="#contact">Contact</a></li>
</ul>
</div>
</nav>
</header>
 <main>
 <section id="home">
 <div className="content">
<p>
Hi, I am Professional <b>full-stack web developer</b> with experience in modern frameworks.
<br /><br />
 <Link target="_blank" href="https://www.fiverr.com/hamzaniazi0999">
 <button class="button">
  Let's Work Together
</button>
 </Link>
</p>
</div>
 <div className="img">
 <Image src="/Portfolio.png" width={300} height={300} alt="Web Developer Portfolio Dynamic Websites | My Portfolio" />
</div>
</section>
 <div className="hr"></div>
 <section id="about">
 <div className="img">
 <Image src="/about.png" width={300} height={300} alt="Web Developer Portfolio Dynamic Websites | My Portfolio" />
</div>
 <div className="conten">
 <h2>About</h2>
 <p>Experienced professional full-stack web developer with a demonstrated history of working in the software development industry. Skilled in HTML, CSS, Javascript, ReactJs, NextJs, Tailwind Css, Bootstrap, MongoDB. Strong communication and problem-solving skills with a Bachelor's degree focused on Computer Science. Client satisfaction and providing professional service are my top priorities. I am confident that I can fulfill your expectations. Feel free to reach out with any questions.

</p>
</div>
</section>
 <div className="hr"></div>
 <section id="services">
 <h2>Services</h2>
 <div className="service-box">
 <div className="box">
 <div>
<Image src="/design.svg" alt="Web Developer Portfolio Dynamic Websites | My Portfolio" height={60} width={60} />
</div>
 <div>
 <h3>Design</h3>
<p>
Beautiful, focused design that creates memorable, interactive digital experiences.
</p>
</div>
</div>
 <div className="box">
 <div>
<Image src="/code.svg" alt="Web Developer Portfolio Dynamic Websites | My Portfolio" height={60} width={60} />
</div>
 <div>
 <h3>Code</h3>
 <p>
Efficient, creative code for seamless user experiences. Precision in every line.
</p>

</div>
</div>
</div>
</section>
 <div className="hr"></div>
 <section id="contact">
 <h2>Contact</h2>
 <div id="con-box">
 <Link target="_blank" href="tel:+923168955487" className="contact-box">
 <div className="icon">
<Image src="/phone.svg" alt="Web Developer Portfolio Dynamic Websites | My Portfolio" height={25} width={25} />
</div>
 <div>
 03168955487
</div>
</Link>
 <Link target="_blank" href="mailto:hamzaniazi0999@gmail.com" className="contact-box">
 <div className="icon">
<Image src="/envelope.svg" alt="Web Developer Portfolio Dynamic Websites | My Portfolio" height={25} width={25} />
</div>
 <div>
 info@my.com
</div>
</Link>
 <Link target="_blank" href="https://wa.me/+923168955487" className="contact-box">
 <div className="icon">
<Image src="/whatsapp.svg" alt="Web Developer Portfolio Dynamic Websites | My Portfolio" height={35} width={35} />
</div>
 <div>
 03168955487
</div>
</Link>
</div>
</section>
 </main>
 <footer>
 <div>
 © 2021 - <Link title="My Portfolio" href="/">
 PORTFOLIO
 </Link>
</div>
 <div className="social-links">
 <Link target="_blank" href="https://www.fiverr.com/hamzaniazi0999">
<Image src="/fiverr.svg" alt="Web Developer Portfolio Dynamic Websites | My Portfolio" height={25} width={25} />
</Link>
 <Link target="_blank" href="https://tiktok.com/@77_niazi">
<Image src="/tiktok.svg" alt="Web Developer Portfolio Dynamic Websites | My Portfolio" height={25} width={25} />
</Link>
 <Link target="_blank" href="https://twitter.com/7T7NIAZI">
<Image src="/twitter.svg" alt="Web Developer Portfolio Dynamic Websites | My Portfolio" height={25} width={25} />
</Link>
</div>
</footer>
</div> < />
)
}

export default Home