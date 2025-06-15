function ServiceCard({ title, icon, description, link }) {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:scale-105 border-t-4 border-theme-green">
            <div className="mb-4">
                <img src={icon} alt="Service Icon" className="w-12 h-12 mx-auto"/>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center text-theme-dark">{title}</h3>
            <p className="text-theme-gray mb-6 text-center">{description}</p>
            <a href={link}
               className="flex items-center justify-center text-theme-green hover:text-theme-cyan font-medium transition-colors">
                Learn More
                <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"/>
                </svg>
            </a>
        </div>
    );
}

export default ServiceCard;