import { DynamicClass } from './dynamic';

/**
 * Abstract Syntax tree listener.
 * 
 * @returns {instance}
 */
export class ASTListener {
  constructor(className: string, opts: any) {
      if (DynamicClass[className] === undefined || DynamicClass[className] === null) {
          throw new Error(`Class type of \'${className}\' is not exist.`);
      }
      return new DynamicClass[className](opts);
  }
}