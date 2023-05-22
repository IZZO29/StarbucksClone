import React from "react";

const NavBarComponent = () => {
    return (
        <>
            <div className="pl-5 pr-5 xl:pl-20 xl:pr-20 mt-5 xl:flex xl:justify-between xl:items-center" >
                <div className="xl:flex xl:items-center">
                    <div className="flex justify-center">
                        <img src={require("../images/logo.png")} alt="logo"
                            width={40}
                            height={40}
                            className="cursor-pointer"
                        />
                    </div>

                    <div className="flex flex-wrap justify-between">
                        <span className="xl:ml-12 ml-2 text-[#212529] font-semibold cursor-pointer underline underline-offset-8 decoration-[#00754a] decoration-2">
                            Home
                        </span>
                        <span className="xl:ml-12 ml-2 text-[#212529] font-light cursor-pointer mt-2 xl:mt-0">
                            Gift
                        </span>
                        <span className="xl:ml-12 ml-2 text-[#212529] font-light cursor-pointer mt-2 xl:mt-0">
                            Order
                        </span>
                        <span className="xl:ml-12 ml-2 text-[#212529] font-light cursor-pointer mt-2 xl:mt-0">
                            Pay
                        </span>
                        <span className="xl:ml-12 ml-2 text-[#212529] font-light cursor-pointer mt-2 xl:mt-0">
                            Store
                        </span>
                    </div>
                </div>

                <div className="flex flex-wrap justify-between items-center mt-5 xl:mt-0 xl:w-3/12">
                    <div className="relative">
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="cursor-pointer w-5 h-5 text-gray-500 dark:text-gray-400 absolute top-2 left-2"
                        >
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M18.9748 18.047L15.0698 14.1437C14.8164 13.8904 14.4031 13.8904 14.1506 14.147C13.8973 14.4037 13.8989 14.817 14.1539 15.072L18.0589 18.9754C18.1848 19.102 18.3506 19.1654 18.5164 19.1654C18.6839 19.1654 18.8514 19.1004 18.9781 18.972C19.2314 18.7154 19.2298 18.302 18.9748 18.047ZM0.833984 8.43037C0.833984 4.2412 4.24232 0.832031 8.43148 0.832031C12.6215 0.832031 16.0315 4.2412 16.0315 8.43037C16.0315 8.9262 15.9832 9.42203 15.8882 9.9037C15.819 10.2587 15.4715 10.4879 15.1248 10.4179C14.7723 10.3479 14.5432 10.0045 14.6132 9.65036C14.6915 9.2512 14.7307 8.8412 14.7307 8.43037C14.7307 4.96203 11.9048 2.13953 8.43148 2.13953C4.95898 2.13953 2.13398 4.96203 2.13398 8.43037C2.13398 11.9004 4.95898 14.7229 8.43148 14.7229C10.1882 14.7229 11.819 14.0187 13.0215 12.7404C13.2682 12.477 13.6807 12.467 13.9407 12.7154C14.2015 12.9637 14.2123 13.377 13.9657 13.6395C12.5357 15.1595 10.519 16.0304 8.43148 16.0304C4.24232 16.0304 0.833984 12.6212 0.833984 8.43037Z"
                                fill="black"
                                fill-opacity="0.58" />
                        </svg>

                        <input type="text"
                            className="text-xs border-2 p-2 rounded-3xl pl-8 w-56 focus:border-black"
                            placeholder="Looking for something specific?"
                        />
                    </div>

                    <div>
                        <svg
                            width="36"
                            height="36"
                            viewBox="0 0 36 36"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="cursor-pointer w-8 h-8"
                        >
                            <path fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M18 1.5C27.1127 1.5 34.5 8.8873 34.5 18C34.5 27.1127 27.1127 34.5 18 34.5C8.8873 34.5 1.5 27.1127 1.5 18C1.5 8.8873 8.8873 1.5 18 1.5ZM18 3.15C9.79857 3.15 3.15 9.79857 3.15 18C3.15 26.2014 9.79857 32.85 18 32.85C26.2014 32.85 32.85 26.2014 32.85 18C32.85 9.79857 26.2014 3.15 18 3.15ZM18 19.425C22.5978 19.425 26.325 23.1522 26.325 27.75C26.325 28.2056 25.9556 28.575 25.5 28.575C25.0444 28.575 24.675 28.2056 24.675 27.75C24.675 24.0635 21.6865 21.075 18 21.075C14.3135 21.075 11.325 24.0635 11.325 27.75C11.325 28.2056 10.9556 28.575 10.5 28.575C10.0444 28.575 9.675 28.2056 9.675 27.75C9.675 23.1522 13.4022 19.425 18 19.425ZM18 7.875C20.6924 7.875 22.875 10.0576 22.875 12.75C22.875 15.4424 20.6924 17.625 18 17.625C15.3076 17.625 13.125 15.4424 13.125 12.75C13.125 10.0576 15.3076 7.875 18 7.875ZM18 9.525C16.2189 9.525 14.775 10.9689 14.775 12.75C14.775 14.5311 16.2189 15.975 18 15.975C19.7811 15.975 21.225 14.5311 21.225 12.75C21.225 10.9689 19.7811 9.525 18 9.525Z"
                                fill="black"
                                fill-opacity="0.58" />
                        </svg>

                    </div>
                </div>
            </div></>
    );
};

export default NavBarComponent;