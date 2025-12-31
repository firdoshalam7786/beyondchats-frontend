import axios from "axios";

export const getArticles = async () => {
  try {
    const res = await axios.get("http://localhost:5001/articles");
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
    console.error("API ERROR 👉", error);
    throw error; // VERY IMPORTANT
  }
};
