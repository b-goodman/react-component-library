import React, {FunctionComponent} from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';

interface Props {
    language: string;
    value: string;
}

const  CodeBlock: FunctionComponent<Props> = ({language, value}) => {
    return (
        <SyntaxHighlighter language={language}>
            {value || ""}
        </SyntaxHighlighter>
    );
}

export default CodeBlock;