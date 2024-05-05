const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

let abortController = null;

export const getJobOpeningsData = async () => {
  if (abortController) {
    abortController.abort();
  }

  abortController = new AbortController();

  const { signal } = abortController;

  const body = JSON.stringify({
    limit: 10,
    offset: 0,
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
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};
