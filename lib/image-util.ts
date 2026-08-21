export const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#EAE2D5" offset="20%" />
      <stop stop-color="#D3C5AB" offset="50%" />
      <stop stop-color="#EAE2D5" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#EAE2D5" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)">
    <animate attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
  </rect>
</svg>`

export const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str)

export const defaultBlurDataURL = `data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`
