import { TerminalIcon, UserIcon } from "@heroicons/react/solid";
import React from "react";
import { testimonials } from "../data";

export default function Testtimonials() {
    return (
        <section id="testimonials">
            <div className="container px-5 py-10 mx-auto text-center">
                <UserIcon className="w-10 inline-block mb-4" />
                <h1 className="sm:text-4xl text-4xl font-medium title-font text-white mb-12">Client Testimonials</h1>
                <div className="flex flex-wrap m-4">
                    {testimonials.map((testi) => (
                        <div className="p-4 md:w-1/2 w-full">
                            <TerminalIcon className="block w-8 text-gray-500 mb-4" />
                            <p className="leading-relaxed mb-6">{testi.quote}</p>
                            <div className="inline-flex items-center">
                                <img src={testi.image} alt="testimonial" className="w-12 rounded-full flex-shrink-0 object-cover object-center" />
                                <span className="flex-grow flex flex-col pl-4">
                                    <span className="title-font font-medium text-white">{testi.name}</span>
                                    <span className="text-gray-500 text-sm uppercase">{testi.company}</span>
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
