[![npm package](https://badge.fury.io/js/ts-mdast.svg)](https://www.npmjs.com/package/ts-mdast)
[![License](https://img.shields.io/github/license/slune-org/ts-mdast.svg)](https://github.com/slune-org/ts-mdast/blob/master/LICENSE)
[![Build Status](https://travis-ci.org/slune-org/ts-mdast.svg?branch=master)](https://travis-ci.org/slune-org/ts-mdast)
[![Coverage Status](https://coveralls.io/repos/github/slune-org/ts-mdast/badge.svg?branch=master)](https://coveralls.io/github/slune-org/ts-mdast?branch=master)
[![Issues](https://img.shields.io/github/issues/slune-org/ts-mdast.svg)](https://github.com/slune-org/ts-mdast/issues)

# ts-mdast - Typescript utilities for Markdown Abstract Syntax Tree

This package provides utilities to work with `Markdown` abstract syntax tree (_MDAST_). It contains:

- functions to create the different node types (also useful in pure _Javascript_);
- type guard and assertion functions to ensure the node is of expected type (especially useful with _Typescript_).

This package also re-export all types of `@types/mdast` and type of `@types/unist` which are useful for `Markdown`. It is therefore not necessary to include those packages if you are using this one.

# Language/langue

Documents, messages, code (including variable names and comments), are in English.

Anyway, because Slune is French firm, all documents and important messages must also be provided in French. Other translations are welcome.

:fr: Une version française de ce document se trouve [ici](doc/fr/README.md).

# Installation

Installation is done using `npm install` command:

```bash
$ npm install --save ts-mdast
```

# Usage

For each _NodeType_ node type, the package contains :

- an `assertNodeType(node: Node)` function raising an exception if `node` is not of type *NodeType* ;
- an `isNodeType(node: Node)` function returning `true` if `node` is of type *NodeType* ;
- a `createNodeType(...)` function creating a node of type _NodeType_.

The first two functions are understood by _Typescript_ which is after able to control the node type in an appropriate way.

The creation function is used this as following:

    createNodeType(mandatory1, mandatory2 [, optional1 [, optional2 [, optional3]] | {optional1, optional2, optional3}] [, children])

where `mandatory_` represent the mandatory parameters, `optional_` the optional parameters and `children` an array with child nodes. Following calls are therefore possible:

```typescript
createNodeType(mandatory1, mandatory2, optional1, [child1, child2])
createNodeType(mandatory1, mandatory2, optional1, optional2)
createNodeType(mandatory1, mandatory2, { optional1, optional3 })
createNodeType(mandatory1, mandatory2, { optional2, optional3 }, [child1, child2])
createNodeType(mandatory1, mandatory2, [child1, child2])
```

The array containing children is directly used in the node and can therefore be modified after node creation:

```typescript
const children: Content[] = []
createNodeType(mandatory1, mandatory2, children)
children.push(createNodeType(mandatory1, mandatory2))
```

**Notes:**

- The `createNodeType(...)` function only exists for concrete nodes (not on `Content` nor `BlockContent` for example).
- All node types do not have mandatory parameters, optional parameters or child nodes.

## Nodes

### Parent

Reference: [Parent](https://github.com/syntax-tree/mdast#parent)

Type assertion:

```typescript
function assertParent(node: Node): asserts node is Parent
```

Type guard:

```typescript
function isParent(node: Node): node is Parent
```

### Literal

Reference: [Literal](https://github.com/syntax-tree/mdast#literal)

Type assertion:

```typescript
function assertLiteral(node: Node): asserts node is Literal
```

Type guard:

```typescript
function isLiteral(node: Node): node is Literal
```

### Content

Reference: [Content](https://github.com/syntax-tree/mdast#content)

Type assertion:

```typescript
function assertContent(node: Node): asserts node is Content
```

Type guard:

```typescript
function isContent(node: Node): node is Content
```

### TopLevelContent

Reference: [TopLevelContent](https://github.com/syntax-tree/mdast#toplevelcontent)

Type assertion:

```typescript
function assertTopLevelContent(node: Node): asserts node is TopLevelContent
```

Type guard:

```typescript
function isTopLevelContent(node: Node): node is TopLevelContent
```

### BlockContent

Reference: [BlockContent](https://github.com/syntax-tree/mdast#blockcontent)

Type assertion:

```typescript
function assertBlockContent(node: Node): asserts node is BlockContent
```

Type guard:

```typescript
function isBlockContent(node: Node): node is BlockContent
```

### FrontmatterContent

Reference: [FrontmatterContent](https://github.com/syntax-tree/mdast#frontmattercontent)

Type assertion:

```typescript
function assertFrontmatterContent(node: Node): asserts node is FrontmatterContent
```

Type guard:

```typescript
function isFrontmatterContent(node: Node): node is FrontmatterContent
```

### DefinitionContent

Reference: [DefinitionContent](https://github.com/syntax-tree/mdast#definitioncontent)

Type assertion:

```typescript
function assertDefinitionContent(node: Node): asserts node is DefinitionContent
```

Type guard:

```typescript
function isDefinitionContent(node: Node): node is DefinitionContent
```

### ListContent

Reference: [ListContent](https://github.com/syntax-tree/mdast#listcontent)

Type assertion:

```typescript
function assertListContent(node: Node): asserts node is ListContent
```

Type guard:

```typescript
function isListContent(node: Node): node is ListContent
```

### TableContent

Reference: [TableContent](https://github.com/syntax-tree/mdast#tablecontent)

Type assertion:

```typescript
function assertTableContent(node: Node): asserts node is TableContent
```

Type guard:

```typescript
function isTableContent(node: Node): node is TableContent
```

### RowContent

Reference: [RowContent](https://github.com/syntax-tree/mdast#rowcontent)

Type assertion:

```typescript
function assertRowContent(node: Node): asserts node is RowContent
```

Type guard:

```typescript
function isRowContent(node: Node): node is RowContent
```

### PhrasingContent

Reference: [PhrasingContent](https://github.com/syntax-tree/mdast#phrasingcontent)

Type assertion:

```typescript
function assertPhrasingContent(node: Node): asserts node is PhrasingContent
```

Type guard:

```typescript
function isPhrasingContent(node: Node): node is PhrasingContent
```

### StaticPhrasingContent

Reference: [StaticPhrasingContent](https://github.com/syntax-tree/mdast#staticphrasingcontent)

Type assertion:

```typescript
function assertStaticPhrasingContent(node: Node): asserts node is StaticPhrasingContent
```

Type guard:

```typescript
function isStaticPhrasingContent(node: Node): node is StaticPhrasingContent
```

### Root

Reference: [Root](https://github.com/syntax-tree/mdast#root)

Type assertion:

```typescript
function assertRoot(node: Node): asserts node is Root
```

Type guard:

```typescript
function isRoot(node: Node): node is Root
```

Creation:

```typescript
function createRoot(children?: Content[]): Root
```

### Paragraph

Reference: [Paragraph](https://github.com/syntax-tree/mdast#paragraph)

Type assertion:

```typescript
function assertParagraph(node: Node): asserts node is Paragraph
```

Type guard:

```typescript
function isParagraph(node: Node): node is Paragraph
```

Creation:

```typescript
function createParagraph(children?: PhrasingContent[]): Paragraph
```

### Heading

Reference: [Heading](https://github.com/syntax-tree/mdast#heading)

Type assertion:

```typescript
function assertHeading(node: Node): asserts node is Heading
```

Type guard:

```typescript
function isHeading(node: Node): node is Heading
```

Creation:

```typescript
function createHeading(depth: 1 | 2 | 3 | 4 | 5 | 6, children?: PhrasingContent[])
```

### ThematicBreak

Reference: [ThematicBreak](https://github.com/syntax-tree/mdast#thematicbreak)

Type assertion:

```typescript
function assertThematicBreak(node: Node): asserts node is ThematicBreak
```

Type guard:

```typescript
function isThematicBreak(node: Node): node is ThematicBreak
```

Creation:

```typescript
function createThematicBreak(): ThematicBreak
```

### Blockquote

Reference: [Blockquote](https://github.com/syntax-tree/mdast#blockquote)

Type assertion:

```typescript
function assertBlockquote(node: Node): asserts node is Blockquote
```

Type guard:

```typescript
function isBlockquote(node: Node): node is Blockquote
```

Creation:

```typescript
function createBlockquote(children?: BlockContent[]): Blockquote
```

### List

Reference: [List](https://github.com/syntax-tree/mdast#list)

Type assertion:

```typescript
function assertList(node: Node): asserts node is List
```

Type guard:

```typescript
function isList(node: Node): node is List
```

Creation:

```typescript
function createList(ordered: boolean, start: number, spread: boolean, children?: ListContent[]): List
function createList(ordered: boolean, start: number, children?: ListContent[]): List
function createList(ordered: boolean, children?: ListContent[]): List
function createList(children?: ListContent[]): List
function createList(
  options: { ordered?: boolean; start?: number; spread?: boolean },
  children?: ListContent[]
): List
```

### ListItem

Reference: [ListItem](https://github.com/syntax-tree/mdast#listitem)

Type assertion:

```typescript
function assertListItem(node: Node): asserts node is ListItem
```

Type guard:

```typescript
function isListItem(node: Node): node is ListItem
```

Creation:

```typescript
function createListItem(checked: boolean, spread: boolean, children?: BlockContent[]): ListItem
function createListItem(checked: boolean, children?: BlockContent[]): ListItem
function createListItem(children?: BlockContent[]): ListItem
function createListItem(
  options: { checked?: boolean; spread?: boolean },
  children?: BlockContent[]
): ListItem
```

### Table

Reference: [Table](https://github.com/syntax-tree/mdast#table)

Type assertion:

```typescript
function assertTable(node: Node): asserts node is Table
```

Type guard:

```typescript
function isTable(node: Node): node is Table
```

Creation:

```typescript
function createTable(align: AlignType[], children?: TableContent[]): Table
function createTable(children?: TableContent[]): Table
function createTable(options: { align?: AlignType[] }, children?: TableContent[]): Table
```

### TableRow

Reference: [TableRow](https://github.com/syntax-tree/mdast#tablerow)

Type assertion:

```typescript
function assertTableRow(node: Node): asserts node is TableRow
```

Type guard:

```typescript
function isTableRow(node: Node): node is TableRow
```

Creation:

```typescript
function createTableRow(children?: RowContent[]): TableRow
```

### TableCell

Reference: [TableCell](https://github.com/syntax-tree/mdast#tablecell)

Type assertion:

```typescript
function assertTableCell(node: Node): asserts node is TableCell
```

Type guard:

```typescript
function isTableCell(node: Node): node is TableCell
```

Creation:

```typescript
function createTableCell(children?: PhrasingContent[]): TableCell
```

### HTML

Reference: [HTML](https://github.com/syntax-tree/mdast#html)

Type assertion:

```typescript
function assertHTML(node: Node): asserts node is HTML
```

Type guard:

```typescript
function isHTML(node: Node): node is HTML
```

Creation:

```typescript
function createHTML(value: string): HTML
```

### Code

Reference: [Code](https://github.com/syntax-tree/mdast#code)

Type assertion:

```typescript
function assertCode(node: Node): asserts node is Code
```

Type guard:

```typescript
function isCode(node: Node): node is Code
```

Creation:

```typescript
function createCode(value: string, lang?: string, meta?: string): Code
function createCode(value: string, options: { lang?: string; meta?: string }): Code
```

### YAML

Reference: [YAML](https://github.com/syntax-tree/mdast#yaml)

Type assertion:

```typescript
function assertYAML(node: Node): asserts node is YAML
```

Type guard:

```typescript
function isYAML(node: Node): node is YAML
```

Creation:

```typescript
function createYAML(value: string): YAML
```

### Definition

Reference: [Definition](https://github.com/syntax-tree/mdast#definition)

Type assertion:

```typescript
function assertDefinition(node: Node): asserts node is Definition
```

Type guard:

```typescript
function isDefinition(node: Node): node is Definition
```

Creation:

```typescript
function createDefinition(identifier: string, url: string, label?: string, title?: string): Definition
function createDefinition(
  identifier: string,
  url: string,
  options: { label?: string; title?: string }
): Definition
```

### FootnoteDefinition

Reference: [FootnoteDefinition](https://github.com/syntax-tree/mdast#footnotedefinition)

Type assertion:

```typescript
function assertFootnoteDefinition(node: Node): asserts node is FootnoteDefinition
```

Type guard:

```typescript
function isFootnoteDefinition(node: Node): node is FootnoteDefinition
```

Creation:

```typescript
function createFootnoteDefinition(
  identifier: string,
  label: string,
  children?: BlockContent[]
): FootnoteDefinition
function createFootnoteDefinition(identifier: string, children?: BlockContent[]): FootnoteDefinition
function createFootnoteDefinition(
  identifier: string,
  options: { label?: string },
  children?: BlockContent[]
): FootnoteDefinition
```

### Text

Reference: [Text](https://github.com/syntax-tree/mdast#text)

Type assertion:

```typescript
function assertText(node: Node): asserts node is Text
```

Type guard:

```typescript
function isText(node: Node): node is Text
```

Creation:

```typescript
function createText(value: string): Text
```

### Emphasis

Reference: [Emphasis](https://github.com/syntax-tree/mdast#emphasis)

Type assertion:

```typescript
function assertEmphasis(node: Node): asserts node is Emphasis
```

Type guard:

```typescript
function isEmphasis(node: Node): node is Emphasis
```

Creation:

```typescript
function createEmphasis(children?: PhrasingContent[]): Emphasis
```

### Strong

Reference: [Strong](https://github.com/syntax-tree/mdast#strong)

Type assertion:

```typescript
function assertStrong(node: Node): asserts node is Strong
```

Type guard:

```typescript
function isStrong(node: Node): node is Strong
```

Creation:

```typescript
function createStrong(children?: PhrasingContent[]): Strong
```

### Delete

Reference: [Delete](https://github.com/syntax-tree/mdast#delete)

Type assertion:

```typescript
function assertDelete(node: Node): asserts node is Delete
```

Type guard:

```typescript
function isDelete(node: Node): node is Delete
```

Creation:

```typescript
function createDelete(children?: PhrasingContent[]): Delete
```

### InlineCode

Reference: [InlineCode](https://github.com/syntax-tree/mdast#inlinecode)

Type assertion:

```typescript
function assertInlineCode(node: Node): asserts node is InlineCode
```

Type guard:

```typescript
function isInlineCode(node: Node): node is InlineCode
```

Creation:

```typescript
function createInlineCode(value: string): InlineCode
```

### Break

Reference: [Break](https://github.com/syntax-tree/mdast#break)

Type assertion:

```typescript
function assertBreak(node: Node): asserts node is Break
```

Type guard:

```typescript
function isBreak(node: Node): node is Break
```

Creation:

```typescript
function createBreak(): Break
```

### Link

Reference: [Link](https://github.com/syntax-tree/mdast#link)

Type assertion:

```typescript
function assertLink(node: Node): asserts node is Link
```

Type guard:

```typescript
function isLink(node: Node): node is Link
```

Creation:

```typescript
function createLink(url: string, title: string, children?: StaticPhrasingContent[]): Link
function createLink(url: string, children?: StaticPhrasingContent[]): Link
function createLink(url: string, options: { title?: string }, children?: StaticPhrasingContent[]): Link
```

### Image

Reference: [Image](https://github.com/syntax-tree/mdast#image)

Type assertion:

```typescript
function assertImage(node: Node): asserts node is Image
```

Type guard:

```typescript
function isImage(node: Node): node is Image
```

Creation:

```typescript
function createImage(url: string, alt?: string, title?: string): Image
function createImage(url: string, options: { alt?: string; title?: string }): Image
```

### LinkReference

Reference: [LinkReference](https://github.com/syntax-tree/mdast#linkreference)

Type assertion:

```typescript
function assertLinkReference(node: Node): asserts node is LinkReference
```

Type guard:

```typescript
function isLinkReference(node: Node): node is LinkReference
```

Creation:

```typescript
function createLinkReference(
  identifier: string,
  referenceType: ReferenceType,
  label: string,
  children?: StaticPhrasingContent[]
): LinkReference
function createLinkReference(
  identifier: string,
  referenceType: ReferenceType,
  children?: StaticPhrasingContent[]
): LinkReference
function createLinkReference(
  identifier: string,
  referenceType: ReferenceType,
  options: { label?: string },
  children?: StaticPhrasingContent[]
): LinkReference
```

### ImageReference

Reference: [ImageReference](https://github.com/syntax-tree/mdast#imagereference)

Type assertion:

```typescript
function assertImageReference(node: Node): asserts node is ImageReference
```

Type guard:

```typescript
function isImageReference(node: Node): node is ImageReference
```

Creation:

```typescript
function createImageReference(
  identifier: string,
  referenceType: ReferenceType,
  alt?: string,
  label?: string
): ImageReference
function createImageReference(
  identifier: string,
  referenceType: ReferenceType,
  options: { alt?: string; label?: string }
): ImageReference
```

### Footnote

Reference: [Footnote](https://github.com/syntax-tree/mdast#footnote)

Type assertion:

```typescript
function assertFootnote(node: Node): asserts node is Footnote
```

Type guard:

```typescript
function isFootnote(node: Node): node is Footnote
```

Creation:

```typescript
function createFootnote(children?: PhrasingContent[]): Footnote
```

### FootnoteReference

Reference: [FootnoteReference](https://github.com/syntax-tree/mdast#footnotereference)

Type assertion:

```typescript
function assertFootnoteReference(node: Node): asserts node is FootnoteReference
```

Type guard:

```typescript
function isFootnoteReference(node: Node): node is FootnoteReference
```

Creation:

```typescript
function createFootnoteReference(identifier: string, label?: string): FootnoteReference
function createFootnoteReference(identifier: string, options: { label?: string }): FootnoteReference
```

# Contributing

Even though we cannot guarantee a response time, please feel free to file an issue if you have any question or problem using the package.

_Pull Requests_ are welcome. You can, of course, submit corrections or improvements for code, but do not hesitate to also improve documentation, even for small spell or grammar errors.
