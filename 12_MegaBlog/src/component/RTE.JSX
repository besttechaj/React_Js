import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { Controller } from 'react-hook-form';
const RTE = ({ name, control, label, defaultValue = '' }) => {
  return (
    <div>
      {label ? <label>{label}</label> : 'unknown_label'}
      {label}
      <br />
      <br />
      <Controller
        name={name || 'unknownName_content'}
        control={control}
        render={({ field: { onChange } }) => (
          <Editor
            initialValue={defaultValue}
            init={{
              height: 500,
              menubar: true,
              plugins: [
                'advlist',
                'autolink',
                'lists',
                'link',
                'image',
                'charmap',
                'print',
                'preview',
                'anchor',
                'searchreplace',
                'visualblocks',
                'fullscreen',
                'insertdatetime',
                'media',
                'table',
                'paste',
                'code',
                'help',
                'wordcount',
              ],
              toolbar: [
                'undo redo | formatselect | bold italic underline |  alignleft aligncenter alignright alignjustify  bullist numlist outdent indent | removeformat | help',
              ],
            }}
            onEditorChange={onChange}
          />
        )}
      />
    </div>
  );
};

export default RTE;
