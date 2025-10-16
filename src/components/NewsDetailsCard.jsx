import React from "react";
import { Link } from "react-router";

const NewsDetailsCard = ({ news }) => {
    const { title, author, image_url, details, tags,category_id } = news;

    // Format date
    const formattedDate = new Date(author?.published_date).toLocaleDateString(
        "en-US",
        {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        }
    );

    return (
        <div className="border rounded-lg overflow-hidden bg-white"
            style={{ borderColor: "#E7E7E7" }}>
            {/* Image */}
            {image_url && (
                <div className="w-full h-72 overflow-hidden p-5">
                    <img
                        src={image_url}
                        alt={title}
                        className="w-full h-full object-cover"
                    />
                </div>
            )}

            <div className="p-6">
                {/* Title */}
                <h2 className="text-xl font-bold text-gray-900 mb-3">
                    {title}
                </h2>

                {/* Meta info */}
                <p className="text-sm text-gray-500 mb-4">
                    {formattedDate} | Tag Cloud Tags:{" "}
                    {tags?.map((tag, idx) => (
                        <span key={idx} className="capitalize">
                            {tag}
                            {idx !== tags.length - 1 && ", "}
                        </span>
                    ))}
                </p>

                {/* Details */}
                <p className="text-gray-700 text-sm leading-relaxed mb-5">
                    {details}
                </p>

                {/* Button */}
                <Link to={`/category/${category_id}`}>
                    <button className="bg-pink-600 text-white text-sm px-4 py-2 rounded-md">
                        ← All news in this category
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default NewsDetailsCard;
