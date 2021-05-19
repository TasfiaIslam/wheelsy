import Image from 'next/image'

export const getStaticPaths = async () => {
    const res = await fetch('https://private-anon-627a90850e-carsapi1.apiary-mock.com/cars');
    const data = await res.json();

    const paths = data.map( car => {
        return {
            params: { id: car.id.toString() }
        }
    })
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    // const res = await fetch('https://private-anon-627a90850e-carsapi1.apiary-mock.com/cars/' + id);
    const res = await fetch('https://private-anon-627a90850e-carsapi1.apiary-mock.com/cars/<car_id>');
    const data = await res.json();

    return {
        props: { car: data}
    }
}

const Details = ( { car }) => {
    return ( 
        <div className="mt-10 px-4 py-5 flex">
            <img className="h-50 w-1/2 sm:w-full shadow-lg rounded-lg transform hover:-translate-y-1 hover:scale-110" src={car.img_url} alt={car.model}  />
            <div className="flex flex-col w-1/2 sm:w-full ml-10">
                <h1 className="font-semibold text-4xl text-yellow-500 text-center">Car Details</h1>
                <h1 className="font-semibold text-2xl text-gray-700 uppercase ml-4">{ car.make } { car.model }</h1>
                <span className="text-yellow-500 text-2xl ml-4">Year - { car.year}</span>
                <span className="text-gray-400 text-2xl ml-4">HP - { car.horsepower}</span>
                <span className="text-gray-400 text-2xl ml-4">Price - { car.price}</span>
            </div>
        </div>
     );
}
 
export default Details;