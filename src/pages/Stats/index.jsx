import bg2 from '../../assets/images/bg2.png';
import Filler from '../Filler';
const Stats = () => {
    return (
        <div className="mx-auto h-full"
            style={{
                background: `url(${bg2})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }} >
            <div className="flex mx-auto items-center pt-20 mt-8 flex-col-reverse justify-center md:justify-between md:flex-row">
               <Filler />
            </div>
            <div className="py-20  drop-shadow-lg">
                <div className="max-w-5xl mx-auto  px-4 sm:px-6  px-8 bg-white rounded-3xl flex flex-col items-center justify-center">
                    <div className="grid grid-cols-1 sm:grid-cols-4 mt-14 ">
                        <div className="bg-white overflow-hidden   ">
                            <div className="px-4 py-5 sm:p-6">
                                <dl className="flex flex-col items-center"> <div className=" flex items-center justify-center size-20 rounded-full bg-amber-500 ">
                                    <svg className="size-10 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M10 2C8.067 2 6.5 3.567 6.5 5.5C6.5 7.433 8.067 9 10 9C11.933 9 13.5 7.433 13.5 5.5C13.5 3.567 11.933 2 10 2ZM8.5 10C6.29086 10 4.5 11.7909 4.5 14C4.5 15.1046 5.39543 16 6.5 16H13.5C14.6046 16 15.5 15.1046 15.5 14C15.5 11.7909 13.7091 10 11.5 10H8.5Z" fill="#FFF" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M15.3193 6.90358C15.4372 6.45552 15.5 5.98509 15.5 5.5C15.5 3.37184 14.2913 1.52599 12.5229 0.611493C13.0855 0.225717 13.7664 0 14.5 0C16.433 0 18 1.567 18 3.5C18 5.15086 16.857 6.53477 15.3193 6.90358ZM17.5 14H18C19.1046 14 20 13.1046 20 12C20 9.79086 18.2091 8 16 8H14.9003C14.7636 8.26743 14.6056 8.5222 14.4286 8.76207C16.2613 9.78896 17.5 11.7498 17.5 14Z" fill="#FFF" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M2 3.5C2 1.567 3.567 0 5.5 0C6.23363 0 6.91455 0.225717 7.47708 0.611493C5.70871 1.52599 4.5 3.37184 4.5 5.5C4.5 5.98509 4.5628 6.45552 4.68071 6.90358C3.14295 6.53477 2 5.15086 2 3.5ZM5.09971 8H4C1.79086 8 0 9.79086 0 12C0 13.1046 0.895431 14 2 14H2.5C2.5 11.7498 3.73868 9.78896 5.57136 8.76207C5.39438 8.5222 5.23642 8.26743 5.09971 8Z" fill="#FFF" />
                                    </svg>
                                </div>
                                    <dt className="text-xl font-medium text-gray-500 truncate">Total free servers</dt>
                                    <dd className="mt-1 text-5xl leading-9 font-semibold text-green-600">21850</dd>
                                </dl>
                            </div>
                        </div>
                        <div className="bg-white overflow-hidden ">
                            <div className="px-4 py-5 sm:p-6">
                                <dl className="flex flex-col items-center"> <div className=" flex items-center justify-center size-20 rounded-full bg-amber-500 ">
                                    <svg className="size-10 text-white" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="M4.37 7.657c2.063.528 2.396 2.806 3.202 3.87 1.07 1.413 2.075 1.228 3.192 2.644 1.805 2.289 1.312 5.705 1.312 6.705M20 15h-1a4 4 0 0 0-4 4v1M8.587 3.992c0 .822.112 1.886 1.515 2.58 1.402.693 2.918.351 2.918 2.334 0 .276 0 2.008 1.972 2.008 2.026.031 2.026-1.678 2.026-2.008 0-.65.527-.9 1.177-.9H20M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                </div>
                                    <dt className="text-xl font-medium text-gray-500 truncate">Servers a month</dt>
                                    <dd className="mt-1 text-5xl leading-9 font-semibold text-green-600">110</dd>
                                </dl>
                            </div>
                        </div>
                        <div className="bg-white overflow-hidden ">
                            <div className="px-4 py-5 sm:p-6">
                                <dl className="flex flex-col items-center"> <div className=" flex items-center justify-center size-20 rounded-full bg-amber-500 ">
                                    <svg className="size-10" xmlSpace="preserve" viewBox="0 0 100 100" y={0} x={0} xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <path fill="#454545" d="M51.031 68.362c0 .803-.654 1.542-1.454 1.622a70.88 70.88 0 0 1-17.009-.8c-.799-.156-1.451-.956-1.451-1.759V61.71c0-.804.652-1.318 1.451-1.163a70.83 70.83 0 0 0 17.009.8c.801-.08 1.454.496 1.454 1.3v5.715z" style={{ fill: 'rgb(255, 255, 255)', animationPlayState: 'paused' }} />
                                        <path fill="#454545" d="M70.663 61.524c0-.804-.651-1.309-1.45-1.147a63.1 63.1 0 0 1-14.769.922c-.8-.063-1.454.524-1.454 1.328v5.715c0 .803.654 1.53 1.454 1.593a63.046 63.046 0 0 0 14.769-.922c.799-.162 1.449-.971 1.45-1.774v-5.715z" style={{ fill: 'rgb(255, 255, 255)', animationPlayState: 'paused' }} />
                                        <path fill="#454545" d="M73.75 59.857c-.797.034-1.445.677-1.445 1.481v5.714c0 .803.648 1.474 1.445 1.44a27.178 27.178 0 0 0 4.553-.628c.795-.185 1.441-1.037 1.441-1.839V60.31c0-.804-.647-1.268-1.441-1.082a27.063 27.063 0 0 1-4.553.629z" style={{ fill: 'rgb(255, 255, 255)', animationPlayState: 'paused' }} />
                                        <path fill="#454545" d="M35.105 81.191c-.799-.145-1.452.376-1.452 1.18v4.344c0 .803.653 1.596 1.452 1.741a65.703 65.703 0 0 0 15.571.583c.801-.085 1.455-.829 1.455-1.632v-4.344c0-.804-.654-1.374-1.455-1.289a65.756 65.756 0 0 1-15.571-.583z" style={{ fill: 'rgb(255, 255, 255)', animationPlayState: 'paused' }} />
                                        <path fill="#454545" d="M39.897 73.211c0-.804-.652-1.418-1.45-1.385a70.892 70.892 0 0 1-16.75-1.767c-.794-.201-1.443.276-1.442 1.08v4.892c0 .803.648 1.641 1.442 1.841a70.893 70.893 0 0 0 16.75 1.768c.799-.033 1.45-.733 1.45-1.536v-4.893z" style={{ fill: 'rgb(255, 255, 255)', animationPlayState: 'paused' }} />
                                        <path fill="#454545" d="M43.206 72.055c-.801-.11-1.455.442-1.454 1.246v4.892c0 .803.654 1.565 1.454 1.676a75.38 75.38 0 0 0 18.326-.229c.8-.131 1.453-.909 1.453-1.712v-4.892c0-.804-.654-1.339-1.453-1.209a75.43 75.43 0 0 1-18.326.228z" style={{ fill: 'rgb(255, 255, 255)', animationPlayState: 'paused' }} />
                                        <path fill="#454545" d="M20.254 85.077c0 .803.647 1.649 1.441 1.847a42.706 42.706 0 0 0 8.865 1.121c.797.004 1.447-.677 1.447-1.48v-4.344c0-.804-.65-1.438-1.447-1.441a42.687 42.687 0 0 1-8.865-1.12c-.794-.198-1.441.271-1.441 1.075v4.342z" style={{ fill: 'rgb(255, 255, 255)', animationPlayState: 'paused' }} />
                                        <path fill="#454545" d="M64.907 77.786c0 .803.65 1.491 1.448 1.503 3.97-.018 7.979-.49 11.949-1.414.794-.2 1.441-1.042 1.441-1.846v-4.892c0-.804-.647-1.276-1.441-1.075a53.745 53.745 0 0 1-11.949 1.414 1.414 1.414 0 0 0-1.448 1.418v4.892z" style={{ fill: 'rgb(255, 255, 255)', animationPlayState: 'paused' }} />
                                        <path fill="#454545" d="M53.89 87.544c.01.804.67 1.514 1.469 1.56 7.628.182 15.346-.597 22.974-2.335.793-.208 1.433-1.047 1.423-1.848l-.053-4.336c-.01-.802-.665-1.277-1.459-1.07-7.628 1.731-15.346 2.502-22.973 2.313a1.333 1.333 0 0 0-1.434 1.365l.053 4.351z" style={{ fill: 'rgb(255, 255, 255)', animationPlayState: 'paused' }} />
                                        <path fill="#454545" d="M29.405 61.533c0-.804-.649-1.443-1.446-1.464a33.319 33.319 0 0 1-6.264-.837c-.794-.192-1.441.273-1.441 1.077v5.714c0 .803.647 1.651 1.441 1.844 2.083.481 4.181.76 6.264.837.797.02 1.446-.655 1.446-1.458v-5.713z" style={{ fill: 'rgb(255, 255, 255)', animationPlayState: 'paused' }} />
                                        <path fill="#454545" d="M65.852 12.063c-.634-.526-1.809-.937-2.612-.91H36.76c-.803-.027-1.978.384-2.612.91-6.64 5.357-13.283 10.502-19.912 15.053-.646.428-.521.877.279 1.003a460.938 460.938 0 0 0 70.972 0c.799-.126.925-.574.279-1.003-6.63-4.55-13.274-9.696-19.914-15.053z" style={{ fill: 'rgb(255, 255, 255)', animationPlayState: 'paused' }} />
                                        <path fill="#454545" d="M44.719 44.132c-.799-.156-1.323.357-1.166 1.168.569 2.939 1.139 5.868 1.71 8.786.158.805.943 1.562 1.746 1.654 1.992.13 3.99.13 5.983 0 .803-.092 1.588-.85 1.746-1.654.571-2.918 1.141-5.846 1.71-8.786.156-.811-.368-1.324-1.166-1.168-3.51.406-7.054.406-10.563 0z" style={{ fill: 'rgb(255, 255, 255)', animationPlayState: 'paused' }} />
                                        <path fill="#454545" d="M32.553 56.885c.8.068 1.455-.533 1.455-1.337V41.055c0-.803.657-1.461 1.461-1.461H64.53c.803 0 1.461.657 1.461 1.461v14.494c0 .803.655 1.405 1.455 1.337l3.427-.318c.799-.08 1.453-.803 1.453-1.606v-22.85c0-.803-.654-1.395-1.453-1.314l-3.427.318c-.8.068-1.455.781-1.455 1.584v1.618c0 .803-.657 1.461-1.461 1.461H35.469a1.465 1.465 0 0 1-1.461-1.461v-1.619c0-.803-.655-1.516-1.455-1.584l-3.427-.319a1.297 1.297 0 0 0-1.453 1.314v22.849c0 .803.654 1.527 1.453 1.607l3.427.319z" style={{ fill: 'rgb(255, 255, 255)', animationPlayState: 'paused' }} />
                                    </svg>
                                </div>
                                    <dt className="text-xl font-medium text-gray-500 truncate">Servers a week</dt>
                                    <dd className="mt-1 text-5xl leading-9 font-semibold text-green-600">7336</dd>
                                </dl>
                            </div>
                        </div>
                        <div className="bg-white overflow-hidden ">
                            <div className="px-4 py-5 sm:p-6">
                                <dl className="flex flex-col items-center"> <div className=" flex items-center justify-center size-20 rounded-full bg-amber-500 ">
                                    <svg className="size-10" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" viewBox="0 0 100 100" y="0px" x="0px" id="圖層_1" version="1.1" width="319px" height="319px" style={{ width: '100%', height: '100%', backgroundSize: 'initial', backgroundRepeat: 'initial', backgroundPositionY: 'initial', backgroundPositionX: 'initial', backgroundOrigin: 'initial', backgroundColor: 'initial', backgroundClip: 'initial', backgroundAttachment: 'initial', animationPlayState: 'paused' }}><g className="ldl-scale" style={{ transformOrigin: '50% 50%', transform: 'rotate(0deg) scale(0.52, 0.52)', animationPlayState: 'paused' }}><g style={{ animationPlayState: 'paused' }}><polygon points="91.9,85.6 81.4,85.6 82.5,38.7 90.8,38.7" fill="#E0E0E0" style={{ fill: 'rgb(249, 249, 249)', animationPlayState: 'paused' }} />
                                        <polyline points="82.5,38.7 86.7,23 90.8,38.7" fill="#F5E169" style={{ fill: 'rgb(255, 255, 255)', animationPlayState: 'paused' }} />
                                        <path d="M91.9,51H81.6c-0.7,0-1.3-0.6-1.3-1.3l0,0c0-0.7,0.6-1.3,1.3-1.3h10.3c0.7,0,1.3,0.6,1.3,1.3l0,0 C93.3,50.4,92.7,51,91.9,51z" fill="#E0E0E0" style={{ fill: 'rgb(249, 249, 249)', animationPlayState: 'paused' }} />
                                        <path d="M91.9,61H81.6c-0.7,0-1.3-0.6-1.3-1.3l0,0c0-0.7,0.6-1.3,1.3-1.3h10.3c0.7,0,1.3,0.6,1.3,1.3l0,0 C93.3,60.4,92.7,61,91.9,61z" fill="#E0E0E0" style={{ fill: 'rgb(249, 249, 249)', animationPlayState: 'paused' }} /></g>
                                        <g style={{ animationPlayState: 'paused' }}><polygon points="8.1,85.6 18.6,85.6 17.5,38.7 9.2,38.7" fill="#E0E0E0" style={{ fill: 'rgb(249, 249, 249)', animationPlayState: 'paused' }} />
                                            <polyline points="17.5,38.7 13.3,23 9.2,38.7" fill="#F5E169" style={{ fill: 'rgb(255, 255, 255)', animationPlayState: 'paused' }} />
                                            <path d="M8.1,51h10.3c0.7,0,1.3-0.6,1.3-1.3l0,0c0-0.7-0.6-1.3-1.3-1.3H8.1c-0.7,0-1.3,0.6-1.3,1.3l0,0 C6.8,50.4,7.3,51,8.1,51z" fill="#E0E0E0" style={{ fill: 'rgb(249, 249, 249)', animationPlayState: 'paused' }} />
                                            <path d="M8.1,61h10.3c0.7,0,1.3-0.6,1.3-1.3l0,0c0-0.7-0.6-1.3-1.3-1.3H8.1c-0.7,0-1.3,0.6-1.3,1.3l0,0 C6.8,60.4,7.3,61,8.1,61z" fill="#E0E0E0" style={{ fill: 'rgb(249, 249, 249)', animationPlayState: 'paused' }} /></g>
                                        <g style={{ animationPlayState: 'paused' }}><linearGradient y2="73.2951" x2="59.6269" y1="25.0289" x1="40.5831" gradientUnits="userSpaceOnUse" id="SVGID_1_" style={{ animationPlayState: 'paused' }}><stop offset={0} style={{ stopColor: 'rgb(255, 255, 255)', fill: 'rgb(255, 255, 255)', animationPlayState: 'paused' }} />
                                            <stop offset={1} style={{ stopColor: 'rgb(255, 255, 255)', fill: 'rgb(255, 255, 255)', animationPlayState: 'paused' }} /></linearGradient>
                                            <path d="M77.4,49.5c0,13.6-12.3,18.6-27.4,18.6s-27.4-5-27.4-18.6C22.6,24.4,50,36.4,50,14.4 C50,36.1,77.4,24.4,77.4,49.5z" fill="url(#SVGID_1_)" style={{ animationPlayState: 'paused' }} />
                                            <path d="M75.9,59.7H24.1c-0.8,0-1.5-0.7-1.5-1.5V58c0-0.8,0.7-1.5,1.5-1.5h51.9c0.8,0,1.5,0.7,1.5,1.5v0.2 C77.4,59,76.8,59.7,75.9,59.7z" fill="#F8B26A" style={{ fill: 'rgb(249, 249, 249)', animationPlayState: 'paused' }} />
                                            <path d="M75.4,62.4H24.6c-0.8,0-1.5-0.7-1.5-1.5v-0.2c0-0.8,0.7-1.5,1.5-1.5h50.9c0.8,0,1.5,0.7,1.5,1.5v0.2 C76.9,61.7,76.2,62.4,75.4,62.4z" fill="#F8B26A" style={{ fill: 'rgb(249, 249, 249)', animationPlayState: 'paused' }} /></g>
                                        <g style={{ animationPlayState: 'paused' }}><rect height={23} width="46.4" fill="#E0E0E0" y="62.6" x="26.8" style={{ fill: 'rgb(249, 249, 249)', animationPlayState: 'paused' }} />
                                            <path d="M56.7,85.6H43.3v-10c0-3.1,2-5.7,4.8-7c0.8-0.4,1.5-1,1.8-1.9c0-0.1,0.2-0.1,0.2,0c0.3,1,0.9,1.6,1.8,1.9 c2.8,1.3,4.8,3.9,4.8,7V85.6z" fill="#333333" style={{ fill: 'rgb(249, 249, 249)', animationPlayState: 'paused' }} />
                                            <path d="M68.2,85.6h-8.3v-8.1c0-2.5,1.2-4.6,3-5.6c0.5-0.3,0.9-0.8,1.1-1.6c0-0.1,0.1-0.1,0.1,0 c0.2,0.8,0.6,1.3,1.1,1.6c1.8,1,3,3.1,3,5.6V85.6z" fill="#333333" style={{ fill: 'rgb(249, 249, 249)', animationPlayState: 'paused' }} />
                                            <path d="M31.8,85.6h8.3v-8.1c0-2.5-1.2-4.6-3-5.6c-0.5-0.3-0.9-0.8-1.1-1.6c0-0.1-0.1-0.1-0.1,0 c-0.2,0.8-0.6,1.3-1.1,1.6c-1.8,1-3,3.1-3,5.6V85.6z" fill="#333333" style={{ fill: 'rgb(249, 249, 249)', animationPlayState: 'paused' }} />
                                            <line y2="85.6" x2="5.8" y1="85.6" x1="94.2" strokeMiterlimit={10} strokeLinecap="round" strokeWidth={3} stroke="#E0E0E0" fill="none" style={{ stroke: 'rgb(249, 249, 249)', animationPlayState: 'paused' }} /></g>
                                    </g></svg>
                                </div>
                                    <dt className="text-xl font-medium text-gray-500 truncate">Total users</dt>
                                    <dd className="mt-1 text-5xl leading-9 font-semibold text-green-600">1108</dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center py-10">
                        <button type="button" className="text-white bg-amber-500 hover:bg-amber-900/90 focus:ring-4 focus:outline-none focus:ring-green-700/50 font-medium rounded-3xl text-sm px-5 py-2.5 text-center inline-flex items-center  me-2 mb-2">
                            <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                                <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd" />
                            </svg>
                            قم بتسجيل الدخول باستخدام
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;