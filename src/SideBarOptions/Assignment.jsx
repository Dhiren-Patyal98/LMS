import style from '../css/assignment.module.css'
import PropTypes from 'prop-types';
import { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { useState } from 'react'
export default function Assignment({setprogressbar ,progressbar }) {

  const [buttonClicked, setButtonClicked] = useState(false);
  const [editorContent, setEditorContent] = useState('');

  const handleClick = () => {
    if (!buttonClicked) {
      setButtonClicked(true);
      setprogressbar(prevProgressbar => prevProgressbar + 1);
      console.log(progressbar)
    }
  };

  const log = () => {
    if (editorRef.current) {
      setEditorContent(editorRef.current.getContent());
    }
  };

  const editorRef = useRef(null);

  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const buttonStyle = {
    backgroundColor: 'purple',
    color: 'white',
    borderColor: 'white',
    width: '12vh',
    transition: 'background-color 0.3s, border-color 0.3s'
  };

  return (
    <>
      <div className={`card ${style.ques}`}>
        <div className='card-body'>
          <p>Enter a python code which can do basic calculations. </p>
        </div>

      </div>
      <Editor
        apiKey='zz04k1tc5w8gnogwyss4cpp7yxez5jbxi7enlubc6gyrku9k'
        onInit={(evt, editor) => editorRef.current = editor}
        initialValue=""
        onEditorChange={log}
        init={{
          height: 500,
          menubar: false,
          plugins: [
            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
            'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
          ],
          toolbar: 'undo redo | blocks | ' +
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
      />
      <div className={style.button}>
        <button type='submit' size="lg"

          style={{
            ...buttonStyle,
            backgroundColor: isHovered ? '#6f42c1' : '#581c87',
            borderColor: isHovered ? '#6f42c1' : 'white',
            opacity: editorContent ? 1 : 0.5,
            cursor: editorContent ? 'pointer' : 'not-allowed'
          }}
          onMouseEnter={handleHover}
          onMouseLeave={handleMouseLeave}
          className="btn"
          disabled={!editorContent}
          onClick={handleClick}
        >Submit</button>

    </div>
    </>
  );
}
Assignment.propTypes = {
  progressbar:PropTypes.func.isRequired,
  setprogressbar:PropTypes.func.isRequired,
};