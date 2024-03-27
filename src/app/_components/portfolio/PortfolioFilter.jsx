

export default function PortfolioFilter() {
    return (
        <div className="flex items-center justify-center">
            <div className="flex flex-wrap gap-4">
                <button className="filter-btn">All</button>
                <button className="filter-btn">Branding</button>
                <button className="filter-btn">Design</button>
                <button className="filter-btn">Development</button>
            </div>

                    {/* <div className="overflow-x-auto">
                        <ul className="filters portfolio-filter mx-auto flex w-max gap-7 whitespace-nowrap pb-2.5 font-bold dark:text-white">
                            <li className={`filter ${activeTab === 'all' ? 'active' : ''}`}>
                                <button
                                    type="button"
                                    onClick={() => setActiveTab('all')}
                                    className="rounded-[10px] bg-gray/5 py-4 px-5 leading-5 transition hover:bg-secondary hover:text-white"
                                >
                                    All Work
                                </button>
                            </li>
                            <li className={`filter ${activeTab === 'Mobile App' ? 'active' : ''}`}>
                                <button
                                    type="button"
                                    onClick={() => setActiveTab('Mobile App')}
                                    className="rounded-[10px] bg-gray/5 py-4 px-5 leading-5 transition hover:bg-secondary hover:text-white"
                                >
                                    Mobile Apps
                                </button>
                            </li>
                            <li className={`filter ${activeTab === 'Website' ? 'active' : ''}`}>
                                <button
                                    type="button"
                                    onClick={() => setActiveTab('Website')}
                                    className="rounded-[10px] bg-gray/5 py-4 px-5 leading-5 transition hover:bg-secondary hover:text-white"
                                >
                                    Websites
                                </button>
                            </li>

                            <li className={`filter ${activeTab === 'Crypto' ? 'active' : ''}`}>
                                <button
                                    type="button"
                                    onClick={() => setActiveTab('Crypto')}
                                    className="rounded-[10px] bg-gray/5 py-4 px-5 leading-5 transition hover:bg-secondary hover:text-white"
                                >
                                    Crypto
                                </button>
                            </li>
                            <li className={`filter ${activeTab === 'eCommerce' ? 'active' : ''}`}>
                                <button
                                    type="button"
                                    onClick={() => setActiveTab('eCommerce')}
                                    className="rounded-[10px] bg-gray/5 py-4 px-5 leading-5 transition hover:bg-secondary hover:text-white"
                                >
                                    eCommerce
                                </button>
                            </li>
                        </ul>
                    </div> */}
        </div>  
    )
}