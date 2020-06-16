
export class CookieUtil {
    // Given a cookie key `name`, returns the value of
    // the cookie or `null`, if the key is not found.
    public static getCookie(name: string): string {
        const nameLength = (name.length + 1);
        return document.cookie
            .split(';')
            .map(c => c.trim())
            .filter(cookie => {
                return cookie.substring(0, nameLength) === `${name}=`;
            })
            .map(cookie => {
                return decodeURIComponent(cookie.substring(nameLength));
            })[0] || null;
    }
}