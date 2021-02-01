import {useEffect, useState} from "react";

function useFetch(url, initialValue) {
	const [data, setData] = useState(initialValue);
	
	async function getDataFromAPI(url) {
		try {
			const response = await fetch(url);
			const data = await response.json();
			setData(data);
		} catch (e) {
			console.error(e);
		}
	}
	
	useEffect(() => {
		getDataFromAPI(url);
	}, [url]);
	return data;
}

export default useFetch;