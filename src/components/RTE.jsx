import React from 'react'
import { Editor } from '@tinymce/tinymce-react';
import {Controller} from 'react-hook-form'

export default function RTE({name, control, defaultValue ='', label}) {
  return (
    <>
        <div className='w-full'>
            {label && <label className='inline-block mb-1 bg-pink-100'>{label}</label>}

            <Controller
             name= {name || 'content'}
             control={control}
             render={({field: {onChange}}) => (
                <Editor
                initialValue={defaultValue}
               
                init={{
                    height: 1000,
                    menubar: true,
                    plugins: [
                        'image',
                        'advlist',
                        'autolink',
                        'lists',
                        'link',
                        'charmap',
                        'preview',
                        'anchor',
                        'searchreplace',
                        'visualblocks',
                        'code',
                        'fullscreen',
                        'insertdatetime',
                        'media',
                        'table',
                        'help',
                        'wordcount',
                        'anchor',
                        'autoresize'
                    ],
                    toolbar:
                    "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
                    content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
                }}
                onEditorChange={onChange}
                />
                )}
            />
            
        </div>
    </>
  )
}

