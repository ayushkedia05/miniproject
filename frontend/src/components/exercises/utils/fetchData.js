export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': "21ccf112f6mshdc04917502fd21dp1cde90jsn49f06097824a",
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
}

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': "21ccf112f6mshdc04917502fd21dp1cde90jsn49f06097824a",
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
  
    return data;
  };