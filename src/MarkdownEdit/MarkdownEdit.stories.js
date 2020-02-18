import React, {useState} from "react";
import MarkdownEdit from "./MarkdownEdit";

export default {
  title: "MarkdownEdit"
};

export const Primary = () => <MarkdownEdit />;

export const Init = () => {
  const init=`# Test

+ 1
+ 2

> Blockquote

\`\`\`javascript
export const Init = () => {
  const init=\`# Test

+ 1
+ 2

> Blockquote

\`;
\`\`\`

`;

  return <MarkdownEdit init={init} onChange={input => console.log(input)}/>;
}

