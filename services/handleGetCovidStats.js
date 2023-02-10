export const handleGetCovidStats = async (countryName = "pakistan") => {
  try {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    const res = await fetch(
      "https://api.covid19api.com/country/" + countryName,
      requestOptions
    );
    const data = await res.json();
    return data;
  } catch (ex) {
    throw new Error(ex);
  }
};
