import Head from 'next/head';
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { TypeScriptLexer } from '@theGrammar/TypeScriptLexer';
import { TypeScriptParser } from '@theGrammar/TypeScriptParser';
import getAST from '@utils/ast-parser/get-ast';
import Editor from "@monaco-editor/react";
import exampleCodeData from '@constant/example-code';


export default function Home() {
  const [code, setCode] = useState('' as any);
  const [theTree, setTheTree] = useState('' as any);

  useEffect(() => {
    setCode(exampleCodeData);
  }, [])
  
  useEffect(() => {
    generateAST();
  }, [code])

  function handleEditorChange(value: any, event: any) {
    setCode(value);
  }

  function generateAST() {
    let inputStream: any = new ANTLRInputStream(code);
    let lexer: any = new TypeScriptLexer(inputStream);
    let tokenStream: any = new CommonTokenStream(lexer);
    let parser: any = new TypeScriptParser(tokenStream);
    parser.buildParseTree = true;
    let tree: any = parser.program();
    let ast: any = getAST(tree);
    setTheTree(ast);
  }
  
  return (
    <div className={styles.container}>
      <Head>
        <title>AST-ANTLR4TS</title>
        <meta name="description" content="AST with ANTLR4" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          <h1 className={styles.title}>
            Abstract Syntax Tree (AST Demo)
          </h1>
          <p className={styles.link}>
            <Link href="/ast-backend"> Go With backend api</Link>
          </p>
        </div>
        <div className={styles.grid}>
          <div className={styles.element_code}>
            <p>Javascript/Typescript code</p>
            <Editor
              height="60vh"
              defaultLanguage="javascript"
              defaultValue={code}
              onChange={handleEditorChange}
            />
          </div>
          <div className={styles.element_button}>
            <button onClick={() => generateAST()} >Generate</button>
          </div>
          <div className={styles.element_code}>
            <p>AST (json format)</p>
            <Editor
              height="60vh"
              defaultLanguage="json"
              value={JSON.stringify(theTree, null, 2)}
              defaultValue={JSON.stringify(theTree, null, 2)}
              options={{
                readOnly: true
              }}
            />
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/code4mk"
          target="_blank"
          rel="noopener noreferrer"
        >
          code4mk
        </a>
      </footer>
    </div>
  )
}
