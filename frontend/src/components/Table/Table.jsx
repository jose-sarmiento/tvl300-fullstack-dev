import React from "react";
import moment from "moment";

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function snakeCaseToString(str) {
    return str
        .split("_")
        .map(
            (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join(" ");
}

const Table = ({ data, infoType }) => {
    let tempData = { ...data };
    delete tempData.domain_name;
    const noData = Object.values(tempData).every((element) => element === null);

    const dateFields = ["registration_date", "expiration_date"];

    return (
        <div className="overflow-x-auto mb-8 max-w-[65rem] mx-auto">
            <h2 className="heading text-md">{`${capitalize(
                infoType
            )} Information`}</h2>

            <table className="w-full border-collapse border border-gray-200 rounded-lg max-w-full">
                <thead>
                    <tr className="bg-gray-200">
                        {Object.keys(data).map((columnHead, index) => (
                            <th
                                key={index}
                                className="px-2 py-2 text-left text-gray-700 text-xs font-medium"
                            >
                                {snakeCaseToString(columnHead)}
                            </th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {!noData && (
                        <tr className="border-b border-gray-200">
                            {Object.entries(data).map(([key, value], index) => {
                                if (dateFields.includes(key)) {
                                    value = moment(value).format(
                                        "MMMM Do, YYYY, h:mm A (Z)"
                                    );
                                }

                                if (key === "estimated_domain_age") {
                                    value = value + " days";
                                }
                                return (
                                    <td
                                        key={key} // Use the key here for uniqueness
                                        className="px-2 py-2 text-gray-900 text-xs duration-100 ease-in-out hover:bg-gray-100"
                                    >
                                        {value}
                                    </td>
                                );
                            })}
                        </tr>
                    )}
                </tbody>
            </table>
            {noData && (
                <div className=" flex justify-center">
                    <span className="text-gray-300 text-sm">No data</span>
                </div>
            )}
        </div>
    );
};

export default Table;
