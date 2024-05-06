const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

let abortController = null;

export const getJobOpeningsData = async (offset) => {
  if (abortController) {
    abortController.abort();
  }

  abortController = new AbortController();

  const { signal } = abortController;

  const body = JSON.stringify({
    limit: 9,
    offset: offset,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body,
    signal,
  };

  try {
    const response = await fetch(
      "https://api.weekday.technology/adhoc/getSampleJdJSON",
      requestOptions
    );
    if (!response.ok) {
      throw new Error("HTTP error! status: ${response.status}");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
