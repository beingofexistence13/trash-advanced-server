"use client";
import React, { useState } from 'react'
import "./Landing.css"
import Image from "next/image";
import Link from "next/link";

import { Person } from "@styled-icons/bootstrap/Person/Person";
import { NotificationsNone } from "@styled-icons/material/NotificationsNone/NotificationsNone";
import { Add } from "@styled-icons/ionicons-outline/Add/Add";
import * as bootstrap from "@styled-icons/bootstrap";
import * as boxiconsLogos from "@styled-icons/boxicons-logos";
import * as boxiconsRegular from "@styled-icons/boxicons-regular";
import * as boxiconsSolid from "@styled-icons/boxicons-solid";
import * as crypto from "@styled-icons/crypto";
import * as entypo from "@styled-icons/entypo";
import * as entypoSocial from "@styled-icons/entypo-social";
import * as evaiconsOutline from "@styled-icons/evaicons-outline";
import * as evaiconsSolid from "@styled-icons/evaicons-solid";
import * as evil from "@styled-icons/evil";
import * as faBrands from "@styled-icons/fa-brands";
import * as faRegular from "@styled-icons/fa-regular";
import * as faSolid from "@styled-icons/fa-solid";
import * as feather from "@styled-icons/feather";
import * as fluentUISystemFilled from "@styled-icons/fluentui-system-filled";
import * as fluentUISystemRegular from "@styled-icons/fluentui-system-regular";
import * as foundation from "@styled-icons/foundation";
import * as heroiconsOutline from "@styled-icons/heroicons-outline";
import * as heroiconsSolid from "@styled-icons/heroicons-solid";
import * as icomoon from "@styled-icons/icomoon";
import * as ioniconsSharp from "@styled-icons/ionicons-sharp";
import * as ioniconsSolid from "@styled-icons/ionicons-solid";
import * as ioniconsOutline from "@styled-icons/ionicons-outline";
import * as materialRounded from "@styled-icons/material-rounded";
import * as materialSharp from "@styled-icons/material-sharp";
import * as materialTwoTone from "@styled-icons/material-twotone";
import * as octicons from "@styled-icons/octicons";
import * as remixFill from "@styled-icons/remix-fill";
import * as remixEditor from "@styled-icons/remix-editor";
import * as remixLine from "@styled-icons/remix-line";
import * as simpleIcons from "@styled-icons/simple-icons";
import * as typicons from "@styled-icons/typicons";
import * as zondicons from "@styled-icons/zondicons";







