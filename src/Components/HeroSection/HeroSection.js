

export default function HeroSection({ }) {

    return (
        <section className="min-h-screen grid place-content-center transition ease-in-out radial-blue">
            <div className="bg-emerald-400 w-52 h-52 rounded-full shadow-2xl grid place-content-center">
                <div className="bg-teal-200 w-32 h-32 rounded-full hover:w-48 hover:h-48 grid place-content-center">
                    <div className="bg-red-500 w-16 h-16 rounded-full hover:w-32 hover:h-32"></div>
                </div>
            </div>
        </section>
    )
}