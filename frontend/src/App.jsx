import { useState } from "react";
import "./App.css";
import DomainForm from "./components/DomainForm/DomainForm";
import Table from "./components/Table/Table";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

function App() {
    const [form, setForm] = useState({ domain: "", infoType: "all" });
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [domainInfo, setDomainInfo] = useState({
        domain_info: null,
        contact_info: null,
    });
    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm({ ...form, [name]: value });
    };

    const handleErrorCLose = (e) => {
        setError(null);
    };

    const resetState = () => {
        setError(undefined);
        setDomainInfo({
            domain_info: null,
            contact_info: null,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        resetState();

        if (form.domain === "") return;

        try {
            const response = await fetch(
                `${API_BASE_URL}/api/whoisserver?domain=${form.domain}&type=${form.infoType}`,
                {
                    method: "GET",
                }
            );

            const data = await response.json();
            setDomainInfo(data);
        } catch (error) {
            console.error("Error fetching data:", error);
            setError(
                `Something wen't wrong while getting ${form.domain}'s info`
            );
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex justify-center">
            <div className="bg-white rounded-lg p-6 w-full mt-12">
                {/* Form */}
                <DomainForm
                    form={form}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    error={error}
                    handleErrorCLose={handleErrorCLose}
                    isLoading={isLoading}
                />

                {/* Table */}
                {domainInfo.domain_info &&
                    (form.infoType === "domain" || form.infoType === "all") && (
                        <Table
                            infoType="domain"
                            data={domainInfo.domain_info}
                        />
                    )}
                {domainInfo.contact_info &&
                    (form.infoType === "contact" ||
                        form.infoType === "all") && (
                        <Table
                            infoType="contact"
                            data={domainInfo.contact_info}
                        />
                    )}
            </div>
        </div>
    );
}

export default App;
