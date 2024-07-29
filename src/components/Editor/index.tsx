import { useEffect, useState } from 'react'
import { $createTextNode, $getRoot, type EditorState } from 'lexical'

import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin'
import {
  type InitialConfigType,
  LexicalComposer,
} from '@lexical/react/LexicalComposer'
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin'
import { ContentEditable } from '@lexical/react/LexicalContentEditable'
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin'
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import theme from './themes/theme'
import './editor.css'
import ToolbarPlugin from './plugins/ToolbarPlugin'
import nodes from './nodes'
import { CAN_USE_DOM } from '@lexical/utils'
import CodeActionMenuPlugin from './plugins/CodeActionMenuPlugin'
import CodeHighlightPlugin from './plugins/CodeHighlightPlugin'
import LinkPlugin from './plugins/LinkPlugin'
import FloatingLinkEditorPlugin from './plugins/FloatingLinkEditorPlugin'
import { $createHeadingNode } from '@lexical/rich-text'
import PageBreakPlugin from './plugins/PageBreakPlugin'
import ImagesPlugin from './plugins/ImagesPlugin'
import InlineImagePlugin from './plugins/InlineImagePlugin'
import { TablePlugin } from '@lexical/react/LexicalTablePlugin'
import CollapsiblePlugin from './plugins/CollapsiblePlugin'
import EmojisPlugin from './plugins/EmojisPlugin'
import FloatingTextFormatToolbarPlugin from './plugins/FloatingTextFormatToolbarPlugin'
import { HorizontalRulePlugin } from '@lexical/react/LexicalHorizontalRulePlugin'
import PollPlugin from './plugins/PollPlugin'
import { ListPlugin } from '@lexical/react/LexicalListPlugin'
import { CheckListPlugin } from '@lexical/react/LexicalCheckListPlugin'
import TabFocusPlugin from './plugins/TabFocusPlugin'
import TableCellResizer from './plugins/TableCellResizer'
import TableHoverActionsPlugin from './plugins/TableHoverActionsPlugin'
import TableActionMenuPlugin from './plugins/TableActionMenuPlugin'
import TableOfContentsPlugin from './plugins/TableOfContentsPlugin'
import ActionsPlugin from './plugins/ActionsPlugin'

// Catch any errors that occur during Lexical updates and log them
// or throw them as needed. If you don't throw them, Lexical will
// try to recover gracefully without losing user data.
function onError(error: Error) {
  console.error(error)
}

// When the editor changes, you can get notified via the
// OnChangePlugin!
function MyOnChangePlugin({
  onChange,
}: {
  onChange: (editorState: EditorState) => void
}) {
  // Access the editor through the LexicalComposerContext
  const [editor] = useLexicalComposerContext()
  // Wrap our listener in useEffect to handle the teardown and avoid stale references.
  useEffect(() => {
    // most listeners return a teardown function that can be called to clean them up.
    return editor.registerUpdateListener(({ editorState }) => {
      // call onChange here to pass the latest state up to the parent.
      onChange(editorState)
    })
  }, [editor, onChange])
  return null
}

function initRichText() {
  const root = $getRoot()
  if (root.getFirstChild() === null) {
    const title = $createHeadingNode('h2')
    title.append($createTextNode('欢迎使用'))
    root.append(title)
  }
}

export default function Editor() {
  const initialConfig: InitialConfigType = {
    namespace: 'MyEditor',
    theme,
    onError,
    nodes,
    editorState: initRichText,
  }
  const [floatingAnchorElem, setFloatingAnchorElem] =
    useState<HTMLDivElement | null>(null)
  const [isSmallWidthViewport, setIsSmallWidthViewport] =
    useState<boolean>(false)
  const [isLinkEditMode, setIsLinkEditMode] = useState<boolean>(false)

  const onRef = (_floatingAnchorElem: HTMLDivElement) => {
    if (_floatingAnchorElem !== null) {
      setFloatingAnchorElem(_floatingAnchorElem)
    }
  }

  useEffect(() => {
    const updateViewPortWidth = () => {
      const isNextSmallWidthViewport =
        CAN_USE_DOM && window.matchMedia('(max-width: 1025px)').matches

      if (isNextSmallWidthViewport !== isSmallWidthViewport) {
        setIsSmallWidthViewport(isNextSmallWidthViewport)
      }
    }
    updateViewPortWidth()
    window.addEventListener('resize', updateViewPortWidth)

    return () => {
      window.removeEventListener('resize', updateViewPortWidth)
    }
  }, [isSmallWidthViewport])

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <section className="editor-shell">
        <div className="editor-container">
          <ToolbarPlugin setIsLinkEditMode={setIsLinkEditMode} />
          <RichTextPlugin
            contentEditable={
              <div className="editor-scrollbar">
                <div className="editor" ref={onRef}>
                  <ContentEditable className="editor-input" />
                </div>
              </div>
            }
            ErrorBoundary={LexicalErrorBoundary}
            placeholder={<div className="editor-placeholder">placeholder</div>}
          />
          <ActionsPlugin />
          <HistoryPlugin />
          <AutoFocusPlugin />
          <CodeHighlightPlugin />
          <LinkPlugin />
          <PageBreakPlugin />
          <ImagesPlugin />
          <InlineImagePlugin />
          <HorizontalRulePlugin />
          <EmojisPlugin />
          <ListPlugin />
          <CheckListPlugin />
          <TabFocusPlugin />
          <PollPlugin />
          {/* <ContextMenuPlugin /> */}
          <TablePlugin hasCellMerge={true} hasCellBackgroundColor={true} />
          <TableCellResizer />
          <TableHoverActionsPlugin />
          {/* <ComponentPickerPlugin /> */}
          <CollapsiblePlugin />
          <MyOnChangePlugin onChange={(e) => console.log(e)} />
          <TableOfContentsPlugin />
          {floatingAnchorElem && !isSmallWidthViewport && (
            <>
              {/* <DraggableBlockPlugin anchorElem={floatingAnchorElem} /> */}
              <CodeActionMenuPlugin anchorElem={floatingAnchorElem} />
              <FloatingLinkEditorPlugin
                anchorElem={floatingAnchorElem}
                isLinkEditMode={isLinkEditMode}
                setIsLinkEditMode={setIsLinkEditMode}
              />
              <TableActionMenuPlugin
                anchorElem={floatingAnchorElem}
                cellMerge={true}
              />
              <FloatingTextFormatToolbarPlugin
                anchorElem={floatingAnchorElem}
                setIsLinkEditMode={setIsLinkEditMode}
              />
            </>
          )}
        </div>
      </section>
    </LexicalComposer>
  )
}
