import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default function App() {
  return (
    <div className='App'>
      {/* <h2>CKEditor 5 React App</h2> */}
      <CKEditor
        editor={ ClassicEditor }
        data=""
        onReady={ ( editor ) => {
          console.log( "CKEditor5 React Component is ready to use!", editor );
        } }
        onChange={ ( event, editor ) => {
          const data = editor.getData();
          console.log( { event, editor, data } );
        } }
        config= {{
            toolbar : ['heading','bold',
          'italic','bulletedList',
          'numberedList','insertTable','undo',
          'redo']
        }}
        
      />
    </div>
  );
}
