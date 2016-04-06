import randomstring from 'randomstring'
import translit from 'cyrillic-to-translit-js'
import {kebabCase} from 'lodash'

export default class ServiceHelper {
    constructor() {

    }

    trimName(item = {}) {
        let name = item.name || ''
        return name.trim()
    }

    timestamp() {
        return Date.now()
    }

    randomString(len = 16) {
        return randomstring.generate(len)
    }

    /**
     * Return slug (translited string without spaces)
     * @param str
     * @returns {*}
     */
    slug(str = '') {
        let strTranslit = translit().transform(str)
        return kebabCase(strTranslit)
    }

    logError(err) {
        console.error(err)
    }
}