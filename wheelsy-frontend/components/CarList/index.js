import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import Link from "next/link";


const QUERY = gql`
  {
    cars {
      id
      model
      make
      year
      hp
      img_url {
        url
      }
    }
  }
`;

function CarList(props) {
    const { loading, error, data } = useQuery(QUERY);
    if (error) return "Error loading cars";
    //if cars are returned from the GraphQL query, run the filter query
    //and set equal to variable carsearch
    if (loading) return <h1>Fetching</h1>;
    if (data.cars && data.cars.length) {
      //searchQuery
      const searchQuery = data.cars.filter((query) =>
        query.model.toLowerCase().includes(props.search) ||
        query.make.toLowerCase().includes(props.search)
      );
      if (searchQuery.length != 0) {
        return (
            <div className="px-4 pb-2">
                <h1 className="text-4xl my-4 text-center text-black">All Cars</h1>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    {searchQuery.map((car) => (
                        <div className="max-w-sm rounded overflow-hidden shadow-md my-4" key={car.id}>
                            <Link href={'/cars/' + car.id}>
                                <a>
                                    <img src={`${process.env.NEXT_PUBLIC_API_URL}${car.img_url[0].url}`} className="object-cover h-48 w-full transition duration-300 filter grayscale-0 hover:grayscale" />
                                    
                                    <div className="px-6 py-4">
                                        <div className="font-bold text-xl mb-2 text-red-500">{car.make} {car.model}</div>
                                        <p className="text-gray-700 text-base">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                                        </p>
                                    </div>
                                    <div className="px-6 pt-4 pb-2">
                                        <span className="inline-block bg-gray-50 shadow-md rounded-full px-2 md:px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#brandnew</span>
                                        <span className="inline-block bg-gray-50 shadow-md rounded-full px-2 md:px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                                        <span className="inline-block bg-gray-50 shadow-md rounded-full px-2 md:px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#sports</span>
                                    </div>
                                </a>
                            </Link>
                        </div>
                    ))}
            </div>
          </div>
        );
      } else {
        return <h1>No Car Found</h1>;
      }
    }
    return <h5>Add Car</h5>;
  }
  export default CarList;