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
function pickFields(data, fields) {
    const requiredData = {
        domain_name: data?.WhoisRecord?.registryData?.domainName,
        registrar_name: data?.WhoisRecord?.registryData?.registrarName,
        expiration_date: data?.WhoisRecord?.registryData?.expirationDate,
        estimated_domain_age: data?.WhoisRecord?.estimatedDomainAge,
        host_names: formatHostnames(data?.WhoisRecord?.nameServers?.hostNames),
        registrant_name: data?.WhoisRecord?.registrant?.organization,
        technical_contact_name:
            data?.WhoisRecord?.technicalContact?.organization,
        administrative_contact_name:
            data?.WhoisRecord?.administrativeContact?.organization,
        contact_email: data?.WhoisRecord?.contactEmail,
    };

    // If no fields are specified, return all the required data
    if (!fields || fields === "") return requiredData;

    const selectedFields = fields ? fields.split(",") : null;

    const response = {};

    selectedFields.forEach((field) => {
        response[field] = requiredData[field] ?? null;
    });

    return response;
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

    const responseData = pickFields(domainInfo, req.query.fields);
    return res.json(responseData);
});

export default router;
