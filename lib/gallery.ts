/**
 * Clinic interior galleries.
 *
 * `lqip` holds a 20px-wide WebP data URI used as a blur-up placeholder so tiles
 * never pop in from an empty box. `wide` marks the tile that anchors the mosaic
 * (spans two columns on large screens, full width below that).
 *
 * Intrinsic `width`/`height` are required: the mosaic reserves space from them
 * to keep CLS at zero, and the lightbox uses them to cap display size so photos
 * are never upscaled into mush.
 */
export interface GalleryImage {
  src: string
  /** Descriptive Czech alt text. Screen readers and image search both read this. */
  alt: string
  /** Short Czech label shown on hover and under the lightbox. */
  caption: string
  width: number
  height: number
  lqip: string
  wide?: boolean
}

/**
 * Delivery settings for the mosaic tiles.
 *
 * The lightbox reuses these verbatim for its instant base layer. Same `sizes`
 * string + same densities + same format order means the browser resolves the
 * same srcset candidate it already holds in cache, so opening fullscreen paints
 * immediately and issues no request beyond the full-resolution copy.
 *
 * The anchor is pinned to 1x: it is served near its native 1000px, and a 2x
 * candidate would only ask IPX to upscale a source with no more detail in it.
 */
export const GRID_QUALITY = '70'

export const gridSizes = (image: GalleryImage) =>
  image.wide ? '100vw lg:50vw xl:900px' : '50vw sm:33vw lg:25vw xl:300px'

export const gridDensities = (image: GalleryImage) => (image.wide ? '1' : '1 2')

/**
 * Delivery settings for the fullscreen copy: exactly the intrinsic resolution,
 * one candidate. The mosaic warms these same URLs on hover/press so opening
 * fullscreen usually lands on the full-resolution image directly, instead of
 * visibly sharpening up from the tile's smaller one.
 */
export const FULL_QUALITY = '76'
export const FULL_DENSITIES = '1'

export const fullSizes = (image: GalleryImage) => `${image.width}px`

