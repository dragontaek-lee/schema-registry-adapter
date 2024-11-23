import axios from "axios";
import { AxiosAdapter } from "./adapter";

const axiosInstance = axios.create({ baseURL: `${process.env.SCHEMA_REGISTRY_URL}` });
const apiAdapter = new AxiosAdapter(axiosInstance);

exports.Schema = {
    find: async ({ id }: { id: string }) => {
        const response = await apiAdapter.sendRequest({
            method: "GET",
            url: `/schemas/ids/${id}`,
        });
        return response;
    },

    getSchemaOnly: async ({ id }: { id: string }) => {
        const response = await apiAdapter.sendRequest({
            method: "GET",
            url: `/schemas/ids/${id}/schema`,
        });
        return response;
    },

    getSchemaTypes: async () => {
        const response = await apiAdapter.sendRequest({
            method: "GET",
            url: `/schemas/types`,
        });
        return response;
    },
};

exports.Subject = {
    all: async () => {
        const response = await apiAdapter.sendRequest({
            method: "GET",
            url: "/subjects",
        });
        return response;
    },

    latestVersion: async ({ subject }: { subject: string }) => {
        const response = await apiAdapter.sendRequest({
            method: "GET",
            url: `/subjects/${subject}/versions/latest`,
        });
        return response;
    },

    version: async ({ subject, version }: { subject: string; version: string }) => {
        const response = await apiAdapter.sendRequest({
            method: "GET",
            url: `/subjects/${subject}/versions/${version}`,
        });
        return response;
    },

    registered: async ({ subject }: { subject: string }) => {
        const response = await apiAdapter.sendRequest({
            method: "POST",
            url: `/subjects/${subject}`,
        });
        return response;
    },

    config: async ({ subject }: { subject: string }) => {
        const response = await apiAdapter.sendRequest({
            method: "GET",
            url: `/config/${subject}`,
        });
        return response;
    },

    updateConfig: async ({ subject }: { subject: string }) => {
        const response = await apiAdapter.sendRequest({
            method: "PUT",
            url: `/config/${subject}`,
        });
        return response;
    },

    register: async ({ subject }: { subject: string }) => {
        const response = await apiAdapter.sendRequest({
            method: "POST",
            url: `/subjects/${subject}/versions`,
        });
        return response;
    },

    compatible: async ({ subject, version = "latest" }: { subject: string; version?: string }) => {
        const response = await apiAdapter.sendRequest({
            method: "POST",
            url: `/compatibility/subjects/${subject}/versions/${version}`,
        });
        return response;
    },

    getDeletedSubjects: async () => {
        const response = await apiAdapter.sendRequest({
            method: "GET",
            url: `/subjects?deleted=true`,
        });
        return response;
    },

    deleteSubject: async ({ subject }: { subject: string }) => {
        const response = await apiAdapter.sendRequest({
            method: "DELETE",
            url: `/subjects/${subject}`,
        });
        return response;
    },

    deleteSubjectVersion: async ({ subject, version }: { subject: string; version: string }) => {
        const response = await apiAdapter.sendRequest({
            method: "DELETE",
            url: `/subjects/${subject}/versions/${version}`,
        });
        return response;
    },
};

exports.Config = {
    globalConfig: async () => {
        const response = await apiAdapter.sendRequest({
            method: "GET",
            url: `/config`,
        });
        return response;
    },

    updateGlobalConfig: async ({ compatibility }: { compatibility: string }) => {
        const response = await apiAdapter.sendRequest({
            method: "PUT",
            url: `/config`,
            data: { compatibility },
        });
        return response;
    },
};

exports.Mode = {
    getGlobalMode: async () => {
        const response = await apiAdapter.sendRequest({
            method: "GET",
            url: `/mode`,
        });
        return response;
    },

    updateGlobalMode: async ({ mode }: { mode: string }) => {
        const response = await apiAdapter.sendRequest({
            method: "PUT",
            url: `/mode`,
            data: { mode },
        });
        return response;
    },

    getSubjectMode: async ({ subject }: { subject: string }) => {
        const response = await apiAdapter.sendRequest({
            method: "GET",
            url: `/mode/${subject}`,
        });
        return response;
    },

    updateSubjectMode: async ({ subject, mode }: { subject: string; mode: string }) => {
        const response = await apiAdapter.sendRequest({
            method: "PUT",
            url: `/mode/${subject}`,
            data: { mode },
        });
        return response;
    },
};

exports.Metadata = {
    getClusterId: async () => {
        const response = await apiAdapter.sendRequest({
            method: "GET",
            url: `/v1/metadata/id`,
        });
        return response;
    },

    getSchemaRegistryVersion: async () => {
        const response = await apiAdapter.sendRequest({
            method: "GET",
            url: `/v1/metadata/version`,
        });
        return response;
    },
};
