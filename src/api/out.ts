import axiosInstance from "./request";

// Get a list of candidate Novels。
export const searchFictions = (name: string) => axiosInstance.get(`/fiction?name=${name}`)

// Crawl fiction by key.
export const crawlFiction = (key: string) => axiosInstance.get(`/crawl?key=${key}`)

// Get the status of crawling fiction by key.
export const getCrawlStatus = (key: string) => axiosInstance.get(`crawl_status?key=${key}`)

// Download fiction to local.
export const downloadFiction = (key: string) => axiosInstance.get(`/download?key=${key}`)
