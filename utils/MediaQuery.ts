export enum QUERY {
  sm = 'screen and (min-width: 400px)',
  md = 'screen and (min-width: 768px)',
  lg = 'screen and (min-width: 1000px)'
}

export default {
  addListener(
    query: QUERY,
    listener?: (this: MediaQueryList, ev: MediaQueryListEvent) => any
  ): MediaQueryList {
    const mediaQueryList = window.matchMedia(query)
    if (listener) mediaQueryList.addEventListener('change', listener)
    return mediaQueryList
  }
}
