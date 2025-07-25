import { isAuthenticated } from '@/lib/actions/auth.action'

import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import React, { ReactNode } from 'react'
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Rootlayout = async ({ children }: { children: ReactNode }) => {
  const isUserAuthnenticated = await isAuthenticated();

  if (!isUserAuthnenticated) {
    redirect('/sign-in');
  }
  return (
    <div className='root-layout'>
      <nav>
        <Link href='/' className='flex items-center gap-10 '>
          <Image src='/logo.svg' alt='logo' width={38} height={32} />
          <div className="text-2xl font-semibold text-white ">
            <span className="text-blue-500 text-3xl">AI</span >nterview
          </div></Link>
      </nav>
      {children}
      <footer className="  text-gray-300 py-8 px-4 ">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo & Name */}
          <div className="text-xl font-semibold text-white">
            <span className="text-blue-500">AI</span>nterview
          </div>

          {/* Navigation Links */}
          <div className="flex gap-6 text-sm">
            <a href="/" className="hover:text-white transition">About</a>
            <a href="/" className="hover:text-white transition">Features</a>
            <a href="/" className="hover:text-white transition">Pricing</a>
            <a href="/" className="hover:text-white transition">Contact</a>
          </div>

          {/* Social Media */}
          <div className="flex gap-4 text-xl">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaLinkedin />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaGithub />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-center  text-gray-300">
          © {new Date().getFullYear()} AInterview: Made by Sayan Kr. Modak with smart and hard work.
        </div>
      </footer>
    </div>
  )
}

export default Rootlayout
