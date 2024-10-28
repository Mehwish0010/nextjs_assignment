import React from 'react'
import Image from 'next/image'
import Image2 from "@/components/assets/images/logo.jpg"
import Link from 'next/link'
function Footer() {
  return (
    <div><>
  
    <footer className="">
      <div className="container bg-slate-400 px-5 py-5 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            
          <Image src={Image2} alt="logo"width={150} height={100} className="hidden:lg block ml-4"/> 
            <span className="ml-3 text-xl font-semibold text-myWhite">Fashion Clothing Store</span>
          </a>
    
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="  underline scroll-m-20 text-xl font-semibold tracking-tight title-font  text-gray-900 mb-3">
              SERVICES
            </h2>
            <nav className="list-none mb-10">
              <li>
                <Link href="/" className="text-gray-600 font-semibold tracking-tight title-font text-lg mb-3 hover:text-myhover">Branding</Link>
              </li>
              <li>
                <a className="text-gray-600 font-semibold tracking-tight title-font text-lg mb-3 hover:text-myhover">Designs</a>
              </li>
              <li>
                <a className="text-gray-600 font-semibold tracking-tight title-font text-lg mb-3 hover:text-myhover">Marketing</a>
              </li>
              <li>
                <a className="text-gray-600 font-semibold  tracking-tight title-font text-lg mb-3 hover:text-myhover">Advertising</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="  underline scroll-m-20 text-xl font-semibold tracking-tight title-font  text-gray-900  mb-3">
              COMPANY
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 font-semibold tracking-tight title-font text-lg mb-3 hover:text-myhover">Home</a>
              </li>
              <li>
                <a className="text-gray-600 font-semibold tracking-tight title-font text-lg mb-3 hover:text-myhover">About Us</a>
              </li>
              <li>
                <a className="text-gray-600 font-semibold tracking-tight title-font text-lg mb-3 hover:text-myhover">Jobs</a>
              </li>
              <li>
                <a className="text-gray-600 font-semibold tracking-tight title-font text-lg mb-3 hover:text-myhover">Contact Us</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className=" underline scroll-m-20 text-xl font-semibold tracking-tight title-font  text-gray-900 mb-3">
              LEGAL
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 font-semibold tracking-tight title-font text-lg mb-3 hover:text-myhover">Terms Of Use</a>
              </li>
              <li>
                <a className="text-gray-600 font-semibold tracking-tight title-font text-lg mb-3 hover:text-myhover">Privacy Policy</a>
              </li>
              <li>
                <a className="text-gray-600 font-semibold tracking-tight title-font text-lg mb-3 hover:text-myhover">Cookie Policy</a>
              </li>
              
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className=" scroll-m-20 underline title-font font-semibold text-gray-900 tracking-tight text-xl  mb-3">
              EXPLORE
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 font-semibold tracking-tight title-font text-lg mb-3 hover:text-myhover">Feature</a>
              </li>
              <li>
                <a className="text-gray-600 font-semibold tracking-tight title-font text-lg mb-3 hover:text-myhover">Enterprise</a>
              </li>
              <li>
                <a className="text-gray-600 font-semibold tracking-tight title-font text-lg mb-3 hover:text-myhover">Security</a>
              </li>
              <li>
                <a className="text-gray-600 font-semibold tracking-tight title-font text-lg mb-3 hover:text-myhover">Pricing</a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left font-semibold">
          © 2024 Fashion Avenue. All rights reserved.
            <a
              href="https://twitter.com/fashion"
              rel="noopener noreferrer"
              className="text-gray-600 ml-1 font-semibold tracking-tight title-font text-lg mb-3 "
              target="_blank"
            >
              @mehwishfatima
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a className="text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={0}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                />
                <circle cx={4} cy={4} r={2} stroke="none" />
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  </>
  </div>
  )
}

export default Footer