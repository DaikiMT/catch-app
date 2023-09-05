export class LogoApiSevices {
    getUrlToLogo(source) {
        return `https://logo.clearbit.com/${new URL(source.url).host}`
    }
}