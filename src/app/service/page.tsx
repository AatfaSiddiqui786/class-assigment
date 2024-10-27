import Link from 'next/link';

const Service = () => {
  return (
    <div>
      <h1>We provide the following services...</h1>
      <Link href="/services">Services</Link>
      <Link href="/services/app-dev">Application Development</Link>
      <br />
      <Link href="/services/web-dev">Web Development</Link>
    </div>
  );
};

export default Service;