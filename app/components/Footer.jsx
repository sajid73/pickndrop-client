import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <footer className="body-font bg-gray-950 text-white text-center">
            <div className="py-7">
                <div className="social_links py-4">
                    <ul className="flex flex-wrap justify-center">
                        <a href="/#" target="_blank" rel="noopener noreferrer"><li className="bg-slate-50 rounded-full p-2 mx-2"><svg className="w-6 h-6 text-teal-400 dark:text-white" aria-hidden="true" xmlns="/#www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                            <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd" />
                        </svg></li></a>
                        <a href="/#" target="_blank" rel="noopener noreferrer"><li className="bg-slate-50 rounded-full p-2 mx-2"><svg class="w-6 h-6 text-teal-400 dark:text-white" aria-hidden="true" xmlns="/#www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path fill="currentColor" d="M12.186 8.672 18.743.947h-2.927l-5.005 5.9-4.44-5.9H0l7.434 9.876-6.986 8.23h2.927l5.434-6.4 4.82 6.4H20L12.186 8.672Zm-2.267 2.671L8.544 9.515 3.2 2.42h2.2l4.312 5.719 1.375 1.828 5.731 7.613h-2.2l-4.699-6.237Z" />
                        </svg>
                        </li></a>
                        <a href="/#" target="_blank" rel="noopener noreferrer"><li className="bg-slate-50 rounded-full p-2 mx-2"><svg class="w-6 h-6 text-teal-400 dark:text-white" aria-hidden="true" xmlns="/#www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 12.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" />
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 3h-2l-.447-.894A2 2 0 0 0 12.764 1H7.236a2 2 0 0 0-1.789 1.106L5 3H3a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V5a2 2 0 0 0-2-2Z" />
                        </svg></li></a>
                        <a href="/#" target="_blank" rel="noopener noreferrer"><li className="bg-slate-50 rounded-full p-2 mx-2"><svg class="w-6 h-6 text-teal-400 dark:text-white" aria-hidden="true" xmlns="/#www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
                            <path fill-rule="evenodd" d="M19.7 3.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.84c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.84A4.225 4.225 0 0 0 .3 3.038a30.148 30.148 0 0 0-.2 3.206v1.5c.01 1.071.076 2.142.2 3.206.094.712.363 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.15 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965c.124-1.064.19-2.135.2-3.206V6.243a30.672 30.672 0 0 0-.202-3.206ZM8.008 9.59V3.97l5.4 2.819-5.4 2.8Z" clip-rule="evenodd" />
                        </svg></li></a>
                    </ul>
                </div>
                <ul className="flex justify-center">
                    <a href="/#" target="_blank" rel="noopener noreferrer"><li className="mx-2">Home /</li></a>
                    <a href="/#" target="_blank" rel="noopener noreferrer"><li className="mx-2">About Us /</li></a>
                    <a href="/#" target="_blank" rel="noopener noreferrer"><li className="mx-2">Terms & Conditions /</li></a>
                    <a href="/#" target="_blank" rel="noopener noreferrer"><li className="mx-2">Contact Us</li></a>
                </ul>
                <p>Copyright ©2023 Spectrum Engineering Consortium (Pvt.) Ltd. Developed by <a target="_blank" href={"https://dreamarray.com/"}>Dream Array</a></p>
            </div>
        </footer>
    )
}
