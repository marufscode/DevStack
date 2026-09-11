import React from 'react';
import Lbanner from '../assets/banner-stack.png'

const Banner = () => {
    return (
        <section className="bg-white">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-20">

                <div className="max-w-xl">
                    <h1 className="text-5xl font-black leading-tight text-slate-900">
                        Build Your Ideal
                        <span className="block bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                            Development Stack
                        </span>
                    </h1>

                    <p className="mt-5 max-w-md text-sm leading-6 text-slate-500">
                        Explore frontend, backend, database, and tooling options,
                        compare them side by side, and put together the stack that
                        fits your next project.
                    </p>

                    <div className="mt-7 flex gap-3">
                        <button className="rounded-md bg-gradient-to-r from-orange-500 to-pink-500 px-5 py-3 text-xs font-semibold text-white">
                            Explore Technologies
                        </button>

                        <button className="rounded-md border border-slate-200 px-6 py-3 text-xs font-medium text-slate-600 hover:bg-slate-50">
                            Learn More
                        </button>
                    </div>
                </div>

                <div >
            
                    <img
                        src={Lbanner} alt="Development Stack"  className="w-[350px]"
                    />
                </div>

            </div>
        </section>
    );
};

export default Banner;