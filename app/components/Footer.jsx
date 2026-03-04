import React from 'react';
import { FaYoutube, FaInstagram, FaFacebook, FaTiktok, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-black text-white py-4'>
      <div className='max-w-4xl mx-auto px-4'>
        <div className='flex justify-between items-center mb-4'>
          <p className='text-sm'>
            &copy; {new Date().getFullYear()} US11. All rights reserved.
          </p>

          <div className='flex'>
            <a href='https://www.youtube.com/@us11fc' className='text-sm hover:underline mx-2'>
              <FaYoutube size={20} />
            </a>
            <a href='https://www.instagram.com/us11fc/' className='text-sm hover:underline mx-2'>
              <FaInstagram size={20} />
            </a>
            <a href='https://www.facebook.com/profile.php?id=61565465891580' className='text-sm hover:underline mx-2'>
              <FaFacebook size={20} />
            </a>
            <a href='https://www.tiktok.com/@us11fc' className='text-sm hover:underline mx-2'>
              <FaTiktok size={20} />
            </a>
            <a href='https://x.com/US11FC' className='text-sm hover:underline mx-2'>
              <FaTwitter size={20} />
            </a>
            <a href='https://www.linkedin.com/company/us11' className='text-sm hover:underline mx-2'>
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>

        <div className='text-center text-xs text-gray-400'>
          <p>
            This site is for promoting products available on
            <a href='https://www.mlsstore.com' target='_blank' rel='noopener noreferrer' className='text-blue-500 hover:underline'>
              {' '}MLS Store
            </a>{' '}
            & 
            <a href='https://www.fanatics.com' target='_blank' rel='noopener noreferrer' className='text-blue-500 hover:underline'>
              {' '}Fanatics
            </a>.
            We are affiliate partners with MLS Store and Fanatics. This site is independently operated and is not officially endorsed by or affiliated with MLS, its clubs, or their subsidiaries.
          </p>

          {/* ✅ Iubenda linkovi */}
          <div className="mt-3">
            <a
              href="https://www.iubenda.com/privacy-policy/99498999"
              className="iubenda-white iubenda-noiframe iubenda-embed hover:underline"
              title="Privacy Policy"
            >
              Privacy Policy
            </a>
            {" | "}
            <a
              href="https://www.iubenda.com/privacy-policy/99498999/cookie-policy"
              className="iubenda-white iubenda-noiframe iubenda-embed hover:underline"
              title="Cookie Policy"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;