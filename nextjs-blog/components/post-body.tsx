// import markdownStyles from './markdown-styles.module.css'
import '@toast-ui/editor/dist/toastui-editor.css';

export default function PostBody({ content }) {
  return (
    <div>
      <style jsx global>{`
          .tui-editor-contents {
            font-size: 1rem
          }
      `}
      </style>
      <div
        className='tui-editor-contents'
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}
