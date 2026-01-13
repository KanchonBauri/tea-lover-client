import banner from '../../../assets/banner.webp'

const Banner = () => {
    return (
        <div>
            <div className="w-full h-48 md:h-80 bg-gray-200 rounded-3xl mb-8 overflow-hidden shadow-sm relative">
                <img src={banner} className="w-full h-full object-cover" alt="Banner" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                    <h2 className="text-white text-2xl md:text-3xl font-bold">Data Privacy Matters</h2>
                </div>
            </div>
        </div>
    );
}
export default Banner;