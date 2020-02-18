
import React, {FunctionComponent, useState, useEffect} from "react";

import {Controlled as CodeMirror} from 'react-codemirror2'
import ReactMarkdown from "react-markdown";
import CodeBlock from "./Components/CodeBlock";

import "./MarkdownEdit.scss";
import 'github-markdown-css';

require('codemirror/lib/codemirror.css');
require('codemirror/theme/material.css');
require("codemirror/mode/markdown/markdown.js");

interface Props {
  init?: string;
  onChange: (input: string) =>  void;
}



const MarkdownEdit: FunctionComponent<Props> = ({init, onChange}) => {

  const [input, setInput] = useState<string>("");

  useEffect(
    () => {
      if (init) {
        setInput(init)
      }
    },
    []
  )


  return (
    <div className={`markdown-edit`}>

      <CodeMirror
        value={input}
        options={{
          mode: 'markdown',
          theme: 'material',
          lineNumbers: false
        }}
        onBeforeChange={(editor, data, value) => {
          setInput(value || "");
          onChange(input);
        }}
        onChange={(editor, data, value) => {
        }}
      />

      <div className='markdown-body'>
            <ReactMarkdown
              source={input}
              renderers={{
                code: CodeBlock,
              }}
            />
      </div>

    </div>
  )

};

export default MarkdownEdit;
