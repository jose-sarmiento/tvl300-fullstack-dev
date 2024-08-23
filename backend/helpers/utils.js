export function formatHostnames(hostnames, limit = 25) {
    const hostnamesStr = hostnames.join(",");

    // Check if the length of the string exceeds 25 characters
    if (hostnamesStr.length > limit) {
        // Truncate the string and append "..."
        return hostnamesStr.substring(0, limit - 3) + "..."; // 22 chars + 3 for "..."
    }

    return hostnamesStr;
}
