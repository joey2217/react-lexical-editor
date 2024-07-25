import { $getSelection, LexicalEditor } from 'lexical'
import DropDown, { DropDownItem } from '../../ui/DropDown'
import { useCallback } from 'react'
import { $patchStyleText } from '@lexical/selection'
import { dropDownActiveClass } from './utils'

const FONT_FAMILY_OPTIONS: [string, string][] = [
  ['Microsoft Yahei', 'Microsoft Yahei'],
  ['Arial', 'Arial'],
  ['Courier New', 'Courier New'],
  ['Georgia', 'Georgia'],
  ['Times New Roman', 'Times New Roman'],
  ['Trebuchet MS', 'Trebuchet MS'],
  ['Verdana', 'Verdana'],
]

export const DEFAULT_FONT_FAMILY = FONT_FAMILY_OPTIONS[0][0]

const FONT_SIZE_OPTIONS: [string, string][] = [
  10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
].map((n) => [`${n}px`, `${n}px`])

export default function FontDropDown({
  editor,
  value,
  style,
  disabled = false,
}: {
  editor: LexicalEditor
  value: string
  style: string
  disabled?: boolean
}): JSX.Element {
  const handleClick = useCallback(
    (option: string) => {
      editor.update(() => {
        const selection = $getSelection()
        if (selection !== null) {
          $patchStyleText(selection, {
            [style]: option,
          })
        }
      })
    },
    [editor, style]
  )

  const buttonAriaLabel =
    style === 'font-family'
      ? 'Formatting options for font family'
      : 'Formatting options for font size'

  return (
    <DropDown
      disabled={disabled}
      buttonClassName={'toolbar-item ' + style}
      buttonLabel={value}
      buttonIconClassName={
        style === 'font-family' ? 'icon block-type font-family' : ''
      }
      buttonAriaLabel={buttonAriaLabel}
    >
      {(style === 'font-family' ? FONT_FAMILY_OPTIONS : FONT_SIZE_OPTIONS).map(
        ([option, text]) => (
          <DropDownItem
            className={`item ${dropDownActiveClass(value === option)} ${
              style === 'font-size' ? 'fontsize-item' : ''
            }`}
            onClick={() => handleClick(option)}
            key={option}
          >
            <span className="text">{text}</span>
          </DropDownItem>
        )
      )}
    </DropDown>
  )
}
