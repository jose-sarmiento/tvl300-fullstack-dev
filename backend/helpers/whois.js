/**
 * Fetches domain information from the Whois API.
 *
 * @param {string} domainName - The domain name to query.
 * @param {string} [outputFormat="JSON"] - The format in which to receive the response (e.g., "JSON").
 * @returns {Promise<object>} The domain information in the specified format.
 */
export async function getDomainInfo(domainName, outputFormat = "JSON") {
    try {
        const response = await fetch(
            `${process.env.WHOIS_API_ENDPOINT}/WhoisService?apiKey=${process.env.WHOIS_API_KEY}&domainName=${domainName}&outputFormat=${outputFormat}`
        );

        if (!response.ok) {
            throw new Error(
                `Error fetching domain info: ${response.statusText}`
            );
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Failed to fetch domain info:", error);
        throw error; // Re-throw the error to be handled by the calling code
    }
}
