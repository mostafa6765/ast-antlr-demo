import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Editor from "@monaco-editor/react";
import tsExampleCodeData from '@constant/example-code';
import cExampleCodeData from '@constant/c-example-code'
import cppExampleCodeData from '@constant/cPP-example-code'
import SelectLang from '@component/Select';
import { ASTListener } from '@utils/ast-listener';

export default function Home() {
  const [code, setCode] = useState('' as any);
  const [theTree, setTheTree] = useState('' as any);
  const [selectedLang, setSelectedLang] = useState('' as any)
  const editorRef: any = useRef()
  
  useEffect(() => {
    if (selectedLang !== '') {
      generateAST();
    }
  }, [code])

  function handleEditorChange(value: any, event: any) {
    setCode(value);
  }

  function setTheLang(data: any) {
    let getData: any = data
    if (data.langOptions?.lang === 'c') {
      getData['code'] = cExampleCodeData
    } else if (data.langOptions?.lang === 'cpp') {
      getData['code'] = cppExampleCodeData
    } else if (data.langOptions?.lang === 'typescript') {
      getData['code'] = tsExampleCodeData
    }
    setSelectedLang(getData)
    setCode(getData['code'])
  }

  function generateAST() {
    let ast: any = new ASTListener(selectedLang?.langOptions?.ast, code)
    setTheTree(ast.getAstData())
  }

  function handleEditorDidMount(editor: any, monaco: any) {
    editorRef.current = editor
  }

  function getSelection() {
    let data:any = editorRef.current
        .getModel()
        .getValueInRange(editorRef.current.getSelection())
    console.log(data)
    console.log(editorRef.current)
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
          {/* <button onClick={a} >a</button> */}
          <p className={styles.link}>
            {/* <Link href="/ast-backend"> Go With backend api</Link> */}
          </p>
        </div>
        <div className={styles.grid}>
          <div className={styles.element_code}>
          <div>
            <SelectLang
              setTheLang={setTheLang}
            />
          </div>
            <p>{selectedLang?.name} code</p>
            <Editor
              height="60vh"
              defaultLanguage={selectedLang.langOptions?.lang}
              defaultValue={selectedLang.code}
              value={code}
              onChange={handleEditorChange}
              onMount={handleEditorDidMount}
            />
          </div>
          <div className={styles.element_button}>
            <button onClick={() => generateAST()} >Generate</button>
          </div>
          <div className={styles.element_code}>
            <p>{selectedLang?.langOptions?.ast} (json format)</p>
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
