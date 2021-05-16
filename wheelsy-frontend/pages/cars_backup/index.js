import Link from 'next/link';
// import styles from '../../styles/Cars.module.css'

export const getStaticProps = async () => {
    
    const res = await fetch('https://private-anon-627a90850e-carsapi1.apiary-mock.com/cars')
    const data = await res.json();

    return {
        props: {
            cars: data
        }
    }
}

const AllCars = ({ cars }) => {
    return ( 
        <div className="px-4 py-4">

            <h1 className="text-6xl text-gray-700 my-4 text-center">All Cars</h1>
            <div className="grid grid-cols-3  gap-4 xs:grid-cols-2">
            {cars.map(car => (
                    <div className="max-w-sm rounded overflow-hidden shadow-md my-4">
                        <Link href={'/cars/' + car.id} key={car.id}>
                            <a>
                                <img src={car.img_url} className="object-cover h-48 w-full" />
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">{car.make} {car.model}</div>
                                    <p className="text-gray-700 text-base">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                                    </p>
                                </div>
                                <div className="px-6 pt-4 pb-2">
                                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#brandnew</span>
                                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#sports</span>
                                </div>
                            </a>
                        </Link>
                    </div>
                
            )

            )}
            </div>
        </div>
     );
}
 
export default AllCars;