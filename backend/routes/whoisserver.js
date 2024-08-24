import express from "express";
import { formatHostnames } from "../helpers/utils.js";
import { getDomainInfo } from "../helpers/whois.js";

const router = express.Router();

/**
 * Picks specific fields from the domain information data.
 *
 * @param {object} data - The domain information data retrieved from the API.
 * @param {string} [fields] - A comma-separated list of field names to include in the response. If not provided, all fields are included.
 * @returns {object} An object containing only the specified fields, or all fields if none are specified.
 */
function pickFields(data, type) {
    const requiredData = {
        domain_info: {
            domain_name: data?.WhoisRecord?.registryData?.domainName || null,
            registrar_name:
                data?.WhoisRecord?.registryData?.registrarName || null,
            registration_date: data?.WhoisRecord?.createdDate || null,
            expiration_date: data?.WhoisRecord?.expiresDate || null,
            estimated_domain_age: data?.WhoisRecord?.estimatedDomainAge || null,
            host_names: formatHostnames(
                data?.WhoisRecord?.nameServers?.hostNames
            ),
        },
        contact_info: {
            registrant_name:
                data?.WhoisRecord?.registrant?.organization || null,
            technical_contact_name:
                data?.WhoisRecord?.technicalContact?.organization || null,
            administrative_contact_name:
                data?.WhoisRecord?.administrativeContact?.organization || null,
            contact_email: data?.WhoisRecord?.contactEmail || null,
        },
    };

    // If no fields are specified, return all the required data
    if (!type || type === "") return requiredData;

    if (type == "domain") return { domain_info: requiredData.domain_info };

    if (type == "contact") return { contact_info: requiredData.contact_info };

    return requiredData;
}

router.get("/", async (req, res) => {
    const domainName = req.query?.domain;
    if (!domainName)
        return res.status(400).json({
            success: false,
            message: "Domain query is required",
        });

    const domainInfo = await getDomainInfo(domainName);
    if (!domainInfo)
        return res.status(500).send(`Cannot extract info of ${domainName}`);

    const responseData = pickFields(domainInfo, req.query.type);
    return res.json(responseData);
});

export default router;