export const zarubovaGallery: GalleryImage[] = [
  {
    src: '/gallery/zarubova/vysetrovna.webp',
    alt: 'Ordinace oční kliniky Videre v Poliklinice Zárubova se štěrbinovou lampou a pracovištěm lékaře',
    caption: 'Ordinace',
    width: 1000,
    height: 750,
    wide: true,
    lqip: 'data:image/webp;base64,UklGRqIAAABXRUJQVlA4IJYAAAAQBACdASoUAA8APt1apkyopSOiMAgBEBuJQBdgMYdYsZU4JXvTNo4iAADJXfOuwk307jBXSe4enOEjOnQVIAXooYZg4dN3qYRrk9NzOwvWF0VSeA2fVG9h8LendtoFca09fCFOQalH/OA/au0bKejpR/+7UUeT+flsu5snC2XNDrnJtIYBt6o1W2vMVfg6GccFkTwAAAA='
  },
  {
    src: '/gallery/zarubova/pracoviste.webp',
    alt: 'Prosvětlené pracoviště s přístroji pro vyšetření zraku u okna oční ordinace v Praze 4',
    caption: 'Přístrojové pracoviště',
    width: 750,
    height: 1000,
    lqip: 'data:image/webp;base64,UklGRs4AAABXRUJQVlA4IMIAAABwBQCdASoUABsAPtFUpUyoJKOiMAwBABoJZAC+SCHfs7DxvCsuLQ/HfI450mn9Dgp4noAAAP65D+Axi6yxZrC5MCz0bS+k9DFuqu2B0jsDdiD3vBEGmyvn6R1IUsCeyCBFMsX8CjR0P4IX8/v3gq/qAkDxl6eEWN/ZB59l1QnD7MzK3CUPWJw+RKUX0+bTc39XUFKZdM8Y5DVSVs49KwVFzJ3c9cwWL5RXldpNMPyiH3VCZCt/iOw2axcKv58PATQAAA=='
  },
  {
    src: '/gallery/zarubova/diagnostika.webp',
    alt: 'Moderní diagnostické přístroje pro bezkontaktní vyšetření oka v oční ordinaci Zárubova',
    caption: 'Diagnostické přístroje',
    width: 750,
    height: 1000,
    lqip: 'data:image/webp;base64,UklGRvAAAABXRUJQVlA4IOQAAACwBQCdASoUABsAPt1eqE6opKOiMBgIARAbiUAZFydwMyXdtClHVwmlGrKk8W2bS/CXr0lUaAAA/qI53TC4OHMPCEs3mEBnfaNtEgeyX6cPKXQCNoQwibQuqSTCVPpyrvBqfyF659+MAyaC1pOXFZI1m1hbVWh7vdGW/2bFPl5gu61dZHgcOiSDGaWgWZEi0I6HNCvMflkV0t5VJDxrDRLf9KS8M0z9vuezHmSZsTm8L3dNsNrFIMkaYOZOs7lpjWkaLsEN0oSwR8WPPJUAriaWOvToFcCTbnQloPAiZk9WinAAAAA='
  },
  {
    src: '/gallery/zarubova/pristrojove-vysetreni.webp',
    alt: 'Přístroj pro bezkontaktní vyšetření oka s monitorem zobrazujícím výsledky měření',
    caption: 'Přístrojové vyšetření',
    width: 750,
    height: 1000,
    lqip: 'data:image/webp;base64,UklGRsAAAABXRUJQVlA4ILQAAABwBQCdASoUABsAPt1iqE2opaOiMBgIARAbiWYArCD/AZlz9ZOXQSwXEGtVKbdtdHf6dBkIAPx4RbU7NAsrC8RRuB/UR/fWBTWyRMPJWQXIgIQXrNrYGDbqN/rrCDCUdxKTV7e2gZJoD3YpSS6ceFs2B7huIjXhIqVdsJpMv2VPMrlFzo/g9dTc4LXjde1w1chGTpaXzRhniBYNQQpbDrr1gZtuYPdgkfqBLyGoOFtfnZwAAAA='
  },
  {
    src: '/gallery/zarubova/cekarna.webp',
    alt: 'Čekárna oční ordinace Videre v Poliklinice Zárubova se sedacím nábytkem',
    caption: 'Čekárna',
    width: 750,
    height: 1000,
    lqip: 'data:image/webp;base64,UklGRtgAAABXRUJQVlA4IMwAAAAQBQCdASoUABsAPt1apEyopSOiMAgBEBuJZgBVfYapIfzuiVc7UurvDaKEhuGHVpoAAP5H8xmQgkuwECghL3DC5i2SzUJBKxnXvjN2spN3v0LX1bdjuLTeoZeTDl37N1/71eg9e+nQhndhKS0z52Vn/ivkccjf7UuD5TfkfppKReD3Gh6655vAE8fHLLNd6iyqJIynXw0ldLwRnp/7o5znFPvXslt80iophuSu3BWOwqfdKpRof6PrVmEVnWA9qs7n4qfsm6B95PVAAAA='
  },
  {
    src: '/gallery/zarubova/vstupni-prostor.webp',
    alt: 'Vstupní prostor a čekárna před oční ordinací v Poliklinice Zárubova',
    caption: 'Vstupní prostor',
    width: 750,
    height: 1000,
    lqip: 'data:image/webp;base64,UklGRtQAAABXRUJQVlA4IMgAAADQBQCdASoUABsAPt1kp04opaOiMBgIARAbiWYAnTLs/HgV2FbUcXZG0invTVwMFhTEQ9D6GFnoAP7n0vmED6DTwcsCN+KnAP+yyneUWuBBvpUrJz3zw7fZmchvEMMBtpYk5iQigGJhWQNoGyTFV3UCF7SsHDDWC/o9aTnUFYfFxWphkB0qFGBfugYifrO2Rytt2IiD6eNlMunudoEWIn06ulBJHqDzPoreMred4CFfg8mLyaiWiHc6bLCPD1RuK1WjCX0rjMOAAA=='
  },
  {
    src: '/gallery/zarubova/vstup-ordinace.webp',
    alt: 'Dveře oční ordinace MUDr. Ireny Svobodové a MUDr. Samera Al Marei v Poliklinice Zárubova',
    caption: 'Vstup do ordinace',
    width: 562,
    height: 750,
    lqip: 'data:image/webp;base64,UklGRqgAAABXRUJQVlA4IJwAAAAQBQCdASoUABsAPt1gqU4opaOiMBgIARAbiUABAgAy3vloH8bassGJWLyoGWgAFi04AP7n00c7Fjfd6LrxncuY+4jpe5PH2fp4sRpojhq68iVFGrA5lD7+9aaHU+2TyQhkUbAJb012MhTtdUMQ3ciPVniDsTwGbmlV74XRng9PedhYyVi/SkcBv1SYf5szvbAJ0eip4hXSnfAAAAA='
  }
]
