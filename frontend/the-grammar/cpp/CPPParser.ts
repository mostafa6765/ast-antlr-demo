// Generated from ./the-grammar/cpp/CPPParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { CPPParserListener } from "./CPPParserListener";
import { CPPParserVisitor } from "./CPPParserVisitor";


export class CPPParser extends Parser {
	public static readonly IntegerLiteral = 1;
	public static readonly CharacterLiteral = 2;
	public static readonly FloatingLiteral = 3;
	public static readonly StringLiteral = 4;
	public static readonly BooleanLiteral = 5;
	public static readonly PointerLiteral = 6;
	public static readonly UserDefinedLiteral = 7;
	public static readonly MultiLineMacro = 8;
	public static readonly Directive = 9;
	public static readonly Alignas = 10;
	public static readonly Alignof = 11;
	public static readonly Asm = 12;
	public static readonly Auto = 13;
	public static readonly Bool = 14;
	public static readonly Break = 15;
	public static readonly Case = 16;
	public static readonly Catch = 17;
	public static readonly Char = 18;
	public static readonly Char16 = 19;
	public static readonly Char32 = 20;
	public static readonly Class = 21;
	public static readonly Const = 22;
	public static readonly Constexpr = 23;
	public static readonly Const_cast = 24;
	public static readonly Continue = 25;
	public static readonly Decltype = 26;
	public static readonly Default = 27;
	public static readonly Delete = 28;
	public static readonly Do = 29;
	public static readonly Double = 30;
	public static readonly Dynamic_cast = 31;
	public static readonly Else = 32;
	public static readonly Enum = 33;
	public static readonly Explicit = 34;
	public static readonly Export = 35;
	public static readonly Extern = 36;
	public static readonly False_ = 37;
	public static readonly Final = 38;
	public static readonly Float = 39;
	public static readonly For = 40;
	public static readonly Friend = 41;
	public static readonly Goto = 42;
	public static readonly If = 43;
	public static readonly Inline = 44;
	public static readonly Int = 45;
	public static readonly Long = 46;
	public static readonly Mutable = 47;
	public static readonly Namespace = 48;
	public static readonly New = 49;
	public static readonly Noexcept = 50;
	public static readonly Nullptr = 51;
	public static readonly Operator = 52;
	public static readonly Override = 53;
	public static readonly Private = 54;
	public static readonly Protected = 55;
	public static readonly Public = 56;
	public static readonly Register = 57;
	public static readonly Reinterpret_cast = 58;
	public static readonly Return = 59;
	public static readonly Short = 60;
	public static readonly Signed = 61;
	public static readonly Sizeof = 62;
	public static readonly Static = 63;
	public static readonly Static_assert = 64;
	public static readonly Static_cast = 65;
	public static readonly Struct = 66;
	public static readonly Switch = 67;
	public static readonly Template = 68;
	public static readonly This = 69;
	public static readonly Thread_local = 70;
	public static readonly Throw = 71;
	public static readonly True_ = 72;
	public static readonly Try = 73;
	public static readonly Typedef = 74;
	public static readonly Typeid_ = 75;
	public static readonly Typename_ = 76;
	public static readonly Union = 77;
	public static readonly Unsigned = 78;
	public static readonly Using = 79;
	public static readonly Virtual = 80;
	public static readonly Void = 81;
	public static readonly Volatile = 82;
	public static readonly Wchar = 83;
	public static readonly While = 84;
	public static readonly LeftParen = 85;
	public static readonly RightParen = 86;
	public static readonly LeftBracket = 87;
	public static readonly RightBracket = 88;
	public static readonly LeftBrace = 89;
	public static readonly RightBrace = 90;
	public static readonly Plus = 91;
	public static readonly Minus = 92;
	public static readonly Star = 93;
	public static readonly Div = 94;
	public static readonly Mod = 95;
	public static readonly Caret = 96;
	public static readonly And = 97;
	public static readonly Or = 98;
	public static readonly Tilde = 99;
	public static readonly Not = 100;
	public static readonly Assign = 101;
	public static readonly Less = 102;
	public static readonly Greater = 103;
	public static readonly PlusAssign = 104;
	public static readonly MinusAssign = 105;
	public static readonly StarAssign = 106;
	public static readonly DivAssign = 107;
	public static readonly ModAssign = 108;
	public static readonly XorAssign = 109;
	public static readonly AndAssign = 110;
	public static readonly OrAssign = 111;
	public static readonly LeftShiftAssign = 112;
	public static readonly RightShiftAssign = 113;
	public static readonly Equal = 114;
	public static readonly NotEqual = 115;
	public static readonly LessEqual = 116;
	public static readonly GreaterEqual = 117;
	public static readonly AndAnd = 118;
	public static readonly OrOr = 119;
	public static readonly PlusPlus = 120;
	public static readonly MinusMinus = 121;
	public static readonly Comma = 122;
	public static readonly ArrowStar = 123;
	public static readonly Arrow = 124;
	public static readonly Question = 125;
	public static readonly Colon = 126;
	public static readonly Doublecolon = 127;
	public static readonly Semi = 128;
	public static readonly Dot = 129;
	public static readonly DotStar = 130;
	public static readonly Ellipsis = 131;
	public static readonly Identifier = 132;
	public static readonly DecimalLiteral = 133;
	public static readonly OctalLiteral = 134;
	public static readonly HexadecimalLiteral = 135;
	public static readonly BinaryLiteral = 136;
	public static readonly Integersuffix = 137;
	public static readonly UserDefinedIntegerLiteral = 138;
	public static readonly UserDefinedFloatingLiteral = 139;
	public static readonly UserDefinedStringLiteral = 140;
	public static readonly UserDefinedCharacterLiteral = 141;
	public static readonly Whitespace = 142;
	public static readonly Newline = 143;
	public static readonly BlockComment = 144;
	public static readonly LineComment = 145;
	public static readonly RULE_translationUnit = 0;
	public static readonly RULE_primaryExpression = 1;
	public static readonly RULE_idExpression = 2;
	public static readonly RULE_unqualifiedId = 3;
	public static readonly RULE_qualifiedId = 4;
	public static readonly RULE_nestedNameSpecifier = 5;
	public static readonly RULE_lambdaExpression = 6;
	public static readonly RULE_lambdaIntroducer = 7;
	public static readonly RULE_lambdaCapture = 8;
	public static readonly RULE_captureDefault = 9;
	public static readonly RULE_captureList = 10;
	public static readonly RULE_capture = 11;
	public static readonly RULE_simpleCapture = 12;
	public static readonly RULE_initcapture = 13;
	public static readonly RULE_lambdaDeclarator = 14;
	public static readonly RULE_postfixExpression = 15;
	public static readonly RULE_typeIdOfTheTypeId = 16;
	public static readonly RULE_expressionList = 17;
	public static readonly RULE_pseudoDestructorName = 18;
	public static readonly RULE_unaryExpression = 19;
	public static readonly RULE_unaryOperator = 20;
	public static readonly RULE_newExpression = 21;
	public static readonly RULE_newPlacement = 22;
	public static readonly RULE_newTypeId = 23;
	public static readonly RULE_newDeclarator = 24;
	public static readonly RULE_noPointerNewDeclarator = 25;
	public static readonly RULE_newInitializer = 26;
	public static readonly RULE_deleteExpression = 27;
	public static readonly RULE_noExceptExpression = 28;
	public static readonly RULE_castExpression = 29;
	public static readonly RULE_pointerMemberExpression = 30;
	public static readonly RULE_multiplicativeExpression = 31;
	public static readonly RULE_additiveExpression = 32;
	public static readonly RULE_shiftExpression = 33;
	public static readonly RULE_shiftOperator = 34;
	public static readonly RULE_relationalExpression = 35;
	public static readonly RULE_equalityExpression = 36;
	public static readonly RULE_andExpression = 37;
	public static readonly RULE_exclusiveOrExpression = 38;
	public static readonly RULE_inclusiveOrExpression = 39;
	public static readonly RULE_logicalAndExpression = 40;
	public static readonly RULE_logicalOrExpression = 41;
	public static readonly RULE_conditionalExpression = 42;
	public static readonly RULE_assignmentExpression = 43;
	public static readonly RULE_assignmentOperator = 44;
	public static readonly RULE_expression = 45;
	public static readonly RULE_constantExpression = 46;
	public static readonly RULE_statement = 47;
	public static readonly RULE_labeledStatement = 48;
	public static readonly RULE_expressionStatement = 49;
	public static readonly RULE_compoundStatement = 50;
	public static readonly RULE_statementSeq = 51;
	public static readonly RULE_selectionStatement = 52;
	public static readonly RULE_condition = 53;
	public static readonly RULE_iterationStatement = 54;
	public static readonly RULE_forInitStatement = 55;
	public static readonly RULE_forRangeDeclaration = 56;
	public static readonly RULE_forRangeInitializer = 57;
	public static readonly RULE_jumpStatement = 58;
	public static readonly RULE_declarationStatement = 59;
	public static readonly RULE_declarationseq = 60;
	public static readonly RULE_declaration = 61;
	public static readonly RULE_blockDeclaration = 62;
	public static readonly RULE_aliasDeclaration = 63;
	public static readonly RULE_simpleDeclaration = 64;
	public static readonly RULE_staticAssertDeclaration = 65;
	public static readonly RULE_emptyDeclaration = 66;
	public static readonly RULE_attributeDeclaration = 67;
	public static readonly RULE_declSpecifier = 68;
	public static readonly RULE_declSpecifierSeq = 69;
	public static readonly RULE_storageClassSpecifier = 70;
	public static readonly RULE_functionSpecifier = 71;
	public static readonly RULE_typedefName = 72;
	public static readonly RULE_typeSpecifier = 73;
	public static readonly RULE_trailingTypeSpecifier = 74;
	public static readonly RULE_typeSpecifierSeq = 75;
	public static readonly RULE_trailingTypeSpecifierSeq = 76;
	public static readonly RULE_simpleTypeLengthModifier = 77;
	public static readonly RULE_simpleTypeSignednessModifier = 78;
	public static readonly RULE_simpleTypeSpecifier = 79;
	public static readonly RULE_theTypeName = 80;
	public static readonly RULE_decltypeSpecifier = 81;
	public static readonly RULE_elaboratedTypeSpecifier = 82;
	public static readonly RULE_enumName = 83;
	public static readonly RULE_enumSpecifier = 84;
	public static readonly RULE_enumHead = 85;
	public static readonly RULE_opaqueEnumDeclaration = 86;
	public static readonly RULE_enumkey = 87;
	public static readonly RULE_enumbase = 88;
	public static readonly RULE_enumeratorList = 89;
	public static readonly RULE_enumeratorDefinition = 90;
	public static readonly RULE_enumerator = 91;
	public static readonly RULE_namespaceName = 92;
	public static readonly RULE_originalNamespaceName = 93;
	public static readonly RULE_namespaceDefinition = 94;
	public static readonly RULE_namespaceAlias = 95;
	public static readonly RULE_namespaceAliasDefinition = 96;
	public static readonly RULE_qualifiednamespacespecifier = 97;
	public static readonly RULE_usingDeclaration = 98;
	public static readonly RULE_usingDirective = 99;
	public static readonly RULE_asmDefinition = 100;
	public static readonly RULE_linkageSpecification = 101;
	public static readonly RULE_attributeSpecifierSeq = 102;
	public static readonly RULE_attributeSpecifier = 103;
	public static readonly RULE_alignmentspecifier = 104;
	public static readonly RULE_attributeList = 105;
	public static readonly RULE_attribute = 106;
	public static readonly RULE_attributeNamespace = 107;
	public static readonly RULE_attributeArgumentClause = 108;
	public static readonly RULE_balancedTokenSeq = 109;
	public static readonly RULE_balancedtoken = 110;
	public static readonly RULE_initDeclaratorList = 111;
	public static readonly RULE_initDeclarator = 112;
	public static readonly RULE_declarator = 113;
	public static readonly RULE_pointerDeclarator = 114;
	public static readonly RULE_noPointerDeclarator = 115;
	public static readonly RULE_parametersAndQualifiers = 116;
	public static readonly RULE_trailingReturnType = 117;
	public static readonly RULE_pointerOperator = 118;
	public static readonly RULE_cvqualifierseq = 119;
	public static readonly RULE_cvQualifier = 120;
	public static readonly RULE_refqualifier = 121;
	public static readonly RULE_declaratorid = 122;
	public static readonly RULE_theTypeId = 123;
	public static readonly RULE_abstractDeclarator = 124;
	public static readonly RULE_pointerAbstractDeclarator = 125;
	public static readonly RULE_noPointerAbstractDeclarator = 126;
	public static readonly RULE_abstractPackDeclarator = 127;
	public static readonly RULE_noPointerAbstractPackDeclarator = 128;
	public static readonly RULE_parameterDeclarationClause = 129;
	public static readonly RULE_parameterDeclarationList = 130;
	public static readonly RULE_parameterDeclaration = 131;
	public static readonly RULE_functionDefinition = 132;
	public static readonly RULE_functionBody = 133;
	public static readonly RULE_initializer = 134;
	public static readonly RULE_braceOrEqualInitializer = 135;
	public static readonly RULE_initializerClause = 136;
	public static readonly RULE_initializerList = 137;
	public static readonly RULE_bracedInitList = 138;
	public static readonly RULE_className = 139;
	public static readonly RULE_classSpecifier = 140;
	public static readonly RULE_classHead = 141;
	public static readonly RULE_classHeadName = 142;
	public static readonly RULE_classVirtSpecifier = 143;
	public static readonly RULE_classKey = 144;
	public static readonly RULE_memberSpecification = 145;
	public static readonly RULE_memberdeclaration = 146;
	public static readonly RULE_memberDeclaratorList = 147;
	public static readonly RULE_memberDeclarator = 148;
	public static readonly RULE_virtualSpecifierSeq = 149;
	public static readonly RULE_virtualSpecifier = 150;
	public static readonly RULE_pureSpecifier = 151;
	public static readonly RULE_baseClause = 152;
	public static readonly RULE_baseSpecifierList = 153;
	public static readonly RULE_baseSpecifier = 154;
	public static readonly RULE_classOrDeclType = 155;
	public static readonly RULE_baseTypeSpecifier = 156;
	public static readonly RULE_accessSpecifier = 157;
	public static readonly RULE_conversionFunctionId = 158;
	public static readonly RULE_conversionTypeId = 159;
	public static readonly RULE_conversionDeclarator = 160;
	public static readonly RULE_constructorInitializer = 161;
	public static readonly RULE_memInitializerList = 162;
	public static readonly RULE_memInitializer = 163;
	public static readonly RULE_meminitializerid = 164;
	public static readonly RULE_operatorFunctionId = 165;
	public static readonly RULE_literalOperatorId = 166;
	public static readonly RULE_templateDeclaration = 167;
	public static readonly RULE_templateparameterList = 168;
	public static readonly RULE_templateParameter = 169;
	public static readonly RULE_typeParameter = 170;
	public static readonly RULE_simpleTemplateId = 171;
	public static readonly RULE_templateId = 172;
	public static readonly RULE_templateName = 173;
	public static readonly RULE_templateArgumentList = 174;
	public static readonly RULE_templateArgument = 175;
	public static readonly RULE_typeNameSpecifier = 176;
	public static readonly RULE_explicitInstantiation = 177;
	public static readonly RULE_explicitSpecialization = 178;
	public static readonly RULE_tryBlock = 179;
	public static readonly RULE_functionTryBlock = 180;
	public static readonly RULE_handlerSeq = 181;
	public static readonly RULE_handler = 182;
	public static readonly RULE_exceptionDeclaration = 183;
	public static readonly RULE_throwExpression = 184;
	public static readonly RULE_exceptionSpecification = 185;
	public static readonly RULE_dynamicExceptionSpecification = 186;
	public static readonly RULE_typeIdList = 187;
	public static readonly RULE_noeExceptSpecification = 188;
	public static readonly RULE_theOperator = 189;
	public static readonly RULE_literal = 190;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"translationUnit", "primaryExpression", "idExpression", "unqualifiedId", 
		"qualifiedId", "nestedNameSpecifier", "lambdaExpression", "lambdaIntroducer", 
		"lambdaCapture", "captureDefault", "captureList", "capture", "simpleCapture", 
		"initcapture", "lambdaDeclarator", "postfixExpression", "typeIdOfTheTypeId", 
		"expressionList", "pseudoDestructorName", "unaryExpression", "unaryOperator", 
		"newExpression", "newPlacement", "newTypeId", "newDeclarator", "noPointerNewDeclarator", 
		"newInitializer", "deleteExpression", "noExceptExpression", "castExpression", 
		"pointerMemberExpression", "multiplicativeExpression", "additiveExpression", 
		"shiftExpression", "shiftOperator", "relationalExpression", "equalityExpression", 
		"andExpression", "exclusiveOrExpression", "inclusiveOrExpression", "logicalAndExpression", 
		"logicalOrExpression", "conditionalExpression", "assignmentExpression", 
		"assignmentOperator", "expression", "constantExpression", "statement", 
		"labeledStatement", "expressionStatement", "compoundStatement", "statementSeq", 
		"selectionStatement", "condition", "iterationStatement", "forInitStatement", 
		"forRangeDeclaration", "forRangeInitializer", "jumpStatement", "declarationStatement", 
		"declarationseq", "declaration", "blockDeclaration", "aliasDeclaration", 
		"simpleDeclaration", "staticAssertDeclaration", "emptyDeclaration", "attributeDeclaration", 
		"declSpecifier", "declSpecifierSeq", "storageClassSpecifier", "functionSpecifier", 
		"typedefName", "typeSpecifier", "trailingTypeSpecifier", "typeSpecifierSeq", 
		"trailingTypeSpecifierSeq", "simpleTypeLengthModifier", "simpleTypeSignednessModifier", 
		"simpleTypeSpecifier", "theTypeName", "decltypeSpecifier", "elaboratedTypeSpecifier", 
		"enumName", "enumSpecifier", "enumHead", "opaqueEnumDeclaration", "enumkey", 
		"enumbase", "enumeratorList", "enumeratorDefinition", "enumerator", "namespaceName", 
		"originalNamespaceName", "namespaceDefinition", "namespaceAlias", "namespaceAliasDefinition", 
		"qualifiednamespacespecifier", "usingDeclaration", "usingDirective", "asmDefinition", 
		"linkageSpecification", "attributeSpecifierSeq", "attributeSpecifier", 
		"alignmentspecifier", "attributeList", "attribute", "attributeNamespace", 
		"attributeArgumentClause", "balancedTokenSeq", "balancedtoken", "initDeclaratorList", 
		"initDeclarator", "declarator", "pointerDeclarator", "noPointerDeclarator", 
		"parametersAndQualifiers", "trailingReturnType", "pointerOperator", "cvqualifierseq", 
		"cvQualifier", "refqualifier", "declaratorid", "theTypeId", "abstractDeclarator", 
		"pointerAbstractDeclarator", "noPointerAbstractDeclarator", "abstractPackDeclarator", 
		"noPointerAbstractPackDeclarator", "parameterDeclarationClause", "parameterDeclarationList", 
		"parameterDeclaration", "functionDefinition", "functionBody", "initializer", 
		"braceOrEqualInitializer", "initializerClause", "initializerList", "bracedInitList", 
		"className", "classSpecifier", "classHead", "classHeadName", "classVirtSpecifier", 
		"classKey", "memberSpecification", "memberdeclaration", "memberDeclaratorList", 
		"memberDeclarator", "virtualSpecifierSeq", "virtualSpecifier", "pureSpecifier", 
		"baseClause", "baseSpecifierList", "baseSpecifier", "classOrDeclType", 
		"baseTypeSpecifier", "accessSpecifier", "conversionFunctionId", "conversionTypeId", 
		"conversionDeclarator", "constructorInitializer", "memInitializerList", 
		"memInitializer", "meminitializerid", "operatorFunctionId", "literalOperatorId", 
		"templateDeclaration", "templateparameterList", "templateParameter", "typeParameter", 
		"simpleTemplateId", "templateId", "templateName", "templateArgumentList", 
		"templateArgument", "typeNameSpecifier", "explicitInstantiation", "explicitSpecialization", 
		"tryBlock", "functionTryBlock", "handlerSeq", "handler", "exceptionDeclaration", 
		"throwExpression", "exceptionSpecification", "dynamicExceptionSpecification", 
		"typeIdList", "noeExceptSpecification", "theOperator", "literal",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "'alignas'", "'alignof'", "'asm'", "'auto'", 
		"'bool'", "'break'", "'case'", "'catch'", "'char'", "'char16_t'", "'char32_t'", 
		"'class'", "'const'", "'constexpr'", "'const_cast'", "'continue'", "'decltype'", 
		"'default'", "'delete'", "'do'", "'double'", "'dynamic_cast'", "'else'", 
		"'enum'", "'explicit'", "'export'", "'extern'", "'false'", "'final'", 
		"'float'", "'for'", "'friend'", "'goto'", "'if'", "'inline'", "'int'", 
		"'long'", "'mutable'", "'namespace'", "'new'", "'noexcept'", "'nullptr'", 
		"'operator'", "'override'", "'private'", "'protected'", "'public'", "'register'", 
		"'reinterpret_cast'", "'return'", "'short'", "'signed'", "'sizeof'", "'static'", 
		"'static_assert'", "'static_cast'", "'struct'", "'switch'", "'template'", 
		"'this'", "'thread_local'", "'throw'", "'true'", "'try'", "'typedef'", 
		"'typeid'", "'typename'", "'union'", "'unsigned'", "'using'", "'virtual'", 
		"'void'", "'volatile'", "'wchar_t'", "'while'", "'('", "')'", "'['", "']'", 
		"'{'", "'}'", "'+'", "'-'", "'*'", "'/'", "'%'", "'^'", "'&'", "'|'", 
		"'~'", undefined, "'='", "'<'", "'>'", "'+='", "'-='", "'*='", "'/='", 
		"'%='", "'^='", "'&='", "'|='", "'<<='", "'>>='", "'=='", "'!='", "'<='", 
		"'>='", undefined, undefined, "'++'", "'--'", "','", "'->*'", "'->'", 
		"'?'", "':'", "'::'", "';'", "'.'", "'.*'", "'...'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "IntegerLiteral", "CharacterLiteral", "FloatingLiteral", "StringLiteral", 
		"BooleanLiteral", "PointerLiteral", "UserDefinedLiteral", "MultiLineMacro", 
		"Directive", "Alignas", "Alignof", "Asm", "Auto", "Bool", "Break", "Case", 
		"Catch", "Char", "Char16", "Char32", "Class", "Const", "Constexpr", "Const_cast", 
		"Continue", "Decltype", "Default", "Delete", "Do", "Double", "Dynamic_cast", 
		"Else", "Enum", "Explicit", "Export", "Extern", "False_", "Final", "Float", 
		"For", "Friend", "Goto", "If", "Inline", "Int", "Long", "Mutable", "Namespace", 
		"New", "Noexcept", "Nullptr", "Operator", "Override", "Private", "Protected", 
		"Public", "Register", "Reinterpret_cast", "Return", "Short", "Signed", 
		"Sizeof", "Static", "Static_assert", "Static_cast", "Struct", "Switch", 
		"Template", "This", "Thread_local", "Throw", "True_", "Try", "Typedef", 
		"Typeid_", "Typename_", "Union", "Unsigned", "Using", "Virtual", "Void", 
		"Volatile", "Wchar", "While", "LeftParen", "RightParen", "LeftBracket", 
		"RightBracket", "LeftBrace", "RightBrace", "Plus", "Minus", "Star", "Div", 
		"Mod", "Caret", "And", "Or", "Tilde", "Not", "Assign", "Less", "Greater", 
		"PlusAssign", "MinusAssign", "StarAssign", "DivAssign", "ModAssign", "XorAssign", 
		"AndAssign", "OrAssign", "LeftShiftAssign", "RightShiftAssign", "Equal", 
		"NotEqual", "LessEqual", "GreaterEqual", "AndAnd", "OrOr", "PlusPlus", 
		"MinusMinus", "Comma", "ArrowStar", "Arrow", "Question", "Colon", "Doublecolon", 
		"Semi", "Dot", "DotStar", "Ellipsis", "Identifier", "DecimalLiteral", 
		"OctalLiteral", "HexadecimalLiteral", "BinaryLiteral", "Integersuffix", 
		"UserDefinedIntegerLiteral", "UserDefinedFloatingLiteral", "UserDefinedStringLiteral", 
		"UserDefinedCharacterLiteral", "Whitespace", "Newline", "BlockComment", 
		"LineComment",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(CPPParser._LITERAL_NAMES, CPPParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return CPPParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "CPPParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return CPPParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return CPPParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(CPPParser._ATN, this);
	}
	// @RuleVersion(0)
	public translationUnit(): TranslationUnitContext {
		let _localctx: TranslationUnitContext = new TranslationUnitContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, CPPParser.RULE_translationUnit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 383;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 10)) & ~0x1F) === 0 && ((1 << (_la - 10)) & ((1 << (CPPParser.Alignas - 10)) | (1 << (CPPParser.Asm - 10)) | (1 << (CPPParser.Auto - 10)) | (1 << (CPPParser.Bool - 10)) | (1 << (CPPParser.Char - 10)) | (1 << (CPPParser.Char16 - 10)) | (1 << (CPPParser.Char32 - 10)) | (1 << (CPPParser.Class - 10)) | (1 << (CPPParser.Const - 10)) | (1 << (CPPParser.Constexpr - 10)) | (1 << (CPPParser.Decltype - 10)) | (1 << (CPPParser.Double - 10)) | (1 << (CPPParser.Enum - 10)) | (1 << (CPPParser.Explicit - 10)) | (1 << (CPPParser.Extern - 10)) | (1 << (CPPParser.Float - 10)) | (1 << (CPPParser.Friend - 10)))) !== 0) || ((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & ((1 << (CPPParser.Inline - 44)) | (1 << (CPPParser.Int - 44)) | (1 << (CPPParser.Long - 44)) | (1 << (CPPParser.Mutable - 44)) | (1 << (CPPParser.Namespace - 44)) | (1 << (CPPParser.Operator - 44)) | (1 << (CPPParser.Register - 44)) | (1 << (CPPParser.Short - 44)) | (1 << (CPPParser.Signed - 44)) | (1 << (CPPParser.Static - 44)) | (1 << (CPPParser.Static_assert - 44)) | (1 << (CPPParser.Struct - 44)) | (1 << (CPPParser.Template - 44)) | (1 << (CPPParser.Thread_local - 44)) | (1 << (CPPParser.Typedef - 44)))) !== 0) || ((((_la - 76)) & ~0x1F) === 0 && ((1 << (_la - 76)) & ((1 << (CPPParser.Typename_ - 76)) | (1 << (CPPParser.Union - 76)) | (1 << (CPPParser.Unsigned - 76)) | (1 << (CPPParser.Using - 76)) | (1 << (CPPParser.Virtual - 76)) | (1 << (CPPParser.Void - 76)) | (1 << (CPPParser.Volatile - 76)) | (1 << (CPPParser.Wchar - 76)) | (1 << (CPPParser.LeftParen - 76)) | (1 << (CPPParser.LeftBracket - 76)) | (1 << (CPPParser.Star - 76)) | (1 << (CPPParser.And - 76)) | (1 << (CPPParser.Tilde - 76)))) !== 0) || ((((_la - 118)) & ~0x1F) === 0 && ((1 << (_la - 118)) & ((1 << (CPPParser.AndAnd - 118)) | (1 << (CPPParser.Doublecolon - 118)) | (1 << (CPPParser.Semi - 118)) | (1 << (CPPParser.Ellipsis - 118)) | (1 << (CPPParser.Identifier - 118)))) !== 0)) {
				{
				this.state = 382;
				this.declarationseq();
				}
			}

			this.state = 385;
			this.match(CPPParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public primaryExpression(): PrimaryExpressionContext {
		let _localctx: PrimaryExpressionContext = new PrimaryExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, CPPParser.RULE_primaryExpression);
		try {
			let _alt: number;
			this.state = 399;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPPParser.IntegerLiteral:
			case CPPParser.CharacterLiteral:
			case CPPParser.FloatingLiteral:
			case CPPParser.StringLiteral:
			case CPPParser.BooleanLiteral:
			case CPPParser.PointerLiteral:
			case CPPParser.UserDefinedLiteral:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 388;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 387;
						this.literal();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 390;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case CPPParser.This:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 392;
				this.match(CPPParser.This);
				}
				break;
			case CPPParser.LeftParen:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 393;
				this.match(CPPParser.LeftParen);
				this.state = 394;
				this.expression();
				this.state = 395;
				this.match(CPPParser.RightParen);
				}
				break;
			case CPPParser.Decltype:
			case CPPParser.Operator:
			case CPPParser.Tilde:
			case CPPParser.Doublecolon:
			case CPPParser.Identifier:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 397;
				this.idExpression();
				}
				break;
			case CPPParser.LeftBracket:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 398;
				this.lambdaExpression();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public idExpression(): IdExpressionContext {
		let _localctx: IdExpressionContext = new IdExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, CPPParser.RULE_idExpression);
		try {
			this.state = 403;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 401;
				this.unqualifiedId();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 402;
				this.qualifiedId();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unqualifiedId(): UnqualifiedIdContext {
		let _localctx: UnqualifiedIdContext = new UnqualifiedIdContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, CPPParser.RULE_unqualifiedId);
		try {
			this.state = 415;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 405;
				this.match(CPPParser.Identifier);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 406;
				this.operatorFunctionId();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 407;
				this.conversionFunctionId();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 408;
				this.literalOperatorId();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 409;
				this.match(CPPParser.Tilde);
				this.state = 412;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case CPPParser.Identifier:
					{
					this.state = 410;
					this.className();
					}
					break;
				case CPPParser.Decltype:
					{
					this.state = 411;
					this.decltypeSpecifier();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 414;
				this.templateId();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public qualifiedId(): QualifiedIdContext {
		let _localctx: QualifiedIdContext = new QualifiedIdContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, CPPParser.RULE_qualifiedId);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 417;
			this.nestedNameSpecifier(0);
			this.state = 419;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPPParser.Template) {
				{
				this.state = 418;
				this.match(CPPParser.Template);
				}
			}

			this.state = 421;
			this.unqualifiedId();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public nestedNameSpecifier(): NestedNameSpecifierContext;
	public nestedNameSpecifier(_p: number): NestedNameSpecifierContext;
	// @RuleVersion(0)
	public nestedNameSpecifier(_p?: number): NestedNameSpecifierContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: NestedNameSpecifierContext = new NestedNameSpecifierContext(this._ctx, _parentState);
		let _prevctx: NestedNameSpecifierContext = _localctx;
		let _startState: number = 10;
		this.enterRecursionRule(_localctx, 10, CPPParser.RULE_nestedNameSpecifier, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 427;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				{
				this.state = 424;
				this.theTypeName();
				}
				break;

			case 2:
				{
				this.state = 425;
				this.namespaceName();
				}
				break;

			case 3:
				{
				this.state = 426;
				this.decltypeSpecifier();
				}
				break;
			}
			this.state = 429;
			this.match(CPPParser.Doublecolon);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 442;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new NestedNameSpecifierContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CPPParser.RULE_nestedNameSpecifier);
					this.state = 431;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 437;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
					case 1:
						{
						this.state = 432;
						this.match(CPPParser.Identifier);
						}
						break;

					case 2:
						{
						this.state = 434;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === CPPParser.Template) {
							{
							this.state = 433;
							this.match(CPPParser.Template);
							}
						}

						this.state = 436;
						this.simpleTemplateId();
						}
						break;
					}
					this.state = 439;
					this.match(CPPParser.Doublecolon);
					}
					}
				}
				this.state = 444;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lambdaExpression(): LambdaExpressionContext {
		let _localctx: LambdaExpressionContext = new LambdaExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, CPPParser.RULE_lambdaExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 445;
			this.lambdaIntroducer();
			this.state = 447;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPPParser.LeftParen) {
				{
				this.state = 446;
				this.lambdaDeclarator();
				}
			}

			this.state = 449;
			this.compoundStatement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lambdaIntroducer(): LambdaIntroducerContext {
		let _localctx: LambdaIntroducerContext = new LambdaIntroducerContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, CPPParser.RULE_lambdaIntroducer);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 451;
			this.match(CPPParser.LeftBracket);
			this.state = 453;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPPParser.This || _la === CPPParser.And || _la === CPPParser.Assign || _la === CPPParser.Identifier) {
				{
				this.state = 452;
				this.lambdaCapture();
				}
			}

			this.state = 455;
			this.match(CPPParser.RightBracket);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lambdaCapture(): LambdaCaptureContext {
		let _localctx: LambdaCaptureContext = new LambdaCaptureContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, CPPParser.RULE_lambdaCapture);
		let _la: number;
		try {
			this.state = 463;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 457;
				this.captureList();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 458;
				this.captureDefault();
				this.state = 461;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPPParser.Comma) {
					{
					this.state = 459;
					this.match(CPPParser.Comma);
					this.state = 460;
					this.captureList();
					}
				}

				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public captureDefault(): CaptureDefaultContext {
		let _localctx: CaptureDefaultContext = new CaptureDefaultContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, CPPParser.RULE_captureDefault);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 465;
			_la = this._input.LA(1);
			if (!(_la === CPPParser.And || _la === CPPParser.Assign)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public captureList(): CaptureListContext {
		let _localctx: CaptureListContext = new CaptureListContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, CPPParser.RULE_captureList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 467;
			this.capture();
			this.state = 472;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CPPParser.Comma) {
				{
				{
				this.state = 468;
				this.match(CPPParser.Comma);
				this.state = 469;
				this.capture();
				}
				}
				this.state = 474;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 476;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPPParser.Ellipsis) {
				{
				this.state = 475;
				this.match(CPPParser.Ellipsis);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public capture(): CaptureContext {
		let _localctx: CaptureContext = new CaptureContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, CPPParser.RULE_capture);
		try {
			this.state = 480;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 478;
				this.simpleCapture();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 479;
				this.initcapture();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public simpleCapture(): SimpleCaptureContext {
		let _localctx: SimpleCaptureContext = new SimpleCaptureContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, CPPParser.RULE_simpleCapture);
		let _la: number;
		try {
			this.state = 487;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPPParser.And:
			case CPPParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 483;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPPParser.And) {
					{
					this.state = 482;
					this.match(CPPParser.And);
					}
				}

				this.state = 485;
				this.match(CPPParser.Identifier);
				}
				break;
			case CPPParser.This:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 486;
				this.match(CPPParser.This);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public initcapture(): InitcaptureContext {
		let _localctx: InitcaptureContext = new InitcaptureContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, CPPParser.RULE_initcapture);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 490;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPPParser.And) {
				{
				this.state = 489;
				this.match(CPPParser.And);
				}
			}

			this.state = 492;
			this.match(CPPParser.Identifier);
			this.state = 493;
			this.initializer();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lambdaDeclarator(): LambdaDeclaratorContext {
		let _localctx: LambdaDeclaratorContext = new LambdaDeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, CPPParser.RULE_lambdaDeclarator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 495;
			this.match(CPPParser.LeftParen);
			this.state = 497;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPPParser.Alignas) | (1 << CPPParser.Auto) | (1 << CPPParser.Bool) | (1 << CPPParser.Char) | (1 << CPPParser.Char16) | (1 << CPPParser.Char32) | (1 << CPPParser.Class) | (1 << CPPParser.Const) | (1 << CPPParser.Constexpr) | (1 << CPPParser.Decltype) | (1 << CPPParser.Double))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (CPPParser.Enum - 33)) | (1 << (CPPParser.Explicit - 33)) | (1 << (CPPParser.Extern - 33)) | (1 << (CPPParser.Float - 33)) | (1 << (CPPParser.Friend - 33)) | (1 << (CPPParser.Inline - 33)) | (1 << (CPPParser.Int - 33)) | (1 << (CPPParser.Long - 33)) | (1 << (CPPParser.Mutable - 33)) | (1 << (CPPParser.Register - 33)) | (1 << (CPPParser.Short - 33)) | (1 << (CPPParser.Signed - 33)) | (1 << (CPPParser.Static - 33)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (CPPParser.Struct - 66)) | (1 << (CPPParser.Thread_local - 66)) | (1 << (CPPParser.Typedef - 66)) | (1 << (CPPParser.Typename_ - 66)) | (1 << (CPPParser.Union - 66)) | (1 << (CPPParser.Unsigned - 66)) | (1 << (CPPParser.Virtual - 66)) | (1 << (CPPParser.Void - 66)) | (1 << (CPPParser.Volatile - 66)) | (1 << (CPPParser.Wchar - 66)) | (1 << (CPPParser.LeftBracket - 66)))) !== 0) || _la === CPPParser.Doublecolon || _la === CPPParser.Identifier) {
				{
				this.state = 496;
				this.parameterDeclarationClause();
				}
			}

			this.state = 499;
			this.match(CPPParser.RightParen);
			this.state = 501;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPPParser.Mutable) {
				{
				this.state = 500;
				this.match(CPPParser.Mutable);
				}
			}

			this.state = 504;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPPParser.Noexcept || _la === CPPParser.Throw) {
				{
				this.state = 503;
				this.exceptionSpecification();
				}
			}

			this.state = 507;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPPParser.Alignas || _la === CPPParser.LeftBracket) {
				{
				this.state = 506;
				this.attributeSpecifierSeq();
				}
			}

			this.state = 510;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPPParser.Arrow) {
				{
				this.state = 509;
				this.trailingReturnType();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public postfixExpression(): PostfixExpressionContext;
	public postfixExpression(_p: number): PostfixExpressionContext;
	// @RuleVersion(0)
	public postfixExpression(_p?: number): PostfixExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: PostfixExpressionContext = new PostfixExpressionContext(this._ctx, _parentState);
		let _prevctx: PostfixExpressionContext = _localctx;
		let _startState: number = 30;
		this.enterRecursionRule(_localctx, 30, CPPParser.RULE_postfixExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 542;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
			case 1:
				{
				this.state = 513;
				this.primaryExpression();
				}
				break;

			case 2:
				{
				this.state = 516;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case CPPParser.Auto:
				case CPPParser.Bool:
				case CPPParser.Char:
				case CPPParser.Char16:
				case CPPParser.Char32:
				case CPPParser.Decltype:
				case CPPParser.Double:
				case CPPParser.Float:
				case CPPParser.Int:
				case CPPParser.Long:
				case CPPParser.Short:
				case CPPParser.Signed:
				case CPPParser.Unsigned:
				case CPPParser.Void:
				case CPPParser.Wchar:
				case CPPParser.Doublecolon:
				case CPPParser.Identifier:
					{
					this.state = 514;
					this.simpleTypeSpecifier();
					}
					break;
				case CPPParser.Typename_:
					{
					this.state = 515;
					this.typeNameSpecifier();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 524;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case CPPParser.LeftParen:
					{
					this.state = 518;
					this.match(CPPParser.LeftParen);
					this.state = 520;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPPParser.IntegerLiteral) | (1 << CPPParser.CharacterLiteral) | (1 << CPPParser.FloatingLiteral) | (1 << CPPParser.StringLiteral) | (1 << CPPParser.BooleanLiteral) | (1 << CPPParser.PointerLiteral) | (1 << CPPParser.UserDefinedLiteral) | (1 << CPPParser.Alignof) | (1 << CPPParser.Auto) | (1 << CPPParser.Bool) | (1 << CPPParser.Char) | (1 << CPPParser.Char16) | (1 << CPPParser.Char32) | (1 << CPPParser.Const_cast) | (1 << CPPParser.Decltype) | (1 << CPPParser.Delete) | (1 << CPPParser.Double) | (1 << CPPParser.Dynamic_cast))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (CPPParser.Float - 39)) | (1 << (CPPParser.Int - 39)) | (1 << (CPPParser.Long - 39)) | (1 << (CPPParser.New - 39)) | (1 << (CPPParser.Noexcept - 39)) | (1 << (CPPParser.Operator - 39)) | (1 << (CPPParser.Reinterpret_cast - 39)) | (1 << (CPPParser.Short - 39)) | (1 << (CPPParser.Signed - 39)) | (1 << (CPPParser.Sizeof - 39)) | (1 << (CPPParser.Static_cast - 39)) | (1 << (CPPParser.This - 39)))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (CPPParser.Throw - 71)) | (1 << (CPPParser.Typeid_ - 71)) | (1 << (CPPParser.Typename_ - 71)) | (1 << (CPPParser.Unsigned - 71)) | (1 << (CPPParser.Void - 71)) | (1 << (CPPParser.Wchar - 71)) | (1 << (CPPParser.LeftParen - 71)) | (1 << (CPPParser.LeftBracket - 71)) | (1 << (CPPParser.LeftBrace - 71)) | (1 << (CPPParser.Plus - 71)) | (1 << (CPPParser.Minus - 71)) | (1 << (CPPParser.Star - 71)) | (1 << (CPPParser.And - 71)) | (1 << (CPPParser.Or - 71)) | (1 << (CPPParser.Tilde - 71)) | (1 << (CPPParser.Not - 71)))) !== 0) || ((((_la - 120)) & ~0x1F) === 0 && ((1 << (_la - 120)) & ((1 << (CPPParser.PlusPlus - 120)) | (1 << (CPPParser.MinusMinus - 120)) | (1 << (CPPParser.Doublecolon - 120)) | (1 << (CPPParser.Identifier - 120)))) !== 0)) {
						{
						this.state = 519;
						this.expressionList();
						}
					}

					this.state = 522;
					this.match(CPPParser.RightParen);
					}
					break;
				case CPPParser.LeftBrace:
					{
					this.state = 523;
					this.bracedInitList();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;

			case 3:
				{
				this.state = 526;
				_la = this._input.LA(1);
				if (!(_la === CPPParser.Const_cast || _la === CPPParser.Dynamic_cast || _la === CPPParser.Reinterpret_cast || _la === CPPParser.Static_cast)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 527;
				this.match(CPPParser.Less);
				this.state = 528;
				this.theTypeId();
				this.state = 529;
				this.match(CPPParser.Greater);
				this.state = 530;
				this.match(CPPParser.LeftParen);
				this.state = 531;
				this.expression();
				this.state = 532;
				this.match(CPPParser.RightParen);
				}
				break;

			case 4:
				{
				this.state = 534;
				this.typeIdOfTheTypeId();
				this.state = 535;
				this.match(CPPParser.LeftParen);
				this.state = 538;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 29, this._ctx) ) {
				case 1:
					{
					this.state = 536;
					this.expression();
					}
					break;

				case 2:
					{
					this.state = 537;
					this.theTypeId();
					}
					break;
				}
				this.state = 540;
				this.match(CPPParser.RightParen);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 571;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 569;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 35, this._ctx) ) {
					case 1:
						{
						_localctx = new PostfixExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPPParser.RULE_postfixExpression);
						this.state = 544;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 545;
						this.match(CPPParser.LeftBracket);
						this.state = 548;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case CPPParser.IntegerLiteral:
						case CPPParser.CharacterLiteral:
						case CPPParser.FloatingLiteral:
						case CPPParser.StringLiteral:
						case CPPParser.BooleanLiteral:
						case CPPParser.PointerLiteral:
						case CPPParser.UserDefinedLiteral:
						case CPPParser.Alignof:
						case CPPParser.Auto:
						case CPPParser.Bool:
						case CPPParser.Char:
						case CPPParser.Char16:
						case CPPParser.Char32:
						case CPPParser.Const_cast:
						case CPPParser.Decltype:
						case CPPParser.Delete:
						case CPPParser.Double:
						case CPPParser.Dynamic_cast:
						case CPPParser.Float:
						case CPPParser.Int:
						case CPPParser.Long:
						case CPPParser.New:
						case CPPParser.Noexcept:
						case CPPParser.Operator:
						case CPPParser.Reinterpret_cast:
						case CPPParser.Short:
						case CPPParser.Signed:
						case CPPParser.Sizeof:
						case CPPParser.Static_cast:
						case CPPParser.This:
						case CPPParser.Throw:
						case CPPParser.Typeid_:
						case CPPParser.Typename_:
						case CPPParser.Unsigned:
						case CPPParser.Void:
						case CPPParser.Wchar:
						case CPPParser.LeftParen:
						case CPPParser.LeftBracket:
						case CPPParser.Plus:
						case CPPParser.Minus:
						case CPPParser.Star:
						case CPPParser.And:
						case CPPParser.Or:
						case CPPParser.Tilde:
						case CPPParser.Not:
						case CPPParser.PlusPlus:
						case CPPParser.MinusMinus:
						case CPPParser.Doublecolon:
						case CPPParser.Identifier:
							{
							this.state = 546;
							this.expression();
							}
							break;
						case CPPParser.LeftBrace:
							{
							this.state = 547;
							this.bracedInitList();
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						this.state = 550;
						this.match(CPPParser.RightBracket);
						}
						break;

					case 2:
						{
						_localctx = new PostfixExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPPParser.RULE_postfixExpression);
						this.state = 552;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 553;
						this.match(CPPParser.LeftParen);
						this.state = 555;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPPParser.IntegerLiteral) | (1 << CPPParser.CharacterLiteral) | (1 << CPPParser.FloatingLiteral) | (1 << CPPParser.StringLiteral) | (1 << CPPParser.BooleanLiteral) | (1 << CPPParser.PointerLiteral) | (1 << CPPParser.UserDefinedLiteral) | (1 << CPPParser.Alignof) | (1 << CPPParser.Auto) | (1 << CPPParser.Bool) | (1 << CPPParser.Char) | (1 << CPPParser.Char16) | (1 << CPPParser.Char32) | (1 << CPPParser.Const_cast) | (1 << CPPParser.Decltype) | (1 << CPPParser.Delete) | (1 << CPPParser.Double) | (1 << CPPParser.Dynamic_cast))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (CPPParser.Float - 39)) | (1 << (CPPParser.Int - 39)) | (1 << (CPPParser.Long - 39)) | (1 << (CPPParser.New - 39)) | (1 << (CPPParser.Noexcept - 39)) | (1 << (CPPParser.Operator - 39)) | (1 << (CPPParser.Reinterpret_cast - 39)) | (1 << (CPPParser.Short - 39)) | (1 << (CPPParser.Signed - 39)) | (1 << (CPPParser.Sizeof - 39)) | (1 << (CPPParser.Static_cast - 39)) | (1 << (CPPParser.This - 39)))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (CPPParser.Throw - 71)) | (1 << (CPPParser.Typeid_ - 71)) | (1 << (CPPParser.Typename_ - 71)) | (1 << (CPPParser.Unsigned - 71)) | (1 << (CPPParser.Void - 71)) | (1 << (CPPParser.Wchar - 71)) | (1 << (CPPParser.LeftParen - 71)) | (1 << (CPPParser.LeftBracket - 71)) | (1 << (CPPParser.LeftBrace - 71)) | (1 << (CPPParser.Plus - 71)) | (1 << (CPPParser.Minus - 71)) | (1 << (CPPParser.Star - 71)) | (1 << (CPPParser.And - 71)) | (1 << (CPPParser.Or - 71)) | (1 << (CPPParser.Tilde - 71)) | (1 << (CPPParser.Not - 71)))) !== 0) || ((((_la - 120)) & ~0x1F) === 0 && ((1 << (_la - 120)) & ((1 << (CPPParser.PlusPlus - 120)) | (1 << (CPPParser.MinusMinus - 120)) | (1 << (CPPParser.Doublecolon - 120)) | (1 << (CPPParser.Identifier - 120)))) !== 0)) {
							{
							this.state = 554;
							this.expressionList();
							}
						}

						this.state = 557;
						this.match(CPPParser.RightParen);
						}
						break;

					case 3:
						{
						_localctx = new PostfixExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPPParser.RULE_postfixExpression);
						this.state = 558;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 559;
						_la = this._input.LA(1);
						if (!(_la === CPPParser.Arrow || _la === CPPParser.Dot)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 565;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 34, this._ctx) ) {
						case 1:
							{
							this.state = 561;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la === CPPParser.Template) {
								{
								this.state = 560;
								this.match(CPPParser.Template);
								}
							}

							this.state = 563;
							this.idExpression();
							}
							break;

						case 2:
							{
							this.state = 564;
							this.pseudoDestructorName();
							}
							break;
						}
						}
						break;

					case 4:
						{
						_localctx = new PostfixExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPPParser.RULE_postfixExpression);
						this.state = 567;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 568;
						_la = this._input.LA(1);
						if (!(_la === CPPParser.PlusPlus || _la === CPPParser.MinusMinus)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						}
						break;
					}
					}
				}
				this.state = 573;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeIdOfTheTypeId(): TypeIdOfTheTypeIdContext {
		let _localctx: TypeIdOfTheTypeIdContext = new TypeIdOfTheTypeIdContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, CPPParser.RULE_typeIdOfTheTypeId);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 574;
			this.match(CPPParser.Typeid_);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionList(): ExpressionListContext {
		let _localctx: ExpressionListContext = new ExpressionListContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, CPPParser.RULE_expressionList);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 576;
			this.initializerList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pseudoDestructorName(): PseudoDestructorNameContext {
		let _localctx: PseudoDestructorNameContext = new PseudoDestructorNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, CPPParser.RULE_pseudoDestructorName);
		let _la: number;
		try {
			this.state = 597;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 39, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 579;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 37, this._ctx) ) {
				case 1:
					{
					this.state = 578;
					this.nestedNameSpecifier(0);
					}
					break;
				}
				this.state = 584;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPPParser.Identifier) {
					{
					this.state = 581;
					this.theTypeName();
					this.state = 582;
					this.match(CPPParser.Doublecolon);
					}
				}

				this.state = 586;
				this.match(CPPParser.Tilde);
				this.state = 587;
				this.theTypeName();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 588;
				this.nestedNameSpecifier(0);
				this.state = 589;
				this.match(CPPParser.Template);
				this.state = 590;
				this.simpleTemplateId();
				this.state = 591;
				this.match(CPPParser.Doublecolon);
				this.state = 592;
				this.match(CPPParser.Tilde);
				this.state = 593;
				this.theTypeName();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 595;
				this.match(CPPParser.Tilde);
				this.state = 596;
				this.decltypeSpecifier();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unaryExpression(): UnaryExpressionContext {
		let _localctx: UnaryExpressionContext = new UnaryExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, CPPParser.RULE_unaryExpression);
		try {
			this.state = 626;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 42, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 599;
				this.postfixExpression(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 604;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case CPPParser.PlusPlus:
					{
					this.state = 600;
					this.match(CPPParser.PlusPlus);
					}
					break;
				case CPPParser.MinusMinus:
					{
					this.state = 601;
					this.match(CPPParser.MinusMinus);
					}
					break;
				case CPPParser.Plus:
				case CPPParser.Minus:
				case CPPParser.Star:
				case CPPParser.And:
				case CPPParser.Or:
				case CPPParser.Tilde:
				case CPPParser.Not:
					{
					this.state = 602;
					this.unaryOperator();
					}
					break;
				case CPPParser.Sizeof:
					{
					this.state = 603;
					this.match(CPPParser.Sizeof);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 606;
				this.unaryExpression();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 607;
				this.match(CPPParser.Sizeof);
				this.state = 616;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case CPPParser.LeftParen:
					{
					this.state = 608;
					this.match(CPPParser.LeftParen);
					this.state = 609;
					this.theTypeId();
					this.state = 610;
					this.match(CPPParser.RightParen);
					}
					break;
				case CPPParser.Ellipsis:
					{
					this.state = 612;
					this.match(CPPParser.Ellipsis);
					this.state = 613;
					this.match(CPPParser.LeftParen);
					this.state = 614;
					this.match(CPPParser.Identifier);
					this.state = 615;
					this.match(CPPParser.RightParen);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 618;
				this.match(CPPParser.Alignof);
				this.state = 619;
				this.match(CPPParser.LeftParen);
				this.state = 620;
				this.theTypeId();
				this.state = 621;
				this.match(CPPParser.RightParen);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 623;
				this.noExceptExpression();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 624;
				this.newExpression();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 625;
				this.deleteExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unaryOperator(): UnaryOperatorContext {
		let _localctx: UnaryOperatorContext = new UnaryOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, CPPParser.RULE_unaryOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 628;
			_la = this._input.LA(1);
			if (!(((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (CPPParser.Plus - 91)) | (1 << (CPPParser.Minus - 91)) | (1 << (CPPParser.Star - 91)) | (1 << (CPPParser.And - 91)) | (1 << (CPPParser.Or - 91)) | (1 << (CPPParser.Tilde - 91)) | (1 << (CPPParser.Not - 91)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public newExpression(): NewExpressionContext {
		let _localctx: NewExpressionContext = new NewExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, CPPParser.RULE_newExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 631;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPPParser.Doublecolon) {
				{
				this.state = 630;
				this.match(CPPParser.Doublecolon);
				}
			}

			this.state = 633;
			this.match(CPPParser.New);
			this.state = 635;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 44, this._ctx) ) {
			case 1:
				{
				this.state = 634;
				this.newPlacement();
				}
				break;
			}
			this.state = 642;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPPParser.Auto:
			case CPPParser.Bool:
			case CPPParser.Char:
			case CPPParser.Char16:
			case CPPParser.Char32:
			case CPPParser.Class:
			case CPPParser.Const:
			case CPPParser.Decltype:
			case CPPParser.Double:
			case CPPParser.Enum:
			case CPPParser.Float:
			case CPPParser.Int:
			case CPPParser.Long:
			case CPPParser.Short:
			case CPPParser.Signed:
			case CPPParser.Struct:
			case CPPParser.Typename_:
			case CPPParser.Union:
			case CPPParser.Unsigned:
			case CPPParser.Void:
			case CPPParser.Volatile:
			case CPPParser.Wchar:
			case CPPParser.Doublecolon:
			case CPPParser.Identifier:
				{
				this.state = 637;
				this.newTypeId();
				}
				break;
			case CPPParser.LeftParen:
				{
				{
				this.state = 638;
				this.match(CPPParser.LeftParen);
				this.state = 639;
				this.theTypeId();
				this.state = 640;
				this.match(CPPParser.RightParen);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 645;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPPParser.LeftParen || _la === CPPParser.LeftBrace) {
				{
				this.state = 644;
				this.newInitializer();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public newPlacement(): NewPlacementContext {
		let _localctx: NewPlacementContext = new NewPlacementContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, CPPParser.RULE_newPlacement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 647;
			this.match(CPPParser.LeftParen);
			this.state = 648;
			this.expressionList();
			this.state = 649;
			this.match(CPPParser.RightParen);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public newTypeId(): NewTypeIdContext {
		let _localctx: NewTypeIdContext = new NewTypeIdContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, CPPParser.RULE_newTypeId);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 651;
			this.typeSpecifierSeq();
			this.state = 653;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 47, this._ctx) ) {
			case 1:
				{
				this.state = 652;
				this.newDeclarator();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public newDeclarator(): NewDeclaratorContext {
		let _localctx: NewDeclaratorContext = new NewDeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, CPPParser.RULE_newDeclarator);
		try {
			this.state = 660;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPPParser.Decltype:
			case CPPParser.Star:
			case CPPParser.And:
			case CPPParser.AndAnd:
			case CPPParser.Doublecolon:
			case CPPParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 655;
				this.pointerOperator();
				this.state = 657;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 48, this._ctx) ) {
				case 1:
					{
					this.state = 656;
					this.newDeclarator();
					}
					break;
				}
				}
				break;
			case CPPParser.LeftBracket:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 659;
				this.noPointerNewDeclarator(0);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public noPointerNewDeclarator(): NoPointerNewDeclaratorContext;
	public noPointerNewDeclarator(_p: number): NoPointerNewDeclaratorContext;
	// @RuleVersion(0)
	public noPointerNewDeclarator(_p?: number): NoPointerNewDeclaratorContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: NoPointerNewDeclaratorContext = new NoPointerNewDeclaratorContext(this._ctx, _parentState);
		let _prevctx: NoPointerNewDeclaratorContext = _localctx;
		let _startState: number = 50;
		this.enterRecursionRule(_localctx, 50, CPPParser.RULE_noPointerNewDeclarator, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 663;
			this.match(CPPParser.LeftBracket);
			this.state = 664;
			this.expression();
			this.state = 665;
			this.match(CPPParser.RightBracket);
			this.state = 667;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 50, this._ctx) ) {
			case 1:
				{
				this.state = 666;
				this.attributeSpecifierSeq();
				}
				break;
			}
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 678;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 52, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new NoPointerNewDeclaratorContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CPPParser.RULE_noPointerNewDeclarator);
					this.state = 669;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 670;
					this.match(CPPParser.LeftBracket);
					this.state = 671;
					this.constantExpression();
					this.state = 672;
					this.match(CPPParser.RightBracket);
					this.state = 674;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 51, this._ctx) ) {
					case 1:
						{
						this.state = 673;
						this.attributeSpecifierSeq();
						}
						break;
					}
					}
					}
				}
				this.state = 680;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 52, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public newInitializer(): NewInitializerContext {
		let _localctx: NewInitializerContext = new NewInitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, CPPParser.RULE_newInitializer);
		let _la: number;
		try {
			this.state = 687;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPPParser.LeftParen:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 681;
				this.match(CPPParser.LeftParen);
				this.state = 683;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPPParser.IntegerLiteral) | (1 << CPPParser.CharacterLiteral) | (1 << CPPParser.FloatingLiteral) | (1 << CPPParser.StringLiteral) | (1 << CPPParser.BooleanLiteral) | (1 << CPPParser.PointerLiteral) | (1 << CPPParser.UserDefinedLiteral) | (1 << CPPParser.Alignof) | (1 << CPPParser.Auto) | (1 << CPPParser.Bool) | (1 << CPPParser.Char) | (1 << CPPParser.Char16) | (1 << CPPParser.Char32) | (1 << CPPParser.Const_cast) | (1 << CPPParser.Decltype) | (1 << CPPParser.Delete) | (1 << CPPParser.Double) | (1 << CPPParser.Dynamic_cast))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (CPPParser.Float - 39)) | (1 << (CPPParser.Int - 39)) | (1 << (CPPParser.Long - 39)) | (1 << (CPPParser.New - 39)) | (1 << (CPPParser.Noexcept - 39)) | (1 << (CPPParser.Operator - 39)) | (1 << (CPPParser.Reinterpret_cast - 39)) | (1 << (CPPParser.Short - 39)) | (1 << (CPPParser.Signed - 39)) | (1 << (CPPParser.Sizeof - 39)) | (1 << (CPPParser.Static_cast - 39)) | (1 << (CPPParser.This - 39)))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (CPPParser.Throw - 71)) | (1 << (CPPParser.Typeid_ - 71)) | (1 << (CPPParser.Typename_ - 71)) | (1 << (CPPParser.Unsigned - 71)) | (1 << (CPPParser.Void - 71)) | (1 << (CPPParser.Wchar - 71)) | (1 << (CPPParser.LeftParen - 71)) | (1 << (CPPParser.LeftBracket - 71)) | (1 << (CPPParser.LeftBrace - 71)) | (1 << (CPPParser.Plus - 71)) | (1 << (CPPParser.Minus - 71)) | (1 << (CPPParser.Star - 71)) | (1 << (CPPParser.And - 71)) | (1 << (CPPParser.Or - 71)) | (1 << (CPPParser.Tilde - 71)) | (1 << (CPPParser.Not - 71)))) !== 0) || ((((_la - 120)) & ~0x1F) === 0 && ((1 << (_la - 120)) & ((1 << (CPPParser.PlusPlus - 120)) | (1 << (CPPParser.MinusMinus - 120)) | (1 << (CPPParser.Doublecolon - 120)) | (1 << (CPPParser.Identifier - 120)))) !== 0)) {
					{
					this.state = 682;
					this.expressionList();
					}
				}

				this.state = 685;
				this.match(CPPParser.RightParen);
				}
				break;
			case CPPParser.LeftBrace:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 686;
				this.bracedInitList();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public deleteExpression(): DeleteExpressionContext {
		let _localctx: DeleteExpressionContext = new DeleteExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, CPPParser.RULE_deleteExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 690;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPPParser.Doublecolon) {
				{
				this.state = 689;
				this.match(CPPParser.Doublecolon);
				}
			}

			this.state = 692;
			this.match(CPPParser.Delete);
			this.state = 695;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 56, this._ctx) ) {
			case 1:
				{
				this.state = 693;
				this.match(CPPParser.LeftBracket);
				this.state = 694;
				this.match(CPPParser.RightBracket);
				}
				break;
			}
			this.state = 697;
			this.castExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public noExceptExpression(): NoExceptExpressionContext {
		let _localctx: NoExceptExpressionContext = new NoExceptExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, CPPParser.RULE_noExceptExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 699;
			this.match(CPPParser.Noexcept);
			this.state = 700;
			this.match(CPPParser.LeftParen);
			this.state = 701;
			this.expression();
			this.state = 702;
			this.match(CPPParser.RightParen);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public castExpression(): CastExpressionContext {
		let _localctx: CastExpressionContext = new CastExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, CPPParser.RULE_castExpression);
		try {
			this.state = 710;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 57, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 704;
				this.unaryExpression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 705;
				this.match(CPPParser.LeftParen);
				this.state = 706;
				this.theTypeId();
				this.state = 707;
				this.match(CPPParser.RightParen);
				this.state = 708;
				this.castExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pointerMemberExpression(): PointerMemberExpressionContext {
		let _localctx: PointerMemberExpressionContext = new PointerMemberExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, CPPParser.RULE_pointerMemberExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 712;
			this.castExpression();
			this.state = 717;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CPPParser.ArrowStar || _la === CPPParser.DotStar) {
				{
				{
				this.state = 713;
				_la = this._input.LA(1);
				if (!(_la === CPPParser.ArrowStar || _la === CPPParser.DotStar)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 714;
				this.castExpression();
				}
				}
				this.state = 719;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public multiplicativeExpression(): MultiplicativeExpressionContext {
		let _localctx: MultiplicativeExpressionContext = new MultiplicativeExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, CPPParser.RULE_multiplicativeExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 720;
			this.pointerMemberExpression();
			this.state = 725;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 93)) & ~0x1F) === 0 && ((1 << (_la - 93)) & ((1 << (CPPParser.Star - 93)) | (1 << (CPPParser.Div - 93)) | (1 << (CPPParser.Mod - 93)))) !== 0)) {
				{
				{
				this.state = 721;
				_la = this._input.LA(1);
				if (!(((((_la - 93)) & ~0x1F) === 0 && ((1 << (_la - 93)) & ((1 << (CPPParser.Star - 93)) | (1 << (CPPParser.Div - 93)) | (1 << (CPPParser.Mod - 93)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 722;
				this.pointerMemberExpression();
				}
				}
				this.state = 727;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public additiveExpression(): AdditiveExpressionContext {
		let _localctx: AdditiveExpressionContext = new AdditiveExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, CPPParser.RULE_additiveExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 728;
			this.multiplicativeExpression();
			this.state = 733;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CPPParser.Plus || _la === CPPParser.Minus) {
				{
				{
				this.state = 729;
				_la = this._input.LA(1);
				if (!(_la === CPPParser.Plus || _la === CPPParser.Minus)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 730;
				this.multiplicativeExpression();
				}
				}
				this.state = 735;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public shiftExpression(): ShiftExpressionContext {
		let _localctx: ShiftExpressionContext = new ShiftExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, CPPParser.RULE_shiftExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 736;
			this.additiveExpression();
			this.state = 742;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 61, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 737;
					this.shiftOperator();
					this.state = 738;
					this.additiveExpression();
					}
					}
				}
				this.state = 744;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 61, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public shiftOperator(): ShiftOperatorContext {
		let _localctx: ShiftOperatorContext = new ShiftOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, CPPParser.RULE_shiftOperator);
		try {
			this.state = 749;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPPParser.Greater:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 745;
				this.match(CPPParser.Greater);
				this.state = 746;
				this.match(CPPParser.Greater);
				}
				break;
			case CPPParser.Less:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 747;
				this.match(CPPParser.Less);
				this.state = 748;
				this.match(CPPParser.Less);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public relationalExpression(): RelationalExpressionContext {
		let _localctx: RelationalExpressionContext = new RelationalExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, CPPParser.RULE_relationalExpression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 751;
			this.shiftExpression();
			this.state = 756;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 63, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 752;
					_la = this._input.LA(1);
					if (!(((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (CPPParser.Less - 102)) | (1 << (CPPParser.Greater - 102)) | (1 << (CPPParser.LessEqual - 102)) | (1 << (CPPParser.GreaterEqual - 102)))) !== 0))) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 753;
					this.shiftExpression();
					}
					}
				}
				this.state = 758;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 63, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public equalityExpression(): EqualityExpressionContext {
		let _localctx: EqualityExpressionContext = new EqualityExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, CPPParser.RULE_equalityExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 759;
			this.relationalExpression();
			this.state = 764;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CPPParser.Equal || _la === CPPParser.NotEqual) {
				{
				{
				this.state = 760;
				_la = this._input.LA(1);
				if (!(_la === CPPParser.Equal || _la === CPPParser.NotEqual)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 761;
				this.relationalExpression();
				}
				}
				this.state = 766;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public andExpression(): AndExpressionContext {
		let _localctx: AndExpressionContext = new AndExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, CPPParser.RULE_andExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 767;
			this.equalityExpression();
			this.state = 772;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CPPParser.And) {
				{
				{
				this.state = 768;
				this.match(CPPParser.And);
				this.state = 769;
				this.equalityExpression();
				}
				}
				this.state = 774;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public exclusiveOrExpression(): ExclusiveOrExpressionContext {
		let _localctx: ExclusiveOrExpressionContext = new ExclusiveOrExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, CPPParser.RULE_exclusiveOrExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 775;
			this.andExpression();
			this.state = 780;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CPPParser.Caret) {
				{
				{
				this.state = 776;
				this.match(CPPParser.Caret);
				this.state = 777;
				this.andExpression();
				}
				}
				this.state = 782;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public inclusiveOrExpression(): InclusiveOrExpressionContext {
		let _localctx: InclusiveOrExpressionContext = new InclusiveOrExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, CPPParser.RULE_inclusiveOrExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 783;
			this.exclusiveOrExpression();
			this.state = 788;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CPPParser.Or) {
				{
				{
				this.state = 784;
				this.match(CPPParser.Or);
				this.state = 785;
				this.exclusiveOrExpression();
				}
				}
				this.state = 790;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public logicalAndExpression(): LogicalAndExpressionContext {
		let _localctx: LogicalAndExpressionContext = new LogicalAndExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, CPPParser.RULE_logicalAndExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 791;
			this.inclusiveOrExpression();
			this.state = 796;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CPPParser.AndAnd) {
				{
				{
				this.state = 792;
				this.match(CPPParser.AndAnd);
				this.state = 793;
				this.inclusiveOrExpression();
				}
				}
				this.state = 798;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public logicalOrExpression(): LogicalOrExpressionContext {
		let _localctx: LogicalOrExpressionContext = new LogicalOrExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, CPPParser.RULE_logicalOrExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 799;
			this.logicalAndExpression();
			this.state = 804;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CPPParser.OrOr) {
				{
				{
				this.state = 800;
				this.match(CPPParser.OrOr);
				this.state = 801;
				this.logicalAndExpression();
				}
				}
				this.state = 806;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public conditionalExpression(): ConditionalExpressionContext {
		let _localctx: ConditionalExpressionContext = new ConditionalExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, CPPParser.RULE_conditionalExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 807;
			this.logicalOrExpression();
			this.state = 813;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPPParser.Question) {
				{
				this.state = 808;
				this.match(CPPParser.Question);
				this.state = 809;
				this.expression();
				this.state = 810;
				this.match(CPPParser.Colon);
				this.state = 811;
				this.assignmentExpression();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignmentExpression(): AssignmentExpressionContext {
		let _localctx: AssignmentExpressionContext = new AssignmentExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, CPPParser.RULE_assignmentExpression);
		try {
			this.state = 821;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 71, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 815;
				this.conditionalExpression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 816;
				this.logicalOrExpression();
				this.state = 817;
				this.assignmentOperator();
				this.state = 818;
				this.initializerClause();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 820;
				this.throwExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignmentOperator(): AssignmentOperatorContext {
		let _localctx: AssignmentOperatorContext = new AssignmentOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, CPPParser.RULE_assignmentOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 823;
			_la = this._input.LA(1);
			if (!(((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (CPPParser.Assign - 101)) | (1 << (CPPParser.PlusAssign - 101)) | (1 << (CPPParser.MinusAssign - 101)) | (1 << (CPPParser.StarAssign - 101)) | (1 << (CPPParser.DivAssign - 101)) | (1 << (CPPParser.ModAssign - 101)) | (1 << (CPPParser.XorAssign - 101)) | (1 << (CPPParser.AndAssign - 101)) | (1 << (CPPParser.OrAssign - 101)) | (1 << (CPPParser.LeftShiftAssign - 101)) | (1 << (CPPParser.RightShiftAssign - 101)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, CPPParser.RULE_expression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 825;
			this.assignmentExpression();
			this.state = 830;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CPPParser.Comma) {
				{
				{
				this.state = 826;
				this.match(CPPParser.Comma);
				this.state = 827;
				this.assignmentExpression();
				}
				}
				this.state = 832;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constantExpression(): ConstantExpressionContext {
		let _localctx: ConstantExpressionContext = new ConstantExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, CPPParser.RULE_constantExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 833;
			this.conditionalExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, CPPParser.RULE_statement);
		try {
			this.state = 848;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 75, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 835;
				this.labeledStatement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 836;
				this.declarationStatement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 838;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 73, this._ctx) ) {
				case 1:
					{
					this.state = 837;
					this.attributeSpecifierSeq();
					}
					break;
				}
				this.state = 846;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case CPPParser.IntegerLiteral:
				case CPPParser.CharacterLiteral:
				case CPPParser.FloatingLiteral:
				case CPPParser.StringLiteral:
				case CPPParser.BooleanLiteral:
				case CPPParser.PointerLiteral:
				case CPPParser.UserDefinedLiteral:
				case CPPParser.Alignof:
				case CPPParser.Auto:
				case CPPParser.Bool:
				case CPPParser.Char:
				case CPPParser.Char16:
				case CPPParser.Char32:
				case CPPParser.Const_cast:
				case CPPParser.Decltype:
				case CPPParser.Delete:
				case CPPParser.Double:
				case CPPParser.Dynamic_cast:
				case CPPParser.Float:
				case CPPParser.Int:
				case CPPParser.Long:
				case CPPParser.New:
				case CPPParser.Noexcept:
				case CPPParser.Operator:
				case CPPParser.Reinterpret_cast:
				case CPPParser.Short:
				case CPPParser.Signed:
				case CPPParser.Sizeof:
				case CPPParser.Static_cast:
				case CPPParser.This:
				case CPPParser.Throw:
				case CPPParser.Typeid_:
				case CPPParser.Typename_:
				case CPPParser.Unsigned:
				case CPPParser.Void:
				case CPPParser.Wchar:
				case CPPParser.LeftParen:
				case CPPParser.LeftBracket:
				case CPPParser.Plus:
				case CPPParser.Minus:
				case CPPParser.Star:
				case CPPParser.And:
				case CPPParser.Or:
				case CPPParser.Tilde:
				case CPPParser.Not:
				case CPPParser.PlusPlus:
				case CPPParser.MinusMinus:
				case CPPParser.Doublecolon:
				case CPPParser.Semi:
				case CPPParser.Identifier:
					{
					this.state = 840;
					this.expressionStatement();
					}
					break;
				case CPPParser.LeftBrace:
					{
					this.state = 841;
					this.compoundStatement();
					}
					break;
				case CPPParser.If:
				case CPPParser.Switch:
					{
					this.state = 842;
					this.selectionStatement();
					}
					break;
				case CPPParser.Do:
				case CPPParser.For:
				case CPPParser.While:
					{
					this.state = 843;
					this.iterationStatement();
					}
					break;
				case CPPParser.Break:
				case CPPParser.Continue:
				case CPPParser.Goto:
				case CPPParser.Return:
					{
					this.state = 844;
					this.jumpStatement();
					}
					break;
				case CPPParser.Try:
					{
					this.state = 845;
					this.tryBlock();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public labeledStatement(): LabeledStatementContext {
		let _localctx: LabeledStatementContext = new LabeledStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, CPPParser.RULE_labeledStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 851;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPPParser.Alignas || _la === CPPParser.LeftBracket) {
				{
				this.state = 850;
				this.attributeSpecifierSeq();
				}
			}

			this.state = 857;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPPParser.Identifier:
				{
				this.state = 853;
				this.match(CPPParser.Identifier);
				}
				break;
			case CPPParser.Case:
				{
				this.state = 854;
				this.match(CPPParser.Case);
				this.state = 855;
				this.constantExpression();
				}
				break;
			case CPPParser.Default:
				{
				this.state = 856;
				this.match(CPPParser.Default);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 859;
			this.match(CPPParser.Colon);
			this.state = 860;
			this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionStatement(): ExpressionStatementContext {
		let _localctx: ExpressionStatementContext = new ExpressionStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, CPPParser.RULE_expressionStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 863;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPPParser.IntegerLiteral) | (1 << CPPParser.CharacterLiteral) | (1 << CPPParser.FloatingLiteral) | (1 << CPPParser.StringLiteral) | (1 << CPPParser.BooleanLiteral) | (1 << CPPParser.PointerLiteral) | (1 << CPPParser.UserDefinedLiteral) | (1 << CPPParser.Alignof) | (1 << CPPParser.Auto) | (1 << CPPParser.Bool) | (1 << CPPParser.Char) | (1 << CPPParser.Char16) | (1 << CPPParser.Char32) | (1 << CPPParser.Const_cast) | (1 << CPPParser.Decltype) | (1 << CPPParser.Delete) | (1 << CPPParser.Double) | (1 << CPPParser.Dynamic_cast))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (CPPParser.Float - 39)) | (1 << (CPPParser.Int - 39)) | (1 << (CPPParser.Long - 39)) | (1 << (CPPParser.New - 39)) | (1 << (CPPParser.Noexcept - 39)) | (1 << (CPPParser.Operator - 39)) | (1 << (CPPParser.Reinterpret_cast - 39)) | (1 << (CPPParser.Short - 39)) | (1 << (CPPParser.Signed - 39)) | (1 << (CPPParser.Sizeof - 39)) | (1 << (CPPParser.Static_cast - 39)) | (1 << (CPPParser.This - 39)))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (CPPParser.Throw - 71)) | (1 << (CPPParser.Typeid_ - 71)) | (1 << (CPPParser.Typename_ - 71)) | (1 << (CPPParser.Unsigned - 71)) | (1 << (CPPParser.Void - 71)) | (1 << (CPPParser.Wchar - 71)) | (1 << (CPPParser.LeftParen - 71)) | (1 << (CPPParser.LeftBracket - 71)) | (1 << (CPPParser.Plus - 71)) | (1 << (CPPParser.Minus - 71)) | (1 << (CPPParser.Star - 71)) | (1 << (CPPParser.And - 71)) | (1 << (CPPParser.Or - 71)) | (1 << (CPPParser.Tilde - 71)) | (1 << (CPPParser.Not - 71)))) !== 0) || ((((_la - 120)) & ~0x1F) === 0 && ((1 << (_la - 120)) & ((1 << (CPPParser.PlusPlus - 120)) | (1 << (CPPParser.MinusMinus - 120)) | (1 << (CPPParser.Doublecolon - 120)) | (1 << (CPPParser.Identifier - 120)))) !== 0)) {
				{
				this.state = 862;
				this.expression();
				}
			}

			this.state = 865;
			this.match(CPPParser.Semi);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public compoundStatement(): CompoundStatementContext {
		let _localctx: CompoundStatementContext = new CompoundStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, CPPParser.RULE_compoundStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 867;
			this.match(CPPParser.LeftBrace);
			this.state = 869;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPPParser.IntegerLiteral) | (1 << CPPParser.CharacterLiteral) | (1 << CPPParser.FloatingLiteral) | (1 << CPPParser.StringLiteral) | (1 << CPPParser.BooleanLiteral) | (1 << CPPParser.PointerLiteral) | (1 << CPPParser.UserDefinedLiteral) | (1 << CPPParser.Alignas) | (1 << CPPParser.Alignof) | (1 << CPPParser.Asm) | (1 << CPPParser.Auto) | (1 << CPPParser.Bool) | (1 << CPPParser.Break) | (1 << CPPParser.Case) | (1 << CPPParser.Char) | (1 << CPPParser.Char16) | (1 << CPPParser.Char32) | (1 << CPPParser.Class) | (1 << CPPParser.Const) | (1 << CPPParser.Constexpr) | (1 << CPPParser.Const_cast) | (1 << CPPParser.Continue) | (1 << CPPParser.Decltype) | (1 << CPPParser.Default) | (1 << CPPParser.Delete) | (1 << CPPParser.Do) | (1 << CPPParser.Double) | (1 << CPPParser.Dynamic_cast))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (CPPParser.Enum - 33)) | (1 << (CPPParser.Explicit - 33)) | (1 << (CPPParser.Extern - 33)) | (1 << (CPPParser.Float - 33)) | (1 << (CPPParser.For - 33)) | (1 << (CPPParser.Friend - 33)) | (1 << (CPPParser.Goto - 33)) | (1 << (CPPParser.If - 33)) | (1 << (CPPParser.Inline - 33)) | (1 << (CPPParser.Int - 33)) | (1 << (CPPParser.Long - 33)) | (1 << (CPPParser.Mutable - 33)) | (1 << (CPPParser.Namespace - 33)) | (1 << (CPPParser.New - 33)) | (1 << (CPPParser.Noexcept - 33)) | (1 << (CPPParser.Operator - 33)) | (1 << (CPPParser.Register - 33)) | (1 << (CPPParser.Reinterpret_cast - 33)) | (1 << (CPPParser.Return - 33)) | (1 << (CPPParser.Short - 33)) | (1 << (CPPParser.Signed - 33)) | (1 << (CPPParser.Sizeof - 33)) | (1 << (CPPParser.Static - 33)) | (1 << (CPPParser.Static_assert - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (CPPParser.Static_cast - 65)) | (1 << (CPPParser.Struct - 65)) | (1 << (CPPParser.Switch - 65)) | (1 << (CPPParser.This - 65)) | (1 << (CPPParser.Thread_local - 65)) | (1 << (CPPParser.Throw - 65)) | (1 << (CPPParser.Try - 65)) | (1 << (CPPParser.Typedef - 65)) | (1 << (CPPParser.Typeid_ - 65)) | (1 << (CPPParser.Typename_ - 65)) | (1 << (CPPParser.Union - 65)) | (1 << (CPPParser.Unsigned - 65)) | (1 << (CPPParser.Using - 65)) | (1 << (CPPParser.Virtual - 65)) | (1 << (CPPParser.Void - 65)) | (1 << (CPPParser.Volatile - 65)) | (1 << (CPPParser.Wchar - 65)) | (1 << (CPPParser.While - 65)) | (1 << (CPPParser.LeftParen - 65)) | (1 << (CPPParser.LeftBracket - 65)) | (1 << (CPPParser.LeftBrace - 65)) | (1 << (CPPParser.Plus - 65)) | (1 << (CPPParser.Minus - 65)) | (1 << (CPPParser.Star - 65)))) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & ((1 << (CPPParser.And - 97)) | (1 << (CPPParser.Or - 97)) | (1 << (CPPParser.Tilde - 97)) | (1 << (CPPParser.Not - 97)) | (1 << (CPPParser.AndAnd - 97)) | (1 << (CPPParser.PlusPlus - 97)) | (1 << (CPPParser.MinusMinus - 97)) | (1 << (CPPParser.Doublecolon - 97)) | (1 << (CPPParser.Semi - 97)))) !== 0) || _la === CPPParser.Ellipsis || _la === CPPParser.Identifier) {
				{
				this.state = 868;
				this.statementSeq();
				}
			}

			this.state = 871;
			this.match(CPPParser.RightBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statementSeq(): StatementSeqContext {
		let _localctx: StatementSeqContext = new StatementSeqContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, CPPParser.RULE_statementSeq);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 874;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 873;
				this.statement();
				}
				}
				this.state = 876;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPPParser.IntegerLiteral) | (1 << CPPParser.CharacterLiteral) | (1 << CPPParser.FloatingLiteral) | (1 << CPPParser.StringLiteral) | (1 << CPPParser.BooleanLiteral) | (1 << CPPParser.PointerLiteral) | (1 << CPPParser.UserDefinedLiteral) | (1 << CPPParser.Alignas) | (1 << CPPParser.Alignof) | (1 << CPPParser.Asm) | (1 << CPPParser.Auto) | (1 << CPPParser.Bool) | (1 << CPPParser.Break) | (1 << CPPParser.Case) | (1 << CPPParser.Char) | (1 << CPPParser.Char16) | (1 << CPPParser.Char32) | (1 << CPPParser.Class) | (1 << CPPParser.Const) | (1 << CPPParser.Constexpr) | (1 << CPPParser.Const_cast) | (1 << CPPParser.Continue) | (1 << CPPParser.Decltype) | (1 << CPPParser.Default) | (1 << CPPParser.Delete) | (1 << CPPParser.Do) | (1 << CPPParser.Double) | (1 << CPPParser.Dynamic_cast))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (CPPParser.Enum - 33)) | (1 << (CPPParser.Explicit - 33)) | (1 << (CPPParser.Extern - 33)) | (1 << (CPPParser.Float - 33)) | (1 << (CPPParser.For - 33)) | (1 << (CPPParser.Friend - 33)) | (1 << (CPPParser.Goto - 33)) | (1 << (CPPParser.If - 33)) | (1 << (CPPParser.Inline - 33)) | (1 << (CPPParser.Int - 33)) | (1 << (CPPParser.Long - 33)) | (1 << (CPPParser.Mutable - 33)) | (1 << (CPPParser.Namespace - 33)) | (1 << (CPPParser.New - 33)) | (1 << (CPPParser.Noexcept - 33)) | (1 << (CPPParser.Operator - 33)) | (1 << (CPPParser.Register - 33)) | (1 << (CPPParser.Reinterpret_cast - 33)) | (1 << (CPPParser.Return - 33)) | (1 << (CPPParser.Short - 33)) | (1 << (CPPParser.Signed - 33)) | (1 << (CPPParser.Sizeof - 33)) | (1 << (CPPParser.Static - 33)) | (1 << (CPPParser.Static_assert - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (CPPParser.Static_cast - 65)) | (1 << (CPPParser.Struct - 65)) | (1 << (CPPParser.Switch - 65)) | (1 << (CPPParser.This - 65)) | (1 << (CPPParser.Thread_local - 65)) | (1 << (CPPParser.Throw - 65)) | (1 << (CPPParser.Try - 65)) | (1 << (CPPParser.Typedef - 65)) | (1 << (CPPParser.Typeid_ - 65)) | (1 << (CPPParser.Typename_ - 65)) | (1 << (CPPParser.Union - 65)) | (1 << (CPPParser.Unsigned - 65)) | (1 << (CPPParser.Using - 65)) | (1 << (CPPParser.Virtual - 65)) | (1 << (CPPParser.Void - 65)) | (1 << (CPPParser.Volatile - 65)) | (1 << (CPPParser.Wchar - 65)) | (1 << (CPPParser.While - 65)) | (1 << (CPPParser.LeftParen - 65)) | (1 << (CPPParser.LeftBracket - 65)) | (1 << (CPPParser.LeftBrace - 65)) | (1 << (CPPParser.Plus - 65)) | (1 << (CPPParser.Minus - 65)) | (1 << (CPPParser.Star - 65)))) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & ((1 << (CPPParser.And - 97)) | (1 << (CPPParser.Or - 97)) | (1 << (CPPParser.Tilde - 97)) | (1 << (CPPParser.Not - 97)) | (1 << (CPPParser.AndAnd - 97)) | (1 << (CPPParser.PlusPlus - 97)) | (1 << (CPPParser.MinusMinus - 97)) | (1 << (CPPParser.Doublecolon - 97)) | (1 << (CPPParser.Semi - 97)))) !== 0) || _la === CPPParser.Ellipsis || _la === CPPParser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public selectionStatement(): SelectionStatementContext {
		let _localctx: SelectionStatementContext = new SelectionStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, CPPParser.RULE_selectionStatement);
		try {
			this.state = 893;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPPParser.If:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 878;
				this.match(CPPParser.If);
				this.state = 879;
				this.match(CPPParser.LeftParen);
				this.state = 880;
				this.condition();
				this.state = 881;
				this.match(CPPParser.RightParen);
				this.state = 882;
				this.statement();
				this.state = 885;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 81, this._ctx) ) {
				case 1:
					{
					this.state = 883;
					this.match(CPPParser.Else);
					this.state = 884;
					this.statement();
					}
					break;
				}
				}
				break;
			case CPPParser.Switch:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 887;
				this.match(CPPParser.Switch);
				this.state = 888;
				this.match(CPPParser.LeftParen);
				this.state = 889;
				this.condition();
				this.state = 890;
				this.match(CPPParser.RightParen);
				this.state = 891;
				this.statement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public condition(): ConditionContext {
		let _localctx: ConditionContext = new ConditionContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, CPPParser.RULE_condition);
		let _la: number;
		try {
			this.state = 906;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 85, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 895;
				this.expression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 897;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPPParser.Alignas || _la === CPPParser.LeftBracket) {
					{
					this.state = 896;
					this.attributeSpecifierSeq();
					}
				}

				this.state = 899;
				this.declSpecifierSeq();
				this.state = 900;
				this.declarator();
				this.state = 904;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case CPPParser.Assign:
					{
					this.state = 901;
					this.match(CPPParser.Assign);
					this.state = 902;
					this.initializerClause();
					}
					break;
				case CPPParser.LeftBrace:
					{
					this.state = 903;
					this.bracedInitList();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public iterationStatement(): IterationStatementContext {
		let _localctx: IterationStatementContext = new IterationStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, CPPParser.RULE_iterationStatement);
		let _la: number;
		try {
			this.state = 941;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPPParser.While:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 908;
				this.match(CPPParser.While);
				this.state = 909;
				this.match(CPPParser.LeftParen);
				this.state = 910;
				this.condition();
				this.state = 911;
				this.match(CPPParser.RightParen);
				this.state = 912;
				this.statement();
				}
				break;
			case CPPParser.Do:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 914;
				this.match(CPPParser.Do);
				this.state = 915;
				this.statement();
				this.state = 916;
				this.match(CPPParser.While);
				this.state = 917;
				this.match(CPPParser.LeftParen);
				this.state = 918;
				this.expression();
				this.state = 919;
				this.match(CPPParser.RightParen);
				this.state = 920;
				this.match(CPPParser.Semi);
				}
				break;
			case CPPParser.For:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 922;
				this.match(CPPParser.For);
				this.state = 923;
				this.match(CPPParser.LeftParen);
				this.state = 936;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 88, this._ctx) ) {
				case 1:
					{
					this.state = 924;
					this.forInitStatement();
					this.state = 926;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPPParser.IntegerLiteral) | (1 << CPPParser.CharacterLiteral) | (1 << CPPParser.FloatingLiteral) | (1 << CPPParser.StringLiteral) | (1 << CPPParser.BooleanLiteral) | (1 << CPPParser.PointerLiteral) | (1 << CPPParser.UserDefinedLiteral) | (1 << CPPParser.Alignas) | (1 << CPPParser.Alignof) | (1 << CPPParser.Auto) | (1 << CPPParser.Bool) | (1 << CPPParser.Char) | (1 << CPPParser.Char16) | (1 << CPPParser.Char32) | (1 << CPPParser.Class) | (1 << CPPParser.Const) | (1 << CPPParser.Constexpr) | (1 << CPPParser.Const_cast) | (1 << CPPParser.Decltype) | (1 << CPPParser.Delete) | (1 << CPPParser.Double) | (1 << CPPParser.Dynamic_cast))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (CPPParser.Enum - 33)) | (1 << (CPPParser.Explicit - 33)) | (1 << (CPPParser.Extern - 33)) | (1 << (CPPParser.Float - 33)) | (1 << (CPPParser.Friend - 33)) | (1 << (CPPParser.Inline - 33)) | (1 << (CPPParser.Int - 33)) | (1 << (CPPParser.Long - 33)) | (1 << (CPPParser.Mutable - 33)) | (1 << (CPPParser.New - 33)) | (1 << (CPPParser.Noexcept - 33)) | (1 << (CPPParser.Operator - 33)) | (1 << (CPPParser.Register - 33)) | (1 << (CPPParser.Reinterpret_cast - 33)) | (1 << (CPPParser.Short - 33)) | (1 << (CPPParser.Signed - 33)) | (1 << (CPPParser.Sizeof - 33)) | (1 << (CPPParser.Static - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (CPPParser.Static_cast - 65)) | (1 << (CPPParser.Struct - 65)) | (1 << (CPPParser.This - 65)) | (1 << (CPPParser.Thread_local - 65)) | (1 << (CPPParser.Throw - 65)) | (1 << (CPPParser.Typedef - 65)) | (1 << (CPPParser.Typeid_ - 65)) | (1 << (CPPParser.Typename_ - 65)) | (1 << (CPPParser.Union - 65)) | (1 << (CPPParser.Unsigned - 65)) | (1 << (CPPParser.Virtual - 65)) | (1 << (CPPParser.Void - 65)) | (1 << (CPPParser.Volatile - 65)) | (1 << (CPPParser.Wchar - 65)) | (1 << (CPPParser.LeftParen - 65)) | (1 << (CPPParser.LeftBracket - 65)) | (1 << (CPPParser.Plus - 65)) | (1 << (CPPParser.Minus - 65)) | (1 << (CPPParser.Star - 65)))) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & ((1 << (CPPParser.And - 97)) | (1 << (CPPParser.Or - 97)) | (1 << (CPPParser.Tilde - 97)) | (1 << (CPPParser.Not - 97)) | (1 << (CPPParser.PlusPlus - 97)) | (1 << (CPPParser.MinusMinus - 97)) | (1 << (CPPParser.Doublecolon - 97)))) !== 0) || _la === CPPParser.Identifier) {
						{
						this.state = 925;
						this.condition();
						}
					}

					this.state = 928;
					this.match(CPPParser.Semi);
					this.state = 930;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPPParser.IntegerLiteral) | (1 << CPPParser.CharacterLiteral) | (1 << CPPParser.FloatingLiteral) | (1 << CPPParser.StringLiteral) | (1 << CPPParser.BooleanLiteral) | (1 << CPPParser.PointerLiteral) | (1 << CPPParser.UserDefinedLiteral) | (1 << CPPParser.Alignof) | (1 << CPPParser.Auto) | (1 << CPPParser.Bool) | (1 << CPPParser.Char) | (1 << CPPParser.Char16) | (1 << CPPParser.Char32) | (1 << CPPParser.Const_cast) | (1 << CPPParser.Decltype) | (1 << CPPParser.Delete) | (1 << CPPParser.Double) | (1 << CPPParser.Dynamic_cast))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (CPPParser.Float - 39)) | (1 << (CPPParser.Int - 39)) | (1 << (CPPParser.Long - 39)) | (1 << (CPPParser.New - 39)) | (1 << (CPPParser.Noexcept - 39)) | (1 << (CPPParser.Operator - 39)) | (1 << (CPPParser.Reinterpret_cast - 39)) | (1 << (CPPParser.Short - 39)) | (1 << (CPPParser.Signed - 39)) | (1 << (CPPParser.Sizeof - 39)) | (1 << (CPPParser.Static_cast - 39)) | (1 << (CPPParser.This - 39)))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (CPPParser.Throw - 71)) | (1 << (CPPParser.Typeid_ - 71)) | (1 << (CPPParser.Typename_ - 71)) | (1 << (CPPParser.Unsigned - 71)) | (1 << (CPPParser.Void - 71)) | (1 << (CPPParser.Wchar - 71)) | (1 << (CPPParser.LeftParen - 71)) | (1 << (CPPParser.LeftBracket - 71)) | (1 << (CPPParser.Plus - 71)) | (1 << (CPPParser.Minus - 71)) | (1 << (CPPParser.Star - 71)) | (1 << (CPPParser.And - 71)) | (1 << (CPPParser.Or - 71)) | (1 << (CPPParser.Tilde - 71)) | (1 << (CPPParser.Not - 71)))) !== 0) || ((((_la - 120)) & ~0x1F) === 0 && ((1 << (_la - 120)) & ((1 << (CPPParser.PlusPlus - 120)) | (1 << (CPPParser.MinusMinus - 120)) | (1 << (CPPParser.Doublecolon - 120)) | (1 << (CPPParser.Identifier - 120)))) !== 0)) {
						{
						this.state = 929;
						this.expression();
						}
					}

					}
					break;

				case 2:
					{
					this.state = 932;
					this.forRangeDeclaration();
					this.state = 933;
					this.match(CPPParser.Colon);
					this.state = 934;
					this.forRangeInitializer();
					}
					break;
				}
				this.state = 938;
				this.match(CPPParser.RightParen);
				this.state = 939;
				this.statement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forInitStatement(): ForInitStatementContext {
		let _localctx: ForInitStatementContext = new ForInitStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, CPPParser.RULE_forInitStatement);
		try {
			this.state = 945;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 90, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 943;
				this.expressionStatement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 944;
				this.simpleDeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forRangeDeclaration(): ForRangeDeclarationContext {
		let _localctx: ForRangeDeclarationContext = new ForRangeDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, CPPParser.RULE_forRangeDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 948;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPPParser.Alignas || _la === CPPParser.LeftBracket) {
				{
				this.state = 947;
				this.attributeSpecifierSeq();
				}
			}

			this.state = 950;
			this.declSpecifierSeq();
			this.state = 951;
			this.declarator();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forRangeInitializer(): ForRangeInitializerContext {
		let _localctx: ForRangeInitializerContext = new ForRangeInitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, CPPParser.RULE_forRangeInitializer);
		try {
			this.state = 955;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPPParser.IntegerLiteral:
			case CPPParser.CharacterLiteral:
			case CPPParser.FloatingLiteral:
			case CPPParser.StringLiteral:
			case CPPParser.BooleanLiteral:
			case CPPParser.PointerLiteral:
			case CPPParser.UserDefinedLiteral:
			case CPPParser.Alignof:
			case CPPParser.Auto:
			case CPPParser.Bool:
			case CPPParser.Char:
			case CPPParser.Char16:
			case CPPParser.Char32:
			case CPPParser.Const_cast:
			case CPPParser.Decltype:
			case CPPParser.Delete:
			case CPPParser.Double:
			case CPPParser.Dynamic_cast:
			case CPPParser.Float:
			case CPPParser.Int:
			case CPPParser.Long:
			case CPPParser.New:
			case CPPParser.Noexcept:
			case CPPParser.Operator:
			case CPPParser.Reinterpret_cast:
			case CPPParser.Short:
			case CPPParser.Signed:
			case CPPParser.Sizeof:
			case CPPParser.Static_cast:
			case CPPParser.This:
			case CPPParser.Throw:
			case CPPParser.Typeid_:
			case CPPParser.Typename_:
			case CPPParser.Unsigned:
			case CPPParser.Void:
			case CPPParser.Wchar:
			case CPPParser.LeftParen:
			case CPPParser.LeftBracket:
			case CPPParser.Plus:
			case CPPParser.Minus:
			case CPPParser.Star:
			case CPPParser.And:
			case CPPParser.Or:
			case CPPParser.Tilde:
			case CPPParser.Not:
			case CPPParser.PlusPlus:
			case CPPParser.MinusMinus:
			case CPPParser.Doublecolon:
			case CPPParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 953;
				this.expression();
				}
				break;
			case CPPParser.LeftBrace:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 954;
				this.bracedInitList();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public jumpStatement(): JumpStatementContext {
		let _localctx: JumpStatementContext = new JumpStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, CPPParser.RULE_jumpStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 966;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPPParser.Break:
				{
				this.state = 957;
				this.match(CPPParser.Break);
				}
				break;
			case CPPParser.Continue:
				{
				this.state = 958;
				this.match(CPPParser.Continue);
				}
				break;
			case CPPParser.Return:
				{
				this.state = 959;
				this.match(CPPParser.Return);
				this.state = 962;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case CPPParser.IntegerLiteral:
				case CPPParser.CharacterLiteral:
				case CPPParser.FloatingLiteral:
				case CPPParser.StringLiteral:
				case CPPParser.BooleanLiteral:
				case CPPParser.PointerLiteral:
				case CPPParser.UserDefinedLiteral:
				case CPPParser.Alignof:
				case CPPParser.Auto:
				case CPPParser.Bool:
				case CPPParser.Char:
				case CPPParser.Char16:
				case CPPParser.Char32:
				case CPPParser.Const_cast:
				case CPPParser.Decltype:
				case CPPParser.Delete:
				case CPPParser.Double:
				case CPPParser.Dynamic_cast:
				case CPPParser.Float:
				case CPPParser.Int:
				case CPPParser.Long:
				case CPPParser.New:
				case CPPParser.Noexcept:
				case CPPParser.Operator:
				case CPPParser.Reinterpret_cast:
				case CPPParser.Short:
				case CPPParser.Signed:
				case CPPParser.Sizeof:
				case CPPParser.Static_cast:
				case CPPParser.This:
				case CPPParser.Throw:
				case CPPParser.Typeid_:
				case CPPParser.Typename_:
				case CPPParser.Unsigned:
				case CPPParser.Void:
				case CPPParser.Wchar:
				case CPPParser.LeftParen:
				case CPPParser.LeftBracket:
				case CPPParser.Plus:
				case CPPParser.Minus:
				case CPPParser.Star:
				case CPPParser.And:
				case CPPParser.Or:
				case CPPParser.Tilde:
				case CPPParser.Not:
				case CPPParser.PlusPlus:
				case CPPParser.MinusMinus:
				case CPPParser.Doublecolon:
				case CPPParser.Identifier:
					{
					this.state = 960;
					this.expression();
					}
					break;
				case CPPParser.LeftBrace:
					{
					this.state = 961;
					this.bracedInitList();
					}
					break;
				case CPPParser.Semi:
					break;
				default:
					break;
				}
				}
				break;
			case CPPParser.Goto:
				{
				this.state = 964;
				this.match(CPPParser.Goto);
				this.state = 965;
				this.match(CPPParser.Identifier);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 968;
			this.match(CPPParser.Semi);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declarationStatement(): DeclarationStatementContext {
		let _localctx: DeclarationStatementContext = new DeclarationStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, CPPParser.RULE_declarationStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 970;
			this.blockDeclaration();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declarationseq(): DeclarationseqContext {
		let _localctx: DeclarationseqContext = new DeclarationseqContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, CPPParser.RULE_declarationseq);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 973;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 972;
				this.declaration();
				}
				}
				this.state = 975;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 10)) & ~0x1F) === 0 && ((1 << (_la - 10)) & ((1 << (CPPParser.Alignas - 10)) | (1 << (CPPParser.Asm - 10)) | (1 << (CPPParser.Auto - 10)) | (1 << (CPPParser.Bool - 10)) | (1 << (CPPParser.Char - 10)) | (1 << (CPPParser.Char16 - 10)) | (1 << (CPPParser.Char32 - 10)) | (1 << (CPPParser.Class - 10)) | (1 << (CPPParser.Const - 10)) | (1 << (CPPParser.Constexpr - 10)) | (1 << (CPPParser.Decltype - 10)) | (1 << (CPPParser.Double - 10)) | (1 << (CPPParser.Enum - 10)) | (1 << (CPPParser.Explicit - 10)) | (1 << (CPPParser.Extern - 10)) | (1 << (CPPParser.Float - 10)) | (1 << (CPPParser.Friend - 10)))) !== 0) || ((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & ((1 << (CPPParser.Inline - 44)) | (1 << (CPPParser.Int - 44)) | (1 << (CPPParser.Long - 44)) | (1 << (CPPParser.Mutable - 44)) | (1 << (CPPParser.Namespace - 44)) | (1 << (CPPParser.Operator - 44)) | (1 << (CPPParser.Register - 44)) | (1 << (CPPParser.Short - 44)) | (1 << (CPPParser.Signed - 44)) | (1 << (CPPParser.Static - 44)) | (1 << (CPPParser.Static_assert - 44)) | (1 << (CPPParser.Struct - 44)) | (1 << (CPPParser.Template - 44)) | (1 << (CPPParser.Thread_local - 44)) | (1 << (CPPParser.Typedef - 44)))) !== 0) || ((((_la - 76)) & ~0x1F) === 0 && ((1 << (_la - 76)) & ((1 << (CPPParser.Typename_ - 76)) | (1 << (CPPParser.Union - 76)) | (1 << (CPPParser.Unsigned - 76)) | (1 << (CPPParser.Using - 76)) | (1 << (CPPParser.Virtual - 76)) | (1 << (CPPParser.Void - 76)) | (1 << (CPPParser.Volatile - 76)) | (1 << (CPPParser.Wchar - 76)) | (1 << (CPPParser.LeftParen - 76)) | (1 << (CPPParser.LeftBracket - 76)) | (1 << (CPPParser.Star - 76)) | (1 << (CPPParser.And - 76)) | (1 << (CPPParser.Tilde - 76)))) !== 0) || ((((_la - 118)) & ~0x1F) === 0 && ((1 << (_la - 118)) & ((1 << (CPPParser.AndAnd - 118)) | (1 << (CPPParser.Doublecolon - 118)) | (1 << (CPPParser.Semi - 118)) | (1 << (CPPParser.Ellipsis - 118)) | (1 << (CPPParser.Identifier - 118)))) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declaration(): DeclarationContext {
		let _localctx: DeclarationContext = new DeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, CPPParser.RULE_declaration);
		try {
			this.state = 986;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 96, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 977;
				this.blockDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 978;
				this.functionDefinition();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 979;
				this.templateDeclaration();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 980;
				this.explicitInstantiation();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 981;
				this.explicitSpecialization();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 982;
				this.linkageSpecification();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 983;
				this.namespaceDefinition();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 984;
				this.emptyDeclaration();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 985;
				this.attributeDeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public blockDeclaration(): BlockDeclarationContext {
		let _localctx: BlockDeclarationContext = new BlockDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, CPPParser.RULE_blockDeclaration);
		try {
			this.state = 996;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 97, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 988;
				this.simpleDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 989;
				this.asmDefinition();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 990;
				this.namespaceAliasDefinition();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 991;
				this.usingDeclaration();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 992;
				this.usingDirective();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 993;
				this.staticAssertDeclaration();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 994;
				this.aliasDeclaration();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 995;
				this.opaqueEnumDeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public aliasDeclaration(): AliasDeclarationContext {
		let _localctx: AliasDeclarationContext = new AliasDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, CPPParser.RULE_aliasDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 998;
			this.match(CPPParser.Using);
			this.state = 999;
			this.match(CPPParser.Identifier);
			this.state = 1001;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPPParser.Alignas || _la === CPPParser.LeftBracket) {
				{
				this.state = 1000;
				this.attributeSpecifierSeq();
				}
			}

			this.state = 1003;
			this.match(CPPParser.Assign);
			this.state = 1004;
			this.theTypeId();
			this.state = 1005;
			this.match(CPPParser.Semi);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public simpleDeclaration(): SimpleDeclarationContext {
		let _localctx: SimpleDeclarationContext = new SimpleDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, CPPParser.RULE_simpleDeclaration);
		let _la: number;
		try {
			this.state = 1021;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPPParser.Auto:
			case CPPParser.Bool:
			case CPPParser.Char:
			case CPPParser.Char16:
			case CPPParser.Char32:
			case CPPParser.Class:
			case CPPParser.Const:
			case CPPParser.Constexpr:
			case CPPParser.Decltype:
			case CPPParser.Double:
			case CPPParser.Enum:
			case CPPParser.Explicit:
			case CPPParser.Extern:
			case CPPParser.Float:
			case CPPParser.Friend:
			case CPPParser.Inline:
			case CPPParser.Int:
			case CPPParser.Long:
			case CPPParser.Mutable:
			case CPPParser.Operator:
			case CPPParser.Register:
			case CPPParser.Short:
			case CPPParser.Signed:
			case CPPParser.Static:
			case CPPParser.Struct:
			case CPPParser.Thread_local:
			case CPPParser.Typedef:
			case CPPParser.Typename_:
			case CPPParser.Union:
			case CPPParser.Unsigned:
			case CPPParser.Virtual:
			case CPPParser.Void:
			case CPPParser.Volatile:
			case CPPParser.Wchar:
			case CPPParser.LeftParen:
			case CPPParser.Star:
			case CPPParser.And:
			case CPPParser.Tilde:
			case CPPParser.AndAnd:
			case CPPParser.Doublecolon:
			case CPPParser.Semi:
			case CPPParser.Ellipsis:
			case CPPParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1008;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 99, this._ctx) ) {
				case 1:
					{
					this.state = 1007;
					this.declSpecifierSeq();
					}
					break;
				}
				this.state = 1011;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPPParser.Decltype || _la === CPPParser.Operator || ((((_la - 85)) & ~0x1F) === 0 && ((1 << (_la - 85)) & ((1 << (CPPParser.LeftParen - 85)) | (1 << (CPPParser.Star - 85)) | (1 << (CPPParser.And - 85)) | (1 << (CPPParser.Tilde - 85)))) !== 0) || ((((_la - 118)) & ~0x1F) === 0 && ((1 << (_la - 118)) & ((1 << (CPPParser.AndAnd - 118)) | (1 << (CPPParser.Doublecolon - 118)) | (1 << (CPPParser.Ellipsis - 118)) | (1 << (CPPParser.Identifier - 118)))) !== 0)) {
					{
					this.state = 1010;
					this.initDeclaratorList();
					}
				}

				this.state = 1013;
				this.match(CPPParser.Semi);
				}
				break;
			case CPPParser.Alignas:
			case CPPParser.LeftBracket:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1014;
				this.attributeSpecifierSeq();
				this.state = 1016;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 101, this._ctx) ) {
				case 1:
					{
					this.state = 1015;
					this.declSpecifierSeq();
					}
					break;
				}
				this.state = 1018;
				this.initDeclaratorList();
				this.state = 1019;
				this.match(CPPParser.Semi);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public staticAssertDeclaration(): StaticAssertDeclarationContext {
		let _localctx: StaticAssertDeclarationContext = new StaticAssertDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, CPPParser.RULE_staticAssertDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1023;
			this.match(CPPParser.Static_assert);
			this.state = 1024;
			this.match(CPPParser.LeftParen);
			this.state = 1025;
			this.constantExpression();
			this.state = 1026;
			this.match(CPPParser.Comma);
			this.state = 1027;
			this.match(CPPParser.StringLiteral);
			this.state = 1028;
			this.match(CPPParser.RightParen);
			this.state = 1029;
			this.match(CPPParser.Semi);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public emptyDeclaration(): EmptyDeclarationContext {
		let _localctx: EmptyDeclarationContext = new EmptyDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, CPPParser.RULE_emptyDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1031;
			this.match(CPPParser.Semi);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public attributeDeclaration(): AttributeDeclarationContext {
		let _localctx: AttributeDeclarationContext = new AttributeDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, CPPParser.RULE_attributeDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1033;
			this.attributeSpecifierSeq();
			this.state = 1034;
			this.match(CPPParser.Semi);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declSpecifier(): DeclSpecifierContext {
		let _localctx: DeclSpecifierContext = new DeclSpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, CPPParser.RULE_declSpecifier);
		try {
			this.state = 1042;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPPParser.Extern:
			case CPPParser.Mutable:
			case CPPParser.Register:
			case CPPParser.Static:
			case CPPParser.Thread_local:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1036;
				this.storageClassSpecifier();
				}
				break;
			case CPPParser.Auto:
			case CPPParser.Bool:
			case CPPParser.Char:
			case CPPParser.Char16:
			case CPPParser.Char32:
			case CPPParser.Class:
			case CPPParser.Const:
			case CPPParser.Decltype:
			case CPPParser.Double:
			case CPPParser.Enum:
			case CPPParser.Float:
			case CPPParser.Int:
			case CPPParser.Long:
			case CPPParser.Short:
			case CPPParser.Signed:
			case CPPParser.Struct:
			case CPPParser.Typename_:
			case CPPParser.Union:
			case CPPParser.Unsigned:
			case CPPParser.Void:
			case CPPParser.Volatile:
			case CPPParser.Wchar:
			case CPPParser.Doublecolon:
			case CPPParser.Identifier:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1037;
				this.typeSpecifier();
				}
				break;
			case CPPParser.Explicit:
			case CPPParser.Inline:
			case CPPParser.Virtual:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1038;
				this.functionSpecifier();
				}
				break;
			case CPPParser.Friend:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1039;
				this.match(CPPParser.Friend);
				}
				break;
			case CPPParser.Typedef:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1040;
				this.match(CPPParser.Typedef);
				}
				break;
			case CPPParser.Constexpr:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1041;
				this.match(CPPParser.Constexpr);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declSpecifierSeq(): DeclSpecifierSeqContext {
		let _localctx: DeclSpecifierSeqContext = new DeclSpecifierSeqContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, CPPParser.RULE_declSpecifierSeq);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1045;
			this._errHandler.sync(this);
			_alt = 1 + 1;
			do {
				switch (_alt) {
				case 1 + 1:
					{
					{
					this.state = 1044;
					this.declSpecifier();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1047;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 104, this._ctx);
			} while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 1050;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 105, this._ctx) ) {
			case 1:
				{
				this.state = 1049;
				this.attributeSpecifierSeq();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public storageClassSpecifier(): StorageClassSpecifierContext {
		let _localctx: StorageClassSpecifierContext = new StorageClassSpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, CPPParser.RULE_storageClassSpecifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1052;
			_la = this._input.LA(1);
			if (!(((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (CPPParser.Extern - 36)) | (1 << (CPPParser.Mutable - 36)) | (1 << (CPPParser.Register - 36)) | (1 << (CPPParser.Static - 36)))) !== 0) || _la === CPPParser.Thread_local)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionSpecifier(): FunctionSpecifierContext {
		let _localctx: FunctionSpecifierContext = new FunctionSpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, CPPParser.RULE_functionSpecifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1054;
			_la = this._input.LA(1);
			if (!(_la === CPPParser.Explicit || _la === CPPParser.Inline || _la === CPPParser.Virtual)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typedefName(): TypedefNameContext {
		let _localctx: TypedefNameContext = new TypedefNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, CPPParser.RULE_typedefName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1056;
			this.match(CPPParser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeSpecifier(): TypeSpecifierContext {
		let _localctx: TypeSpecifierContext = new TypeSpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, CPPParser.RULE_typeSpecifier);
		try {
			this.state = 1061;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 106, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1058;
				this.trailingTypeSpecifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1059;
				this.classSpecifier();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1060;
				this.enumSpecifier();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public trailingTypeSpecifier(): TrailingTypeSpecifierContext {
		let _localctx: TrailingTypeSpecifierContext = new TrailingTypeSpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 148, CPPParser.RULE_trailingTypeSpecifier);
		try {
			this.state = 1067;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPPParser.Auto:
			case CPPParser.Bool:
			case CPPParser.Char:
			case CPPParser.Char16:
			case CPPParser.Char32:
			case CPPParser.Decltype:
			case CPPParser.Double:
			case CPPParser.Float:
			case CPPParser.Int:
			case CPPParser.Long:
			case CPPParser.Short:
			case CPPParser.Signed:
			case CPPParser.Unsigned:
			case CPPParser.Void:
			case CPPParser.Wchar:
			case CPPParser.Doublecolon:
			case CPPParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1063;
				this.simpleTypeSpecifier();
				}
				break;
			case CPPParser.Class:
			case CPPParser.Enum:
			case CPPParser.Struct:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1064;
				this.elaboratedTypeSpecifier();
				}
				break;
			case CPPParser.Typename_:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1065;
				this.typeNameSpecifier();
				}
				break;
			case CPPParser.Const:
			case CPPParser.Volatile:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1066;
				this.cvQualifier();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeSpecifierSeq(): TypeSpecifierSeqContext {
		let _localctx: TypeSpecifierSeqContext = new TypeSpecifierSeqContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, CPPParser.RULE_typeSpecifierSeq);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1070;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1069;
					this.typeSpecifier();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1072;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 108, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 1075;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 109, this._ctx) ) {
			case 1:
				{
				this.state = 1074;
				this.attributeSpecifierSeq();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public trailingTypeSpecifierSeq(): TrailingTypeSpecifierSeqContext {
		let _localctx: TrailingTypeSpecifierSeqContext = new TrailingTypeSpecifierSeqContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, CPPParser.RULE_trailingTypeSpecifierSeq);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1078;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1077;
					this.trailingTypeSpecifier();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1080;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 110, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 1083;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 111, this._ctx) ) {
			case 1:
				{
				this.state = 1082;
				this.attributeSpecifierSeq();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public simpleTypeLengthModifier(): SimpleTypeLengthModifierContext {
		let _localctx: SimpleTypeLengthModifierContext = new SimpleTypeLengthModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, CPPParser.RULE_simpleTypeLengthModifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1085;
			_la = this._input.LA(1);
			if (!(_la === CPPParser.Long || _la === CPPParser.Short)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public simpleTypeSignednessModifier(): SimpleTypeSignednessModifierContext {
		let _localctx: SimpleTypeSignednessModifierContext = new SimpleTypeSignednessModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, CPPParser.RULE_simpleTypeSignednessModifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1087;
			_la = this._input.LA(1);
			if (!(_la === CPPParser.Signed || _la === CPPParser.Unsigned)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public simpleTypeSpecifier(): SimpleTypeSpecifierContext {
		let _localctx: SimpleTypeSpecifierContext = new SimpleTypeSpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, CPPParser.RULE_simpleTypeSpecifier);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1141;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 122, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1090;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 112, this._ctx) ) {
				case 1:
					{
					this.state = 1089;
					this.nestedNameSpecifier(0);
					}
					break;
				}
				this.state = 1092;
				this.theTypeName();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1093;
				this.nestedNameSpecifier(0);
				this.state = 1094;
				this.match(CPPParser.Template);
				this.state = 1095;
				this.simpleTemplateId();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1097;
				this.simpleTypeSignednessModifier();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1099;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPPParser.Signed || _la === CPPParser.Unsigned) {
					{
					this.state = 1098;
					this.simpleTypeSignednessModifier();
					}
				}

				this.state = 1102;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 1101;
						this.simpleTypeLengthModifier();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 1104;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 114, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1107;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPPParser.Signed || _la === CPPParser.Unsigned) {
					{
					this.state = 1106;
					this.simpleTypeSignednessModifier();
					}
				}

				this.state = 1109;
				this.match(CPPParser.Char);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1111;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPPParser.Signed || _la === CPPParser.Unsigned) {
					{
					this.state = 1110;
					this.simpleTypeSignednessModifier();
					}
				}

				this.state = 1113;
				this.match(CPPParser.Char16);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1115;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPPParser.Signed || _la === CPPParser.Unsigned) {
					{
					this.state = 1114;
					this.simpleTypeSignednessModifier();
					}
				}

				this.state = 1117;
				this.match(CPPParser.Char32);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1119;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPPParser.Signed || _la === CPPParser.Unsigned) {
					{
					this.state = 1118;
					this.simpleTypeSignednessModifier();
					}
				}

				this.state = 1121;
				this.match(CPPParser.Wchar);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1122;
				this.match(CPPParser.Bool);
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1124;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPPParser.Signed || _la === CPPParser.Unsigned) {
					{
					this.state = 1123;
					this.simpleTypeSignednessModifier();
					}
				}

				this.state = 1129;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CPPParser.Long || _la === CPPParser.Short) {
					{
					{
					this.state = 1126;
					this.simpleTypeLengthModifier();
					}
					}
					this.state = 1131;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1132;
				this.match(CPPParser.Int);
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 1133;
				this.match(CPPParser.Float);
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 1135;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPPParser.Long || _la === CPPParser.Short) {
					{
					this.state = 1134;
					this.simpleTypeLengthModifier();
					}
				}

				this.state = 1137;
				this.match(CPPParser.Double);
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 1138;
				this.match(CPPParser.Void);
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 1139;
				this.match(CPPParser.Auto);
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 1140;
				this.decltypeSpecifier();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public theTypeName(): TheTypeNameContext {
		let _localctx: TheTypeNameContext = new TheTypeNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, CPPParser.RULE_theTypeName);
		try {
			this.state = 1147;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 123, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1143;
				this.className();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1144;
				this.enumName();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1145;
				this.typedefName();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1146;
				this.simpleTemplateId();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public decltypeSpecifier(): DecltypeSpecifierContext {
		let _localctx: DecltypeSpecifierContext = new DecltypeSpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 162, CPPParser.RULE_decltypeSpecifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1149;
			this.match(CPPParser.Decltype);
			this.state = 1150;
			this.match(CPPParser.LeftParen);
			this.state = 1153;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 124, this._ctx) ) {
			case 1:
				{
				this.state = 1151;
				this.expression();
				}
				break;

			case 2:
				{
				this.state = 1152;
				this.match(CPPParser.Auto);
				}
				break;
			}
			this.state = 1155;
			this.match(CPPParser.RightParen);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elaboratedTypeSpecifier(): ElaboratedTypeSpecifierContext {
		let _localctx: ElaboratedTypeSpecifierContext = new ElaboratedTypeSpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 164, CPPParser.RULE_elaboratedTypeSpecifier);
		let _la: number;
		try {
			this.state = 1179;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPPParser.Class:
			case CPPParser.Struct:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1157;
				this.classKey();
				this.state = 1172;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 128, this._ctx) ) {
				case 1:
					{
					this.state = 1159;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === CPPParser.Alignas || _la === CPPParser.LeftBracket) {
						{
						this.state = 1158;
						this.attributeSpecifierSeq();
						}
					}

					this.state = 1162;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 126, this._ctx) ) {
					case 1:
						{
						this.state = 1161;
						this.nestedNameSpecifier(0);
						}
						break;
					}
					this.state = 1164;
					this.match(CPPParser.Identifier);
					}
					break;

				case 2:
					{
					this.state = 1165;
					this.simpleTemplateId();
					}
					break;

				case 3:
					{
					this.state = 1166;
					this.nestedNameSpecifier(0);
					this.state = 1168;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === CPPParser.Template) {
						{
						this.state = 1167;
						this.match(CPPParser.Template);
						}
					}

					this.state = 1170;
					this.simpleTemplateId();
					}
					break;
				}
				}
				break;
			case CPPParser.Enum:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1174;
				this.match(CPPParser.Enum);
				this.state = 1176;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 129, this._ctx) ) {
				case 1:
					{
					this.state = 1175;
					this.nestedNameSpecifier(0);
					}
					break;
				}
				this.state = 1178;
				this.match(CPPParser.Identifier);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumName(): EnumNameContext {
		let _localctx: EnumNameContext = new EnumNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 166, CPPParser.RULE_enumName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1181;
			this.match(CPPParser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumSpecifier(): EnumSpecifierContext {
		let _localctx: EnumSpecifierContext = new EnumSpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 168, CPPParser.RULE_enumSpecifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1183;
			this.enumHead();
			this.state = 1184;
			this.match(CPPParser.LeftBrace);
			this.state = 1189;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPPParser.Identifier) {
				{
				this.state = 1185;
				this.enumeratorList();
				this.state = 1187;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPPParser.Comma) {
					{
					this.state = 1186;
					this.match(CPPParser.Comma);
					}
				}

				}
			}

			this.state = 1191;
			this.match(CPPParser.RightBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumHead(): EnumHeadContext {
		let _localctx: EnumHeadContext = new EnumHeadContext(this._ctx, this.state);
		this.enterRule(_localctx, 170, CPPParser.RULE_enumHead);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1193;
			this.enumkey();
			this.state = 1195;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPPParser.Alignas || _la === CPPParser.LeftBracket) {
				{
				this.state = 1194;
				this.attributeSpecifierSeq();
				}
			}

			this.state = 1201;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPPParser.Decltype || _la === CPPParser.Doublecolon || _la === CPPParser.Identifier) {
				{
				this.state = 1198;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 134, this._ctx) ) {
				case 1:
					{
					this.state = 1197;
					this.nestedNameSpecifier(0);
					}
					break;
				}
				this.state = 1200;
				this.match(CPPParser.Identifier);
				}
			}

			this.state = 1204;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPPParser.Colon) {
				{
				this.state = 1203;
				this.enumbase();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public opaqueEnumDeclaration(): OpaqueEnumDeclarationContext {
		let _localctx: OpaqueEnumDeclarationContext = new OpaqueEnumDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 172, CPPParser.RULE_opaqueEnumDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1206;
			this.enumkey();
			this.state = 1208;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPPParser.Alignas || _la === CPPParser.LeftBracket) {
				{
				this.state = 1207;
				this.attributeSpecifierSeq();
				}
			}

			this.state = 1210;
			this.match(CPPParser.Identifier);
			this.state = 1212;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPPParser.Colon) {
				{
				this.state = 1211;
				this.enumbase();
				}
			}

			this.state = 1214;
			this.match(CPPParser.Semi);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumkey(): EnumkeyContext {
		let _localctx: EnumkeyContext = new EnumkeyContext(this._ctx, this.state);
		this.enterRule(_localctx, 174, CPPParser.RULE_enumkey);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1216;
			this.match(CPPParser.Enum);
			this.state = 1218;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPPParser.Class || _la === CPPParser.Struct) {
				{
				this.state = 1217;
				_la = this._input.LA(1);
				if (!(_la === CPPParser.Class || _la === CPPParser.Struct)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumbase(): EnumbaseContext {
		let _localctx: EnumbaseContext = new EnumbaseContext(this._ctx, this.state);
		this.enterRule(_localctx, 176, CPPParser.RULE_enumbase);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1220;
			this.match(CPPParser.Colon);
			this.state = 1221;
			this.typeSpecifierSeq();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumeratorList(): EnumeratorListContext {
		let _localctx: EnumeratorListContext = new EnumeratorListContext(this._ctx, this.state);
		this.enterRule(_localctx, 178, CPPParser.RULE_enumeratorList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1223;
			this.enumeratorDefinition();
			this.state = 1228;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 140, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1224;
					this.match(CPPParser.Comma);
					this.state = 1225;
					this.enumeratorDefinition();
					}
					}
				}
				this.state = 1230;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 140, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumeratorDefinition(): EnumeratorDefinitionContext {
		let _localctx: EnumeratorDefinitionContext = new EnumeratorDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 180, CPPParser.RULE_enumeratorDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1231;
			this.enumerator();
			this.state = 1234;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPPParser.Assign) {
				{
				this.state = 1232;
				this.match(CPPParser.Assign);
				this.state = 1233;
				this.constantExpression();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumerator(): EnumeratorContext {
		let _localctx: EnumeratorContext = new EnumeratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 182, CPPParser.RULE_enumerator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1236;
			this.match(CPPParser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public namespaceName(): NamespaceNameContext {
		let _localctx: NamespaceNameContext = new NamespaceNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 184, CPPParser.RULE_namespaceName);
		try {
			this.state = 1240;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 142, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1238;
				this.originalNamespaceName();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1239;
				this.namespaceAlias();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public originalNamespaceName(): OriginalNamespaceNameContext {
		let _localctx: OriginalNamespaceNameContext = new OriginalNamespaceNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 186, CPPParser.RULE_originalNamespaceName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1242;
			this.match(CPPParser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public namespaceDefinition(): NamespaceDefinitionContext {
		let _localctx: NamespaceDefinitionContext = new NamespaceDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 188, CPPParser.RULE_namespaceDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1245;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPPParser.Inline) {
				{
				this.state = 1244;
				this.match(CPPParser.Inline);
				}
			}

			this.state = 1247;
			this.match(CPPParser.Namespace);
			this.state = 1250;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 144, this._ctx) ) {
			case 1:
				{
				this.state = 1248;
				this.match(CPPParser.Identifier);
				}
				break;

			case 2:
				{
				this.state = 1249;
				this.originalNamespaceName();
				}
				break;
			}
			this.state = 1252;
			this.match(CPPParser.LeftBrace);
			this.state = 1254;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 10)) & ~0x1F) === 0 && ((1 << (_la - 10)) & ((1 << (CPPParser.Alignas - 10)) | (1 << (CPPParser.Asm - 10)) | (1 << (CPPParser.Auto - 10)) | (1 << (CPPParser.Bool - 10)) | (1 << (CPPParser.Char - 10)) | (1 << (CPPParser.Char16 - 10)) | (1 << (CPPParser.Char32 - 10)) | (1 << (CPPParser.Class - 10)) | (1 << (CPPParser.Const - 10)) | (1 << (CPPParser.Constexpr - 10)) | (1 << (CPPParser.Decltype - 10)) | (1 << (CPPParser.Double - 10)) | (1 << (CPPParser.Enum - 10)) | (1 << (CPPParser.Explicit - 10)) | (1 << (CPPParser.Extern - 10)) | (1 << (CPPParser.Float - 10)) | (1 << (CPPParser.Friend - 10)))) !== 0) || ((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & ((1 << (CPPParser.Inline - 44)) | (1 << (CPPParser.Int - 44)) | (1 << (CPPParser.Long - 44)) | (1 << (CPPParser.Mutable - 44)) | (1 << (CPPParser.Namespace - 44)) | (1 << (CPPParser.Operator - 44)) | (1 << (CPPParser.Register - 44)) | (1 << (CPPParser.Short - 44)) | (1 << (CPPParser.Signed - 44)) | (1 << (CPPParser.Static - 44)) | (1 << (CPPParser.Static_assert - 44)) | (1 << (CPPParser.Struct - 44)) | (1 << (CPPParser.Template - 44)) | (1 << (CPPParser.Thread_local - 44)) | (1 << (CPPParser.Typedef - 44)))) !== 0) || ((((_la - 76)) & ~0x1F) === 0 && ((1 << (_la - 76)) & ((1 << (CPPParser.Typename_ - 76)) | (1 << (CPPParser.Union - 76)) | (1 << (CPPParser.Unsigned - 76)) | (1 << (CPPParser.Using - 76)) | (1 << (CPPParser.Virtual - 76)) | (1 << (CPPParser.Void - 76)) | (1 << (CPPParser.Volatile - 76)) | (1 << (CPPParser.Wchar - 76)) | (1 << (CPPParser.LeftParen - 76)) | (1 << (CPPParser.LeftBracket - 76)) | (1 << (CPPParser.Star - 76)) | (1 << (CPPParser.And - 76)) | (1 << (CPPParser.Tilde - 76)))) !== 0) || ((((_la - 118)) & ~0x1F) === 0 && ((1 << (_la - 118)) & ((1 << (CPPParser.AndAnd - 118)) | (1 << (CPPParser.Doublecolon - 118)) | (1 << (CPPParser.Semi - 118)) | (1 << (CPPParser.Ellipsis - 118)) | (1 << (CPPParser.Identifier - 118)))) !== 0)) {
				{
				this.state = 1253;
				_localctx._namespaceBody = this.declarationseq();
				}
			}

			this.state = 1256;
			this.match(CPPParser.RightBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public namespaceAlias(): NamespaceAliasContext {
		let _localctx: NamespaceAliasContext = new NamespaceAliasContext(this._ctx, this.state);
		this.enterRule(_localctx, 190, CPPParser.RULE_namespaceAlias);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1258;
			this.match(CPPParser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public namespaceAliasDefinition(): NamespaceAliasDefinitionContext {
		let _localctx: NamespaceAliasDefinitionContext = new NamespaceAliasDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 192, CPPParser.RULE_namespaceAliasDefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1260;
			this.match(CPPParser.Namespace);
			this.state = 1261;
			this.match(CPPParser.Identifier);
			this.state = 1262;
			this.match(CPPParser.Assign);
			this.state = 1263;
			this.qualifiednamespacespecifier();
			this.state = 1264;
			this.match(CPPParser.Semi);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public qualifiednamespacespecifier(): QualifiednamespacespecifierContext {
		let _localctx: QualifiednamespacespecifierContext = new QualifiednamespacespecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 194, CPPParser.RULE_qualifiednamespacespecifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1267;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 146, this._ctx) ) {
			case 1:
				{
				this.state = 1266;
				this.nestedNameSpecifier(0);
				}
				break;
			}
			this.state = 1269;
			this.namespaceName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public usingDeclaration(): UsingDeclarationContext {
		let _localctx: UsingDeclarationContext = new UsingDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 196, CPPParser.RULE_usingDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1271;
			this.match(CPPParser.Using);
			this.state = 1277;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 148, this._ctx) ) {
			case 1:
				{
				{
				this.state = 1273;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPPParser.Typename_) {
					{
					this.state = 1272;
					this.match(CPPParser.Typename_);
					}
				}

				this.state = 1275;
				this.nestedNameSpecifier(0);
				}
				}
				break;

			case 2:
				{
				this.state = 1276;
				this.match(CPPParser.Doublecolon);
				}
				break;
			}
			this.state = 1279;
			this.unqualifiedId();
			this.state = 1280;
			this.match(CPPParser.Semi);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public usingDirective(): UsingDirectiveContext {
		let _localctx: UsingDirectiveContext = new UsingDirectiveContext(this._ctx, this.state);
		this.enterRule(_localctx, 198, CPPParser.RULE_usingDirective);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1283;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPPParser.Alignas || _la === CPPParser.LeftBracket) {
				{
				this.state = 1282;
				this.attributeSpecifierSeq();
				}
			}

			this.state = 1285;
			this.match(CPPParser.Using);
			this.state = 1286;
			this.match(CPPParser.Namespace);
			this.state = 1288;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 150, this._ctx) ) {
			case 1:
				{
				this.state = 1287;
				this.nestedNameSpecifier(0);
				}
				break;
			}
			this.state = 1290;
			this.namespaceName();
			this.state = 1291;
			this.match(CPPParser.Semi);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public asmDefinition(): AsmDefinitionContext {
		let _localctx: AsmDefinitionContext = new AsmDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 200, CPPParser.RULE_asmDefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1293;
			this.match(CPPParser.Asm);
			this.state = 1294;
			this.match(CPPParser.LeftParen);
			this.state = 1295;
			this.match(CPPParser.StringLiteral);
			this.state = 1296;
			this.match(CPPParser.RightParen);
			this.state = 1297;
			this.match(CPPParser.Semi);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public linkageSpecification(): LinkageSpecificationContext {
		let _localctx: LinkageSpecificationContext = new LinkageSpecificationContext(this._ctx, this.state);
		this.enterRule(_localctx, 202, CPPParser.RULE_linkageSpecification);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1299;
			this.match(CPPParser.Extern);
			this.state = 1300;
			this.match(CPPParser.StringLiteral);
			this.state = 1307;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPPParser.LeftBrace:
				{
				this.state = 1301;
				this.match(CPPParser.LeftBrace);
				this.state = 1303;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 10)) & ~0x1F) === 0 && ((1 << (_la - 10)) & ((1 << (CPPParser.Alignas - 10)) | (1 << (CPPParser.Asm - 10)) | (1 << (CPPParser.Auto - 10)) | (1 << (CPPParser.Bool - 10)) | (1 << (CPPParser.Char - 10)) | (1 << (CPPParser.Char16 - 10)) | (1 << (CPPParser.Char32 - 10)) | (1 << (CPPParser.Class - 10)) | (1 << (CPPParser.Const - 10)) | (1 << (CPPParser.Constexpr - 10)) | (1 << (CPPParser.Decltype - 10)) | (1 << (CPPParser.Double - 10)) | (1 << (CPPParser.Enum - 10)) | (1 << (CPPParser.Explicit - 10)) | (1 << (CPPParser.Extern - 10)) | (1 << (CPPParser.Float - 10)) | (1 << (CPPParser.Friend - 10)))) !== 0) || ((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & ((1 << (CPPParser.Inline - 44)) | (1 << (CPPParser.Int - 44)) | (1 << (CPPParser.Long - 44)) | (1 << (CPPParser.Mutable - 44)) | (1 << (CPPParser.Namespace - 44)) | (1 << (CPPParser.Operator - 44)) | (1 << (CPPParser.Register - 44)) | (1 << (CPPParser.Short - 44)) | (1 << (CPPParser.Signed - 44)) | (1 << (CPPParser.Static - 44)) | (1 << (CPPParser.Static_assert - 44)) | (1 << (CPPParser.Struct - 44)) | (1 << (CPPParser.Template - 44)) | (1 << (CPPParser.Thread_local - 44)) | (1 << (CPPParser.Typedef - 44)))) !== 0) || ((((_la - 76)) & ~0x1F) === 0 && ((1 << (_la - 76)) & ((1 << (CPPParser.Typename_ - 76)) | (1 << (CPPParser.Union - 76)) | (1 << (CPPParser.Unsigned - 76)) | (1 << (CPPParser.Using - 76)) | (1 << (CPPParser.Virtual - 76)) | (1 << (CPPParser.Void - 76)) | (1 << (CPPParser.Volatile - 76)) | (1 << (CPPParser.Wchar - 76)) | (1 << (CPPParser.LeftParen - 76)) | (1 << (CPPParser.LeftBracket - 76)) | (1 << (CPPParser.Star - 76)) | (1 << (CPPParser.And - 76)) | (1 << (CPPParser.Tilde - 76)))) !== 0) || ((((_la - 118)) & ~0x1F) === 0 && ((1 << (_la - 118)) & ((1 << (CPPParser.AndAnd - 118)) | (1 << (CPPParser.Doublecolon - 118)) | (1 << (CPPParser.Semi - 118)) | (1 << (CPPParser.Ellipsis - 118)) | (1 << (CPPParser.Identifier - 118)))) !== 0)) {
					{
					this.state = 1302;
					this.declarationseq();
					}
				}

				this.state = 1305;
				this.match(CPPParser.RightBrace);
				}
				break;
			case CPPParser.Alignas:
			case CPPParser.Asm:
			case CPPParser.Auto:
			case CPPParser.Bool:
			case CPPParser.Char:
			case CPPParser.Char16:
			case CPPParser.Char32:
			case CPPParser.Class:
			case CPPParser.Const:
			case CPPParser.Constexpr:
			case CPPParser.Decltype:
			case CPPParser.Double:
			case CPPParser.Enum:
			case CPPParser.Explicit:
			case CPPParser.Extern:
			case CPPParser.Float:
			case CPPParser.Friend:
			case CPPParser.Inline:
			case CPPParser.Int:
			case CPPParser.Long:
			case CPPParser.Mutable:
			case CPPParser.Namespace:
			case CPPParser.Operator:
			case CPPParser.Register:
			case CPPParser.Short:
			case CPPParser.Signed:
			case CPPParser.Static:
			case CPPParser.Static_assert:
			case CPPParser.Struct:
			case CPPParser.Template:
			case CPPParser.Thread_local:
			case CPPParser.Typedef:
			case CPPParser.Typename_:
			case CPPParser.Union:
			case CPPParser.Unsigned:
			case CPPParser.Using:
			case CPPParser.Virtual:
			case CPPParser.Void:
			case CPPParser.Volatile:
			case CPPParser.Wchar:
			case CPPParser.LeftParen:
			case CPPParser.LeftBracket:
			case CPPParser.Star:
			case CPPParser.And:
			case CPPParser.Tilde:
			case CPPParser.AndAnd:
			case CPPParser.Doublecolon:
			case CPPParser.Semi:
			case CPPParser.Ellipsis:
			case CPPParser.Identifier:
				{
				this.state = 1306;
				this.declaration();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public attributeSpecifierSeq(): AttributeSpecifierSeqContext {
		let _localctx: AttributeSpecifierSeqContext = new AttributeSpecifierSeqContext(this._ctx, this.state);
		this.enterRule(_localctx, 204, CPPParser.RULE_attributeSpecifierSeq);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1310;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1309;
					this.attributeSpecifier();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1312;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 153, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public attributeSpecifier(): AttributeSpecifierContext {
		let _localctx: AttributeSpecifierContext = new AttributeSpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 206, CPPParser.RULE_attributeSpecifier);
		let _la: number;
		try {
			this.state = 1322;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPPParser.LeftBracket:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1314;
				this.match(CPPParser.LeftBracket);
				this.state = 1315;
				this.match(CPPParser.LeftBracket);
				this.state = 1317;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPPParser.Identifier) {
					{
					this.state = 1316;
					this.attributeList();
					}
				}

				this.state = 1319;
				this.match(CPPParser.RightBracket);
				this.state = 1320;
				this.match(CPPParser.RightBracket);
				}
				break;
			case CPPParser.Alignas:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1321;
				this.alignmentspecifier();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public alignmentspecifier(): AlignmentspecifierContext {
		let _localctx: AlignmentspecifierContext = new AlignmentspecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 208, CPPParser.RULE_alignmentspecifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1324;
			this.match(CPPParser.Alignas);
			this.state = 1325;
			this.match(CPPParser.LeftParen);
			this.state = 1328;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 156, this._ctx) ) {
			case 1:
				{
				this.state = 1326;
				this.theTypeId();
				}
				break;

			case 2:
				{
				this.state = 1327;
				this.constantExpression();
				}
				break;
			}
			this.state = 1331;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPPParser.Ellipsis) {
				{
				this.state = 1330;
				this.match(CPPParser.Ellipsis);
				}
			}

			this.state = 1333;
			this.match(CPPParser.RightParen);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public attributeList(): AttributeListContext {
		let _localctx: AttributeListContext = new AttributeListContext(this._ctx, this.state);
		this.enterRule(_localctx, 210, CPPParser.RULE_attributeList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1335;
			this.attribute();
			this.state = 1340;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CPPParser.Comma) {
				{
				{
				this.state = 1336;
				this.match(CPPParser.Comma);
				this.state = 1337;
				this.attribute();
				}
				}
				this.state = 1342;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1344;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPPParser.Ellipsis) {
				{
				this.state = 1343;
				this.match(CPPParser.Ellipsis);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public attribute(): AttributeContext {
		let _localctx: AttributeContext = new AttributeContext(this._ctx, this.state);
		this.enterRule(_localctx, 212, CPPParser.RULE_attribute);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1349;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 160, this._ctx) ) {
			case 1:
				{
				this.state = 1346;
				this.attributeNamespace();
				this.state = 1347;
				this.match(CPPParser.Doublecolon);
				}
				break;
			}
			this.state = 1351;
			this.match(CPPParser.Identifier);
			this.state = 1353;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPPParser.LeftParen) {
				{
				this.state = 1352;
				this.attributeArgumentClause();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public attributeNamespace(): AttributeNamespaceContext {
		let _localctx: AttributeNamespaceContext = new AttributeNamespaceContext(this._ctx, this.state);
		this.enterRule(_localctx, 214, CPPParser.RULE_attributeNamespace);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1355;
			this.match(CPPParser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public attributeArgumentClause(): AttributeArgumentClauseContext {
		let _localctx: AttributeArgumentClauseContext = new AttributeArgumentClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 216, CPPParser.RULE_attributeArgumentClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1357;
			this.match(CPPParser.LeftParen);
			this.state = 1359;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPPParser.IntegerLiteral) | (1 << CPPParser.CharacterLiteral) | (1 << CPPParser.FloatingLiteral) | (1 << CPPParser.StringLiteral) | (1 << CPPParser.BooleanLiteral) | (1 << CPPParser.PointerLiteral) | (1 << CPPParser.UserDefinedLiteral) | (1 << CPPParser.MultiLineMacro) | (1 << CPPParser.Directive) | (1 << CPPParser.Alignas) | (1 << CPPParser.Alignof) | (1 << CPPParser.Asm) | (1 << CPPParser.Auto) | (1 << CPPParser.Bool) | (1 << CPPParser.Break) | (1 << CPPParser.Case) | (1 << CPPParser.Catch) | (1 << CPPParser.Char) | (1 << CPPParser.Char16) | (1 << CPPParser.Char32) | (1 << CPPParser.Class) | (1 << CPPParser.Const) | (1 << CPPParser.Constexpr) | (1 << CPPParser.Const_cast) | (1 << CPPParser.Continue) | (1 << CPPParser.Decltype) | (1 << CPPParser.Default) | (1 << CPPParser.Delete) | (1 << CPPParser.Do) | (1 << CPPParser.Double) | (1 << CPPParser.Dynamic_cast))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CPPParser.Else - 32)) | (1 << (CPPParser.Enum - 32)) | (1 << (CPPParser.Explicit - 32)) | (1 << (CPPParser.Export - 32)) | (1 << (CPPParser.Extern - 32)) | (1 << (CPPParser.False_ - 32)) | (1 << (CPPParser.Final - 32)) | (1 << (CPPParser.Float - 32)) | (1 << (CPPParser.For - 32)) | (1 << (CPPParser.Friend - 32)) | (1 << (CPPParser.Goto - 32)) | (1 << (CPPParser.If - 32)) | (1 << (CPPParser.Inline - 32)) | (1 << (CPPParser.Int - 32)) | (1 << (CPPParser.Long - 32)) | (1 << (CPPParser.Mutable - 32)) | (1 << (CPPParser.Namespace - 32)) | (1 << (CPPParser.New - 32)) | (1 << (CPPParser.Noexcept - 32)) | (1 << (CPPParser.Nullptr - 32)) | (1 << (CPPParser.Operator - 32)) | (1 << (CPPParser.Override - 32)) | (1 << (CPPParser.Private - 32)) | (1 << (CPPParser.Protected - 32)) | (1 << (CPPParser.Public - 32)) | (1 << (CPPParser.Register - 32)) | (1 << (CPPParser.Reinterpret_cast - 32)) | (1 << (CPPParser.Return - 32)) | (1 << (CPPParser.Short - 32)) | (1 << (CPPParser.Signed - 32)) | (1 << (CPPParser.Sizeof - 32)) | (1 << (CPPParser.Static - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (CPPParser.Static_assert - 64)) | (1 << (CPPParser.Static_cast - 64)) | (1 << (CPPParser.Struct - 64)) | (1 << (CPPParser.Switch - 64)) | (1 << (CPPParser.Template - 64)) | (1 << (CPPParser.This - 64)) | (1 << (CPPParser.Thread_local - 64)) | (1 << (CPPParser.Throw - 64)) | (1 << (CPPParser.True_ - 64)) | (1 << (CPPParser.Try - 64)) | (1 << (CPPParser.Typedef - 64)) | (1 << (CPPParser.Typeid_ - 64)) | (1 << (CPPParser.Typename_ - 64)) | (1 << (CPPParser.Union - 64)) | (1 << (CPPParser.Unsigned - 64)) | (1 << (CPPParser.Using - 64)) | (1 << (CPPParser.Virtual - 64)) | (1 << (CPPParser.Void - 64)) | (1 << (CPPParser.Volatile - 64)) | (1 << (CPPParser.Wchar - 64)) | (1 << (CPPParser.While - 64)) | (1 << (CPPParser.LeftParen - 64)) | (1 << (CPPParser.LeftBracket - 64)) | (1 << (CPPParser.LeftBrace - 64)) | (1 << (CPPParser.Plus - 64)) | (1 << (CPPParser.Minus - 64)) | (1 << (CPPParser.Star - 64)) | (1 << (CPPParser.Div - 64)) | (1 << (CPPParser.Mod - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (CPPParser.Caret - 96)) | (1 << (CPPParser.And - 96)) | (1 << (CPPParser.Or - 96)) | (1 << (CPPParser.Tilde - 96)) | (1 << (CPPParser.Not - 96)) | (1 << (CPPParser.Assign - 96)) | (1 << (CPPParser.Less - 96)) | (1 << (CPPParser.Greater - 96)) | (1 << (CPPParser.PlusAssign - 96)) | (1 << (CPPParser.MinusAssign - 96)) | (1 << (CPPParser.StarAssign - 96)) | (1 << (CPPParser.DivAssign - 96)) | (1 << (CPPParser.ModAssign - 96)) | (1 << (CPPParser.XorAssign - 96)) | (1 << (CPPParser.AndAssign - 96)) | (1 << (CPPParser.OrAssign - 96)) | (1 << (CPPParser.LeftShiftAssign - 96)) | (1 << (CPPParser.RightShiftAssign - 96)) | (1 << (CPPParser.Equal - 96)) | (1 << (CPPParser.NotEqual - 96)) | (1 << (CPPParser.LessEqual - 96)) | (1 << (CPPParser.GreaterEqual - 96)) | (1 << (CPPParser.AndAnd - 96)) | (1 << (CPPParser.OrOr - 96)) | (1 << (CPPParser.PlusPlus - 96)) | (1 << (CPPParser.MinusMinus - 96)) | (1 << (CPPParser.Comma - 96)) | (1 << (CPPParser.ArrowStar - 96)) | (1 << (CPPParser.Arrow - 96)) | (1 << (CPPParser.Question - 96)) | (1 << (CPPParser.Colon - 96)) | (1 << (CPPParser.Doublecolon - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (CPPParser.Semi - 128)) | (1 << (CPPParser.Dot - 128)) | (1 << (CPPParser.DotStar - 128)) | (1 << (CPPParser.Ellipsis - 128)) | (1 << (CPPParser.Identifier - 128)) | (1 << (CPPParser.DecimalLiteral - 128)) | (1 << (CPPParser.OctalLiteral - 128)) | (1 << (CPPParser.HexadecimalLiteral - 128)) | (1 << (CPPParser.BinaryLiteral - 128)) | (1 << (CPPParser.Integersuffix - 128)) | (1 << (CPPParser.UserDefinedIntegerLiteral - 128)) | (1 << (CPPParser.UserDefinedFloatingLiteral - 128)) | (1 << (CPPParser.UserDefinedStringLiteral - 128)) | (1 << (CPPParser.UserDefinedCharacterLiteral - 128)) | (1 << (CPPParser.Whitespace - 128)) | (1 << (CPPParser.Newline - 128)) | (1 << (CPPParser.BlockComment - 128)) | (1 << (CPPParser.LineComment - 128)))) !== 0)) {
				{
				this.state = 1358;
				this.balancedTokenSeq();
				}
			}

			this.state = 1361;
			this.match(CPPParser.RightParen);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public balancedTokenSeq(): BalancedTokenSeqContext {
		let _localctx: BalancedTokenSeqContext = new BalancedTokenSeqContext(this._ctx, this.state);
		this.enterRule(_localctx, 218, CPPParser.RULE_balancedTokenSeq);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1364;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1363;
				this.balancedtoken();
				}
				}
				this.state = 1366;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPPParser.IntegerLiteral) | (1 << CPPParser.CharacterLiteral) | (1 << CPPParser.FloatingLiteral) | (1 << CPPParser.StringLiteral) | (1 << CPPParser.BooleanLiteral) | (1 << CPPParser.PointerLiteral) | (1 << CPPParser.UserDefinedLiteral) | (1 << CPPParser.MultiLineMacro) | (1 << CPPParser.Directive) | (1 << CPPParser.Alignas) | (1 << CPPParser.Alignof) | (1 << CPPParser.Asm) | (1 << CPPParser.Auto) | (1 << CPPParser.Bool) | (1 << CPPParser.Break) | (1 << CPPParser.Case) | (1 << CPPParser.Catch) | (1 << CPPParser.Char) | (1 << CPPParser.Char16) | (1 << CPPParser.Char32) | (1 << CPPParser.Class) | (1 << CPPParser.Const) | (1 << CPPParser.Constexpr) | (1 << CPPParser.Const_cast) | (1 << CPPParser.Continue) | (1 << CPPParser.Decltype) | (1 << CPPParser.Default) | (1 << CPPParser.Delete) | (1 << CPPParser.Do) | (1 << CPPParser.Double) | (1 << CPPParser.Dynamic_cast))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CPPParser.Else - 32)) | (1 << (CPPParser.Enum - 32)) | (1 << (CPPParser.Explicit - 32)) | (1 << (CPPParser.Export - 32)) | (1 << (CPPParser.Extern - 32)) | (1 << (CPPParser.False_ - 32)) | (1 << (CPPParser.Final - 32)) | (1 << (CPPParser.Float - 32)) | (1 << (CPPParser.For - 32)) | (1 << (CPPParser.Friend - 32)) | (1 << (CPPParser.Goto - 32)) | (1 << (CPPParser.If - 32)) | (1 << (CPPParser.Inline - 32)) | (1 << (CPPParser.Int - 32)) | (1 << (CPPParser.Long - 32)) | (1 << (CPPParser.Mutable - 32)) | (1 << (CPPParser.Namespace - 32)) | (1 << (CPPParser.New - 32)) | (1 << (CPPParser.Noexcept - 32)) | (1 << (CPPParser.Nullptr - 32)) | (1 << (CPPParser.Operator - 32)) | (1 << (CPPParser.Override - 32)) | (1 << (CPPParser.Private - 32)) | (1 << (CPPParser.Protected - 32)) | (1 << (CPPParser.Public - 32)) | (1 << (CPPParser.Register - 32)) | (1 << (CPPParser.Reinterpret_cast - 32)) | (1 << (CPPParser.Return - 32)) | (1 << (CPPParser.Short - 32)) | (1 << (CPPParser.Signed - 32)) | (1 << (CPPParser.Sizeof - 32)) | (1 << (CPPParser.Static - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (CPPParser.Static_assert - 64)) | (1 << (CPPParser.Static_cast - 64)) | (1 << (CPPParser.Struct - 64)) | (1 << (CPPParser.Switch - 64)) | (1 << (CPPParser.Template - 64)) | (1 << (CPPParser.This - 64)) | (1 << (CPPParser.Thread_local - 64)) | (1 << (CPPParser.Throw - 64)) | (1 << (CPPParser.True_ - 64)) | (1 << (CPPParser.Try - 64)) | (1 << (CPPParser.Typedef - 64)) | (1 << (CPPParser.Typeid_ - 64)) | (1 << (CPPParser.Typename_ - 64)) | (1 << (CPPParser.Union - 64)) | (1 << (CPPParser.Unsigned - 64)) | (1 << (CPPParser.Using - 64)) | (1 << (CPPParser.Virtual - 64)) | (1 << (CPPParser.Void - 64)) | (1 << (CPPParser.Volatile - 64)) | (1 << (CPPParser.Wchar - 64)) | (1 << (CPPParser.While - 64)) | (1 << (CPPParser.LeftParen - 64)) | (1 << (CPPParser.LeftBracket - 64)) | (1 << (CPPParser.LeftBrace - 64)) | (1 << (CPPParser.Plus - 64)) | (1 << (CPPParser.Minus - 64)) | (1 << (CPPParser.Star - 64)) | (1 << (CPPParser.Div - 64)) | (1 << (CPPParser.Mod - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (CPPParser.Caret - 96)) | (1 << (CPPParser.And - 96)) | (1 << (CPPParser.Or - 96)) | (1 << (CPPParser.Tilde - 96)) | (1 << (CPPParser.Not - 96)) | (1 << (CPPParser.Assign - 96)) | (1 << (CPPParser.Less - 96)) | (1 << (CPPParser.Greater - 96)) | (1 << (CPPParser.PlusAssign - 96)) | (1 << (CPPParser.MinusAssign - 96)) | (1 << (CPPParser.StarAssign - 96)) | (1 << (CPPParser.DivAssign - 96)) | (1 << (CPPParser.ModAssign - 96)) | (1 << (CPPParser.XorAssign - 96)) | (1 << (CPPParser.AndAssign - 96)) | (1 << (CPPParser.OrAssign - 96)) | (1 << (CPPParser.LeftShiftAssign - 96)) | (1 << (CPPParser.RightShiftAssign - 96)) | (1 << (CPPParser.Equal - 96)) | (1 << (CPPParser.NotEqual - 96)) | (1 << (CPPParser.LessEqual - 96)) | (1 << (CPPParser.GreaterEqual - 96)) | (1 << (CPPParser.AndAnd - 96)) | (1 << (CPPParser.OrOr - 96)) | (1 << (CPPParser.PlusPlus - 96)) | (1 << (CPPParser.MinusMinus - 96)) | (1 << (CPPParser.Comma - 96)) | (1 << (CPPParser.ArrowStar - 96)) | (1 << (CPPParser.Arrow - 96)) | (1 << (CPPParser.Question - 96)) | (1 << (CPPParser.Colon - 96)) | (1 << (CPPParser.Doublecolon - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (CPPParser.Semi - 128)) | (1 << (CPPParser.Dot - 128)) | (1 << (CPPParser.DotStar - 128)) | (1 << (CPPParser.Ellipsis - 128)) | (1 << (CPPParser.Identifier - 128)) | (1 << (CPPParser.DecimalLiteral - 128)) | (1 << (CPPParser.OctalLiteral - 128)) | (1 << (CPPParser.HexadecimalLiteral - 128)) | (1 << (CPPParser.BinaryLiteral - 128)) | (1 << (CPPParser.Integersuffix - 128)) | (1 << (CPPParser.UserDefinedIntegerLiteral - 128)) | (1 << (CPPParser.UserDefinedFloatingLiteral - 128)) | (1 << (CPPParser.UserDefinedStringLiteral - 128)) | (1 << (CPPParser.UserDefinedCharacterLiteral - 128)) | (1 << (CPPParser.Whitespace - 128)) | (1 << (CPPParser.Newline - 128)) | (1 << (CPPParser.BlockComment - 128)) | (1 << (CPPParser.LineComment - 128)))) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public balancedtoken(): BalancedtokenContext {
		let _localctx: BalancedtokenContext = new BalancedtokenContext(this._ctx, this.state);
		this.enterRule(_localctx, 220, CPPParser.RULE_balancedtoken);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1385;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPPParser.LeftParen:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1368;
				this.match(CPPParser.LeftParen);
				this.state = 1369;
				this.balancedTokenSeq();
				this.state = 1370;
				this.match(CPPParser.RightParen);
				}
				break;
			case CPPParser.LeftBracket:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1372;
				this.match(CPPParser.LeftBracket);
				this.state = 1373;
				this.balancedTokenSeq();
				this.state = 1374;
				this.match(CPPParser.RightBracket);
				}
				break;
			case CPPParser.LeftBrace:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1376;
				this.match(CPPParser.LeftBrace);
				this.state = 1377;
				this.balancedTokenSeq();
				this.state = 1378;
				this.match(CPPParser.RightBrace);
				}
				break;
			case CPPParser.IntegerLiteral:
			case CPPParser.CharacterLiteral:
			case CPPParser.FloatingLiteral:
			case CPPParser.StringLiteral:
			case CPPParser.BooleanLiteral:
			case CPPParser.PointerLiteral:
			case CPPParser.UserDefinedLiteral:
			case CPPParser.MultiLineMacro:
			case CPPParser.Directive:
			case CPPParser.Alignas:
			case CPPParser.Alignof:
			case CPPParser.Asm:
			case CPPParser.Auto:
			case CPPParser.Bool:
			case CPPParser.Break:
			case CPPParser.Case:
			case CPPParser.Catch:
			case CPPParser.Char:
			case CPPParser.Char16:
			case CPPParser.Char32:
			case CPPParser.Class:
			case CPPParser.Const:
			case CPPParser.Constexpr:
			case CPPParser.Const_cast:
			case CPPParser.Continue:
			case CPPParser.Decltype:
			case CPPParser.Default:
			case CPPParser.Delete:
			case CPPParser.Do:
			case CPPParser.Double:
			case CPPParser.Dynamic_cast:
			case CPPParser.Else:
			case CPPParser.Enum:
			case CPPParser.Explicit:
			case CPPParser.Export:
			case CPPParser.Extern:
			case CPPParser.False_:
			case CPPParser.Final:
			case CPPParser.Float:
			case CPPParser.For:
			case CPPParser.Friend:
			case CPPParser.Goto:
			case CPPParser.If:
			case CPPParser.Inline:
			case CPPParser.Int:
			case CPPParser.Long:
			case CPPParser.Mutable:
			case CPPParser.Namespace:
			case CPPParser.New:
			case CPPParser.Noexcept:
			case CPPParser.Nullptr:
			case CPPParser.Operator:
			case CPPParser.Override:
			case CPPParser.Private:
			case CPPParser.Protected:
			case CPPParser.Public:
			case CPPParser.Register:
			case CPPParser.Reinterpret_cast:
			case CPPParser.Return:
			case CPPParser.Short:
			case CPPParser.Signed:
			case CPPParser.Sizeof:
			case CPPParser.Static:
			case CPPParser.Static_assert:
			case CPPParser.Static_cast:
			case CPPParser.Struct:
			case CPPParser.Switch:
			case CPPParser.Template:
			case CPPParser.This:
			case CPPParser.Thread_local:
			case CPPParser.Throw:
			case CPPParser.True_:
			case CPPParser.Try:
			case CPPParser.Typedef:
			case CPPParser.Typeid_:
			case CPPParser.Typename_:
			case CPPParser.Union:
			case CPPParser.Unsigned:
			case CPPParser.Using:
			case CPPParser.Virtual:
			case CPPParser.Void:
			case CPPParser.Volatile:
			case CPPParser.Wchar:
			case CPPParser.While:
			case CPPParser.Plus:
			case CPPParser.Minus:
			case CPPParser.Star:
			case CPPParser.Div:
			case CPPParser.Mod:
			case CPPParser.Caret:
			case CPPParser.And:
			case CPPParser.Or:
			case CPPParser.Tilde:
			case CPPParser.Not:
			case CPPParser.Assign:
			case CPPParser.Less:
			case CPPParser.Greater:
			case CPPParser.PlusAssign:
			case CPPParser.MinusAssign:
			case CPPParser.StarAssign:
			case CPPParser.DivAssign:
			case CPPParser.ModAssign:
			case CPPParser.XorAssign:
			case CPPParser.AndAssign:
			case CPPParser.OrAssign:
			case CPPParser.LeftShiftAssign:
			case CPPParser.RightShiftAssign:
			case CPPParser.Equal:
			case CPPParser.NotEqual:
			case CPPParser.LessEqual:
			case CPPParser.GreaterEqual:
			case CPPParser.AndAnd:
			case CPPParser.OrOr:
			case CPPParser.PlusPlus:
			case CPPParser.MinusMinus:
			case CPPParser.Comma:
			case CPPParser.ArrowStar:
			case CPPParser.Arrow:
			case CPPParser.Question:
			case CPPParser.Colon:
			case CPPParser.Doublecolon:
			case CPPParser.Semi:
			case CPPParser.Dot:
			case CPPParser.DotStar:
			case CPPParser.Ellipsis:
			case CPPParser.Identifier:
			case CPPParser.DecimalLiteral:
			case CPPParser.OctalLiteral:
			case CPPParser.HexadecimalLiteral:
			case CPPParser.BinaryLiteral:
			case CPPParser.Integersuffix:
			case CPPParser.UserDefinedIntegerLiteral:
			case CPPParser.UserDefinedFloatingLiteral:
			case CPPParser.UserDefinedStringLiteral:
			case CPPParser.UserDefinedCharacterLiteral:
			case CPPParser.Whitespace:
			case CPPParser.Newline:
			case CPPParser.BlockComment:
			case CPPParser.LineComment:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1381;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 1380;
						_la = this._input.LA(1);
						if (_la <= 0 || (((((_la - 85)) & ~0x1F) === 0 && ((1 << (_la - 85)) & ((1 << (CPPParser.LeftParen - 85)) | (1 << (CPPParser.RightParen - 85)) | (1 << (CPPParser.LeftBracket - 85)) | (1 << (CPPParser.RightBracket - 85)) | (1 << (CPPParser.LeftBrace - 85)) | (1 << (CPPParser.RightBrace - 85)))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 1383;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 164, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public initDeclaratorList(): InitDeclaratorListContext {
		let _localctx: InitDeclaratorListContext = new InitDeclaratorListContext(this._ctx, this.state);
		this.enterRule(_localctx, 222, CPPParser.RULE_initDeclaratorList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1387;
			this.initDeclarator();
			this.state = 1392;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CPPParser.Comma) {
				{
				{
				this.state = 1388;
				this.match(CPPParser.Comma);
				this.state = 1389;
				this.initDeclarator();
				}
				}
				this.state = 1394;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public initDeclarator(): InitDeclaratorContext {
		let _localctx: InitDeclaratorContext = new InitDeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 224, CPPParser.RULE_initDeclarator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1395;
			this.declarator();
			this.state = 1397;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 85)) & ~0x1F) === 0 && ((1 << (_la - 85)) & ((1 << (CPPParser.LeftParen - 85)) | (1 << (CPPParser.LeftBrace - 85)) | (1 << (CPPParser.Assign - 85)))) !== 0)) {
				{
				this.state = 1396;
				this.initializer();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declarator(): DeclaratorContext {
		let _localctx: DeclaratorContext = new DeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 226, CPPParser.RULE_declarator);
		try {
			this.state = 1404;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 168, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1399;
				this.pointerDeclarator();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1400;
				this.noPointerDeclarator(0);
				this.state = 1401;
				this.parametersAndQualifiers();
				this.state = 1402;
				this.trailingReturnType();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pointerDeclarator(): PointerDeclaratorContext {
		let _localctx: PointerDeclaratorContext = new PointerDeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 228, CPPParser.RULE_pointerDeclarator);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1412;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 170, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1406;
					this.pointerOperator();
					this.state = 1408;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === CPPParser.Const) {
						{
						this.state = 1407;
						this.match(CPPParser.Const);
						}
					}

					}
					}
				}
				this.state = 1414;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 170, this._ctx);
			}
			this.state = 1415;
			this.noPointerDeclarator(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public noPointerDeclarator(): NoPointerDeclaratorContext;
	public noPointerDeclarator(_p: number): NoPointerDeclaratorContext;
	// @RuleVersion(0)
	public noPointerDeclarator(_p?: number): NoPointerDeclaratorContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: NoPointerDeclaratorContext = new NoPointerDeclaratorContext(this._ctx, _parentState);
		let _prevctx: NoPointerDeclaratorContext = _localctx;
		let _startState: number = 230;
		this.enterRecursionRule(_localctx, 230, CPPParser.RULE_noPointerDeclarator, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1426;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPPParser.Decltype:
			case CPPParser.Operator:
			case CPPParser.Tilde:
			case CPPParser.Doublecolon:
			case CPPParser.Ellipsis:
			case CPPParser.Identifier:
				{
				this.state = 1418;
				this.declaratorid();
				this.state = 1420;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 171, this._ctx) ) {
				case 1:
					{
					this.state = 1419;
					this.attributeSpecifierSeq();
					}
					break;
				}
				}
				break;
			case CPPParser.LeftParen:
				{
				this.state = 1422;
				this.match(CPPParser.LeftParen);
				this.state = 1423;
				this.pointerDeclarator();
				this.state = 1424;
				this.match(CPPParser.RightParen);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1442;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 176, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new NoPointerDeclaratorContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CPPParser.RULE_noPointerDeclarator);
					this.state = 1428;
					if (!(this.precpred(this._ctx, 2))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
					}
					this.state = 1438;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case CPPParser.LeftParen:
						{
						this.state = 1429;
						this.parametersAndQualifiers();
						}
						break;
					case CPPParser.LeftBracket:
						{
						this.state = 1430;
						this.match(CPPParser.LeftBracket);
						this.state = 1432;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPPParser.IntegerLiteral) | (1 << CPPParser.CharacterLiteral) | (1 << CPPParser.FloatingLiteral) | (1 << CPPParser.StringLiteral) | (1 << CPPParser.BooleanLiteral) | (1 << CPPParser.PointerLiteral) | (1 << CPPParser.UserDefinedLiteral) | (1 << CPPParser.Alignof) | (1 << CPPParser.Auto) | (1 << CPPParser.Bool) | (1 << CPPParser.Char) | (1 << CPPParser.Char16) | (1 << CPPParser.Char32) | (1 << CPPParser.Const_cast) | (1 << CPPParser.Decltype) | (1 << CPPParser.Delete) | (1 << CPPParser.Double) | (1 << CPPParser.Dynamic_cast))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (CPPParser.Float - 39)) | (1 << (CPPParser.Int - 39)) | (1 << (CPPParser.Long - 39)) | (1 << (CPPParser.New - 39)) | (1 << (CPPParser.Noexcept - 39)) | (1 << (CPPParser.Operator - 39)) | (1 << (CPPParser.Reinterpret_cast - 39)) | (1 << (CPPParser.Short - 39)) | (1 << (CPPParser.Signed - 39)) | (1 << (CPPParser.Sizeof - 39)) | (1 << (CPPParser.Static_cast - 39)) | (1 << (CPPParser.This - 39)))) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (CPPParser.Typeid_ - 75)) | (1 << (CPPParser.Typename_ - 75)) | (1 << (CPPParser.Unsigned - 75)) | (1 << (CPPParser.Void - 75)) | (1 << (CPPParser.Wchar - 75)) | (1 << (CPPParser.LeftParen - 75)) | (1 << (CPPParser.LeftBracket - 75)) | (1 << (CPPParser.Plus - 75)) | (1 << (CPPParser.Minus - 75)) | (1 << (CPPParser.Star - 75)) | (1 << (CPPParser.And - 75)) | (1 << (CPPParser.Or - 75)) | (1 << (CPPParser.Tilde - 75)) | (1 << (CPPParser.Not - 75)))) !== 0) || ((((_la - 120)) & ~0x1F) === 0 && ((1 << (_la - 120)) & ((1 << (CPPParser.PlusPlus - 120)) | (1 << (CPPParser.MinusMinus - 120)) | (1 << (CPPParser.Doublecolon - 120)) | (1 << (CPPParser.Identifier - 120)))) !== 0)) {
							{
							this.state = 1431;
							this.constantExpression();
							}
						}

						this.state = 1434;
						this.match(CPPParser.RightBracket);
						this.state = 1436;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 174, this._ctx) ) {
						case 1:
							{
							this.state = 1435;
							this.attributeSpecifierSeq();
							}
							break;
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					}
				}
				this.state = 1444;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 176, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parametersAndQualifiers(): ParametersAndQualifiersContext {
		let _localctx: ParametersAndQualifiersContext = new ParametersAndQualifiersContext(this._ctx, this.state);
		this.enterRule(_localctx, 232, CPPParser.RULE_parametersAndQualifiers);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1445;
			this.match(CPPParser.LeftParen);
			this.state = 1447;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPPParser.Alignas) | (1 << CPPParser.Auto) | (1 << CPPParser.Bool) | (1 << CPPParser.Char) | (1 << CPPParser.Char16) | (1 << CPPParser.Char32) | (1 << CPPParser.Class) | (1 << CPPParser.Const) | (1 << CPPParser.Constexpr) | (1 << CPPParser.Decltype) | (1 << CPPParser.Double))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (CPPParser.Enum - 33)) | (1 << (CPPParser.Explicit - 33)) | (1 << (CPPParser.Extern - 33)) | (1 << (CPPParser.Float - 33)) | (1 << (CPPParser.Friend - 33)) | (1 << (CPPParser.Inline - 33)) | (1 << (CPPParser.Int - 33)) | (1 << (CPPParser.Long - 33)) | (1 << (CPPParser.Mutable - 33)) | (1 << (CPPParser.Register - 33)) | (1 << (CPPParser.Short - 33)) | (1 << (CPPParser.Signed - 33)) | (1 << (CPPParser.Static - 33)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (CPPParser.Struct - 66)) | (1 << (CPPParser.Thread_local - 66)) | (1 << (CPPParser.Typedef - 66)) | (1 << (CPPParser.Typename_ - 66)) | (1 << (CPPParser.Union - 66)) | (1 << (CPPParser.Unsigned - 66)) | (1 << (CPPParser.Virtual - 66)) | (1 << (CPPParser.Void - 66)) | (1 << (CPPParser.Volatile - 66)) | (1 << (CPPParser.Wchar - 66)) | (1 << (CPPParser.LeftBracket - 66)))) !== 0) || _la === CPPParser.Doublecolon || _la === CPPParser.Identifier) {
				{
				this.state = 1446;
				this.parameterDeclarationClause();
				}
			}

			this.state = 1449;
			this.match(CPPParser.RightParen);
			this.state = 1451;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 178, this._ctx) ) {
			case 1:
				{
				this.state = 1450;
				this.cvqualifierseq();
				}
				break;
			}
			this.state = 1454;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 179, this._ctx) ) {
			case 1:
				{
				this.state = 1453;
				this.refqualifier();
				}
				break;
			}
			this.state = 1457;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 180, this._ctx) ) {
			case 1:
				{
				this.state = 1456;
				this.exceptionSpecification();
				}
				break;
			}
			this.state = 1460;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 181, this._ctx) ) {
			case 1:
				{
				this.state = 1459;
				this.attributeSpecifierSeq();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public trailingReturnType(): TrailingReturnTypeContext {
		let _localctx: TrailingReturnTypeContext = new TrailingReturnTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 234, CPPParser.RULE_trailingReturnType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1462;
			this.match(CPPParser.Arrow);
			this.state = 1463;
			this.trailingTypeSpecifierSeq();
			this.state = 1465;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 182, this._ctx) ) {
			case 1:
				{
				this.state = 1464;
				this.abstractDeclarator();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pointerOperator(): PointerOperatorContext {
		let _localctx: PointerOperatorContext = new PointerOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 236, CPPParser.RULE_pointerOperator);
		let _la: number;
		try {
			this.state = 1481;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPPParser.And:
			case CPPParser.AndAnd:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1467;
				_la = this._input.LA(1);
				if (!(_la === CPPParser.And || _la === CPPParser.AndAnd)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1469;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 183, this._ctx) ) {
				case 1:
					{
					this.state = 1468;
					this.attributeSpecifierSeq();
					}
					break;
				}
				}
				break;
			case CPPParser.Decltype:
			case CPPParser.Star:
			case CPPParser.Doublecolon:
			case CPPParser.Identifier:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1472;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPPParser.Decltype || _la === CPPParser.Doublecolon || _la === CPPParser.Identifier) {
					{
					this.state = 1471;
					this.nestedNameSpecifier(0);
					}
				}

				this.state = 1474;
				this.match(CPPParser.Star);
				this.state = 1476;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 185, this._ctx) ) {
				case 1:
					{
					this.state = 1475;
					this.attributeSpecifierSeq();
					}
					break;
				}
				this.state = 1479;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 186, this._ctx) ) {
				case 1:
					{
					this.state = 1478;
					this.cvqualifierseq();
					}
					break;
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cvqualifierseq(): CvqualifierseqContext {
		let _localctx: CvqualifierseqContext = new CvqualifierseqContext(this._ctx, this.state);
		this.enterRule(_localctx, 238, CPPParser.RULE_cvqualifierseq);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1484;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1483;
					this.cvQualifier();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1486;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 188, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cvQualifier(): CvQualifierContext {
		let _localctx: CvQualifierContext = new CvQualifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 240, CPPParser.RULE_cvQualifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1488;
			_la = this._input.LA(1);
			if (!(_la === CPPParser.Const || _la === CPPParser.Volatile)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public refqualifier(): RefqualifierContext {
		let _localctx: RefqualifierContext = new RefqualifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 242, CPPParser.RULE_refqualifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1490;
			_la = this._input.LA(1);
			if (!(_la === CPPParser.And || _la === CPPParser.AndAnd)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declaratorid(): DeclaratoridContext {
		let _localctx: DeclaratoridContext = new DeclaratoridContext(this._ctx, this.state);
		this.enterRule(_localctx, 244, CPPParser.RULE_declaratorid);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1493;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPPParser.Ellipsis) {
				{
				this.state = 1492;
				this.match(CPPParser.Ellipsis);
				}
			}

			this.state = 1495;
			this.idExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public theTypeId(): TheTypeIdContext {
		let _localctx: TheTypeIdContext = new TheTypeIdContext(this._ctx, this.state);
		this.enterRule(_localctx, 246, CPPParser.RULE_theTypeId);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1497;
			this.typeSpecifierSeq();
			this.state = 1499;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 190, this._ctx) ) {
			case 1:
				{
				this.state = 1498;
				this.abstractDeclarator();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public abstractDeclarator(): AbstractDeclaratorContext {
		let _localctx: AbstractDeclaratorContext = new AbstractDeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 248, CPPParser.RULE_abstractDeclarator);
		try {
			this.state = 1509;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 192, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1501;
				this.pointerAbstractDeclarator();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1503;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 191, this._ctx) ) {
				case 1:
					{
					this.state = 1502;
					this.noPointerAbstractDeclarator(0);
					}
					break;
				}
				this.state = 1505;
				this.parametersAndQualifiers();
				this.state = 1506;
				this.trailingReturnType();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1508;
				this.abstractPackDeclarator();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pointerAbstractDeclarator(): PointerAbstractDeclaratorContext {
		let _localctx: PointerAbstractDeclaratorContext = new PointerAbstractDeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 250, CPPParser.RULE_pointerAbstractDeclarator);
		let _la: number;
		try {
			this.state = 1520;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPPParser.LeftParen:
			case CPPParser.LeftBracket:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1511;
				this.noPointerAbstractDeclarator(0);
				}
				break;
			case CPPParser.Decltype:
			case CPPParser.Star:
			case CPPParser.And:
			case CPPParser.AndAnd:
			case CPPParser.Doublecolon:
			case CPPParser.Identifier:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1513;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1512;
					this.pointerOperator();
					}
					}
					this.state = 1515;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === CPPParser.Decltype || ((((_la - 93)) & ~0x1F) === 0 && ((1 << (_la - 93)) & ((1 << (CPPParser.Star - 93)) | (1 << (CPPParser.And - 93)) | (1 << (CPPParser.AndAnd - 93)))) !== 0) || _la === CPPParser.Doublecolon || _la === CPPParser.Identifier);
				this.state = 1518;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 194, this._ctx) ) {
				case 1:
					{
					this.state = 1517;
					this.noPointerAbstractDeclarator(0);
					}
					break;
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public noPointerAbstractDeclarator(): NoPointerAbstractDeclaratorContext;
	public noPointerAbstractDeclarator(_p: number): NoPointerAbstractDeclaratorContext;
	// @RuleVersion(0)
	public noPointerAbstractDeclarator(_p?: number): NoPointerAbstractDeclaratorContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: NoPointerAbstractDeclaratorContext = new NoPointerAbstractDeclaratorContext(this._ctx, _parentState);
		let _prevctx: NoPointerAbstractDeclaratorContext = _localctx;
		let _startState: number = 252;
		this.enterRecursionRule(_localctx, 252, CPPParser.RULE_noPointerAbstractDeclarator, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1536;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 198, this._ctx) ) {
			case 1:
				{
				this.state = 1523;
				this.parametersAndQualifiers();
				}
				break;

			case 2:
				{
				this.state = 1524;
				this.match(CPPParser.LeftBracket);
				this.state = 1526;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPPParser.IntegerLiteral) | (1 << CPPParser.CharacterLiteral) | (1 << CPPParser.FloatingLiteral) | (1 << CPPParser.StringLiteral) | (1 << CPPParser.BooleanLiteral) | (1 << CPPParser.PointerLiteral) | (1 << CPPParser.UserDefinedLiteral) | (1 << CPPParser.Alignof) | (1 << CPPParser.Auto) | (1 << CPPParser.Bool) | (1 << CPPParser.Char) | (1 << CPPParser.Char16) | (1 << CPPParser.Char32) | (1 << CPPParser.Const_cast) | (1 << CPPParser.Decltype) | (1 << CPPParser.Delete) | (1 << CPPParser.Double) | (1 << CPPParser.Dynamic_cast))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (CPPParser.Float - 39)) | (1 << (CPPParser.Int - 39)) | (1 << (CPPParser.Long - 39)) | (1 << (CPPParser.New - 39)) | (1 << (CPPParser.Noexcept - 39)) | (1 << (CPPParser.Operator - 39)) | (1 << (CPPParser.Reinterpret_cast - 39)) | (1 << (CPPParser.Short - 39)) | (1 << (CPPParser.Signed - 39)) | (1 << (CPPParser.Sizeof - 39)) | (1 << (CPPParser.Static_cast - 39)) | (1 << (CPPParser.This - 39)))) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (CPPParser.Typeid_ - 75)) | (1 << (CPPParser.Typename_ - 75)) | (1 << (CPPParser.Unsigned - 75)) | (1 << (CPPParser.Void - 75)) | (1 << (CPPParser.Wchar - 75)) | (1 << (CPPParser.LeftParen - 75)) | (1 << (CPPParser.LeftBracket - 75)) | (1 << (CPPParser.Plus - 75)) | (1 << (CPPParser.Minus - 75)) | (1 << (CPPParser.Star - 75)) | (1 << (CPPParser.And - 75)) | (1 << (CPPParser.Or - 75)) | (1 << (CPPParser.Tilde - 75)) | (1 << (CPPParser.Not - 75)))) !== 0) || ((((_la - 120)) & ~0x1F) === 0 && ((1 << (_la - 120)) & ((1 << (CPPParser.PlusPlus - 120)) | (1 << (CPPParser.MinusMinus - 120)) | (1 << (CPPParser.Doublecolon - 120)) | (1 << (CPPParser.Identifier - 120)))) !== 0)) {
					{
					this.state = 1525;
					this.constantExpression();
					}
				}

				this.state = 1528;
				this.match(CPPParser.RightBracket);
				this.state = 1530;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 197, this._ctx) ) {
				case 1:
					{
					this.state = 1529;
					this.attributeSpecifierSeq();
					}
					break;
				}
				}
				break;

			case 3:
				{
				this.state = 1532;
				this.match(CPPParser.LeftParen);
				this.state = 1533;
				this.pointerAbstractDeclarator();
				this.state = 1534;
				this.match(CPPParser.RightParen);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1553;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 202, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new NoPointerAbstractDeclaratorContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CPPParser.RULE_noPointerAbstractDeclarator);
					this.state = 1538;
					if (!(this.precpred(this._ctx, 4))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
					}
					this.state = 1549;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 201, this._ctx) ) {
					case 1:
						{
						this.state = 1539;
						this.parametersAndQualifiers();
						}
						break;

					case 2:
						{
						this.state = 1540;
						this.noPointerAbstractDeclarator(0);
						this.state = 1541;
						this.match(CPPParser.LeftBracket);
						this.state = 1543;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPPParser.IntegerLiteral) | (1 << CPPParser.CharacterLiteral) | (1 << CPPParser.FloatingLiteral) | (1 << CPPParser.StringLiteral) | (1 << CPPParser.BooleanLiteral) | (1 << CPPParser.PointerLiteral) | (1 << CPPParser.UserDefinedLiteral) | (1 << CPPParser.Alignof) | (1 << CPPParser.Auto) | (1 << CPPParser.Bool) | (1 << CPPParser.Char) | (1 << CPPParser.Char16) | (1 << CPPParser.Char32) | (1 << CPPParser.Const_cast) | (1 << CPPParser.Decltype) | (1 << CPPParser.Delete) | (1 << CPPParser.Double) | (1 << CPPParser.Dynamic_cast))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (CPPParser.Float - 39)) | (1 << (CPPParser.Int - 39)) | (1 << (CPPParser.Long - 39)) | (1 << (CPPParser.New - 39)) | (1 << (CPPParser.Noexcept - 39)) | (1 << (CPPParser.Operator - 39)) | (1 << (CPPParser.Reinterpret_cast - 39)) | (1 << (CPPParser.Short - 39)) | (1 << (CPPParser.Signed - 39)) | (1 << (CPPParser.Sizeof - 39)) | (1 << (CPPParser.Static_cast - 39)) | (1 << (CPPParser.This - 39)))) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (CPPParser.Typeid_ - 75)) | (1 << (CPPParser.Typename_ - 75)) | (1 << (CPPParser.Unsigned - 75)) | (1 << (CPPParser.Void - 75)) | (1 << (CPPParser.Wchar - 75)) | (1 << (CPPParser.LeftParen - 75)) | (1 << (CPPParser.LeftBracket - 75)) | (1 << (CPPParser.Plus - 75)) | (1 << (CPPParser.Minus - 75)) | (1 << (CPPParser.Star - 75)) | (1 << (CPPParser.And - 75)) | (1 << (CPPParser.Or - 75)) | (1 << (CPPParser.Tilde - 75)) | (1 << (CPPParser.Not - 75)))) !== 0) || ((((_la - 120)) & ~0x1F) === 0 && ((1 << (_la - 120)) & ((1 << (CPPParser.PlusPlus - 120)) | (1 << (CPPParser.MinusMinus - 120)) | (1 << (CPPParser.Doublecolon - 120)) | (1 << (CPPParser.Identifier - 120)))) !== 0)) {
							{
							this.state = 1542;
							this.constantExpression();
							}
						}

						this.state = 1545;
						this.match(CPPParser.RightBracket);
						this.state = 1547;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 200, this._ctx) ) {
						case 1:
							{
							this.state = 1546;
							this.attributeSpecifierSeq();
							}
							break;
						}
						}
						break;
					}
					}
					}
				}
				this.state = 1555;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 202, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public abstractPackDeclarator(): AbstractPackDeclaratorContext {
		let _localctx: AbstractPackDeclaratorContext = new AbstractPackDeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 254, CPPParser.RULE_abstractPackDeclarator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1559;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CPPParser.Decltype || ((((_la - 93)) & ~0x1F) === 0 && ((1 << (_la - 93)) & ((1 << (CPPParser.Star - 93)) | (1 << (CPPParser.And - 93)) | (1 << (CPPParser.AndAnd - 93)))) !== 0) || _la === CPPParser.Doublecolon || _la === CPPParser.Identifier) {
				{
				{
				this.state = 1556;
				this.pointerOperator();
				}
				}
				this.state = 1561;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1562;
			this.noPointerAbstractPackDeclarator(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public noPointerAbstractPackDeclarator(): NoPointerAbstractPackDeclaratorContext;
	public noPointerAbstractPackDeclarator(_p: number): NoPointerAbstractPackDeclaratorContext;
	// @RuleVersion(0)
	public noPointerAbstractPackDeclarator(_p?: number): NoPointerAbstractPackDeclaratorContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: NoPointerAbstractPackDeclaratorContext = new NoPointerAbstractPackDeclaratorContext(this._ctx, _parentState);
		let _prevctx: NoPointerAbstractPackDeclaratorContext = _localctx;
		let _startState: number = 256;
		this.enterRecursionRule(_localctx, 256, CPPParser.RULE_noPointerAbstractPackDeclarator, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 1565;
			this.match(CPPParser.Ellipsis);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1581;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 207, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new NoPointerAbstractPackDeclaratorContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CPPParser.RULE_noPointerAbstractPackDeclarator);
					this.state = 1567;
					if (!(this.precpred(this._ctx, 2))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
					}
					this.state = 1577;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case CPPParser.LeftParen:
						{
						this.state = 1568;
						this.parametersAndQualifiers();
						}
						break;
					case CPPParser.LeftBracket:
						{
						this.state = 1569;
						this.match(CPPParser.LeftBracket);
						this.state = 1571;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPPParser.IntegerLiteral) | (1 << CPPParser.CharacterLiteral) | (1 << CPPParser.FloatingLiteral) | (1 << CPPParser.StringLiteral) | (1 << CPPParser.BooleanLiteral) | (1 << CPPParser.PointerLiteral) | (1 << CPPParser.UserDefinedLiteral) | (1 << CPPParser.Alignof) | (1 << CPPParser.Auto) | (1 << CPPParser.Bool) | (1 << CPPParser.Char) | (1 << CPPParser.Char16) | (1 << CPPParser.Char32) | (1 << CPPParser.Const_cast) | (1 << CPPParser.Decltype) | (1 << CPPParser.Delete) | (1 << CPPParser.Double) | (1 << CPPParser.Dynamic_cast))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (CPPParser.Float - 39)) | (1 << (CPPParser.Int - 39)) | (1 << (CPPParser.Long - 39)) | (1 << (CPPParser.New - 39)) | (1 << (CPPParser.Noexcept - 39)) | (1 << (CPPParser.Operator - 39)) | (1 << (CPPParser.Reinterpret_cast - 39)) | (1 << (CPPParser.Short - 39)) | (1 << (CPPParser.Signed - 39)) | (1 << (CPPParser.Sizeof - 39)) | (1 << (CPPParser.Static_cast - 39)) | (1 << (CPPParser.This - 39)))) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (CPPParser.Typeid_ - 75)) | (1 << (CPPParser.Typename_ - 75)) | (1 << (CPPParser.Unsigned - 75)) | (1 << (CPPParser.Void - 75)) | (1 << (CPPParser.Wchar - 75)) | (1 << (CPPParser.LeftParen - 75)) | (1 << (CPPParser.LeftBracket - 75)) | (1 << (CPPParser.Plus - 75)) | (1 << (CPPParser.Minus - 75)) | (1 << (CPPParser.Star - 75)) | (1 << (CPPParser.And - 75)) | (1 << (CPPParser.Or - 75)) | (1 << (CPPParser.Tilde - 75)) | (1 << (CPPParser.Not - 75)))) !== 0) || ((((_la - 120)) & ~0x1F) === 0 && ((1 << (_la - 120)) & ((1 << (CPPParser.PlusPlus - 120)) | (1 << (CPPParser.MinusMinus - 120)) | (1 << (CPPParser.Doublecolon - 120)) | (1 << (CPPParser.Identifier - 120)))) !== 0)) {
							{
							this.state = 1570;
							this.constantExpression();
							}
						}

						this.state = 1573;
						this.match(CPPParser.RightBracket);
						this.state = 1575;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 205, this._ctx) ) {
						case 1:
							{
							this.state = 1574;
							this.attributeSpecifierSeq();
							}
							break;
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					}
				}
				this.state = 1583;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 207, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameterDeclarationClause(): ParameterDeclarationClauseContext {
		let _localctx: ParameterDeclarationClauseContext = new ParameterDeclarationClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 258, CPPParser.RULE_parameterDeclarationClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1584;
			this.parameterDeclarationList();
			this.state = 1589;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPPParser.Comma || _la === CPPParser.Ellipsis) {
				{
				this.state = 1586;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPPParser.Comma) {
					{
					this.state = 1585;
					this.match(CPPParser.Comma);
					}
				}

				this.state = 1588;
				this.match(CPPParser.Ellipsis);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameterDeclarationList(): ParameterDeclarationListContext {
		let _localctx: ParameterDeclarationListContext = new ParameterDeclarationListContext(this._ctx, this.state);
		this.enterRule(_localctx, 260, CPPParser.RULE_parameterDeclarationList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1591;
			this.parameterDeclaration();
			this.state = 1596;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 210, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1592;
					this.match(CPPParser.Comma);
					this.state = 1593;
					this.parameterDeclaration();
					}
					}
				}
				this.state = 1598;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 210, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameterDeclaration(): ParameterDeclarationContext {
		let _localctx: ParameterDeclarationContext = new ParameterDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 262, CPPParser.RULE_parameterDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1600;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPPParser.Alignas || _la === CPPParser.LeftBracket) {
				{
				this.state = 1599;
				this.attributeSpecifierSeq();
				}
			}

			this.state = 1602;
			this.declSpecifierSeq();
			{
			this.state = 1607;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 213, this._ctx) ) {
			case 1:
				{
				this.state = 1603;
				this.declarator();
				}
				break;

			case 2:
				{
				this.state = 1605;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 212, this._ctx) ) {
				case 1:
					{
					this.state = 1604;
					this.abstractDeclarator();
					}
					break;
				}
				}
				break;
			}
			this.state = 1611;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPPParser.Assign) {
				{
				this.state = 1609;
				this.match(CPPParser.Assign);
				this.state = 1610;
				this.initializerClause();
				}
			}

			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionDefinition(): FunctionDefinitionContext {
		let _localctx: FunctionDefinitionContext = new FunctionDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 264, CPPParser.RULE_functionDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1614;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPPParser.Alignas || _la === CPPParser.LeftBracket) {
				{
				this.state = 1613;
				this.attributeSpecifierSeq();
				}
			}

			this.state = 1617;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 216, this._ctx) ) {
			case 1:
				{
				this.state = 1616;
				this.declSpecifierSeq();
				}
				break;
			}
			this.state = 1619;
			this.declarator();
			this.state = 1621;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPPParser.Final || _la === CPPParser.Override) {
				{
				this.state = 1620;
				this.virtualSpecifierSeq();
				}
			}

			this.state = 1623;
			this.functionBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionBody(): FunctionBodyContext {
		let _localctx: FunctionBodyContext = new FunctionBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 266, CPPParser.RULE_functionBody);
		let _la: number;
		try {
			this.state = 1633;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPPParser.LeftBrace:
			case CPPParser.Colon:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1626;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPPParser.Colon) {
					{
					this.state = 1625;
					this.constructorInitializer();
					}
				}

				this.state = 1628;
				this.compoundStatement();
				}
				break;
			case CPPParser.Try:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1629;
				this.functionTryBlock();
				}
				break;
			case CPPParser.Assign:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1630;
				this.match(CPPParser.Assign);
				this.state = 1631;
				_la = this._input.LA(1);
				if (!(_la === CPPParser.Default || _la === CPPParser.Delete)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1632;
				this.match(CPPParser.Semi);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public initializer(): InitializerContext {
		let _localctx: InitializerContext = new InitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 268, CPPParser.RULE_initializer);
		try {
			this.state = 1640;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPPParser.LeftBrace:
			case CPPParser.Assign:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1635;
				this.braceOrEqualInitializer();
				}
				break;
			case CPPParser.LeftParen:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1636;
				this.match(CPPParser.LeftParen);
				this.state = 1637;
				this.expressionList();
				this.state = 1638;
				this.match(CPPParser.RightParen);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public braceOrEqualInitializer(): BraceOrEqualInitializerContext {
		let _localctx: BraceOrEqualInitializerContext = new BraceOrEqualInitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 270, CPPParser.RULE_braceOrEqualInitializer);
		try {
			this.state = 1645;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPPParser.Assign:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1642;
				this.match(CPPParser.Assign);
				this.state = 1643;
				this.initializerClause();
				}
				break;
			case CPPParser.LeftBrace:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1644;
				this.bracedInitList();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public initializerClause(): InitializerClauseContext {
		let _localctx: InitializerClauseContext = new InitializerClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 272, CPPParser.RULE_initializerClause);
		try {
			this.state = 1649;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPPParser.IntegerLiteral:
			case CPPParser.CharacterLiteral:
			case CPPParser.FloatingLiteral:
			case CPPParser.StringLiteral:
			case CPPParser.BooleanLiteral:
			case CPPParser.PointerLiteral:
			case CPPParser.UserDefinedLiteral:
			case CPPParser.Alignof:
			case CPPParser.Auto:
			case CPPParser.Bool:
			case CPPParser.Char:
			case CPPParser.Char16:
			case CPPParser.Char32:
			case CPPParser.Const_cast:
			case CPPParser.Decltype:
			case CPPParser.Delete:
			case CPPParser.Double:
			case CPPParser.Dynamic_cast:
			case CPPParser.Float:
			case CPPParser.Int:
			case CPPParser.Long:
			case CPPParser.New:
			case CPPParser.Noexcept:
			case CPPParser.Operator:
			case CPPParser.Reinterpret_cast:
			case CPPParser.Short:
			case CPPParser.Signed:
			case CPPParser.Sizeof:
			case CPPParser.Static_cast:
			case CPPParser.This:
			case CPPParser.Throw:
			case CPPParser.Typeid_:
			case CPPParser.Typename_:
			case CPPParser.Unsigned:
			case CPPParser.Void:
			case CPPParser.Wchar:
			case CPPParser.LeftParen:
			case CPPParser.LeftBracket:
			case CPPParser.Plus:
			case CPPParser.Minus:
			case CPPParser.Star:
			case CPPParser.And:
			case CPPParser.Or:
			case CPPParser.Tilde:
			case CPPParser.Not:
			case CPPParser.PlusPlus:
			case CPPParser.MinusMinus:
			case CPPParser.Doublecolon:
			case CPPParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1647;
				this.assignmentExpression();
				}
				break;
			case CPPParser.LeftBrace:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1648;
				this.bracedInitList();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public initializerList(): InitializerListContext {
		let _localctx: InitializerListContext = new InitializerListContext(this._ctx, this.state);
		this.enterRule(_localctx, 274, CPPParser.RULE_initializerList);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1651;
			this.initializerClause();
			this.state = 1653;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPPParser.Ellipsis) {
				{
				this.state = 1652;
				this.match(CPPParser.Ellipsis);
				}
			}

			this.state = 1662;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 225, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1655;
					this.match(CPPParser.Comma);
					this.state = 1656;
					this.initializerClause();
					this.state = 1658;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === CPPParser.Ellipsis) {
						{
						this.state = 1657;
						this.match(CPPParser.Ellipsis);
						}
					}

					}
					}
				}
				this.state = 1664;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 225, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public bracedInitList(): BracedInitListContext {
		let _localctx: BracedInitListContext = new BracedInitListContext(this._ctx, this.state);
		this.enterRule(_localctx, 276, CPPParser.RULE_bracedInitList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1665;
			this.match(CPPParser.LeftBrace);
			this.state = 1670;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPPParser.IntegerLiteral) | (1 << CPPParser.CharacterLiteral) | (1 << CPPParser.FloatingLiteral) | (1 << CPPParser.StringLiteral) | (1 << CPPParser.BooleanLiteral) | (1 << CPPParser.PointerLiteral) | (1 << CPPParser.UserDefinedLiteral) | (1 << CPPParser.Alignof) | (1 << CPPParser.Auto) | (1 << CPPParser.Bool) | (1 << CPPParser.Char) | (1 << CPPParser.Char16) | (1 << CPPParser.Char32) | (1 << CPPParser.Const_cast) | (1 << CPPParser.Decltype) | (1 << CPPParser.Delete) | (1 << CPPParser.Double) | (1 << CPPParser.Dynamic_cast))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (CPPParser.Float - 39)) | (1 << (CPPParser.Int - 39)) | (1 << (CPPParser.Long - 39)) | (1 << (CPPParser.New - 39)) | (1 << (CPPParser.Noexcept - 39)) | (1 << (CPPParser.Operator - 39)) | (1 << (CPPParser.Reinterpret_cast - 39)) | (1 << (CPPParser.Short - 39)) | (1 << (CPPParser.Signed - 39)) | (1 << (CPPParser.Sizeof - 39)) | (1 << (CPPParser.Static_cast - 39)) | (1 << (CPPParser.This - 39)))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (CPPParser.Throw - 71)) | (1 << (CPPParser.Typeid_ - 71)) | (1 << (CPPParser.Typename_ - 71)) | (1 << (CPPParser.Unsigned - 71)) | (1 << (CPPParser.Void - 71)) | (1 << (CPPParser.Wchar - 71)) | (1 << (CPPParser.LeftParen - 71)) | (1 << (CPPParser.LeftBracket - 71)) | (1 << (CPPParser.LeftBrace - 71)) | (1 << (CPPParser.Plus - 71)) | (1 << (CPPParser.Minus - 71)) | (1 << (CPPParser.Star - 71)) | (1 << (CPPParser.And - 71)) | (1 << (CPPParser.Or - 71)) | (1 << (CPPParser.Tilde - 71)) | (1 << (CPPParser.Not - 71)))) !== 0) || ((((_la - 120)) & ~0x1F) === 0 && ((1 << (_la - 120)) & ((1 << (CPPParser.PlusPlus - 120)) | (1 << (CPPParser.MinusMinus - 120)) | (1 << (CPPParser.Doublecolon - 120)) | (1 << (CPPParser.Identifier - 120)))) !== 0)) {
				{
				this.state = 1666;
				this.initializerList();
				this.state = 1668;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPPParser.Comma) {
					{
					this.state = 1667;
					this.match(CPPParser.Comma);
					}
				}

				}
			}

			this.state = 1672;
			this.match(CPPParser.RightBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public className(): ClassNameContext {
		let _localctx: ClassNameContext = new ClassNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 278, CPPParser.RULE_className);
		try {
			this.state = 1676;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 228, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1674;
				this.match(CPPParser.Identifier);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1675;
				this.simpleTemplateId();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classSpecifier(): ClassSpecifierContext {
		let _localctx: ClassSpecifierContext = new ClassSpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 280, CPPParser.RULE_classSpecifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1678;
			this.classHead();
			this.state = 1679;
			this.match(CPPParser.LeftBrace);
			this.state = 1681;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 10)) & ~0x1F) === 0 && ((1 << (_la - 10)) & ((1 << (CPPParser.Alignas - 10)) | (1 << (CPPParser.Auto - 10)) | (1 << (CPPParser.Bool - 10)) | (1 << (CPPParser.Char - 10)) | (1 << (CPPParser.Char16 - 10)) | (1 << (CPPParser.Char32 - 10)) | (1 << (CPPParser.Class - 10)) | (1 << (CPPParser.Const - 10)) | (1 << (CPPParser.Constexpr - 10)) | (1 << (CPPParser.Decltype - 10)) | (1 << (CPPParser.Double - 10)) | (1 << (CPPParser.Enum - 10)) | (1 << (CPPParser.Explicit - 10)) | (1 << (CPPParser.Extern - 10)) | (1 << (CPPParser.Float - 10)) | (1 << (CPPParser.Friend - 10)))) !== 0) || ((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & ((1 << (CPPParser.Inline - 44)) | (1 << (CPPParser.Int - 44)) | (1 << (CPPParser.Long - 44)) | (1 << (CPPParser.Mutable - 44)) | (1 << (CPPParser.Operator - 44)) | (1 << (CPPParser.Private - 44)) | (1 << (CPPParser.Protected - 44)) | (1 << (CPPParser.Public - 44)) | (1 << (CPPParser.Register - 44)) | (1 << (CPPParser.Short - 44)) | (1 << (CPPParser.Signed - 44)) | (1 << (CPPParser.Static - 44)) | (1 << (CPPParser.Static_assert - 44)) | (1 << (CPPParser.Struct - 44)) | (1 << (CPPParser.Template - 44)) | (1 << (CPPParser.Thread_local - 44)) | (1 << (CPPParser.Typedef - 44)))) !== 0) || ((((_la - 76)) & ~0x1F) === 0 && ((1 << (_la - 76)) & ((1 << (CPPParser.Typename_ - 76)) | (1 << (CPPParser.Union - 76)) | (1 << (CPPParser.Unsigned - 76)) | (1 << (CPPParser.Using - 76)) | (1 << (CPPParser.Virtual - 76)) | (1 << (CPPParser.Void - 76)) | (1 << (CPPParser.Volatile - 76)) | (1 << (CPPParser.Wchar - 76)) | (1 << (CPPParser.LeftParen - 76)) | (1 << (CPPParser.LeftBracket - 76)) | (1 << (CPPParser.Star - 76)) | (1 << (CPPParser.And - 76)) | (1 << (CPPParser.Tilde - 76)))) !== 0) || ((((_la - 118)) & ~0x1F) === 0 && ((1 << (_la - 118)) & ((1 << (CPPParser.AndAnd - 118)) | (1 << (CPPParser.Colon - 118)) | (1 << (CPPParser.Doublecolon - 118)) | (1 << (CPPParser.Semi - 118)) | (1 << (CPPParser.Ellipsis - 118)) | (1 << (CPPParser.Identifier - 118)))) !== 0)) {
				{
				this.state = 1680;
				this.memberSpecification();
				}
			}

			this.state = 1683;
			this.match(CPPParser.RightBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classHead(): ClassHeadContext {
		let _localctx: ClassHeadContext = new ClassHeadContext(this._ctx, this.state);
		this.enterRule(_localctx, 282, CPPParser.RULE_classHead);
		let _la: number;
		try {
			this.state = 1708;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPPParser.Class:
			case CPPParser.Struct:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1685;
				this.classKey();
				this.state = 1687;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPPParser.Alignas || _la === CPPParser.LeftBracket) {
					{
					this.state = 1686;
					this.attributeSpecifierSeq();
					}
				}

				this.state = 1693;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPPParser.Decltype || _la === CPPParser.Doublecolon || _la === CPPParser.Identifier) {
					{
					this.state = 1689;
					this.classHeadName();
					this.state = 1691;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === CPPParser.Final) {
						{
						this.state = 1690;
						this.classVirtSpecifier();
						}
					}

					}
				}

				this.state = 1696;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPPParser.Colon) {
					{
					this.state = 1695;
					this.baseClause();
					}
				}

				}
				break;
			case CPPParser.Union:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1698;
				this.match(CPPParser.Union);
				this.state = 1700;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPPParser.Alignas || _la === CPPParser.LeftBracket) {
					{
					this.state = 1699;
					this.attributeSpecifierSeq();
					}
				}

				this.state = 1706;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPPParser.Decltype || _la === CPPParser.Doublecolon || _la === CPPParser.Identifier) {
					{
					this.state = 1702;
					this.classHeadName();
					this.state = 1704;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === CPPParser.Final) {
						{
						this.state = 1703;
						this.classVirtSpecifier();
						}
					}

					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classHeadName(): ClassHeadNameContext {
		let _localctx: ClassHeadNameContext = new ClassHeadNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 284, CPPParser.RULE_classHeadName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1711;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 238, this._ctx) ) {
			case 1:
				{
				this.state = 1710;
				this.nestedNameSpecifier(0);
				}
				break;
			}
			this.state = 1713;
			this.className();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classVirtSpecifier(): ClassVirtSpecifierContext {
		let _localctx: ClassVirtSpecifierContext = new ClassVirtSpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 286, CPPParser.RULE_classVirtSpecifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1715;
			this.match(CPPParser.Final);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classKey(): ClassKeyContext {
		let _localctx: ClassKeyContext = new ClassKeyContext(this._ctx, this.state);
		this.enterRule(_localctx, 288, CPPParser.RULE_classKey);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1717;
			_la = this._input.LA(1);
			if (!(_la === CPPParser.Class || _la === CPPParser.Struct)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public memberSpecification(): MemberSpecificationContext {
		let _localctx: MemberSpecificationContext = new MemberSpecificationContext(this._ctx, this.state);
		this.enterRule(_localctx, 290, CPPParser.RULE_memberSpecification);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1723;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 1723;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case CPPParser.Alignas:
				case CPPParser.Auto:
				case CPPParser.Bool:
				case CPPParser.Char:
				case CPPParser.Char16:
				case CPPParser.Char32:
				case CPPParser.Class:
				case CPPParser.Const:
				case CPPParser.Constexpr:
				case CPPParser.Decltype:
				case CPPParser.Double:
				case CPPParser.Enum:
				case CPPParser.Explicit:
				case CPPParser.Extern:
				case CPPParser.Float:
				case CPPParser.Friend:
				case CPPParser.Inline:
				case CPPParser.Int:
				case CPPParser.Long:
				case CPPParser.Mutable:
				case CPPParser.Operator:
				case CPPParser.Register:
				case CPPParser.Short:
				case CPPParser.Signed:
				case CPPParser.Static:
				case CPPParser.Static_assert:
				case CPPParser.Struct:
				case CPPParser.Template:
				case CPPParser.Thread_local:
				case CPPParser.Typedef:
				case CPPParser.Typename_:
				case CPPParser.Union:
				case CPPParser.Unsigned:
				case CPPParser.Using:
				case CPPParser.Virtual:
				case CPPParser.Void:
				case CPPParser.Volatile:
				case CPPParser.Wchar:
				case CPPParser.LeftParen:
				case CPPParser.LeftBracket:
				case CPPParser.Star:
				case CPPParser.And:
				case CPPParser.Tilde:
				case CPPParser.AndAnd:
				case CPPParser.Colon:
				case CPPParser.Doublecolon:
				case CPPParser.Semi:
				case CPPParser.Ellipsis:
				case CPPParser.Identifier:
					{
					this.state = 1719;
					this.memberdeclaration();
					}
					break;
				case CPPParser.Private:
				case CPPParser.Protected:
				case CPPParser.Public:
					{
					this.state = 1720;
					this.accessSpecifier();
					this.state = 1721;
					this.match(CPPParser.Colon);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 1725;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 10)) & ~0x1F) === 0 && ((1 << (_la - 10)) & ((1 << (CPPParser.Alignas - 10)) | (1 << (CPPParser.Auto - 10)) | (1 << (CPPParser.Bool - 10)) | (1 << (CPPParser.Char - 10)) | (1 << (CPPParser.Char16 - 10)) | (1 << (CPPParser.Char32 - 10)) | (1 << (CPPParser.Class - 10)) | (1 << (CPPParser.Const - 10)) | (1 << (CPPParser.Constexpr - 10)) | (1 << (CPPParser.Decltype - 10)) | (1 << (CPPParser.Double - 10)) | (1 << (CPPParser.Enum - 10)) | (1 << (CPPParser.Explicit - 10)) | (1 << (CPPParser.Extern - 10)) | (1 << (CPPParser.Float - 10)) | (1 << (CPPParser.Friend - 10)))) !== 0) || ((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & ((1 << (CPPParser.Inline - 44)) | (1 << (CPPParser.Int - 44)) | (1 << (CPPParser.Long - 44)) | (1 << (CPPParser.Mutable - 44)) | (1 << (CPPParser.Operator - 44)) | (1 << (CPPParser.Private - 44)) | (1 << (CPPParser.Protected - 44)) | (1 << (CPPParser.Public - 44)) | (1 << (CPPParser.Register - 44)) | (1 << (CPPParser.Short - 44)) | (1 << (CPPParser.Signed - 44)) | (1 << (CPPParser.Static - 44)) | (1 << (CPPParser.Static_assert - 44)) | (1 << (CPPParser.Struct - 44)) | (1 << (CPPParser.Template - 44)) | (1 << (CPPParser.Thread_local - 44)) | (1 << (CPPParser.Typedef - 44)))) !== 0) || ((((_la - 76)) & ~0x1F) === 0 && ((1 << (_la - 76)) & ((1 << (CPPParser.Typename_ - 76)) | (1 << (CPPParser.Union - 76)) | (1 << (CPPParser.Unsigned - 76)) | (1 << (CPPParser.Using - 76)) | (1 << (CPPParser.Virtual - 76)) | (1 << (CPPParser.Void - 76)) | (1 << (CPPParser.Volatile - 76)) | (1 << (CPPParser.Wchar - 76)) | (1 << (CPPParser.LeftParen - 76)) | (1 << (CPPParser.LeftBracket - 76)) | (1 << (CPPParser.Star - 76)) | (1 << (CPPParser.And - 76)) | (1 << (CPPParser.Tilde - 76)))) !== 0) || ((((_la - 118)) & ~0x1F) === 0 && ((1 << (_la - 118)) & ((1 << (CPPParser.AndAnd - 118)) | (1 << (CPPParser.Colon - 118)) | (1 << (CPPParser.Doublecolon - 118)) | (1 << (CPPParser.Semi - 118)) | (1 << (CPPParser.Ellipsis - 118)) | (1 << (CPPParser.Identifier - 118)))) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public memberdeclaration(): MemberdeclarationContext {
		let _localctx: MemberdeclarationContext = new MemberdeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 292, CPPParser.RULE_memberdeclaration);
		let _la: number;
		try {
			this.state = 1743;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 244, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1728;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 241, this._ctx) ) {
				case 1:
					{
					this.state = 1727;
					this.attributeSpecifierSeq();
					}
					break;
				}
				this.state = 1731;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 242, this._ctx) ) {
				case 1:
					{
					this.state = 1730;
					this.declSpecifierSeq();
					}
					break;
				}
				this.state = 1734;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPPParser.Alignas || _la === CPPParser.Decltype || _la === CPPParser.Operator || ((((_la - 85)) & ~0x1F) === 0 && ((1 << (_la - 85)) & ((1 << (CPPParser.LeftParen - 85)) | (1 << (CPPParser.LeftBracket - 85)) | (1 << (CPPParser.Star - 85)) | (1 << (CPPParser.And - 85)) | (1 << (CPPParser.Tilde - 85)))) !== 0) || ((((_la - 118)) & ~0x1F) === 0 && ((1 << (_la - 118)) & ((1 << (CPPParser.AndAnd - 118)) | (1 << (CPPParser.Colon - 118)) | (1 << (CPPParser.Doublecolon - 118)) | (1 << (CPPParser.Ellipsis - 118)) | (1 << (CPPParser.Identifier - 118)))) !== 0)) {
					{
					this.state = 1733;
					this.memberDeclaratorList();
					}
				}

				this.state = 1736;
				this.match(CPPParser.Semi);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1737;
				this.functionDefinition();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1738;
				this.usingDeclaration();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1739;
				this.staticAssertDeclaration();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1740;
				this.templateDeclaration();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1741;
				this.aliasDeclaration();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1742;
				this.emptyDeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public memberDeclaratorList(): MemberDeclaratorListContext {
		let _localctx: MemberDeclaratorListContext = new MemberDeclaratorListContext(this._ctx, this.state);
		this.enterRule(_localctx, 294, CPPParser.RULE_memberDeclaratorList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1745;
			this.memberDeclarator();
			this.state = 1750;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CPPParser.Comma) {
				{
				{
				this.state = 1746;
				this.match(CPPParser.Comma);
				this.state = 1747;
				this.memberDeclarator();
				}
				}
				this.state = 1752;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public memberDeclarator(): MemberDeclaratorContext {
		let _localctx: MemberDeclaratorContext = new MemberDeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 296, CPPParser.RULE_memberDeclarator);
		let _la: number;
		try {
			this.state = 1773;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 252, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1753;
				this.declarator();
				this.state = 1763;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 249, this._ctx) ) {
				case 1:
					{
					this.state = 1755;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === CPPParser.Final || _la === CPPParser.Override) {
						{
						this.state = 1754;
						this.virtualSpecifierSeq();
						}
					}

					this.state = 1758;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === CPPParser.Assign) {
						{
						this.state = 1757;
						this.pureSpecifier();
						}
					}

					}
					break;

				case 2:
					{
					this.state = 1761;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === CPPParser.LeftBrace || _la === CPPParser.Assign) {
						{
						this.state = 1760;
						this.braceOrEqualInitializer();
						}
					}

					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1766;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPPParser.Identifier) {
					{
					this.state = 1765;
					this.match(CPPParser.Identifier);
					}
				}

				this.state = 1769;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPPParser.Alignas || _la === CPPParser.LeftBracket) {
					{
					this.state = 1768;
					this.attributeSpecifierSeq();
					}
				}

				this.state = 1771;
				this.match(CPPParser.Colon);
				this.state = 1772;
				this.constantExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public virtualSpecifierSeq(): VirtualSpecifierSeqContext {
		let _localctx: VirtualSpecifierSeqContext = new VirtualSpecifierSeqContext(this._ctx, this.state);
		this.enterRule(_localctx, 298, CPPParser.RULE_virtualSpecifierSeq);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1776;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1775;
				this.virtualSpecifier();
				}
				}
				this.state = 1778;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === CPPParser.Final || _la === CPPParser.Override);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public virtualSpecifier(): VirtualSpecifierContext {
		let _localctx: VirtualSpecifierContext = new VirtualSpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 300, CPPParser.RULE_virtualSpecifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1780;
			_la = this._input.LA(1);
			if (!(_la === CPPParser.Final || _la === CPPParser.Override)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pureSpecifier(): PureSpecifierContext {
		let _localctx: PureSpecifierContext = new PureSpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 302, CPPParser.RULE_pureSpecifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1782;
			this.match(CPPParser.Assign);
			this.state = 1783;
			_localctx._val = this.match(CPPParser.OctalLiteral);
			if((_localctx._val != null ? _localctx._val.text : undefined).compareTo("0")!=0) throw new InputMismatchException(this);
					
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public baseClause(): BaseClauseContext {
		let _localctx: BaseClauseContext = new BaseClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 304, CPPParser.RULE_baseClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1786;
			this.match(CPPParser.Colon);
			this.state = 1787;
			this.baseSpecifierList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public baseSpecifierList(): BaseSpecifierListContext {
		let _localctx: BaseSpecifierListContext = new BaseSpecifierListContext(this._ctx, this.state);
		this.enterRule(_localctx, 306, CPPParser.RULE_baseSpecifierList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1789;
			this.baseSpecifier();
			this.state = 1791;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPPParser.Ellipsis) {
				{
				this.state = 1790;
				this.match(CPPParser.Ellipsis);
				}
			}

			this.state = 1800;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CPPParser.Comma) {
				{
				{
				this.state = 1793;
				this.match(CPPParser.Comma);
				this.state = 1794;
				this.baseSpecifier();
				this.state = 1796;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPPParser.Ellipsis) {
					{
					this.state = 1795;
					this.match(CPPParser.Ellipsis);
					}
				}

				}
				}
				this.state = 1802;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public baseSpecifier(): BaseSpecifierContext {
		let _localctx: BaseSpecifierContext = new BaseSpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 308, CPPParser.RULE_baseSpecifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1804;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPPParser.Alignas || _la === CPPParser.LeftBracket) {
				{
				this.state = 1803;
				this.attributeSpecifierSeq();
				}
			}

			this.state = 1818;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPPParser.Decltype:
			case CPPParser.Doublecolon:
			case CPPParser.Identifier:
				{
				this.state = 1806;
				this.baseTypeSpecifier();
				}
				break;
			case CPPParser.Virtual:
				{
				this.state = 1807;
				this.match(CPPParser.Virtual);
				this.state = 1809;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & ((1 << (CPPParser.Private - 54)) | (1 << (CPPParser.Protected - 54)) | (1 << (CPPParser.Public - 54)))) !== 0)) {
					{
					this.state = 1808;
					this.accessSpecifier();
					}
				}

				this.state = 1811;
				this.baseTypeSpecifier();
				}
				break;
			case CPPParser.Private:
			case CPPParser.Protected:
			case CPPParser.Public:
				{
				this.state = 1812;
				this.accessSpecifier();
				this.state = 1814;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPPParser.Virtual) {
					{
					this.state = 1813;
					this.match(CPPParser.Virtual);
					}
				}

				this.state = 1816;
				this.baseTypeSpecifier();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classOrDeclType(): ClassOrDeclTypeContext {
		let _localctx: ClassOrDeclTypeContext = new ClassOrDeclTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 310, CPPParser.RULE_classOrDeclType);
		try {
			this.state = 1825;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 262, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1821;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 261, this._ctx) ) {
				case 1:
					{
					this.state = 1820;
					this.nestedNameSpecifier(0);
					}
					break;
				}
				this.state = 1823;
				this.className();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1824;
				this.decltypeSpecifier();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public baseTypeSpecifier(): BaseTypeSpecifierContext {
		let _localctx: BaseTypeSpecifierContext = new BaseTypeSpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 312, CPPParser.RULE_baseTypeSpecifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1827;
			this.classOrDeclType();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public accessSpecifier(): AccessSpecifierContext {
		let _localctx: AccessSpecifierContext = new AccessSpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 314, CPPParser.RULE_accessSpecifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1829;
			_la = this._input.LA(1);
			if (!(((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & ((1 << (CPPParser.Private - 54)) | (1 << (CPPParser.Protected - 54)) | (1 << (CPPParser.Public - 54)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public conversionFunctionId(): ConversionFunctionIdContext {
		let _localctx: ConversionFunctionIdContext = new ConversionFunctionIdContext(this._ctx, this.state);
		this.enterRule(_localctx, 316, CPPParser.RULE_conversionFunctionId);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1831;
			this.match(CPPParser.Operator);
			this.state = 1832;
			this.conversionTypeId();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public conversionTypeId(): ConversionTypeIdContext {
		let _localctx: ConversionTypeIdContext = new ConversionTypeIdContext(this._ctx, this.state);
		this.enterRule(_localctx, 318, CPPParser.RULE_conversionTypeId);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1834;
			this.typeSpecifierSeq();
			this.state = 1836;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 263, this._ctx) ) {
			case 1:
				{
				this.state = 1835;
				this.conversionDeclarator();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public conversionDeclarator(): ConversionDeclaratorContext {
		let _localctx: ConversionDeclaratorContext = new ConversionDeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 320, CPPParser.RULE_conversionDeclarator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1838;
			this.pointerOperator();
			this.state = 1840;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 264, this._ctx) ) {
			case 1:
				{
				this.state = 1839;
				this.conversionDeclarator();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constructorInitializer(): ConstructorInitializerContext {
		let _localctx: ConstructorInitializerContext = new ConstructorInitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 322, CPPParser.RULE_constructorInitializer);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1842;
			this.match(CPPParser.Colon);
			this.state = 1843;
			this.memInitializerList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public memInitializerList(): MemInitializerListContext {
		let _localctx: MemInitializerListContext = new MemInitializerListContext(this._ctx, this.state);
		this.enterRule(_localctx, 324, CPPParser.RULE_memInitializerList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1845;
			this.memInitializer();
			this.state = 1847;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPPParser.Ellipsis) {
				{
				this.state = 1846;
				this.match(CPPParser.Ellipsis);
				}
			}

			this.state = 1856;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CPPParser.Comma) {
				{
				{
				this.state = 1849;
				this.match(CPPParser.Comma);
				this.state = 1850;
				this.memInitializer();
				this.state = 1852;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPPParser.Ellipsis) {
					{
					this.state = 1851;
					this.match(CPPParser.Ellipsis);
					}
				}

				}
				}
				this.state = 1858;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public memInitializer(): MemInitializerContext {
		let _localctx: MemInitializerContext = new MemInitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 326, CPPParser.RULE_memInitializer);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1859;
			this.meminitializerid();
			this.state = 1866;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPPParser.LeftParen:
				{
				this.state = 1860;
				this.match(CPPParser.LeftParen);
				this.state = 1862;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPPParser.IntegerLiteral) | (1 << CPPParser.CharacterLiteral) | (1 << CPPParser.FloatingLiteral) | (1 << CPPParser.StringLiteral) | (1 << CPPParser.BooleanLiteral) | (1 << CPPParser.PointerLiteral) | (1 << CPPParser.UserDefinedLiteral) | (1 << CPPParser.Alignof) | (1 << CPPParser.Auto) | (1 << CPPParser.Bool) | (1 << CPPParser.Char) | (1 << CPPParser.Char16) | (1 << CPPParser.Char32) | (1 << CPPParser.Const_cast) | (1 << CPPParser.Decltype) | (1 << CPPParser.Delete) | (1 << CPPParser.Double) | (1 << CPPParser.Dynamic_cast))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (CPPParser.Float - 39)) | (1 << (CPPParser.Int - 39)) | (1 << (CPPParser.Long - 39)) | (1 << (CPPParser.New - 39)) | (1 << (CPPParser.Noexcept - 39)) | (1 << (CPPParser.Operator - 39)) | (1 << (CPPParser.Reinterpret_cast - 39)) | (1 << (CPPParser.Short - 39)) | (1 << (CPPParser.Signed - 39)) | (1 << (CPPParser.Sizeof - 39)) | (1 << (CPPParser.Static_cast - 39)) | (1 << (CPPParser.This - 39)))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (CPPParser.Throw - 71)) | (1 << (CPPParser.Typeid_ - 71)) | (1 << (CPPParser.Typename_ - 71)) | (1 << (CPPParser.Unsigned - 71)) | (1 << (CPPParser.Void - 71)) | (1 << (CPPParser.Wchar - 71)) | (1 << (CPPParser.LeftParen - 71)) | (1 << (CPPParser.LeftBracket - 71)) | (1 << (CPPParser.LeftBrace - 71)) | (1 << (CPPParser.Plus - 71)) | (1 << (CPPParser.Minus - 71)) | (1 << (CPPParser.Star - 71)) | (1 << (CPPParser.And - 71)) | (1 << (CPPParser.Or - 71)) | (1 << (CPPParser.Tilde - 71)) | (1 << (CPPParser.Not - 71)))) !== 0) || ((((_la - 120)) & ~0x1F) === 0 && ((1 << (_la - 120)) & ((1 << (CPPParser.PlusPlus - 120)) | (1 << (CPPParser.MinusMinus - 120)) | (1 << (CPPParser.Doublecolon - 120)) | (1 << (CPPParser.Identifier - 120)))) !== 0)) {
					{
					this.state = 1861;
					this.expressionList();
					}
				}

				this.state = 1864;
				this.match(CPPParser.RightParen);
				}
				break;
			case CPPParser.LeftBrace:
				{
				this.state = 1865;
				this.bracedInitList();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public meminitializerid(): MeminitializeridContext {
		let _localctx: MeminitializeridContext = new MeminitializeridContext(this._ctx, this.state);
		this.enterRule(_localctx, 328, CPPParser.RULE_meminitializerid);
		try {
			this.state = 1870;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 270, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1868;
				this.classOrDeclType();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1869;
				this.match(CPPParser.Identifier);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public operatorFunctionId(): OperatorFunctionIdContext {
		let _localctx: OperatorFunctionIdContext = new OperatorFunctionIdContext(this._ctx, this.state);
		this.enterRule(_localctx, 330, CPPParser.RULE_operatorFunctionId);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1872;
			this.match(CPPParser.Operator);
			this.state = 1873;
			this.theOperator();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public literalOperatorId(): LiteralOperatorIdContext {
		let _localctx: LiteralOperatorIdContext = new LiteralOperatorIdContext(this._ctx, this.state);
		this.enterRule(_localctx, 332, CPPParser.RULE_literalOperatorId);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1875;
			this.match(CPPParser.Operator);
			this.state = 1879;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPPParser.StringLiteral:
				{
				this.state = 1876;
				this.match(CPPParser.StringLiteral);
				this.state = 1877;
				this.match(CPPParser.Identifier);
				}
				break;
			case CPPParser.UserDefinedStringLiteral:
				{
				this.state = 1878;
				this.match(CPPParser.UserDefinedStringLiteral);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public templateDeclaration(): TemplateDeclarationContext {
		let _localctx: TemplateDeclarationContext = new TemplateDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 334, CPPParser.RULE_templateDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1881;
			this.match(CPPParser.Template);
			this.state = 1882;
			this.match(CPPParser.Less);
			this.state = 1883;
			this.templateparameterList();
			this.state = 1884;
			this.match(CPPParser.Greater);
			this.state = 1885;
			this.declaration();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public templateparameterList(): TemplateparameterListContext {
		let _localctx: TemplateparameterListContext = new TemplateparameterListContext(this._ctx, this.state);
		this.enterRule(_localctx, 336, CPPParser.RULE_templateparameterList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1887;
			this.templateParameter();
			this.state = 1892;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CPPParser.Comma) {
				{
				{
				this.state = 1888;
				this.match(CPPParser.Comma);
				this.state = 1889;
				this.templateParameter();
				}
				}
				this.state = 1894;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public templateParameter(): TemplateParameterContext {
		let _localctx: TemplateParameterContext = new TemplateParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 338, CPPParser.RULE_templateParameter);
		try {
			this.state = 1897;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 273, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1895;
				this.typeParameter();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1896;
				this.parameterDeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeParameter(): TypeParameterContext {
		let _localctx: TypeParameterContext = new TypeParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 340, CPPParser.RULE_typeParameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1908;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPPParser.Class:
			case CPPParser.Template:
				{
				this.state = 1904;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPPParser.Template) {
					{
					this.state = 1899;
					this.match(CPPParser.Template);
					this.state = 1900;
					this.match(CPPParser.Less);
					this.state = 1901;
					this.templateparameterList();
					this.state = 1902;
					this.match(CPPParser.Greater);
					}
				}

				this.state = 1906;
				this.match(CPPParser.Class);
				}
				break;
			case CPPParser.Typename_:
				{
				this.state = 1907;
				this.match(CPPParser.Typename_);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1921;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 279, this._ctx) ) {
			case 1:
				{
				{
				this.state = 1911;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPPParser.Ellipsis) {
					{
					this.state = 1910;
					this.match(CPPParser.Ellipsis);
					}
				}

				this.state = 1914;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPPParser.Identifier) {
					{
					this.state = 1913;
					this.match(CPPParser.Identifier);
					}
				}

				}
				}
				break;

			case 2:
				{
				{
				this.state = 1917;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPPParser.Identifier) {
					{
					this.state = 1916;
					this.match(CPPParser.Identifier);
					}
				}

				this.state = 1919;
				this.match(CPPParser.Assign);
				this.state = 1920;
				this.theTypeId();
				}
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public simpleTemplateId(): SimpleTemplateIdContext {
		let _localctx: SimpleTemplateIdContext = new SimpleTemplateIdContext(this._ctx, this.state);
		this.enterRule(_localctx, 342, CPPParser.RULE_simpleTemplateId);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1923;
			this.templateName();
			this.state = 1924;
			this.match(CPPParser.Less);
			this.state = 1926;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPPParser.IntegerLiteral) | (1 << CPPParser.CharacterLiteral) | (1 << CPPParser.FloatingLiteral) | (1 << CPPParser.StringLiteral) | (1 << CPPParser.BooleanLiteral) | (1 << CPPParser.PointerLiteral) | (1 << CPPParser.UserDefinedLiteral) | (1 << CPPParser.Alignof) | (1 << CPPParser.Auto) | (1 << CPPParser.Bool) | (1 << CPPParser.Char) | (1 << CPPParser.Char16) | (1 << CPPParser.Char32) | (1 << CPPParser.Class) | (1 << CPPParser.Const) | (1 << CPPParser.Const_cast) | (1 << CPPParser.Decltype) | (1 << CPPParser.Delete) | (1 << CPPParser.Double) | (1 << CPPParser.Dynamic_cast))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (CPPParser.Enum - 33)) | (1 << (CPPParser.Float - 33)) | (1 << (CPPParser.Int - 33)) | (1 << (CPPParser.Long - 33)) | (1 << (CPPParser.New - 33)) | (1 << (CPPParser.Noexcept - 33)) | (1 << (CPPParser.Operator - 33)) | (1 << (CPPParser.Reinterpret_cast - 33)) | (1 << (CPPParser.Short - 33)) | (1 << (CPPParser.Signed - 33)) | (1 << (CPPParser.Sizeof - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (CPPParser.Static_cast - 65)) | (1 << (CPPParser.Struct - 65)) | (1 << (CPPParser.This - 65)) | (1 << (CPPParser.Typeid_ - 65)) | (1 << (CPPParser.Typename_ - 65)) | (1 << (CPPParser.Union - 65)) | (1 << (CPPParser.Unsigned - 65)) | (1 << (CPPParser.Void - 65)) | (1 << (CPPParser.Volatile - 65)) | (1 << (CPPParser.Wchar - 65)) | (1 << (CPPParser.LeftParen - 65)) | (1 << (CPPParser.LeftBracket - 65)) | (1 << (CPPParser.Plus - 65)) | (1 << (CPPParser.Minus - 65)) | (1 << (CPPParser.Star - 65)))) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & ((1 << (CPPParser.And - 97)) | (1 << (CPPParser.Or - 97)) | (1 << (CPPParser.Tilde - 97)) | (1 << (CPPParser.Not - 97)) | (1 << (CPPParser.PlusPlus - 97)) | (1 << (CPPParser.MinusMinus - 97)) | (1 << (CPPParser.Doublecolon - 97)))) !== 0) || _la === CPPParser.Identifier) {
				{
				this.state = 1925;
				this.templateArgumentList();
				}
			}

			this.state = 1928;
			this.match(CPPParser.Greater);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public templateId(): TemplateIdContext {
		let _localctx: TemplateIdContext = new TemplateIdContext(this._ctx, this.state);
		this.enterRule(_localctx, 344, CPPParser.RULE_templateId);
		let _la: number;
		try {
			this.state = 1941;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPPParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1930;
				this.simpleTemplateId();
				}
				break;
			case CPPParser.Operator:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1933;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 281, this._ctx) ) {
				case 1:
					{
					this.state = 1931;
					this.operatorFunctionId();
					}
					break;

				case 2:
					{
					this.state = 1932;
					this.literalOperatorId();
					}
					break;
				}
				this.state = 1935;
				this.match(CPPParser.Less);
				this.state = 1937;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPPParser.IntegerLiteral) | (1 << CPPParser.CharacterLiteral) | (1 << CPPParser.FloatingLiteral) | (1 << CPPParser.StringLiteral) | (1 << CPPParser.BooleanLiteral) | (1 << CPPParser.PointerLiteral) | (1 << CPPParser.UserDefinedLiteral) | (1 << CPPParser.Alignof) | (1 << CPPParser.Auto) | (1 << CPPParser.Bool) | (1 << CPPParser.Char) | (1 << CPPParser.Char16) | (1 << CPPParser.Char32) | (1 << CPPParser.Class) | (1 << CPPParser.Const) | (1 << CPPParser.Const_cast) | (1 << CPPParser.Decltype) | (1 << CPPParser.Delete) | (1 << CPPParser.Double) | (1 << CPPParser.Dynamic_cast))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (CPPParser.Enum - 33)) | (1 << (CPPParser.Float - 33)) | (1 << (CPPParser.Int - 33)) | (1 << (CPPParser.Long - 33)) | (1 << (CPPParser.New - 33)) | (1 << (CPPParser.Noexcept - 33)) | (1 << (CPPParser.Operator - 33)) | (1 << (CPPParser.Reinterpret_cast - 33)) | (1 << (CPPParser.Short - 33)) | (1 << (CPPParser.Signed - 33)) | (1 << (CPPParser.Sizeof - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (CPPParser.Static_cast - 65)) | (1 << (CPPParser.Struct - 65)) | (1 << (CPPParser.This - 65)) | (1 << (CPPParser.Typeid_ - 65)) | (1 << (CPPParser.Typename_ - 65)) | (1 << (CPPParser.Union - 65)) | (1 << (CPPParser.Unsigned - 65)) | (1 << (CPPParser.Void - 65)) | (1 << (CPPParser.Volatile - 65)) | (1 << (CPPParser.Wchar - 65)) | (1 << (CPPParser.LeftParen - 65)) | (1 << (CPPParser.LeftBracket - 65)) | (1 << (CPPParser.Plus - 65)) | (1 << (CPPParser.Minus - 65)) | (1 << (CPPParser.Star - 65)))) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & ((1 << (CPPParser.And - 97)) | (1 << (CPPParser.Or - 97)) | (1 << (CPPParser.Tilde - 97)) | (1 << (CPPParser.Not - 97)) | (1 << (CPPParser.PlusPlus - 97)) | (1 << (CPPParser.MinusMinus - 97)) | (1 << (CPPParser.Doublecolon - 97)))) !== 0) || _la === CPPParser.Identifier) {
					{
					this.state = 1936;
					this.templateArgumentList();
					}
				}

				this.state = 1939;
				this.match(CPPParser.Greater);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public templateName(): TemplateNameContext {
		let _localctx: TemplateNameContext = new TemplateNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 346, CPPParser.RULE_templateName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1943;
			this.match(CPPParser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public templateArgumentList(): TemplateArgumentListContext {
		let _localctx: TemplateArgumentListContext = new TemplateArgumentListContext(this._ctx, this.state);
		this.enterRule(_localctx, 348, CPPParser.RULE_templateArgumentList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1945;
			this.templateArgument();
			this.state = 1947;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPPParser.Ellipsis) {
				{
				this.state = 1946;
				this.match(CPPParser.Ellipsis);
				}
			}

			this.state = 1956;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CPPParser.Comma) {
				{
				{
				this.state = 1949;
				this.match(CPPParser.Comma);
				this.state = 1950;
				this.templateArgument();
				this.state = 1952;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPPParser.Ellipsis) {
					{
					this.state = 1951;
					this.match(CPPParser.Ellipsis);
					}
				}

				}
				}
				this.state = 1958;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public templateArgument(): TemplateArgumentContext {
		let _localctx: TemplateArgumentContext = new TemplateArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 350, CPPParser.RULE_templateArgument);
		try {
			this.state = 1962;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 287, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1959;
				this.theTypeId();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1960;
				this.constantExpression();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1961;
				this.idExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeNameSpecifier(): TypeNameSpecifierContext {
		let _localctx: TypeNameSpecifierContext = new TypeNameSpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 352, CPPParser.RULE_typeNameSpecifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1964;
			this.match(CPPParser.Typename_);
			this.state = 1965;
			this.nestedNameSpecifier(0);
			this.state = 1971;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 289, this._ctx) ) {
			case 1:
				{
				this.state = 1966;
				this.match(CPPParser.Identifier);
				}
				break;

			case 2:
				{
				this.state = 1968;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPPParser.Template) {
					{
					this.state = 1967;
					this.match(CPPParser.Template);
					}
				}

				this.state = 1970;
				this.simpleTemplateId();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public explicitInstantiation(): ExplicitInstantiationContext {
		let _localctx: ExplicitInstantiationContext = new ExplicitInstantiationContext(this._ctx, this.state);
		this.enterRule(_localctx, 354, CPPParser.RULE_explicitInstantiation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1974;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPPParser.Extern) {
				{
				this.state = 1973;
				this.match(CPPParser.Extern);
				}
			}

			this.state = 1976;
			this.match(CPPParser.Template);
			this.state = 1977;
			this.declaration();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public explicitSpecialization(): ExplicitSpecializationContext {
		let _localctx: ExplicitSpecializationContext = new ExplicitSpecializationContext(this._ctx, this.state);
		this.enterRule(_localctx, 356, CPPParser.RULE_explicitSpecialization);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1979;
			this.match(CPPParser.Template);
			this.state = 1980;
			this.match(CPPParser.Less);
			this.state = 1981;
			this.match(CPPParser.Greater);
			this.state = 1982;
			this.declaration();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tryBlock(): TryBlockContext {
		let _localctx: TryBlockContext = new TryBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 358, CPPParser.RULE_tryBlock);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1984;
			this.match(CPPParser.Try);
			this.state = 1985;
			this.compoundStatement();
			this.state = 1986;
			this.handlerSeq();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionTryBlock(): FunctionTryBlockContext {
		let _localctx: FunctionTryBlockContext = new FunctionTryBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 360, CPPParser.RULE_functionTryBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1988;
			this.match(CPPParser.Try);
			this.state = 1990;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPPParser.Colon) {
				{
				this.state = 1989;
				this.constructorInitializer();
				}
			}

			this.state = 1992;
			this.compoundStatement();
			this.state = 1993;
			this.handlerSeq();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public handlerSeq(): HandlerSeqContext {
		let _localctx: HandlerSeqContext = new HandlerSeqContext(this._ctx, this.state);
		this.enterRule(_localctx, 362, CPPParser.RULE_handlerSeq);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1996;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1995;
				this.handler();
				}
				}
				this.state = 1998;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === CPPParser.Catch);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public handler(): HandlerContext {
		let _localctx: HandlerContext = new HandlerContext(this._ctx, this.state);
		this.enterRule(_localctx, 364, CPPParser.RULE_handler);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2000;
			this.match(CPPParser.Catch);
			this.state = 2001;
			this.match(CPPParser.LeftParen);
			this.state = 2002;
			this.exceptionDeclaration();
			this.state = 2003;
			this.match(CPPParser.RightParen);
			this.state = 2004;
			this.compoundStatement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public exceptionDeclaration(): ExceptionDeclarationContext {
		let _localctx: ExceptionDeclarationContext = new ExceptionDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 366, CPPParser.RULE_exceptionDeclaration);
		let _la: number;
		try {
			this.state = 2015;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPPParser.Alignas:
			case CPPParser.Auto:
			case CPPParser.Bool:
			case CPPParser.Char:
			case CPPParser.Char16:
			case CPPParser.Char32:
			case CPPParser.Class:
			case CPPParser.Const:
			case CPPParser.Decltype:
			case CPPParser.Double:
			case CPPParser.Enum:
			case CPPParser.Float:
			case CPPParser.Int:
			case CPPParser.Long:
			case CPPParser.Short:
			case CPPParser.Signed:
			case CPPParser.Struct:
			case CPPParser.Typename_:
			case CPPParser.Union:
			case CPPParser.Unsigned:
			case CPPParser.Void:
			case CPPParser.Volatile:
			case CPPParser.Wchar:
			case CPPParser.LeftBracket:
			case CPPParser.Doublecolon:
			case CPPParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2007;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPPParser.Alignas || _la === CPPParser.LeftBracket) {
					{
					this.state = 2006;
					this.attributeSpecifierSeq();
					}
				}

				this.state = 2009;
				this.typeSpecifierSeq();
				this.state = 2012;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 294, this._ctx) ) {
				case 1:
					{
					this.state = 2010;
					this.declarator();
					}
					break;

				case 2:
					{
					this.state = 2011;
					this.abstractDeclarator();
					}
					break;
				}
				}
				break;
			case CPPParser.Ellipsis:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2014;
				this.match(CPPParser.Ellipsis);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public throwExpression(): ThrowExpressionContext {
		let _localctx: ThrowExpressionContext = new ThrowExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 368, CPPParser.RULE_throwExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2017;
			this.match(CPPParser.Throw);
			this.state = 2019;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPPParser.IntegerLiteral) | (1 << CPPParser.CharacterLiteral) | (1 << CPPParser.FloatingLiteral) | (1 << CPPParser.StringLiteral) | (1 << CPPParser.BooleanLiteral) | (1 << CPPParser.PointerLiteral) | (1 << CPPParser.UserDefinedLiteral) | (1 << CPPParser.Alignof) | (1 << CPPParser.Auto) | (1 << CPPParser.Bool) | (1 << CPPParser.Char) | (1 << CPPParser.Char16) | (1 << CPPParser.Char32) | (1 << CPPParser.Const_cast) | (1 << CPPParser.Decltype) | (1 << CPPParser.Delete) | (1 << CPPParser.Double) | (1 << CPPParser.Dynamic_cast))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (CPPParser.Float - 39)) | (1 << (CPPParser.Int - 39)) | (1 << (CPPParser.Long - 39)) | (1 << (CPPParser.New - 39)) | (1 << (CPPParser.Noexcept - 39)) | (1 << (CPPParser.Operator - 39)) | (1 << (CPPParser.Reinterpret_cast - 39)) | (1 << (CPPParser.Short - 39)) | (1 << (CPPParser.Signed - 39)) | (1 << (CPPParser.Sizeof - 39)) | (1 << (CPPParser.Static_cast - 39)) | (1 << (CPPParser.This - 39)))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (CPPParser.Throw - 71)) | (1 << (CPPParser.Typeid_ - 71)) | (1 << (CPPParser.Typename_ - 71)) | (1 << (CPPParser.Unsigned - 71)) | (1 << (CPPParser.Void - 71)) | (1 << (CPPParser.Wchar - 71)) | (1 << (CPPParser.LeftParen - 71)) | (1 << (CPPParser.LeftBracket - 71)) | (1 << (CPPParser.Plus - 71)) | (1 << (CPPParser.Minus - 71)) | (1 << (CPPParser.Star - 71)) | (1 << (CPPParser.And - 71)) | (1 << (CPPParser.Or - 71)) | (1 << (CPPParser.Tilde - 71)) | (1 << (CPPParser.Not - 71)))) !== 0) || ((((_la - 120)) & ~0x1F) === 0 && ((1 << (_la - 120)) & ((1 << (CPPParser.PlusPlus - 120)) | (1 << (CPPParser.MinusMinus - 120)) | (1 << (CPPParser.Doublecolon - 120)) | (1 << (CPPParser.Identifier - 120)))) !== 0)) {
				{
				this.state = 2018;
				this.assignmentExpression();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public exceptionSpecification(): ExceptionSpecificationContext {
		let _localctx: ExceptionSpecificationContext = new ExceptionSpecificationContext(this._ctx, this.state);
		this.enterRule(_localctx, 370, CPPParser.RULE_exceptionSpecification);
		try {
			this.state = 2023;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPPParser.Throw:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2021;
				this.dynamicExceptionSpecification();
				}
				break;
			case CPPParser.Noexcept:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2022;
				this.noeExceptSpecification();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dynamicExceptionSpecification(): DynamicExceptionSpecificationContext {
		let _localctx: DynamicExceptionSpecificationContext = new DynamicExceptionSpecificationContext(this._ctx, this.state);
		this.enterRule(_localctx, 372, CPPParser.RULE_dynamicExceptionSpecification);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2025;
			this.match(CPPParser.Throw);
			this.state = 2026;
			this.match(CPPParser.LeftParen);
			this.state = 2028;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPPParser.Auto) | (1 << CPPParser.Bool) | (1 << CPPParser.Char) | (1 << CPPParser.Char16) | (1 << CPPParser.Char32) | (1 << CPPParser.Class) | (1 << CPPParser.Const) | (1 << CPPParser.Decltype) | (1 << CPPParser.Double))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (CPPParser.Enum - 33)) | (1 << (CPPParser.Float - 33)) | (1 << (CPPParser.Int - 33)) | (1 << (CPPParser.Long - 33)) | (1 << (CPPParser.Short - 33)) | (1 << (CPPParser.Signed - 33)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (CPPParser.Struct - 66)) | (1 << (CPPParser.Typename_ - 66)) | (1 << (CPPParser.Union - 66)) | (1 << (CPPParser.Unsigned - 66)) | (1 << (CPPParser.Void - 66)) | (1 << (CPPParser.Volatile - 66)) | (1 << (CPPParser.Wchar - 66)))) !== 0) || _la === CPPParser.Doublecolon || _la === CPPParser.Identifier) {
				{
				this.state = 2027;
				this.typeIdList();
				}
			}

			this.state = 2030;
			this.match(CPPParser.RightParen);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeIdList(): TypeIdListContext {
		let _localctx: TypeIdListContext = new TypeIdListContext(this._ctx, this.state);
		this.enterRule(_localctx, 374, CPPParser.RULE_typeIdList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2032;
			this.theTypeId();
			this.state = 2034;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPPParser.Ellipsis) {
				{
				this.state = 2033;
				this.match(CPPParser.Ellipsis);
				}
			}

			this.state = 2043;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CPPParser.Comma) {
				{
				{
				this.state = 2036;
				this.match(CPPParser.Comma);
				this.state = 2037;
				this.theTypeId();
				this.state = 2039;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPPParser.Ellipsis) {
					{
					this.state = 2038;
					this.match(CPPParser.Ellipsis);
					}
				}

				}
				}
				this.state = 2045;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public noeExceptSpecification(): NoeExceptSpecificationContext {
		let _localctx: NoeExceptSpecificationContext = new NoeExceptSpecificationContext(this._ctx, this.state);
		this.enterRule(_localctx, 376, CPPParser.RULE_noeExceptSpecification);
		try {
			this.state = 2052;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 302, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2046;
				this.match(CPPParser.Noexcept);
				this.state = 2047;
				this.match(CPPParser.LeftParen);
				this.state = 2048;
				this.constantExpression();
				this.state = 2049;
				this.match(CPPParser.RightParen);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2051;
				this.match(CPPParser.Noexcept);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public theOperator(): TheOperatorContext {
		let _localctx: TheOperatorContext = new TheOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 378, CPPParser.RULE_theOperator);
		try {
			this.state = 2105;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 305, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2054;
				this.match(CPPParser.New);
				this.state = 2057;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 303, this._ctx) ) {
				case 1:
					{
					this.state = 2055;
					this.match(CPPParser.LeftBracket);
					this.state = 2056;
					this.match(CPPParser.RightBracket);
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2059;
				this.match(CPPParser.Delete);
				this.state = 2062;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 304, this._ctx) ) {
				case 1:
					{
					this.state = 2060;
					this.match(CPPParser.LeftBracket);
					this.state = 2061;
					this.match(CPPParser.RightBracket);
					}
					break;
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2064;
				this.match(CPPParser.Plus);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2065;
				this.match(CPPParser.Minus);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2066;
				this.match(CPPParser.Star);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2067;
				this.match(CPPParser.Div);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 2068;
				this.match(CPPParser.Mod);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 2069;
				this.match(CPPParser.Caret);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 2070;
				this.match(CPPParser.And);
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 2071;
				this.match(CPPParser.Or);
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 2072;
				this.match(CPPParser.Tilde);
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 2073;
				this.match(CPPParser.Not);
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 2074;
				this.match(CPPParser.Assign);
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 2075;
				this.match(CPPParser.Greater);
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 2076;
				this.match(CPPParser.Less);
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 2077;
				this.match(CPPParser.GreaterEqual);
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 2078;
				this.match(CPPParser.PlusAssign);
				}
				break;

			case 18:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 2079;
				this.match(CPPParser.MinusAssign);
				}
				break;

			case 19:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 2080;
				this.match(CPPParser.StarAssign);
				}
				break;

			case 20:
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 2081;
				this.match(CPPParser.ModAssign);
				}
				break;

			case 21:
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 2082;
				this.match(CPPParser.XorAssign);
				}
				break;

			case 22:
				this.enterOuterAlt(_localctx, 22);
				{
				this.state = 2083;
				this.match(CPPParser.AndAssign);
				}
				break;

			case 23:
				this.enterOuterAlt(_localctx, 23);
				{
				this.state = 2084;
				this.match(CPPParser.OrAssign);
				}
				break;

			case 24:
				this.enterOuterAlt(_localctx, 24);
				{
				this.state = 2085;
				this.match(CPPParser.Less);
				this.state = 2086;
				this.match(CPPParser.Less);
				}
				break;

			case 25:
				this.enterOuterAlt(_localctx, 25);
				{
				this.state = 2087;
				this.match(CPPParser.Greater);
				this.state = 2088;
				this.match(CPPParser.Greater);
				}
				break;

			case 26:
				this.enterOuterAlt(_localctx, 26);
				{
				this.state = 2089;
				this.match(CPPParser.RightShiftAssign);
				}
				break;

			case 27:
				this.enterOuterAlt(_localctx, 27);
				{
				this.state = 2090;
				this.match(CPPParser.LeftShiftAssign);
				}
				break;

			case 28:
				this.enterOuterAlt(_localctx, 28);
				{
				this.state = 2091;
				this.match(CPPParser.Equal);
				}
				break;

			case 29:
				this.enterOuterAlt(_localctx, 29);
				{
				this.state = 2092;
				this.match(CPPParser.NotEqual);
				}
				break;

			case 30:
				this.enterOuterAlt(_localctx, 30);
				{
				this.state = 2093;
				this.match(CPPParser.LessEqual);
				}
				break;

			case 31:
				this.enterOuterAlt(_localctx, 31);
				{
				this.state = 2094;
				this.match(CPPParser.AndAnd);
				}
				break;

			case 32:
				this.enterOuterAlt(_localctx, 32);
				{
				this.state = 2095;
				this.match(CPPParser.OrOr);
				}
				break;

			case 33:
				this.enterOuterAlt(_localctx, 33);
				{
				this.state = 2096;
				this.match(CPPParser.PlusPlus);
				}
				break;

			case 34:
				this.enterOuterAlt(_localctx, 34);
				{
				this.state = 2097;
				this.match(CPPParser.MinusMinus);
				}
				break;

			case 35:
				this.enterOuterAlt(_localctx, 35);
				{
				this.state = 2098;
				this.match(CPPParser.Comma);
				}
				break;

			case 36:
				this.enterOuterAlt(_localctx, 36);
				{
				this.state = 2099;
				this.match(CPPParser.ArrowStar);
				}
				break;

			case 37:
				this.enterOuterAlt(_localctx, 37);
				{
				this.state = 2100;
				this.match(CPPParser.Arrow);
				}
				break;

			case 38:
				this.enterOuterAlt(_localctx, 38);
				{
				this.state = 2101;
				this.match(CPPParser.LeftParen);
				this.state = 2102;
				this.match(CPPParser.RightParen);
				}
				break;

			case 39:
				this.enterOuterAlt(_localctx, 39);
				{
				this.state = 2103;
				this.match(CPPParser.LeftBracket);
				this.state = 2104;
				this.match(CPPParser.RightBracket);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 380, CPPParser.RULE_literal);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2107;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPPParser.IntegerLiteral) | (1 << CPPParser.CharacterLiteral) | (1 << CPPParser.FloatingLiteral) | (1 << CPPParser.StringLiteral) | (1 << CPPParser.BooleanLiteral) | (1 << CPPParser.PointerLiteral) | (1 << CPPParser.UserDefinedLiteral))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 5:
			return this.nestedNameSpecifier_sempred(_localctx as NestedNameSpecifierContext, predIndex);

		case 15:
			return this.postfixExpression_sempred(_localctx as PostfixExpressionContext, predIndex);

		case 25:
			return this.noPointerNewDeclarator_sempred(_localctx as NoPointerNewDeclaratorContext, predIndex);

		case 115:
			return this.noPointerDeclarator_sempred(_localctx as NoPointerDeclaratorContext, predIndex);

		case 126:
			return this.noPointerAbstractDeclarator_sempred(_localctx as NoPointerAbstractDeclaratorContext, predIndex);

		case 128:
			return this.noPointerAbstractPackDeclarator_sempred(_localctx as NoPointerAbstractPackDeclaratorContext, predIndex);
		}
		return true;
	}
	private nestedNameSpecifier_sempred(_localctx: NestedNameSpecifierContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private postfixExpression_sempred(_localctx: PostfixExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return this.precpred(this._ctx, 7);

		case 2:
			return this.precpred(this._ctx, 6);

		case 3:
			return this.precpred(this._ctx, 4);

		case 4:
			return this.precpred(this._ctx, 3);
		}
		return true;
	}
	private noPointerNewDeclarator_sempred(_localctx: NoPointerNewDeclaratorContext, predIndex: number): boolean {
		switch (predIndex) {
		case 5:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private noPointerDeclarator_sempred(_localctx: NoPointerDeclaratorContext, predIndex: number): boolean {
		switch (predIndex) {
		case 6:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}
	private noPointerAbstractDeclarator_sempred(_localctx: NoPointerAbstractDeclaratorContext, predIndex: number): boolean {
		switch (predIndex) {
		case 7:
			return this.precpred(this._ctx, 4);
		}
		return true;
	}
	private noPointerAbstractPackDeclarator_sempred(_localctx: NoPointerAbstractPackDeclaratorContext, predIndex: number): boolean {
		switch (predIndex) {
		case 8:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 4;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x93\u0840\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
		"\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17" +
		"\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C" +
		"\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04" +
		"#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t" +
		"+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
		"4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04" +
		"X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x04_\t_\x04`\t" +
		"`\x04a\ta\x04b\tb\x04c\tc\x04d\td\x04e\te\x04f\tf\x04g\tg\x04h\th\x04" +
		"i\ti\x04j\tj\x04k\tk\x04l\tl\x04m\tm\x04n\tn\x04o\to\x04p\tp\x04q\tq\x04" +
		"r\tr\x04s\ts\x04t\tt\x04u\tu\x04v\tv\x04w\tw\x04x\tx\x04y\ty\x04z\tz\x04" +
		"{\t{\x04|\t|\x04}\t}\x04~\t~\x04\x7F\t\x7F\x04\x80\t\x80\x04\x81\t\x81" +
		"\x04\x82\t\x82\x04\x83\t\x83\x04\x84\t\x84\x04\x85\t\x85\x04\x86\t\x86" +
		"\x04\x87\t\x87\x04\x88\t\x88\x04\x89\t\x89\x04\x8A\t\x8A\x04\x8B\t\x8B" +
		"\x04\x8C\t\x8C\x04\x8D\t\x8D\x04\x8E\t\x8E\x04\x8F\t\x8F\x04\x90\t\x90" +
		"\x04\x91\t\x91\x04\x92\t\x92\x04\x93\t\x93\x04\x94\t\x94\x04\x95\t\x95" +
		"\x04\x96\t\x96\x04\x97\t\x97\x04\x98\t\x98\x04\x99\t\x99\x04\x9A\t\x9A" +
		"\x04\x9B\t\x9B\x04\x9C\t\x9C\x04\x9D\t\x9D\x04\x9E\t\x9E\x04\x9F\t\x9F" +
		"\x04\xA0\t\xA0\x04\xA1\t\xA1\x04\xA2\t\xA2\x04\xA3\t\xA3\x04\xA4\t\xA4" +
		"\x04\xA5\t\xA5\x04\xA6\t\xA6\x04\xA7\t\xA7\x04\xA8\t\xA8\x04\xA9\t\xA9" +
		"\x04\xAA\t\xAA\x04\xAB\t\xAB\x04\xAC\t\xAC\x04\xAD\t\xAD\x04\xAE\t\xAE" +
		"\x04\xAF\t\xAF\x04\xB0\t\xB0\x04\xB1\t\xB1\x04\xB2\t\xB2\x04\xB3\t\xB3" +
		"\x04\xB4\t\xB4\x04\xB5\t\xB5\x04\xB6\t\xB6\x04\xB7\t\xB7\x04\xB8\t\xB8" +
		"\x04\xB9\t\xB9\x04\xBA\t\xBA\x04\xBB\t\xBB\x04\xBC\t\xBC\x04\xBD\t\xBD" +
		"\x04\xBE\t\xBE\x04\xBF\t\xBF\x04\xC0\t\xC0\x03\x02\x05\x02\u0182\n\x02" +
		"\x03\x02\x03\x02\x03\x03\x06\x03\u0187\n\x03\r\x03\x0E\x03\u0188\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03\u0192\n\x03\x03" +
		"\x04\x03\x04\x05\x04\u0196\n\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x05\x05\u019F\n\x05\x03\x05\x05\x05\u01A2\n\x05\x03\x06" +
		"\x03\x06\x05\x06\u01A6\n\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x05\x07\u01AE\n\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07" +
		"\u01B5\n\x07\x03\x07\x05\x07\u01B8\n\x07\x03\x07\x07\x07\u01BB\n\x07\f" +
		"\x07\x0E\x07\u01BE\v\x07\x03\b\x03\b\x05\b\u01C2\n\b\x03\b\x03\b\x03\t" +
		"\x03\t\x05\t\u01C8\n\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x05\n\u01D0" +
		"\n\n\x05\n\u01D2\n\n\x03\v\x03\v\x03\f\x03\f\x03\f\x07\f\u01D9\n\f\f\f" +
		"\x0E\f\u01DC\v\f\x03\f\x05\f\u01DF\n\f\x03\r\x03\r\x05\r\u01E3\n\r\x03" +
		"\x0E\x05\x0E\u01E6\n\x0E\x03\x0E\x03\x0E\x05\x0E\u01EA\n\x0E\x03\x0F\x05" +
		"\x0F\u01ED\n\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x05\x10\u01F4" +
		"\n\x10\x03\x10\x03\x10\x05\x10\u01F8\n\x10\x03\x10\x05\x10\u01FB\n\x10" +
		"\x03\x10\x05\x10\u01FE\n\x10\x03\x10\x05\x10\u0201\n\x10\x03\x11\x03\x11" +
		"\x03\x11\x03\x11\x05\x11\u0207\n\x11\x03\x11\x03\x11\x05\x11\u020B\n\x11" +
		"\x03\x11\x03\x11\x05\x11\u020F\n\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03" +
		"\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\u021D" +
		"\n\x11\x03\x11\x03\x11\x05\x11\u0221\n\x11\x03\x11\x03\x11\x03\x11\x03" +
		"\x11\x05\x11\u0227\n\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11" +
		"\u022E\n\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\u0234\n\x11\x03\x11" +
		"\x03\x11\x05\x11\u0238\n\x11\x03\x11\x03\x11\x07\x11\u023C\n\x11\f\x11" +
		"\x0E\x11\u023F\v\x11\x03\x12\x03\x12\x03\x13\x03\x13\x03\x14\x05\x14\u0246" +
		"\n\x14\x03\x14\x03\x14\x03\x14\x05\x14\u024B\n\x14\x03\x14\x03\x14\x03" +
		"\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x05" +
		"\x14\u0258\n\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x05\x15\u025F" +
		"\n\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15" +
		"\x03\x15\x03\x15\x05\x15\u026B\n\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03" +
		"\x15\x03\x15\x03\x15\x03\x15\x05\x15\u0275\n\x15\x03\x16\x03\x16\x03\x17" +
		"\x05\x17\u027A\n\x17\x03\x17\x03\x17\x05\x17\u027E\n\x17\x03\x17\x03\x17" +
		"\x03\x17\x03\x17\x03\x17\x05\x17\u0285\n\x17\x03\x17\x05\x17\u0288\n\x17" +
		"\x03\x18\x03\x18\x03\x18\x03\x18\x03\x19\x03\x19\x05\x19\u0290\n\x19\x03" +
		"\x1A\x03\x1A\x05\x1A\u0294\n\x1A\x03\x1A\x05\x1A\u0297\n\x1A\x03\x1B\x03" +
		"\x1B\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u029E\n\x1B\x03\x1B\x03\x1B\x03\x1B" +
		"\x03\x1B\x03\x1B\x05\x1B\u02A5\n\x1B\x07\x1B\u02A7\n\x1B\f\x1B\x0E\x1B" +
		"\u02AA\v\x1B\x03\x1C\x03\x1C\x05\x1C\u02AE\n\x1C\x03\x1C\x03\x1C\x05\x1C" +
		"\u02B2\n\x1C\x03\x1D\x05\x1D\u02B5\n\x1D\x03\x1D\x03\x1D\x03\x1D\x05\x1D" +
		"\u02BA\n\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03" +
		"\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u02C9\n\x1F\x03 " +
		"\x03 \x03 \x07 \u02CE\n \f \x0E \u02D1\v \x03!\x03!\x03!\x07!\u02D6\n" +
		"!\f!\x0E!\u02D9\v!\x03\"\x03\"\x03\"\x07\"\u02DE\n\"\f\"\x0E\"\u02E1\v" +
		"\"\x03#\x03#\x03#\x03#\x07#\u02E7\n#\f#\x0E#\u02EA\v#\x03$\x03$\x03$\x03" +
		"$\x05$\u02F0\n$\x03%\x03%\x03%\x07%\u02F5\n%\f%\x0E%\u02F8\v%\x03&\x03" +
		"&\x03&\x07&\u02FD\n&\f&\x0E&\u0300\v&\x03\'\x03\'\x03\'\x07\'\u0305\n" +
		"\'\f\'\x0E\'\u0308\v\'\x03(\x03(\x03(\x07(\u030D\n(\f(\x0E(\u0310\v(\x03" +
		")\x03)\x03)\x07)\u0315\n)\f)\x0E)\u0318\v)\x03*\x03*\x03*\x07*\u031D\n" +
		"*\f*\x0E*\u0320\v*\x03+\x03+\x03+\x07+\u0325\n+\f+\x0E+\u0328\v+\x03," +
		"\x03,\x03,\x03,\x03,\x03,\x05,\u0330\n,\x03-\x03-\x03-\x03-\x03-\x03-" +
		"\x05-\u0338\n-\x03.\x03.\x03/\x03/\x03/\x07/\u033F\n/\f/\x0E/\u0342\v" +
		"/\x030\x030\x031\x031\x031\x051\u0349\n1\x031\x031\x031\x031\x031\x03" +
		"1\x051\u0351\n1\x051\u0353\n1\x032\x052\u0356\n2\x032\x032\x032\x032\x05" +
		"2\u035C\n2\x032\x032\x032\x033\x053\u0362\n3\x033\x033\x034\x034\x054" +
		"\u0368\n4\x034\x034\x035\x065\u036D\n5\r5\x0E5\u036E\x036\x036\x036\x03" +
		"6\x036\x036\x036\x056\u0378\n6\x036\x036\x036\x036\x036\x036\x056\u0380" +
		"\n6\x037\x037\x057\u0384\n7\x037\x037\x037\x037\x037\x057\u038B\n7\x05" +
		"7\u038D\n7\x038\x038\x038\x038\x038\x038\x038\x038\x038\x038\x038\x03" +
		"8\x038\x038\x038\x038\x038\x038\x058\u03A1\n8\x038\x038\x058\u03A5\n8" +
		"\x038\x038\x038\x038\x058\u03AB\n8\x038\x038\x038\x058\u03B0\n8\x039\x03" +
		"9\x059\u03B4\n9\x03:\x05:\u03B7\n:\x03:\x03:\x03:\x03;\x03;\x05;\u03BE" +
		"\n;\x03<\x03<\x03<\x03<\x03<\x05<\u03C5\n<\x03<\x03<\x05<\u03C9\n<\x03" +
		"<\x03<\x03=\x03=\x03>\x06>\u03D0\n>\r>\x0E>\u03D1\x03?\x03?\x03?\x03?" +
		"\x03?\x03?\x03?\x03?\x03?\x05?\u03DD\n?\x03@\x03@\x03@\x03@\x03@\x03@" +
		"\x03@\x03@\x05@\u03E7\n@\x03A\x03A\x03A\x05A\u03EC\nA\x03A\x03A\x03A\x03" +
		"A\x03B\x05B\u03F3\nB\x03B\x05B\u03F6\nB\x03B\x03B\x03B\x05B\u03FB\nB\x03" +
		"B\x03B\x03B\x05B\u0400\nB\x03C\x03C\x03C\x03C\x03C\x03C\x03C\x03C\x03" +
		"D\x03D\x03E\x03E\x03E\x03F\x03F\x03F\x03F\x03F\x03F\x05F\u0415\nF\x03" +
		"G\x06G\u0418\nG\rG\x0EG\u0419\x03G\x05G\u041D\nG\x03H\x03H\x03I\x03I\x03" +
		"J\x03J\x03K\x03K\x03K\x05K\u0428\nK\x03L\x03L\x03L\x03L\x05L\u042E\nL" +
		"\x03M\x06M\u0431\nM\rM\x0EM\u0432\x03M\x05M\u0436\nM\x03N\x06N\u0439\n" +
		"N\rN\x0EN\u043A\x03N\x05N\u043E\nN\x03O\x03O\x03P\x03P\x03Q\x05Q\u0445" +
		"\nQ\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x05Q\u044E\nQ\x03Q\x06Q\u0451\n" +
		"Q\rQ\x0EQ\u0452\x03Q\x05Q\u0456\nQ\x03Q\x03Q\x05Q\u045A\nQ\x03Q\x03Q\x05" +
		"Q\u045E\nQ\x03Q\x03Q\x05Q\u0462\nQ\x03Q\x03Q\x03Q\x05Q\u0467\nQ\x03Q\x07" +
		"Q\u046A\nQ\fQ\x0EQ\u046D\vQ\x03Q\x03Q\x03Q\x05Q\u0472\nQ\x03Q\x03Q\x03" +
		"Q\x03Q\x05Q\u0478\nQ\x03R\x03R\x03R\x03R\x05R\u047E\nR\x03S\x03S\x03S" +
		"\x03S\x05S\u0484\nS\x03S\x03S\x03T\x03T\x05T\u048A\nT\x03T\x05T\u048D" +
		"\nT\x03T\x03T\x03T\x03T\x05T\u0493\nT\x03T\x03T\x05T\u0497\nT\x03T\x03" +
		"T\x05T\u049B\nT\x03T\x05T\u049E\nT\x03U\x03U\x03V\x03V\x03V\x03V\x05V" +
		"\u04A6\nV\x05V\u04A8\nV\x03V\x03V\x03W\x03W\x05W\u04AE\nW\x03W\x05W\u04B1" +
		"\nW\x03W\x05W\u04B4\nW\x03W\x05W\u04B7\nW\x03X\x03X\x05X\u04BB\nX\x03" +
		"X\x03X\x05X\u04BF\nX\x03X\x03X\x03Y\x03Y\x05Y\u04C5\nY\x03Z\x03Z\x03Z" +
		"\x03[\x03[\x03[\x07[\u04CD\n[\f[\x0E[\u04D0\v[\x03\\\x03\\\x03\\\x05\\" +
		"\u04D5\n\\\x03]\x03]\x03^\x03^\x05^\u04DB\n^\x03_\x03_\x03`\x05`\u04E0" +
		"\n`\x03`\x03`\x03`\x05`\u04E5\n`\x03`\x03`\x05`\u04E9\n`\x03`\x03`\x03" +
		"a\x03a\x03b\x03b\x03b\x03b\x03b\x03b\x03c\x05c\u04F6\nc\x03c\x03c\x03" +
		"d\x03d\x05d\u04FC\nd\x03d\x03d\x05d\u0500\nd\x03d\x03d\x03d\x03e\x05e" +
		"\u0506\ne\x03e\x03e\x03e\x05e\u050B\ne\x03e\x03e\x03e\x03f\x03f\x03f\x03" +
		"f\x03f\x03f\x03g\x03g\x03g\x03g\x05g\u051A\ng\x03g\x03g\x05g\u051E\ng" +
		"\x03h\x06h\u0521\nh\rh\x0Eh\u0522\x03i\x03i\x03i\x05i\u0528\ni\x03i\x03" +
		"i\x03i\x05i\u052D\ni\x03j\x03j\x03j\x03j\x05j\u0533\nj\x03j\x05j\u0536" +
		"\nj\x03j\x03j\x03k\x03k\x03k\x07k\u053D\nk\fk\x0Ek\u0540\vk\x03k\x05k" +
		"\u0543\nk\x03l\x03l\x03l\x05l\u0548\nl\x03l\x03l\x05l\u054C\nl\x03m\x03" +
		"m\x03n\x03n\x05n\u0552\nn\x03n\x03n\x03o\x06o\u0557\no\ro\x0Eo\u0558\x03" +
		"p\x03p\x03p\x03p\x03p\x03p\x03p\x03p\x03p\x03p\x03p\x03p\x03p\x06p\u0568" +
		"\np\rp\x0Ep\u0569\x05p\u056C\np\x03q\x03q\x03q\x07q\u0571\nq\fq\x0Eq\u0574" +
		"\vq\x03r\x03r\x05r\u0578\nr\x03s\x03s\x03s\x03s\x03s\x05s\u057F\ns\x03" +
		"t\x03t\x05t\u0583\nt\x07t\u0585\nt\ft\x0Et\u0588\vt\x03t\x03t\x03u\x03" +
		"u\x03u\x05u\u058F\nu\x03u\x03u\x03u\x03u\x05u\u0595\nu\x03u\x03u\x03u" +
		"\x03u\x05u\u059B\nu\x03u\x03u\x05u\u059F\nu\x05u\u05A1\nu\x07u\u05A3\n" +
		"u\fu\x0Eu\u05A6\vu\x03v\x03v\x05v\u05AA\nv\x03v\x03v\x05v\u05AE\nv\x03" +
		"v\x05v\u05B1\nv\x03v\x05v\u05B4\nv\x03v\x05v\u05B7\nv\x03w\x03w\x03w\x05" +
		"w\u05BC\nw\x03x\x03x\x05x\u05C0\nx\x03x\x05x\u05C3\nx\x03x\x03x\x05x\u05C7" +
		"\nx\x03x\x05x\u05CA\nx\x05x\u05CC\nx\x03y\x06y\u05CF\ny\ry\x0Ey\u05D0" +
		"\x03z\x03z\x03{\x03{\x03|\x05|\u05D8\n|\x03|\x03|\x03}\x03}\x05}\u05DE" +
		"\n}\x03~\x03~\x05~\u05E2\n~\x03~\x03~\x03~\x03~\x05~\u05E8\n~\x03\x7F" +
		"\x03\x7F\x06\x7F\u05EC\n\x7F\r\x7F\x0E\x7F\u05ED\x03\x7F\x05\x7F\u05F1" +
		"\n\x7F\x05\x7F\u05F3\n\x7F\x03\x80\x03\x80\x03\x80\x03\x80\x05\x80\u05F9" +
		"\n\x80\x03\x80\x03\x80\x05\x80\u05FD\n\x80\x03\x80\x03\x80\x03\x80\x03" +
		"\x80\x05\x80\u0603\n\x80\x03\x80\x03\x80\x03\x80\x03\x80\x03\x80\x05\x80" +
		"\u060A\n\x80\x03\x80\x03\x80\x05\x80\u060E\n\x80\x05\x80\u0610\n\x80\x07" +
		"\x80\u0612\n\x80\f\x80\x0E\x80\u0615\v\x80\x03\x81\x07\x81\u0618\n\x81" +
		"\f\x81\x0E\x81\u061B\v\x81\x03\x81\x03\x81\x03\x82\x03\x82\x03\x82\x03" +
		"\x82\x03\x82\x03\x82\x03\x82\x05\x82\u0626\n\x82\x03\x82\x03\x82\x05\x82" +
		"\u062A\n\x82\x05\x82\u062C\n\x82\x07\x82\u062E\n\x82\f\x82\x0E\x82\u0631" +
		"\v\x82\x03\x83\x03\x83\x05\x83\u0635\n\x83\x03\x83\x05\x83\u0638\n\x83" +
		"\x03\x84\x03\x84\x03\x84\x07\x84\u063D\n\x84\f\x84\x0E\x84\u0640\v\x84" +
		"\x03\x85\x05\x85\u0643\n\x85\x03\x85\x03\x85\x03\x85\x05\x85\u0648\n\x85" +
		"\x05\x85\u064A\n\x85\x03\x85\x03\x85\x05\x85\u064E\n\x85\x03\x86\x05\x86" +
		"\u0651\n\x86\x03\x86\x05\x86\u0654\n\x86\x03\x86\x03\x86\x05\x86\u0658" +
		"\n\x86\x03\x86\x03\x86\x03\x87\x05\x87\u065D\n\x87\x03\x87\x03\x87\x03" +
		"\x87\x03\x87\x03\x87\x05\x87\u0664\n\x87\x03\x88\x03\x88\x03\x88\x03\x88" +
		"\x03\x88\x05\x88\u066B\n\x88\x03\x89\x03\x89\x03\x89\x05\x89\u0670\n\x89" +
		"\x03\x8A\x03\x8A\x05\x8A\u0674\n\x8A\x03\x8B\x03\x8B\x05\x8B\u0678\n\x8B" +
		"\x03\x8B\x03\x8B\x03\x8B\x05\x8B\u067D\n\x8B\x07\x8B\u067F\n\x8B\f\x8B" +
		"\x0E\x8B\u0682\v\x8B\x03\x8C\x03\x8C\x03\x8C\x05\x8C\u0687\n\x8C\x05\x8C" +
		"\u0689\n\x8C\x03\x8C\x03\x8C\x03\x8D\x03\x8D\x05\x8D\u068F\n\x8D\x03\x8E" +
		"\x03\x8E\x03\x8E\x05\x8E\u0694\n\x8E\x03\x8E\x03\x8E\x03\x8F\x03\x8F\x05" +
		"\x8F\u069A\n\x8F\x03\x8F\x03\x8F\x05\x8F\u069E\n\x8F\x05\x8F\u06A0\n\x8F" +
		"\x03\x8F\x05\x8F\u06A3\n\x8F\x03\x8F\x03\x8F\x05\x8F\u06A7\n\x8F\x03\x8F" +
		"\x03\x8F\x05\x8F\u06AB\n\x8F\x05\x8F\u06AD\n\x8F\x05\x8F\u06AF\n\x8F\x03" +
		"\x90\x05\x90\u06B2\n\x90\x03\x90\x03\x90\x03\x91\x03\x91\x03\x92\x03\x92" +
		"\x03\x93\x03\x93\x03\x93\x03\x93\x06\x93\u06BE\n\x93\r\x93\x0E\x93\u06BF" +
		"\x03\x94\x05\x94\u06C3\n\x94\x03\x94\x05\x94\u06C6\n\x94\x03\x94\x05\x94" +
		"\u06C9\n\x94\x03\x94\x03\x94\x03\x94\x03\x94\x03\x94\x03\x94\x03\x94\x05" +
		"\x94\u06D2\n\x94\x03\x95\x03\x95\x03\x95\x07\x95\u06D7\n\x95\f\x95\x0E" +
		"\x95\u06DA\v\x95\x03\x96\x03\x96\x05\x96\u06DE\n\x96\x03\x96\x05\x96\u06E1" +
		"\n\x96\x03\x96\x05\x96\u06E4\n\x96\x05\x96\u06E6\n\x96\x03\x96\x05\x96" +
		"\u06E9\n\x96\x03\x96\x05\x96\u06EC\n\x96\x03\x96\x03\x96\x05\x96\u06F0" +
		"\n\x96\x03\x97\x06\x97\u06F3\n\x97\r\x97\x0E\x97\u06F4\x03\x98\x03\x98" +
		"\x03\x99\x03\x99\x03\x99\x03\x99\x03\x9A\x03\x9A\x03\x9A\x03\x9B\x03\x9B" +
		"\x05\x9B\u0702\n\x9B\x03\x9B\x03\x9B\x03\x9B\x05\x9B\u0707\n\x9B\x07\x9B" +
		"\u0709\n\x9B\f\x9B\x0E\x9B\u070C\v\x9B\x03\x9C\x05\x9C\u070F\n\x9C\x03" +
		"\x9C\x03\x9C\x03\x9C\x05\x9C\u0714\n\x9C\x03\x9C\x03\x9C\x03\x9C\x05\x9C" +
		"\u0719\n\x9C\x03\x9C\x03\x9C\x05\x9C\u071D\n\x9C\x03\x9D\x05\x9D\u0720" +
		"\n\x9D\x03\x9D\x03\x9D\x05\x9D\u0724\n\x9D\x03\x9E\x03\x9E\x03\x9F\x03" +
		"\x9F\x03\xA0\x03\xA0\x03\xA0\x03\xA1\x03\xA1\x05\xA1\u072F\n\xA1\x03\xA2" +
		"\x03\xA2\x05\xA2\u0733\n\xA2\x03\xA3\x03\xA3\x03\xA3\x03\xA4\x03\xA4\x05" +
		"\xA4\u073A\n\xA4\x03\xA4\x03\xA4\x03\xA4\x05\xA4\u073F\n\xA4\x07\xA4\u0741" +
		"\n\xA4\f\xA4\x0E\xA4\u0744\v\xA4\x03\xA5\x03\xA5\x03\xA5\x05\xA5\u0749" +
		"\n\xA5\x03\xA5\x03\xA5\x05\xA5\u074D\n\xA5\x03\xA6\x03\xA6\x05\xA6\u0751" +
		"\n\xA6\x03\xA7\x03\xA7\x03\xA7\x03\xA8\x03\xA8\x03\xA8\x03\xA8\x05\xA8" +
		"\u075A\n\xA8\x03\xA9\x03\xA9\x03\xA9\x03\xA9\x03\xA9\x03\xA9\x03\xAA\x03" +
		"\xAA\x03\xAA\x07\xAA\u0765\n\xAA\f\xAA\x0E\xAA\u0768\v\xAA\x03\xAB\x03" +
		"\xAB\x05\xAB\u076C\n\xAB\x03\xAC\x03\xAC\x03\xAC\x03\xAC\x03\xAC\x05\xAC" +
		"\u0773\n\xAC\x03\xAC\x03\xAC\x05\xAC\u0777\n\xAC\x03\xAC\x05\xAC\u077A" +
		"\n\xAC\x03\xAC\x05\xAC\u077D\n\xAC\x03\xAC\x05\xAC\u0780\n\xAC\x03\xAC" +
		"\x03\xAC\x05\xAC\u0784\n\xAC\x03\xAD\x03\xAD\x03\xAD\x05\xAD\u0789\n\xAD" +
		"\x03\xAD\x03\xAD\x03\xAE\x03\xAE\x03\xAE\x05\xAE\u0790\n\xAE\x03\xAE\x03" +
		"\xAE\x05\xAE\u0794\n\xAE\x03\xAE\x03\xAE\x05\xAE\u0798\n\xAE\x03\xAF\x03" +
		"\xAF\x03\xB0\x03\xB0\x05\xB0\u079E\n\xB0\x03\xB0\x03\xB0\x03\xB0\x05\xB0" +
		"\u07A3\n\xB0\x07\xB0\u07A5\n\xB0\f\xB0\x0E\xB0\u07A8\v\xB0\x03\xB1\x03" +
		"\xB1\x03\xB1\x05\xB1\u07AD\n\xB1\x03\xB2\x03\xB2\x03\xB2\x03\xB2\x05\xB2" +
		"\u07B3\n\xB2\x03\xB2\x05\xB2\u07B6\n\xB2\x03\xB3\x05\xB3\u07B9\n\xB3\x03" +
		"\xB3\x03\xB3\x03\xB3\x03\xB4\x03\xB4\x03\xB4\x03\xB4\x03\xB4\x03\xB5\x03" +
		"\xB5\x03\xB5\x03\xB5\x03\xB6\x03\xB6\x05\xB6\u07C9\n\xB6\x03\xB6\x03\xB6" +
		"\x03\xB6\x03\xB7\x06\xB7\u07CF\n\xB7\r\xB7\x0E\xB7\u07D0\x03\xB8\x03\xB8" +
		"\x03\xB8\x03\xB8\x03\xB8\x03\xB8\x03\xB9\x05\xB9\u07DA\n\xB9\x03\xB9\x03" +
		"\xB9\x03\xB9\x05\xB9\u07DF\n\xB9\x03\xB9\x05\xB9\u07E2\n\xB9\x03\xBA\x03" +
		"\xBA\x05\xBA\u07E6\n\xBA\x03\xBB\x03\xBB\x05\xBB\u07EA\n\xBB\x03\xBC\x03" +
		"\xBC\x03\xBC\x05\xBC\u07EF\n\xBC\x03\xBC\x03\xBC\x03\xBD\x03\xBD\x05\xBD" +
		"\u07F5\n\xBD\x03\xBD\x03\xBD\x03\xBD\x05\xBD\u07FA\n\xBD\x07\xBD\u07FC" +
		"\n\xBD\f\xBD\x0E\xBD\u07FF\v\xBD\x03\xBE\x03\xBE\x03\xBE\x03\xBE\x03\xBE" +
		"\x03\xBE\x05\xBE\u0807\n\xBE\x03\xBF\x03\xBF\x03\xBF\x05\xBF\u080C\n\xBF" +
		"\x03\xBF\x03\xBF\x03\xBF\x05\xBF\u0811\n\xBF\x03\xBF\x03\xBF\x03\xBF\x03" +
		"\xBF\x03\xBF\x03\xBF\x03\xBF\x03\xBF\x03\xBF\x03\xBF\x03\xBF\x03\xBF\x03" +
		"\xBF\x03\xBF\x03\xBF\x03\xBF\x03\xBF\x03\xBF\x03\xBF\x03\xBF\x03\xBF\x03" +
		"\xBF\x03\xBF\x03\xBF\x03\xBF\x03\xBF\x03\xBF\x03\xBF\x03\xBF\x03\xBF\x03" +
		"\xBF\x03\xBF\x03\xBF\x03\xBF\x03\xBF\x03\xBF\x03\xBF\x03\xBF\x03\xBF\x03" +
		"\xBF\x03\xBF\x05\xBF\u083C\n\xBF\x03\xC0\x03\xC0\x03\xC0\x03\u0419\x02" +
		"\b\f 4\xE8\xFE\u0102\xC1\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E" +
		"\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 " +
		"\x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02" +
		"<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02" +
		"X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02" +
		"t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02" +
		"\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02" +
		"\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02" +
		"\xAE\x02\xB0\x02\xB2\x02\xB4\x02\xB6\x02\xB8\x02\xBA\x02\xBC\x02\xBE\x02" +
		"\xC0\x02\xC2\x02\xC4\x02\xC6\x02\xC8\x02\xCA\x02\xCC\x02\xCE\x02\xD0\x02" +
		"\xD2\x02\xD4\x02\xD6\x02\xD8\x02\xDA\x02\xDC\x02\xDE\x02\xE0\x02\xE2\x02" +
		"\xE4\x02\xE6\x02\xE8\x02\xEA\x02\xEC\x02\xEE\x02\xF0\x02\xF2\x02\xF4\x02" +
		"\xF6\x02\xF8\x02\xFA\x02\xFC\x02\xFE\x02\u0100\x02\u0102\x02\u0104\x02" +
		"\u0106\x02\u0108\x02\u010A\x02\u010C\x02\u010E\x02\u0110\x02\u0112\x02" +
		"\u0114\x02\u0116\x02\u0118\x02\u011A\x02\u011C\x02\u011E\x02\u0120\x02" +
		"\u0122\x02\u0124\x02\u0126\x02\u0128\x02\u012A\x02\u012C\x02\u012E\x02" +
		"\u0130\x02\u0132\x02\u0134\x02\u0136\x02\u0138\x02\u013A\x02\u013C\x02" +
		"\u013E\x02\u0140\x02\u0142\x02\u0144\x02\u0146\x02\u0148\x02\u014A\x02" +
		"\u014C\x02\u014E\x02\u0150\x02\u0152\x02\u0154\x02\u0156\x02\u0158\x02" +
		"\u015A\x02\u015C\x02\u015E\x02\u0160\x02\u0162\x02\u0164\x02\u0166\x02" +
		"\u0168\x02\u016A\x02\u016C\x02\u016E\x02\u0170\x02\u0172\x02\u0174\x02" +
		"\u0176\x02\u0178\x02\u017A\x02\u017C\x02\u017E\x02\x02\x19\x04\x02ccg" +
		"g\x06\x02\x1A\x1A!!<<CC\x04\x02~~\x83";
	private static readonly _serializedATNSegment1: string =
		"\x83\x03\x02z{\x04\x02]_cf\x04\x02}}\x84\x84\x03\x02_a\x03\x02]^\x04\x02" +
		"hivw\x03\x02tu\x04\x02ggjs\x07\x02&&11;;AAHH\x05\x02$$..RR\x04\x0200>" +
		">\x04\x02??PP\x04\x02\x17\x17DD\x03\x02W\\\x04\x02ccxx\x04\x02\x18\x18" +
		"TT\x03\x02\x1D\x1E\x04\x02((77\x03\x028:\x03\x02\x03\t\x02\u0929\x02\u0181" +
		"\x03\x02\x02\x02\x04\u0191\x03\x02\x02\x02\x06\u0195\x03\x02\x02\x02\b" +
		"\u01A1\x03\x02\x02\x02\n\u01A3\x03\x02\x02\x02\f\u01A9\x03\x02\x02\x02" +
		"\x0E\u01BF\x03\x02\x02\x02\x10\u01C5\x03\x02\x02\x02\x12\u01D1\x03\x02" +
		"\x02\x02\x14\u01D3\x03\x02\x02\x02\x16\u01D5\x03\x02\x02\x02\x18\u01E2" +
		"\x03\x02\x02\x02\x1A\u01E9\x03\x02\x02\x02\x1C\u01EC\x03\x02\x02\x02\x1E" +
		"\u01F1\x03\x02\x02\x02 \u0220\x03\x02\x02\x02\"\u0240\x03\x02\x02\x02" +
		"$\u0242\x03\x02\x02\x02&\u0257\x03\x02\x02\x02(\u0274\x03\x02\x02\x02" +
		"*\u0276\x03\x02\x02\x02,\u0279\x03\x02\x02\x02.\u0289\x03\x02\x02\x02" +
		"0\u028D\x03\x02\x02\x022\u0296\x03\x02\x02\x024\u0298\x03\x02\x02\x02" +
		"6\u02B1\x03\x02\x02\x028\u02B4\x03\x02\x02\x02:\u02BD\x03\x02\x02\x02" +
		"<\u02C8\x03\x02\x02\x02>\u02CA\x03\x02\x02\x02@\u02D2\x03\x02\x02\x02" +
		"B\u02DA\x03\x02\x02\x02D\u02E2\x03\x02\x02\x02F\u02EF\x03\x02\x02\x02" +
		"H\u02F1\x03\x02\x02\x02J\u02F9\x03\x02\x02\x02L\u0301\x03\x02\x02\x02" +
		"N\u0309\x03\x02\x02\x02P\u0311\x03\x02\x02\x02R\u0319\x03\x02\x02\x02" +
		"T\u0321\x03\x02\x02\x02V\u0329\x03\x02\x02\x02X\u0337\x03\x02\x02\x02" +
		"Z\u0339\x03\x02\x02\x02\\\u033B\x03\x02\x02\x02^\u0343\x03\x02\x02\x02" +
		"`\u0352\x03\x02\x02\x02b\u0355\x03\x02\x02\x02d\u0361\x03\x02\x02\x02" +
		"f\u0365\x03\x02\x02\x02h\u036C\x03\x02\x02\x02j\u037F\x03\x02\x02\x02" +
		"l\u038C\x03\x02\x02\x02n\u03AF\x03\x02\x02\x02p\u03B3\x03\x02\x02\x02" +
		"r\u03B6\x03\x02\x02\x02t\u03BD\x03\x02\x02\x02v\u03C8\x03\x02\x02\x02" +
		"x\u03CC\x03\x02\x02\x02z\u03CF\x03\x02\x02\x02|\u03DC\x03\x02\x02\x02" +
		"~\u03E6\x03\x02\x02\x02\x80\u03E8\x03\x02\x02\x02\x82\u03FF\x03\x02\x02" +
		"\x02\x84\u0401\x03\x02\x02\x02\x86\u0409\x03\x02\x02\x02\x88\u040B\x03" +
		"\x02\x02\x02\x8A\u0414\x03\x02\x02\x02\x8C\u0417\x03\x02\x02\x02\x8E\u041E" +
		"\x03\x02\x02\x02\x90\u0420\x03\x02\x02\x02\x92\u0422\x03\x02\x02\x02\x94" +
		"\u0427\x03\x02\x02\x02\x96\u042D\x03\x02\x02\x02\x98\u0430\x03\x02\x02" +
		"\x02\x9A\u0438\x03\x02\x02\x02\x9C\u043F\x03\x02\x02\x02\x9E\u0441\x03" +
		"\x02\x02\x02\xA0\u0477\x03\x02\x02\x02\xA2\u047D\x03\x02\x02\x02\xA4\u047F" +
		"\x03\x02\x02\x02\xA6\u049D\x03\x02\x02\x02\xA8\u049F\x03\x02\x02\x02\xAA" +
		"\u04A1\x03\x02\x02\x02\xAC\u04AB\x03\x02\x02\x02\xAE\u04B8\x03\x02\x02" +
		"\x02\xB0\u04C2\x03\x02\x02\x02\xB2\u04C6\x03\x02\x02\x02\xB4\u04C9\x03" +
		"\x02\x02\x02\xB6\u04D1\x03\x02\x02\x02\xB8\u04D6\x03\x02\x02\x02\xBA\u04DA" +
		"\x03\x02\x02\x02\xBC\u04DC\x03\x02\x02\x02\xBE\u04DF\x03\x02\x02\x02\xC0" +
		"\u04EC\x03\x02\x02\x02\xC2\u04EE\x03\x02\x02\x02\xC4\u04F5\x03\x02\x02" +
		"\x02\xC6\u04F9\x03\x02\x02\x02\xC8\u0505\x03\x02\x02\x02\xCA\u050F\x03" +
		"\x02\x02\x02\xCC\u0515\x03\x02\x02\x02\xCE\u0520\x03\x02\x02\x02\xD0\u052C" +
		"\x03\x02\x02\x02\xD2\u052E\x03\x02\x02\x02\xD4\u0539\x03\x02\x02\x02\xD6" +
		"\u0547\x03\x02\x02\x02\xD8\u054D\x03\x02\x02\x02\xDA\u054F\x03\x02\x02" +
		"\x02\xDC\u0556\x03\x02\x02\x02\xDE\u056B\x03\x02\x02\x02\xE0\u056D\x03" +
		"\x02\x02\x02\xE2\u0575\x03\x02\x02\x02\xE4\u057E\x03\x02\x02\x02\xE6\u0586" +
		"\x03\x02\x02\x02\xE8\u0594\x03\x02\x02\x02\xEA\u05A7\x03\x02\x02\x02\xEC" +
		"\u05B8\x03\x02\x02\x02\xEE\u05CB\x03\x02\x02\x02\xF0\u05CE\x03\x02\x02" +
		"\x02\xF2\u05D2\x03\x02\x02\x02\xF4\u05D4\x03\x02\x02\x02\xF6\u05D7\x03" +
		"\x02\x02\x02\xF8\u05DB\x03\x02\x02\x02\xFA\u05E7\x03\x02\x02\x02\xFC\u05F2" +
		"\x03\x02\x02\x02\xFE\u0602\x03\x02\x02\x02\u0100\u0619\x03\x02\x02\x02" +
		"\u0102\u061E\x03\x02\x02\x02\u0104\u0632\x03\x02\x02\x02\u0106\u0639\x03" +
		"\x02\x02\x02\u0108\u0642\x03\x02\x02\x02\u010A\u0650\x03\x02\x02\x02\u010C" +
		"\u0663\x03\x02\x02\x02\u010E\u066A\x03\x02\x02\x02\u0110\u066F\x03\x02" +
		"\x02\x02\u0112\u0673\x03\x02\x02\x02\u0114\u0675\x03\x02\x02\x02\u0116" +
		"\u0683\x03\x02\x02\x02\u0118\u068E\x03\x02\x02\x02\u011A\u0690\x03\x02" +
		"\x02\x02\u011C\u06AE\x03\x02\x02\x02\u011E\u06B1\x03\x02\x02\x02\u0120" +
		"\u06B5\x03\x02\x02\x02\u0122\u06B7\x03\x02\x02\x02\u0124\u06BD\x03\x02" +
		"\x02\x02\u0126\u06D1\x03\x02\x02\x02\u0128\u06D3\x03\x02\x02\x02\u012A" +
		"\u06EF\x03\x02\x02\x02\u012C\u06F2\x03\x02\x02\x02\u012E\u06F6\x03\x02" +
		"\x02\x02\u0130\u06F8\x03\x02\x02\x02\u0132\u06FC\x03\x02\x02\x02\u0134" +
		"\u06FF\x03\x02\x02\x02\u0136\u070E\x03\x02\x02\x02\u0138\u0723\x03\x02" +
		"\x02\x02\u013A\u0725\x03\x02\x02\x02\u013C\u0727\x03\x02\x02\x02\u013E" +
		"\u0729\x03\x02\x02\x02\u0140\u072C\x03\x02\x02\x02\u0142\u0730\x03\x02" +
		"\x02\x02\u0144\u0734\x03\x02\x02\x02\u0146\u0737\x03\x02\x02\x02\u0148" +
		"\u0745\x03\x02\x02\x02\u014A\u0750\x03\x02\x02\x02\u014C\u0752\x03\x02" +
		"\x02\x02\u014E\u0755\x03\x02\x02\x02\u0150\u075B\x03\x02\x02\x02\u0152" +
		"\u0761\x03\x02\x02\x02\u0154\u076B\x03\x02\x02\x02\u0156\u0776\x03\x02" +
		"\x02\x02\u0158\u0785\x03\x02\x02\x02\u015A\u0797\x03\x02\x02\x02\u015C" +
		"\u0799\x03\x02\x02\x02\u015E\u079B\x03\x02\x02\x02\u0160\u07AC\x03\x02" +
		"\x02\x02\u0162\u07AE\x03\x02\x02\x02\u0164\u07B8\x03\x02\x02\x02\u0166" +
		"\u07BD\x03\x02\x02\x02\u0168\u07C2\x03\x02\x02\x02\u016A\u07C6\x03\x02" +
		"\x02\x02\u016C\u07CE\x03\x02\x02\x02\u016E\u07D2\x03\x02\x02\x02\u0170" +
		"\u07E1\x03\x02\x02\x02\u0172\u07E3\x03\x02\x02\x02\u0174\u07E9\x03\x02" +
		"\x02\x02\u0176\u07EB\x03\x02\x02\x02\u0178\u07F2\x03\x02\x02\x02\u017A" +
		"\u0806\x03\x02\x02\x02\u017C\u083B\x03\x02\x02\x02\u017E\u083D\x03\x02" +
		"\x02\x02\u0180\u0182\x05z>\x02\u0181\u0180\x03\x02\x02\x02\u0181\u0182" +
		"\x03\x02\x02\x02\u0182\u0183\x03\x02\x02\x02\u0183\u0184\x07\x02\x02\x03" +
		"\u0184\x03\x03\x02\x02\x02\u0185\u0187\x05\u017E\xC0\x02\u0186\u0185\x03" +
		"\x02\x02\x02\u0187\u0188\x03\x02\x02\x02\u0188\u0186\x03\x02\x02\x02\u0188" +
		"\u0189\x03\x02\x02\x02\u0189\u0192\x03\x02\x02\x02\u018A\u0192\x07G\x02" +
		"\x02\u018B\u018C\x07W\x02\x02\u018C\u018D\x05\\/\x02\u018D\u018E\x07X" +
		"\x02\x02\u018E\u0192\x03\x02\x02\x02\u018F\u0192\x05\x06\x04\x02\u0190" +
		"\u0192\x05\x0E\b\x02\u0191\u0186\x03\x02\x02\x02\u0191\u018A\x03\x02\x02" +
		"\x02\u0191\u018B\x03\x02\x02\x02\u0191\u018F\x03\x02\x02\x02\u0191\u0190" +
		"\x03\x02\x02\x02\u0192\x05\x03\x02\x02\x02\u0193\u0196\x05\b\x05\x02\u0194" +
		"\u0196\x05\n\x06\x02\u0195\u0193\x03\x02\x02\x02\u0195\u0194\x03\x02\x02" +
		"\x02\u0196\x07\x03\x02\x02\x02\u0197\u01A2\x07\x86\x02\x02\u0198\u01A2" +
		"\x05\u014C\xA7\x02\u0199\u01A2\x05\u013E\xA0\x02\u019A\u01A2\x05\u014E" +
		"\xA8\x02\u019B\u019E\x07e\x02\x02\u019C\u019F\x05\u0118\x8D\x02\u019D" +
		"\u019F\x05\xA4S\x02\u019E\u019C\x03\x02\x02\x02\u019E\u019D\x03\x02\x02" +
		"\x02\u019F\u01A2\x03\x02\x02\x02\u01A0\u01A2\x05\u015A\xAE\x02\u01A1\u0197" +
		"\x03\x02\x02\x02\u01A1\u0198\x03\x02\x02\x02\u01A1\u0199\x03\x02\x02\x02" +
		"\u01A1\u019A\x03\x02\x02\x02\u01A1\u019B\x03\x02\x02\x02\u01A1\u01A0\x03" +
		"\x02\x02\x02\u01A2\t\x03\x02\x02\x02\u01A3\u01A5\x05\f\x07\x02\u01A4\u01A6" +
		"\x07F\x02\x02\u01A5\u01A4\x03\x02\x02\x02\u01A5\u01A6\x03\x02\x02\x02" +
		"\u01A6\u01A7\x03\x02\x02\x02\u01A7\u01A8\x05\b\x05\x02\u01A8\v\x03\x02" +
		"\x02\x02\u01A9\u01AD\b\x07\x01\x02\u01AA\u01AE\x05\xA2R\x02\u01AB\u01AE" +
		"\x05\xBA^\x02\u01AC\u01AE\x05\xA4S\x02\u01AD\u01AA\x03\x02\x02\x02\u01AD" +
		"\u01AB\x03\x02\x02\x02\u01AD\u01AC\x03\x02\x02\x02\u01AD\u01AE\x03\x02" +
		"\x02\x02\u01AE\u01AF\x03\x02\x02\x02\u01AF\u01B0\x07\x81\x02\x02\u01B0" +
		"\u01BC\x03\x02\x02\x02\u01B1\u01B7\f\x03\x02\x02\u01B2\u01B8\x07\x86\x02" +
		"\x02\u01B3\u01B5\x07F\x02\x02\u01B4\u01B3\x03\x02\x02\x02\u01B4\u01B5" +
		"\x03\x02\x02\x02\u01B5\u01B6\x03\x02\x02\x02\u01B6\u01B8\x05\u0158\xAD" +
		"\x02\u01B7\u01B2\x03\x02\x02\x02\u01B7\u01B4\x03\x02\x02\x02\u01B8\u01B9" +
		"\x03\x02\x02\x02\u01B9\u01BB\x07\x81\x02\x02\u01BA\u01B1\x03\x02\x02\x02" +
		"\u01BB\u01BE\x03\x02\x02\x02\u01BC\u01BA\x03\x02\x02\x02\u01BC\u01BD\x03" +
		"\x02\x02\x02\u01BD\r\x03\x02\x02\x02\u01BE\u01BC\x03\x02\x02\x02\u01BF" +
		"\u01C1\x05\x10\t\x02\u01C0\u01C2\x05\x1E\x10\x02\u01C1\u01C0\x03\x02\x02" +
		"\x02\u01C1\u01C2\x03\x02\x02\x02\u01C2\u01C3\x03\x02\x02\x02\u01C3\u01C4" +
		"\x05f4\x02\u01C4\x0F\x03\x02\x02\x02\u01C5\u01C7\x07Y\x02\x02\u01C6\u01C8" +
		"\x05\x12\n\x02\u01C7\u01C6\x03\x02\x02\x02\u01C7\u01C8\x03\x02\x02\x02" +
		"\u01C8\u01C9\x03\x02\x02\x02\u01C9\u01CA\x07Z\x02\x02\u01CA\x11\x03\x02" +
		"\x02\x02\u01CB\u01D2\x05\x16\f\x02\u01CC\u01CF\x05\x14\v\x02\u01CD\u01CE" +
		"\x07|\x02\x02\u01CE\u01D0\x05\x16\f\x02\u01CF\u01CD\x03\x02\x02\x02\u01CF" +
		"\u01D0\x03\x02\x02\x02\u01D0\u01D2\x03\x02\x02\x02\u01D1\u01CB\x03\x02" +
		"\x02\x02\u01D1\u01CC\x03\x02\x02\x02\u01D2\x13\x03\x02\x02\x02\u01D3\u01D4" +
		"\t\x02\x02\x02\u01D4\x15\x03\x02\x02\x02\u01D5\u01DA\x05\x18\r\x02\u01D6" +
		"\u01D7\x07|\x02\x02\u01D7\u01D9\x05\x18\r\x02\u01D8\u01D6\x03\x02\x02" +
		"\x02\u01D9\u01DC\x03\x02\x02\x02\u01DA\u01D8\x03\x02\x02\x02\u01DA\u01DB" +
		"\x03\x02\x02\x02\u01DB\u01DE\x03\x02\x02\x02\u01DC\u01DA\x03\x02\x02\x02" +
		"\u01DD\u01DF\x07\x85\x02\x02\u01DE\u01DD\x03\x02\x02\x02\u01DE\u01DF\x03" +
		"\x02\x02\x02\u01DF\x17\x03\x02\x02\x02\u01E0\u01E3\x05\x1A\x0E\x02\u01E1" +
		"\u01E3\x05\x1C\x0F\x02\u01E2\u01E0\x03\x02\x02\x02\u01E2\u01E1\x03\x02" +
		"\x02\x02\u01E3\x19\x03\x02\x02\x02\u01E4\u01E6\x07c\x02\x02\u01E5\u01E4" +
		"\x03\x02\x02\x02\u01E5\u01E6\x03\x02\x02\x02\u01E6\u01E7\x03\x02\x02\x02" +
		"\u01E7\u01EA\x07\x86\x02\x02\u01E8\u01EA\x07G\x02\x02\u01E9\u01E5\x03" +
		"\x02\x02\x02\u01E9\u01E8\x03\x02\x02\x02\u01EA\x1B\x03\x02\x02\x02\u01EB" +
		"\u01ED\x07c\x02\x02\u01EC\u01EB\x03\x02\x02\x02\u01EC\u01ED\x03\x02\x02" +
		"\x02\u01ED\u01EE\x03\x02\x02\x02\u01EE\u01EF\x07\x86\x02\x02\u01EF\u01F0" +
		"\x05\u010E\x88\x02\u01F0\x1D\x03\x02\x02\x02\u01F1\u01F3\x07W\x02\x02" +
		"\u01F2\u01F4\x05\u0104\x83\x02\u01F3\u01F2\x03\x02\x02\x02\u01F3\u01F4" +
		"\x03\x02\x02\x02\u01F4\u01F5\x03\x02\x02\x02\u01F5\u01F7\x07X\x02\x02" +
		"\u01F6\u01F8\x071\x02\x02\u01F7\u01F6\x03\x02\x02\x02\u01F7\u01F8\x03" +
		"\x02\x02\x02\u01F8\u01FA\x03\x02\x02\x02\u01F9\u01FB\x05\u0174\xBB\x02" +
		"\u01FA\u01F9\x03\x02\x02\x02\u01FA\u01FB\x03\x02\x02\x02\u01FB\u01FD\x03" +
		"\x02\x02\x02\u01FC\u01FE\x05\xCEh\x02\u01FD\u01FC\x03\x02\x02\x02\u01FD" +
		"\u01FE\x03\x02\x02\x02\u01FE\u0200\x03\x02\x02\x02\u01FF\u0201\x05\xEC" +
		"w\x02\u0200\u01FF\x03\x02\x02\x02\u0200\u0201\x03\x02\x02\x02\u0201\x1F" +
		"\x03\x02\x02\x02\u0202\u0203\b\x11\x01\x02\u0203\u0221\x05\x04\x03\x02" +
		"\u0204\u0207\x05\xA0Q\x02\u0205\u0207\x05\u0162\xB2\x02\u0206\u0204\x03" +
		"\x02\x02\x02\u0206\u0205\x03\x02\x02\x02\u0207\u020E\x03\x02\x02\x02\u0208" +
		"\u020A\x07W\x02\x02\u0209\u020B\x05$\x13\x02\u020A\u0209\x03\x02\x02\x02" +
		"\u020A\u020B\x03\x02\x02\x02\u020B\u020C\x03\x02\x02\x02\u020C\u020F\x07" +
		"X\x02\x02\u020D\u020F\x05\u0116\x8C\x02\u020E\u0208\x03\x02\x02\x02\u020E" +
		"\u020D\x03\x02\x02\x02\u020F\u0221\x03\x02\x02\x02\u0210\u0211\t\x03\x02" +
		"\x02\u0211\u0212\x07h\x02\x02\u0212\u0213\x05\xF8}\x02\u0213\u0214\x07" +
		"i\x02\x02\u0214\u0215\x07W\x02\x02\u0215\u0216\x05\\/\x02\u0216\u0217" +
		"\x07X\x02\x02\u0217\u0221\x03\x02\x02\x02\u0218\u0219\x05\"\x12\x02\u0219" +
		"\u021C\x07W\x02\x02\u021A\u021D\x05\\/\x02\u021B\u021D\x05\xF8}\x02\u021C" +
		"\u021A\x03\x02\x02\x02\u021C\u021B\x03\x02\x02\x02\u021D\u021E\x03\x02" +
		"\x02\x02\u021E\u021F\x07X\x02\x02\u021F\u0221\x03\x02\x02\x02\u0220\u0202" +
		"\x03\x02\x02\x02\u0220\u0206\x03\x02\x02\x02\u0220\u0210\x03\x02\x02\x02" +
		"\u0220\u0218\x03\x02\x02\x02\u0221\u023D\x03\x02\x02\x02\u0222\u0223\f" +
		"\t\x02\x02\u0223\u0226\x07Y\x02\x02\u0224\u0227\x05\\/\x02\u0225\u0227" +
		"\x05\u0116\x8C\x02\u0226\u0224\x03\x02\x02\x02\u0226\u0225\x03\x02\x02" +
		"\x02\u0227\u0228\x03\x02\x02\x02\u0228\u0229\x07Z\x02\x02\u0229\u023C" +
		"\x03\x02\x02\x02\u022A\u022B\f\b\x02\x02\u022B\u022D\x07W\x02\x02\u022C" +
		"\u022E\x05$\x13\x02\u022D\u022C\x03\x02\x02\x02\u022D\u022E\x03\x02\x02" +
		"\x02\u022E\u022F\x03\x02\x02\x02\u022F\u023C\x07X\x02\x02\u0230\u0231" +
		"\f\x06\x02\x02\u0231\u0237\t\x04\x02\x02\u0232\u0234\x07F\x02\x02\u0233" +
		"\u0232\x03\x02\x02\x02\u0233\u0234\x03\x02\x02\x02\u0234\u0235\x03\x02" +
		"\x02\x02\u0235\u0238\x05\x06\x04\x02\u0236\u0238\x05&\x14\x02\u0237\u0233" +
		"\x03\x02\x02\x02\u0237\u0236\x03\x02\x02\x02\u0238\u023C\x03\x02\x02\x02" +
		"\u0239\u023A\f\x05\x02\x02\u023A\u023C\t\x05\x02\x02\u023B\u0222\x03\x02" +
		"\x02\x02\u023B\u022A\x03\x02\x02\x02\u023B\u0230\x03\x02\x02\x02\u023B" +
		"\u0239\x03\x02\x02\x02\u023C\u023F\x03\x02\x02\x02\u023D\u023B\x03\x02" +
		"\x02\x02\u023D\u023E\x03\x02\x02\x02\u023E!\x03\x02\x02\x02\u023F\u023D" +
		"\x03\x02\x02\x02\u0240\u0241\x07M\x02\x02\u0241#\x03\x02\x02\x02\u0242" +
		"\u0243\x05\u0114\x8B\x02\u0243%\x03\x02\x02\x02\u0244\u0246\x05\f\x07" +
		"\x02\u0245\u0244\x03\x02\x02\x02\u0245\u0246\x03\x02\x02\x02\u0246\u024A" +
		"\x03\x02\x02\x02\u0247\u0248\x05\xA2R\x02\u0248\u0249\x07\x81\x02\x02" +
		"\u0249\u024B\x03\x02\x02\x02\u024A\u0247\x03\x02\x02\x02\u024A\u024B\x03" +
		"\x02\x02\x02\u024B\u024C\x03\x02\x02\x02\u024C\u024D\x07e\x02\x02\u024D" +
		"\u0258\x05\xA2R\x02\u024E\u024F\x05\f\x07\x02\u024F\u0250\x07F\x02\x02" +
		"\u0250\u0251\x05\u0158\xAD\x02\u0251\u0252\x07\x81\x02\x02\u0252\u0253" +
		"\x07e\x02\x02\u0253\u0254\x05\xA2R\x02\u0254\u0258\x03\x02\x02\x02\u0255" +
		"\u0256\x07e\x02\x02\u0256\u0258\x05\xA4S\x02\u0257\u0245\x03\x02\x02\x02" +
		"\u0257\u024E\x03\x02\x02\x02\u0257\u0255\x03\x02\x02\x02\u0258\'\x03\x02" +
		"\x02\x02\u0259\u0275\x05 \x11\x02\u025A\u025F\x07z\x02\x02\u025B\u025F" +
		"\x07{\x02\x02\u025C\u025F\x05*\x16\x02\u025D\u025F\x07@\x02\x02\u025E" +
		"\u025A\x03\x02\x02\x02\u025E\u025B\x03\x02\x02\x02\u025E\u025C\x03\x02" +
		"\x02\x02\u025E\u025D\x03\x02\x02\x02\u025F\u0260\x03\x02\x02\x02\u0260" +
		"\u0275\x05(\x15\x02\u0261\u026A\x07@\x02\x02\u0262\u0263\x07W\x02\x02" +
		"\u0263\u0264\x05\xF8}\x02\u0264\u0265\x07X\x02\x02\u0265\u026B\x03\x02" +
		"\x02\x02\u0266\u0267\x07\x85\x02\x02\u0267\u0268\x07W\x02\x02\u0268\u0269" +
		"\x07\x86\x02\x02\u0269\u026B\x07X\x02\x02\u026A\u0262\x03\x02\x02\x02" +
		"\u026A\u0266\x03\x02\x02\x02\u026B\u0275\x03\x02\x02\x02\u026C\u026D\x07" +
		"\r\x02\x02\u026D\u026E\x07W\x02\x02\u026E\u026F\x05\xF8}\x02\u026F\u0270" +
		"\x07X\x02\x02\u0270\u0275\x03\x02\x02\x02\u0271\u0275\x05:\x1E\x02\u0272" +
		"\u0275\x05,\x17\x02\u0273\u0275\x058\x1D\x02\u0274\u0259\x03\x02\x02\x02" +
		"\u0274\u025E\x03\x02\x02\x02\u0274\u0261\x03\x02\x02\x02\u0274\u026C\x03" +
		"\x02\x02\x02\u0274\u0271\x03\x02\x02\x02\u0274\u0272\x03\x02\x02\x02\u0274" +
		"\u0273\x03\x02\x02\x02\u0275)\x03\x02\x02\x02\u0276\u0277\t\x06\x02\x02" +
		"\u0277+\x03\x02\x02\x02\u0278\u027A\x07\x81\x02\x02\u0279\u0278\x03\x02" +
		"\x02\x02\u0279\u027A\x03\x02\x02\x02\u027A\u027B\x03\x02\x02\x02\u027B" +
		"\u027D\x073\x02\x02\u027C\u027E\x05.\x18\x02\u027D\u027C\x03\x02\x02\x02" +
		"\u027D\u027E\x03\x02\x02\x02\u027E\u0284\x03\x02\x02\x02\u027F\u0285\x05" +
		"0\x19\x02\u0280\u0281\x07W\x02\x02\u0281\u0282\x05\xF8}\x02\u0282\u0283" +
		"\x07X\x02\x02\u0283\u0285\x03\x02\x02\x02\u0284\u027F\x03\x02\x02\x02" +
		"\u0284\u0280\x03\x02\x02\x02\u0285\u0287\x03\x02\x02\x02\u0286\u0288\x05" +
		"6\x1C\x02\u0287\u0286\x03\x02\x02\x02\u0287\u0288\x03\x02\x02\x02\u0288" +
		"-\x03\x02\x02\x02\u0289\u028A\x07W\x02\x02\u028A\u028B\x05$\x13\x02\u028B" +
		"\u028C\x07X\x02\x02\u028C/\x03\x02\x02\x02\u028D\u028F\x05\x98M\x02\u028E" +
		"\u0290\x052\x1A\x02\u028F\u028E\x03\x02\x02\x02\u028F\u0290\x03\x02\x02" +
		"\x02\u02901\x03\x02\x02\x02\u0291\u0293\x05\xEEx\x02\u0292\u0294\x052" +
		"\x1A\x02\u0293\u0292\x03\x02\x02\x02\u0293\u0294\x03\x02\x02\x02\u0294" +
		"\u0297\x03\x02\x02\x02\u0295\u0297\x054\x1B\x02\u0296\u0291\x03\x02\x02" +
		"\x02\u0296\u0295\x03\x02\x02\x02\u02973\x03\x02\x02\x02\u0298\u0299\b" +
		"\x1B\x01\x02\u0299\u029A\x07Y\x02\x02\u029A\u029B\x05\\/\x02\u029B\u029D" +
		"\x07Z\x02\x02\u029C\u029E\x05\xCEh\x02\u029D\u029C\x03\x02\x02\x02\u029D" +
		"\u029E\x03\x02\x02\x02\u029E\u02A8\x03\x02\x02\x02\u029F\u02A0\f\x03\x02" +
		"\x02\u02A0\u02A1\x07Y\x02\x02\u02A1\u02A2\x05^0\x02\u02A2\u02A4\x07Z\x02" +
		"\x02\u02A3\u02A5\x05\xCEh\x02\u02A4\u02A3\x03\x02\x02\x02\u02A4\u02A5" +
		"\x03\x02\x02\x02\u02A5\u02A7\x03\x02\x02\x02\u02A6\u029F\x03\x02\x02\x02" +
		"\u02A7\u02AA\x03\x02\x02\x02\u02A8\u02A6\x03\x02\x02\x02\u02A8\u02A9\x03" +
		"\x02\x02\x02\u02A95\x03\x02\x02\x02\u02AA\u02A8\x03\x02\x02\x02\u02AB" +
		"\u02AD\x07W\x02\x02\u02AC\u02AE\x05$\x13\x02\u02AD\u02AC\x03\x02\x02\x02" +
		"\u02AD\u02AE\x03\x02\x02\x02\u02AE\u02AF\x03\x02\x02\x02\u02AF\u02B2\x07" +
		"X\x02\x02\u02B0\u02B2\x05\u0116\x8C\x02\u02B1\u02AB\x03\x02\x02\x02\u02B1" +
		"\u02B0\x03\x02\x02\x02\u02B27\x03\x02\x02\x02\u02B3\u02B5\x07\x81\x02" +
		"\x02\u02B4\u02B3\x03\x02\x02\x02\u02B4\u02B5\x03\x02\x02\x02\u02B5\u02B6" +
		"\x03\x02\x02\x02\u02B6\u02B9\x07\x1E\x02\x02\u02B7\u02B8\x07Y\x02\x02" +
		"\u02B8\u02BA\x07Z\x02\x02\u02B9\u02B7\x03\x02\x02\x02\u02B9\u02BA\x03" +
		"\x02\x02\x02\u02BA\u02BB\x03\x02\x02\x02\u02BB\u02BC\x05<\x1F\x02\u02BC" +
		"9\x03\x02\x02\x02\u02BD\u02BE\x074\x02\x02\u02BE\u02BF\x07W\x02\x02\u02BF" +
		"\u02C0\x05\\/\x02\u02C0\u02C1\x07X\x02\x02\u02C1;\x03\x02\x02\x02\u02C2" +
		"\u02C9\x05(\x15\x02\u02C3\u02C4\x07W\x02\x02\u02C4\u02C5\x05\xF8}\x02" +
		"\u02C5\u02C6\x07X\x02\x02\u02C6\u02C7\x05<\x1F\x02\u02C7\u02C9\x03\x02" +
		"\x02\x02\u02C8\u02C2\x03\x02\x02\x02\u02C8\u02C3\x03\x02\x02\x02\u02C9" +
		"=\x03\x02\x02\x02\u02CA\u02CF\x05<\x1F\x02\u02CB\u02CC\t\x07\x02\x02\u02CC" +
		"\u02CE\x05<\x1F\x02\u02CD\u02CB\x03\x02\x02\x02\u02CE\u02D1\x03\x02\x02" +
		"\x02\u02CF\u02CD\x03\x02\x02\x02\u02CF\u02D0\x03\x02\x02\x02\u02D0?\x03" +
		"\x02\x02\x02\u02D1\u02CF\x03\x02\x02\x02\u02D2\u02D7\x05> \x02\u02D3\u02D4" +
		"\t\b\x02\x02\u02D4\u02D6\x05> \x02\u02D5\u02D3\x03\x02\x02\x02\u02D6\u02D9" +
		"\x03\x02\x02\x02\u02D7\u02D5\x03\x02\x02\x02\u02D7\u02D8\x03\x02\x02\x02" +
		"\u02D8A\x03\x02\x02\x02\u02D9\u02D7\x03\x02\x02\x02\u02DA\u02DF\x05@!" +
		"\x02\u02DB\u02DC\t\t\x02\x02\u02DC\u02DE\x05@!\x02\u02DD\u02DB\x03\x02" +
		"\x02\x02\u02DE\u02E1\x03\x02\x02\x02\u02DF\u02DD\x03\x02\x02\x02\u02DF" +
		"\u02E0\x03\x02\x02\x02\u02E0C\x03\x02\x02\x02\u02E1\u02DF\x03\x02\x02" +
		"\x02\u02E2\u02E8\x05B\"\x02\u02E3\u02E4\x05F$\x02\u02E4\u02E5\x05B\"\x02" +
		"\u02E5\u02E7\x03\x02\x02\x02\u02E6\u02E3\x03\x02\x02\x02\u02E7\u02EA\x03" +
		"\x02\x02\x02\u02E8\u02E6\x03\x02\x02\x02\u02E8\u02E9\x03\x02\x02\x02\u02E9" +
		"E\x03\x02\x02\x02\u02EA\u02E8\x03\x02\x02\x02\u02EB\u02EC\x07i\x02\x02" +
		"\u02EC\u02F0\x07i\x02\x02\u02ED\u02EE\x07h\x02\x02\u02EE\u02F0\x07h\x02" +
		"\x02\u02EF\u02EB\x03\x02\x02\x02\u02EF\u02ED\x03\x02\x02\x02\u02F0G\x03" +
		"\x02\x02\x02\u02F1\u02F6\x05D#\x02\u02F2\u02F3\t\n\x02\x02\u02F3\u02F5" +
		"\x05D#\x02\u02F4\u02F2\x03\x02\x02\x02\u02F5\u02F8\x03\x02\x02\x02\u02F6" +
		"\u02F4\x03\x02\x02\x02\u02F6\u02F7\x03\x02\x02\x02\u02F7I\x03\x02\x02" +
		"\x02\u02F8\u02F6\x03\x02\x02\x02\u02F9\u02FE\x05H%\x02\u02FA\u02FB\t\v" +
		"\x02\x02\u02FB\u02FD\x05H%\x02\u02FC\u02FA\x03\x02\x02\x02\u02FD\u0300" +
		"\x03\x02\x02\x02\u02FE\u02FC\x03\x02\x02\x02\u02FE\u02FF\x03\x02\x02\x02" +
		"\u02FFK\x03\x02\x02\x02\u0300\u02FE\x03\x02\x02\x02\u0301\u0306\x05J&" +
		"\x02\u0302\u0303\x07c\x02\x02\u0303\u0305\x05J&\x02\u0304\u0302\x03\x02" +
		"\x02\x02\u0305\u0308\x03\x02\x02\x02\u0306\u0304\x03\x02\x02\x02\u0306" +
		"\u0307\x03\x02\x02\x02\u0307M\x03\x02\x02\x02\u0308\u0306\x03\x02\x02" +
		"\x02\u0309\u030E\x05L\'\x02\u030A\u030B\x07b\x02\x02\u030B\u030D\x05L" +
		"\'\x02\u030C\u030A\x03\x02\x02\x02\u030D\u0310\x03\x02\x02\x02\u030E\u030C" +
		"\x03\x02\x02\x02\u030E\u030F\x03\x02\x02\x02\u030FO\x03\x02\x02\x02\u0310" +
		"\u030E\x03\x02\x02\x02\u0311\u0316\x05N(\x02\u0312\u0313\x07d\x02\x02" +
		"\u0313\u0315\x05N(\x02\u0314\u0312\x03\x02\x02\x02\u0315\u0318\x03\x02" +
		"\x02\x02\u0316\u0314\x03\x02\x02\x02\u0316\u0317\x03\x02\x02\x02\u0317" +
		"Q\x03\x02\x02\x02\u0318\u0316\x03\x02\x02\x02\u0319\u031E\x05P)\x02\u031A" +
		"\u031B\x07x\x02\x02\u031B\u031D\x05P)\x02\u031C\u031A\x03\x02\x02\x02" +
		"\u031D\u0320\x03\x02\x02\x02\u031E\u031C\x03\x02\x02\x02\u031E\u031F\x03" +
		"\x02\x02\x02\u031FS\x03\x02\x02\x02\u0320\u031E\x03\x02\x02\x02\u0321" +
		"\u0326\x05R*\x02\u0322\u0323\x07y\x02\x02\u0323\u0325\x05R*\x02\u0324" +
		"\u0322\x03\x02\x02\x02\u0325\u0328\x03\x02\x02\x02\u0326\u0324\x03\x02" +
		"\x02\x02\u0326\u0327\x03\x02\x02\x02\u0327U\x03\x02\x02\x02\u0328\u0326" +
		"\x03\x02\x02\x02\u0329\u032F\x05T+\x02\u032A\u032B\x07\x7F\x02\x02\u032B" +
		"\u032C\x05\\/\x02\u032C\u032D\x07\x80\x02\x02\u032D\u032E\x05X-\x02\u032E" +
		"\u0330\x03\x02\x02\x02\u032F\u032A\x03\x02\x02\x02\u032F\u0330\x03\x02" +
		"\x02\x02\u0330W\x03\x02\x02\x02\u0331\u0338\x05V,\x02\u0332\u0333\x05" +
		"T+\x02\u0333\u0334\x05Z.\x02\u0334\u0335\x05\u0112\x8A\x02\u0335\u0338" +
		"\x03\x02\x02\x02\u0336\u0338\x05\u0172\xBA\x02\u0337\u0331\x03\x02\x02" +
		"\x02\u0337\u0332\x03\x02\x02\x02\u0337\u0336\x03\x02\x02\x02\u0338Y\x03" +
		"\x02\x02\x02\u0339\u033A\t\f\x02\x02\u033A[\x03\x02\x02\x02\u033B\u0340" +
		"\x05X-\x02\u033C\u033D\x07|\x02\x02\u033D\u033F\x05X-\x02\u033E\u033C" +
		"\x03\x02\x02\x02\u033F\u0342\x03\x02\x02\x02\u0340\u033E\x03\x02\x02\x02" +
		"\u0340\u0341\x03\x02\x02\x02\u0341]\x03\x02\x02\x02\u0342\u0340\x03\x02" +
		"\x02\x02\u0343\u0344\x05V,\x02\u0344_\x03\x02\x02\x02\u0345\u0353\x05" +
		"b2\x02\u0346\u0353\x05x=\x02\u0347\u0349\x05\xCEh\x02\u0348\u0347\x03" +
		"\x02\x02\x02\u0348\u0349\x03\x02\x02\x02\u0349\u0350\x03\x02\x02\x02\u034A" +
		"\u0351\x05d3\x02\u034B\u0351\x05f4\x02\u034C\u0351\x05j6\x02\u034D\u0351" +
		"\x05n8\x02\u034E\u0351\x05v<\x02\u034F\u0351\x05\u0168\xB5\x02\u0350\u034A" +
		"\x03\x02\x02\x02\u0350\u034B\x03\x02\x02\x02\u0350\u034C\x03\x02\x02\x02" +
		"\u0350\u034D\x03\x02\x02\x02\u0350\u034E\x03\x02\x02\x02\u0350\u034F\x03" +
		"\x02\x02\x02\u0351\u0353\x03\x02\x02\x02\u0352\u0345\x03\x02\x02\x02\u0352" +
		"\u0346\x03\x02\x02\x02\u0352\u0348\x03\x02\x02\x02\u0353a\x03\x02\x02" +
		"\x02\u0354\u0356\x05\xCEh\x02\u0355\u0354\x03\x02\x02\x02\u0355\u0356" +
		"\x03\x02\x02\x02\u0356\u035B\x03\x02\x02\x02\u0357\u035C\x07\x86\x02\x02" +
		"\u0358\u0359\x07\x12\x02\x02\u0359\u035C\x05^0\x02\u035A\u035C\x07\x1D" +
		"\x02\x02\u035B\u0357\x03\x02\x02\x02\u035B\u0358\x03\x02\x02\x02\u035B" +
		"\u035A\x03\x02\x02\x02\u035C\u035D\x03\x02\x02\x02\u035D\u035E\x07\x80" +
		"\x02\x02\u035E\u035F\x05`1\x02\u035Fc\x03\x02\x02\x02\u0360\u0362\x05" +
		"\\/\x02\u0361\u0360\x03\x02\x02\x02\u0361\u0362\x03\x02\x02\x02\u0362" +
		"\u0363\x03\x02\x02\x02\u0363\u0364\x07\x82\x02\x02\u0364e\x03\x02\x02" +
		"\x02\u0365\u0367\x07[\x02\x02\u0366\u0368\x05h5\x02\u0367\u0366\x03\x02" +
		"\x02\x02\u0367\u0368\x03\x02\x02\x02\u0368\u0369\x03\x02\x02\x02\u0369" +
		"\u036A\x07\\\x02\x02\u036Ag\x03\x02\x02\x02\u036B\u036D\x05`1\x02\u036C" +
		"\u036B\x03\x02\x02\x02\u036D\u036E\x03\x02\x02\x02\u036E\u036C\x03\x02" +
		"\x02\x02\u036E\u036F\x03\x02\x02\x02\u036Fi\x03\x02\x02\x02\u0370\u0371" +
		"\x07-\x02\x02\u0371\u0372\x07W\x02\x02\u0372\u0373\x05l7\x02\u0373\u0374" +
		"\x07X\x02\x02\u0374\u0377\x05`1\x02\u0375\u0376\x07\"\x02\x02\u0376\u0378" +
		"\x05`1\x02\u0377\u0375\x03\x02\x02\x02\u0377\u0378\x03\x02\x02\x02\u0378" +
		"\u0380\x03\x02\x02\x02\u0379\u037A\x07E\x02\x02\u037A\u037B\x07W\x02\x02" +
		"\u037B\u037C\x05l7\x02\u037C\u037D\x07X\x02\x02\u037D\u037E\x05`1\x02" +
		"\u037E\u0380\x03\x02\x02\x02\u037F\u0370\x03\x02\x02\x02\u037F\u0379\x03" +
		"\x02\x02\x02\u0380";
	private static readonly _serializedATNSegment2: string =
		"k\x03\x02\x02\x02\u0381\u038D\x05\\/\x02\u0382\u0384\x05\xCEh\x02\u0383" +
		"\u0382\x03\x02\x02\x02\u0383\u0384\x03\x02\x02\x02\u0384\u0385\x03\x02" +
		"\x02\x02\u0385\u0386\x05\x8CG\x02\u0386\u038A\x05\xE4s\x02\u0387\u0388" +
		"\x07g\x02\x02\u0388\u038B\x05\u0112\x8A\x02\u0389\u038B\x05\u0116\x8C" +
		"\x02\u038A\u0387\x03\x02\x02\x02\u038A\u0389\x03\x02\x02\x02\u038B\u038D" +
		"\x03\x02\x02\x02\u038C\u0381\x03\x02\x02\x02\u038C\u0383\x03\x02\x02\x02" +
		"\u038Dm\x03\x02\x02\x02\u038E\u038F\x07V\x02\x02\u038F\u0390\x07W\x02" +
		"\x02\u0390\u0391\x05l7\x02\u0391\u0392\x07X\x02\x02\u0392\u0393\x05`1" +
		"\x02\u0393\u03B0\x03\x02\x02\x02\u0394\u0395\x07\x1F\x02\x02\u0395\u0396" +
		"\x05`1\x02\u0396\u0397\x07V\x02\x02\u0397\u0398\x07W\x02\x02\u0398\u0399" +
		"\x05\\/\x02\u0399\u039A\x07X\x02\x02\u039A\u039B\x07\x82\x02\x02\u039B" +
		"\u03B0\x03\x02\x02\x02\u039C\u039D\x07*\x02\x02\u039D\u03AA\x07W\x02\x02" +
		"\u039E\u03A0\x05p9\x02\u039F\u03A1\x05l7\x02\u03A0\u039F\x03\x02\x02\x02" +
		"\u03A0\u03A1\x03\x02\x02\x02\u03A1\u03A2\x03\x02\x02\x02\u03A2\u03A4\x07" +
		"\x82\x02\x02\u03A3\u03A5\x05\\/\x02\u03A4\u03A3\x03\x02\x02\x02\u03A4" +
		"\u03A5\x03\x02\x02\x02\u03A5\u03AB\x03\x02\x02\x02\u03A6\u03A7\x05r:\x02" +
		"\u03A7\u03A8\x07\x80\x02\x02\u03A8\u03A9\x05t;\x02\u03A9\u03AB\x03\x02" +
		"\x02\x02\u03AA\u039E\x03\x02\x02\x02\u03AA\u03A6\x03\x02\x02\x02\u03AB" +
		"\u03AC\x03\x02\x02\x02\u03AC\u03AD\x07X\x02\x02\u03AD\u03AE\x05`1\x02" +
		"\u03AE\u03B0\x03\x02\x02\x02\u03AF\u038E\x03\x02\x02\x02\u03AF\u0394\x03" +
		"\x02\x02\x02\u03AF\u039C\x03\x02\x02\x02\u03B0o\x03\x02\x02\x02\u03B1" +
		"\u03B4\x05d3\x02\u03B2\u03B4\x05\x82B\x02\u03B3\u03B1\x03\x02\x02\x02" +
		"\u03B3\u03B2\x03\x02\x02\x02\u03B4q\x03\x02\x02\x02\u03B5\u03B7\x05\xCE" +
		"h\x02\u03B6\u03B5\x03\x02\x02\x02\u03B6\u03B7\x03\x02\x02\x02\u03B7\u03B8" +
		"\x03\x02\x02\x02\u03B8\u03B9\x05\x8CG\x02\u03B9\u03BA\x05\xE4s\x02\u03BA" +
		"s\x03\x02\x02\x02\u03BB\u03BE\x05\\/\x02\u03BC\u03BE\x05\u0116\x8C\x02" +
		"\u03BD\u03BB\x03\x02\x02\x02\u03BD\u03BC\x03\x02\x02\x02\u03BEu\x03\x02" +
		"\x02\x02\u03BF\u03C9\x07\x11\x02\x02\u03C0\u03C9\x07\x1B\x02\x02\u03C1" +
		"\u03C4\x07=\x02\x02\u03C2\u03C5\x05\\/\x02\u03C3\u03C5\x05\u0116\x8C\x02" +
		"\u03C4\u03C2\x03\x02\x02\x02\u03C4\u03C3\x03\x02\x02\x02\u03C4\u03C5\x03" +
		"\x02\x02\x02\u03C5\u03C9\x03\x02\x02\x02\u03C6\u03C7\x07,\x02\x02\u03C7" +
		"\u03C9\x07\x86\x02\x02\u03C8\u03BF\x03\x02\x02\x02\u03C8\u03C0\x03\x02" +
		"\x02\x02\u03C8\u03C1\x03\x02\x02\x02\u03C8\u03C6\x03\x02\x02\x02\u03C9" +
		"\u03CA\x03\x02\x02\x02\u03CA\u03CB\x07\x82\x02\x02\u03CBw\x03\x02\x02" +
		"\x02\u03CC\u03CD\x05~@\x02\u03CDy\x03\x02\x02\x02\u03CE\u03D0\x05|?\x02" +
		"\u03CF\u03CE\x03\x02\x02\x02\u03D0\u03D1\x03\x02\x02\x02\u03D1\u03CF\x03" +
		"\x02\x02\x02\u03D1\u03D2\x03\x02\x02\x02\u03D2{\x03\x02\x02\x02\u03D3" +
		"\u03DD\x05~@\x02\u03D4\u03DD\x05\u010A\x86\x02\u03D5\u03DD\x05\u0150\xA9" +
		"\x02\u03D6\u03DD\x05\u0164\xB3\x02\u03D7\u03DD\x05\u0166\xB4\x02\u03D8" +
		"\u03DD\x05\xCCg\x02\u03D9\u03DD\x05\xBE`\x02\u03DA\u03DD\x05\x86D\x02" +
		"\u03DB\u03DD\x05\x88E\x02\u03DC\u03D3\x03\x02\x02\x02\u03DC\u03D4\x03" +
		"\x02\x02\x02\u03DC\u03D5\x03\x02\x02\x02\u03DC\u03D6\x03\x02\x02\x02\u03DC" +
		"\u03D7\x03\x02\x02\x02\u03DC\u03D8\x03\x02\x02\x02\u03DC\u03D9\x03\x02" +
		"\x02\x02\u03DC\u03DA\x03\x02\x02\x02\u03DC\u03DB\x03\x02\x02\x02\u03DD" +
		"}\x03\x02\x02\x02\u03DE\u03E7\x05\x82B\x02\u03DF\u03E7\x05\xCAf\x02\u03E0" +
		"\u03E7\x05\xC2b\x02\u03E1\u03E7\x05\xC6d\x02\u03E2\u03E7\x05\xC8e\x02" +
		"\u03E3\u03E7\x05\x84C\x02\u03E4\u03E7\x05\x80A\x02\u03E5\u03E7\x05\xAE" +
		"X\x02\u03E6\u03DE\x03\x02\x02\x02\u03E6\u03DF\x03\x02\x02\x02\u03E6\u03E0" +
		"\x03\x02\x02\x02\u03E6\u03E1\x03\x02\x02\x02\u03E6\u03E2\x03\x02\x02\x02" +
		"\u03E6\u03E3\x03\x02\x02\x02\u03E6\u03E4\x03\x02\x02\x02\u03E6\u03E5\x03" +
		"\x02\x02\x02\u03E7\x7F\x03\x02\x02\x02\u03E8\u03E9\x07Q\x02\x02\u03E9" +
		"\u03EB\x07\x86\x02\x02\u03EA\u03EC\x05\xCEh\x02\u03EB\u03EA\x03\x02\x02" +
		"\x02\u03EB\u03EC\x03\x02\x02\x02\u03EC\u03ED\x03\x02\x02\x02\u03ED\u03EE" +
		"\x07g\x02\x02\u03EE\u03EF\x05\xF8}\x02\u03EF\u03F0\x07\x82\x02\x02\u03F0" +
		"\x81\x03\x02\x02\x02\u03F1\u03F3\x05\x8CG\x02\u03F2\u03F1\x03\x02\x02" +
		"\x02\u03F2\u03F3\x03\x02\x02\x02\u03F3\u03F5\x03\x02\x02\x02\u03F4\u03F6" +
		"\x05\xE0q\x02\u03F5\u03F4\x03\x02\x02\x02\u03F5\u03F6\x03\x02\x02\x02" +
		"\u03F6\u03F7\x03\x02\x02\x02\u03F7\u0400\x07\x82\x02\x02\u03F8\u03FA\x05" +
		"\xCEh\x02\u03F9\u03FB\x05\x8CG\x02\u03FA\u03F9\x03\x02\x02\x02\u03FA\u03FB" +
		"\x03\x02\x02\x02\u03FB\u03FC\x03\x02\x02\x02\u03FC\u03FD\x05\xE0q\x02" +
		"\u03FD\u03FE\x07\x82\x02\x02\u03FE\u0400\x03\x02\x02\x02\u03FF\u03F2\x03" +
		"\x02\x02\x02\u03FF\u03F8\x03\x02\x02\x02\u0400\x83\x03\x02\x02\x02\u0401" +
		"\u0402\x07B\x02\x02\u0402\u0403\x07W\x02\x02\u0403\u0404\x05^0\x02\u0404" +
		"\u0405\x07|\x02\x02\u0405\u0406\x07\x06\x02\x02\u0406\u0407\x07X\x02\x02" +
		"\u0407\u0408\x07\x82\x02\x02\u0408\x85\x03\x02\x02\x02\u0409\u040A\x07" +
		"\x82\x02\x02\u040A\x87\x03\x02\x02\x02\u040B\u040C\x05\xCEh\x02\u040C" +
		"\u040D\x07\x82\x02\x02\u040D\x89\x03\x02\x02\x02\u040E\u0415\x05\x8EH" +
		"\x02\u040F\u0415\x05\x94K\x02\u0410\u0415\x05\x90I\x02\u0411\u0415\x07" +
		"+\x02\x02\u0412\u0415\x07L\x02\x02\u0413\u0415\x07\x19\x02\x02\u0414\u040E" +
		"\x03\x02\x02\x02\u0414\u040F\x03\x02\x02\x02\u0414\u0410\x03\x02\x02\x02" +
		"\u0414\u0411\x03\x02\x02\x02\u0414\u0412\x03\x02\x02\x02\u0414\u0413\x03" +
		"\x02\x02\x02\u0415\x8B\x03\x02\x02\x02\u0416\u0418\x05\x8AF\x02\u0417" +
		"\u0416\x03\x02\x02\x02\u0418\u0419\x03\x02\x02\x02\u0419\u041A\x03\x02" +
		"\x02\x02\u0419\u0417\x03\x02\x02\x02\u041A\u041C\x03\x02\x02\x02\u041B" +
		"\u041D\x05\xCEh\x02\u041C\u041B\x03\x02\x02\x02\u041C\u041D\x03\x02\x02" +
		"\x02\u041D\x8D\x03\x02\x02\x02\u041E\u041F\t\r\x02\x02\u041F\x8F\x03\x02" +
		"\x02\x02\u0420\u0421\t\x0E\x02\x02\u0421\x91\x03\x02\x02\x02\u0422\u0423" +
		"\x07\x86\x02\x02\u0423\x93\x03\x02\x02\x02\u0424\u0428\x05\x96L\x02\u0425" +
		"\u0428\x05\u011A\x8E\x02\u0426\u0428\x05\xAAV\x02\u0427\u0424\x03\x02" +
		"\x02\x02\u0427\u0425\x03\x02\x02\x02\u0427\u0426\x03\x02\x02\x02\u0428" +
		"\x95\x03\x02\x02\x02\u0429\u042E\x05\xA0Q\x02\u042A\u042E\x05\xA6T\x02" +
		"\u042B\u042E\x05\u0162\xB2\x02\u042C\u042E\x05\xF2z\x02\u042D\u0429\x03" +
		"\x02\x02\x02\u042D\u042A\x03\x02\x02\x02\u042D\u042B\x03\x02\x02\x02\u042D" +
		"\u042C\x03\x02\x02\x02\u042E\x97\x03\x02\x02\x02\u042F\u0431\x05\x94K" +
		"\x02\u0430\u042F\x03\x02\x02\x02\u0431\u0432\x03\x02\x02\x02\u0432\u0430" +
		"\x03\x02\x02\x02\u0432\u0433\x03\x02\x02\x02\u0433\u0435\x03\x02\x02\x02" +
		"\u0434\u0436\x05\xCEh\x02\u0435\u0434\x03\x02\x02\x02\u0435\u0436\x03" +
		"\x02\x02\x02\u0436\x99\x03\x02\x02\x02\u0437\u0439\x05\x96L\x02\u0438" +
		"\u0437\x03\x02\x02\x02\u0439\u043A\x03\x02\x02\x02\u043A\u0438\x03\x02" +
		"\x02\x02\u043A\u043B\x03\x02\x02\x02\u043B\u043D\x03\x02\x02\x02\u043C" +
		"\u043E\x05\xCEh\x02\u043D\u043C\x03\x02\x02\x02\u043D\u043E\x03\x02\x02" +
		"\x02\u043E\x9B\x03\x02\x02\x02\u043F\u0440\t\x0F\x02\x02\u0440\x9D\x03" +
		"\x02\x02\x02\u0441\u0442\t\x10\x02\x02\u0442\x9F\x03\x02\x02\x02\u0443" +
		"\u0445\x05\f\x07\x02\u0444\u0443\x03\x02\x02\x02\u0444\u0445\x03\x02\x02" +
		"\x02\u0445\u0446\x03\x02\x02\x02\u0446\u0478\x05\xA2R\x02\u0447\u0448" +
		"\x05\f\x07\x02\u0448\u0449\x07F\x02\x02\u0449\u044A\x05\u0158\xAD\x02" +
		"\u044A\u0478\x03\x02\x02\x02\u044B\u0478\x05\x9EP\x02\u044C\u044E\x05" +
		"\x9EP\x02\u044D\u044C\x03\x02\x02\x02\u044D\u044E\x03\x02\x02\x02\u044E" +
		"\u0450\x03\x02\x02\x02\u044F\u0451\x05\x9CO\x02\u0450\u044F\x03\x02\x02" +
		"\x02\u0451\u0452\x03\x02\x02\x02\u0452\u0450\x03\x02\x02\x02\u0452\u0453" +
		"\x03\x02\x02\x02\u0453\u0478\x03\x02\x02\x02\u0454\u0456\x05\x9EP\x02" +
		"\u0455\u0454\x03\x02\x02\x02\u0455\u0456\x03\x02\x02\x02\u0456\u0457\x03" +
		"\x02\x02\x02\u0457\u0478\x07\x14\x02\x02\u0458\u045A\x05\x9EP\x02\u0459" +
		"\u0458\x03\x02\x02\x02\u0459\u045A\x03\x02\x02\x02\u045A\u045B\x03\x02" +
		"\x02\x02\u045B\u0478\x07\x15\x02\x02\u045C\u045E\x05\x9EP\x02\u045D\u045C" +
		"\x03\x02\x02\x02\u045D\u045E\x03\x02\x02\x02\u045E\u045F\x03\x02\x02\x02" +
		"\u045F\u0478\x07\x16\x02\x02\u0460\u0462\x05\x9EP\x02\u0461\u0460\x03" +
		"\x02\x02\x02\u0461\u0462\x03\x02\x02\x02\u0462\u0463\x03\x02\x02\x02\u0463" +
		"\u0478\x07U\x02\x02\u0464\u0478\x07\x10\x02\x02\u0465\u0467\x05\x9EP\x02" +
		"\u0466\u0465\x03\x02\x02\x02\u0466\u0467\x03\x02\x02\x02\u0467\u046B\x03" +
		"\x02\x02\x02\u0468\u046A\x05\x9CO\x02\u0469\u0468\x03\x02\x02\x02\u046A" +
		"\u046D\x03\x02\x02\x02\u046B\u0469\x03\x02\x02\x02\u046B\u046C\x03\x02" +
		"\x02\x02\u046C\u046E\x03\x02\x02\x02\u046D\u046B\x03\x02\x02\x02\u046E" +
		"\u0478\x07/\x02\x02\u046F\u0478\x07)\x02\x02\u0470\u0472\x05\x9CO\x02" +
		"\u0471\u0470\x03\x02\x02\x02\u0471\u0472\x03\x02\x02\x02\u0472\u0473\x03" +
		"\x02\x02\x02\u0473\u0478\x07 \x02\x02\u0474\u0478\x07S\x02\x02\u0475\u0478" +
		"\x07\x0F\x02\x02\u0476\u0478\x05\xA4S\x02\u0477\u0444\x03\x02\x02\x02" +
		"\u0477\u0447\x03\x02\x02\x02\u0477\u044B\x03\x02\x02\x02\u0477\u044D\x03" +
		"\x02\x02\x02\u0477\u0455\x03\x02\x02\x02\u0477\u0459\x03\x02\x02\x02\u0477" +
		"\u045D\x03\x02\x02\x02\u0477\u0461\x03\x02\x02\x02\u0477\u0464\x03\x02" +
		"\x02\x02\u0477\u0466\x03\x02\x02\x02\u0477\u046F\x03\x02\x02\x02\u0477" +
		"\u0471\x03\x02\x02\x02\u0477\u0474\x03\x02\x02\x02\u0477\u0475\x03\x02" +
		"\x02\x02\u0477\u0476\x03\x02\x02\x02\u0478\xA1\x03\x02\x02\x02\u0479\u047E" +
		"\x05\u0118\x8D\x02\u047A\u047E\x05\xA8U\x02\u047B\u047E\x05\x92J\x02\u047C" +
		"\u047E\x05\u0158\xAD\x02\u047D\u0479\x03\x02\x02\x02\u047D\u047A\x03\x02" +
		"\x02\x02\u047D\u047B\x03\x02\x02\x02\u047D\u047C\x03\x02\x02\x02\u047E" +
		"\xA3\x03\x02\x02\x02\u047F\u0480\x07\x1C\x02\x02\u0480\u0483\x07W\x02" +
		"\x02\u0481\u0484\x05\\/\x02\u0482\u0484\x07\x0F\x02\x02\u0483\u0481\x03" +
		"\x02\x02\x02\u0483\u0482\x03\x02\x02\x02\u0484\u0485\x03\x02\x02\x02\u0485" +
		"\u0486\x07X\x02\x02\u0486\xA5\x03\x02\x02\x02\u0487\u0496\x05\u0122\x92" +
		"\x02\u0488\u048A\x05\xCEh\x02\u0489\u0488\x03\x02\x02\x02\u0489\u048A" +
		"\x03\x02\x02\x02\u048A\u048C\x03\x02\x02\x02\u048B\u048D\x05\f\x07\x02" +
		"\u048C\u048B\x03\x02\x02\x02\u048C\u048D\x03\x02\x02\x02\u048D\u048E\x03" +
		"\x02\x02\x02\u048E\u0497\x07\x86\x02\x02\u048F\u0497\x05\u0158\xAD\x02" +
		"\u0490\u0492\x05\f\x07\x02\u0491\u0493\x07F\x02\x02\u0492\u0491\x03\x02" +
		"\x02\x02\u0492\u0493\x03\x02\x02\x02\u0493\u0494\x03\x02\x02\x02\u0494" +
		"\u0495\x05\u0158\xAD\x02\u0495\u0497\x03\x02\x02\x02\u0496\u0489\x03\x02" +
		"\x02\x02\u0496\u048F\x03\x02\x02\x02\u0496\u0490\x03\x02\x02\x02\u0497" +
		"\u049E\x03\x02\x02\x02\u0498\u049A\x07#\x02\x02\u0499\u049B\x05\f\x07" +
		"\x02\u049A\u0499\x03\x02\x02\x02\u049A\u049B\x03\x02\x02\x02\u049B\u049C" +
		"\x03\x02\x02\x02\u049C\u049E\x07\x86\x02\x02\u049D\u0487\x03\x02\x02\x02" +
		"\u049D\u0498\x03\x02\x02\x02\u049E\xA7\x03\x02\x02\x02\u049F\u04A0\x07" +
		"\x86\x02\x02\u04A0\xA9\x03\x02\x02\x02\u04A1\u04A2\x05\xACW\x02\u04A2" +
		"\u04A7\x07[\x02\x02\u04A3\u04A5\x05\xB4[\x02\u04A4\u04A6\x07|\x02\x02" +
		"\u04A5\u04A4\x03\x02\x02\x02\u04A5\u04A6\x03\x02\x02\x02\u04A6\u04A8\x03" +
		"\x02\x02\x02\u04A7\u04A3\x03\x02\x02\x02\u04A7\u04A8\x03\x02\x02\x02\u04A8" +
		"\u04A9\x03\x02\x02\x02\u04A9\u04AA\x07\\\x02\x02\u04AA\xAB\x03\x02\x02" +
		"\x02\u04AB\u04AD\x05\xB0Y\x02\u04AC\u04AE\x05\xCEh\x02\u04AD\u04AC\x03" +
		"\x02\x02\x02\u04AD\u04AE\x03\x02\x02\x02\u04AE\u04B3\x03\x02\x02\x02\u04AF" +
		"\u04B1\x05\f\x07\x02\u04B0\u04AF\x03\x02\x02\x02\u04B0\u04B1\x03\x02\x02" +
		"\x02\u04B1\u04B2\x03\x02\x02\x02\u04B2\u04B4\x07\x86\x02\x02\u04B3\u04B0" +
		"\x03\x02\x02\x02\u04B3\u04B4\x03\x02\x02\x02\u04B4\u04B6\x03\x02\x02\x02" +
		"\u04B5\u04B7\x05\xB2Z\x02\u04B6\u04B5\x03\x02\x02\x02\u04B6\u04B7\x03" +
		"\x02\x02\x02\u04B7\xAD\x03\x02\x02\x02\u04B8\u04BA\x05\xB0Y\x02\u04B9" +
		"\u04BB\x05\xCEh\x02\u04BA\u04B9\x03\x02\x02\x02\u04BA\u04BB\x03\x02\x02" +
		"\x02\u04BB\u04BC\x03\x02\x02\x02\u04BC\u04BE\x07\x86\x02\x02\u04BD\u04BF" +
		"\x05\xB2Z\x02\u04BE\u04BD\x03\x02\x02\x02\u04BE\u04BF\x03\x02\x02\x02" +
		"\u04BF\u04C0\x03\x02\x02\x02\u04C0\u04C1\x07\x82\x02\x02\u04C1\xAF\x03" +
		"\x02\x02\x02\u04C2\u04C4\x07#\x02\x02\u04C3\u04C5\t\x11\x02\x02\u04C4" +
		"\u04C3\x03\x02\x02\x02\u04C4\u04C5\x03\x02\x02\x02\u04C5\xB1\x03\x02\x02" +
		"\x02\u04C6\u04C7\x07\x80\x02\x02\u04C7\u04C8\x05\x98M\x02\u04C8\xB3\x03" +
		"\x02\x02\x02\u04C9\u04CE\x05\xB6\\\x02\u04CA\u04CB\x07|\x02\x02\u04CB" +
		"\u04CD\x05\xB6\\\x02\u04CC\u04CA\x03\x02\x02\x02\u04CD\u04D0\x03\x02\x02" +
		"\x02\u04CE\u04CC\x03\x02\x02\x02\u04CE\u04CF\x03\x02\x02\x02\u04CF\xB5" +
		"\x03\x02\x02\x02\u04D0\u04CE\x03\x02\x02\x02\u04D1\u04D4\x05\xB8]\x02" +
		"\u04D2\u04D3\x07g\x02\x02\u04D3\u04D5\x05^0\x02\u04D4\u04D2\x03\x02\x02" +
		"\x02\u04D4\u04D5\x03\x02\x02\x02\u04D5\xB7\x03\x02\x02\x02\u04D6\u04D7" +
		"\x07\x86\x02\x02\u04D7\xB9\x03\x02\x02\x02\u04D8\u04DB\x05\xBC_\x02\u04D9" +
		"\u04DB\x05\xC0a\x02\u04DA\u04D8\x03\x02\x02\x02\u04DA\u04D9\x03\x02\x02" +
		"\x02\u04DB\xBB\x03\x02\x02\x02\u04DC\u04DD\x07\x86\x02\x02\u04DD\xBD\x03" +
		"\x02\x02\x02\u04DE\u04E0\x07.\x02\x02\u04DF\u04DE\x03\x02\x02\x02\u04DF" +
		"\u04E0\x03\x02\x02\x02\u04E0\u04E1\x03\x02\x02\x02\u04E1\u04E4\x072\x02" +
		"\x02\u04E2\u04E5\x07\x86\x02\x02\u04E3\u04E5\x05\xBC_\x02\u04E4\u04E2" +
		"\x03\x02\x02\x02\u04E4\u04E3\x03\x02\x02\x02\u04E4\u04E5\x03\x02\x02\x02" +
		"\u04E5\u04E6\x03\x02\x02\x02\u04E6\u04E8\x07[\x02\x02\u04E7\u04E9\x05" +
		"z>\x02\u04E8\u04E7\x03\x02\x02\x02\u04E8\u04E9\x03\x02\x02\x02\u04E9\u04EA" +
		"\x03\x02\x02\x02\u04EA\u04EB\x07\\\x02\x02\u04EB\xBF\x03\x02\x02\x02\u04EC" +
		"\u04ED\x07\x86\x02\x02\u04ED\xC1\x03\x02\x02\x02\u04EE\u04EF\x072\x02" +
		"\x02\u04EF\u04F0\x07\x86\x02\x02\u04F0\u04F1\x07g\x02\x02\u04F1\u04F2" +
		"\x05\xC4c\x02\u04F2\u04F3\x07\x82\x02\x02\u04F3\xC3\x03\x02\x02\x02\u04F4" +
		"\u04F6\x05\f\x07\x02\u04F5\u04F4\x03\x02\x02\x02\u04F5\u04F6\x03\x02\x02" +
		"\x02\u04F6\u04F7\x03\x02\x02\x02\u04F7\u04F8\x05\xBA^\x02\u04F8\xC5\x03" +
		"\x02\x02\x02\u04F9\u04FF\x07Q\x02\x02\u04FA\u04FC\x07N\x02\x02\u04FB\u04FA" +
		"\x03\x02\x02\x02\u04FB\u04FC\x03\x02\x02\x02\u04FC\u04FD\x03\x02\x02\x02" +
		"\u04FD\u0500\x05\f\x07\x02\u04FE\u0500\x07\x81\x02\x02\u04FF\u04FB\x03" +
		"\x02\x02\x02\u04FF\u04FE\x03\x02\x02\x02\u0500\u0501\x03\x02\x02\x02\u0501" +
		"\u0502\x05\b\x05\x02\u0502\u0503\x07\x82\x02\x02\u0503\xC7\x03\x02\x02" +
		"\x02\u0504\u0506\x05\xCEh\x02\u0505\u0504\x03\x02\x02\x02\u0505\u0506" +
		"\x03\x02\x02\x02\u0506\u0507\x03\x02\x02\x02\u0507\u0508\x07Q\x02\x02" +
		"\u0508\u050A\x072\x02\x02\u0509\u050B\x05\f\x07\x02\u050A\u0509\x03\x02" +
		"\x02\x02\u050A\u050B\x03\x02\x02\x02\u050B\u050C\x03\x02\x02\x02\u050C" +
		"\u050D\x05\xBA^\x02\u050D\u050E\x07\x82\x02\x02\u050E\xC9\x03\x02\x02" +
		"\x02\u050F\u0510\x07\x0E\x02\x02\u0510\u0511\x07W\x02\x02\u0511\u0512" +
		"\x07\x06\x02\x02\u0512\u0513\x07X\x02\x02\u0513\u0514\x07\x82\x02\x02" +
		"\u0514\xCB\x03\x02\x02\x02\u0515\u0516\x07&\x02\x02\u0516\u051D\x07\x06" +
		"\x02\x02\u0517\u0519\x07[\x02\x02\u0518\u051A\x05z>\x02\u0519\u0518\x03" +
		"\x02\x02\x02\u0519\u051A\x03\x02\x02\x02\u051A\u051B\x03\x02\x02\x02\u051B" +
		"\u051E\x07\\\x02\x02\u051C\u051E\x05|?\x02\u051D\u0517\x03\x02\x02\x02" +
		"\u051D\u051C\x03\x02\x02\x02\u051E\xCD\x03\x02\x02\x02\u051F\u0521\x05" +
		"\xD0i\x02\u0520\u051F\x03\x02\x02\x02\u0521\u0522\x03\x02\x02\x02\u0522" +
		"\u0520\x03\x02\x02\x02\u0522\u0523\x03\x02\x02\x02\u0523\xCF\x03\x02\x02" +
		"\x02\u0524\u0525\x07Y\x02\x02\u0525\u0527\x07Y\x02\x02\u0526\u0528\x05" +
		"\xD4k\x02\u0527\u0526\x03\x02\x02\x02\u0527\u0528\x03\x02\x02\x02\u0528" +
		"\u0529\x03\x02\x02\x02\u0529\u052A\x07Z\x02\x02\u052A\u052D\x07Z\x02\x02" +
		"\u052B\u052D\x05\xD2j\x02\u052C\u0524\x03\x02\x02\x02\u052C\u052B\x03" +
		"\x02\x02\x02\u052D\xD1\x03\x02\x02\x02\u052E\u052F\x07\f\x02\x02\u052F" +
		"\u0532\x07W\x02\x02\u0530\u0533\x05\xF8}\x02\u0531\u0533\x05^0\x02\u0532" +
		"\u0530\x03\x02\x02\x02\u0532\u0531\x03\x02\x02\x02\u0533\u0535\x03\x02" +
		"\x02\x02\u0534\u0536\x07\x85\x02\x02\u0535\u0534\x03\x02\x02\x02\u0535" +
		"\u0536\x03\x02\x02\x02\u0536\u0537\x03\x02\x02\x02\u0537\u0538\x07X\x02" +
		"\x02\u0538\xD3\x03\x02\x02\x02\u0539\u053E\x05\xD6l\x02\u053A\u053B\x07" +
		"|\x02\x02\u053B\u053D\x05\xD6l\x02\u053C\u053A\x03\x02\x02\x02\u053D\u0540" +
		"\x03\x02\x02\x02\u053E\u053C\x03\x02\x02\x02\u053E\u053F\x03\x02\x02\x02" +
		"\u053F\u0542\x03\x02\x02\x02\u0540\u053E\x03\x02\x02\x02\u0541\u0543\x07" +
		"\x85\x02\x02\u0542\u0541\x03\x02\x02\x02\u0542\u0543\x03\x02\x02\x02\u0543" +
		"\xD5\x03\x02\x02\x02\u0544\u0545\x05\xD8m\x02\u0545\u0546\x07\x81\x02" +
		"\x02\u0546\u0548\x03\x02\x02\x02\u0547\u0544\x03\x02\x02\x02\u0547\u0548" +
		"\x03\x02\x02\x02\u0548\u0549\x03\x02\x02\x02\u0549\u054B\x07\x86\x02\x02" +
		"\u054A\u054C\x05\xDAn\x02\u054B\u054A\x03\x02\x02\x02\u054B\u054C\x03" +
		"\x02\x02\x02\u054C\xD7\x03\x02\x02\x02\u054D\u054E\x07\x86\x02\x02\u054E" +
		"\xD9\x03\x02\x02\x02\u054F\u0551\x07W\x02\x02\u0550\u0552\x05\xDCo\x02" +
		"\u0551\u0550\x03\x02\x02\x02\u0551\u0552\x03\x02\x02\x02\u0552\u0553\x03" +
		"\x02\x02\x02\u0553\u0554\x07X\x02\x02\u0554\xDB\x03\x02\x02\x02\u0555" +
		"\u0557\x05\xDEp\x02\u0556\u0555\x03\x02\x02\x02\u0557\u0558\x03\x02\x02" +
		"\x02\u0558\u0556\x03\x02\x02\x02\u0558\u0559\x03\x02\x02\x02\u0559\xDD" +
		"\x03\x02\x02\x02\u055A\u055B\x07W\x02\x02\u055B\u055C\x05\xDCo\x02\u055C" +
		"\u055D\x07X\x02\x02\u055D\u056C\x03\x02\x02\x02\u055E\u055F\x07Y\x02\x02" +
		"\u055F\u0560\x05\xDCo\x02\u0560\u0561\x07Z\x02\x02\u0561\u056C\x03\x02" +
		"\x02\x02\u0562\u0563\x07[\x02\x02\u0563\u0564\x05\xDCo\x02\u0564\u0565" +
		"\x07\\\x02\x02\u0565\u056C\x03\x02\x02\x02\u0566\u0568\n\x12\x02\x02\u0567" +
		"\u0566\x03\x02\x02\x02\u0568\u0569\x03\x02\x02\x02\u0569\u0567\x03\x02" +
		"\x02\x02\u0569\u056A\x03\x02\x02\x02\u056A\u056C\x03\x02\x02\x02\u056B" +
		"\u055A\x03\x02\x02\x02\u056B\u055E\x03\x02\x02\x02\u056B\u0562\x03\x02" +
		"\x02\x02\u056B\u0567\x03\x02\x02\x02\u056C\xDF\x03\x02\x02\x02\u056D\u0572" +
		"\x05\xE2r\x02\u056E\u056F\x07|\x02\x02\u056F\u0571\x05\xE2r\x02\u0570" +
		"\u056E\x03\x02\x02\x02\u0571\u0574\x03\x02\x02\x02\u0572\u0570\x03\x02" +
		"\x02\x02\u0572\u0573\x03\x02\x02\x02\u0573\xE1\x03\x02\x02\x02\u0574\u0572" +
		"\x03\x02\x02\x02\u0575\u0577\x05\xE4s\x02\u0576\u0578\x05\u010E\x88\x02" +
		"\u0577\u0576\x03\x02\x02\x02\u0577\u0578\x03\x02\x02\x02\u0578\xE3\x03" +
		"\x02\x02\x02\u0579\u057F\x05\xE6t\x02\u057A\u057B\x05\xE8u\x02\u057B\u057C" +
		"\x05\xEAv\x02\u057C\u057D\x05\xECw\x02\u057D\u057F\x03\x02\x02\x02\u057E" +
		"\u0579\x03\x02\x02\x02\u057E\u057A\x03\x02\x02\x02\u057F\xE5\x03\x02\x02" +
		"\x02\u0580\u0582\x05\xEEx\x02\u0581\u0583\x07\x18\x02\x02\u0582\u0581" +
		"\x03\x02\x02\x02\u0582\u0583\x03\x02\x02\x02\u0583\u0585\x03\x02\x02\x02" +
		"\u0584\u0580\x03\x02\x02\x02\u0585\u0588\x03\x02\x02\x02\u0586\u0584\x03" +
		"\x02\x02\x02\u0586\u0587\x03\x02\x02\x02\u0587\u0589\x03\x02\x02\x02\u0588" +
		"\u0586\x03\x02\x02\x02\u0589\u058A\x05\xE8u\x02\u058A\xE7\x03\x02\x02" +
		"\x02\u058B\u058C\bu\x01\x02\u058C\u058E\x05\xF6|\x02\u058D\u058F\x05\xCE" +
		"h\x02\u058E\u058D\x03\x02\x02\x02\u058E\u058F\x03\x02\x02\x02\u058F\u0595" +
		"\x03\x02\x02\x02\u0590\u0591\x07W\x02\x02\u0591\u0592\x05\xE6t\x02\u0592" +
		"\u0593\x07X\x02\x02\u0593\u0595\x03\x02\x02\x02\u0594\u058B\x03\x02\x02" +
		"\x02\u0594\u0590\x03\x02\x02\x02\u0595\u05A4\x03\x02\x02\x02\u0596\u05A0" +
		"\f\x04\x02\x02\u0597\u05A1\x05\xEAv\x02\u0598\u059A\x07Y\x02\x02\u0599" +
		"\u059B\x05^0\x02\u059A\u0599\x03\x02\x02\x02\u059A\u059B\x03\x02\x02\x02" +
		"\u059B\u059C\x03\x02\x02\x02\u059C\u059E\x07Z\x02\x02\u059D\u059F\x05" +
		"\xCEh\x02\u059E\u059D\x03\x02\x02\x02\u059E\u059F\x03\x02\x02\x02\u059F" +
		"\u05A1\x03\x02\x02\x02\u05A0\u0597\x03\x02\x02\x02\u05A0\u0598\x03\x02" +
		"\x02\x02\u05A1\u05A3\x03\x02\x02\x02\u05A2\u0596\x03\x02\x02\x02\u05A3" +
		"\u05A6\x03\x02\x02\x02\u05A4\u05A2\x03\x02\x02\x02\u05A4\u05A5\x03\x02" +
		"\x02\x02\u05A5\xE9\x03\x02\x02\x02\u05A6\u05A4\x03\x02\x02\x02\u05A7\u05A9" +
		"\x07W\x02\x02\u05A8\u05AA\x05\u0104\x83\x02\u05A9\u05A8\x03\x02\x02\x02" +
		"\u05A9\u05AA\x03\x02\x02\x02\u05AA\u05AB\x03\x02\x02\x02\u05AB\u05AD\x07" +
		"X\x02\x02\u05AC\u05AE\x05\xF0y\x02\u05AD\u05AC\x03\x02\x02\x02\u05AD\u05AE" +
		"\x03\x02\x02\x02\u05AE\u05B0\x03\x02\x02\x02\u05AF\u05B1\x05\xF4{\x02" +
		"\u05B0\u05AF\x03\x02\x02\x02\u05B0\u05B1\x03\x02\x02\x02\u05B1\u05B3\x03" +
		"\x02\x02\x02\u05B2\u05B4\x05\u0174\xBB\x02\u05B3\u05B2\x03\x02\x02\x02" +
		"\u05B3\u05B4\x03\x02\x02\x02\u05B4\u05B6\x03\x02\x02\x02\u05B5\u05B7\x05" +
		"\xCEh\x02\u05B6\u05B5\x03\x02\x02\x02\u05B6\u05B7\x03\x02\x02\x02\u05B7" +
		"\xEB\x03\x02\x02\x02\u05B8\u05B9\x07~\x02\x02\u05B9\u05BB\x05\x9AN\x02" +
		"\u05BA\u05BC\x05\xFA~\x02\u05BB\u05BA\x03\x02\x02\x02\u05BB\u05BC\x03" +
		"\x02\x02\x02\u05BC\xED\x03\x02\x02\x02\u05BD\u05BF\t\x13\x02\x02\u05BE" +
		"\u05C0\x05\xCEh\x02\u05BF\u05BE\x03\x02\x02\x02\u05BF\u05C0\x03\x02\x02" +
		"\x02\u05C0\u05CC\x03\x02\x02\x02\u05C1\u05C3\x05\f\x07\x02\u05C2\u05C1" +
		"\x03\x02\x02\x02\u05C2\u05C3\x03\x02\x02\x02\u05C3\u05C4\x03\x02\x02\x02" +
		"\u05C4\u05C6\x07_\x02\x02\u05C5\u05C7\x05\xCEh\x02\u05C6\u05C5\x03\x02" +
		"\x02\x02\u05C6\u05C7\x03\x02\x02\x02\u05C7\u05C9\x03\x02\x02\x02\u05C8" +
		"\u05CA\x05\xF0y\x02\u05C9\u05C8\x03\x02\x02\x02\u05C9\u05CA\x03\x02\x02" +
		"\x02\u05CA\u05CC\x03\x02\x02\x02\u05CB\u05BD\x03\x02\x02\x02\u05CB\u05C2" +
		"\x03\x02\x02\x02\u05CC\xEF\x03\x02\x02\x02\u05CD\u05CF\x05\xF2z\x02\u05CE" +
		"\u05CD\x03\x02\x02\x02\u05CF\u05D0\x03\x02\x02\x02\u05D0\u05CE\x03\x02" +
		"\x02\x02\u05D0\u05D1\x03\x02\x02\x02\u05D1\xF1\x03\x02\x02\x02\u05D2\u05D3" +
		"\t\x14\x02\x02\u05D3\xF3\x03\x02\x02\x02\u05D4\u05D5\t\x13\x02\x02\u05D5" +
		"\xF5\x03\x02\x02\x02\u05D6\u05D8\x07\x85\x02\x02\u05D7\u05D6\x03\x02\x02" +
		"\x02\u05D7\u05D8\x03\x02\x02\x02\u05D8\u05D9\x03\x02\x02\x02\u05D9\u05DA" +
		"\x05\x06\x04\x02\u05DA\xF7\x03\x02\x02\x02\u05DB\u05DD\x05\x98M\x02\u05DC" +
		"\u05DE\x05\xFA~\x02\u05DD\u05DC\x03\x02\x02\x02\u05DD\u05DE\x03\x02\x02" +
		"\x02\u05DE\xF9\x03\x02\x02\x02\u05DF\u05E8\x05\xFC\x7F\x02\u05E0\u05E2" +
		"\x05\xFE\x80\x02\u05E1\u05E0\x03\x02\x02\x02\u05E1\u05E2\x03\x02\x02\x02" +
		"\u05E2\u05E3\x03\x02\x02\x02\u05E3\u05E4\x05\xEAv\x02\u05E4\u05E5\x05" +
		"\xECw\x02\u05E5\u05E8\x03\x02\x02\x02\u05E6\u05E8\x05\u0100\x81\x02\u05E7" +
		"\u05DF\x03\x02\x02\x02\u05E7\u05E1\x03\x02\x02\x02\u05E7\u05E6\x03\x02" +
		"\x02\x02\u05E8\xFB\x03\x02\x02\x02\u05E9\u05F3\x05\xFE\x80\x02\u05EA\u05EC" +
		"\x05\xEEx\x02\u05EB\u05EA\x03\x02\x02\x02\u05EC\u05ED\x03\x02\x02\x02" +
		"\u05ED\u05EB\x03\x02\x02\x02\u05ED\u05EE\x03\x02\x02\x02\u05EE\u05F0\x03" +
		"\x02\x02\x02\u05EF\u05F1\x05\xFE\x80\x02\u05F0\u05EF\x03\x02\x02\x02\u05F0" +
		"\u05F1\x03\x02\x02\x02\u05F1\u05F3\x03\x02\x02\x02\u05F2\u05E9\x03\x02" +
		"\x02\x02\u05F2\u05EB\x03\x02\x02\x02\u05F3\xFD\x03\x02\x02\x02\u05F4\u05F5" +
		"\b\x80\x01\x02\u05F5\u0603\x05\xEAv\x02\u05F6\u05F8\x07Y\x02\x02\u05F7" +
		"\u05F9\x05^0\x02\u05F8\u05F7\x03\x02\x02\x02\u05F8\u05F9\x03\x02\x02\x02" +
		"\u05F9\u05FA\x03\x02\x02\x02\u05FA\u05FC\x07Z\x02\x02\u05FB\u05FD\x05" +
		"\xCEh\x02\u05FC\u05FB\x03\x02\x02\x02\u05FC\u05FD\x03\x02\x02\x02\u05FD" +
		"\u0603\x03\x02\x02\x02\u05FE\u05FF\x07W\x02\x02\u05FF\u0600\x05\xFC\x7F" +
		"\x02\u0600\u0601\x07X\x02\x02\u0601\u0603\x03\x02\x02\x02\u0602\u05F4" +
		"\x03\x02\x02\x02\u0602\u05F6\x03\x02\x02\x02\u0602\u05FE\x03\x02\x02\x02" +
		"\u0603\u0613\x03\x02\x02\x02\u0604\u060F\f\x06\x02\x02\u0605\u0610\x05" +
		"\xEAv\x02\u0606\u0607\x05\xFE\x80\x02\u0607\u0609\x07Y\x02\x02\u0608\u060A" +
		"\x05^0\x02\u0609\u0608\x03\x02\x02\x02\u0609\u060A\x03\x02\x02\x02\u060A" +
		"\u060B\x03\x02\x02\x02\u060B\u060D\x07Z\x02\x02\u060C\u060E\x05\xCEh\x02" +
		"\u060D\u060C\x03\x02\x02\x02\u060D\u060E\x03\x02\x02\x02\u060E\u0610\x03" +
		"\x02\x02\x02\u060F\u0605\x03\x02\x02\x02\u060F\u0606\x03\x02\x02\x02\u0610" +
		"\u0612\x03\x02\x02\x02\u0611\u0604\x03\x02\x02\x02\u0612\u0615\x03\x02" +
		"\x02\x02\u0613\u0611\x03\x02\x02\x02\u0613\u0614\x03\x02\x02\x02\u0614" +
		"\xFF\x03\x02\x02\x02\u0615\u0613\x03\x02\x02\x02\u0616\u0618\x05\xEEx" +
		"\x02\u0617\u0616\x03\x02\x02\x02\u0618\u061B\x03\x02\x02\x02\u0619\u0617" +
		"\x03\x02\x02\x02\u0619\u061A\x03\x02\x02\x02\u061A\u061C\x03\x02\x02\x02" +
		"\u061B\u0619\x03";
	private static readonly _serializedATNSegment3: string =
		"\x02\x02\x02\u061C\u061D\x05\u0102\x82\x02\u061D\u0101\x03\x02\x02\x02" +
		"\u061E\u061F\b\x82\x01\x02\u061F\u0620\x07\x85\x02\x02\u0620\u062F\x03" +
		"\x02\x02\x02\u0621\u062B\f\x04\x02\x02\u0622\u062C\x05\xEAv\x02\u0623" +
		"\u0625\x07Y\x02\x02\u0624\u0626\x05^0\x02\u0625\u0624\x03\x02\x02\x02" +
		"\u0625\u0626\x03\x02\x02\x02\u0626\u0627\x03\x02\x02\x02\u0627\u0629\x07" +
		"Z\x02\x02\u0628\u062A\x05\xCEh\x02\u0629\u0628\x03\x02\x02\x02\u0629\u062A" +
		"\x03\x02\x02\x02\u062A\u062C\x03\x02\x02\x02\u062B\u0622\x03\x02\x02\x02" +
		"\u062B\u0623\x03\x02\x02\x02\u062C\u062E\x03\x02\x02\x02\u062D\u0621\x03" +
		"\x02\x02\x02\u062E\u0631\x03\x02\x02\x02\u062F\u062D\x03\x02\x02\x02\u062F" +
		"\u0630\x03\x02\x02\x02\u0630\u0103\x03\x02\x02\x02\u0631\u062F\x03\x02" +
		"\x02\x02\u0632\u0637\x05\u0106\x84\x02\u0633\u0635\x07|\x02\x02\u0634" +
		"\u0633\x03\x02\x02\x02\u0634\u0635\x03\x02\x02\x02\u0635\u0636\x03\x02" +
		"\x02\x02\u0636\u0638\x07\x85\x02\x02\u0637\u0634\x03\x02\x02\x02\u0637" +
		"\u0638\x03\x02\x02\x02\u0638\u0105\x03\x02\x02\x02\u0639\u063E\x05\u0108" +
		"\x85\x02\u063A\u063B\x07|\x02\x02\u063B\u063D\x05\u0108\x85\x02\u063C" +
		"\u063A\x03\x02\x02\x02\u063D\u0640\x03\x02\x02\x02\u063E\u063C\x03\x02" +
		"\x02\x02\u063E\u063F\x03\x02\x02\x02\u063F\u0107\x03\x02\x02\x02\u0640" +
		"\u063E\x03\x02\x02\x02\u0641\u0643\x05\xCEh\x02\u0642\u0641\x03\x02\x02" +
		"\x02\u0642\u0643\x03\x02\x02\x02\u0643\u0644\x03\x02\x02\x02\u0644\u0649" +
		"\x05\x8CG\x02\u0645\u064A\x05\xE4s\x02\u0646\u0648\x05\xFA~\x02\u0647" +
		"\u0646\x03\x02\x02\x02\u0647\u0648\x03\x02\x02\x02\u0648\u064A\x03\x02" +
		"\x02\x02\u0649\u0645\x03\x02\x02\x02\u0649\u0647\x03\x02\x02\x02\u064A" +
		"\u064D\x03\x02\x02\x02\u064B\u064C\x07g\x02\x02\u064C\u064E\x05\u0112" +
		"\x8A\x02\u064D\u064B\x03\x02\x02\x02\u064D\u064E\x03\x02\x02\x02\u064E" +
		"\u0109\x03\x02\x02\x02\u064F\u0651\x05\xCEh\x02\u0650\u064F\x03\x02\x02" +
		"\x02\u0650\u0651\x03\x02\x02\x02\u0651\u0653\x03\x02\x02\x02\u0652\u0654" +
		"\x05\x8CG\x02\u0653\u0652\x03\x02\x02\x02\u0653\u0654\x03\x02\x02\x02" +
		"\u0654\u0655\x03\x02\x02\x02\u0655\u0657\x05\xE4s\x02\u0656\u0658\x05" +
		"\u012C\x97\x02\u0657\u0656\x03\x02\x02\x02\u0657\u0658\x03\x02\x02\x02" +
		"\u0658\u0659\x03\x02\x02\x02\u0659\u065A\x05\u010C\x87\x02\u065A\u010B" +
		"\x03\x02\x02\x02\u065B\u065D\x05\u0144\xA3\x02\u065C\u065B\x03\x02\x02" +
		"\x02\u065C\u065D\x03\x02\x02\x02\u065D\u065E\x03\x02\x02\x02\u065E\u0664" +
		"\x05f4\x02\u065F\u0664\x05\u016A\xB6\x02\u0660\u0661\x07g\x02\x02\u0661" +
		"\u0662\t\x15\x02\x02\u0662\u0664\x07\x82\x02\x02\u0663\u065C\x03\x02\x02" +
		"\x02\u0663\u065F\x03\x02\x02\x02\u0663\u0660\x03\x02\x02\x02\u0664\u010D" +
		"\x03\x02\x02\x02\u0665\u066B\x05\u0110\x89\x02\u0666\u0667\x07W\x02\x02" +
		"\u0667\u0668\x05$\x13\x02\u0668\u0669\x07X\x02\x02\u0669\u066B\x03\x02" +
		"\x02\x02\u066A\u0665\x03\x02\x02\x02\u066A\u0666\x03\x02\x02\x02\u066B" +
		"\u010F\x03\x02\x02\x02\u066C\u066D\x07g\x02\x02\u066D\u0670\x05\u0112" +
		"\x8A\x02\u066E\u0670\x05\u0116\x8C\x02\u066F\u066C\x03\x02\x02\x02\u066F" +
		"\u066E\x03\x02\x02\x02\u0670\u0111\x03\x02\x02\x02\u0671\u0674\x05X-\x02" +
		"\u0672\u0674\x05\u0116\x8C\x02\u0673\u0671\x03\x02\x02\x02\u0673\u0672" +
		"\x03\x02\x02\x02\u0674\u0113\x03\x02\x02\x02\u0675\u0677\x05\u0112\x8A" +
		"\x02\u0676\u0678\x07\x85\x02\x02\u0677\u0676\x03\x02\x02\x02\u0677\u0678" +
		"\x03\x02\x02\x02\u0678\u0680\x03\x02\x02\x02\u0679\u067A\x07|\x02\x02" +
		"\u067A\u067C\x05\u0112\x8A\x02\u067B\u067D\x07\x85\x02\x02\u067C\u067B" +
		"\x03\x02\x02\x02\u067C\u067D\x03\x02\x02\x02\u067D\u067F\x03\x02\x02\x02" +
		"\u067E\u0679\x03\x02\x02\x02\u067F\u0682\x03\x02\x02\x02\u0680\u067E\x03" +
		"\x02\x02\x02\u0680\u0681\x03\x02\x02\x02\u0681\u0115\x03\x02\x02\x02\u0682" +
		"\u0680\x03\x02\x02\x02\u0683\u0688\x07[\x02\x02\u0684\u0686\x05\u0114" +
		"\x8B\x02\u0685\u0687\x07|\x02\x02\u0686\u0685\x03\x02\x02\x02\u0686\u0687" +
		"\x03\x02\x02\x02\u0687\u0689\x03\x02\x02\x02\u0688\u0684\x03\x02\x02\x02" +
		"\u0688\u0689\x03\x02\x02\x02\u0689\u068A\x03\x02\x02\x02\u068A\u068B\x07" +
		"\\\x02\x02\u068B\u0117\x03\x02\x02\x02\u068C\u068F\x07\x86\x02\x02\u068D" +
		"\u068F\x05\u0158\xAD\x02\u068E\u068C\x03\x02\x02\x02\u068E\u068D\x03\x02" +
		"\x02\x02\u068F\u0119\x03\x02\x02\x02\u0690\u0691\x05\u011C\x8F\x02\u0691" +
		"\u0693\x07[\x02\x02\u0692\u0694\x05\u0124\x93\x02\u0693\u0692\x03\x02" +
		"\x02\x02\u0693\u0694\x03\x02\x02\x02\u0694\u0695\x03\x02\x02\x02\u0695" +
		"\u0696\x07\\\x02\x02\u0696\u011B\x03\x02\x02\x02\u0697\u0699\x05\u0122" +
		"\x92\x02\u0698\u069A\x05\xCEh\x02\u0699\u0698\x03\x02\x02\x02\u0699\u069A" +
		"\x03\x02\x02\x02\u069A\u069F\x03\x02\x02\x02\u069B\u069D\x05\u011E\x90" +
		"\x02\u069C\u069E\x05\u0120\x91\x02\u069D\u069C\x03\x02\x02\x02\u069D\u069E" +
		"\x03\x02\x02\x02\u069E\u06A0\x03\x02\x02\x02\u069F\u069B\x03\x02\x02\x02" +
		"\u069F\u06A0\x03\x02\x02\x02\u06A0\u06A2\x03\x02\x02\x02\u06A1\u06A3\x05" +
		"\u0132\x9A\x02\u06A2\u06A1\x03\x02\x02\x02\u06A2\u06A3\x03\x02\x02\x02" +
		"\u06A3\u06AF\x03\x02\x02\x02\u06A4\u06A6\x07O\x02\x02\u06A5\u06A7\x05" +
		"\xCEh\x02\u06A6\u06A5\x03\x02\x02\x02\u06A6\u06A7\x03\x02\x02\x02\u06A7" +
		"\u06AC\x03\x02\x02\x02\u06A8\u06AA\x05\u011E\x90\x02\u06A9\u06AB\x05\u0120" +
		"\x91\x02\u06AA\u06A9\x03\x02\x02\x02\u06AA\u06AB\x03\x02\x02\x02\u06AB" +
		"\u06AD\x03\x02\x02\x02\u06AC\u06A8\x03\x02\x02\x02\u06AC\u06AD\x03\x02" +
		"\x02\x02\u06AD\u06AF\x03\x02\x02\x02\u06AE\u0697\x03\x02\x02\x02\u06AE" +
		"\u06A4\x03\x02\x02\x02\u06AF\u011D\x03\x02\x02\x02\u06B0\u06B2\x05\f\x07" +
		"\x02\u06B1\u06B0\x03\x02\x02\x02\u06B1\u06B2\x03\x02\x02\x02\u06B2\u06B3" +
		"\x03\x02\x02\x02\u06B3\u06B4\x05\u0118\x8D\x02\u06B4\u011F\x03\x02\x02" +
		"\x02\u06B5\u06B6\x07(\x02\x02\u06B6\u0121\x03\x02\x02\x02\u06B7\u06B8" +
		"\t\x11\x02\x02\u06B8\u0123\x03\x02\x02\x02\u06B9\u06BE\x05\u0126\x94\x02" +
		"\u06BA\u06BB\x05\u013C\x9F\x02\u06BB\u06BC\x07\x80\x02\x02\u06BC\u06BE" +
		"\x03\x02\x02\x02\u06BD\u06B9\x03\x02\x02\x02\u06BD\u06BA\x03\x02\x02\x02" +
		"\u06BE\u06BF\x03\x02\x02\x02\u06BF\u06BD\x03\x02\x02\x02\u06BF\u06C0\x03" +
		"\x02\x02\x02\u06C0\u0125\x03\x02\x02\x02\u06C1\u06C3\x05\xCEh\x02\u06C2" +
		"\u06C1\x03\x02\x02\x02\u06C2\u06C3\x03\x02\x02\x02\u06C3\u06C5\x03\x02" +
		"\x02\x02\u06C4\u06C6\x05\x8CG\x02\u06C5\u06C4\x03\x02\x02\x02\u06C5\u06C6" +
		"\x03\x02\x02\x02\u06C6\u06C8\x03\x02\x02\x02\u06C7\u06C9\x05\u0128\x95" +
		"\x02\u06C8\u06C7\x03\x02\x02\x02\u06C8\u06C9\x03\x02\x02\x02\u06C9\u06CA" +
		"\x03\x02\x02\x02\u06CA\u06D2\x07\x82\x02\x02\u06CB\u06D2\x05\u010A\x86" +
		"\x02\u06CC\u06D2\x05\xC6d\x02\u06CD\u06D2\x05\x84C\x02\u06CE\u06D2\x05" +
		"\u0150\xA9\x02\u06CF\u06D2\x05\x80A\x02\u06D0\u06D2\x05\x86D\x02\u06D1" +
		"\u06C2\x03\x02\x02\x02\u06D1\u06CB\x03\x02\x02\x02\u06D1\u06CC\x03\x02" +
		"\x02\x02\u06D1\u06CD\x03\x02\x02\x02\u06D1\u06CE\x03\x02\x02\x02\u06D1" +
		"\u06CF\x03\x02\x02\x02\u06D1\u06D0\x03\x02\x02\x02\u06D2\u0127\x03\x02" +
		"\x02\x02\u06D3\u06D8\x05\u012A\x96\x02\u06D4\u06D5\x07|\x02\x02\u06D5" +
		"\u06D7\x05\u012A\x96\x02\u06D6\u06D4\x03\x02\x02\x02\u06D7\u06DA\x03\x02" +
		"\x02\x02\u06D8\u06D6\x03\x02\x02\x02\u06D8\u06D9\x03\x02\x02\x02\u06D9" +
		"\u0129\x03\x02\x02\x02\u06DA\u06D8\x03\x02\x02\x02\u06DB\u06E5\x05\xE4" +
		"s\x02\u06DC\u06DE\x05\u012C\x97\x02\u06DD\u06DC\x03\x02\x02\x02\u06DD" +
		"\u06DE\x03\x02\x02\x02\u06DE\u06E0\x03\x02\x02\x02\u06DF\u06E1\x05\u0130" +
		"\x99\x02\u06E0\u06DF\x03\x02\x02\x02\u06E0\u06E1\x03\x02\x02\x02\u06E1" +
		"\u06E6\x03\x02\x02\x02\u06E2\u06E4\x05\u0110\x89\x02\u06E3\u06E2\x03\x02" +
		"\x02\x02\u06E3\u06E4\x03\x02\x02\x02\u06E4\u06E6\x03\x02\x02\x02\u06E5" +
		"\u06DD\x03\x02\x02\x02\u06E5\u06E3\x03\x02\x02\x02\u06E6\u06F0\x03\x02" +
		"\x02\x02\u06E7\u06E9\x07\x86\x02\x02\u06E8\u06E7\x03\x02\x02\x02\u06E8" +
		"\u06E9\x03\x02\x02\x02\u06E9\u06EB\x03\x02\x02\x02\u06EA\u06EC\x05\xCE" +
		"h\x02\u06EB\u06EA\x03\x02\x02\x02\u06EB\u06EC\x03\x02\x02\x02\u06EC\u06ED" +
		"\x03\x02\x02\x02\u06ED\u06EE\x07\x80\x02\x02\u06EE\u06F0\x05^0\x02\u06EF" +
		"\u06DB\x03\x02\x02\x02\u06EF\u06E8\x03\x02\x02\x02\u06F0\u012B\x03\x02" +
		"\x02\x02\u06F1\u06F3\x05\u012E\x98\x02\u06F2\u06F1\x03\x02\x02\x02\u06F3" +
		"\u06F4\x03\x02\x02\x02\u06F4\u06F2\x03\x02\x02\x02\u06F4\u06F5\x03\x02" +
		"\x02\x02\u06F5\u012D\x03\x02\x02\x02\u06F6\u06F7\t\x16\x02\x02\u06F7\u012F" +
		"\x03\x02\x02\x02\u06F8\u06F9\x07g\x02\x02\u06F9\u06FA\x07\x88\x02\x02" +
		"\u06FA\u06FB\b\x99\x01\x02\u06FB\u0131\x03\x02\x02\x02\u06FC\u06FD\x07" +
		"\x80\x02\x02\u06FD\u06FE\x05\u0134\x9B\x02\u06FE\u0133\x03\x02\x02\x02" +
		"\u06FF\u0701\x05\u0136\x9C\x02\u0700\u0702\x07\x85\x02\x02\u0701\u0700" +
		"\x03\x02\x02\x02\u0701\u0702\x03\x02\x02\x02\u0702\u070A\x03\x02\x02\x02" +
		"\u0703\u0704\x07|\x02\x02\u0704\u0706\x05\u0136\x9C\x02\u0705\u0707\x07" +
		"\x85\x02\x02\u0706\u0705\x03\x02\x02\x02\u0706\u0707\x03\x02\x02\x02\u0707" +
		"\u0709\x03\x02\x02\x02\u0708\u0703\x03\x02\x02\x02\u0709\u070C\x03\x02" +
		"\x02\x02\u070A\u0708\x03\x02\x02\x02\u070A\u070B\x03\x02\x02\x02\u070B" +
		"\u0135\x03\x02\x02\x02\u070C\u070A\x03\x02\x02\x02\u070D\u070F\x05\xCE" +
		"h\x02\u070E\u070D\x03\x02\x02\x02\u070E\u070F\x03\x02\x02\x02\u070F\u071C" +
		"\x03\x02\x02\x02\u0710\u071D\x05\u013A\x9E\x02\u0711\u0713\x07R\x02\x02" +
		"\u0712\u0714\x05\u013C\x9F\x02\u0713\u0712\x03\x02\x02\x02\u0713\u0714" +
		"\x03\x02\x02\x02\u0714\u0715\x03\x02\x02\x02\u0715\u071D\x05\u013A\x9E" +
		"\x02\u0716\u0718\x05\u013C\x9F\x02\u0717\u0719\x07R\x02\x02\u0718\u0717" +
		"\x03\x02\x02\x02\u0718\u0719\x03\x02\x02\x02\u0719\u071A\x03\x02\x02\x02" +
		"\u071A\u071B\x05\u013A\x9E\x02\u071B\u071D\x03\x02\x02\x02\u071C\u0710" +
		"\x03\x02\x02\x02\u071C\u0711\x03\x02\x02\x02\u071C\u0716\x03\x02\x02\x02" +
		"\u071D\u0137\x03\x02\x02\x02\u071E\u0720\x05\f\x07\x02\u071F\u071E\x03" +
		"\x02\x02\x02\u071F\u0720\x03\x02\x02\x02\u0720\u0721\x03\x02\x02\x02\u0721" +
		"\u0724\x05\u0118\x8D\x02\u0722\u0724\x05\xA4S\x02\u0723\u071F\x03\x02" +
		"\x02\x02\u0723\u0722\x03\x02\x02\x02\u0724\u0139\x03\x02\x02\x02\u0725" +
		"\u0726\x05\u0138\x9D\x02\u0726\u013B\x03\x02\x02\x02\u0727\u0728\t\x17" +
		"\x02\x02\u0728\u013D\x03\x02\x02\x02\u0729\u072A\x076\x02\x02\u072A\u072B" +
		"\x05\u0140\xA1\x02\u072B\u013F\x03\x02\x02\x02\u072C\u072E\x05\x98M\x02" +
		"\u072D\u072F\x05\u0142\xA2\x02\u072E\u072D\x03\x02\x02\x02\u072E\u072F" +
		"\x03\x02\x02\x02\u072F\u0141\x03\x02\x02\x02\u0730\u0732\x05\xEEx\x02" +
		"\u0731\u0733\x05\u0142\xA2\x02\u0732\u0731\x03\x02\x02\x02\u0732\u0733" +
		"\x03\x02\x02\x02\u0733\u0143\x03\x02\x02\x02\u0734\u0735\x07\x80\x02\x02" +
		"\u0735\u0736\x05\u0146\xA4\x02\u0736\u0145\x03\x02\x02\x02\u0737\u0739" +
		"\x05\u0148\xA5\x02\u0738\u073A\x07\x85\x02\x02\u0739\u0738\x03\x02\x02" +
		"\x02\u0739\u073A\x03\x02\x02\x02\u073A\u0742\x03\x02\x02\x02\u073B\u073C" +
		"\x07|\x02\x02\u073C\u073E\x05\u0148\xA5\x02\u073D\u073F\x07\x85\x02\x02" +
		"\u073E\u073D\x03\x02\x02\x02\u073E\u073F\x03\x02\x02\x02\u073F\u0741\x03" +
		"\x02\x02\x02\u0740\u073B\x03\x02\x02\x02\u0741\u0744\x03\x02\x02\x02\u0742" +
		"\u0740\x03\x02\x02\x02\u0742\u0743\x03\x02\x02\x02\u0743\u0147\x03\x02" +
		"\x02\x02\u0744\u0742\x03\x02\x02\x02\u0745\u074C\x05\u014A\xA6\x02\u0746" +
		"\u0748\x07W\x02\x02\u0747\u0749\x05$\x13\x02\u0748\u0747\x03\x02\x02\x02" +
		"\u0748\u0749\x03\x02\x02\x02\u0749\u074A\x03\x02\x02\x02\u074A\u074D\x07" +
		"X\x02\x02\u074B\u074D\x05\u0116\x8C\x02\u074C\u0746\x03\x02\x02\x02\u074C" +
		"\u074B\x03\x02\x02\x02\u074D\u0149\x03\x02\x02\x02\u074E\u0751\x05\u0138" +
		"\x9D\x02\u074F\u0751\x07\x86\x02\x02\u0750\u074E\x03\x02\x02\x02\u0750" +
		"\u074F\x03\x02\x02\x02\u0751\u014B\x03\x02\x02\x02\u0752\u0753\x076\x02" +
		"\x02\u0753\u0754\x05\u017C\xBF\x02\u0754\u014D\x03\x02\x02\x02\u0755\u0759" +
		"\x076\x02\x02\u0756\u0757\x07\x06\x02\x02\u0757\u075A\x07\x86\x02\x02" +
		"\u0758\u075A\x07\x8E\x02\x02\u0759\u0756\x03\x02\x02\x02\u0759\u0758\x03" +
		"\x02\x02\x02\u075A\u014F\x03\x02\x02\x02\u075B\u075C\x07F\x02\x02\u075C" +
		"\u075D\x07h\x02\x02\u075D\u075E\x05\u0152\xAA\x02\u075E\u075F\x07i\x02" +
		"\x02\u075F\u0760\x05|?\x02\u0760\u0151\x03\x02\x02\x02\u0761\u0766\x05" +
		"\u0154\xAB\x02\u0762\u0763\x07|\x02\x02\u0763\u0765\x05\u0154\xAB\x02" +
		"\u0764\u0762\x03\x02\x02\x02\u0765\u0768\x03\x02\x02\x02\u0766\u0764\x03" +
		"\x02\x02\x02\u0766\u0767\x03\x02\x02\x02\u0767\u0153\x03\x02\x02\x02\u0768" +
		"\u0766\x03\x02\x02\x02\u0769\u076C\x05\u0156\xAC\x02\u076A\u076C\x05\u0108" +
		"\x85\x02\u076B\u0769\x03\x02\x02\x02\u076B\u076A\x03\x02\x02\x02\u076C" +
		"\u0155\x03\x02\x02\x02\u076D\u076E\x07F\x02\x02\u076E\u076F\x07h\x02\x02" +
		"\u076F\u0770\x05\u0152\xAA\x02\u0770\u0771\x07i\x02\x02\u0771\u0773\x03" +
		"\x02\x02\x02\u0772\u076D\x03\x02\x02\x02\u0772\u0773\x03\x02\x02\x02\u0773" +
		"\u0774\x03\x02\x02\x02\u0774\u0777\x07\x17\x02\x02\u0775\u0777\x07N\x02" +
		"\x02\u0776\u0772\x03\x02\x02\x02\u0776\u0775\x03\x02\x02\x02\u0777\u0783" +
		"\x03\x02\x02\x02\u0778\u077A\x07\x85\x02\x02\u0779\u0778\x03\x02\x02\x02" +
		"\u0779\u077A\x03\x02\x02\x02\u077A\u077C\x03\x02\x02\x02\u077B\u077D\x07" +
		"\x86\x02\x02\u077C\u077B\x03\x02\x02\x02\u077C\u077D\x03\x02\x02\x02\u077D" +
		"\u0784\x03\x02\x02\x02\u077E\u0780\x07\x86\x02\x02\u077F\u077E\x03\x02" +
		"\x02\x02\u077F\u0780\x03\x02\x02\x02\u0780\u0781\x03\x02\x02\x02\u0781" +
		"\u0782\x07g\x02\x02\u0782\u0784\x05\xF8}\x02\u0783\u0779\x03\x02\x02\x02" +
		"\u0783\u077F\x03\x02\x02\x02\u0784\u0157\x03\x02\x02\x02\u0785\u0786\x05" +
		"\u015C\xAF\x02\u0786\u0788\x07h\x02\x02\u0787\u0789\x05\u015E\xB0\x02" +
		"\u0788\u0787\x03\x02\x02\x02\u0788\u0789\x03\x02\x02\x02\u0789\u078A\x03" +
		"\x02\x02\x02\u078A\u078B\x07i\x02\x02\u078B\u0159\x03\x02\x02\x02\u078C" +
		"\u0798\x05\u0158\xAD\x02\u078D\u0790\x05\u014C\xA7\x02\u078E\u0790\x05" +
		"\u014E\xA8\x02\u078F\u078D\x03\x02\x02\x02\u078F\u078E\x03\x02\x02\x02" +
		"\u0790\u0791\x03\x02\x02\x02\u0791\u0793\x07h\x02\x02\u0792\u0794\x05" +
		"\u015E\xB0\x02\u0793\u0792\x03\x02\x02\x02\u0793\u0794\x03\x02\x02\x02" +
		"\u0794\u0795\x03\x02\x02\x02\u0795\u0796\x07i\x02\x02\u0796\u0798\x03" +
		"\x02\x02\x02\u0797\u078C\x03\x02\x02\x02\u0797\u078F\x03\x02\x02\x02\u0798" +
		"\u015B\x03\x02\x02\x02\u0799\u079A\x07\x86\x02\x02\u079A\u015D\x03\x02" +
		"\x02\x02\u079B\u079D\x05\u0160\xB1\x02\u079C\u079E\x07\x85\x02\x02\u079D" +
		"\u079C\x03\x02\x02\x02\u079D\u079E\x03\x02\x02\x02\u079E\u07A6\x03\x02" +
		"\x02\x02\u079F\u07A0\x07|\x02\x02\u07A0\u07A2\x05\u0160\xB1\x02\u07A1" +
		"\u07A3\x07\x85\x02\x02\u07A2\u07A1\x03\x02\x02\x02\u07A2\u07A3\x03\x02" +
		"\x02\x02\u07A3\u07A5\x03\x02\x02\x02\u07A4\u079F\x03\x02\x02\x02\u07A5" +
		"\u07A8\x03\x02\x02\x02\u07A6\u07A4\x03\x02\x02\x02\u07A6\u07A7\x03\x02" +
		"\x02\x02\u07A7\u015F\x03\x02\x02\x02\u07A8\u07A6\x03\x02\x02\x02\u07A9" +
		"\u07AD\x05\xF8}\x02\u07AA\u07AD\x05^0\x02\u07AB\u07AD\x05\x06\x04\x02" +
		"\u07AC\u07A9\x03\x02\x02\x02\u07AC\u07AA\x03\x02\x02\x02\u07AC\u07AB\x03" +
		"\x02\x02\x02\u07AD\u0161\x03\x02\x02\x02\u07AE\u07AF\x07N\x02\x02\u07AF" +
		"\u07B5\x05\f\x07\x02\u07B0\u07B6\x07\x86\x02\x02\u07B1\u07B3\x07F\x02" +
		"\x02\u07B2\u07B1\x03\x02\x02\x02\u07B2\u07B3\x03\x02\x02\x02\u07B3\u07B4" +
		"\x03\x02\x02\x02\u07B4\u07B6\x05\u0158\xAD\x02\u07B5\u07B0\x03\x02\x02" +
		"\x02\u07B5\u07B2\x03\x02\x02\x02\u07B6\u0163\x03\x02\x02\x02\u07B7\u07B9" +
		"\x07&\x02\x02\u07B8\u07B7\x03\x02\x02\x02\u07B8\u07B9\x03\x02\x02\x02" +
		"\u07B9\u07BA\x03\x02\x02\x02\u07BA\u07BB\x07F\x02\x02\u07BB\u07BC\x05" +
		"|?\x02\u07BC\u0165\x03\x02\x02\x02\u07BD\u07BE\x07F\x02\x02\u07BE\u07BF" +
		"\x07h\x02\x02\u07BF\u07C0\x07i\x02\x02\u07C0\u07C1\x05|?\x02\u07C1\u0167" +
		"\x03\x02\x02\x02\u07C2\u07C3\x07K\x02\x02\u07C3\u07C4\x05f4\x02\u07C4" +
		"\u07C5\x05\u016C\xB7\x02\u07C5\u0169\x03\x02\x02\x02\u07C6\u07C8\x07K" +
		"\x02\x02\u07C7\u07C9\x05\u0144\xA3\x02\u07C8\u07C7\x03\x02\x02\x02\u07C8" +
		"\u07C9\x03\x02\x02\x02\u07C9\u07CA\x03\x02\x02\x02\u07CA\u07CB\x05f4\x02" +
		"\u07CB\u07CC\x05\u016C\xB7\x02\u07CC\u016B\x03\x02\x02\x02\u07CD\u07CF" +
		"\x05\u016E\xB8\x02\u07CE\u07CD\x03\x02\x02\x02\u07CF\u07D0\x03\x02\x02" +
		"\x02\u07D0\u07CE\x03\x02\x02\x02\u07D0\u07D1\x03\x02\x02\x02\u07D1\u016D" +
		"\x03\x02\x02\x02\u07D2\u07D3\x07\x13\x02\x02\u07D3\u07D4\x07W\x02\x02" +
		"\u07D4\u07D5\x05\u0170\xB9\x02\u07D5\u07D6\x07X\x02\x02\u07D6\u07D7\x05" +
		"f4\x02\u07D7\u016F\x03\x02\x02\x02\u07D8\u07DA\x05\xCEh\x02\u07D9\u07D8" +
		"\x03\x02\x02\x02\u07D9\u07DA\x03\x02\x02\x02\u07DA\u07DB\x03\x02\x02\x02" +
		"\u07DB\u07DE\x05\x98M\x02\u07DC\u07DF\x05\xE4s\x02\u07DD\u07DF\x05\xFA" +
		"~\x02\u07DE\u07DC\x03\x02\x02\x02\u07DE\u07DD\x03\x02\x02\x02\u07DE\u07DF" +
		"\x03\x02\x02\x02\u07DF\u07E2\x03\x02\x02\x02\u07E0\u07E2\x07\x85\x02\x02" +
		"\u07E1\u07D9\x03\x02\x02\x02\u07E1\u07E0\x03\x02\x02\x02\u07E2\u0171\x03" +
		"\x02\x02\x02\u07E3\u07E5\x07I\x02\x02\u07E4\u07E6\x05X-\x02\u07E5\u07E4" +
		"\x03\x02\x02\x02\u07E5\u07E6\x03\x02\x02\x02\u07E6\u0173\x03\x02\x02\x02" +
		"\u07E7\u07EA\x05\u0176\xBC\x02\u07E8\u07EA\x05\u017A\xBE\x02\u07E9\u07E7" +
		"\x03\x02\x02\x02\u07E9\u07E8\x03\x02\x02\x02\u07EA\u0175\x03\x02\x02\x02" +
		"\u07EB\u07EC\x07I\x02\x02\u07EC\u07EE\x07W\x02\x02\u07ED\u07EF\x05\u0178" +
		"\xBD\x02\u07EE\u07ED\x03\x02\x02\x02\u07EE\u07EF\x03\x02\x02\x02\u07EF" +
		"\u07F0\x03\x02\x02\x02\u07F0\u07F1\x07X\x02\x02\u07F1\u0177\x03\x02\x02" +
		"\x02\u07F2\u07F4\x05\xF8}\x02\u07F3\u07F5\x07\x85\x02\x02\u07F4\u07F3" +
		"\x03\x02\x02\x02\u07F4\u07F5\x03\x02\x02\x02\u07F5\u07FD\x03\x02\x02\x02" +
		"\u07F6\u07F7\x07|\x02\x02\u07F7\u07F9\x05\xF8}\x02\u07F8\u07FA\x07\x85" +
		"\x02\x02\u07F9\u07F8\x03\x02\x02\x02\u07F9\u07FA\x03\x02\x02\x02\u07FA" +
		"\u07FC\x03\x02\x02\x02\u07FB\u07F6\x03\x02\x02\x02\u07FC\u07FF\x03\x02" +
		"\x02\x02\u07FD\u07FB\x03\x02\x02\x02\u07FD\u07FE\x03\x02\x02\x02\u07FE" +
		"\u0179\x03\x02\x02\x02\u07FF\u07FD\x03\x02\x02\x02\u0800\u0801\x074\x02" +
		"\x02\u0801\u0802\x07W\x02\x02\u0802\u0803\x05^0\x02\u0803\u0804\x07X\x02" +
		"\x02\u0804\u0807\x03\x02\x02\x02\u0805\u0807\x074\x02\x02\u0806\u0800" +
		"\x03\x02\x02\x02\u0806\u0805\x03\x02\x02\x02\u0807\u017B\x03\x02\x02\x02" +
		"\u0808\u080B\x073\x02\x02\u0809\u080A\x07Y\x02\x02\u080A\u080C\x07Z\x02" +
		"\x02\u080B\u0809\x03\x02\x02\x02\u080B\u080C\x03\x02\x02\x02\u080C\u083C" +
		"\x03\x02\x02\x02\u080D\u0810\x07\x1E\x02\x02\u080E\u080F\x07Y\x02\x02" +
		"\u080F\u0811\x07Z\x02\x02\u0810\u080E\x03\x02\x02\x02\u0810\u0811\x03" +
		"\x02\x02\x02\u0811\u083C\x03\x02\x02\x02\u0812\u083C\x07]\x02\x02\u0813" +
		"\u083C\x07^\x02\x02\u0814\u083C\x07_\x02\x02\u0815\u083C\x07`\x02\x02" +
		"\u0816\u083C\x07a\x02\x02\u0817\u083C\x07b\x02\x02\u0818\u083C\x07c\x02" +
		"\x02\u0819\u083C\x07d\x02\x02\u081A\u083C\x07e\x02\x02\u081B\u083C\x07" +
		"f\x02\x02\u081C\u083C\x07g\x02\x02\u081D\u083C\x07i\x02\x02\u081E\u083C" +
		"\x07h\x02\x02\u081F\u083C\x07w\x02\x02\u0820\u083C\x07j\x02\x02\u0821" +
		"\u083C\x07k\x02\x02\u0822\u083C\x07l\x02\x02\u0823\u083C\x07n\x02\x02" +
		"\u0824\u083C\x07o\x02\x02\u0825\u083C\x07p\x02\x02\u0826\u083C\x07q\x02" +
		"\x02\u0827\u0828\x07h\x02\x02\u0828\u083C\x07h\x02\x02\u0829\u082A\x07" +
		"i\x02\x02\u082A\u083C\x07i\x02\x02\u082B\u083C\x07s\x02\x02\u082C\u083C" +
		"\x07r\x02\x02\u082D\u083C\x07t\x02\x02\u082E\u083C\x07u\x02\x02\u082F" +
		"\u083C\x07v\x02\x02\u0830\u083C\x07x\x02\x02\u0831\u083C\x07y\x02\x02" +
		"\u0832\u083C\x07z\x02\x02\u0833\u083C\x07{\x02\x02\u0834\u083C\x07|\x02" +
		"\x02\u0835\u083C\x07}\x02\x02\u0836\u083C\x07~\x02\x02\u0837\u0838\x07" +
		"W\x02\x02\u0838\u083C\x07X\x02\x02\u0839\u083A\x07Y\x02\x02\u083A\u083C" +
		"\x07Z\x02\x02\u083B\u0808\x03\x02\x02\x02\u083B\u080D\x03\x02\x02\x02" +
		"\u083B\u0812\x03\x02\x02\x02\u083B\u0813\x03\x02\x02\x02\u083B\u0814\x03" +
		"\x02\x02\x02\u083B\u0815\x03\x02\x02\x02\u083B\u0816\x03\x02\x02\x02\u083B" +
		"\u0817\x03\x02\x02\x02\u083B\u0818\x03\x02\x02\x02\u083B\u0819\x03\x02" +
		"\x02\x02\u083B\u081A\x03\x02\x02\x02\u083B\u081B\x03\x02\x02\x02\u083B" +
		"\u081C\x03\x02\x02\x02\u083B\u081D\x03\x02\x02\x02\u083B\u081E\x03\x02" +
		"\x02\x02\u083B\u081F\x03\x02\x02\x02\u083B\u0820\x03\x02\x02\x02\u083B" +
		"\u0821\x03\x02\x02\x02\u083B\u0822\x03\x02\x02\x02\u083B\u0823\x03\x02" +
		"\x02\x02\u083B\u0824\x03\x02\x02\x02\u083B\u0825\x03\x02\x02\x02\u083B" +
		"\u0826\x03\x02\x02\x02\u083B\u0827\x03\x02\x02\x02\u083B\u0829\x03\x02" +
		"\x02\x02\u083B\u082B\x03\x02\x02\x02\u083B\u082C\x03\x02\x02\x02\u083B" +
		"\u082D\x03\x02\x02\x02\u083B\u082E\x03\x02\x02\x02\u083B\u082F\x03\x02" +
		"\x02\x02\u083B\u0830\x03\x02\x02\x02\u083B\u0831\x03\x02\x02\x02\u083B" +
		"\u0832\x03\x02\x02\x02\u083B\u0833\x03\x02\x02\x02\u083B\u0834\x03\x02" +
		"\x02\x02\u083B\u0835\x03\x02\x02\x02\u083B\u0836\x03\x02\x02\x02\u083B" +
		"\u0837\x03\x02\x02\x02\u083B\u0839\x03\x02\x02\x02\u083C\u017D\x03\x02" +
		"\x02\x02\u083D\u083E\t\x18\x02\x02\u083E\u017F\x03\x02\x02\x02\u0134\u0181" +
		"\u0188\u0191\u0195\u019E\u01A1\u01A5\u01AD\u01B4\u01B7\u01BC\u01C1\u01C7" +
		"\u01CF\u01D1\u01DA\u01DE\u01E2\u01E5\u01E9\u01EC\u01F3\u01F7\u01FA\u01FD" +
		"\u0200\u0206\u020A\u020E\u021C\u0220\u0226\u022D\u0233\u0237\u023B\u023D" +
		"\u0245\u024A\u0257\u025E\u026A\u0274\u0279\u027D\u0284\u0287\u028F\u0293" +
		"\u0296\u029D\u02A4\u02A8\u02AD\u02B1\u02B4\u02B9\u02C8\u02CF\u02D7\u02DF" +
		"\u02E8\u02EF\u02F6\u02FE\u0306\u030E\u0316\u031E\u0326\u032F\u0337\u0340" +
		"\u0348\u0350\u0352\u0355\u035B\u0361\u0367\u036E\u0377\u037F\u0383\u038A" +
		"\u038C\u03A0\u03A4\u03AA\u03AF\u03B3\u03B6\u03BD\u03C4\u03C8\u03D1\u03DC" +
		"\u03E6\u03EB\u03F2\u03F5\u03FA\u03FF\u0414\u0419\u041C\u0427\u042D\u0432" +
		"\u0435\u043A\u043D\u0444\u044D\u0452\u0455\u0459\u045D\u0461\u0466\u046B" +
		"\u0471\u0477\u047D\u0483\u0489\u048C\u0492\u0496\u049A\u049D\u04A5\u04A7" +
		"\u04AD\u04B0\u04B3\u04B6\u04BA\u04BE\u04C4\u04CE\u04D4\u04DA\u04DF\u04E4" +
		"\u04E8\u04F5\u04FB\u04FF\u0505\u050A\u0519\u051D\u0522\u0527\u052C\u0532" +
		"\u0535\u053E\u0542\u0547\u054B\u0551\u0558\u0569\u056B\u0572\u0577\u057E" +
		"\u0582\u0586\u058E\u0594\u059A\u059E\u05A0\u05A4\u05A9\u05AD\u05B0\u05B3" +
		"\u05B6\u05BB\u05BF\u05C2\u05C6\u05C9\u05CB\u05D0\u05D7\u05DD\u05E1\u05E7" +
		"\u05ED\u05F0\u05F2\u05F8\u05FC\u0602\u0609\u060D\u060F\u0613\u0619\u0625" +
		"\u0629\u062B\u062F\u0634\u0637\u063E\u0642\u0647\u0649\u064D\u0650\u0653" +
		"\u0657\u065C\u0663\u066A\u066F\u0673\u0677\u067C\u0680\u0686\u0688\u068E" +
		"\u0693\u0699\u069D\u069F\u06A2\u06A6\u06AA\u06AC\u06AE\u06B1\u06BD\u06BF" +
		"\u06C2\u06C5\u06C8\u06D1\u06D8\u06DD\u06E0\u06E3\u06E5\u06E8\u06EB\u06EF" +
		"\u06F4\u0701\u0706\u070A\u070E\u0713\u0718\u071C\u071F\u0723\u072E\u0732" +
		"\u0739\u073E\u0742\u0748\u074C\u0750\u0759\u0766\u076B\u0772\u0776\u0779" +
		"\u077C\u077F\u0783\u0788\u078F\u0793\u0797\u079D\u07A2\u07A6\u07AC\u07B2" +
		"\u07B5\u07B8\u07C8\u07D0\u07D9\u07DE\u07E1\u07E5\u07E9\u07EE\u07F4\u07F9" +
		"\u07FD\u0806\u080B\u0810\u083B";
	public static readonly _serializedATN: string = Utils.join(
		[
			CPPParser._serializedATNSegment0,
			CPPParser._serializedATNSegment1,
			CPPParser._serializedATNSegment2,
			CPPParser._serializedATNSegment3,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!CPPParser.__ATN) {
			CPPParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(CPPParser._serializedATN));
		}

		return CPPParser.__ATN;
	}

}

export class TranslationUnitContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(CPPParser.EOF, 0); }
	public declarationseq(): DeclarationseqContext | undefined {
		return this.tryGetRuleContext(0, DeclarationseqContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_translationUnit; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterTranslationUnit) {
			listener.enterTranslationUnit(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitTranslationUnit) {
			listener.exitTranslationUnit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitTranslationUnit) {
			return visitor.visitTranslationUnit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryExpressionContext extends ParserRuleContext {
	public literal(): LiteralContext[];
	public literal(i: number): LiteralContext;
	public literal(i?: number): LiteralContext | LiteralContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LiteralContext);
		} else {
			return this.getRuleContext(i, LiteralContext);
		}
	}
	public This(): TerminalNode | undefined { return this.tryGetToken(CPPParser.This, 0); }
	public LeftParen(): TerminalNode | undefined { return this.tryGetToken(CPPParser.LeftParen, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public RightParen(): TerminalNode | undefined { return this.tryGetToken(CPPParser.RightParen, 0); }
	public idExpression(): IdExpressionContext | undefined {
		return this.tryGetRuleContext(0, IdExpressionContext);
	}
	public lambdaExpression(): LambdaExpressionContext | undefined {
		return this.tryGetRuleContext(0, LambdaExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_primaryExpression; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterPrimaryExpression) {
			listener.enterPrimaryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitPrimaryExpression) {
			listener.exitPrimaryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitPrimaryExpression) {
			return visitor.visitPrimaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdExpressionContext extends ParserRuleContext {
	public unqualifiedId(): UnqualifiedIdContext | undefined {
		return this.tryGetRuleContext(0, UnqualifiedIdContext);
	}
	public qualifiedId(): QualifiedIdContext | undefined {
		return this.tryGetRuleContext(0, QualifiedIdContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_idExpression; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterIdExpression) {
			listener.enterIdExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitIdExpression) {
			listener.exitIdExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitIdExpression) {
			return visitor.visitIdExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnqualifiedIdContext extends ParserRuleContext {
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Identifier, 0); }
	public operatorFunctionId(): OperatorFunctionIdContext | undefined {
		return this.tryGetRuleContext(0, OperatorFunctionIdContext);
	}
	public conversionFunctionId(): ConversionFunctionIdContext | undefined {
		return this.tryGetRuleContext(0, ConversionFunctionIdContext);
	}
	public literalOperatorId(): LiteralOperatorIdContext | undefined {
		return this.tryGetRuleContext(0, LiteralOperatorIdContext);
	}
	public Tilde(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Tilde, 0); }
	public className(): ClassNameContext | undefined {
		return this.tryGetRuleContext(0, ClassNameContext);
	}
	public decltypeSpecifier(): DecltypeSpecifierContext | undefined {
		return this.tryGetRuleContext(0, DecltypeSpecifierContext);
	}
	public templateId(): TemplateIdContext | undefined {
		return this.tryGetRuleContext(0, TemplateIdContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_unqualifiedId; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterUnqualifiedId) {
			listener.enterUnqualifiedId(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitUnqualifiedId) {
			listener.exitUnqualifiedId(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitUnqualifiedId) {
			return visitor.visitUnqualifiedId(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QualifiedIdContext extends ParserRuleContext {
	public nestedNameSpecifier(): NestedNameSpecifierContext {
		return this.getRuleContext(0, NestedNameSpecifierContext);
	}
	public unqualifiedId(): UnqualifiedIdContext {
		return this.getRuleContext(0, UnqualifiedIdContext);
	}
	public Template(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Template, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_qualifiedId; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterQualifiedId) {
			listener.enterQualifiedId(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitQualifiedId) {
			listener.exitQualifiedId(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitQualifiedId) {
			return visitor.visitQualifiedId(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NestedNameSpecifierContext extends ParserRuleContext {
	public Doublecolon(): TerminalNode { return this.getToken(CPPParser.Doublecolon, 0); }
	public theTypeName(): TheTypeNameContext | undefined {
		return this.tryGetRuleContext(0, TheTypeNameContext);
	}
	public namespaceName(): NamespaceNameContext | undefined {
		return this.tryGetRuleContext(0, NamespaceNameContext);
	}
	public decltypeSpecifier(): DecltypeSpecifierContext | undefined {
		return this.tryGetRuleContext(0, DecltypeSpecifierContext);
	}
	public nestedNameSpecifier(): NestedNameSpecifierContext | undefined {
		return this.tryGetRuleContext(0, NestedNameSpecifierContext);
	}
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Identifier, 0); }
	public simpleTemplateId(): SimpleTemplateIdContext | undefined {
		return this.tryGetRuleContext(0, SimpleTemplateIdContext);
	}
	public Template(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Template, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_nestedNameSpecifier; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterNestedNameSpecifier) {
			listener.enterNestedNameSpecifier(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitNestedNameSpecifier) {
			listener.exitNestedNameSpecifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitNestedNameSpecifier) {
			return visitor.visitNestedNameSpecifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LambdaExpressionContext extends ParserRuleContext {
	public lambdaIntroducer(): LambdaIntroducerContext {
		return this.getRuleContext(0, LambdaIntroducerContext);
	}
	public compoundStatement(): CompoundStatementContext {
		return this.getRuleContext(0, CompoundStatementContext);
	}
	public lambdaDeclarator(): LambdaDeclaratorContext | undefined {
		return this.tryGetRuleContext(0, LambdaDeclaratorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_lambdaExpression; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterLambdaExpression) {
			listener.enterLambdaExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitLambdaExpression) {
			listener.exitLambdaExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitLambdaExpression) {
			return visitor.visitLambdaExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LambdaIntroducerContext extends ParserRuleContext {
	public LeftBracket(): TerminalNode { return this.getToken(CPPParser.LeftBracket, 0); }
	public RightBracket(): TerminalNode { return this.getToken(CPPParser.RightBracket, 0); }
	public lambdaCapture(): LambdaCaptureContext | undefined {
		return this.tryGetRuleContext(0, LambdaCaptureContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_lambdaIntroducer; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterLambdaIntroducer) {
			listener.enterLambdaIntroducer(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitLambdaIntroducer) {
			listener.exitLambdaIntroducer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitLambdaIntroducer) {
			return visitor.visitLambdaIntroducer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LambdaCaptureContext extends ParserRuleContext {
	public captureList(): CaptureListContext | undefined {
		return this.tryGetRuleContext(0, CaptureListContext);
	}
	public captureDefault(): CaptureDefaultContext | undefined {
		return this.tryGetRuleContext(0, CaptureDefaultContext);
	}
	public Comma(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Comma, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_lambdaCapture; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterLambdaCapture) {
			listener.enterLambdaCapture(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitLambdaCapture) {
			listener.exitLambdaCapture(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitLambdaCapture) {
			return visitor.visitLambdaCapture(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CaptureDefaultContext extends ParserRuleContext {
	public And(): TerminalNode | undefined { return this.tryGetToken(CPPParser.And, 0); }
	public Assign(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Assign, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_captureDefault; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterCaptureDefault) {
			listener.enterCaptureDefault(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitCaptureDefault) {
			listener.exitCaptureDefault(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitCaptureDefault) {
			return visitor.visitCaptureDefault(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CaptureListContext extends ParserRuleContext {
	public capture(): CaptureContext[];
	public capture(i: number): CaptureContext;
	public capture(i?: number): CaptureContext | CaptureContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CaptureContext);
		} else {
			return this.getRuleContext(i, CaptureContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPPParser.Comma);
		} else {
			return this.getToken(CPPParser.Comma, i);
		}
	}
	public Ellipsis(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Ellipsis, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_captureList; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterCaptureList) {
			listener.enterCaptureList(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitCaptureList) {
			listener.exitCaptureList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitCaptureList) {
			return visitor.visitCaptureList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CaptureContext extends ParserRuleContext {
	public simpleCapture(): SimpleCaptureContext | undefined {
		return this.tryGetRuleContext(0, SimpleCaptureContext);
	}
	public initcapture(): InitcaptureContext | undefined {
		return this.tryGetRuleContext(0, InitcaptureContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_capture; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterCapture) {
			listener.enterCapture(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitCapture) {
			listener.exitCapture(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitCapture) {
			return visitor.visitCapture(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SimpleCaptureContext extends ParserRuleContext {
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Identifier, 0); }
	public And(): TerminalNode | undefined { return this.tryGetToken(CPPParser.And, 0); }
	public This(): TerminalNode | undefined { return this.tryGetToken(CPPParser.This, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_simpleCapture; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterSimpleCapture) {
			listener.enterSimpleCapture(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitSimpleCapture) {
			listener.exitSimpleCapture(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitSimpleCapture) {
			return visitor.visitSimpleCapture(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InitcaptureContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(CPPParser.Identifier, 0); }
	public initializer(): InitializerContext {
		return this.getRuleContext(0, InitializerContext);
	}
	public And(): TerminalNode | undefined { return this.tryGetToken(CPPParser.And, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_initcapture; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterInitcapture) {
			listener.enterInitcapture(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitInitcapture) {
			listener.exitInitcapture(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitInitcapture) {
			return visitor.visitInitcapture(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LambdaDeclaratorContext extends ParserRuleContext {
	public LeftParen(): TerminalNode { return this.getToken(CPPParser.LeftParen, 0); }
	public RightParen(): TerminalNode { return this.getToken(CPPParser.RightParen, 0); }
	public parameterDeclarationClause(): ParameterDeclarationClauseContext | undefined {
		return this.tryGetRuleContext(0, ParameterDeclarationClauseContext);
	}
	public Mutable(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Mutable, 0); }
	public exceptionSpecification(): ExceptionSpecificationContext | undefined {
		return this.tryGetRuleContext(0, ExceptionSpecificationContext);
	}
	public attributeSpecifierSeq(): AttributeSpecifierSeqContext | undefined {
		return this.tryGetRuleContext(0, AttributeSpecifierSeqContext);
	}
	public trailingReturnType(): TrailingReturnTypeContext | undefined {
		return this.tryGetRuleContext(0, TrailingReturnTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_lambdaDeclarator; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterLambdaDeclarator) {
			listener.enterLambdaDeclarator(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitLambdaDeclarator) {
			listener.exitLambdaDeclarator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitLambdaDeclarator) {
			return visitor.visitLambdaDeclarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PostfixExpressionContext extends ParserRuleContext {
	public primaryExpression(): PrimaryExpressionContext | undefined {
		return this.tryGetRuleContext(0, PrimaryExpressionContext);
	}
	public postfixExpression(): PostfixExpressionContext | undefined {
		return this.tryGetRuleContext(0, PostfixExpressionContext);
	}
	public LeftBracket(): TerminalNode | undefined { return this.tryGetToken(CPPParser.LeftBracket, 0); }
	public RightBracket(): TerminalNode | undefined { return this.tryGetToken(CPPParser.RightBracket, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public bracedInitList(): BracedInitListContext | undefined {
		return this.tryGetRuleContext(0, BracedInitListContext);
	}
	public LeftParen(): TerminalNode | undefined { return this.tryGetToken(CPPParser.LeftParen, 0); }
	public RightParen(): TerminalNode | undefined { return this.tryGetToken(CPPParser.RightParen, 0); }
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	public simpleTypeSpecifier(): SimpleTypeSpecifierContext | undefined {
		return this.tryGetRuleContext(0, SimpleTypeSpecifierContext);
	}
	public typeNameSpecifier(): TypeNameSpecifierContext | undefined {
		return this.tryGetRuleContext(0, TypeNameSpecifierContext);
	}
	public Dot(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Dot, 0); }
	public Arrow(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Arrow, 0); }
	public idExpression(): IdExpressionContext | undefined {
		return this.tryGetRuleContext(0, IdExpressionContext);
	}
	public pseudoDestructorName(): PseudoDestructorNameContext | undefined {
		return this.tryGetRuleContext(0, PseudoDestructorNameContext);
	}
	public Template(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Template, 0); }
	public PlusPlus(): TerminalNode | undefined { return this.tryGetToken(CPPParser.PlusPlus, 0); }
	public MinusMinus(): TerminalNode | undefined { return this.tryGetToken(CPPParser.MinusMinus, 0); }
	public Less(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Less, 0); }
	public theTypeId(): TheTypeIdContext | undefined {
		return this.tryGetRuleContext(0, TheTypeIdContext);
	}
	public Greater(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Greater, 0); }
	public Dynamic_cast(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Dynamic_cast, 0); }
	public Static_cast(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Static_cast, 0); }
	public Reinterpret_cast(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Reinterpret_cast, 0); }
	public Const_cast(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Const_cast, 0); }
	public typeIdOfTheTypeId(): TypeIdOfTheTypeIdContext | undefined {
		return this.tryGetRuleContext(0, TypeIdOfTheTypeIdContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_postfixExpression; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterPostfixExpression) {
			listener.enterPostfixExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitPostfixExpression) {
			listener.exitPostfixExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitPostfixExpression) {
			return visitor.visitPostfixExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeIdOfTheTypeIdContext extends ParserRuleContext {
	public Typeid_(): TerminalNode { return this.getToken(CPPParser.Typeid_, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_typeIdOfTheTypeId; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterTypeIdOfTheTypeId) {
			listener.enterTypeIdOfTheTypeId(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitTypeIdOfTheTypeId) {
			listener.exitTypeIdOfTheTypeId(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitTypeIdOfTheTypeId) {
			return visitor.visitTypeIdOfTheTypeId(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionListContext extends ParserRuleContext {
	public initializerList(): InitializerListContext {
		return this.getRuleContext(0, InitializerListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_expressionList; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterExpressionList) {
			listener.enterExpressionList(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitExpressionList) {
			listener.exitExpressionList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitExpressionList) {
			return visitor.visitExpressionList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PseudoDestructorNameContext extends ParserRuleContext {
	public Tilde(): TerminalNode { return this.getToken(CPPParser.Tilde, 0); }
	public theTypeName(): TheTypeNameContext[];
	public theTypeName(i: number): TheTypeNameContext;
	public theTypeName(i?: number): TheTypeNameContext | TheTypeNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TheTypeNameContext);
		} else {
			return this.getRuleContext(i, TheTypeNameContext);
		}
	}
	public nestedNameSpecifier(): NestedNameSpecifierContext | undefined {
		return this.tryGetRuleContext(0, NestedNameSpecifierContext);
	}
	public Doublecolon(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Doublecolon, 0); }
	public Template(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Template, 0); }
	public simpleTemplateId(): SimpleTemplateIdContext | undefined {
		return this.tryGetRuleContext(0, SimpleTemplateIdContext);
	}
	public decltypeSpecifier(): DecltypeSpecifierContext | undefined {
		return this.tryGetRuleContext(0, DecltypeSpecifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_pseudoDestructorName; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterPseudoDestructorName) {
			listener.enterPseudoDestructorName(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitPseudoDestructorName) {
			listener.exitPseudoDestructorName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitPseudoDestructorName) {
			return visitor.visitPseudoDestructorName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnaryExpressionContext extends ParserRuleContext {
	public postfixExpression(): PostfixExpressionContext | undefined {
		return this.tryGetRuleContext(0, PostfixExpressionContext);
	}
	public unaryExpression(): UnaryExpressionContext | undefined {
		return this.tryGetRuleContext(0, UnaryExpressionContext);
	}
	public PlusPlus(): TerminalNode | undefined { return this.tryGetToken(CPPParser.PlusPlus, 0); }
	public MinusMinus(): TerminalNode | undefined { return this.tryGetToken(CPPParser.MinusMinus, 0); }
	public unaryOperator(): UnaryOperatorContext | undefined {
		return this.tryGetRuleContext(0, UnaryOperatorContext);
	}
	public Sizeof(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Sizeof, 0); }
	public LeftParen(): TerminalNode | undefined { return this.tryGetToken(CPPParser.LeftParen, 0); }
	public theTypeId(): TheTypeIdContext | undefined {
		return this.tryGetRuleContext(0, TheTypeIdContext);
	}
	public RightParen(): TerminalNode | undefined { return this.tryGetToken(CPPParser.RightParen, 0); }
	public Ellipsis(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Ellipsis, 0); }
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Identifier, 0); }
	public Alignof(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Alignof, 0); }
	public noExceptExpression(): NoExceptExpressionContext | undefined {
		return this.tryGetRuleContext(0, NoExceptExpressionContext);
	}
	public newExpression(): NewExpressionContext | undefined {
		return this.tryGetRuleContext(0, NewExpressionContext);
	}
	public deleteExpression(): DeleteExpressionContext | undefined {
		return this.tryGetRuleContext(0, DeleteExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_unaryExpression; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterUnaryExpression) {
			listener.enterUnaryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitUnaryExpression) {
			listener.exitUnaryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitUnaryExpression) {
			return visitor.visitUnaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnaryOperatorContext extends ParserRuleContext {
	public Or(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Or, 0); }
	public Star(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Star, 0); }
	public And(): TerminalNode | undefined { return this.tryGetToken(CPPParser.And, 0); }
	public Plus(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Plus, 0); }
	public Tilde(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Tilde, 0); }
	public Minus(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Minus, 0); }
	public Not(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Not, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_unaryOperator; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterUnaryOperator) {
			listener.enterUnaryOperator(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitUnaryOperator) {
			listener.exitUnaryOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitUnaryOperator) {
			return visitor.visitUnaryOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NewExpressionContext extends ParserRuleContext {
	public New(): TerminalNode { return this.getToken(CPPParser.New, 0); }
	public newTypeId(): NewTypeIdContext | undefined {
		return this.tryGetRuleContext(0, NewTypeIdContext);
	}
	public Doublecolon(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Doublecolon, 0); }
	public newPlacement(): NewPlacementContext | undefined {
		return this.tryGetRuleContext(0, NewPlacementContext);
	}
	public newInitializer(): NewInitializerContext | undefined {
		return this.tryGetRuleContext(0, NewInitializerContext);
	}
	public LeftParen(): TerminalNode | undefined { return this.tryGetToken(CPPParser.LeftParen, 0); }
	public theTypeId(): TheTypeIdContext | undefined {
		return this.tryGetRuleContext(0, TheTypeIdContext);
	}
	public RightParen(): TerminalNode | undefined { return this.tryGetToken(CPPParser.RightParen, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_newExpression; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterNewExpression) {
			listener.enterNewExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitNewExpression) {
			listener.exitNewExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitNewExpression) {
			return visitor.visitNewExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NewPlacementContext extends ParserRuleContext {
	public LeftParen(): TerminalNode { return this.getToken(CPPParser.LeftParen, 0); }
	public expressionList(): ExpressionListContext {
		return this.getRuleContext(0, ExpressionListContext);
	}
	public RightParen(): TerminalNode { return this.getToken(CPPParser.RightParen, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_newPlacement; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterNewPlacement) {
			listener.enterNewPlacement(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitNewPlacement) {
			listener.exitNewPlacement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitNewPlacement) {
			return visitor.visitNewPlacement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NewTypeIdContext extends ParserRuleContext {
	public typeSpecifierSeq(): TypeSpecifierSeqContext {
		return this.getRuleContext(0, TypeSpecifierSeqContext);
	}
	public newDeclarator(): NewDeclaratorContext | undefined {
		return this.tryGetRuleContext(0, NewDeclaratorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_newTypeId; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterNewTypeId) {
			listener.enterNewTypeId(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitNewTypeId) {
			listener.exitNewTypeId(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitNewTypeId) {
			return visitor.visitNewTypeId(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NewDeclaratorContext extends ParserRuleContext {
	public pointerOperator(): PointerOperatorContext | undefined {
		return this.tryGetRuleContext(0, PointerOperatorContext);
	}
	public newDeclarator(): NewDeclaratorContext | undefined {
		return this.tryGetRuleContext(0, NewDeclaratorContext);
	}
	public noPointerNewDeclarator(): NoPointerNewDeclaratorContext | undefined {
		return this.tryGetRuleContext(0, NoPointerNewDeclaratorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_newDeclarator; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterNewDeclarator) {
			listener.enterNewDeclarator(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitNewDeclarator) {
			listener.exitNewDeclarator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitNewDeclarator) {
			return visitor.visitNewDeclarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NoPointerNewDeclaratorContext extends ParserRuleContext {
	public LeftBracket(): TerminalNode { return this.getToken(CPPParser.LeftBracket, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public RightBracket(): TerminalNode { return this.getToken(CPPParser.RightBracket, 0); }
	public attributeSpecifierSeq(): AttributeSpecifierSeqContext | undefined {
		return this.tryGetRuleContext(0, AttributeSpecifierSeqContext);
	}
	public noPointerNewDeclarator(): NoPointerNewDeclaratorContext | undefined {
		return this.tryGetRuleContext(0, NoPointerNewDeclaratorContext);
	}
	public constantExpression(): ConstantExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConstantExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_noPointerNewDeclarator; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterNoPointerNewDeclarator) {
			listener.enterNoPointerNewDeclarator(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitNoPointerNewDeclarator) {
			listener.exitNoPointerNewDeclarator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitNoPointerNewDeclarator) {
			return visitor.visitNoPointerNewDeclarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NewInitializerContext extends ParserRuleContext {
	public LeftParen(): TerminalNode | undefined { return this.tryGetToken(CPPParser.LeftParen, 0); }
	public RightParen(): TerminalNode | undefined { return this.tryGetToken(CPPParser.RightParen, 0); }
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	public bracedInitList(): BracedInitListContext | undefined {
		return this.tryGetRuleContext(0, BracedInitListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_newInitializer; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterNewInitializer) {
			listener.enterNewInitializer(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitNewInitializer) {
			listener.exitNewInitializer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitNewInitializer) {
			return visitor.visitNewInitializer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeleteExpressionContext extends ParserRuleContext {
	public Delete(): TerminalNode { return this.getToken(CPPParser.Delete, 0); }
	public castExpression(): CastExpressionContext {
		return this.getRuleContext(0, CastExpressionContext);
	}
	public Doublecolon(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Doublecolon, 0); }
	public LeftBracket(): TerminalNode | undefined { return this.tryGetToken(CPPParser.LeftBracket, 0); }
	public RightBracket(): TerminalNode | undefined { return this.tryGetToken(CPPParser.RightBracket, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_deleteExpression; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterDeleteExpression) {
			listener.enterDeleteExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitDeleteExpression) {
			listener.exitDeleteExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitDeleteExpression) {
			return visitor.visitDeleteExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NoExceptExpressionContext extends ParserRuleContext {
	public Noexcept(): TerminalNode { return this.getToken(CPPParser.Noexcept, 0); }
	public LeftParen(): TerminalNode { return this.getToken(CPPParser.LeftParen, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RightParen(): TerminalNode { return this.getToken(CPPParser.RightParen, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_noExceptExpression; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterNoExceptExpression) {
			listener.enterNoExceptExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitNoExceptExpression) {
			listener.exitNoExceptExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitNoExceptExpression) {
			return visitor.visitNoExceptExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CastExpressionContext extends ParserRuleContext {
	public unaryExpression(): UnaryExpressionContext | undefined {
		return this.tryGetRuleContext(0, UnaryExpressionContext);
	}
	public LeftParen(): TerminalNode | undefined { return this.tryGetToken(CPPParser.LeftParen, 0); }
	public theTypeId(): TheTypeIdContext | undefined {
		return this.tryGetRuleContext(0, TheTypeIdContext);
	}
	public RightParen(): TerminalNode | undefined { return this.tryGetToken(CPPParser.RightParen, 0); }
	public castExpression(): CastExpressionContext | undefined {
		return this.tryGetRuleContext(0, CastExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_castExpression; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterCastExpression) {
			listener.enterCastExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitCastExpression) {
			listener.exitCastExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitCastExpression) {
			return visitor.visitCastExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PointerMemberExpressionContext extends ParserRuleContext {
	public castExpression(): CastExpressionContext[];
	public castExpression(i: number): CastExpressionContext;
	public castExpression(i?: number): CastExpressionContext | CastExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CastExpressionContext);
		} else {
			return this.getRuleContext(i, CastExpressionContext);
		}
	}
	public DotStar(): TerminalNode[];
	public DotStar(i: number): TerminalNode;
	public DotStar(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPPParser.DotStar);
		} else {
			return this.getToken(CPPParser.DotStar, i);
		}
	}
	public ArrowStar(): TerminalNode[];
	public ArrowStar(i: number): TerminalNode;
	public ArrowStar(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPPParser.ArrowStar);
		} else {
			return this.getToken(CPPParser.ArrowStar, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_pointerMemberExpression; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterPointerMemberExpression) {
			listener.enterPointerMemberExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitPointerMemberExpression) {
			listener.exitPointerMemberExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitPointerMemberExpression) {
			return visitor.visitPointerMemberExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MultiplicativeExpressionContext extends ParserRuleContext {
	public pointerMemberExpression(): PointerMemberExpressionContext[];
	public pointerMemberExpression(i: number): PointerMemberExpressionContext;
	public pointerMemberExpression(i?: number): PointerMemberExpressionContext | PointerMemberExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PointerMemberExpressionContext);
		} else {
			return this.getRuleContext(i, PointerMemberExpressionContext);
		}
	}
	public Star(): TerminalNode[];
	public Star(i: number): TerminalNode;
	public Star(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPPParser.Star);
		} else {
			return this.getToken(CPPParser.Star, i);
		}
	}
	public Div(): TerminalNode[];
	public Div(i: number): TerminalNode;
	public Div(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPPParser.Div);
		} else {
			return this.getToken(CPPParser.Div, i);
		}
	}
	public Mod(): TerminalNode[];
	public Mod(i: number): TerminalNode;
	public Mod(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPPParser.Mod);
		} else {
			return this.getToken(CPPParser.Mod, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_multiplicativeExpression; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterMultiplicativeExpression) {
			listener.enterMultiplicativeExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitMultiplicativeExpression) {
			listener.exitMultiplicativeExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitMultiplicativeExpression) {
			return visitor.visitMultiplicativeExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AdditiveExpressionContext extends ParserRuleContext {
	public multiplicativeExpression(): MultiplicativeExpressionContext[];
	public multiplicativeExpression(i: number): MultiplicativeExpressionContext;
	public multiplicativeExpression(i?: number): MultiplicativeExpressionContext | MultiplicativeExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MultiplicativeExpressionContext);
		} else {
			return this.getRuleContext(i, MultiplicativeExpressionContext);
		}
	}
	public Plus(): TerminalNode[];
	public Plus(i: number): TerminalNode;
	public Plus(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPPParser.Plus);
		} else {
			return this.getToken(CPPParser.Plus, i);
		}
	}
	public Minus(): TerminalNode[];
	public Minus(i: number): TerminalNode;
	public Minus(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPPParser.Minus);
		} else {
			return this.getToken(CPPParser.Minus, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_additiveExpression; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterAdditiveExpression) {
			listener.enterAdditiveExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitAdditiveExpression) {
			listener.exitAdditiveExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitAdditiveExpression) {
			return visitor.visitAdditiveExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ShiftExpressionContext extends ParserRuleContext {
	public additiveExpression(): AdditiveExpressionContext[];
	public additiveExpression(i: number): AdditiveExpressionContext;
	public additiveExpression(i?: number): AdditiveExpressionContext | AdditiveExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AdditiveExpressionContext);
		} else {
			return this.getRuleContext(i, AdditiveExpressionContext);
		}
	}
	public shiftOperator(): ShiftOperatorContext[];
	public shiftOperator(i: number): ShiftOperatorContext;
	public shiftOperator(i?: number): ShiftOperatorContext | ShiftOperatorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ShiftOperatorContext);
		} else {
			return this.getRuleContext(i, ShiftOperatorContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_shiftExpression; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterShiftExpression) {
			listener.enterShiftExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitShiftExpression) {
			listener.exitShiftExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitShiftExpression) {
			return visitor.visitShiftExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ShiftOperatorContext extends ParserRuleContext {
	public Greater(): TerminalNode[];
	public Greater(i: number): TerminalNode;
	public Greater(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPPParser.Greater);
		} else {
			return this.getToken(CPPParser.Greater, i);
		}
	}
	public Less(): TerminalNode[];
	public Less(i: number): TerminalNode;
	public Less(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPPParser.Less);
		} else {
			return this.getToken(CPPParser.Less, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_shiftOperator; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterShiftOperator) {
			listener.enterShiftOperator(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitShiftOperator) {
			listener.exitShiftOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitShiftOperator) {
			return visitor.visitShiftOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RelationalExpressionContext extends ParserRuleContext {
	public shiftExpression(): ShiftExpressionContext[];
	public shiftExpression(i: number): ShiftExpressionContext;
	public shiftExpression(i?: number): ShiftExpressionContext | ShiftExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ShiftExpressionContext);
		} else {
			return this.getRuleContext(i, ShiftExpressionContext);
		}
	}
	public Less(): TerminalNode[];
	public Less(i: number): TerminalNode;
	public Less(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPPParser.Less);
		} else {
			return this.getToken(CPPParser.Less, i);
		}
	}
	public Greater(): TerminalNode[];
	public Greater(i: number): TerminalNode;
	public Greater(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPPParser.Greater);
		} else {
			return this.getToken(CPPParser.Greater, i);
		}
	}
	public LessEqual(): TerminalNode[];
	public LessEqual(i: number): TerminalNode;
	public LessEqual(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPPParser.LessEqual);
		} else {
			return this.getToken(CPPParser.LessEqual, i);
		}
	}
	public GreaterEqual(): TerminalNode[];
	public GreaterEqual(i: number): TerminalNode;
	public GreaterEqual(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPPParser.GreaterEqual);
		} else {
			return this.getToken(CPPParser.GreaterEqual, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_relationalExpression; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterRelationalExpression) {
			listener.enterRelationalExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitRelationalExpression) {
			listener.exitRelationalExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitRelationalExpression) {
			return visitor.visitRelationalExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EqualityExpressionContext extends ParserRuleContext {
	public relationalExpression(): RelationalExpressionContext[];
	public relationalExpression(i: number): RelationalExpressionContext;
	public relationalExpression(i?: number): RelationalExpressionContext | RelationalExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RelationalExpressionContext);
		} else {
			return this.getRuleContext(i, RelationalExpressionContext);
		}
	}
	public Equal(): TerminalNode[];
	public Equal(i: number): TerminalNode;
	public Equal(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPPParser.Equal);
		} else {
			return this.getToken(CPPParser.Equal, i);
		}
	}
	public NotEqual(): TerminalNode[];
	public NotEqual(i: number): TerminalNode;
	public NotEqual(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPPParser.NotEqual);
		} else {
			return this.getToken(CPPParser.NotEqual, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_equalityExpression; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterEqualityExpression) {
			listener.enterEqualityExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitEqualityExpression) {
			listener.exitEqualityExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitEqualityExpression) {
			return visitor.visitEqualityExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AndExpressionContext extends ParserRuleContext {
	public equalityExpression(): EqualityExpressionContext[];
	public equalityExpression(i: number): EqualityExpressionContext;
	public equalityExpression(i?: number): EqualityExpressionContext | EqualityExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EqualityExpressionContext);
		} else {
			return this.getRuleContext(i, EqualityExpressionContext);
		}
	}
	public And(): TerminalNode[];
	public And(i: number): TerminalNode;
	public And(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPPParser.And);
		} else {
			return this.getToken(CPPParser.And, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_andExpression; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterAndExpression) {
			listener.enterAndExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitAndExpression) {
			listener.exitAndExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitAndExpression) {
			return visitor.visitAndExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExclusiveOrExpressionContext extends ParserRuleContext {
	public andExpression(): AndExpressionContext[];
	public andExpression(i: number): AndExpressionContext;
	public andExpression(i?: number): AndExpressionContext | AndExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AndExpressionContext);
		} else {
			return this.getRuleContext(i, AndExpressionContext);
		}
	}
	public Caret(): TerminalNode[];
	public Caret(i: number): TerminalNode;
	public Caret(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPPParser.Caret);
		} else {
			return this.getToken(CPPParser.Caret, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_exclusiveOrExpression; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterExclusiveOrExpression) {
			listener.enterExclusiveOrExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitExclusiveOrExpression) {
			listener.exitExclusiveOrExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitExclusiveOrExpression) {
			return visitor.visitExclusiveOrExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InclusiveOrExpressionContext extends ParserRuleContext {
	public exclusiveOrExpression(): ExclusiveOrExpressionContext[];
	public exclusiveOrExpression(i: number): ExclusiveOrExpressionContext;
	public exclusiveOrExpression(i?: number): ExclusiveOrExpressionContext | ExclusiveOrExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExclusiveOrExpressionContext);
		} else {
			return this.getRuleContext(i, ExclusiveOrExpressionContext);
		}
	}
	public Or(): TerminalNode[];
	public Or(i: number): TerminalNode;
	public Or(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPPParser.Or);
		} else {
			return this.getToken(CPPParser.Or, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_inclusiveOrExpression; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterInclusiveOrExpression) {
			listener.enterInclusiveOrExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitInclusiveOrExpression) {
			listener.exitInclusiveOrExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitInclusiveOrExpression) {
			return visitor.visitInclusiveOrExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LogicalAndExpressionContext extends ParserRuleContext {
	public inclusiveOrExpression(): InclusiveOrExpressionContext[];
	public inclusiveOrExpression(i: number): InclusiveOrExpressionContext;
	public inclusiveOrExpression(i?: number): InclusiveOrExpressionContext | InclusiveOrExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InclusiveOrExpressionContext);
		} else {
			return this.getRuleContext(i, InclusiveOrExpressionContext);
		}
	}
	public AndAnd(): TerminalNode[];
	public AndAnd(i: number): TerminalNode;
	public AndAnd(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPPParser.AndAnd);
		} else {
			return this.getToken(CPPParser.AndAnd, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_logicalAndExpression; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterLogicalAndExpression) {
			listener.enterLogicalAndExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitLogicalAndExpression) {
			listener.exitLogicalAndExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitLogicalAndExpression) {
			return visitor.visitLogicalAndExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LogicalOrExpressionContext extends ParserRuleContext {
	public logicalAndExpression(): LogicalAndExpressionContext[];
	public logicalAndExpression(i: number): LogicalAndExpressionContext;
	public logicalAndExpression(i?: number): LogicalAndExpressionContext | LogicalAndExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LogicalAndExpressionContext);
		} else {
			return this.getRuleContext(i, LogicalAndExpressionContext);
		}
	}
	public OrOr(): TerminalNode[];
	public OrOr(i: number): TerminalNode;
	public OrOr(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPPParser.OrOr);
		} else {
			return this.getToken(CPPParser.OrOr, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_logicalOrExpression; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterLogicalOrExpression) {
			listener.enterLogicalOrExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitLogicalOrExpression) {
			listener.exitLogicalOrExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitLogicalOrExpression) {
			return visitor.visitLogicalOrExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConditionalExpressionContext extends ParserRuleContext {
	public logicalOrExpression(): LogicalOrExpressionContext {
		return this.getRuleContext(0, LogicalOrExpressionContext);
	}
	public Question(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Question, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public Colon(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Colon, 0); }
	public assignmentExpression(): AssignmentExpressionContext | undefined {
		return this.tryGetRuleContext(0, AssignmentExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_conditionalExpression; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterConditionalExpression) {
			listener.enterConditionalExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitConditionalExpression) {
			listener.exitConditionalExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitConditionalExpression) {
			return visitor.visitConditionalExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignmentExpressionContext extends ParserRuleContext {
	public conditionalExpression(): ConditionalExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConditionalExpressionContext);
	}
	public logicalOrExpression(): LogicalOrExpressionContext | undefined {
		return this.tryGetRuleContext(0, LogicalOrExpressionContext);
	}
	public assignmentOperator(): AssignmentOperatorContext | undefined {
		return this.tryGetRuleContext(0, AssignmentOperatorContext);
	}
	public initializerClause(): InitializerClauseContext | undefined {
		return this.tryGetRuleContext(0, InitializerClauseContext);
	}
	public throwExpression(): ThrowExpressionContext | undefined {
		return this.tryGetRuleContext(0, ThrowExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_assignmentExpression; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterAssignmentExpression) {
			listener.enterAssignmentExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitAssignmentExpression) {
			listener.exitAssignmentExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitAssignmentExpression) {
			return visitor.visitAssignmentExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignmentOperatorContext extends ParserRuleContext {
	public Assign(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Assign, 0); }
	public StarAssign(): TerminalNode | undefined { return this.tryGetToken(CPPParser.StarAssign, 0); }
	public DivAssign(): TerminalNode | undefined { return this.tryGetToken(CPPParser.DivAssign, 0); }
	public ModAssign(): TerminalNode | undefined { return this.tryGetToken(CPPParser.ModAssign, 0); }
	public PlusAssign(): TerminalNode | undefined { return this.tryGetToken(CPPParser.PlusAssign, 0); }
	public MinusAssign(): TerminalNode | undefined { return this.tryGetToken(CPPParser.MinusAssign, 0); }
	public RightShiftAssign(): TerminalNode | undefined { return this.tryGetToken(CPPParser.RightShiftAssign, 0); }
	public LeftShiftAssign(): TerminalNode | undefined { return this.tryGetToken(CPPParser.LeftShiftAssign, 0); }
	public AndAssign(): TerminalNode | undefined { return this.tryGetToken(CPPParser.AndAssign, 0); }
	public XorAssign(): TerminalNode | undefined { return this.tryGetToken(CPPParser.XorAssign, 0); }
	public OrAssign(): TerminalNode | undefined { return this.tryGetToken(CPPParser.OrAssign, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_assignmentOperator; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterAssignmentOperator) {
			listener.enterAssignmentOperator(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitAssignmentOperator) {
			listener.exitAssignmentOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitAssignmentOperator) {
			return visitor.visitAssignmentOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public assignmentExpression(): AssignmentExpressionContext[];
	public assignmentExpression(i: number): AssignmentExpressionContext;
	public assignmentExpression(i?: number): AssignmentExpressionContext | AssignmentExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AssignmentExpressionContext);
		} else {
			return this.getRuleContext(i, AssignmentExpressionContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPPParser.Comma);
		} else {
			return this.getToken(CPPParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_expression; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstantExpressionContext extends ParserRuleContext {
	public conditionalExpression(): ConditionalExpressionContext {
		return this.getRuleContext(0, ConditionalExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_constantExpression; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterConstantExpression) {
			listener.enterConstantExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitConstantExpression) {
			listener.exitConstantExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitConstantExpression) {
			return visitor.visitConstantExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public labeledStatement(): LabeledStatementContext | undefined {
		return this.tryGetRuleContext(0, LabeledStatementContext);
	}
	public declarationStatement(): DeclarationStatementContext | undefined {
		return this.tryGetRuleContext(0, DeclarationStatementContext);
	}
	public expressionStatement(): ExpressionStatementContext | undefined {
		return this.tryGetRuleContext(0, ExpressionStatementContext);
	}
	public compoundStatement(): CompoundStatementContext | undefined {
		return this.tryGetRuleContext(0, CompoundStatementContext);
	}
	public selectionStatement(): SelectionStatementContext | undefined {
		return this.tryGetRuleContext(0, SelectionStatementContext);
	}
	public iterationStatement(): IterationStatementContext | undefined {
		return this.tryGetRuleContext(0, IterationStatementContext);
	}
	public jumpStatement(): JumpStatementContext | undefined {
		return this.tryGetRuleContext(0, JumpStatementContext);
	}
	public tryBlock(): TryBlockContext | undefined {
		return this.tryGetRuleContext(0, TryBlockContext);
	}
	public attributeSpecifierSeq(): AttributeSpecifierSeqContext | undefined {
		return this.tryGetRuleContext(0, AttributeSpecifierSeqContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_statement; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LabeledStatementContext extends ParserRuleContext {
	public Colon(): TerminalNode { return this.getToken(CPPParser.Colon, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Identifier, 0); }
	public Case(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Case, 0); }
	public constantExpression(): ConstantExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConstantExpressionContext);
	}
	public Default(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Default, 0); }
	public attributeSpecifierSeq(): AttributeSpecifierSeqContext | undefined {
		return this.tryGetRuleContext(0, AttributeSpecifierSeqContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_labeledStatement; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterLabeledStatement) {
			listener.enterLabeledStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitLabeledStatement) {
			listener.exitLabeledStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitLabeledStatement) {
			return visitor.visitLabeledStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionStatementContext extends ParserRuleContext {
	public Semi(): TerminalNode { return this.getToken(CPPParser.Semi, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_expressionStatement; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterExpressionStatement) {
			listener.enterExpressionStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitExpressionStatement) {
			listener.exitExpressionStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitExpressionStatement) {
			return visitor.visitExpressionStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CompoundStatementContext extends ParserRuleContext {
	public LeftBrace(): TerminalNode { return this.getToken(CPPParser.LeftBrace, 0); }
	public RightBrace(): TerminalNode { return this.getToken(CPPParser.RightBrace, 0); }
	public statementSeq(): StatementSeqContext | undefined {
		return this.tryGetRuleContext(0, StatementSeqContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_compoundStatement; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterCompoundStatement) {
			listener.enterCompoundStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitCompoundStatement) {
			listener.exitCompoundStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitCompoundStatement) {
			return visitor.visitCompoundStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementSeqContext extends ParserRuleContext {
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_statementSeq; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterStatementSeq) {
			listener.enterStatementSeq(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitStatementSeq) {
			listener.exitStatementSeq(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitStatementSeq) {
			return visitor.visitStatementSeq(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SelectionStatementContext extends ParserRuleContext {
	public If(): TerminalNode | undefined { return this.tryGetToken(CPPParser.If, 0); }
	public LeftParen(): TerminalNode { return this.getToken(CPPParser.LeftParen, 0); }
	public condition(): ConditionContext {
		return this.getRuleContext(0, ConditionContext);
	}
	public RightParen(): TerminalNode { return this.getToken(CPPParser.RightParen, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public Else(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Else, 0); }
	public Switch(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Switch, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_selectionStatement; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterSelectionStatement) {
			listener.enterSelectionStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitSelectionStatement) {
			listener.exitSelectionStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitSelectionStatement) {
			return visitor.visitSelectionStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConditionContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public declSpecifierSeq(): DeclSpecifierSeqContext | undefined {
		return this.tryGetRuleContext(0, DeclSpecifierSeqContext);
	}
	public declarator(): DeclaratorContext | undefined {
		return this.tryGetRuleContext(0, DeclaratorContext);
	}
	public Assign(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Assign, 0); }
	public initializerClause(): InitializerClauseContext | undefined {
		return this.tryGetRuleContext(0, InitializerClauseContext);
	}
	public bracedInitList(): BracedInitListContext | undefined {
		return this.tryGetRuleContext(0, BracedInitListContext);
	}
	public attributeSpecifierSeq(): AttributeSpecifierSeqContext | undefined {
		return this.tryGetRuleContext(0, AttributeSpecifierSeqContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_condition; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterCondition) {
			listener.enterCondition(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitCondition) {
			listener.exitCondition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitCondition) {
			return visitor.visitCondition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IterationStatementContext extends ParserRuleContext {
	public While(): TerminalNode | undefined { return this.tryGetToken(CPPParser.While, 0); }
	public LeftParen(): TerminalNode { return this.getToken(CPPParser.LeftParen, 0); }
	public condition(): ConditionContext | undefined {
		return this.tryGetRuleContext(0, ConditionContext);
	}
	public RightParen(): TerminalNode { return this.getToken(CPPParser.RightParen, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public Do(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Do, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public Semi(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Semi, 0); }
	public For(): TerminalNode | undefined { return this.tryGetToken(CPPParser.For, 0); }
	public forInitStatement(): ForInitStatementContext | undefined {
		return this.tryGetRuleContext(0, ForInitStatementContext);
	}
	public forRangeDeclaration(): ForRangeDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ForRangeDeclarationContext);
	}
	public Colon(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Colon, 0); }
	public forRangeInitializer(): ForRangeInitializerContext | undefined {
		return this.tryGetRuleContext(0, ForRangeInitializerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_iterationStatement; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterIterationStatement) {
			listener.enterIterationStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitIterationStatement) {
			listener.exitIterationStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitIterationStatement) {
			return visitor.visitIterationStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForInitStatementContext extends ParserRuleContext {
	public expressionStatement(): ExpressionStatementContext | undefined {
		return this.tryGetRuleContext(0, ExpressionStatementContext);
	}
	public simpleDeclaration(): SimpleDeclarationContext | undefined {
		return this.tryGetRuleContext(0, SimpleDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_forInitStatement; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterForInitStatement) {
			listener.enterForInitStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitForInitStatement) {
			listener.exitForInitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitForInitStatement) {
			return visitor.visitForInitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForRangeDeclarationContext extends ParserRuleContext {
	public declSpecifierSeq(): DeclSpecifierSeqContext {
		return this.getRuleContext(0, DeclSpecifierSeqContext);
	}
	public declarator(): DeclaratorContext {
		return this.getRuleContext(0, DeclaratorContext);
	}
	public attributeSpecifierSeq(): AttributeSpecifierSeqContext | undefined {
		return this.tryGetRuleContext(0, AttributeSpecifierSeqContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_forRangeDeclaration; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterForRangeDeclaration) {
			listener.enterForRangeDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitForRangeDeclaration) {
			listener.exitForRangeDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitForRangeDeclaration) {
			return visitor.visitForRangeDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForRangeInitializerContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public bracedInitList(): BracedInitListContext | undefined {
		return this.tryGetRuleContext(0, BracedInitListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_forRangeInitializer; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterForRangeInitializer) {
			listener.enterForRangeInitializer(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitForRangeInitializer) {
			listener.exitForRangeInitializer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitForRangeInitializer) {
			return visitor.visitForRangeInitializer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JumpStatementContext extends ParserRuleContext {
	public Semi(): TerminalNode { return this.getToken(CPPParser.Semi, 0); }
	public Break(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Break, 0); }
	public Continue(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Continue, 0); }
	public Return(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Return, 0); }
	public Goto(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Goto, 0); }
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Identifier, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public bracedInitList(): BracedInitListContext | undefined {
		return this.tryGetRuleContext(0, BracedInitListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_jumpStatement; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterJumpStatement) {
			listener.enterJumpStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitJumpStatement) {
			listener.exitJumpStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitJumpStatement) {
			return visitor.visitJumpStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclarationStatementContext extends ParserRuleContext {
	public blockDeclaration(): BlockDeclarationContext {
		return this.getRuleContext(0, BlockDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_declarationStatement; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterDeclarationStatement) {
			listener.enterDeclarationStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitDeclarationStatement) {
			listener.exitDeclarationStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitDeclarationStatement) {
			return visitor.visitDeclarationStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclarationseqContext extends ParserRuleContext {
	public declaration(): DeclarationContext[];
	public declaration(i: number): DeclarationContext;
	public declaration(i?: number): DeclarationContext | DeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DeclarationContext);
		} else {
			return this.getRuleContext(i, DeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_declarationseq; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterDeclarationseq) {
			listener.enterDeclarationseq(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitDeclarationseq) {
			listener.exitDeclarationseq(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitDeclarationseq) {
			return visitor.visitDeclarationseq(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclarationContext extends ParserRuleContext {
	public blockDeclaration(): BlockDeclarationContext | undefined {
		return this.tryGetRuleContext(0, BlockDeclarationContext);
	}
	public functionDefinition(): FunctionDefinitionContext | undefined {
		return this.tryGetRuleContext(0, FunctionDefinitionContext);
	}
	public templateDeclaration(): TemplateDeclarationContext | undefined {
		return this.tryGetRuleContext(0, TemplateDeclarationContext);
	}
	public explicitInstantiation(): ExplicitInstantiationContext | undefined {
		return this.tryGetRuleContext(0, ExplicitInstantiationContext);
	}
	public explicitSpecialization(): ExplicitSpecializationContext | undefined {
		return this.tryGetRuleContext(0, ExplicitSpecializationContext);
	}
	public linkageSpecification(): LinkageSpecificationContext | undefined {
		return this.tryGetRuleContext(0, LinkageSpecificationContext);
	}
	public namespaceDefinition(): NamespaceDefinitionContext | undefined {
		return this.tryGetRuleContext(0, NamespaceDefinitionContext);
	}
	public emptyDeclaration(): EmptyDeclarationContext | undefined {
		return this.tryGetRuleContext(0, EmptyDeclarationContext);
	}
	public attributeDeclaration(): AttributeDeclarationContext | undefined {
		return this.tryGetRuleContext(0, AttributeDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_declaration; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterDeclaration) {
			listener.enterDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitDeclaration) {
			listener.exitDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitDeclaration) {
			return visitor.visitDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockDeclarationContext extends ParserRuleContext {
	public simpleDeclaration(): SimpleDeclarationContext | undefined {
		return this.tryGetRuleContext(0, SimpleDeclarationContext);
	}
	public asmDefinition(): AsmDefinitionContext | undefined {
		return this.tryGetRuleContext(0, AsmDefinitionContext);
	}
	public namespaceAliasDefinition(): NamespaceAliasDefinitionContext | undefined {
		return this.tryGetRuleContext(0, NamespaceAliasDefinitionContext);
	}
	public usingDeclaration(): UsingDeclarationContext | undefined {
		return this.tryGetRuleContext(0, UsingDeclarationContext);
	}
	public usingDirective(): UsingDirectiveContext | undefined {
		return this.tryGetRuleContext(0, UsingDirectiveContext);
	}
	public staticAssertDeclaration(): StaticAssertDeclarationContext | undefined {
		return this.tryGetRuleContext(0, StaticAssertDeclarationContext);
	}
	public aliasDeclaration(): AliasDeclarationContext | undefined {
		return this.tryGetRuleContext(0, AliasDeclarationContext);
	}
	public opaqueEnumDeclaration(): OpaqueEnumDeclarationContext | undefined {
		return this.tryGetRuleContext(0, OpaqueEnumDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_blockDeclaration; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterBlockDeclaration) {
			listener.enterBlockDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitBlockDeclaration) {
			listener.exitBlockDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitBlockDeclaration) {
			return visitor.visitBlockDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AliasDeclarationContext extends ParserRuleContext {
	public Using(): TerminalNode { return this.getToken(CPPParser.Using, 0); }
	public Identifier(): TerminalNode { return this.getToken(CPPParser.Identifier, 0); }
	public Assign(): TerminalNode { return this.getToken(CPPParser.Assign, 0); }
	public theTypeId(): TheTypeIdContext {
		return this.getRuleContext(0, TheTypeIdContext);
	}
	public Semi(): TerminalNode { return this.getToken(CPPParser.Semi, 0); }
	public attributeSpecifierSeq(): AttributeSpecifierSeqContext | undefined {
		return this.tryGetRuleContext(0, AttributeSpecifierSeqContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_aliasDeclaration; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterAliasDeclaration) {
			listener.enterAliasDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitAliasDeclaration) {
			listener.exitAliasDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitAliasDeclaration) {
			return visitor.visitAliasDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SimpleDeclarationContext extends ParserRuleContext {
	public Semi(): TerminalNode { return this.getToken(CPPParser.Semi, 0); }
	public declSpecifierSeq(): DeclSpecifierSeqContext | undefined {
		return this.tryGetRuleContext(0, DeclSpecifierSeqContext);
	}
	public initDeclaratorList(): InitDeclaratorListContext | undefined {
		return this.tryGetRuleContext(0, InitDeclaratorListContext);
	}
	public attributeSpecifierSeq(): AttributeSpecifierSeqContext | undefined {
		return this.tryGetRuleContext(0, AttributeSpecifierSeqContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_simpleDeclaration; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterSimpleDeclaration) {
			listener.enterSimpleDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitSimpleDeclaration) {
			listener.exitSimpleDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitSimpleDeclaration) {
			return visitor.visitSimpleDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StaticAssertDeclarationContext extends ParserRuleContext {
	public Static_assert(): TerminalNode { return this.getToken(CPPParser.Static_assert, 0); }
	public LeftParen(): TerminalNode { return this.getToken(CPPParser.LeftParen, 0); }
	public constantExpression(): ConstantExpressionContext {
		return this.getRuleContext(0, ConstantExpressionContext);
	}
	public Comma(): TerminalNode { return this.getToken(CPPParser.Comma, 0); }
	public StringLiteral(): TerminalNode { return this.getToken(CPPParser.StringLiteral, 0); }
	public RightParen(): TerminalNode { return this.getToken(CPPParser.RightParen, 0); }
	public Semi(): TerminalNode { return this.getToken(CPPParser.Semi, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_staticAssertDeclaration; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterStaticAssertDeclaration) {
			listener.enterStaticAssertDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitStaticAssertDeclaration) {
			listener.exitStaticAssertDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitStaticAssertDeclaration) {
			return visitor.visitStaticAssertDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EmptyDeclarationContext extends ParserRuleContext {
	public Semi(): TerminalNode { return this.getToken(CPPParser.Semi, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_emptyDeclaration; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterEmptyDeclaration) {
			listener.enterEmptyDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitEmptyDeclaration) {
			listener.exitEmptyDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitEmptyDeclaration) {
			return visitor.visitEmptyDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AttributeDeclarationContext extends ParserRuleContext {
	public attributeSpecifierSeq(): AttributeSpecifierSeqContext {
		return this.getRuleContext(0, AttributeSpecifierSeqContext);
	}
	public Semi(): TerminalNode { return this.getToken(CPPParser.Semi, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_attributeDeclaration; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterAttributeDeclaration) {
			listener.enterAttributeDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitAttributeDeclaration) {
			listener.exitAttributeDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitAttributeDeclaration) {
			return visitor.visitAttributeDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclSpecifierContext extends ParserRuleContext {
	public storageClassSpecifier(): StorageClassSpecifierContext | undefined {
		return this.tryGetRuleContext(0, StorageClassSpecifierContext);
	}
	public typeSpecifier(): TypeSpecifierContext | undefined {
		return this.tryGetRuleContext(0, TypeSpecifierContext);
	}
	public functionSpecifier(): FunctionSpecifierContext | undefined {
		return this.tryGetRuleContext(0, FunctionSpecifierContext);
	}
	public Friend(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Friend, 0); }
	public Typedef(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Typedef, 0); }
	public Constexpr(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Constexpr, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_declSpecifier; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterDeclSpecifier) {
			listener.enterDeclSpecifier(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitDeclSpecifier) {
			listener.exitDeclSpecifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitDeclSpecifier) {
			return visitor.visitDeclSpecifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclSpecifierSeqContext extends ParserRuleContext {
	public declSpecifier(): DeclSpecifierContext[];
	public declSpecifier(i: number): DeclSpecifierContext;
	public declSpecifier(i?: number): DeclSpecifierContext | DeclSpecifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DeclSpecifierContext);
		} else {
			return this.getRuleContext(i, DeclSpecifierContext);
		}
	}
	public attributeSpecifierSeq(): AttributeSpecifierSeqContext | undefined {
		return this.tryGetRuleContext(0, AttributeSpecifierSeqContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_declSpecifierSeq; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterDeclSpecifierSeq) {
			listener.enterDeclSpecifierSeq(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitDeclSpecifierSeq) {
			listener.exitDeclSpecifierSeq(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitDeclSpecifierSeq) {
			return visitor.visitDeclSpecifierSeq(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StorageClassSpecifierContext extends ParserRuleContext {
	public Register(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Register, 0); }
	public Static(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Static, 0); }
	public Thread_local(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Thread_local, 0); }
	public Extern(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Extern, 0); }
	public Mutable(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Mutable, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_storageClassSpecifier; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterStorageClassSpecifier) {
			listener.enterStorageClassSpecifier(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitStorageClassSpecifier) {
			listener.exitStorageClassSpecifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitStorageClassSpecifier) {
			return visitor.visitStorageClassSpecifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionSpecifierContext extends ParserRuleContext {
	public Inline(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Inline, 0); }
	public Virtual(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Virtual, 0); }
	public Explicit(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Explicit, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_functionSpecifier; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterFunctionSpecifier) {
			listener.enterFunctionSpecifier(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitFunctionSpecifier) {
			listener.exitFunctionSpecifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitFunctionSpecifier) {
			return visitor.visitFunctionSpecifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypedefNameContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(CPPParser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_typedefName; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterTypedefName) {
			listener.enterTypedefName(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitTypedefName) {
			listener.exitTypedefName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitTypedefName) {
			return visitor.visitTypedefName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeSpecifierContext extends ParserRuleContext {
	public trailingTypeSpecifier(): TrailingTypeSpecifierContext | undefined {
		return this.tryGetRuleContext(0, TrailingTypeSpecifierContext);
	}
	public classSpecifier(): ClassSpecifierContext | undefined {
		return this.tryGetRuleContext(0, ClassSpecifierContext);
	}
	public enumSpecifier(): EnumSpecifierContext | undefined {
		return this.tryGetRuleContext(0, EnumSpecifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_typeSpecifier; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterTypeSpecifier) {
			listener.enterTypeSpecifier(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitTypeSpecifier) {
			listener.exitTypeSpecifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitTypeSpecifier) {
			return visitor.visitTypeSpecifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TrailingTypeSpecifierContext extends ParserRuleContext {
	public simpleTypeSpecifier(): SimpleTypeSpecifierContext | undefined {
		return this.tryGetRuleContext(0, SimpleTypeSpecifierContext);
	}
	public elaboratedTypeSpecifier(): ElaboratedTypeSpecifierContext | undefined {
		return this.tryGetRuleContext(0, ElaboratedTypeSpecifierContext);
	}
	public typeNameSpecifier(): TypeNameSpecifierContext | undefined {
		return this.tryGetRuleContext(0, TypeNameSpecifierContext);
	}
	public cvQualifier(): CvQualifierContext | undefined {
		return this.tryGetRuleContext(0, CvQualifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_trailingTypeSpecifier; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterTrailingTypeSpecifier) {
			listener.enterTrailingTypeSpecifier(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitTrailingTypeSpecifier) {
			listener.exitTrailingTypeSpecifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitTrailingTypeSpecifier) {
			return visitor.visitTrailingTypeSpecifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeSpecifierSeqContext extends ParserRuleContext {
	public typeSpecifier(): TypeSpecifierContext[];
	public typeSpecifier(i: number): TypeSpecifierContext;
	public typeSpecifier(i?: number): TypeSpecifierContext | TypeSpecifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeSpecifierContext);
		} else {
			return this.getRuleContext(i, TypeSpecifierContext);
		}
	}
	public attributeSpecifierSeq(): AttributeSpecifierSeqContext | undefined {
		return this.tryGetRuleContext(0, AttributeSpecifierSeqContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_typeSpecifierSeq; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterTypeSpecifierSeq) {
			listener.enterTypeSpecifierSeq(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitTypeSpecifierSeq) {
			listener.exitTypeSpecifierSeq(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitTypeSpecifierSeq) {
			return visitor.visitTypeSpecifierSeq(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TrailingTypeSpecifierSeqContext extends ParserRuleContext {
	public trailingTypeSpecifier(): TrailingTypeSpecifierContext[];
	public trailingTypeSpecifier(i: number): TrailingTypeSpecifierContext;
	public trailingTypeSpecifier(i?: number): TrailingTypeSpecifierContext | TrailingTypeSpecifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TrailingTypeSpecifierContext);
		} else {
			return this.getRuleContext(i, TrailingTypeSpecifierContext);
		}
	}
	public attributeSpecifierSeq(): AttributeSpecifierSeqContext | undefined {
		return this.tryGetRuleContext(0, AttributeSpecifierSeqContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_trailingTypeSpecifierSeq; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterTrailingTypeSpecifierSeq) {
			listener.enterTrailingTypeSpecifierSeq(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitTrailingTypeSpecifierSeq) {
			listener.exitTrailingTypeSpecifierSeq(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitTrailingTypeSpecifierSeq) {
			return visitor.visitTrailingTypeSpecifierSeq(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SimpleTypeLengthModifierContext extends ParserRuleContext {
	public Short(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Short, 0); }
	public Long(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Long, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_simpleTypeLengthModifier; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterSimpleTypeLengthModifier) {
			listener.enterSimpleTypeLengthModifier(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitSimpleTypeLengthModifier) {
			listener.exitSimpleTypeLengthModifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitSimpleTypeLengthModifier) {
			return visitor.visitSimpleTypeLengthModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SimpleTypeSignednessModifierContext extends ParserRuleContext {
	public Unsigned(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Unsigned, 0); }
	public Signed(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Signed, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_simpleTypeSignednessModifier; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterSimpleTypeSignednessModifier) {
			listener.enterSimpleTypeSignednessModifier(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitSimpleTypeSignednessModifier) {
			listener.exitSimpleTypeSignednessModifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitSimpleTypeSignednessModifier) {
			return visitor.visitSimpleTypeSignednessModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SimpleTypeSpecifierContext extends ParserRuleContext {
	public theTypeName(): TheTypeNameContext | undefined {
		return this.tryGetRuleContext(0, TheTypeNameContext);
	}
	public nestedNameSpecifier(): NestedNameSpecifierContext | undefined {
		return this.tryGetRuleContext(0, NestedNameSpecifierContext);
	}
	public Template(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Template, 0); }
	public simpleTemplateId(): SimpleTemplateIdContext | undefined {
		return this.tryGetRuleContext(0, SimpleTemplateIdContext);
	}
	public simpleTypeSignednessModifier(): SimpleTypeSignednessModifierContext | undefined {
		return this.tryGetRuleContext(0, SimpleTypeSignednessModifierContext);
	}
	public simpleTypeLengthModifier(): SimpleTypeLengthModifierContext[];
	public simpleTypeLengthModifier(i: number): SimpleTypeLengthModifierContext;
	public simpleTypeLengthModifier(i?: number): SimpleTypeLengthModifierContext | SimpleTypeLengthModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SimpleTypeLengthModifierContext);
		} else {
			return this.getRuleContext(i, SimpleTypeLengthModifierContext);
		}
	}
	public Char(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Char, 0); }
	public Char16(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Char16, 0); }
	public Char32(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Char32, 0); }
	public Wchar(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Wchar, 0); }
	public Bool(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Bool, 0); }
	public Int(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Int, 0); }
	public Float(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Float, 0); }
	public Double(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Double, 0); }
	public Void(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Void, 0); }
	public Auto(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Auto, 0); }
	public decltypeSpecifier(): DecltypeSpecifierContext | undefined {
		return this.tryGetRuleContext(0, DecltypeSpecifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_simpleTypeSpecifier; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterSimpleTypeSpecifier) {
			listener.enterSimpleTypeSpecifier(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitSimpleTypeSpecifier) {
			listener.exitSimpleTypeSpecifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitSimpleTypeSpecifier) {
			return visitor.visitSimpleTypeSpecifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TheTypeNameContext extends ParserRuleContext {
	public className(): ClassNameContext | undefined {
		return this.tryGetRuleContext(0, ClassNameContext);
	}
	public enumName(): EnumNameContext | undefined {
		return this.tryGetRuleContext(0, EnumNameContext);
	}
	public typedefName(): TypedefNameContext | undefined {
		return this.tryGetRuleContext(0, TypedefNameContext);
	}
	public simpleTemplateId(): SimpleTemplateIdContext | undefined {
		return this.tryGetRuleContext(0, SimpleTemplateIdContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_theTypeName; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterTheTypeName) {
			listener.enterTheTypeName(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitTheTypeName) {
			listener.exitTheTypeName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitTheTypeName) {
			return visitor.visitTheTypeName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DecltypeSpecifierContext extends ParserRuleContext {
	public Decltype(): TerminalNode { return this.getToken(CPPParser.Decltype, 0); }
	public LeftParen(): TerminalNode { return this.getToken(CPPParser.LeftParen, 0); }
	public RightParen(): TerminalNode { return this.getToken(CPPParser.RightParen, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public Auto(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Auto, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_decltypeSpecifier; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterDecltypeSpecifier) {
			listener.enterDecltypeSpecifier(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitDecltypeSpecifier) {
			listener.exitDecltypeSpecifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitDecltypeSpecifier) {
			return visitor.visitDecltypeSpecifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElaboratedTypeSpecifierContext extends ParserRuleContext {
	public classKey(): ClassKeyContext | undefined {
		return this.tryGetRuleContext(0, ClassKeyContext);
	}
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Identifier, 0); }
	public simpleTemplateId(): SimpleTemplateIdContext | undefined {
		return this.tryGetRuleContext(0, SimpleTemplateIdContext);
	}
	public nestedNameSpecifier(): NestedNameSpecifierContext | undefined {
		return this.tryGetRuleContext(0, NestedNameSpecifierContext);
	}
	public attributeSpecifierSeq(): AttributeSpecifierSeqContext | undefined {
		return this.tryGetRuleContext(0, AttributeSpecifierSeqContext);
	}
	public Template(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Template, 0); }
	public Enum(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Enum, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_elaboratedTypeSpecifier; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterElaboratedTypeSpecifier) {
			listener.enterElaboratedTypeSpecifier(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitElaboratedTypeSpecifier) {
			listener.exitElaboratedTypeSpecifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitElaboratedTypeSpecifier) {
			return visitor.visitElaboratedTypeSpecifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumNameContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(CPPParser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_enumName; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterEnumName) {
			listener.enterEnumName(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitEnumName) {
			listener.exitEnumName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitEnumName) {
			return visitor.visitEnumName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumSpecifierContext extends ParserRuleContext {
	public enumHead(): EnumHeadContext {
		return this.getRuleContext(0, EnumHeadContext);
	}
	public LeftBrace(): TerminalNode { return this.getToken(CPPParser.LeftBrace, 0); }
	public RightBrace(): TerminalNode { return this.getToken(CPPParser.RightBrace, 0); }
	public enumeratorList(): EnumeratorListContext | undefined {
		return this.tryGetRuleContext(0, EnumeratorListContext);
	}
	public Comma(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Comma, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_enumSpecifier; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterEnumSpecifier) {
			listener.enterEnumSpecifier(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitEnumSpecifier) {
			listener.exitEnumSpecifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitEnumSpecifier) {
			return visitor.visitEnumSpecifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumHeadContext extends ParserRuleContext {
	public enumkey(): EnumkeyContext {
		return this.getRuleContext(0, EnumkeyContext);
	}
	public attributeSpecifierSeq(): AttributeSpecifierSeqContext | undefined {
		return this.tryGetRuleContext(0, AttributeSpecifierSeqContext);
	}
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Identifier, 0); }
	public enumbase(): EnumbaseContext | undefined {
		return this.tryGetRuleContext(0, EnumbaseContext);
	}
	public nestedNameSpecifier(): NestedNameSpecifierContext | undefined {
		return this.tryGetRuleContext(0, NestedNameSpecifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_enumHead; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterEnumHead) {
			listener.enterEnumHead(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitEnumHead) {
			listener.exitEnumHead(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitEnumHead) {
			return visitor.visitEnumHead(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OpaqueEnumDeclarationContext extends ParserRuleContext {
	public enumkey(): EnumkeyContext {
		return this.getRuleContext(0, EnumkeyContext);
	}
	public Identifier(): TerminalNode { return this.getToken(CPPParser.Identifier, 0); }
	public Semi(): TerminalNode { return this.getToken(CPPParser.Semi, 0); }
	public attributeSpecifierSeq(): AttributeSpecifierSeqContext | undefined {
		return this.tryGetRuleContext(0, AttributeSpecifierSeqContext);
	}
	public enumbase(): EnumbaseContext | undefined {
		return this.tryGetRuleContext(0, EnumbaseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_opaqueEnumDeclaration; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterOpaqueEnumDeclaration) {
			listener.enterOpaqueEnumDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitOpaqueEnumDeclaration) {
			listener.exitOpaqueEnumDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitOpaqueEnumDeclaration) {
			return visitor.visitOpaqueEnumDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumkeyContext extends ParserRuleContext {
	public Enum(): TerminalNode { return this.getToken(CPPParser.Enum, 0); }
	public Class(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Class, 0); }
	public Struct(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Struct, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_enumkey; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterEnumkey) {
			listener.enterEnumkey(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitEnumkey) {
			listener.exitEnumkey(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitEnumkey) {
			return visitor.visitEnumkey(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumbaseContext extends ParserRuleContext {
	public Colon(): TerminalNode { return this.getToken(CPPParser.Colon, 0); }
	public typeSpecifierSeq(): TypeSpecifierSeqContext {
		return this.getRuleContext(0, TypeSpecifierSeqContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_enumbase; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterEnumbase) {
			listener.enterEnumbase(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitEnumbase) {
			listener.exitEnumbase(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitEnumbase) {
			return visitor.visitEnumbase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumeratorListContext extends ParserRuleContext {
	public enumeratorDefinition(): EnumeratorDefinitionContext[];
	public enumeratorDefinition(i: number): EnumeratorDefinitionContext;
	public enumeratorDefinition(i?: number): EnumeratorDefinitionContext | EnumeratorDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EnumeratorDefinitionContext);
		} else {
			return this.getRuleContext(i, EnumeratorDefinitionContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPPParser.Comma);
		} else {
			return this.getToken(CPPParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_enumeratorList; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterEnumeratorList) {
			listener.enterEnumeratorList(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitEnumeratorList) {
			listener.exitEnumeratorList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitEnumeratorList) {
			return visitor.visitEnumeratorList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumeratorDefinitionContext extends ParserRuleContext {
	public enumerator(): EnumeratorContext {
		return this.getRuleContext(0, EnumeratorContext);
	}
	public Assign(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Assign, 0); }
	public constantExpression(): ConstantExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConstantExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_enumeratorDefinition; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterEnumeratorDefinition) {
			listener.enterEnumeratorDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitEnumeratorDefinition) {
			listener.exitEnumeratorDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitEnumeratorDefinition) {
			return visitor.visitEnumeratorDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumeratorContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(CPPParser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_enumerator; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterEnumerator) {
			listener.enterEnumerator(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitEnumerator) {
			listener.exitEnumerator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitEnumerator) {
			return visitor.visitEnumerator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NamespaceNameContext extends ParserRuleContext {
	public originalNamespaceName(): OriginalNamespaceNameContext | undefined {
		return this.tryGetRuleContext(0, OriginalNamespaceNameContext);
	}
	public namespaceAlias(): NamespaceAliasContext | undefined {
		return this.tryGetRuleContext(0, NamespaceAliasContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_namespaceName; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterNamespaceName) {
			listener.enterNamespaceName(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitNamespaceName) {
			listener.exitNamespaceName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitNamespaceName) {
			return visitor.visitNamespaceName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OriginalNamespaceNameContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(CPPParser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_originalNamespaceName; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterOriginalNamespaceName) {
			listener.enterOriginalNamespaceName(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitOriginalNamespaceName) {
			listener.exitOriginalNamespaceName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitOriginalNamespaceName) {
			return visitor.visitOriginalNamespaceName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NamespaceDefinitionContext extends ParserRuleContext {
	public _namespaceBody!: DeclarationseqContext;
	public Namespace(): TerminalNode { return this.getToken(CPPParser.Namespace, 0); }
	public LeftBrace(): TerminalNode { return this.getToken(CPPParser.LeftBrace, 0); }
	public RightBrace(): TerminalNode { return this.getToken(CPPParser.RightBrace, 0); }
	public Inline(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Inline, 0); }
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Identifier, 0); }
	public originalNamespaceName(): OriginalNamespaceNameContext | undefined {
		return this.tryGetRuleContext(0, OriginalNamespaceNameContext);
	}
	public declarationseq(): DeclarationseqContext | undefined {
		return this.tryGetRuleContext(0, DeclarationseqContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_namespaceDefinition; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterNamespaceDefinition) {
			listener.enterNamespaceDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitNamespaceDefinition) {
			listener.exitNamespaceDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitNamespaceDefinition) {
			return visitor.visitNamespaceDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NamespaceAliasContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(CPPParser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_namespaceAlias; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterNamespaceAlias) {
			listener.enterNamespaceAlias(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitNamespaceAlias) {
			listener.exitNamespaceAlias(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitNamespaceAlias) {
			return visitor.visitNamespaceAlias(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NamespaceAliasDefinitionContext extends ParserRuleContext {
	public Namespace(): TerminalNode { return this.getToken(CPPParser.Namespace, 0); }
	public Identifier(): TerminalNode { return this.getToken(CPPParser.Identifier, 0); }
	public Assign(): TerminalNode { return this.getToken(CPPParser.Assign, 0); }
	public qualifiednamespacespecifier(): QualifiednamespacespecifierContext {
		return this.getRuleContext(0, QualifiednamespacespecifierContext);
	}
	public Semi(): TerminalNode { return this.getToken(CPPParser.Semi, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_namespaceAliasDefinition; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterNamespaceAliasDefinition) {
			listener.enterNamespaceAliasDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitNamespaceAliasDefinition) {
			listener.exitNamespaceAliasDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitNamespaceAliasDefinition) {
			return visitor.visitNamespaceAliasDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QualifiednamespacespecifierContext extends ParserRuleContext {
	public namespaceName(): NamespaceNameContext {
		return this.getRuleContext(0, NamespaceNameContext);
	}
	public nestedNameSpecifier(): NestedNameSpecifierContext | undefined {
		return this.tryGetRuleContext(0, NestedNameSpecifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_qualifiednamespacespecifier; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterQualifiednamespacespecifier) {
			listener.enterQualifiednamespacespecifier(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitQualifiednamespacespecifier) {
			listener.exitQualifiednamespacespecifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitQualifiednamespacespecifier) {
			return visitor.visitQualifiednamespacespecifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UsingDeclarationContext extends ParserRuleContext {
	public Using(): TerminalNode { return this.getToken(CPPParser.Using, 0); }
	public unqualifiedId(): UnqualifiedIdContext {
		return this.getRuleContext(0, UnqualifiedIdContext);
	}
	public Semi(): TerminalNode { return this.getToken(CPPParser.Semi, 0); }
	public Doublecolon(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Doublecolon, 0); }
	public nestedNameSpecifier(): NestedNameSpecifierContext | undefined {
		return this.tryGetRuleContext(0, NestedNameSpecifierContext);
	}
	public Typename_(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Typename_, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_usingDeclaration; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterUsingDeclaration) {
			listener.enterUsingDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitUsingDeclaration) {
			listener.exitUsingDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitUsingDeclaration) {
			return visitor.visitUsingDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UsingDirectiveContext extends ParserRuleContext {
	public Using(): TerminalNode { return this.getToken(CPPParser.Using, 0); }
	public Namespace(): TerminalNode { return this.getToken(CPPParser.Namespace, 0); }
	public namespaceName(): NamespaceNameContext {
		return this.getRuleContext(0, NamespaceNameContext);
	}
	public Semi(): TerminalNode { return this.getToken(CPPParser.Semi, 0); }
	public attributeSpecifierSeq(): AttributeSpecifierSeqContext | undefined {
		return this.tryGetRuleContext(0, AttributeSpecifierSeqContext);
	}
	public nestedNameSpecifier(): NestedNameSpecifierContext | undefined {
		return this.tryGetRuleContext(0, NestedNameSpecifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_usingDirective; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterUsingDirective) {
			listener.enterUsingDirective(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitUsingDirective) {
			listener.exitUsingDirective(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitUsingDirective) {
			return visitor.visitUsingDirective(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AsmDefinitionContext extends ParserRuleContext {
	public Asm(): TerminalNode { return this.getToken(CPPParser.Asm, 0); }
	public LeftParen(): TerminalNode { return this.getToken(CPPParser.LeftParen, 0); }
	public StringLiteral(): TerminalNode { return this.getToken(CPPParser.StringLiteral, 0); }
	public RightParen(): TerminalNode { return this.getToken(CPPParser.RightParen, 0); }
	public Semi(): TerminalNode { return this.getToken(CPPParser.Semi, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_asmDefinition; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterAsmDefinition) {
			listener.enterAsmDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitAsmDefinition) {
			listener.exitAsmDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitAsmDefinition) {
			return visitor.visitAsmDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LinkageSpecificationContext extends ParserRuleContext {
	public Extern(): TerminalNode { return this.getToken(CPPParser.Extern, 0); }
	public StringLiteral(): TerminalNode { return this.getToken(CPPParser.StringLiteral, 0); }
	public LeftBrace(): TerminalNode | undefined { return this.tryGetToken(CPPParser.LeftBrace, 0); }
	public RightBrace(): TerminalNode | undefined { return this.tryGetToken(CPPParser.RightBrace, 0); }
	public declaration(): DeclarationContext | undefined {
		return this.tryGetRuleContext(0, DeclarationContext);
	}
	public declarationseq(): DeclarationseqContext | undefined {
		return this.tryGetRuleContext(0, DeclarationseqContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_linkageSpecification; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterLinkageSpecification) {
			listener.enterLinkageSpecification(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitLinkageSpecification) {
			listener.exitLinkageSpecification(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitLinkageSpecification) {
			return visitor.visitLinkageSpecification(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AttributeSpecifierSeqContext extends ParserRuleContext {
	public attributeSpecifier(): AttributeSpecifierContext[];
	public attributeSpecifier(i: number): AttributeSpecifierContext;
	public attributeSpecifier(i?: number): AttributeSpecifierContext | AttributeSpecifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AttributeSpecifierContext);
		} else {
			return this.getRuleContext(i, AttributeSpecifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_attributeSpecifierSeq; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterAttributeSpecifierSeq) {
			listener.enterAttributeSpecifierSeq(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitAttributeSpecifierSeq) {
			listener.exitAttributeSpecifierSeq(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitAttributeSpecifierSeq) {
			return visitor.visitAttributeSpecifierSeq(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AttributeSpecifierContext extends ParserRuleContext {
	public LeftBracket(): TerminalNode[];
	public LeftBracket(i: number): TerminalNode;
	public LeftBracket(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPPParser.LeftBracket);
		} else {
			return this.getToken(CPPParser.LeftBracket, i);
		}
	}
	public RightBracket(): TerminalNode[];
	public RightBracket(i: number): TerminalNode;
	public RightBracket(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPPParser.RightBracket);
		} else {
			return this.getToken(CPPParser.RightBracket, i);
		}
	}
	public attributeList(): AttributeListContext | undefined {
		return this.tryGetRuleContext(0, AttributeListContext);
	}
	public alignmentspecifier(): AlignmentspecifierContext | undefined {
		return this.tryGetRuleContext(0, AlignmentspecifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_attributeSpecifier; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterAttributeSpecifier) {
			listener.enterAttributeSpecifier(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitAttributeSpecifier) {
			listener.exitAttributeSpecifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitAttributeSpecifier) {
			return visitor.visitAttributeSpecifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AlignmentspecifierContext extends ParserRuleContext {
	public Alignas(): TerminalNode { return this.getToken(CPPParser.Alignas, 0); }
	public LeftParen(): TerminalNode { return this.getToken(CPPParser.LeftParen, 0); }
	public RightParen(): TerminalNode { return this.getToken(CPPParser.RightParen, 0); }
	public theTypeId(): TheTypeIdContext | undefined {
		return this.tryGetRuleContext(0, TheTypeIdContext);
	}
	public constantExpression(): ConstantExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConstantExpressionContext);
	}
	public Ellipsis(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Ellipsis, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_alignmentspecifier; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterAlignmentspecifier) {
			listener.enterAlignmentspecifier(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitAlignmentspecifier) {
			listener.exitAlignmentspecifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitAlignmentspecifier) {
			return visitor.visitAlignmentspecifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AttributeListContext extends ParserRuleContext {
	public attribute(): AttributeContext[];
	public attribute(i: number): AttributeContext;
	public attribute(i?: number): AttributeContext | AttributeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AttributeContext);
		} else {
			return this.getRuleContext(i, AttributeContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPPParser.Comma);
		} else {
			return this.getToken(CPPParser.Comma, i);
		}
	}
	public Ellipsis(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Ellipsis, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_attributeList; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterAttributeList) {
			listener.enterAttributeList(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitAttributeList) {
			listener.exitAttributeList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitAttributeList) {
			return visitor.visitAttributeList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AttributeContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(CPPParser.Identifier, 0); }
	public attributeNamespace(): AttributeNamespaceContext | undefined {
		return this.tryGetRuleContext(0, AttributeNamespaceContext);
	}
	public Doublecolon(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Doublecolon, 0); }
	public attributeArgumentClause(): AttributeArgumentClauseContext | undefined {
		return this.tryGetRuleContext(0, AttributeArgumentClauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_attribute; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterAttribute) {
			listener.enterAttribute(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitAttribute) {
			listener.exitAttribute(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitAttribute) {
			return visitor.visitAttribute(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AttributeNamespaceContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(CPPParser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_attributeNamespace; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterAttributeNamespace) {
			listener.enterAttributeNamespace(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitAttributeNamespace) {
			listener.exitAttributeNamespace(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitAttributeNamespace) {
			return visitor.visitAttributeNamespace(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AttributeArgumentClauseContext extends ParserRuleContext {
	public LeftParen(): TerminalNode { return this.getToken(CPPParser.LeftParen, 0); }
	public RightParen(): TerminalNode { return this.getToken(CPPParser.RightParen, 0); }
	public balancedTokenSeq(): BalancedTokenSeqContext | undefined {
		return this.tryGetRuleContext(0, BalancedTokenSeqContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_attributeArgumentClause; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterAttributeArgumentClause) {
			listener.enterAttributeArgumentClause(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitAttributeArgumentClause) {
			listener.exitAttributeArgumentClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitAttributeArgumentClause) {
			return visitor.visitAttributeArgumentClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BalancedTokenSeqContext extends ParserRuleContext {
	public balancedtoken(): BalancedtokenContext[];
	public balancedtoken(i: number): BalancedtokenContext;
	public balancedtoken(i?: number): BalancedtokenContext | BalancedtokenContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BalancedtokenContext);
		} else {
			return this.getRuleContext(i, BalancedtokenContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_balancedTokenSeq; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterBalancedTokenSeq) {
			listener.enterBalancedTokenSeq(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitBalancedTokenSeq) {
			listener.exitBalancedTokenSeq(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitBalancedTokenSeq) {
			return visitor.visitBalancedTokenSeq(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BalancedtokenContext extends ParserRuleContext {
	public LeftParen(): TerminalNode[];
	public LeftParen(i: number): TerminalNode;
	public LeftParen(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPPParser.LeftParen);
		} else {
			return this.getToken(CPPParser.LeftParen, i);
		}
	}
	public balancedTokenSeq(): BalancedTokenSeqContext | undefined {
		return this.tryGetRuleContext(0, BalancedTokenSeqContext);
	}
	public RightParen(): TerminalNode[];
	public RightParen(i: number): TerminalNode;
	public RightParen(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPPParser.RightParen);
		} else {
			return this.getToken(CPPParser.RightParen, i);
		}
	}
	public LeftBracket(): TerminalNode[];
	public LeftBracket(i: number): TerminalNode;
	public LeftBracket(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPPParser.LeftBracket);
		} else {
			return this.getToken(CPPParser.LeftBracket, i);
		}
	}
	public RightBracket(): TerminalNode[];
	public RightBracket(i: number): TerminalNode;
	public RightBracket(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPPParser.RightBracket);
		} else {
			return this.getToken(CPPParser.RightBracket, i);
		}
	}
	public LeftBrace(): TerminalNode[];
	public LeftBrace(i: number): TerminalNode;
	public LeftBrace(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPPParser.LeftBrace);
		} else {
			return this.getToken(CPPParser.LeftBrace, i);
		}
	}
	public RightBrace(): TerminalNode[];
	public RightBrace(i: number): TerminalNode;
	public RightBrace(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPPParser.RightBrace);
		} else {
			return this.getToken(CPPParser.RightBrace, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_balancedtoken; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterBalancedtoken) {
			listener.enterBalancedtoken(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitBalancedtoken) {
			listener.exitBalancedtoken(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitBalancedtoken) {
			return visitor.visitBalancedtoken(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InitDeclaratorListContext extends ParserRuleContext {
	public initDeclarator(): InitDeclaratorContext[];
	public initDeclarator(i: number): InitDeclaratorContext;
	public initDeclarator(i?: number): InitDeclaratorContext | InitDeclaratorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InitDeclaratorContext);
		} else {
			return this.getRuleContext(i, InitDeclaratorContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPPParser.Comma);
		} else {
			return this.getToken(CPPParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_initDeclaratorList; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterInitDeclaratorList) {
			listener.enterInitDeclaratorList(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitInitDeclaratorList) {
			listener.exitInitDeclaratorList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitInitDeclaratorList) {
			return visitor.visitInitDeclaratorList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InitDeclaratorContext extends ParserRuleContext {
	public declarator(): DeclaratorContext {
		return this.getRuleContext(0, DeclaratorContext);
	}
	public initializer(): InitializerContext | undefined {
		return this.tryGetRuleContext(0, InitializerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_initDeclarator; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterInitDeclarator) {
			listener.enterInitDeclarator(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitInitDeclarator) {
			listener.exitInitDeclarator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitInitDeclarator) {
			return visitor.visitInitDeclarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclaratorContext extends ParserRuleContext {
	public pointerDeclarator(): PointerDeclaratorContext | undefined {
		return this.tryGetRuleContext(0, PointerDeclaratorContext);
	}
	public noPointerDeclarator(): NoPointerDeclaratorContext | undefined {
		return this.tryGetRuleContext(0, NoPointerDeclaratorContext);
	}
	public parametersAndQualifiers(): ParametersAndQualifiersContext | undefined {
		return this.tryGetRuleContext(0, ParametersAndQualifiersContext);
	}
	public trailingReturnType(): TrailingReturnTypeContext | undefined {
		return this.tryGetRuleContext(0, TrailingReturnTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_declarator; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterDeclarator) {
			listener.enterDeclarator(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitDeclarator) {
			listener.exitDeclarator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitDeclarator) {
			return visitor.visitDeclarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PointerDeclaratorContext extends ParserRuleContext {
	public noPointerDeclarator(): NoPointerDeclaratorContext {
		return this.getRuleContext(0, NoPointerDeclaratorContext);
	}
	public pointerOperator(): PointerOperatorContext[];
	public pointerOperator(i: number): PointerOperatorContext;
	public pointerOperator(i?: number): PointerOperatorContext | PointerOperatorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PointerOperatorContext);
		} else {
			return this.getRuleContext(i, PointerOperatorContext);
		}
	}
	public Const(): TerminalNode[];
	public Const(i: number): TerminalNode;
	public Const(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPPParser.Const);
		} else {
			return this.getToken(CPPParser.Const, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_pointerDeclarator; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterPointerDeclarator) {
			listener.enterPointerDeclarator(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitPointerDeclarator) {
			listener.exitPointerDeclarator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitPointerDeclarator) {
			return visitor.visitPointerDeclarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NoPointerDeclaratorContext extends ParserRuleContext {
	public declaratorid(): DeclaratoridContext | undefined {
		return this.tryGetRuleContext(0, DeclaratoridContext);
	}
	public attributeSpecifierSeq(): AttributeSpecifierSeqContext | undefined {
		return this.tryGetRuleContext(0, AttributeSpecifierSeqContext);
	}
	public noPointerDeclarator(): NoPointerDeclaratorContext | undefined {
		return this.tryGetRuleContext(0, NoPointerDeclaratorContext);
	}
	public parametersAndQualifiers(): ParametersAndQualifiersContext | undefined {
		return this.tryGetRuleContext(0, ParametersAndQualifiersContext);
	}
	public LeftBracket(): TerminalNode | undefined { return this.tryGetToken(CPPParser.LeftBracket, 0); }
	public RightBracket(): TerminalNode | undefined { return this.tryGetToken(CPPParser.RightBracket, 0); }
	public constantExpression(): ConstantExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConstantExpressionContext);
	}
	public LeftParen(): TerminalNode | undefined { return this.tryGetToken(CPPParser.LeftParen, 0); }
	public pointerDeclarator(): PointerDeclaratorContext | undefined {
		return this.tryGetRuleContext(0, PointerDeclaratorContext);
	}
	public RightParen(): TerminalNode | undefined { return this.tryGetToken(CPPParser.RightParen, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_noPointerDeclarator; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterNoPointerDeclarator) {
			listener.enterNoPointerDeclarator(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitNoPointerDeclarator) {
			listener.exitNoPointerDeclarator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitNoPointerDeclarator) {
			return visitor.visitNoPointerDeclarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParametersAndQualifiersContext extends ParserRuleContext {
	public LeftParen(): TerminalNode { return this.getToken(CPPParser.LeftParen, 0); }
	public RightParen(): TerminalNode { return this.getToken(CPPParser.RightParen, 0); }
	public parameterDeclarationClause(): ParameterDeclarationClauseContext | undefined {
		return this.tryGetRuleContext(0, ParameterDeclarationClauseContext);
	}
	public cvqualifierseq(): CvqualifierseqContext | undefined {
		return this.tryGetRuleContext(0, CvqualifierseqContext);
	}
	public refqualifier(): RefqualifierContext | undefined {
		return this.tryGetRuleContext(0, RefqualifierContext);
	}
	public exceptionSpecification(): ExceptionSpecificationContext | undefined {
		return this.tryGetRuleContext(0, ExceptionSpecificationContext);
	}
	public attributeSpecifierSeq(): AttributeSpecifierSeqContext | undefined {
		return this.tryGetRuleContext(0, AttributeSpecifierSeqContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_parametersAndQualifiers; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterParametersAndQualifiers) {
			listener.enterParametersAndQualifiers(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitParametersAndQualifiers) {
			listener.exitParametersAndQualifiers(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitParametersAndQualifiers) {
			return visitor.visitParametersAndQualifiers(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TrailingReturnTypeContext extends ParserRuleContext {
	public Arrow(): TerminalNode { return this.getToken(CPPParser.Arrow, 0); }
	public trailingTypeSpecifierSeq(): TrailingTypeSpecifierSeqContext {
		return this.getRuleContext(0, TrailingTypeSpecifierSeqContext);
	}
	public abstractDeclarator(): AbstractDeclaratorContext | undefined {
		return this.tryGetRuleContext(0, AbstractDeclaratorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_trailingReturnType; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterTrailingReturnType) {
			listener.enterTrailingReturnType(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitTrailingReturnType) {
			listener.exitTrailingReturnType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitTrailingReturnType) {
			return visitor.visitTrailingReturnType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PointerOperatorContext extends ParserRuleContext {
	public And(): TerminalNode | undefined { return this.tryGetToken(CPPParser.And, 0); }
	public AndAnd(): TerminalNode | undefined { return this.tryGetToken(CPPParser.AndAnd, 0); }
	public attributeSpecifierSeq(): AttributeSpecifierSeqContext | undefined {
		return this.tryGetRuleContext(0, AttributeSpecifierSeqContext);
	}
	public Star(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Star, 0); }
	public nestedNameSpecifier(): NestedNameSpecifierContext | undefined {
		return this.tryGetRuleContext(0, NestedNameSpecifierContext);
	}
	public cvqualifierseq(): CvqualifierseqContext | undefined {
		return this.tryGetRuleContext(0, CvqualifierseqContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_pointerOperator; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterPointerOperator) {
			listener.enterPointerOperator(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitPointerOperator) {
			listener.exitPointerOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitPointerOperator) {
			return visitor.visitPointerOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CvqualifierseqContext extends ParserRuleContext {
	public cvQualifier(): CvQualifierContext[];
	public cvQualifier(i: number): CvQualifierContext;
	public cvQualifier(i?: number): CvQualifierContext | CvQualifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CvQualifierContext);
		} else {
			return this.getRuleContext(i, CvQualifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_cvqualifierseq; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterCvqualifierseq) {
			listener.enterCvqualifierseq(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitCvqualifierseq) {
			listener.exitCvqualifierseq(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitCvqualifierseq) {
			return visitor.visitCvqualifierseq(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CvQualifierContext extends ParserRuleContext {
	public Const(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Const, 0); }
	public Volatile(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Volatile, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_cvQualifier; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterCvQualifier) {
			listener.enterCvQualifier(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitCvQualifier) {
			listener.exitCvQualifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitCvQualifier) {
			return visitor.visitCvQualifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RefqualifierContext extends ParserRuleContext {
	public And(): TerminalNode | undefined { return this.tryGetToken(CPPParser.And, 0); }
	public AndAnd(): TerminalNode | undefined { return this.tryGetToken(CPPParser.AndAnd, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_refqualifier; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterRefqualifier) {
			listener.enterRefqualifier(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitRefqualifier) {
			listener.exitRefqualifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitRefqualifier) {
			return visitor.visitRefqualifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclaratoridContext extends ParserRuleContext {
	public idExpression(): IdExpressionContext {
		return this.getRuleContext(0, IdExpressionContext);
	}
	public Ellipsis(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Ellipsis, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_declaratorid; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterDeclaratorid) {
			listener.enterDeclaratorid(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitDeclaratorid) {
			listener.exitDeclaratorid(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitDeclaratorid) {
			return visitor.visitDeclaratorid(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TheTypeIdContext extends ParserRuleContext {
	public typeSpecifierSeq(): TypeSpecifierSeqContext {
		return this.getRuleContext(0, TypeSpecifierSeqContext);
	}
	public abstractDeclarator(): AbstractDeclaratorContext | undefined {
		return this.tryGetRuleContext(0, AbstractDeclaratorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_theTypeId; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterTheTypeId) {
			listener.enterTheTypeId(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitTheTypeId) {
			listener.exitTheTypeId(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitTheTypeId) {
			return visitor.visitTheTypeId(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AbstractDeclaratorContext extends ParserRuleContext {
	public pointerAbstractDeclarator(): PointerAbstractDeclaratorContext | undefined {
		return this.tryGetRuleContext(0, PointerAbstractDeclaratorContext);
	}
	public parametersAndQualifiers(): ParametersAndQualifiersContext | undefined {
		return this.tryGetRuleContext(0, ParametersAndQualifiersContext);
	}
	public trailingReturnType(): TrailingReturnTypeContext | undefined {
		return this.tryGetRuleContext(0, TrailingReturnTypeContext);
	}
	public noPointerAbstractDeclarator(): NoPointerAbstractDeclaratorContext | undefined {
		return this.tryGetRuleContext(0, NoPointerAbstractDeclaratorContext);
	}
	public abstractPackDeclarator(): AbstractPackDeclaratorContext | undefined {
		return this.tryGetRuleContext(0, AbstractPackDeclaratorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_abstractDeclarator; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterAbstractDeclarator) {
			listener.enterAbstractDeclarator(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitAbstractDeclarator) {
			listener.exitAbstractDeclarator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitAbstractDeclarator) {
			return visitor.visitAbstractDeclarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PointerAbstractDeclaratorContext extends ParserRuleContext {
	public noPointerAbstractDeclarator(): NoPointerAbstractDeclaratorContext | undefined {
		return this.tryGetRuleContext(0, NoPointerAbstractDeclaratorContext);
	}
	public pointerOperator(): PointerOperatorContext[];
	public pointerOperator(i: number): PointerOperatorContext;
	public pointerOperator(i?: number): PointerOperatorContext | PointerOperatorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PointerOperatorContext);
		} else {
			return this.getRuleContext(i, PointerOperatorContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_pointerAbstractDeclarator; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterPointerAbstractDeclarator) {
			listener.enterPointerAbstractDeclarator(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitPointerAbstractDeclarator) {
			listener.exitPointerAbstractDeclarator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitPointerAbstractDeclarator) {
			return visitor.visitPointerAbstractDeclarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NoPointerAbstractDeclaratorContext extends ParserRuleContext {
	public noPointerAbstractDeclarator(): NoPointerAbstractDeclaratorContext[];
	public noPointerAbstractDeclarator(i: number): NoPointerAbstractDeclaratorContext;
	public noPointerAbstractDeclarator(i?: number): NoPointerAbstractDeclaratorContext | NoPointerAbstractDeclaratorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NoPointerAbstractDeclaratorContext);
		} else {
			return this.getRuleContext(i, NoPointerAbstractDeclaratorContext);
		}
	}
	public parametersAndQualifiers(): ParametersAndQualifiersContext | undefined {
		return this.tryGetRuleContext(0, ParametersAndQualifiersContext);
	}
	public LeftBracket(): TerminalNode | undefined { return this.tryGetToken(CPPParser.LeftBracket, 0); }
	public RightBracket(): TerminalNode | undefined { return this.tryGetToken(CPPParser.RightBracket, 0); }
	public constantExpression(): ConstantExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConstantExpressionContext);
	}
	public attributeSpecifierSeq(): AttributeSpecifierSeqContext | undefined {
		return this.tryGetRuleContext(0, AttributeSpecifierSeqContext);
	}
	public LeftParen(): TerminalNode | undefined { return this.tryGetToken(CPPParser.LeftParen, 0); }
	public pointerAbstractDeclarator(): PointerAbstractDeclaratorContext | undefined {
		return this.tryGetRuleContext(0, PointerAbstractDeclaratorContext);
	}
	public RightParen(): TerminalNode | undefined { return this.tryGetToken(CPPParser.RightParen, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_noPointerAbstractDeclarator; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterNoPointerAbstractDeclarator) {
			listener.enterNoPointerAbstractDeclarator(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitNoPointerAbstractDeclarator) {
			listener.exitNoPointerAbstractDeclarator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitNoPointerAbstractDeclarator) {
			return visitor.visitNoPointerAbstractDeclarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AbstractPackDeclaratorContext extends ParserRuleContext {
	public noPointerAbstractPackDeclarator(): NoPointerAbstractPackDeclaratorContext {
		return this.getRuleContext(0, NoPointerAbstractPackDeclaratorContext);
	}
	public pointerOperator(): PointerOperatorContext[];
	public pointerOperator(i: number): PointerOperatorContext;
	public pointerOperator(i?: number): PointerOperatorContext | PointerOperatorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PointerOperatorContext);
		} else {
			return this.getRuleContext(i, PointerOperatorContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_abstractPackDeclarator; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterAbstractPackDeclarator) {
			listener.enterAbstractPackDeclarator(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitAbstractPackDeclarator) {
			listener.exitAbstractPackDeclarator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitAbstractPackDeclarator) {
			return visitor.visitAbstractPackDeclarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NoPointerAbstractPackDeclaratorContext extends ParserRuleContext {
	public noPointerAbstractPackDeclarator(): NoPointerAbstractPackDeclaratorContext | undefined {
		return this.tryGetRuleContext(0, NoPointerAbstractPackDeclaratorContext);
	}
	public parametersAndQualifiers(): ParametersAndQualifiersContext | undefined {
		return this.tryGetRuleContext(0, ParametersAndQualifiersContext);
	}
	public LeftBracket(): TerminalNode | undefined { return this.tryGetToken(CPPParser.LeftBracket, 0); }
	public RightBracket(): TerminalNode | undefined { return this.tryGetToken(CPPParser.RightBracket, 0); }
	public constantExpression(): ConstantExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConstantExpressionContext);
	}
	public attributeSpecifierSeq(): AttributeSpecifierSeqContext | undefined {
		return this.tryGetRuleContext(0, AttributeSpecifierSeqContext);
	}
	public Ellipsis(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Ellipsis, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_noPointerAbstractPackDeclarator; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterNoPointerAbstractPackDeclarator) {
			listener.enterNoPointerAbstractPackDeclarator(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitNoPointerAbstractPackDeclarator) {
			listener.exitNoPointerAbstractPackDeclarator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitNoPointerAbstractPackDeclarator) {
			return visitor.visitNoPointerAbstractPackDeclarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterDeclarationClauseContext extends ParserRuleContext {
	public parameterDeclarationList(): ParameterDeclarationListContext {
		return this.getRuleContext(0, ParameterDeclarationListContext);
	}
	public Ellipsis(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Ellipsis, 0); }
	public Comma(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Comma, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_parameterDeclarationClause; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterParameterDeclarationClause) {
			listener.enterParameterDeclarationClause(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitParameterDeclarationClause) {
			listener.exitParameterDeclarationClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitParameterDeclarationClause) {
			return visitor.visitParameterDeclarationClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterDeclarationListContext extends ParserRuleContext {
	public parameterDeclaration(): ParameterDeclarationContext[];
	public parameterDeclaration(i: number): ParameterDeclarationContext;
	public parameterDeclaration(i?: number): ParameterDeclarationContext | ParameterDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterDeclarationContext);
		} else {
			return this.getRuleContext(i, ParameterDeclarationContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPPParser.Comma);
		} else {
			return this.getToken(CPPParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_parameterDeclarationList; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterParameterDeclarationList) {
			listener.enterParameterDeclarationList(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitParameterDeclarationList) {
			listener.exitParameterDeclarationList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitParameterDeclarationList) {
			return visitor.visitParameterDeclarationList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterDeclarationContext extends ParserRuleContext {
	public declSpecifierSeq(): DeclSpecifierSeqContext {
		return this.getRuleContext(0, DeclSpecifierSeqContext);
	}
	public attributeSpecifierSeq(): AttributeSpecifierSeqContext | undefined {
		return this.tryGetRuleContext(0, AttributeSpecifierSeqContext);
	}
	public declarator(): DeclaratorContext | undefined {
		return this.tryGetRuleContext(0, DeclaratorContext);
	}
	public Assign(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Assign, 0); }
	public initializerClause(): InitializerClauseContext | undefined {
		return this.tryGetRuleContext(0, InitializerClauseContext);
	}
	public abstractDeclarator(): AbstractDeclaratorContext | undefined {
		return this.tryGetRuleContext(0, AbstractDeclaratorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_parameterDeclaration; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterParameterDeclaration) {
			listener.enterParameterDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitParameterDeclaration) {
			listener.exitParameterDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitParameterDeclaration) {
			return visitor.visitParameterDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionDefinitionContext extends ParserRuleContext {
	public declarator(): DeclaratorContext {
		return this.getRuleContext(0, DeclaratorContext);
	}
	public functionBody(): FunctionBodyContext {
		return this.getRuleContext(0, FunctionBodyContext);
	}
	public attributeSpecifierSeq(): AttributeSpecifierSeqContext | undefined {
		return this.tryGetRuleContext(0, AttributeSpecifierSeqContext);
	}
	public declSpecifierSeq(): DeclSpecifierSeqContext | undefined {
		return this.tryGetRuleContext(0, DeclSpecifierSeqContext);
	}
	public virtualSpecifierSeq(): VirtualSpecifierSeqContext | undefined {
		return this.tryGetRuleContext(0, VirtualSpecifierSeqContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_functionDefinition; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterFunctionDefinition) {
			listener.enterFunctionDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitFunctionDefinition) {
			listener.exitFunctionDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitFunctionDefinition) {
			return visitor.visitFunctionDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionBodyContext extends ParserRuleContext {
	public compoundStatement(): CompoundStatementContext | undefined {
		return this.tryGetRuleContext(0, CompoundStatementContext);
	}
	public constructorInitializer(): ConstructorInitializerContext | undefined {
		return this.tryGetRuleContext(0, ConstructorInitializerContext);
	}
	public functionTryBlock(): FunctionTryBlockContext | undefined {
		return this.tryGetRuleContext(0, FunctionTryBlockContext);
	}
	public Assign(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Assign, 0); }
	public Semi(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Semi, 0); }
	public Default(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Default, 0); }
	public Delete(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Delete, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_functionBody; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterFunctionBody) {
			listener.enterFunctionBody(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitFunctionBody) {
			listener.exitFunctionBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitFunctionBody) {
			return visitor.visitFunctionBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InitializerContext extends ParserRuleContext {
	public braceOrEqualInitializer(): BraceOrEqualInitializerContext | undefined {
		return this.tryGetRuleContext(0, BraceOrEqualInitializerContext);
	}
	public LeftParen(): TerminalNode | undefined { return this.tryGetToken(CPPParser.LeftParen, 0); }
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	public RightParen(): TerminalNode | undefined { return this.tryGetToken(CPPParser.RightParen, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_initializer; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterInitializer) {
			listener.enterInitializer(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitInitializer) {
			listener.exitInitializer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitInitializer) {
			return visitor.visitInitializer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BraceOrEqualInitializerContext extends ParserRuleContext {
	public Assign(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Assign, 0); }
	public initializerClause(): InitializerClauseContext | undefined {
		return this.tryGetRuleContext(0, InitializerClauseContext);
	}
	public bracedInitList(): BracedInitListContext | undefined {
		return this.tryGetRuleContext(0, BracedInitListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_braceOrEqualInitializer; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterBraceOrEqualInitializer) {
			listener.enterBraceOrEqualInitializer(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitBraceOrEqualInitializer) {
			listener.exitBraceOrEqualInitializer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitBraceOrEqualInitializer) {
			return visitor.visitBraceOrEqualInitializer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InitializerClauseContext extends ParserRuleContext {
	public assignmentExpression(): AssignmentExpressionContext | undefined {
		return this.tryGetRuleContext(0, AssignmentExpressionContext);
	}
	public bracedInitList(): BracedInitListContext | undefined {
		return this.tryGetRuleContext(0, BracedInitListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_initializerClause; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterInitializerClause) {
			listener.enterInitializerClause(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitInitializerClause) {
			listener.exitInitializerClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitInitializerClause) {
			return visitor.visitInitializerClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InitializerListContext extends ParserRuleContext {
	public initializerClause(): InitializerClauseContext[];
	public initializerClause(i: number): InitializerClauseContext;
	public initializerClause(i?: number): InitializerClauseContext | InitializerClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InitializerClauseContext);
		} else {
			return this.getRuleContext(i, InitializerClauseContext);
		}
	}
	public Ellipsis(): TerminalNode[];
	public Ellipsis(i: number): TerminalNode;
	public Ellipsis(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPPParser.Ellipsis);
		} else {
			return this.getToken(CPPParser.Ellipsis, i);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPPParser.Comma);
		} else {
			return this.getToken(CPPParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_initializerList; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterInitializerList) {
			listener.enterInitializerList(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitInitializerList) {
			listener.exitInitializerList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitInitializerList) {
			return visitor.visitInitializerList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BracedInitListContext extends ParserRuleContext {
	public LeftBrace(): TerminalNode { return this.getToken(CPPParser.LeftBrace, 0); }
	public RightBrace(): TerminalNode { return this.getToken(CPPParser.RightBrace, 0); }
	public initializerList(): InitializerListContext | undefined {
		return this.tryGetRuleContext(0, InitializerListContext);
	}
	public Comma(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Comma, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_bracedInitList; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterBracedInitList) {
			listener.enterBracedInitList(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitBracedInitList) {
			listener.exitBracedInitList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitBracedInitList) {
			return visitor.visitBracedInitList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassNameContext extends ParserRuleContext {
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Identifier, 0); }
	public simpleTemplateId(): SimpleTemplateIdContext | undefined {
		return this.tryGetRuleContext(0, SimpleTemplateIdContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_className; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterClassName) {
			listener.enterClassName(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitClassName) {
			listener.exitClassName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitClassName) {
			return visitor.visitClassName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassSpecifierContext extends ParserRuleContext {
	public classHead(): ClassHeadContext {
		return this.getRuleContext(0, ClassHeadContext);
	}
	public LeftBrace(): TerminalNode { return this.getToken(CPPParser.LeftBrace, 0); }
	public RightBrace(): TerminalNode { return this.getToken(CPPParser.RightBrace, 0); }
	public memberSpecification(): MemberSpecificationContext | undefined {
		return this.tryGetRuleContext(0, MemberSpecificationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_classSpecifier; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterClassSpecifier) {
			listener.enterClassSpecifier(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitClassSpecifier) {
			listener.exitClassSpecifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitClassSpecifier) {
			return visitor.visitClassSpecifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassHeadContext extends ParserRuleContext {
	public classKey(): ClassKeyContext | undefined {
		return this.tryGetRuleContext(0, ClassKeyContext);
	}
	public attributeSpecifierSeq(): AttributeSpecifierSeqContext | undefined {
		return this.tryGetRuleContext(0, AttributeSpecifierSeqContext);
	}
	public classHeadName(): ClassHeadNameContext | undefined {
		return this.tryGetRuleContext(0, ClassHeadNameContext);
	}
	public baseClause(): BaseClauseContext | undefined {
		return this.tryGetRuleContext(0, BaseClauseContext);
	}
	public classVirtSpecifier(): ClassVirtSpecifierContext | undefined {
		return this.tryGetRuleContext(0, ClassVirtSpecifierContext);
	}
	public Union(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Union, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_classHead; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterClassHead) {
			listener.enterClassHead(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitClassHead) {
			listener.exitClassHead(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitClassHead) {
			return visitor.visitClassHead(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassHeadNameContext extends ParserRuleContext {
	public className(): ClassNameContext {
		return this.getRuleContext(0, ClassNameContext);
	}
	public nestedNameSpecifier(): NestedNameSpecifierContext | undefined {
		return this.tryGetRuleContext(0, NestedNameSpecifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_classHeadName; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterClassHeadName) {
			listener.enterClassHeadName(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitClassHeadName) {
			listener.exitClassHeadName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitClassHeadName) {
			return visitor.visitClassHeadName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassVirtSpecifierContext extends ParserRuleContext {
	public Final(): TerminalNode { return this.getToken(CPPParser.Final, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_classVirtSpecifier; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterClassVirtSpecifier) {
			listener.enterClassVirtSpecifier(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitClassVirtSpecifier) {
			listener.exitClassVirtSpecifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitClassVirtSpecifier) {
			return visitor.visitClassVirtSpecifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassKeyContext extends ParserRuleContext {
	public Class(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Class, 0); }
	public Struct(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Struct, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_classKey; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterClassKey) {
			listener.enterClassKey(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitClassKey) {
			listener.exitClassKey(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitClassKey) {
			return visitor.visitClassKey(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MemberSpecificationContext extends ParserRuleContext {
	public memberdeclaration(): MemberdeclarationContext[];
	public memberdeclaration(i: number): MemberdeclarationContext;
	public memberdeclaration(i?: number): MemberdeclarationContext | MemberdeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MemberdeclarationContext);
		} else {
			return this.getRuleContext(i, MemberdeclarationContext);
		}
	}
	public accessSpecifier(): AccessSpecifierContext[];
	public accessSpecifier(i: number): AccessSpecifierContext;
	public accessSpecifier(i?: number): AccessSpecifierContext | AccessSpecifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AccessSpecifierContext);
		} else {
			return this.getRuleContext(i, AccessSpecifierContext);
		}
	}
	public Colon(): TerminalNode[];
	public Colon(i: number): TerminalNode;
	public Colon(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPPParser.Colon);
		} else {
			return this.getToken(CPPParser.Colon, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_memberSpecification; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterMemberSpecification) {
			listener.enterMemberSpecification(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitMemberSpecification) {
			listener.exitMemberSpecification(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitMemberSpecification) {
			return visitor.visitMemberSpecification(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MemberdeclarationContext extends ParserRuleContext {
	public Semi(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Semi, 0); }
	public attributeSpecifierSeq(): AttributeSpecifierSeqContext | undefined {
		return this.tryGetRuleContext(0, AttributeSpecifierSeqContext);
	}
	public declSpecifierSeq(): DeclSpecifierSeqContext | undefined {
		return this.tryGetRuleContext(0, DeclSpecifierSeqContext);
	}
	public memberDeclaratorList(): MemberDeclaratorListContext | undefined {
		return this.tryGetRuleContext(0, MemberDeclaratorListContext);
	}
	public functionDefinition(): FunctionDefinitionContext | undefined {
		return this.tryGetRuleContext(0, FunctionDefinitionContext);
	}
	public usingDeclaration(): UsingDeclarationContext | undefined {
		return this.tryGetRuleContext(0, UsingDeclarationContext);
	}
	public staticAssertDeclaration(): StaticAssertDeclarationContext | undefined {
		return this.tryGetRuleContext(0, StaticAssertDeclarationContext);
	}
	public templateDeclaration(): TemplateDeclarationContext | undefined {
		return this.tryGetRuleContext(0, TemplateDeclarationContext);
	}
	public aliasDeclaration(): AliasDeclarationContext | undefined {
		return this.tryGetRuleContext(0, AliasDeclarationContext);
	}
	public emptyDeclaration(): EmptyDeclarationContext | undefined {
		return this.tryGetRuleContext(0, EmptyDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_memberdeclaration; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterMemberdeclaration) {
			listener.enterMemberdeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitMemberdeclaration) {
			listener.exitMemberdeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitMemberdeclaration) {
			return visitor.visitMemberdeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MemberDeclaratorListContext extends ParserRuleContext {
	public memberDeclarator(): MemberDeclaratorContext[];
	public memberDeclarator(i: number): MemberDeclaratorContext;
	public memberDeclarator(i?: number): MemberDeclaratorContext | MemberDeclaratorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MemberDeclaratorContext);
		} else {
			return this.getRuleContext(i, MemberDeclaratorContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPPParser.Comma);
		} else {
			return this.getToken(CPPParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_memberDeclaratorList; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterMemberDeclaratorList) {
			listener.enterMemberDeclaratorList(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitMemberDeclaratorList) {
			listener.exitMemberDeclaratorList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitMemberDeclaratorList) {
			return visitor.visitMemberDeclaratorList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MemberDeclaratorContext extends ParserRuleContext {
	public declarator(): DeclaratorContext | undefined {
		return this.tryGetRuleContext(0, DeclaratorContext);
	}
	public virtualSpecifierSeq(): VirtualSpecifierSeqContext | undefined {
		return this.tryGetRuleContext(0, VirtualSpecifierSeqContext);
	}
	public pureSpecifier(): PureSpecifierContext | undefined {
		return this.tryGetRuleContext(0, PureSpecifierContext);
	}
	public braceOrEqualInitializer(): BraceOrEqualInitializerContext | undefined {
		return this.tryGetRuleContext(0, BraceOrEqualInitializerContext);
	}
	public Colon(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Colon, 0); }
	public constantExpression(): ConstantExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConstantExpressionContext);
	}
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Identifier, 0); }
	public attributeSpecifierSeq(): AttributeSpecifierSeqContext | undefined {
		return this.tryGetRuleContext(0, AttributeSpecifierSeqContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_memberDeclarator; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterMemberDeclarator) {
			listener.enterMemberDeclarator(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitMemberDeclarator) {
			listener.exitMemberDeclarator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitMemberDeclarator) {
			return visitor.visitMemberDeclarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VirtualSpecifierSeqContext extends ParserRuleContext {
	public virtualSpecifier(): VirtualSpecifierContext[];
	public virtualSpecifier(i: number): VirtualSpecifierContext;
	public virtualSpecifier(i?: number): VirtualSpecifierContext | VirtualSpecifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VirtualSpecifierContext);
		} else {
			return this.getRuleContext(i, VirtualSpecifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_virtualSpecifierSeq; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterVirtualSpecifierSeq) {
			listener.enterVirtualSpecifierSeq(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitVirtualSpecifierSeq) {
			listener.exitVirtualSpecifierSeq(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitVirtualSpecifierSeq) {
			return visitor.visitVirtualSpecifierSeq(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VirtualSpecifierContext extends ParserRuleContext {
	public Override(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Override, 0); }
	public Final(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Final, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_virtualSpecifier; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterVirtualSpecifier) {
			listener.enterVirtualSpecifier(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitVirtualSpecifier) {
			listener.exitVirtualSpecifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitVirtualSpecifier) {
			return visitor.visitVirtualSpecifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PureSpecifierContext extends ParserRuleContext {
	public _val!: Token;
	public Assign(): TerminalNode { return this.getToken(CPPParser.Assign, 0); }
	public OctalLiteral(): TerminalNode { return this.getToken(CPPParser.OctalLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_pureSpecifier; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterPureSpecifier) {
			listener.enterPureSpecifier(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitPureSpecifier) {
			listener.exitPureSpecifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitPureSpecifier) {
			return visitor.visitPureSpecifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BaseClauseContext extends ParserRuleContext {
	public Colon(): TerminalNode { return this.getToken(CPPParser.Colon, 0); }
	public baseSpecifierList(): BaseSpecifierListContext {
		return this.getRuleContext(0, BaseSpecifierListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_baseClause; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterBaseClause) {
			listener.enterBaseClause(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitBaseClause) {
			listener.exitBaseClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitBaseClause) {
			return visitor.visitBaseClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BaseSpecifierListContext extends ParserRuleContext {
	public baseSpecifier(): BaseSpecifierContext[];
	public baseSpecifier(i: number): BaseSpecifierContext;
	public baseSpecifier(i?: number): BaseSpecifierContext | BaseSpecifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BaseSpecifierContext);
		} else {
			return this.getRuleContext(i, BaseSpecifierContext);
		}
	}
	public Ellipsis(): TerminalNode[];
	public Ellipsis(i: number): TerminalNode;
	public Ellipsis(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPPParser.Ellipsis);
		} else {
			return this.getToken(CPPParser.Ellipsis, i);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPPParser.Comma);
		} else {
			return this.getToken(CPPParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_baseSpecifierList; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterBaseSpecifierList) {
			listener.enterBaseSpecifierList(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitBaseSpecifierList) {
			listener.exitBaseSpecifierList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitBaseSpecifierList) {
			return visitor.visitBaseSpecifierList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BaseSpecifierContext extends ParserRuleContext {
	public baseTypeSpecifier(): BaseTypeSpecifierContext | undefined {
		return this.tryGetRuleContext(0, BaseTypeSpecifierContext);
	}
	public Virtual(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Virtual, 0); }
	public accessSpecifier(): AccessSpecifierContext | undefined {
		return this.tryGetRuleContext(0, AccessSpecifierContext);
	}
	public attributeSpecifierSeq(): AttributeSpecifierSeqContext | undefined {
		return this.tryGetRuleContext(0, AttributeSpecifierSeqContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_baseSpecifier; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterBaseSpecifier) {
			listener.enterBaseSpecifier(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitBaseSpecifier) {
			listener.exitBaseSpecifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitBaseSpecifier) {
			return visitor.visitBaseSpecifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassOrDeclTypeContext extends ParserRuleContext {
	public className(): ClassNameContext | undefined {
		return this.tryGetRuleContext(0, ClassNameContext);
	}
	public nestedNameSpecifier(): NestedNameSpecifierContext | undefined {
		return this.tryGetRuleContext(0, NestedNameSpecifierContext);
	}
	public decltypeSpecifier(): DecltypeSpecifierContext | undefined {
		return this.tryGetRuleContext(0, DecltypeSpecifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_classOrDeclType; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterClassOrDeclType) {
			listener.enterClassOrDeclType(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitClassOrDeclType) {
			listener.exitClassOrDeclType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitClassOrDeclType) {
			return visitor.visitClassOrDeclType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BaseTypeSpecifierContext extends ParserRuleContext {
	public classOrDeclType(): ClassOrDeclTypeContext {
		return this.getRuleContext(0, ClassOrDeclTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_baseTypeSpecifier; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterBaseTypeSpecifier) {
			listener.enterBaseTypeSpecifier(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitBaseTypeSpecifier) {
			listener.exitBaseTypeSpecifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitBaseTypeSpecifier) {
			return visitor.visitBaseTypeSpecifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AccessSpecifierContext extends ParserRuleContext {
	public Private(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Private, 0); }
	public Protected(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Protected, 0); }
	public Public(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Public, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_accessSpecifier; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterAccessSpecifier) {
			listener.enterAccessSpecifier(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitAccessSpecifier) {
			listener.exitAccessSpecifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitAccessSpecifier) {
			return visitor.visitAccessSpecifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConversionFunctionIdContext extends ParserRuleContext {
	public Operator(): TerminalNode { return this.getToken(CPPParser.Operator, 0); }
	public conversionTypeId(): ConversionTypeIdContext {
		return this.getRuleContext(0, ConversionTypeIdContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_conversionFunctionId; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterConversionFunctionId) {
			listener.enterConversionFunctionId(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitConversionFunctionId) {
			listener.exitConversionFunctionId(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitConversionFunctionId) {
			return visitor.visitConversionFunctionId(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConversionTypeIdContext extends ParserRuleContext {
	public typeSpecifierSeq(): TypeSpecifierSeqContext {
		return this.getRuleContext(0, TypeSpecifierSeqContext);
	}
	public conversionDeclarator(): ConversionDeclaratorContext | undefined {
		return this.tryGetRuleContext(0, ConversionDeclaratorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_conversionTypeId; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterConversionTypeId) {
			listener.enterConversionTypeId(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitConversionTypeId) {
			listener.exitConversionTypeId(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitConversionTypeId) {
			return visitor.visitConversionTypeId(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConversionDeclaratorContext extends ParserRuleContext {
	public pointerOperator(): PointerOperatorContext {
		return this.getRuleContext(0, PointerOperatorContext);
	}
	public conversionDeclarator(): ConversionDeclaratorContext | undefined {
		return this.tryGetRuleContext(0, ConversionDeclaratorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_conversionDeclarator; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterConversionDeclarator) {
			listener.enterConversionDeclarator(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitConversionDeclarator) {
			listener.exitConversionDeclarator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitConversionDeclarator) {
			return visitor.visitConversionDeclarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstructorInitializerContext extends ParserRuleContext {
	public Colon(): TerminalNode { return this.getToken(CPPParser.Colon, 0); }
	public memInitializerList(): MemInitializerListContext {
		return this.getRuleContext(0, MemInitializerListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_constructorInitializer; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterConstructorInitializer) {
			listener.enterConstructorInitializer(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitConstructorInitializer) {
			listener.exitConstructorInitializer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitConstructorInitializer) {
			return visitor.visitConstructorInitializer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MemInitializerListContext extends ParserRuleContext {
	public memInitializer(): MemInitializerContext[];
	public memInitializer(i: number): MemInitializerContext;
	public memInitializer(i?: number): MemInitializerContext | MemInitializerContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MemInitializerContext);
		} else {
			return this.getRuleContext(i, MemInitializerContext);
		}
	}
	public Ellipsis(): TerminalNode[];
	public Ellipsis(i: number): TerminalNode;
	public Ellipsis(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPPParser.Ellipsis);
		} else {
			return this.getToken(CPPParser.Ellipsis, i);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPPParser.Comma);
		} else {
			return this.getToken(CPPParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_memInitializerList; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterMemInitializerList) {
			listener.enterMemInitializerList(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitMemInitializerList) {
			listener.exitMemInitializerList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitMemInitializerList) {
			return visitor.visitMemInitializerList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MemInitializerContext extends ParserRuleContext {
	public meminitializerid(): MeminitializeridContext {
		return this.getRuleContext(0, MeminitializeridContext);
	}
	public LeftParen(): TerminalNode | undefined { return this.tryGetToken(CPPParser.LeftParen, 0); }
	public RightParen(): TerminalNode | undefined { return this.tryGetToken(CPPParser.RightParen, 0); }
	public bracedInitList(): BracedInitListContext | undefined {
		return this.tryGetRuleContext(0, BracedInitListContext);
	}
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_memInitializer; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterMemInitializer) {
			listener.enterMemInitializer(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitMemInitializer) {
			listener.exitMemInitializer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitMemInitializer) {
			return visitor.visitMemInitializer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MeminitializeridContext extends ParserRuleContext {
	public classOrDeclType(): ClassOrDeclTypeContext | undefined {
		return this.tryGetRuleContext(0, ClassOrDeclTypeContext);
	}
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_meminitializerid; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterMeminitializerid) {
			listener.enterMeminitializerid(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitMeminitializerid) {
			listener.exitMeminitializerid(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitMeminitializerid) {
			return visitor.visitMeminitializerid(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OperatorFunctionIdContext extends ParserRuleContext {
	public Operator(): TerminalNode { return this.getToken(CPPParser.Operator, 0); }
	public theOperator(): TheOperatorContext {
		return this.getRuleContext(0, TheOperatorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_operatorFunctionId; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterOperatorFunctionId) {
			listener.enterOperatorFunctionId(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitOperatorFunctionId) {
			listener.exitOperatorFunctionId(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitOperatorFunctionId) {
			return visitor.visitOperatorFunctionId(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralOperatorIdContext extends ParserRuleContext {
	public Operator(): TerminalNode { return this.getToken(CPPParser.Operator, 0); }
	public StringLiteral(): TerminalNode | undefined { return this.tryGetToken(CPPParser.StringLiteral, 0); }
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Identifier, 0); }
	public UserDefinedStringLiteral(): TerminalNode | undefined { return this.tryGetToken(CPPParser.UserDefinedStringLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_literalOperatorId; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterLiteralOperatorId) {
			listener.enterLiteralOperatorId(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitLiteralOperatorId) {
			listener.exitLiteralOperatorId(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitLiteralOperatorId) {
			return visitor.visitLiteralOperatorId(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TemplateDeclarationContext extends ParserRuleContext {
	public Template(): TerminalNode { return this.getToken(CPPParser.Template, 0); }
	public Less(): TerminalNode { return this.getToken(CPPParser.Less, 0); }
	public templateparameterList(): TemplateparameterListContext {
		return this.getRuleContext(0, TemplateparameterListContext);
	}
	public Greater(): TerminalNode { return this.getToken(CPPParser.Greater, 0); }
	public declaration(): DeclarationContext {
		return this.getRuleContext(0, DeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_templateDeclaration; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterTemplateDeclaration) {
			listener.enterTemplateDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitTemplateDeclaration) {
			listener.exitTemplateDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitTemplateDeclaration) {
			return visitor.visitTemplateDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TemplateparameterListContext extends ParserRuleContext {
	public templateParameter(): TemplateParameterContext[];
	public templateParameter(i: number): TemplateParameterContext;
	public templateParameter(i?: number): TemplateParameterContext | TemplateParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TemplateParameterContext);
		} else {
			return this.getRuleContext(i, TemplateParameterContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPPParser.Comma);
		} else {
			return this.getToken(CPPParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_templateparameterList; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterTemplateparameterList) {
			listener.enterTemplateparameterList(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitTemplateparameterList) {
			listener.exitTemplateparameterList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitTemplateparameterList) {
			return visitor.visitTemplateparameterList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TemplateParameterContext extends ParserRuleContext {
	public typeParameter(): TypeParameterContext | undefined {
		return this.tryGetRuleContext(0, TypeParameterContext);
	}
	public parameterDeclaration(): ParameterDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ParameterDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_templateParameter; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterTemplateParameter) {
			listener.enterTemplateParameter(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitTemplateParameter) {
			listener.exitTemplateParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitTemplateParameter) {
			return visitor.visitTemplateParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeParameterContext extends ParserRuleContext {
	public Class(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Class, 0); }
	public Typename_(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Typename_, 0); }
	public Assign(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Assign, 0); }
	public theTypeId(): TheTypeIdContext | undefined {
		return this.tryGetRuleContext(0, TheTypeIdContext);
	}
	public Template(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Template, 0); }
	public Less(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Less, 0); }
	public templateparameterList(): TemplateparameterListContext | undefined {
		return this.tryGetRuleContext(0, TemplateparameterListContext);
	}
	public Greater(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Greater, 0); }
	public Ellipsis(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Ellipsis, 0); }
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_typeParameter; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterTypeParameter) {
			listener.enterTypeParameter(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitTypeParameter) {
			listener.exitTypeParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitTypeParameter) {
			return visitor.visitTypeParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SimpleTemplateIdContext extends ParserRuleContext {
	public templateName(): TemplateNameContext {
		return this.getRuleContext(0, TemplateNameContext);
	}
	public Less(): TerminalNode { return this.getToken(CPPParser.Less, 0); }
	public Greater(): TerminalNode { return this.getToken(CPPParser.Greater, 0); }
	public templateArgumentList(): TemplateArgumentListContext | undefined {
		return this.tryGetRuleContext(0, TemplateArgumentListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_simpleTemplateId; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterSimpleTemplateId) {
			listener.enterSimpleTemplateId(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitSimpleTemplateId) {
			listener.exitSimpleTemplateId(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitSimpleTemplateId) {
			return visitor.visitSimpleTemplateId(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TemplateIdContext extends ParserRuleContext {
	public simpleTemplateId(): SimpleTemplateIdContext | undefined {
		return this.tryGetRuleContext(0, SimpleTemplateIdContext);
	}
	public Less(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Less, 0); }
	public Greater(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Greater, 0); }
	public operatorFunctionId(): OperatorFunctionIdContext | undefined {
		return this.tryGetRuleContext(0, OperatorFunctionIdContext);
	}
	public literalOperatorId(): LiteralOperatorIdContext | undefined {
		return this.tryGetRuleContext(0, LiteralOperatorIdContext);
	}
	public templateArgumentList(): TemplateArgumentListContext | undefined {
		return this.tryGetRuleContext(0, TemplateArgumentListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_templateId; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterTemplateId) {
			listener.enterTemplateId(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitTemplateId) {
			listener.exitTemplateId(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitTemplateId) {
			return visitor.visitTemplateId(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TemplateNameContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(CPPParser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_templateName; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterTemplateName) {
			listener.enterTemplateName(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitTemplateName) {
			listener.exitTemplateName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitTemplateName) {
			return visitor.visitTemplateName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TemplateArgumentListContext extends ParserRuleContext {
	public templateArgument(): TemplateArgumentContext[];
	public templateArgument(i: number): TemplateArgumentContext;
	public templateArgument(i?: number): TemplateArgumentContext | TemplateArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TemplateArgumentContext);
		} else {
			return this.getRuleContext(i, TemplateArgumentContext);
		}
	}
	public Ellipsis(): TerminalNode[];
	public Ellipsis(i: number): TerminalNode;
	public Ellipsis(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPPParser.Ellipsis);
		} else {
			return this.getToken(CPPParser.Ellipsis, i);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPPParser.Comma);
		} else {
			return this.getToken(CPPParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_templateArgumentList; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterTemplateArgumentList) {
			listener.enterTemplateArgumentList(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitTemplateArgumentList) {
			listener.exitTemplateArgumentList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitTemplateArgumentList) {
			return visitor.visitTemplateArgumentList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TemplateArgumentContext extends ParserRuleContext {
	public theTypeId(): TheTypeIdContext | undefined {
		return this.tryGetRuleContext(0, TheTypeIdContext);
	}
	public constantExpression(): ConstantExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConstantExpressionContext);
	}
	public idExpression(): IdExpressionContext | undefined {
		return this.tryGetRuleContext(0, IdExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_templateArgument; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterTemplateArgument) {
			listener.enterTemplateArgument(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitTemplateArgument) {
			listener.exitTemplateArgument(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitTemplateArgument) {
			return visitor.visitTemplateArgument(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeNameSpecifierContext extends ParserRuleContext {
	public Typename_(): TerminalNode { return this.getToken(CPPParser.Typename_, 0); }
	public nestedNameSpecifier(): NestedNameSpecifierContext {
		return this.getRuleContext(0, NestedNameSpecifierContext);
	}
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Identifier, 0); }
	public simpleTemplateId(): SimpleTemplateIdContext | undefined {
		return this.tryGetRuleContext(0, SimpleTemplateIdContext);
	}
	public Template(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Template, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_typeNameSpecifier; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterTypeNameSpecifier) {
			listener.enterTypeNameSpecifier(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitTypeNameSpecifier) {
			listener.exitTypeNameSpecifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitTypeNameSpecifier) {
			return visitor.visitTypeNameSpecifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExplicitInstantiationContext extends ParserRuleContext {
	public Template(): TerminalNode { return this.getToken(CPPParser.Template, 0); }
	public declaration(): DeclarationContext {
		return this.getRuleContext(0, DeclarationContext);
	}
	public Extern(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Extern, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_explicitInstantiation; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterExplicitInstantiation) {
			listener.enterExplicitInstantiation(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitExplicitInstantiation) {
			listener.exitExplicitInstantiation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitExplicitInstantiation) {
			return visitor.visitExplicitInstantiation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExplicitSpecializationContext extends ParserRuleContext {
	public Template(): TerminalNode { return this.getToken(CPPParser.Template, 0); }
	public Less(): TerminalNode { return this.getToken(CPPParser.Less, 0); }
	public Greater(): TerminalNode { return this.getToken(CPPParser.Greater, 0); }
	public declaration(): DeclarationContext {
		return this.getRuleContext(0, DeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_explicitSpecialization; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterExplicitSpecialization) {
			listener.enterExplicitSpecialization(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitExplicitSpecialization) {
			listener.exitExplicitSpecialization(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitExplicitSpecialization) {
			return visitor.visitExplicitSpecialization(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TryBlockContext extends ParserRuleContext {
	public Try(): TerminalNode { return this.getToken(CPPParser.Try, 0); }
	public compoundStatement(): CompoundStatementContext {
		return this.getRuleContext(0, CompoundStatementContext);
	}
	public handlerSeq(): HandlerSeqContext {
		return this.getRuleContext(0, HandlerSeqContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_tryBlock; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterTryBlock) {
			listener.enterTryBlock(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitTryBlock) {
			listener.exitTryBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitTryBlock) {
			return visitor.visitTryBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionTryBlockContext extends ParserRuleContext {
	public Try(): TerminalNode { return this.getToken(CPPParser.Try, 0); }
	public compoundStatement(): CompoundStatementContext {
		return this.getRuleContext(0, CompoundStatementContext);
	}
	public handlerSeq(): HandlerSeqContext {
		return this.getRuleContext(0, HandlerSeqContext);
	}
	public constructorInitializer(): ConstructorInitializerContext | undefined {
		return this.tryGetRuleContext(0, ConstructorInitializerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_functionTryBlock; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterFunctionTryBlock) {
			listener.enterFunctionTryBlock(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitFunctionTryBlock) {
			listener.exitFunctionTryBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitFunctionTryBlock) {
			return visitor.visitFunctionTryBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class HandlerSeqContext extends ParserRuleContext {
	public handler(): HandlerContext[];
	public handler(i: number): HandlerContext;
	public handler(i?: number): HandlerContext | HandlerContext[] {
		if (i === undefined) {
			return this.getRuleContexts(HandlerContext);
		} else {
			return this.getRuleContext(i, HandlerContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_handlerSeq; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterHandlerSeq) {
			listener.enterHandlerSeq(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitHandlerSeq) {
			listener.exitHandlerSeq(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitHandlerSeq) {
			return visitor.visitHandlerSeq(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class HandlerContext extends ParserRuleContext {
	public Catch(): TerminalNode { return this.getToken(CPPParser.Catch, 0); }
	public LeftParen(): TerminalNode { return this.getToken(CPPParser.LeftParen, 0); }
	public exceptionDeclaration(): ExceptionDeclarationContext {
		return this.getRuleContext(0, ExceptionDeclarationContext);
	}
	public RightParen(): TerminalNode { return this.getToken(CPPParser.RightParen, 0); }
	public compoundStatement(): CompoundStatementContext {
		return this.getRuleContext(0, CompoundStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_handler; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterHandler) {
			listener.enterHandler(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitHandler) {
			listener.exitHandler(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitHandler) {
			return visitor.visitHandler(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExceptionDeclarationContext extends ParserRuleContext {
	public typeSpecifierSeq(): TypeSpecifierSeqContext | undefined {
		return this.tryGetRuleContext(0, TypeSpecifierSeqContext);
	}
	public attributeSpecifierSeq(): AttributeSpecifierSeqContext | undefined {
		return this.tryGetRuleContext(0, AttributeSpecifierSeqContext);
	}
	public declarator(): DeclaratorContext | undefined {
		return this.tryGetRuleContext(0, DeclaratorContext);
	}
	public abstractDeclarator(): AbstractDeclaratorContext | undefined {
		return this.tryGetRuleContext(0, AbstractDeclaratorContext);
	}
	public Ellipsis(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Ellipsis, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_exceptionDeclaration; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterExceptionDeclaration) {
			listener.enterExceptionDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitExceptionDeclaration) {
			listener.exitExceptionDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitExceptionDeclaration) {
			return visitor.visitExceptionDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ThrowExpressionContext extends ParserRuleContext {
	public Throw(): TerminalNode { return this.getToken(CPPParser.Throw, 0); }
	public assignmentExpression(): AssignmentExpressionContext | undefined {
		return this.tryGetRuleContext(0, AssignmentExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_throwExpression; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterThrowExpression) {
			listener.enterThrowExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitThrowExpression) {
			listener.exitThrowExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitThrowExpression) {
			return visitor.visitThrowExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExceptionSpecificationContext extends ParserRuleContext {
	public dynamicExceptionSpecification(): DynamicExceptionSpecificationContext | undefined {
		return this.tryGetRuleContext(0, DynamicExceptionSpecificationContext);
	}
	public noeExceptSpecification(): NoeExceptSpecificationContext | undefined {
		return this.tryGetRuleContext(0, NoeExceptSpecificationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_exceptionSpecification; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterExceptionSpecification) {
			listener.enterExceptionSpecification(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitExceptionSpecification) {
			listener.exitExceptionSpecification(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitExceptionSpecification) {
			return visitor.visitExceptionSpecification(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DynamicExceptionSpecificationContext extends ParserRuleContext {
	public Throw(): TerminalNode { return this.getToken(CPPParser.Throw, 0); }
	public LeftParen(): TerminalNode { return this.getToken(CPPParser.LeftParen, 0); }
	public RightParen(): TerminalNode { return this.getToken(CPPParser.RightParen, 0); }
	public typeIdList(): TypeIdListContext | undefined {
		return this.tryGetRuleContext(0, TypeIdListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_dynamicExceptionSpecification; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterDynamicExceptionSpecification) {
			listener.enterDynamicExceptionSpecification(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitDynamicExceptionSpecification) {
			listener.exitDynamicExceptionSpecification(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitDynamicExceptionSpecification) {
			return visitor.visitDynamicExceptionSpecification(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeIdListContext extends ParserRuleContext {
	public theTypeId(): TheTypeIdContext[];
	public theTypeId(i: number): TheTypeIdContext;
	public theTypeId(i?: number): TheTypeIdContext | TheTypeIdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TheTypeIdContext);
		} else {
			return this.getRuleContext(i, TheTypeIdContext);
		}
	}
	public Ellipsis(): TerminalNode[];
	public Ellipsis(i: number): TerminalNode;
	public Ellipsis(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPPParser.Ellipsis);
		} else {
			return this.getToken(CPPParser.Ellipsis, i);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPPParser.Comma);
		} else {
			return this.getToken(CPPParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_typeIdList; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterTypeIdList) {
			listener.enterTypeIdList(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitTypeIdList) {
			listener.exitTypeIdList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitTypeIdList) {
			return visitor.visitTypeIdList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NoeExceptSpecificationContext extends ParserRuleContext {
	public Noexcept(): TerminalNode { return this.getToken(CPPParser.Noexcept, 0); }
	public LeftParen(): TerminalNode | undefined { return this.tryGetToken(CPPParser.LeftParen, 0); }
	public constantExpression(): ConstantExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConstantExpressionContext);
	}
	public RightParen(): TerminalNode | undefined { return this.tryGetToken(CPPParser.RightParen, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_noeExceptSpecification; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterNoeExceptSpecification) {
			listener.enterNoeExceptSpecification(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitNoeExceptSpecification) {
			listener.exitNoeExceptSpecification(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitNoeExceptSpecification) {
			return visitor.visitNoeExceptSpecification(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TheOperatorContext extends ParserRuleContext {
	public New(): TerminalNode | undefined { return this.tryGetToken(CPPParser.New, 0); }
	public LeftBracket(): TerminalNode | undefined { return this.tryGetToken(CPPParser.LeftBracket, 0); }
	public RightBracket(): TerminalNode | undefined { return this.tryGetToken(CPPParser.RightBracket, 0); }
	public Delete(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Delete, 0); }
	public Plus(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Plus, 0); }
	public Minus(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Minus, 0); }
	public Star(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Star, 0); }
	public Div(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Div, 0); }
	public Mod(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Mod, 0); }
	public Caret(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Caret, 0); }
	public And(): TerminalNode | undefined { return this.tryGetToken(CPPParser.And, 0); }
	public Or(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Or, 0); }
	public Tilde(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Tilde, 0); }
	public Not(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Not, 0); }
	public Assign(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Assign, 0); }
	public Greater(): TerminalNode[];
	public Greater(i: number): TerminalNode;
	public Greater(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPPParser.Greater);
		} else {
			return this.getToken(CPPParser.Greater, i);
		}
	}
	public Less(): TerminalNode[];
	public Less(i: number): TerminalNode;
	public Less(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPPParser.Less);
		} else {
			return this.getToken(CPPParser.Less, i);
		}
	}
	public GreaterEqual(): TerminalNode | undefined { return this.tryGetToken(CPPParser.GreaterEqual, 0); }
	public PlusAssign(): TerminalNode | undefined { return this.tryGetToken(CPPParser.PlusAssign, 0); }
	public MinusAssign(): TerminalNode | undefined { return this.tryGetToken(CPPParser.MinusAssign, 0); }
	public StarAssign(): TerminalNode | undefined { return this.tryGetToken(CPPParser.StarAssign, 0); }
	public ModAssign(): TerminalNode | undefined { return this.tryGetToken(CPPParser.ModAssign, 0); }
	public XorAssign(): TerminalNode | undefined { return this.tryGetToken(CPPParser.XorAssign, 0); }
	public AndAssign(): TerminalNode | undefined { return this.tryGetToken(CPPParser.AndAssign, 0); }
	public OrAssign(): TerminalNode | undefined { return this.tryGetToken(CPPParser.OrAssign, 0); }
	public RightShiftAssign(): TerminalNode | undefined { return this.tryGetToken(CPPParser.RightShiftAssign, 0); }
	public LeftShiftAssign(): TerminalNode | undefined { return this.tryGetToken(CPPParser.LeftShiftAssign, 0); }
	public Equal(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Equal, 0); }
	public NotEqual(): TerminalNode | undefined { return this.tryGetToken(CPPParser.NotEqual, 0); }
	public LessEqual(): TerminalNode | undefined { return this.tryGetToken(CPPParser.LessEqual, 0); }
	public AndAnd(): TerminalNode | undefined { return this.tryGetToken(CPPParser.AndAnd, 0); }
	public OrOr(): TerminalNode | undefined { return this.tryGetToken(CPPParser.OrOr, 0); }
	public PlusPlus(): TerminalNode | undefined { return this.tryGetToken(CPPParser.PlusPlus, 0); }
	public MinusMinus(): TerminalNode | undefined { return this.tryGetToken(CPPParser.MinusMinus, 0); }
	public Comma(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Comma, 0); }
	public ArrowStar(): TerminalNode | undefined { return this.tryGetToken(CPPParser.ArrowStar, 0); }
	public Arrow(): TerminalNode | undefined { return this.tryGetToken(CPPParser.Arrow, 0); }
	public LeftParen(): TerminalNode | undefined { return this.tryGetToken(CPPParser.LeftParen, 0); }
	public RightParen(): TerminalNode | undefined { return this.tryGetToken(CPPParser.RightParen, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_theOperator; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterTheOperator) {
			listener.enterTheOperator(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitTheOperator) {
			listener.exitTheOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitTheOperator) {
			return visitor.visitTheOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	public IntegerLiteral(): TerminalNode | undefined { return this.tryGetToken(CPPParser.IntegerLiteral, 0); }
	public CharacterLiteral(): TerminalNode | undefined { return this.tryGetToken(CPPParser.CharacterLiteral, 0); }
	public FloatingLiteral(): TerminalNode | undefined { return this.tryGetToken(CPPParser.FloatingLiteral, 0); }
	public StringLiteral(): TerminalNode | undefined { return this.tryGetToken(CPPParser.StringLiteral, 0); }
	public BooleanLiteral(): TerminalNode | undefined { return this.tryGetToken(CPPParser.BooleanLiteral, 0); }
	public PointerLiteral(): TerminalNode | undefined { return this.tryGetToken(CPPParser.PointerLiteral, 0); }
	public UserDefinedLiteral(): TerminalNode | undefined { return this.tryGetToken(CPPParser.UserDefinedLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPPParser.RULE_literal; }
	// @Override
	public enterRule(listener: CPPParserListener): void {
		if (listener.enterLiteral) {
			listener.enterLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: CPPParserListener): void {
		if (listener.exitLiteral) {
			listener.exitLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CPPParserVisitor<Result>): Result {
		if (visitor.visitLiteral) {
			return visitor.visitLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


