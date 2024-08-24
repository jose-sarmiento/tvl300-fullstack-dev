import React from "react";
import Error from "../Error/Error";

const DomainForm = ({
    form,
    error,
    handleChange,
    handleSubmit,
    handleErrorCLose,
    isLoading,
}) => {
    return (
        <div className="max-w-lg mx-auto mb-12">
            <form className="mb-6 shadow-md px-2 py-6" onSubmit={handleSubmit}>
                {/* Domain Name Input */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-xs font-medium mb-2">
                        Domain Name
                    </label>
                    <input
                        type="text"
                        name="domain"
                        value={form.domain}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                        placeholder="Enter domain name"
                        required
                    />
                </div>

                {/* Select Information Type */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                        Information Type
                    </label>
                    <select
                        name="infoType"
                        value={form.infoType}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                    >
                        <option className="text-sm" value="all">
                            All
                        </option>
                        <option className="text-sm" value="domain">
                            Domain Information
                        </option>
                        <option className="text-sm" value="contact">
                            Contact Information
                        </option>
                    </select>
                </div>

                {error && (
                    <Error text={error} handleErrorCLose={handleErrorCLose} />
                )}

                {/* Submit Button */}
                <button
                    type="submit"
                    className="px-4 py-2 bg-gray-700 text-white mx-auto rounded-md hover:bg-gray-600 transition isabled:cursor-not-allowed disabled:bg-gray-400"
                    disabled={isLoading}
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default DomainForm;
