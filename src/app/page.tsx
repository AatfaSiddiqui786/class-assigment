import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

      <h1 >Hi ! I Am Aatfa Siddiqui
        <p>   & I AM WEB DEVELOPER</p>
        <p> WELCOME TO MY WEBSITES</p></h1>
      <p> This is my own creating website</p>
      <h2>ABOUT ME</h2>
      <p>Hello! I am currently a student at GIAC, specializing in Artificial Intelligence (AI) and Metaverse 3.0. Through this program, I am gaining insights into cutting-edge technologies that are transforming how we experience and interact within digital environments. My studies focus on learning how AI can create smarter, more interactive virtual spaces and immersive experiences, preparing me to innovate in the tech world.</p>

      <p >In addition to this, I am also pursuing ADC Part 1 (Associate Degree of Commerce), which equips me with a solid foundation in business principles, finance, and commerce. This combination of technology and commerce enables me to approach challenges creatively and strategically, allowing me to bridge the gap between tech-driven innovation and business insights.

        By merging these areas, I am building a unique skill set that will empower me to contribute meaningfully to both digital and commercial industries.
      </p>
      <p > Greetings! I am a dedicated student specializing in Artificial Intelligence, Metaverse 3.0, and Commerce. This website serves as a platform to share my academic journey, insights, and projects as I explore innovative intersections between technology and business.

        I invite you to explore my work and discover my passion for creating impactful digital solutions. Thank you for visiting!
      </p>
      <h1>
        <p>
          <Link href="/">Home Page</Link></p>
        <p>
          <Link href="/about">About Us</Link></p>
        <p>
          <Link href="/contact-us">Contact-Us</Link></p>
        <p>
          <Link href="/services">Services</Link></p>
        <p>
          <Link href="/services/web-dev">Web Development</Link></p>
        <p>
          <Link href="/services/app-dev">App Development</Link></p>
      </h1>
      <h1> THANKS FOR WATCHING MY WEBSITE</h1>


    </div>
  );
}