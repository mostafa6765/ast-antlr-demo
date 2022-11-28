import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

import Editor from "@monaco-editor/react";
import { http } from '@utils/http/axios';
import exampleCodeData from '@constant/example-code';

export default function Home() {
  const [code, setCode] = useState('' as any)
  const [theTree, setTheTree] = useState('' as any)

  useEffect(() => {
    setCode(exampleCodeData)
  }, [])
  
  function handleEditorChange(value: any, event: any) {
    setCode(value)
  }

  function generateAST() {
    http.post('/ast/get-tree', {
      code: code
    }).then((response: any) => {
      setTheTree(response.data)
    }).catch((error: any) => {
      // TODO: ERROR based implementation.
    })
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
