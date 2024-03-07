

const YoutubeAPIKey="AIzaSyDvfHZF5cAtZ2fD5Tsi98n_kCd-olhRS5M"

export const YoutubeAPI=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=IN&key=${YoutubeAPIKey}`

export const Youtube_Search_Api=`https://clients1.google.com/complete/search?client=youtube&gs_ri=youtube&ds=yt&q=`

export const youtube_search_api2=`https://cors-proxy.htmldriven.com/?url=https://clients1.google.com/complete/search?client=youtube&gs_ri=youtube&ds=yt&q=`

export const YOUTUBE_SEARCH_API =
  "https://corsproxy.org/?" +
  encodeURIComponent(
    "https://clients1.google.com/complete/search?client=firefox&ds=yt&q="
  );