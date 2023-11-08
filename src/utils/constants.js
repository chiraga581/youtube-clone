const GOOGLE_API_KEY = "AIzaSyAs2L7mhGnKkiWDYwPRzG7bhkEvDlvWupQ"

export const YOUTUBE_VIDEO_API = 
    "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=CA&key="+ GOOGLE_API_KEY;


export const YOUTUBE_SEARCH_API = 
    "http://suggestqueries.google.com/complete/search?client=youtube&ds=yt&client=firefox&q=";


export const OFFSET_LIVE_CHAT = 100 ;