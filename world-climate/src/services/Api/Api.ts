const KEY = '1d8b5f4f062e4f95adf220508230805';
const fecthData = async (city:string) => {
    const url = `https://api.weatherapi.com/v1/current.json?key=${KEY}&q=${city}&aqi=no&lang=pt`
    const fecthResponse = await fetch(url);
    const data = fecthResponse.json();
    return data;
}

export default fecthData;