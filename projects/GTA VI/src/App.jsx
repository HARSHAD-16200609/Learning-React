import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { useState } from 'react'


function App() {
    const [showingContent, setShowingContent] = useState(false)
    useGSAP(() => {
        const tl = gsap.timeline();

        tl.to(".vi-mask-group", {
            rotate: 15,
            duration: 2,
            ease: "Power4.easeInOut",
            transformOrigin: "50% 50%",
        })
            .to('.vi-mask-group', {
                scale: 10,
                duration: 2,
                ease: "Expo.easeInOut",
                delay: -1.8,
                transformOrigin: "50% 50%",
                opacity: 0,
                onUpdate: function () {
                    if (this.progress() >= 0.9) {
                        document.querySelector('.svg').remove()
                        this.kill();
                        setShowingContent(true)
                    }
                }
            })


    })


    useGSAP(() => {
        if (!showingContent) return;

        gsap.to(".main", {
            scale: 1,
            rotate: 0,
            duration: 2,
            delay: "-1",
            ease: "Expo.easeInOut",
        });

        gsap.to(".sky", {
            scale: 1.1,
            rotate: 0,
            duration: 2,
            delay: "-.8",
            ease: "Expo.easeInOut",
        });

        gsap.to(".bg", {
            scale: 1.2,
            rotate: 0,
            duration: 2,
            delay: "-.8",
            ease: "Expo.easeInOut",
        });

        gsap.to(".girl", {
            scale: 1.4,
            x: "0%",
            bottom: "-5%",
            rotate: 0,
            duration: 2,
            delay: "-.8",
            ease: "Expo.easeInOut",
        });

        gsap.to(".text", {
            scale: 1,
            rotate: 0,
            duration: 2,
            delay: "-.8",
            ease: "Expo.easeInOut",
        });

        const main = document.querySelector(".main");

        main?.addEventListener("mousemove", function (e) {
            const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
            gsap.to(".main .text", {
                x: `${xMove * 0.4}%`,
            });
            gsap.to(".sky", {
                x: xMove,
            });
            gsap.to(".bg", {
                x: xMove * 1.7,
            });
        });
    }, [showingContent])


    return (<>
        <div
            className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
            <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
                <defs>
                    <mask id="viMask">
                        <rect width="100%" height="100%" fill="black" />
                        <g className="vi-mask-group">
                            <text
                                x="50%"
                                y="50%"
                                fontSize="250"
                                textAnchor="middle"
                                fill="white"
                                dominantBaseline="middle"
                                fontFamily="Arial Black"
                            >
                                VI
                            </text>
                        </g>
                    </mask>
                </defs>
                <image
                    href="/bg.png"
                    width="100%"
                    height="100%"
                    preserveAspectRatio="xMidYMid slice"
                    mask="url(#viMask)"
                />
            </svg>
        </div>


        {showingContent && <div
            className="main w-full">
            <div
                className="landing w-full  h-screen relative flex items-center justify-center  overflow-hidden">
                <div className="navbar absolute top-0 left-0 z-[10] w-full py-10 px-10 ">

                    <div className="logo flex gap-7 mt-8">
                        <div className="lines flex flex-col gap-[5px] p-4">
                            <div className="line w-14 h-2 bg-white"></div>
                            <div className="line w-6 h-2 bg-white"></div>
                            <div className="line w-3 h-2 bg-white"></div>

                        </div>
                        <h3 className=" rock text-3xl  leading-none text-white ">Rockstar</h3>
                    </div>

                </div>

                <div className="imagesdiv relative overflow-hidden w-full h-screen ">

                    <img src="./sky.png" className="sky scale-[1.5] absolute top-0 left-0 z-[0] w-full h-full object-cover"></img>
                    <img src="./bg.png" className="bg absolute top-0 left-0 z-1 w-full h-full object-cover"></img>
                    <div className="text text-white flex flex-col absolute top-20 left-1/2 -translate-x-1/2  z-[2]">
                        <h1 className="text-[8rem] leading-none -translate-x-24">grand</h1>
                        <h1 className="text-[8rem] leading-none -translate-x-8">theft</h1>
                        <h1 className="text-[8rem] leading-none -translate-x-12">auto</h1>
                    </div>
                    <img src="./girlbg.png"
                        className="girl absolute left-1/2 bottom-[-12%] -translate-x-1/2 w-1/4 z-[3] scale-[1.4] "></img>


                </div>


                <div
                    className="btmbar text-white absolute bottom-0 left-0 w-full py-15 px-10 bg-gradient-to-t from-black to-transparent z-[12] ">
                    <div className="icon-cont flex gap-4 items-center ">
                        <i className="text-2xl ri-arrow-down-line"></i>
                        <h3 className="text-xs font-[Helvetica_Now_Display]">
                            Scroll Down
                        </h3>
                    </div>
                    <img
                        className="absolute h-[45px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[12]"
                        src="./ps5.png"
                        alt=""
                    />
                </div>

            </div>
            <div className="w-full h-screen flex items-center justify-center bg-black overflow-hidden">
                <div className="cntnr flex text-white w-full h-[80%] ">
                    <div className="limg relative w-1/2 h-full">
                        <img
                            className="absolute scale-[1.3] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                            src="./imag.png"
                            alt=""
                        />
                    </div>
                    <div className="rg w-[30%] py-30">
                        <h1 className="text-5xl">Still Running,</h1>
                        <h1 className=" not text-5xl mb-12">Not Hunting</h1>
                        <p className=" text-xl font-[Helvetica_Now_Display]">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Distinctio possimus, asperiores nam, omnis inventore nesciunt
                            a architecto eveniet saepe, ducimus necessitatibus at
                            voluptate.
                        </p>
                        <p className="mt-3 text-xl font-[Helvetica_Now_Display]">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                            eius illum fugit eligendi nesciunt quia similique velit
                            excepturi soluta tenetur illo repellat consectetur laborum
                            eveniet eaque, dicta, hic quisquam? Ex cupiditate ipsa nostrum
                            autem sapiente.
                        </p>
                        <p className="mt-10 text-xl font-[Helvetica_Now_Display]">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                            eius illum fugit eligendi nesciunt quia similique velit
                            excepturi soluta tenetur illo repellat consectetur laborum
                            eveniet eaque, dicta, hic quisquam? Ex cupiditate ipsa nostrum
                            autem sapiente.
                        </p>
                        <button className="download bg-yellow-500 px-10 py-10 text-black mt-10 text-4xl">
                            Download Now
                        </button>
                    </div>
                </div>
            </div>
        </div>


        }

    </>


    )
}

export default App