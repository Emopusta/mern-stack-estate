import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import ListingItem from "../components/ListingItem";

export default function Home() {
  SwiperCore.use([Navigation]);
  const [offerListings, setOfferListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);

  const fetchOfferListing = async () => {
    try {
      const res = await fetch("/api/listing/get?offer=true&limit=4");
      const data = await res.json();
      setOfferListings(data);
      fetchRentListing();
    } catch (error) {
      console.log(error);
    }
  };
  const fetchRentListing = async () => {
    try {
      const res = await fetch("/api/listing/get?type=rent&limit=4");
      const data = await res.json();
      setRentListings(data);
      fetchSaleListing();
    } catch (error) {
      console.log(error);
    }
  };
  const fetchSaleListing = async () => {
    try {
      const res = await fetch("/api/listing/get?type=sale&limit=4");
      const data = await res.json();
      setSaleListings(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchOfferListing();
  }, []);
  return (
    <div>
      {/* top */}
      <div className="flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto">
        <h1 className="text-slate-700 font-bold text-3xl lg:text-6xl">
          Find your next <span className="text-slate-500">perfect </span>
          <br />
          place with ease
        </h1>
        <div className="text-gray-400 text-xs sm:text-sm">
          Emopusta Estate will help you find your new home <br /> We have lots
          of amazing properties for you.
        </div>
        <Link
          className="text-xs sm:text-sm text-blue-800 hover:underline font-semibold"
          to={"/search"}
        >
          Let's get started...
        </Link>
      </div>
      {/* swiper */}

      <Swiper navigation>
        {offerListings &&
          offerListings.length > 0 &&
          offerListings.map((listing) => (
            <SwiperSlide>
              <div
                className="h-[500px]"
                key={listing._id}
                style={{
                  background: `url(${listing.imageUrls[0]}) center no-repeat`,
                  backgroundSize: "cover",
                }}
              ></div>
            </SwiperSlide>
          ))}
      </Swiper>

      {/* listing results for offer, sale and rent */}

      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10">
        {offerListings && offerListings.length > 0 && (
          <div className="">
            <div className="my-3">
              <h2 className="text-2xl font-semibold text-slate-600">
                Recent Offers
              </h2>
              <Link
                to={"/search?offer=true"}
                className="text-blue-600 text-sm hover:underline"
              >
                Show more offers
              </Link>
            </div>
            <div className="p-7 flex flex-wrap gap-4">
              {offerListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id}></ListingItem>
              ))}
            </div>
          </div>
        )}
         {rentListings && rentListings.length > 0 && (
          <div className="">
            <div className="my-3">
              <h2 className="text-2xl font-semibold text-slate-600">
                Recent places for rent
              </h2>
              <Link
                to={"/search?type=rent"}
                className="text-blue-600 text-sm hover:underline"
              >
                Show more offers
              </Link>
            </div>
            <div className="p-7 flex flex-wrap gap-4">
              {rentListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id}></ListingItem>
              ))}
            </div>
          </div>
        )}
         {saleListings && saleListings.length > 0 && (
          <div className="">
            <div className="my-3">
              <h2 className="text-2xl font-semibold text-slate-600">
                Recent Offers
              </h2>
              <Link
                to={"/search?type=sale"}
                className="text-blue-600 text-sm hover:underline"
              >
                Show more offers
              </Link>
            </div>
            <div className="p-7 flex flex-wrap gap-4">
              {saleListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id}></ListingItem>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
