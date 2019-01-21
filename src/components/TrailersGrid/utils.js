export const ITEM_HEIGHT = 350;
export const PREVIEW_HEIGHT = 500;

export const getBackgroungImage = code => `url("https://in.bmscdn.com/events/moviecard/${code}.jpg")`;

export const getDayFromDate = date => date.getDate();
export const getYearFromDate = date => date.getFullYear();
export const getMonthShortNameFromDate = date => {
	const names = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	return names[date.getMonth()];
}
export const getJSDateFromEventDisplayDate = date => new Date(date);
export const getDayFromEventDisplayDate = date => getDayFromDate(getJSDateFromEventDisplayDate(date));
export const getMonthFromEventDisplayDate = date => getMonthShortNameFromDate(getJSDateFromEventDisplayDate(date));
export const getYearFromEventDisplayDate = date => getMonthShortNameFromDate(getJSDateFromEventDisplayDate(date));
export const GetYoutubeVideoIdFromURL = url => {
	const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
	const match = url.match(regExp);

	if (match && match[2].length === 11) {
		return match[2];
	} else {
		return new Error('Invalid URL');
	}
}
export const GetYoutubeIFrameSourceFromVideoId = id => `//www.youtube.com/embed/${id}`;
export const GetYoutubeEmbededSourceFromWatchURL = url => GetYoutubeIFrameSourceFromVideoId(GetYoutubeVideoIdFromURL(url));