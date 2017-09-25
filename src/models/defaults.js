// @flow

const CSS_DEFAULT_VALUES = {
  'align-content': 'auto',
  'align-items': 'auto',
  'align-self': 'auto',
  'alignment-baseline': 'baseline',
  all: '*',
  animation: '*',
  'animation-delay': '0',
  'animation-direction': 'normal',
  'animation-duration': '0',
  'animation-fill-mode': 'none',
  'animation-iteration-count': '1',
  'animation-name': 'none',
  'animation-play-state': 'running',
  'animation-timing-function': 'ease',
  azimuth: 'center',
  'backface-visibility': 'visible',
  background: '*',
  'background-attachment': 'scroll',
  'background-clip': 'box',
  'background-color': 'transparent',
  'background-image': 'none',
  'background-origin': 'box',
  'background-position': '0%',
  'background-repeat': 'repeat',
  'background-size': 'auto',
  'baseline-shift': '0',
  binding: 'none',
  bleed: '6pt',
  'bookmark-label': '()',
  'bookmark-level': 'none',
  'bookmark-state': 'open',
  border: '*',
  'border-bottom': '*',
  'border-bottom-color': 'currentColor',
  'border-bottom-left-radius': '0',
  'border-bottom-right-radius': '0',
  'border-bottom-style': 'none',
  'border-bottom-width': 'medium',
  'border-boundary': 'none',
  'border-collapse': 'separate',
  'border-color': '*',
  'border-image': 'none',
  'border-image-outset': '0',
  'border-image-repeat': 'stretch',
  'border-image-slice': '100%',
  'border-image-source': 'none',
  'border-image-width': '1',
  'border-left': '*',
  'border-left-color': 'currentColor',
  'border-left-style': 'none',
  'border-left-width': 'medium',
  'border-radius': '0',
  'border-right': '*',
  'border-right-color': 'currentColor',
  'border-right-style': 'none',
  'border-right-width': 'medium',
  'border-spacing': '0px',
  'border-style': '*',
  'border-top': '*',
  'border-top-color': 'currentColor',
  'border-top-left-radius': '0',
  'border-top-right-radius': '0',
  'border-top-style': 'none',
  'border-top-width': 'medium',
  'border-width': '*',
  bottom: 'auto',
  'box-decoration-break': 'slice',
  'box-shadow': 'none',
  'box-sizing': 'box',
  'box-snap': 'none',
  'box-suppress': 'show',
  'break-after': 'auto',
  'break-before': 'auto',
  'break-inside': 'auto',
  'caption-side': 'top',
  chains: 'none',
  clear: 'none',
  clip: 'auto',
  'clip-path': 'none',
  'clip-rule': 'nonzero',
  color: 'dependent',
  'color-interpolation-filters': 'auto',
  'column-count': 'auto',
  'column-fill': 'balance',
  'column-gap': 'normal',
  'column-rule': '*',
  'column-rule-color': 'dependent',
  'column-rule-style': 'medium',
  'column-rule-width': 'medium',
  'column-span': 'none',
  'column-width': 'auto',
  columns: '*',
  contain: 'none',
  content: 'normal',
  'counter-increment': 'none',
  'counter-reset': 'none',
  'counter-set': 'none',
  crop: 'auto',
  cue: '*',
  'cue-after': 'none',
  'cue-before': 'none',
  cursor: 'auto',
  direction: 'ltr',
  display: '*',
  'display-inside': 'auto',
  'display-list': 'none',
  'display-outside': 'level',
  'dominant-baseline': 'normal',
  elevation: 'level',
  'empty-cells': 'show',
  filter: 'none',
  flex: '*',
  'flex-basis': 'auto',
  'flex-direction': 'row',
  'flex-flow': '*',
  'flex-grow': '0',
  'flex-shrink': '1',
  'flex-wrap': 'nowrap',
  float: 'none',
  'float-offset': '0',
  'flood-color': 'black',
  'flood-opacity': '1',
  'flow-from': 'none',
  'flow-into': 'none',
  font: '*',
  'font-family': 'dependent',
  'font-feature-settings': 'normal',
  'font-kerning': 'auto',
  'font-language-override': 'normal',
  'font-max-size': 'infinity',
  'font-min-size': '0px',
  'font-optical-sizing': 'auto',
  'font-palette': 'normal',
  'font-presentation': 'auto',
  'font-size': 'medium',
  'font-size-adjust': 'none',
  'font-stretch': 'normal',
  'font-style': 'normal',
  'font-synthesis': 'style',
  'font-variant': 'normal',
  'font-variant-alternates': 'normal',
  'font-variant-caps': 'normal',
  'font-variant-east-asian': 'normal',
  'font-variant-ligatures': 'normal',
  'font-variant-numeric': 'normal',
  'font-variant-position': 'normal',
  'font-variation-settings': 'normal',
  'font-weight': 'normal',
  grid: '*',
  'grid-area': '*',
  'grid-auto-columns': 'auto',
  'grid-auto-flow': 'none',
  'grid-auto-rows': 'auto',
  'grid-column': '*',
  'grid-column-end': 'auto',
  'grid-column-start': 'auto',
  'grid-row': '*',
  'grid-row-end': 'auto',
  'grid-row-start': 'auto',
  'grid-template': '*',
  'grid-template-areas': 'none',
  'grid-template-columns': 'none',
  'grid-template-rows': 'none',
  'hanging-punctuation': 'none',
  height: 'auto',
  hyphens: 'manual',
  icon: 'auto',
  'image-orientation': '0deg',
  'image-rendering': 'auto',
  'image-resolution': '1dppx',
  'ime-mode': 'auto',
  'initial-letter': 'normal',
  'justify-content': 'auto',
  'justify-items': 'auto',
  'justify-self': 'auto',
  left: 'auto',
  'letter-spacing': 'normal',
  'lighting-color': 'white',
  'line-break': 'auto',
  'line-grid': 'parent',
  'line-height': 'normal',
  'line-snap': 'none',
  'list-style': '*',
  'list-style-image': 'none',
  'list-style-position': 'outside',
  'list-style-type': 'disc',
  margin: '*',
  'margin-bottom': '0',
  'margin-left': '0',
  'margin-right': '0',
  'margin-top': '0',
  'marker-offset': 'auto',
  'marker-side': 'item',
  marks: 'none',
  mask: 'box',
  'mask-box': '*',
  'mask-box-outset': '0',
  'mask-box-repeat': 'stretch',
  'mask-box-slice': 'fill',
  'mask-box-source': 'none',
  'mask-box-width': 'auto',
  'mask-clip': 'box',
  'mask-image': 'none',
  'mask-origin': 'box',
  'mask-position': 'center',
  'mask-repeat': 'repeat',
  'mask-size': 'box',
  'mask-source-type': 'auto',
  'mask-type': 'luminance',
  'max-height': 'none',
  'max-lines': 'none',
  'max-width': 'none',
  'min-height': 'auto',
  'min-width': 'auto',
  'move-to': 'normal',
  'nav-down': 'auto',
  'nav-index': 'auto',
  'nav-left': 'auto',
  'nav-right': 'auto',
  'nav-up': 'auto',
  'object-fit': 'fill',
  'object-position': '50%',
  opacity: '1',
  order: '0',
  orphans: '2',
  outline: '*',
  'outline-color': 'invert',
  'outline-offset': '0',
  'outline-style': 'none',
  'outline-width': 'medium',
  overflow: '*',
  'overflow-wrap': 'normal',
  'overflow-x': 'visible',
  'overflow-y': 'visible',
  padding: '*',
  'padding-bottom': '0',
  'padding-left': '0',
  'padding-right': '0',
  'padding-top': '0',
  page: 'auto',
  'page-break-after': 'auto',
  'page-break-before': 'auto',
  'page-break-inside': 'auto',
  'page-policy': 'start',
  pause: 'dependent',
  'pause-after': 'dependent',
  'pause-before': 'dependent',
  perspective: 'none',
  'perspective-origin': '50%',
  pitch: 'medium',
  'pitch-range': '50',
  'play-during': 'auto',
  'polar-anchor': '50%',
  'polar-angle': '0',
  'polar-distance': '0',
  'polar-origin': 'auto',
  position: 'static',
  'presentation-level': '0',
  quotes: 'text',
  'region-fragment': 'auto',
  resize: 'none',
  rest: '*',
  'rest-after': 'none',
  'rest-before': 'none',
  richness: '50',
  right: 'auto',
  rotation: '0',
  'rotation-point': '50%',
  'row-gap': 'normal',
  'ruby-align': 'auto',
  'ruby-merge': 'separate',
  'ruby-position': 'before',
  'scroll-padding': '0',
  'scroll-padding-block': '0',
  'scroll-padding-block-end': '0',
  'scroll-padding-block-start': '0',
  'scroll-padding-bottom': '0',
  'scroll-padding-inline': '0',
  'scroll-padding-inline-end': '0',
  'scroll-padding-inline-start': '0',
  'scroll-padding-left': '0',
  'scroll-padding-right': '0',
  'scroll-padding-top': '0',
  'scroll-snap-align': 'none',
  'scroll-snap-margin': '0',
  'scroll-snap-margin-block': '0',
  'scroll-snap-margin-block-end': '0',
  'scroll-snap-margin-block-start': '0',
  'scroll-snap-margin-bottom': '0',
  'scroll-snap-margin-inline': '0',
  'scroll-snap-margin-inline-end': '0',
  'scroll-snap-margin-inline-start': '0',
  'scroll-snap-margin-left': '0',
  'scroll-snap-margin-right': '0',
  'scroll-snap-margin-top': '0',
  'scroll-snap-stop': 'normal',
  'scroll-snap-type': 'none',
  'shape-image-threshold': '0',
  'shape-inside': 'auto',
  'shape-outside': 'none',
  'shape-margin': '0',
  size: 'auto',
  speak: 'auto',
  'speak-as': 'normal',
  'speak-header': 'once',
  'speak-numeral': 'continuous',
  'speak-punctuation': 'none',
  'speech-rate': 'medium',
  stress: '50',
  'string-set': 'none',
  'tab-size': '8',
  'table-layout': 'auto',
  'text-align': 'start',
  'text-align-last': 'auto',
  'text-combine-upright': 'none',
  'text-decoration': 'none',
  'text-decoration-color': 'currentColor',
  'text-decoration-line': 'none',
  'text-decoration-skip': 'objects',
  'text-decoration-style': 'solid',
  'text-emphasis': '*',
  'text-emphasis-color': 'currentColor',
  'text-emphasis-position': 'right',
  'text-emphasis-style': 'none',
  'text-indent': '0',
  'text-justify': 'auto',
  'text-orientation': 'mixed',
  'text-overflow': 'clip',
  'text-shadow': 'none',
  'text-space-collapse': 'collapse',
  'text-transform': 'none',
  'text-underline-position': 'auto',
  'text-wrap': 'normal',
  top: 'auto',
  transform: 'none',
  'transform-origin': '0',
  'transform-style': 'flat',
  transition: '*',
  'transition-delay': '0s',
  'transition-duration': '0s',
  'transition-property': 'all',
  'transition-timing-function': 'ease',
  'unicode-bidi': 'normal',
  'vertical-align': 'baseline',
  visibility: 'visible',
  'voice-balance': 'center',
  'voice-duration': 'auto',
  'voice-family': 'dependent',
  'voice-pitch': 'medium',
  'voice-range': 'medium',
  'voice-rate': 'normal',
  'voice-stress': 'normal',
  'voice-volume': 'medium',
  volume: 'medium',
  'white-space': 'normal',
  widows: '2',
  width: 'auto',
  'will-change': 'auto',
  'word-break': 'normal',
  'word-spacing': 'normal',
  'word-wrap': 'normal',
  'wrap-flow': 'auto',
  'wrap-through': 'wrap',
  'writing-mode': 'tb',
  'z-index': 'auto',
};

export type CSSProperty = $Keys<typeof CSS_DEFAULT_VALUES>;

const getDefaultValue = (prop: CSSProperty): string => CSS_DEFAULT_VALUES[prop];

export default getDefaultValue;
