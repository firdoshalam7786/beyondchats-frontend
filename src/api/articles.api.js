import axios from "axios";

//Vite environment variable
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getArticles = async () => {
  try {
    if (!API_BASE_URL) {
      throw new Error("VITE_API_URL is not defined");
    }

    const res = await axios.get(`${API_BASE_URL}/articles`);

    console.log("API SUCCESS 👉", res.data);

    return res.data.map((item) => ({
      id: item._id,
      title: item.title,
      originalContent: item.content || "",
      rewrittenContent: "",
      status: item.isUpdated ? "UPDATED" : "SCRAPED",
      sourceUrl: item.sourceUrl,
    }));
  } catch (error) {
    console.error("API ERROR 👉", error?.response || error?.message || error);
    throw error;
  }
};
