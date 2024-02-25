import Filler from "../Filler";

const Tabs = () => {
    return (<section className="w-full max-w-screen-2xl mx-auto ">
        <div className="text-lg font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 ">
           <Filler />
            {/* This is an example component */}
            <div className="max-w-screen-2xl">
                <div className="border-b border-gray-200  ">
                    <ul className="flex flex-wrap justify-center" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                        <li className role="presentation">
                            <button className="inline-block text-gray-500 active bg-gray-100 hover:text-gray-600 hover:border-gray-300 transition-colors text-green-700 border-green-700  border-t-8 rounded-t-lg py-4 px-4 text-lg font-medium text-center  " id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="true">
                                Profile
                            </button>
                        </li>
                        <li className role="presentation">
                            <button className="inline-block text-gray-500 bg-gray-100 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-lg font-medium text-center border-transparent " id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Dashboard</button>
                        </li>
                        <li className role="presentation">
                            <button className="inline-block text-gray-500 bg-gray-100 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-lg font-medium text-center border-transparent border-b-2 " id="settings-tab" data-tabs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false">Settings</button>
                        </li>
                        <li role="presentation">
                            <button className="inline-block text-gray-500 bg-gray-100 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-lg font-medium text-center border-transparent border-b-2 " id="contacts-tab" data-tabs-target="#contacts" type="button" role="tab" aria-controls="contacts" aria-selected="false">Contacts</button>
                        </li>
                    </ul>
                </div>
                <div id="myTabContent">
                    <div className="bg-gray-200 py-4 rounded-lg  " id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        <div className="flex justify-center">
                            <div className=" grid max-w-5xl  md:grid-cols-3 md:gap-5  sm:grid-cols-1 sm:gap-1 ">
                                {/* card */}
                                <div className="bg-white border border-gray-200 rounded-3xl shadow  ">
                                    <div className="px-0 py-3">
                                        <div className="flex items-center justify-start">
                                            <svg className="w-7 h-7 items-center  text-green-700 dark:text-gray-400 m-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24">
                                                <path stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="M7.926 10.898 15 7.727m-7.074 5.39L15 16.29M8 12a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm12 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm0-11a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
                                            </svg>
                                            <h3 className="mx-28 text-green-700  text-2xl"> texttext </h3>
                                        </div>
                                        <a href="#">
                                            <img className="rounded-t-3xl" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt />
                                            <div className=" ml-32 relative text-white bg-green-800" style={{ marginTop: '-20px' }}> 81% </div>
                                        </a>
                                        <div className="pt-5">
                                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                            <a href="#">
                                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Noteworthy technology <span className="text-amber-500 font-bold">acquisitions</span> 2021</h5>
                                            </a>
                                            <div className="flex items-center justify-between flex-row-reverse ">
                                                <button type="button" className="text-gray-500 hover:text-green-700 border border-gray-00 hover:bg-green-200 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-full text-lg px-5 py-2.5 text-center me-2 mb-2">Default &nbsp; &nbsp; &nbsp; &nbsp;    Default</button>
                                                <div className="flex items-center justify-between flex-row-reverse " />
                                                <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-lg px-5 py-2.5 text-center me-2 mb-2">Default</button>
                                                <button type="button" className="text-green-700 border border-green-700 hover:bg-green-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-full text-lg p-2.5 text-center inline-flex items-center">
                                                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                                                        <path d="M3 7H1a1 1 0 0 0-1 1v8a2 2 0 0 0 4 0V8a1 1 0 0 0-1-1Zm12.954 0H12l1.558-4.5a1.778 1.778 0 0 0-3.331-1.06A24.859 24.859 0 0 1 6 6.8v9.586h.114C8.223 16.969 11.015 18 13.6 18c1.4 0 1.592-.526 1.88-1.317l2.354-7A2 2 0 0 0 15.954 7Z" />
                                                    </svg>
                                                    <span className="sr-only">Icon description</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="flex items-center justify-center pt-3 ">
                                        <button type="button" className="text-gray-500 hover:text-green-700   hover:bg-green-200 font-medium rounded-full text-lg px-5 py-2.5 text-center me-2 mb-2">Default</button>
                                    </div>
                                </div>
                                {/* card */}
                                <div className="bg-white border border-gray-200 rounded-3xl shadow  ">
                                    <div className="px-0 py-3">
                                        <div className="flex items-center justify-start">
                                            <svg className="w-7 h-7 items-center  text-green-700 dark:text-gray-400 m-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24">
                                                <path stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="M7.926 10.898 15 7.727m-7.074 5.39L15 16.29M8 12a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm12 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm0-11a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
                                            </svg>
                                            <h3 className="mx-28  text-green-700  text-xl md:text-2xl"> texttext </h3>
                                        </div>
                                        <a href="#">
                                            <img className="rounded-t-3xl" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt />
                                            <div className=" ml-32 relative text-white bg-green-800" style={{ marginTop: '-20px' }}> 81% </div>
                                        </a>
                                        <div className="pt-5">
                                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                            <a href="#">
                                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Noteworthy technology <span className="text-amber-500 font-bold">acquisitions</span> 2021</h5>
                                            </a>
                                            <div className="flex items-center justify-between flex-row-reverse ">
                                                <button type="button" className="text-gray-500 hover:text-green-700 border border-gray-00 hover:bg-green-200 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-full text-lg px-5 py-2.5 text-center me-2 mb-2">Default &nbsp; &nbsp; &nbsp; &nbsp;    Default</button>
                                                <div className="flex items-center justify-between flex-row-reverse " />
                                                <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-lg px-5 py-2.5 text-center me-2 mb-2">Default</button>
                                                <button type="button" className="text-green-700 border border-green-700 hover:bg-green-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-full text-lg p-2.5 text-center inline-flex items-center">
                                                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                                                        <path d="M3 7H1a1 1 0 0 0-1 1v8a2 2 0 0 0 4 0V8a1 1 0 0 0-1-1Zm12.954 0H12l1.558-4.5a1.778 1.778 0 0 0-3.331-1.06A24.859 24.859 0 0 1 6 6.8v9.586h.114C8.223 16.969 11.015 18 13.6 18c1.4 0 1.592-.526 1.88-1.317l2.354-7A2 2 0 0 0 15.954 7Z" />
                                                    </svg>
                                                    <span className="sr-only">Icon description</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="flex items-center justify-center pt-3 ">
                                        <button type="button" className="text-gray-500 hover:text-green-700   hover:bg-green-200 font-medium rounded-full text-lg px-5 py-2.5 text-center me-2 mb-2">Default</button>
                                    </div>
                                </div>
                                {/* card */}
                                <div className="bg-white border border-gray-200 rounded-3xl shadow  ">
                                    <div className="px-0 py-3">
                                        <div className="flex items-center justify-start">
                                            <svg className="w-7 h-7 items-center  text-green-700 dark:text-gray-400 m-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24">
                                                <path stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="M7.926 10.898 15 7.727m-7.074 5.39L15 16.29M8 12a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm12 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm0-11a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
                                            </svg>
                                            <h3 className="mx-28  text-green-700  text-2xl"> texttext </h3>
                                        </div>
                                        <a href="#">
                                            <img className="rounded-t-3xl" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt />
                                            <div className=" ml-32 relative text-white bg-green-800" style={{ marginTop: '-20px' }}> 81% </div>
                                        </a>
                                        <div className="pt-5">
                                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                            <a href="#">
                                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Noteworthy technology <span className="text-amber-500 font-bold">acquisitions</span> 2021</h5>
                                            </a>
                                            <div className="flex items-center justify-between flex-row-reverse ">
                                                <button type="button" className="text-gray-500 hover:text-green-700 border border-gray-00 hover:bg-green-200 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-full text-lg px-5 py-2.5 text-center me-2 mb-2">Default &nbsp; &nbsp; &nbsp; &nbsp;    Default</button>
                                                <div className="flex items-center justify-between flex-row-reverse " />
                                                <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-lg px-5 py-2.5 text-center me-2 mb-2">Default</button>
                                                <button type="button" className="text-green-700 border border-green-700 hover:bg-green-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-full text-lg p-2.5 text-center inline-flex items-center">
                                                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                                                        <path d="M3 7H1a1 1 0 0 0-1 1v8a2 2 0 0 0 4 0V8a1 1 0 0 0-1-1Zm12.954 0H12l1.558-4.5a1.778 1.778 0 0 0-3.331-1.06A24.859 24.859 0 0 1 6 6.8v9.586h.114C8.223 16.969 11.015 18 13.6 18c1.4 0 1.592-.526 1.88-1.317l2.354-7A2 2 0 0 0 15.954 7Z" />
                                                    </svg>
                                                    <span className="sr-only">Icon description</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="flex items-center justify-center pt-3 ">
                                        <button type="button" className="text-gray-500 hover:text-green-700   hover:bg-green-200 font-medium rounded-full text-lg px-5 py-2.5 text-center me-2 mb-2">Default</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg  hidden" id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
                    <p className="text-gray-500 dark:text-gray-400 text-lg">This is some placeholder content the <strong className="font-medium text-gray-800 ">Dashboard tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg  hidden" id="settings" role="tabpanel" aria-labelledby="settings-tab">
                    <p className="text-gray-500 dark:text-gray-400 text-lg">This is some placeholder content the <strong className="font-medium text-gray-800 ">Settings tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg  hidden" id="contacts" role="tabpanel" aria-labelledby="contacts-tab">
                    <p className="text-gray-500 dark:text-gray-400 text-lg">This is some placeholder content the <strong className="font-medium text-gray-800 ">Contacts tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
                </div>
            </div>
        </div>
    </section>
    );
}

export default Tabs;