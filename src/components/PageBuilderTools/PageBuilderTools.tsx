'use client'
import GrapesJS, { Editor } from 'grapesjs'
import { PropsWithChildren, useEffect, useState } from 'react'
import 'grapesjs/dist/css/grapes.min.css'

export interface GrapesjsReactProps {
  id: HTMLElement['id']

  onInit?(editor?: Editor): void

  onDestroy?(): void
}

const PageBuilderTools = (
  props: PropsWithChildren<GrapesjsReactProps> &
    Parameters<typeof GrapesJS.init>[0]
) => {
  const { id, onInit, onDestroy, children, ...options } = props

  const [editor, setEditor] = useState<Editor>()

  useEffect(() => {
    const selector = `#${id}`
    if (!editor) {
      const editor = GrapesJS.init({
        container: selector,
        fromElement: !!children,
        ...options,
      })
      setEditor(editor)
      if (typeof onInit === 'function') {
        onInit(editor)
      }
    }
  }, [children, editor, id, onInit, options])

  useEffect(() => {
    return function cleanup() {
      if (editor) {
        if (typeof onDestroy === 'function') {
          onDestroy()
        }
        const index: number = GrapesJS.editors.findIndex(
          (e) => e.Config.container === editor.Config.container
        )
        if (typeof index === 'number' && index >= 0) {
          GrapesJS.editors.splice(index, 1)
        }
        editor.destroy()
      }
    }
  }, [editor, onDestroy])

  return <div id={id}>{children}</div>
}

export default PageBuilderTools
