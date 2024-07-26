/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { EditorThemeClasses } from 'lexical'

import './theme.css'

export const PREFIX = 'editor_theme'

const theme: EditorThemeClasses = {
  autocomplete: `${PREFIX}__autocomplete`,
  blockCursor: `${PREFIX}__blockCursor`,
  characterLimit: `${PREFIX}__characterLimit`,
  code: `${PREFIX}__code`,
  codeHighlight: {
    atrule: `${PREFIX}__tokenAttr`,
    attr: `${PREFIX}__tokenAttr`,
    boolean: `${PREFIX}__tokenProperty`,
    builtin: `${PREFIX}__tokenSelector`,
    cdata: `${PREFIX}__tokenComment`,
    char: `${PREFIX}__tokenSelector`,
    class: `${PREFIX}__tokenFunction`,
    'class-name': `${PREFIX}__tokenFunction`,
    comment: `${PREFIX}__tokenComment`,
    constant: `${PREFIX}__tokenProperty`,
    deleted: `${PREFIX}__tokenProperty`,
    doctype: `${PREFIX}__tokenComment`,
    entity: `${PREFIX}__tokenOperator`,
    function: `${PREFIX}__tokenFunction`,
    important: `${PREFIX}__tokenVariable`,
    inserted: `${PREFIX}__tokenSelector`,
    keyword: `${PREFIX}__tokenAttr`,
    namespace: `${PREFIX}__tokenVariable`,
    number: `${PREFIX}__tokenProperty`,
    operator: `${PREFIX}__tokenOperator`,
    prolog: `${PREFIX}__tokenComment`,
    property: `${PREFIX}__tokenProperty`,
    punctuation: `${PREFIX}__tokenPunctuation`,
    regex: `${PREFIX}__tokenVariable`,
    selector: `${PREFIX}__tokenSelector`,
    string: `${PREFIX}__tokenSelector`,
    symbol: `${PREFIX}__tokenProperty`,
    tag: `${PREFIX}__tokenProperty`,
    url: `${PREFIX}__tokenOperator`,
    variable: `${PREFIX}__tokenVariable`,
  },
  embedBlock: {
    base: `${PREFIX}__embedBlock`,
    focus: `${PREFIX}__embedBlockFocus`,
  },
  hashtag: `${PREFIX}__hashtag`,
  heading: {
    h1: `${PREFIX}__h1`,
    h2: `${PREFIX}__h2`,
    h3: `${PREFIX}__h3`,
    h4: `${PREFIX}__h4`,
    h5: `${PREFIX}__h5`,
    h6: `${PREFIX}__h6`,
  },
  hr: `${PREFIX}__hr`,
  image: `editor-image`,
  indent: `${PREFIX}__indent`,
  inlineImage: `inline-editor-image`,
  layoutContainer: `${PREFIX}__layoutContainer`,
  layoutItem: `${PREFIX}__layoutItem`,
  link: `${PREFIX}__link`,
  list: {
    checklist: `${PREFIX}__checklist`,
    listitem: `${PREFIX}__listItem`,
    listitemChecked: `${PREFIX}__listItemChecked`,
    listitemUnchecked: `${PREFIX}__listItemUnchecked`,
    nested: {
      listitem: `${PREFIX}__nestedListItem`,
    },
    olDepth: [
      `${PREFIX}__ol1`,
      `${PREFIX}__ol2`,
      `${PREFIX}__ol3`,
      `${PREFIX}__ol4`,
      `${PREFIX}__ol5`,
    ],
    ul: `${PREFIX}__ul`,
  },
  ltr: `${PREFIX}__ltr`,
  mark: `${PREFIX}__mark`,
  markOverlap: `${PREFIX}__markOverlap`,
  paragraph: `${PREFIX}__paragraph`,
  quote: `${PREFIX}__quote`,
  rtl: `${PREFIX}__rtl`,
  table: `${PREFIX}__table`,
  tableCell: `${PREFIX}__tableCell`,
  tableCellActionButton: `${PREFIX}__tableCellActionButton`,
  tableCellActionButtonContainer: `${PREFIX}__tableCellActionButtonContainer`,
  tableCellEditing: `${PREFIX}__tableCellEditing`,
  tableCellHeader: `${PREFIX}__tableCellHeader`,
  tableCellPrimarySelected: `${PREFIX}__tableCellPrimarySelected`,
  tableCellResizer: `${PREFIX}__tableCellResizer`,
  tableCellSelected: `${PREFIX}__tableCellSelected`,
  tableCellSortedIndicator: `${PREFIX}__tableCellSortedIndicator`,
  tableResizeRuler: `${PREFIX}__tableCellResizeRuler`,
  tableSelected: `${PREFIX}__tableSelected`,
  tableSelection: `${PREFIX}__tableSelection`,
  text: {
    bold: `${PREFIX}__textBold`,
    code: `${PREFIX}__textCode`,
    italic: `${PREFIX}__textItalic`,
    strikethrough: `${PREFIX}__textStrikethrough`,
    subscript: `${PREFIX}__textSubscript`,
    superscript: `${PREFIX}__textSuperscript`,
    underline: `${PREFIX}__textUnderline`,
    underlineStrikethrough: `${PREFIX}__textUnderlineStrikethrough`,
  },
}

export default theme
