// src/app/_components/portfolio/PortfolioFilter.tsx

export default function PortfolioFilter({ highlight }) {
    const categories = [
        "All","Design","Development",
        "Game", "Plugin", "DevOps", "Fintech", "CRM", "ExpressJS", "Magento",
        "iOS App", "WordPress", "Smart Contract", "Firebase", "Android", "Web3", "PHP",
        "Crypto", "Chat", "Stripe", "JavaScript", "Exchange", "eCommerce", "Business", "ReactJS",
        "Solidity", "Flutter", "URL Shortener", "Web App", "React Native", "Laravel", "NextJS",
        "SaaS", "Machine Learning", "Shopify", "DApp", "Website", "Android App", "Web Application", 
        "NextJS", "AI", "Blockchain", "NFT", "Open Source", "NodeJS", "Mobile App"
    ]
    if (!highlight) highlight = "All"
    return (
        <div className="flex items-center justify-center">
            <div className="flex flex-wrap gap-4">
                {categories.map((category, index) => (
                    <a href={`/portfolio?category=${category}`} key={index} className={category === highlight ? "filter-btn bg-primary text-white" : "filter-btn"}>{category}</a>
                ))}
            </div>
        </div>
    )
}