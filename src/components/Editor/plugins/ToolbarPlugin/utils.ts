import { $isAtNodeEnd } from '@lexical/selection'
import { ElementNode, RangeSelection, TextNode } from 'lexical'

export function dropDownActiveClass(active: boolean) {
  if (active) {
    return 'active dropdown-item-active'
  } else {
    return ''
  }
}
const SUPPORTED_URL_PROTOCOLS = new Set([
  'http:',
  'https:',
  'mailto:',
  'sms:',
  'tel:',
])

export function sanitizeUrl(url: string): string {
  try {
    const parsedUrl = new URL(url)
    // eslint-disable-next-line no-script-url
    if (!SUPPORTED_URL_PROTOCOLS.has(parsedUrl.protocol)) {
      return 'about:blank'
    }
  } catch {
    return url
  }
  return url
}

export function getSelectedNode(
  selection: RangeSelection
): TextNode | ElementNode {
  const anchor = selection.anchor
  const focus = selection.focus
  const anchorNode = selection.anchor.getNode()
  const focusNode = selection.focus.getNode()
  if (anchorNode === focusNode) {
    return anchorNode
  }
  const isBackward = selection.isBackward()
  if (isBackward) {
    return $isAtNodeEnd(focus) ? anchorNode : focusNode
  } else {
    return $isAtNodeEnd(anchor) ? anchorNode : focusNode
  }
}
