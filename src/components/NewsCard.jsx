import React from "react";
import { FaEye, FaStar, FaRegBookmark, FaShareAlt } from "react-icons/fa";

const NewsCard = ({ singleUser }) => {
    const {
        title,
        thumbnail_url,
        author,
        details,
        rating,
        total_view,
        tags,
    } = singleUser;

    const formattedDate = new Date(author.published_date).toLocaleDateString(
        "en-US",
        { year: "numeric", month: "long", day: "numeric" }
    );

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition duration-300 max-w-2xl mx-auto">
            {/* ======= HEADER ======= */}
            <div className="flex justify-between items-center px-5 py-4 bg-base-200">
                <div className="flex items-center gap-3 ">
                    <img
                        src={author.img}
                        alt={author.name}
                        className="w-11 h-11 rounded-full object-cover border"
                    />
                    <div>
                        <h3 className="font-semibold text-gray-800">{author.name}</h3>
                        <p className="text-sm text-gray-500">{formattedDate}</p>
                    </div>
                </div>

                <div className="flex items-center gap-4 text-gray-500 text-lg">
                    <FaRegBookmark className="cursor-pointer hover:text-gray-700" />
                    <FaShareAlt className="cursor-pointer hover:text-gray-700" />
                </div>
            </div>

            {/* ======= TITLE ======= */}
            <h2 className="px-5 text-lg font-bold text-gray-900 leading-snug">
                {title}
            </h2>

            {/* ======= IMAGE ======= */}
            {thumbnail_url && (
                <div className="mt-3">
                    <img
                        src={thumbnail_url}
                        alt="News thumbnail"
                        className="w-full h-52 object-cover px-5 rounded-lg"
                    />
                </div>
            )}

            {/* ======= DESCRIPTION ======= */}
            <div className="px-5 py-4">
                <p className="text-gray-600 text-[15px] leading-relaxed">
                    {details.slice(0, 230)}...
                    <span className="text-orange-600 font-semibold cursor-pointer hover:underline">
                        Read More
                    </span>
                </p>

                {/* Tags */}
                <div className="mt-3 text-sm text-gray-500">
                    <span className="font-semibold text-gray-700">Tags:</span>{" "}
                    {tags?.join(", ")}
                </div>
            </div>

            {/* ======= FOOTER ======= */}
            <div className="flex items-center justify-between border-t px-5 py-3">
                <div className="flex items-center gap-1 text-orange-500">
                    {Array.from({ length: Math.round(rating.number) }).map((_, i) => (
                        <FaStar key={i} />
                    ))}
                    <span className="text-gray-700 ml-1 text-sm font-medium">
                        {rating.number.toFixed(1)}
                    </span>
                </div>

                <div className="flex items-center gap-1 text-gray-500 text-sm">
                    <FaEye />
                    <span>{total_view.toLocaleString()}</span>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
