import Head from 'next/head';
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { TypeScriptLexer } from '@theGrammar/typescript/TypeScriptLexer';
import { TypeScriptParser } from '@theGrammar/typescript/TypeScriptParser';
import Editor from "@monaco-editor/react";
import exampleCodeData from '@constant/c-example-code';
import { getVisitorData } from '@utils/custom-visitor';
import {
  getVisitorAstData
} from '@utils/custom-ast-visitor';
export default function Home() {
  const [code, setCode] = useState('' as any);
  const [theTree, setTheTree] = useState('' as any);

  useEffect(() => {
    setCode(`
import Reverse from "./Reverse.js";

let SingleDigit = [1,2,3,4,5,8,9]
let DoubleDigit = [34,56,23]

class AddSub {
	constructor(num1,num2){
		this.num1 = num1;
		this.num2 = num2;
	}
	
	addition() {
		return this.num1 + this.num2;
	}
	
	Substraction() {
		return this.num1 + this.num2;
	}
}

function TDMatrix(num1,num2){
	let arr = []
	for(let i = 0; i < num1; i++){
		let SubArr = []
		for(let j = 0; j < num2; j++){
			SubArr.push(j)
		}
		arr.push(SubArr)
	}
}

class MultDiv {
	constructor(num1,num2){
		this.num1 = num1;
		this.num2 = num2;
	}
	
	Multiplication() {
		return this.num1 * this.num2;
	}
	
	Division() {
		return this.num1/this.num2;
	}
}

const MultipliedNum = new MultDiv(34,67)
console.log(MultipliedNum.Multiplication())

function CallReverse(){
	let val = Reverse(SingleDigit)
	let addVal = new AddSub(34,55)
	val.push(addVal.addition())
	return val;
}

const RevAs = CallReverse()
console.log(RevAs)
    `);
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
    lexer.strictMode = false
    let tokenStream: any = new CommonTokenStream(lexer);
    let parser: any = new TypeScriptParser(tokenStream);
    //parser.buildParseTree = true;
    let tree: any = parser.program();
    let data: any = getVisitorAstData(tree, inputStream)
    setTheTree(data)
    console.log(data)
    //console.log(what(tree, inputStream))

    //console.log(tree.toStringTree(parser.rulesName))
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
            <p>c code</p>
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
              value={JSON.stringify(theTree, null, 4)}
              defaultValue={JSON.stringify(theTree, null, 4)}
              options={{
                readOnly: false
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