const Landing = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(false);
  const menuToggle = () => setMenuOpen(!menuOpen);
  const themeToggle = () => setTheme(!theme);

  return (
    <>

      <nav className="flex z-10 px-5 space-x-5 w-full landingNavbar__container">
        <li className="flex flex-none justify-start items-center space-x-1 w-auto h-full">
          <div className="flex justify-center items-center w-5 h-5 rounded-sm menu__toggler hover:bg-zinc-800"
            onClick={menuToggle}>
            {menuOpen ? <evaiconsOutline.CloseOutline className='text-white' title="Menu" /> : <evaiconsSolid.Menu2 className='text-white' title="Menu" />}
          </div>
          <div className="logo__main__container">
            <Image src="/logo.png" width={18} height={18} alt="Logo Main" />
            <span className="name">Logo Main</span>
          </div>
          <div className="logo__banner__container">
            <h5 className="font-bold text-md text-slate-400 hover:text-sky-400">Hello</h5>
            <span className="name">Logo Banner</span>
          </div>
        </li>
        <li className="gap grow">
          <ul className="hidden flex-row justify-start items-center space-x-4 h-full md:flex">
            <Link href="/docs">
              <li className="productStatusViewer__container">
                <h1 className="font-mono antialiased not-italic font-medium text-slate-400 hover:text-white">Docs</h1>
              </li>
            </Link>
            <Link href="/features">
              <li className="productStatusViewer__container">
                <h1 className="font-mono antialiased not-italic font-medium text-slate-400 hover:text-white">Features</h1>
              </li>
            </Link>
            <Link href="/influencers">
              <li className="productStatusViewer__container">
                <h1 className="font-mono antialiased not-italic font-medium text-slate-400 hover:text-white">Influencers</h1>
              </li>
            </Link>
            <Link href="/changelog">
              <li className="productStatusViewer__container">
                <h1 className="font-mono antialiased not-italic font-medium text-slate-400 hover:text-white">Changelog</h1>
              </li>
            </Link>
            <Link href="/intregations">
              <li className="productStatusViewer__container">
                <h1 className="font-mono antialiased not-italic font-medium text-slate-400 hover:text-white">Intregations</h1>
              </li>
            </Link>
            <Link href="/company">
              <li className="productStatusViewer__container">
                <h1 className="font-mono antialiased not-italic font-medium text-slate-400 hover:text-white">Company</h1>
              </li>
            </Link>
          </ul>
        </li>
        <li className="flex flex-none justify-end items-center space-x-2 h-full right__container grow md:w-1/4">

          <div className="hidden flex-1 justify-end items-center w-full h-full scrollLogin__container lg:flex border-r-zinc-50">
            <Link href="/hack">

              <h1 className="px-2 py-1 text-xs text-center text-white rounded-sm connect">Connect Wallet</h1>
            </ Link>
          </div>

          <div className="flex justify-center items-center w-7 h-7 rounded-full menu__toggler connect"
            onClick={themeToggle}>
            <ioniconsOutline.Search className='w-3 h-3 text-white' title="Search" />
          </div>
          <div className="flex justify-center items-center w-7 h-7 rounded-full menu__toggler connect"
            onClick={themeToggle}>
            <ioniconsOutline.Infinite className='w-3 h-3 text-white' title="Multiverse" />
          </div>

          <div className="flex justify-center items-center w-7 h-7 rounded-full menu__toggler connect"
            onClick={themeToggle}>
            <label className="swap swap-rotate">

              <input type="checkbox" />

              <svg className="w-3 h-3 text-white fill-current swap-on" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

              <svg className="w-3 h-3 text-white fill-current swap-off" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

            </label>

            {/* {theme ? <ioniconsOutline.Sunny className='w-3 h-3 text-white' title="Light Theme" /> : <ioniconsOutline.Moon className='w-3 h-3 text-white' title="Dark Theme" />} */}
          </div>


        </li>

      </nav>





















      {/* <video src="./hello.mp4" controls autoPlay></video> */}
      <div className="flex relative flex-col justify-center items-center w-full min-h-screen bg-black header">
        <h1 className="font-serif text-xl subpixel-antialiased font-black text-transparent bg-clip-text bg-gradient-to-br via-pink-500 to-lime-300 from-slate-900 not-itali vercel-tittle md:text-3xl lg:text-6xl xl:text-7xl 2xl:text-8xl">Multiversal.Social.Media.</h1>
        <p className='w-1/2 text-center text-slate-400'>Hello is a Social with Network with the power of Web3 and new Ai like ChatGpt3 Dall-E and this Network is growing really fast for your Love and Support!!!</p>
        <div className="flex flex-row justify-center items-center mt-5 heroButtons">

          <div className="border hover:bg-white hover:text-black min-w-fit h-10 rounded-md text-white p-2 text-center mr-2.5">Start Journey</div>
          <div className="p-2 h-10 text-center text-black bg-white rounded-md hover:bg-transparent hover:text-white hover:border min-w-fit">Just View Already</div>
        </div>
        <div className="absolute bottom-0 left-0 w-full text-center heroTrust">
          <h5 className="tracking-widest text-slate-400">All of your personal Data is Protected and your Safity is our top priority</h5>
        </div>
      </div>


      {/* HomeSpace */}
      <section className="flex relative flex-col justify-center items-center w-full min-h-screen bg-rose-100 header">
        <h1 className="text-white">HomeSpace</h1>
      </section>
      {/* StudySpace */}
      <section className="flex relative flex-col justify-center items-center w-full min-h-screen bg-rose-200 header">
        <h1 className="text-white">StudySpace</h1>
      </section>
      {/* GameSpace */}
      <section className="flex relative flex-col justify-center items-center w-full min-h-screen bg-rose-300 header">
        <h1 className="text-white">GameSpace</h1>
      </section>
      {/* MySpace */}
      <section className="flex relative flex-col justify-center items-center w-full min-h-screen bg-rose-400 header">
        <h1 className="text-white">MySpace</h1>
      </section>
      {/* VisualSpace */}
      <section className="flex relative flex-col justify-center items-center w-full min-h-screen bg-rose-500 header">
        <h1 className="text-white">VisualSpace</h1>
      </section>
      {/* WorkSpace */}
      <section className="flex relative flex-col justify-center items-center w-full min-h-screen bg-rose-600 header">
        <h1 className="text-white">WorkSpace</h1>
      </section>
      {/* LiveSpace */}
      <section className="flex relative flex-col justify-center items-center w-full min-h-screen bg-rose-700 header">
        <h1 className="text-white">LiveSpace</h1>
      </section>














      <footer className="p-10 footer bg-base-200 text-base-content">
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
      <footer className="px-10 py-4 border-t footer bg-base-200 text-base-content border-base-300">
        <div className="grid-flow-col items-center">
          <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg>
          <p>ACME Industries Ltd. <br />Providing reliable tech since 1992</p>
        </div>
        <div className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
          </div>
        </div>
      </footer>

    </>
  )
}
export default Landing