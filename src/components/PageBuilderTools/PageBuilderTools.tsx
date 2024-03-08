'use client'
import GrapesJS, { Editor, EditorConfig, Plugin, PluginOptions } from 'grapesjs'
import { PropsWithChildren, useEffect, useState } from 'react'
import 'grapesjs/dist/css/grapes.min.css'
import './style.css'
// import 'grapesjs-preset-webpage/dist/grapesjs-preset-webpage.min.css'
import plugin from 'grapesjs-preset-webpage'
import websitePlugin from 'grapesjs-preset-webpage'
import basicBlockPlugin from 'grapesjs-blocks-basic'
import formPlugin from 'grapesjs-plugin-forms'

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
  console.log(id, 'asd')

  useEffect(() => {
    const selector = `#${id}`
    if (!editor) {
      const editor = GrapesJS.init({
        container: selector,
        fromElement: !!children,
        height: '700px',
        width: '100%',
        plugins: [websitePlugin, basicBlockPlugin, formPlugin],
        storageManager: {
          id: 'gjs-',
          type: 'local',
          autosave: true,
        },
        deviceManager: {
          devices: [
            {
              id: 'desktop',
              name: 'Desktop',
              width: '',
            },
            {
              id: 'tablet',
              name: 'Tablet',
              width: '768px',
              widthMedia: '992px',
            },
            {
              id: 'mobilePortrait',
              name: 'Mobile portrait',
              width: '320px',
              widthMedia: '575px',
            },
          ],
        },
        // pluginsOpts: {
        //   [plugin as any]: {
        //     blocksBasicOpts: {
        //       blocks: [
        //         'column1',
        //         'column2',
        //         'column3',
        //         'column3-7',
        //         'text',
        //         'link',
        //         'image',
        //         'video',
        //       ],
        //       flexGrid: 1,
        //     },
        //     blocks: ['link-block', 'quote', 'text-basic'],
        //   },
        // },
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
