import type { Klass, LexicalNode } from 'lexical'
import { HeadingNode, QuoteNode } from '@lexical/rich-text'
import { ListItemNode, ListNode } from '@lexical/list'
import { HorizontalRuleNode } from '@lexical/react/LexicalHorizontalRuleNode'
import { CodeHighlightNode, CodeNode } from '@lexical/code'
import { LinkNode } from '@lexical/link'
import { PageBreakNode } from './PageBreakNode'
import { InlineImageNode } from './InlineImageNode/InlineImageNode'
import { PollNode } from './PollNode'
import { LayoutContainerNode } from './LayoutContainerNode'
import { LayoutItemNode } from './LayoutItemNode'
import { StickyNode } from './StickyNode'
import { EmojiNode } from './EmojiNode'
import { TableCellNode, TableNode, TableRowNode } from '@lexical/table'
import { CollapsibleContainerNode } from '../plugins/CollapsiblePlugin/CollapsibleContainerNode'
import { CollapsibleContentNode } from '../plugins/CollapsiblePlugin/CollapsibleContentNode'
import { CollapsibleTitleNode } from '../plugins/CollapsiblePlugin/CollapsibleTitleNode'
import { KeywordNode } from './KeywordNode'
import { MentionNode } from './MentionNode'
import { ImageNode } from './ImageNode'

const nodes: Klass<LexicalNode>[] = [
  HorizontalRuleNode,
  HeadingNode,
  ListNode,
  ListItemNode,
  QuoteNode,
  CodeNode,
  CodeHighlightNode,
  LinkNode,
  PageBreakNode,
  ImageNode,
  InlineImageNode,
  PollNode,
  LayoutContainerNode,
  LayoutItemNode,
  StickyNode,
  EmojiNode,
  TableCellNode,
  TableNode,
  TableRowNode,
  CollapsibleContainerNode,
  CollapsibleContentNode,
  CollapsibleTitleNode,
  KeywordNode,
  MentionNode,
]

export default nodes
