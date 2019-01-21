import genres from './data/genres';
import languages from './data/languages'

const timeout = 500;
const EVENT_PAGE_SIZE = 20;

class DB {
    static getGenres() {
        return new Promise((res, rej) => {
            setTimeout(() => {
                res(genres);
            }, timeout)
        })
    }

    static getLanguages() {
        return new Promise((res, rej) => {
            setTimeout(() => {
                res(languages);
            }, timeout)
        })
    }

    static async getTrailers({ page = 0, languages = [], genres = [] }) {

        if (!this._events) {
            const events = await import('./data/event').then(data => data['default']);
            this._events = Object.keys(events).map(id => events[id]);
        }

        return new Promise((res, rej) => {
            setTimeout(() => {
                let events = this._events;

                if (languages.length > 0) {
                    events = events.filter(({ EventLanguage }) => languages.includes(EventLanguage));
                }

                if (genres.length > 0) {
                    events = events.filter(({ EventGenre }) => {
                        const _genres = EventGenre.split('|');
                        return _genres.some(genre => genres.includes(genre))
                    });
                }

                const slicedEvents = events.slice(page*EVENT_PAGE_SIZE, (page+1)*EVENT_PAGE_SIZE);
                res(slicedEvents);
            }, timeout)
        })
    }
}

export default DB;