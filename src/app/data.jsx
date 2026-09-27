const getData = async () => {
  try {
    const res = await fetch("https://api.api-store.workers.dev/api/fitlog");

    if (!res.ok) {
      throw new Error("Data fetch not working");
    }

    const data = await res.json();

    console.log("data:", data);

    return data;
  } catch (error) {
    console.error("Data fetch failed:", error);
    throw error;
  } finally {
    console.log("Finished");
  }
};

export default getData;
