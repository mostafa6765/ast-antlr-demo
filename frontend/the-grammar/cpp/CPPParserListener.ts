// Generated from ./the-grammar/cpp/CPPParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { TranslationUnitContext } from "./CPPParser";
import { PrimaryExpressionContext } from "./CPPParser";
import { IdExpressionContext } from "./CPPParser";
import { UnqualifiedIdContext } from "./CPPParser";
import { QualifiedIdContext } from "./CPPParser";
import { NestedNameSpecifierContext } from "./CPPParser";
import { LambdaExpressionContext } from "./CPPParser";
import { LambdaIntroducerContext } from "./CPPParser";
import { LambdaCaptureContext } from "./CPPParser";
import { CaptureDefaultContext } from "./CPPParser";
import { CaptureListContext } from "./CPPParser";
import { CaptureContext } from "./CPPParser";
import { SimpleCaptureContext } from "./CPPParser";
import { InitcaptureContext } from "./CPPParser";
import { LambdaDeclaratorContext } from "./CPPParser";
import { PostfixExpressionContext } from "./CPPParser";
import { TypeIdOfTheTypeIdContext } from "./CPPParser";
import { ExpressionListContext } from "./CPPParser";
import { PseudoDestructorNameContext } from "./CPPParser";
import { UnaryExpressionContext } from "./CPPParser";
import { UnaryOperatorContext } from "./CPPParser";
import { NewExpressionContext } from "./CPPParser";
import { NewPlacementContext } from "./CPPParser";
import { NewTypeIdContext } from "./CPPParser";
import { NewDeclaratorContext } from "./CPPParser";
import { NoPointerNewDeclaratorContext } from "./CPPParser";
import { NewInitializerContext } from "./CPPParser";
import { DeleteExpressionContext } from "./CPPParser";
import { NoExceptExpressionContext } from "./CPPParser";
import { CastExpressionContext } from "./CPPParser";
import { PointerMemberExpressionContext } from "./CPPParser";
import { MultiplicativeExpressionContext } from "./CPPParser";
import { AdditiveExpressionContext } from "./CPPParser";
import { ShiftExpressionContext } from "./CPPParser";
import { ShiftOperatorContext } from "./CPPParser";
import { RelationalExpressionContext } from "./CPPParser";
import { EqualityExpressionContext } from "./CPPParser";
import { AndExpressionContext } from "./CPPParser";
import { ExclusiveOrExpressionContext } from "./CPPParser";
import { InclusiveOrExpressionContext } from "./CPPParser";
import { LogicalAndExpressionContext } from "./CPPParser";
import { LogicalOrExpressionContext } from "./CPPParser";
import { ConditionalExpressionContext } from "./CPPParser";
import { AssignmentExpressionContext } from "./CPPParser";
import { AssignmentOperatorContext } from "./CPPParser";
import { ExpressionContext } from "./CPPParser";
import { ConstantExpressionContext } from "./CPPParser";
import { StatementContext } from "./CPPParser";
import { LabeledStatementContext } from "./CPPParser";
import { ExpressionStatementContext } from "./CPPParser";
import { CompoundStatementContext } from "./CPPParser";
import { StatementSeqContext } from "./CPPParser";
import { SelectionStatementContext } from "./CPPParser";
import { ConditionContext } from "./CPPParser";
import { IterationStatementContext } from "./CPPParser";
import { ForInitStatementContext } from "./CPPParser";
import { ForRangeDeclarationContext } from "./CPPParser";
import { ForRangeInitializerContext } from "./CPPParser";
import { JumpStatementContext } from "./CPPParser";
import { DeclarationStatementContext } from "./CPPParser";
import { DeclarationseqContext } from "./CPPParser";
import { DeclarationContext } from "./CPPParser";
import { BlockDeclarationContext } from "./CPPParser";
import { AliasDeclarationContext } from "./CPPParser";
import { SimpleDeclarationContext } from "./CPPParser";
import { StaticAssertDeclarationContext } from "./CPPParser";
import { EmptyDeclarationContext } from "./CPPParser";
import { AttributeDeclarationContext } from "./CPPParser";
import { DeclSpecifierContext } from "./CPPParser";
import { DeclSpecifierSeqContext } from "./CPPParser";
import { StorageClassSpecifierContext } from "./CPPParser";
import { FunctionSpecifierContext } from "./CPPParser";
import { TypedefNameContext } from "./CPPParser";
import { TypeSpecifierContext } from "./CPPParser";
import { TrailingTypeSpecifierContext } from "./CPPParser";
import { TypeSpecifierSeqContext } from "./CPPParser";
import { TrailingTypeSpecifierSeqContext } from "./CPPParser";
import { SimpleTypeLengthModifierContext } from "./CPPParser";
import { SimpleTypeSignednessModifierContext } from "./CPPParser";
import { SimpleTypeSpecifierContext } from "./CPPParser";
import { TheTypeNameContext } from "./CPPParser";
import { DecltypeSpecifierContext } from "./CPPParser";
import { ElaboratedTypeSpecifierContext } from "./CPPParser";
import { EnumNameContext } from "./CPPParser";
import { EnumSpecifierContext } from "./CPPParser";
import { EnumHeadContext } from "./CPPParser";
import { OpaqueEnumDeclarationContext } from "./CPPParser";
import { EnumkeyContext } from "./CPPParser";
import { EnumbaseContext } from "./CPPParser";
import { EnumeratorListContext } from "./CPPParser";
import { EnumeratorDefinitionContext } from "./CPPParser";
import { EnumeratorContext } from "./CPPParser";
import { NamespaceNameContext } from "./CPPParser";
import { OriginalNamespaceNameContext } from "./CPPParser";
import { NamespaceDefinitionContext } from "./CPPParser";
import { NamespaceAliasContext } from "./CPPParser";
import { NamespaceAliasDefinitionContext } from "./CPPParser";
import { QualifiednamespacespecifierContext } from "./CPPParser";
import { UsingDeclarationContext } from "./CPPParser";
import { UsingDirectiveContext } from "./CPPParser";
import { AsmDefinitionContext } from "./CPPParser";
import { LinkageSpecificationContext } from "./CPPParser";
import { AttributeSpecifierSeqContext } from "./CPPParser";
import { AttributeSpecifierContext } from "./CPPParser";
import { AlignmentspecifierContext } from "./CPPParser";
import { AttributeListContext } from "./CPPParser";
import { AttributeContext } from "./CPPParser";
import { AttributeNamespaceContext } from "./CPPParser";
import { AttributeArgumentClauseContext } from "./CPPParser";
import { BalancedTokenSeqContext } from "./CPPParser";
import { BalancedtokenContext } from "./CPPParser";
import { InitDeclaratorListContext } from "./CPPParser";
import { InitDeclaratorContext } from "./CPPParser";
import { DeclaratorContext } from "./CPPParser";
import { PointerDeclaratorContext } from "./CPPParser";
import { NoPointerDeclaratorContext } from "./CPPParser";
import { ParametersAndQualifiersContext } from "./CPPParser";
import { TrailingReturnTypeContext } from "./CPPParser";
import { PointerOperatorContext } from "./CPPParser";
import { CvqualifierseqContext } from "./CPPParser";
import { CvQualifierContext } from "./CPPParser";
import { RefqualifierContext } from "./CPPParser";
import { DeclaratoridContext } from "./CPPParser";
import { TheTypeIdContext } from "./CPPParser";
import { AbstractDeclaratorContext } from "./CPPParser";
import { PointerAbstractDeclaratorContext } from "./CPPParser";
import { NoPointerAbstractDeclaratorContext } from "./CPPParser";
import { AbstractPackDeclaratorContext } from "./CPPParser";
import { NoPointerAbstractPackDeclaratorContext } from "./CPPParser";
import { ParameterDeclarationClauseContext } from "./CPPParser";
import { ParameterDeclarationListContext } from "./CPPParser";
import { ParameterDeclarationContext } from "./CPPParser";
import { FunctionDefinitionContext } from "./CPPParser";
import { FunctionBodyContext } from "./CPPParser";
import { InitializerContext } from "./CPPParser";
import { BraceOrEqualInitializerContext } from "./CPPParser";
import { InitializerClauseContext } from "./CPPParser";
import { InitializerListContext } from "./CPPParser";
import { BracedInitListContext } from "./CPPParser";
import { ClassNameContext } from "./CPPParser";
import { ClassSpecifierContext } from "./CPPParser";
import { ClassHeadContext } from "./CPPParser";
import { ClassHeadNameContext } from "./CPPParser";
import { ClassVirtSpecifierContext } from "./CPPParser";
import { ClassKeyContext } from "./CPPParser";
import { MemberSpecificationContext } from "./CPPParser";
import { MemberdeclarationContext } from "./CPPParser";
import { MemberDeclaratorListContext } from "./CPPParser";
import { MemberDeclaratorContext } from "./CPPParser";
import { VirtualSpecifierSeqContext } from "./CPPParser";
import { VirtualSpecifierContext } from "./CPPParser";
import { PureSpecifierContext } from "./CPPParser";
import { BaseClauseContext } from "./CPPParser";
import { BaseSpecifierListContext } from "./CPPParser";
import { BaseSpecifierContext } from "./CPPParser";
import { ClassOrDeclTypeContext } from "./CPPParser";
import { BaseTypeSpecifierContext } from "./CPPParser";
import { AccessSpecifierContext } from "./CPPParser";
import { ConversionFunctionIdContext } from "./CPPParser";
import { ConversionTypeIdContext } from "./CPPParser";
import { ConversionDeclaratorContext } from "./CPPParser";
import { ConstructorInitializerContext } from "./CPPParser";
import { MemInitializerListContext } from "./CPPParser";
import { MemInitializerContext } from "./CPPParser";
import { MeminitializeridContext } from "./CPPParser";
import { OperatorFunctionIdContext } from "./CPPParser";
import { LiteralOperatorIdContext } from "./CPPParser";
import { TemplateDeclarationContext } from "./CPPParser";
import { TemplateparameterListContext } from "./CPPParser";
import { TemplateParameterContext } from "./CPPParser";
import { TypeParameterContext } from "./CPPParser";
import { SimpleTemplateIdContext } from "./CPPParser";
import { TemplateIdContext } from "./CPPParser";
import { TemplateNameContext } from "./CPPParser";
import { TemplateArgumentListContext } from "./CPPParser";
import { TemplateArgumentContext } from "./CPPParser";
import { TypeNameSpecifierContext } from "./CPPParser";
import { ExplicitInstantiationContext } from "./CPPParser";
import { ExplicitSpecializationContext } from "./CPPParser";
import { TryBlockContext } from "./CPPParser";
import { FunctionTryBlockContext } from "./CPPParser";
import { HandlerSeqContext } from "./CPPParser";
import { HandlerContext } from "./CPPParser";
import { ExceptionDeclarationContext } from "./CPPParser";
import { ThrowExpressionContext } from "./CPPParser";
import { ExceptionSpecificationContext } from "./CPPParser";
import { DynamicExceptionSpecificationContext } from "./CPPParser";
import { TypeIdListContext } from "./CPPParser";
import { NoeExceptSpecificationContext } from "./CPPParser";
import { TheOperatorContext } from "./CPPParser";
import { LiteralContext } from "./CPPParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `CPPParser`.
 */
export interface CPPParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `CPPParser.translationUnit`.
	 * @param ctx the parse tree
	 */
	enterTranslationUnit?: (ctx: TranslationUnitContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.translationUnit`.
	 * @param ctx the parse tree
	 */
	exitTranslationUnit?: (ctx: TranslationUnitContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterPrimaryExpression?: (ctx: PrimaryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitPrimaryExpression?: (ctx: PrimaryExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.idExpression`.
	 * @param ctx the parse tree
	 */
	enterIdExpression?: (ctx: IdExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.idExpression`.
	 * @param ctx the parse tree
	 */
	exitIdExpression?: (ctx: IdExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.unqualifiedId`.
	 * @param ctx the parse tree
	 */
	enterUnqualifiedId?: (ctx: UnqualifiedIdContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.unqualifiedId`.
	 * @param ctx the parse tree
	 */
	exitUnqualifiedId?: (ctx: UnqualifiedIdContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.qualifiedId`.
	 * @param ctx the parse tree
	 */
	enterQualifiedId?: (ctx: QualifiedIdContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.qualifiedId`.
	 * @param ctx the parse tree
	 */
	exitQualifiedId?: (ctx: QualifiedIdContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.nestedNameSpecifier`.
	 * @param ctx the parse tree
	 */
	enterNestedNameSpecifier?: (ctx: NestedNameSpecifierContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.nestedNameSpecifier`.
	 * @param ctx the parse tree
	 */
	exitNestedNameSpecifier?: (ctx: NestedNameSpecifierContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.lambdaExpression`.
	 * @param ctx the parse tree
	 */
	enterLambdaExpression?: (ctx: LambdaExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.lambdaExpression`.
	 * @param ctx the parse tree
	 */
	exitLambdaExpression?: (ctx: LambdaExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.lambdaIntroducer`.
	 * @param ctx the parse tree
	 */
	enterLambdaIntroducer?: (ctx: LambdaIntroducerContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.lambdaIntroducer`.
	 * @param ctx the parse tree
	 */
	exitLambdaIntroducer?: (ctx: LambdaIntroducerContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.lambdaCapture`.
	 * @param ctx the parse tree
	 */
	enterLambdaCapture?: (ctx: LambdaCaptureContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.lambdaCapture`.
	 * @param ctx the parse tree
	 */
	exitLambdaCapture?: (ctx: LambdaCaptureContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.captureDefault`.
	 * @param ctx the parse tree
	 */
	enterCaptureDefault?: (ctx: CaptureDefaultContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.captureDefault`.
	 * @param ctx the parse tree
	 */
	exitCaptureDefault?: (ctx: CaptureDefaultContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.captureList`.
	 * @param ctx the parse tree
	 */
	enterCaptureList?: (ctx: CaptureListContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.captureList`.
	 * @param ctx the parse tree
	 */
	exitCaptureList?: (ctx: CaptureListContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.capture`.
	 * @param ctx the parse tree
	 */
	enterCapture?: (ctx: CaptureContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.capture`.
	 * @param ctx the parse tree
	 */
	exitCapture?: (ctx: CaptureContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.simpleCapture`.
	 * @param ctx the parse tree
	 */
	enterSimpleCapture?: (ctx: SimpleCaptureContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.simpleCapture`.
	 * @param ctx the parse tree
	 */
	exitSimpleCapture?: (ctx: SimpleCaptureContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.initcapture`.
	 * @param ctx the parse tree
	 */
	enterInitcapture?: (ctx: InitcaptureContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.initcapture`.
	 * @param ctx the parse tree
	 */
	exitInitcapture?: (ctx: InitcaptureContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.lambdaDeclarator`.
	 * @param ctx the parse tree
	 */
	enterLambdaDeclarator?: (ctx: LambdaDeclaratorContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.lambdaDeclarator`.
	 * @param ctx the parse tree
	 */
	exitLambdaDeclarator?: (ctx: LambdaDeclaratorContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.postfixExpression`.
	 * @param ctx the parse tree
	 */
	enterPostfixExpression?: (ctx: PostfixExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.postfixExpression`.
	 * @param ctx the parse tree
	 */
	exitPostfixExpression?: (ctx: PostfixExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.typeIdOfTheTypeId`.
	 * @param ctx the parse tree
	 */
	enterTypeIdOfTheTypeId?: (ctx: TypeIdOfTheTypeIdContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.typeIdOfTheTypeId`.
	 * @param ctx the parse tree
	 */
	exitTypeIdOfTheTypeId?: (ctx: TypeIdOfTheTypeIdContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.expressionList`.
	 * @param ctx the parse tree
	 */
	enterExpressionList?: (ctx: ExpressionListContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.expressionList`.
	 * @param ctx the parse tree
	 */
	exitExpressionList?: (ctx: ExpressionListContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.pseudoDestructorName`.
	 * @param ctx the parse tree
	 */
	enterPseudoDestructorName?: (ctx: PseudoDestructorNameContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.pseudoDestructorName`.
	 * @param ctx the parse tree
	 */
	exitPseudoDestructorName?: (ctx: PseudoDestructorNameContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.unaryExpression`.
	 * @param ctx the parse tree
	 */
	enterUnaryExpression?: (ctx: UnaryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.unaryExpression`.
	 * @param ctx the parse tree
	 */
	exitUnaryExpression?: (ctx: UnaryExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.unaryOperator`.
	 * @param ctx the parse tree
	 */
	enterUnaryOperator?: (ctx: UnaryOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.unaryOperator`.
	 * @param ctx the parse tree
	 */
	exitUnaryOperator?: (ctx: UnaryOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.newExpression`.
	 * @param ctx the parse tree
	 */
	enterNewExpression?: (ctx: NewExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.newExpression`.
	 * @param ctx the parse tree
	 */
	exitNewExpression?: (ctx: NewExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.newPlacement`.
	 * @param ctx the parse tree
	 */
	enterNewPlacement?: (ctx: NewPlacementContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.newPlacement`.
	 * @param ctx the parse tree
	 */
	exitNewPlacement?: (ctx: NewPlacementContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.newTypeId`.
	 * @param ctx the parse tree
	 */
	enterNewTypeId?: (ctx: NewTypeIdContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.newTypeId`.
	 * @param ctx the parse tree
	 */
	exitNewTypeId?: (ctx: NewTypeIdContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.newDeclarator`.
	 * @param ctx the parse tree
	 */
	enterNewDeclarator?: (ctx: NewDeclaratorContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.newDeclarator`.
	 * @param ctx the parse tree
	 */
	exitNewDeclarator?: (ctx: NewDeclaratorContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.noPointerNewDeclarator`.
	 * @param ctx the parse tree
	 */
	enterNoPointerNewDeclarator?: (ctx: NoPointerNewDeclaratorContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.noPointerNewDeclarator`.
	 * @param ctx the parse tree
	 */
	exitNoPointerNewDeclarator?: (ctx: NoPointerNewDeclaratorContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.newInitializer`.
	 * @param ctx the parse tree
	 */
	enterNewInitializer?: (ctx: NewInitializerContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.newInitializer`.
	 * @param ctx the parse tree
	 */
	exitNewInitializer?: (ctx: NewInitializerContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.deleteExpression`.
	 * @param ctx the parse tree
	 */
	enterDeleteExpression?: (ctx: DeleteExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.deleteExpression`.
	 * @param ctx the parse tree
	 */
	exitDeleteExpression?: (ctx: DeleteExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.noExceptExpression`.
	 * @param ctx the parse tree
	 */
	enterNoExceptExpression?: (ctx: NoExceptExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.noExceptExpression`.
	 * @param ctx the parse tree
	 */
	exitNoExceptExpression?: (ctx: NoExceptExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.castExpression`.
	 * @param ctx the parse tree
	 */
	enterCastExpression?: (ctx: CastExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.castExpression`.
	 * @param ctx the parse tree
	 */
	exitCastExpression?: (ctx: CastExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.pointerMemberExpression`.
	 * @param ctx the parse tree
	 */
	enterPointerMemberExpression?: (ctx: PointerMemberExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.pointerMemberExpression`.
	 * @param ctx the parse tree
	 */
	exitPointerMemberExpression?: (ctx: PointerMemberExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.multiplicativeExpression`.
	 * @param ctx the parse tree
	 */
	enterMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.multiplicativeExpression`.
	 * @param ctx the parse tree
	 */
	exitMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.additiveExpression`.
	 * @param ctx the parse tree
	 */
	enterAdditiveExpression?: (ctx: AdditiveExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.additiveExpression`.
	 * @param ctx the parse tree
	 */
	exitAdditiveExpression?: (ctx: AdditiveExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.shiftExpression`.
	 * @param ctx the parse tree
	 */
	enterShiftExpression?: (ctx: ShiftExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.shiftExpression`.
	 * @param ctx the parse tree
	 */
	exitShiftExpression?: (ctx: ShiftExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.shiftOperator`.
	 * @param ctx the parse tree
	 */
	enterShiftOperator?: (ctx: ShiftOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.shiftOperator`.
	 * @param ctx the parse tree
	 */
	exitShiftOperator?: (ctx: ShiftOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.relationalExpression`.
	 * @param ctx the parse tree
	 */
	enterRelationalExpression?: (ctx: RelationalExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.relationalExpression`.
	 * @param ctx the parse tree
	 */
	exitRelationalExpression?: (ctx: RelationalExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.equalityExpression`.
	 * @param ctx the parse tree
	 */
	enterEqualityExpression?: (ctx: EqualityExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.equalityExpression`.
	 * @param ctx the parse tree
	 */
	exitEqualityExpression?: (ctx: EqualityExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.andExpression`.
	 * @param ctx the parse tree
	 */
	enterAndExpression?: (ctx: AndExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.andExpression`.
	 * @param ctx the parse tree
	 */
	exitAndExpression?: (ctx: AndExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.exclusiveOrExpression`.
	 * @param ctx the parse tree
	 */
	enterExclusiveOrExpression?: (ctx: ExclusiveOrExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.exclusiveOrExpression`.
	 * @param ctx the parse tree
	 */
	exitExclusiveOrExpression?: (ctx: ExclusiveOrExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.inclusiveOrExpression`.
	 * @param ctx the parse tree
	 */
	enterInclusiveOrExpression?: (ctx: InclusiveOrExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.inclusiveOrExpression`.
	 * @param ctx the parse tree
	 */
	exitInclusiveOrExpression?: (ctx: InclusiveOrExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.logicalAndExpression`.
	 * @param ctx the parse tree
	 */
	enterLogicalAndExpression?: (ctx: LogicalAndExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.logicalAndExpression`.
	 * @param ctx the parse tree
	 */
	exitLogicalAndExpression?: (ctx: LogicalAndExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.logicalOrExpression`.
	 * @param ctx the parse tree
	 */
	enterLogicalOrExpression?: (ctx: LogicalOrExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.logicalOrExpression`.
	 * @param ctx the parse tree
	 */
	exitLogicalOrExpression?: (ctx: LogicalOrExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.conditionalExpression`.
	 * @param ctx the parse tree
	 */
	enterConditionalExpression?: (ctx: ConditionalExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.conditionalExpression`.
	 * @param ctx the parse tree
	 */
	exitConditionalExpression?: (ctx: ConditionalExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.assignmentExpression`.
	 * @param ctx the parse tree
	 */
	enterAssignmentExpression?: (ctx: AssignmentExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.assignmentExpression`.
	 * @param ctx the parse tree
	 */
	exitAssignmentExpression?: (ctx: AssignmentExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.assignmentOperator`.
	 * @param ctx the parse tree
	 */
	enterAssignmentOperator?: (ctx: AssignmentOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.assignmentOperator`.
	 * @param ctx the parse tree
	 */
	exitAssignmentOperator?: (ctx: AssignmentOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.constantExpression`.
	 * @param ctx the parse tree
	 */
	enterConstantExpression?: (ctx: ConstantExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.constantExpression`.
	 * @param ctx the parse tree
	 */
	exitConstantExpression?: (ctx: ConstantExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.labeledStatement`.
	 * @param ctx the parse tree
	 */
	enterLabeledStatement?: (ctx: LabeledStatementContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.labeledStatement`.
	 * @param ctx the parse tree
	 */
	exitLabeledStatement?: (ctx: LabeledStatementContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.expressionStatement`.
	 * @param ctx the parse tree
	 */
	enterExpressionStatement?: (ctx: ExpressionStatementContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.expressionStatement`.
	 * @param ctx the parse tree
	 */
	exitExpressionStatement?: (ctx: ExpressionStatementContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.compoundStatement`.
	 * @param ctx the parse tree
	 */
	enterCompoundStatement?: (ctx: CompoundStatementContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.compoundStatement`.
	 * @param ctx the parse tree
	 */
	exitCompoundStatement?: (ctx: CompoundStatementContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.statementSeq`.
	 * @param ctx the parse tree
	 */
	enterStatementSeq?: (ctx: StatementSeqContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.statementSeq`.
	 * @param ctx the parse tree
	 */
	exitStatementSeq?: (ctx: StatementSeqContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.selectionStatement`.
	 * @param ctx the parse tree
	 */
	enterSelectionStatement?: (ctx: SelectionStatementContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.selectionStatement`.
	 * @param ctx the parse tree
	 */
	exitSelectionStatement?: (ctx: SelectionStatementContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.condition`.
	 * @param ctx the parse tree
	 */
	enterCondition?: (ctx: ConditionContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.condition`.
	 * @param ctx the parse tree
	 */
	exitCondition?: (ctx: ConditionContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.iterationStatement`.
	 * @param ctx the parse tree
	 */
	enterIterationStatement?: (ctx: IterationStatementContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.iterationStatement`.
	 * @param ctx the parse tree
	 */
	exitIterationStatement?: (ctx: IterationStatementContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.forInitStatement`.
	 * @param ctx the parse tree
	 */
	enterForInitStatement?: (ctx: ForInitStatementContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.forInitStatement`.
	 * @param ctx the parse tree
	 */
	exitForInitStatement?: (ctx: ForInitStatementContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.forRangeDeclaration`.
	 * @param ctx the parse tree
	 */
	enterForRangeDeclaration?: (ctx: ForRangeDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.forRangeDeclaration`.
	 * @param ctx the parse tree
	 */
	exitForRangeDeclaration?: (ctx: ForRangeDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.forRangeInitializer`.
	 * @param ctx the parse tree
	 */
	enterForRangeInitializer?: (ctx: ForRangeInitializerContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.forRangeInitializer`.
	 * @param ctx the parse tree
	 */
	exitForRangeInitializer?: (ctx: ForRangeInitializerContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.jumpStatement`.
	 * @param ctx the parse tree
	 */
	enterJumpStatement?: (ctx: JumpStatementContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.jumpStatement`.
	 * @param ctx the parse tree
	 */
	exitJumpStatement?: (ctx: JumpStatementContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.declarationStatement`.
	 * @param ctx the parse tree
	 */
	enterDeclarationStatement?: (ctx: DeclarationStatementContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.declarationStatement`.
	 * @param ctx the parse tree
	 */
	exitDeclarationStatement?: (ctx: DeclarationStatementContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.declarationseq`.
	 * @param ctx the parse tree
	 */
	enterDeclarationseq?: (ctx: DeclarationseqContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.declarationseq`.
	 * @param ctx the parse tree
	 */
	exitDeclarationseq?: (ctx: DeclarationseqContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.declaration`.
	 * @param ctx the parse tree
	 */
	enterDeclaration?: (ctx: DeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.declaration`.
	 * @param ctx the parse tree
	 */
	exitDeclaration?: (ctx: DeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.blockDeclaration`.
	 * @param ctx the parse tree
	 */
	enterBlockDeclaration?: (ctx: BlockDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.blockDeclaration`.
	 * @param ctx the parse tree
	 */
	exitBlockDeclaration?: (ctx: BlockDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.aliasDeclaration`.
	 * @param ctx the parse tree
	 */
	enterAliasDeclaration?: (ctx: AliasDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.aliasDeclaration`.
	 * @param ctx the parse tree
	 */
	exitAliasDeclaration?: (ctx: AliasDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.simpleDeclaration`.
	 * @param ctx the parse tree
	 */
	enterSimpleDeclaration?: (ctx: SimpleDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.simpleDeclaration`.
	 * @param ctx the parse tree
	 */
	exitSimpleDeclaration?: (ctx: SimpleDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.staticAssertDeclaration`.
	 * @param ctx the parse tree
	 */
	enterStaticAssertDeclaration?: (ctx: StaticAssertDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.staticAssertDeclaration`.
	 * @param ctx the parse tree
	 */
	exitStaticAssertDeclaration?: (ctx: StaticAssertDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.emptyDeclaration`.
	 * @param ctx the parse tree
	 */
	enterEmptyDeclaration?: (ctx: EmptyDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.emptyDeclaration`.
	 * @param ctx the parse tree
	 */
	exitEmptyDeclaration?: (ctx: EmptyDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.attributeDeclaration`.
	 * @param ctx the parse tree
	 */
	enterAttributeDeclaration?: (ctx: AttributeDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.attributeDeclaration`.
	 * @param ctx the parse tree
	 */
	exitAttributeDeclaration?: (ctx: AttributeDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.declSpecifier`.
	 * @param ctx the parse tree
	 */
	enterDeclSpecifier?: (ctx: DeclSpecifierContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.declSpecifier`.
	 * @param ctx the parse tree
	 */
	exitDeclSpecifier?: (ctx: DeclSpecifierContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.declSpecifierSeq`.
	 * @param ctx the parse tree
	 */
	enterDeclSpecifierSeq?: (ctx: DeclSpecifierSeqContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.declSpecifierSeq`.
	 * @param ctx the parse tree
	 */
	exitDeclSpecifierSeq?: (ctx: DeclSpecifierSeqContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.storageClassSpecifier`.
	 * @param ctx the parse tree
	 */
	enterStorageClassSpecifier?: (ctx: StorageClassSpecifierContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.storageClassSpecifier`.
	 * @param ctx the parse tree
	 */
	exitStorageClassSpecifier?: (ctx: StorageClassSpecifierContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.functionSpecifier`.
	 * @param ctx the parse tree
	 */
	enterFunctionSpecifier?: (ctx: FunctionSpecifierContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.functionSpecifier`.
	 * @param ctx the parse tree
	 */
	exitFunctionSpecifier?: (ctx: FunctionSpecifierContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.typedefName`.
	 * @param ctx the parse tree
	 */
	enterTypedefName?: (ctx: TypedefNameContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.typedefName`.
	 * @param ctx the parse tree
	 */
	exitTypedefName?: (ctx: TypedefNameContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.typeSpecifier`.
	 * @param ctx the parse tree
	 */
	enterTypeSpecifier?: (ctx: TypeSpecifierContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.typeSpecifier`.
	 * @param ctx the parse tree
	 */
	exitTypeSpecifier?: (ctx: TypeSpecifierContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.trailingTypeSpecifier`.
	 * @param ctx the parse tree
	 */
	enterTrailingTypeSpecifier?: (ctx: TrailingTypeSpecifierContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.trailingTypeSpecifier`.
	 * @param ctx the parse tree
	 */
	exitTrailingTypeSpecifier?: (ctx: TrailingTypeSpecifierContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.typeSpecifierSeq`.
	 * @param ctx the parse tree
	 */
	enterTypeSpecifierSeq?: (ctx: TypeSpecifierSeqContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.typeSpecifierSeq`.
	 * @param ctx the parse tree
	 */
	exitTypeSpecifierSeq?: (ctx: TypeSpecifierSeqContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.trailingTypeSpecifierSeq`.
	 * @param ctx the parse tree
	 */
	enterTrailingTypeSpecifierSeq?: (ctx: TrailingTypeSpecifierSeqContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.trailingTypeSpecifierSeq`.
	 * @param ctx the parse tree
	 */
	exitTrailingTypeSpecifierSeq?: (ctx: TrailingTypeSpecifierSeqContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.simpleTypeLengthModifier`.
	 * @param ctx the parse tree
	 */
	enterSimpleTypeLengthModifier?: (ctx: SimpleTypeLengthModifierContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.simpleTypeLengthModifier`.
	 * @param ctx the parse tree
	 */
	exitSimpleTypeLengthModifier?: (ctx: SimpleTypeLengthModifierContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.simpleTypeSignednessModifier`.
	 * @param ctx the parse tree
	 */
	enterSimpleTypeSignednessModifier?: (ctx: SimpleTypeSignednessModifierContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.simpleTypeSignednessModifier`.
	 * @param ctx the parse tree
	 */
	exitSimpleTypeSignednessModifier?: (ctx: SimpleTypeSignednessModifierContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.simpleTypeSpecifier`.
	 * @param ctx the parse tree
	 */
	enterSimpleTypeSpecifier?: (ctx: SimpleTypeSpecifierContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.simpleTypeSpecifier`.
	 * @param ctx the parse tree
	 */
	exitSimpleTypeSpecifier?: (ctx: SimpleTypeSpecifierContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.theTypeName`.
	 * @param ctx the parse tree
	 */
	enterTheTypeName?: (ctx: TheTypeNameContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.theTypeName`.
	 * @param ctx the parse tree
	 */
	exitTheTypeName?: (ctx: TheTypeNameContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.decltypeSpecifier`.
	 * @param ctx the parse tree
	 */
	enterDecltypeSpecifier?: (ctx: DecltypeSpecifierContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.decltypeSpecifier`.
	 * @param ctx the parse tree
	 */
	exitDecltypeSpecifier?: (ctx: DecltypeSpecifierContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.elaboratedTypeSpecifier`.
	 * @param ctx the parse tree
	 */
	enterElaboratedTypeSpecifier?: (ctx: ElaboratedTypeSpecifierContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.elaboratedTypeSpecifier`.
	 * @param ctx the parse tree
	 */
	exitElaboratedTypeSpecifier?: (ctx: ElaboratedTypeSpecifierContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.enumName`.
	 * @param ctx the parse tree
	 */
	enterEnumName?: (ctx: EnumNameContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.enumName`.
	 * @param ctx the parse tree
	 */
	exitEnumName?: (ctx: EnumNameContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.enumSpecifier`.
	 * @param ctx the parse tree
	 */
	enterEnumSpecifier?: (ctx: EnumSpecifierContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.enumSpecifier`.
	 * @param ctx the parse tree
	 */
	exitEnumSpecifier?: (ctx: EnumSpecifierContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.enumHead`.
	 * @param ctx the parse tree
	 */
	enterEnumHead?: (ctx: EnumHeadContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.enumHead`.
	 * @param ctx the parse tree
	 */
	exitEnumHead?: (ctx: EnumHeadContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.opaqueEnumDeclaration`.
	 * @param ctx the parse tree
	 */
	enterOpaqueEnumDeclaration?: (ctx: OpaqueEnumDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.opaqueEnumDeclaration`.
	 * @param ctx the parse tree
	 */
	exitOpaqueEnumDeclaration?: (ctx: OpaqueEnumDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.enumkey`.
	 * @param ctx the parse tree
	 */
	enterEnumkey?: (ctx: EnumkeyContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.enumkey`.
	 * @param ctx the parse tree
	 */
	exitEnumkey?: (ctx: EnumkeyContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.enumbase`.
	 * @param ctx the parse tree
	 */
	enterEnumbase?: (ctx: EnumbaseContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.enumbase`.
	 * @param ctx the parse tree
	 */
	exitEnumbase?: (ctx: EnumbaseContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.enumeratorList`.
	 * @param ctx the parse tree
	 */
	enterEnumeratorList?: (ctx: EnumeratorListContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.enumeratorList`.
	 * @param ctx the parse tree
	 */
	exitEnumeratorList?: (ctx: EnumeratorListContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.enumeratorDefinition`.
	 * @param ctx the parse tree
	 */
	enterEnumeratorDefinition?: (ctx: EnumeratorDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.enumeratorDefinition`.
	 * @param ctx the parse tree
	 */
	exitEnumeratorDefinition?: (ctx: EnumeratorDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.enumerator`.
	 * @param ctx the parse tree
	 */
	enterEnumerator?: (ctx: EnumeratorContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.enumerator`.
	 * @param ctx the parse tree
	 */
	exitEnumerator?: (ctx: EnumeratorContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.namespaceName`.
	 * @param ctx the parse tree
	 */
	enterNamespaceName?: (ctx: NamespaceNameContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.namespaceName`.
	 * @param ctx the parse tree
	 */
	exitNamespaceName?: (ctx: NamespaceNameContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.originalNamespaceName`.
	 * @param ctx the parse tree
	 */
	enterOriginalNamespaceName?: (ctx: OriginalNamespaceNameContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.originalNamespaceName`.
	 * @param ctx the parse tree
	 */
	exitOriginalNamespaceName?: (ctx: OriginalNamespaceNameContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.namespaceDefinition`.
	 * @param ctx the parse tree
	 */
	enterNamespaceDefinition?: (ctx: NamespaceDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.namespaceDefinition`.
	 * @param ctx the parse tree
	 */
	exitNamespaceDefinition?: (ctx: NamespaceDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.namespaceAlias`.
	 * @param ctx the parse tree
	 */
	enterNamespaceAlias?: (ctx: NamespaceAliasContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.namespaceAlias`.
	 * @param ctx the parse tree
	 */
	exitNamespaceAlias?: (ctx: NamespaceAliasContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.namespaceAliasDefinition`.
	 * @param ctx the parse tree
	 */
	enterNamespaceAliasDefinition?: (ctx: NamespaceAliasDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.namespaceAliasDefinition`.
	 * @param ctx the parse tree
	 */
	exitNamespaceAliasDefinition?: (ctx: NamespaceAliasDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.qualifiednamespacespecifier`.
	 * @param ctx the parse tree
	 */
	enterQualifiednamespacespecifier?: (ctx: QualifiednamespacespecifierContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.qualifiednamespacespecifier`.
	 * @param ctx the parse tree
	 */
	exitQualifiednamespacespecifier?: (ctx: QualifiednamespacespecifierContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.usingDeclaration`.
	 * @param ctx the parse tree
	 */
	enterUsingDeclaration?: (ctx: UsingDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.usingDeclaration`.
	 * @param ctx the parse tree
	 */
	exitUsingDeclaration?: (ctx: UsingDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.usingDirective`.
	 * @param ctx the parse tree
	 */
	enterUsingDirective?: (ctx: UsingDirectiveContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.usingDirective`.
	 * @param ctx the parse tree
	 */
	exitUsingDirective?: (ctx: UsingDirectiveContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.asmDefinition`.
	 * @param ctx the parse tree
	 */
	enterAsmDefinition?: (ctx: AsmDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.asmDefinition`.
	 * @param ctx the parse tree
	 */
	exitAsmDefinition?: (ctx: AsmDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.linkageSpecification`.
	 * @param ctx the parse tree
	 */
	enterLinkageSpecification?: (ctx: LinkageSpecificationContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.linkageSpecification`.
	 * @param ctx the parse tree
	 */
	exitLinkageSpecification?: (ctx: LinkageSpecificationContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.attributeSpecifierSeq`.
	 * @param ctx the parse tree
	 */
	enterAttributeSpecifierSeq?: (ctx: AttributeSpecifierSeqContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.attributeSpecifierSeq`.
	 * @param ctx the parse tree
	 */
	exitAttributeSpecifierSeq?: (ctx: AttributeSpecifierSeqContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.attributeSpecifier`.
	 * @param ctx the parse tree
	 */
	enterAttributeSpecifier?: (ctx: AttributeSpecifierContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.attributeSpecifier`.
	 * @param ctx the parse tree
	 */
	exitAttributeSpecifier?: (ctx: AttributeSpecifierContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.alignmentspecifier`.
	 * @param ctx the parse tree
	 */
	enterAlignmentspecifier?: (ctx: AlignmentspecifierContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.alignmentspecifier`.
	 * @param ctx the parse tree
	 */
	exitAlignmentspecifier?: (ctx: AlignmentspecifierContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.attributeList`.
	 * @param ctx the parse tree
	 */
	enterAttributeList?: (ctx: AttributeListContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.attributeList`.
	 * @param ctx the parse tree
	 */
	exitAttributeList?: (ctx: AttributeListContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.attribute`.
	 * @param ctx the parse tree
	 */
	enterAttribute?: (ctx: AttributeContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.attribute`.
	 * @param ctx the parse tree
	 */
	exitAttribute?: (ctx: AttributeContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.attributeNamespace`.
	 * @param ctx the parse tree
	 */
	enterAttributeNamespace?: (ctx: AttributeNamespaceContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.attributeNamespace`.
	 * @param ctx the parse tree
	 */
	exitAttributeNamespace?: (ctx: AttributeNamespaceContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.attributeArgumentClause`.
	 * @param ctx the parse tree
	 */
	enterAttributeArgumentClause?: (ctx: AttributeArgumentClauseContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.attributeArgumentClause`.
	 * @param ctx the parse tree
	 */
	exitAttributeArgumentClause?: (ctx: AttributeArgumentClauseContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.balancedTokenSeq`.
	 * @param ctx the parse tree
	 */
	enterBalancedTokenSeq?: (ctx: BalancedTokenSeqContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.balancedTokenSeq`.
	 * @param ctx the parse tree
	 */
	exitBalancedTokenSeq?: (ctx: BalancedTokenSeqContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.balancedtoken`.
	 * @param ctx the parse tree
	 */
	enterBalancedtoken?: (ctx: BalancedtokenContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.balancedtoken`.
	 * @param ctx the parse tree
	 */
	exitBalancedtoken?: (ctx: BalancedtokenContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.initDeclaratorList`.
	 * @param ctx the parse tree
	 */
	enterInitDeclaratorList?: (ctx: InitDeclaratorListContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.initDeclaratorList`.
	 * @param ctx the parse tree
	 */
	exitInitDeclaratorList?: (ctx: InitDeclaratorListContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.initDeclarator`.
	 * @param ctx the parse tree
	 */
	enterInitDeclarator?: (ctx: InitDeclaratorContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.initDeclarator`.
	 * @param ctx the parse tree
	 */
	exitInitDeclarator?: (ctx: InitDeclaratorContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.declarator`.
	 * @param ctx the parse tree
	 */
	enterDeclarator?: (ctx: DeclaratorContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.declarator`.
	 * @param ctx the parse tree
	 */
	exitDeclarator?: (ctx: DeclaratorContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.pointerDeclarator`.
	 * @param ctx the parse tree
	 */
	enterPointerDeclarator?: (ctx: PointerDeclaratorContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.pointerDeclarator`.
	 * @param ctx the parse tree
	 */
	exitPointerDeclarator?: (ctx: PointerDeclaratorContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.noPointerDeclarator`.
	 * @param ctx the parse tree
	 */
	enterNoPointerDeclarator?: (ctx: NoPointerDeclaratorContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.noPointerDeclarator`.
	 * @param ctx the parse tree
	 */
	exitNoPointerDeclarator?: (ctx: NoPointerDeclaratorContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.parametersAndQualifiers`.
	 * @param ctx the parse tree
	 */
	enterParametersAndQualifiers?: (ctx: ParametersAndQualifiersContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.parametersAndQualifiers`.
	 * @param ctx the parse tree
	 */
	exitParametersAndQualifiers?: (ctx: ParametersAndQualifiersContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.trailingReturnType`.
	 * @param ctx the parse tree
	 */
	enterTrailingReturnType?: (ctx: TrailingReturnTypeContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.trailingReturnType`.
	 * @param ctx the parse tree
	 */
	exitTrailingReturnType?: (ctx: TrailingReturnTypeContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.pointerOperator`.
	 * @param ctx the parse tree
	 */
	enterPointerOperator?: (ctx: PointerOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.pointerOperator`.
	 * @param ctx the parse tree
	 */
	exitPointerOperator?: (ctx: PointerOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.cvqualifierseq`.
	 * @param ctx the parse tree
	 */
	enterCvqualifierseq?: (ctx: CvqualifierseqContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.cvqualifierseq`.
	 * @param ctx the parse tree
	 */
	exitCvqualifierseq?: (ctx: CvqualifierseqContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.cvQualifier`.
	 * @param ctx the parse tree
	 */
	enterCvQualifier?: (ctx: CvQualifierContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.cvQualifier`.
	 * @param ctx the parse tree
	 */
	exitCvQualifier?: (ctx: CvQualifierContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.refqualifier`.
	 * @param ctx the parse tree
	 */
	enterRefqualifier?: (ctx: RefqualifierContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.refqualifier`.
	 * @param ctx the parse tree
	 */
	exitRefqualifier?: (ctx: RefqualifierContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.declaratorid`.
	 * @param ctx the parse tree
	 */
	enterDeclaratorid?: (ctx: DeclaratoridContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.declaratorid`.
	 * @param ctx the parse tree
	 */
	exitDeclaratorid?: (ctx: DeclaratoridContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.theTypeId`.
	 * @param ctx the parse tree
	 */
	enterTheTypeId?: (ctx: TheTypeIdContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.theTypeId`.
	 * @param ctx the parse tree
	 */
	exitTheTypeId?: (ctx: TheTypeIdContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.abstractDeclarator`.
	 * @param ctx the parse tree
	 */
	enterAbstractDeclarator?: (ctx: AbstractDeclaratorContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.abstractDeclarator`.
	 * @param ctx the parse tree
	 */
	exitAbstractDeclarator?: (ctx: AbstractDeclaratorContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.pointerAbstractDeclarator`.
	 * @param ctx the parse tree
	 */
	enterPointerAbstractDeclarator?: (ctx: PointerAbstractDeclaratorContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.pointerAbstractDeclarator`.
	 * @param ctx the parse tree
	 */
	exitPointerAbstractDeclarator?: (ctx: PointerAbstractDeclaratorContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.noPointerAbstractDeclarator`.
	 * @param ctx the parse tree
	 */
	enterNoPointerAbstractDeclarator?: (ctx: NoPointerAbstractDeclaratorContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.noPointerAbstractDeclarator`.
	 * @param ctx the parse tree
	 */
	exitNoPointerAbstractDeclarator?: (ctx: NoPointerAbstractDeclaratorContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.abstractPackDeclarator`.
	 * @param ctx the parse tree
	 */
	enterAbstractPackDeclarator?: (ctx: AbstractPackDeclaratorContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.abstractPackDeclarator`.
	 * @param ctx the parse tree
	 */
	exitAbstractPackDeclarator?: (ctx: AbstractPackDeclaratorContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.noPointerAbstractPackDeclarator`.
	 * @param ctx the parse tree
	 */
	enterNoPointerAbstractPackDeclarator?: (ctx: NoPointerAbstractPackDeclaratorContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.noPointerAbstractPackDeclarator`.
	 * @param ctx the parse tree
	 */
	exitNoPointerAbstractPackDeclarator?: (ctx: NoPointerAbstractPackDeclaratorContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.parameterDeclarationClause`.
	 * @param ctx the parse tree
	 */
	enterParameterDeclarationClause?: (ctx: ParameterDeclarationClauseContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.parameterDeclarationClause`.
	 * @param ctx the parse tree
	 */
	exitParameterDeclarationClause?: (ctx: ParameterDeclarationClauseContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.parameterDeclarationList`.
	 * @param ctx the parse tree
	 */
	enterParameterDeclarationList?: (ctx: ParameterDeclarationListContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.parameterDeclarationList`.
	 * @param ctx the parse tree
	 */
	exitParameterDeclarationList?: (ctx: ParameterDeclarationListContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.parameterDeclaration`.
	 * @param ctx the parse tree
	 */
	enterParameterDeclaration?: (ctx: ParameterDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.parameterDeclaration`.
	 * @param ctx the parse tree
	 */
	exitParameterDeclaration?: (ctx: ParameterDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.functionDefinition`.
	 * @param ctx the parse tree
	 */
	enterFunctionDefinition?: (ctx: FunctionDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.functionDefinition`.
	 * @param ctx the parse tree
	 */
	exitFunctionDefinition?: (ctx: FunctionDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.functionBody`.
	 * @param ctx the parse tree
	 */
	enterFunctionBody?: (ctx: FunctionBodyContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.functionBody`.
	 * @param ctx the parse tree
	 */
	exitFunctionBody?: (ctx: FunctionBodyContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.initializer`.
	 * @param ctx the parse tree
	 */
	enterInitializer?: (ctx: InitializerContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.initializer`.
	 * @param ctx the parse tree
	 */
	exitInitializer?: (ctx: InitializerContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.braceOrEqualInitializer`.
	 * @param ctx the parse tree
	 */
	enterBraceOrEqualInitializer?: (ctx: BraceOrEqualInitializerContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.braceOrEqualInitializer`.
	 * @param ctx the parse tree
	 */
	exitBraceOrEqualInitializer?: (ctx: BraceOrEqualInitializerContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.initializerClause`.
	 * @param ctx the parse tree
	 */
	enterInitializerClause?: (ctx: InitializerClauseContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.initializerClause`.
	 * @param ctx the parse tree
	 */
	exitInitializerClause?: (ctx: InitializerClauseContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.initializerList`.
	 * @param ctx the parse tree
	 */
	enterInitializerList?: (ctx: InitializerListContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.initializerList`.
	 * @param ctx the parse tree
	 */
	exitInitializerList?: (ctx: InitializerListContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.bracedInitList`.
	 * @param ctx the parse tree
	 */
	enterBracedInitList?: (ctx: BracedInitListContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.bracedInitList`.
	 * @param ctx the parse tree
	 */
	exitBracedInitList?: (ctx: BracedInitListContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.className`.
	 * @param ctx the parse tree
	 */
	enterClassName?: (ctx: ClassNameContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.className`.
	 * @param ctx the parse tree
	 */
	exitClassName?: (ctx: ClassNameContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.classSpecifier`.
	 * @param ctx the parse tree
	 */
	enterClassSpecifier?: (ctx: ClassSpecifierContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.classSpecifier`.
	 * @param ctx the parse tree
	 */
	exitClassSpecifier?: (ctx: ClassSpecifierContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.classHead`.
	 * @param ctx the parse tree
	 */
	enterClassHead?: (ctx: ClassHeadContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.classHead`.
	 * @param ctx the parse tree
	 */
	exitClassHead?: (ctx: ClassHeadContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.classHeadName`.
	 * @param ctx the parse tree
	 */
	enterClassHeadName?: (ctx: ClassHeadNameContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.classHeadName`.
	 * @param ctx the parse tree
	 */
	exitClassHeadName?: (ctx: ClassHeadNameContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.classVirtSpecifier`.
	 * @param ctx the parse tree
	 */
	enterClassVirtSpecifier?: (ctx: ClassVirtSpecifierContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.classVirtSpecifier`.
	 * @param ctx the parse tree
	 */
	exitClassVirtSpecifier?: (ctx: ClassVirtSpecifierContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.classKey`.
	 * @param ctx the parse tree
	 */
	enterClassKey?: (ctx: ClassKeyContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.classKey`.
	 * @param ctx the parse tree
	 */
	exitClassKey?: (ctx: ClassKeyContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.memberSpecification`.
	 * @param ctx the parse tree
	 */
	enterMemberSpecification?: (ctx: MemberSpecificationContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.memberSpecification`.
	 * @param ctx the parse tree
	 */
	exitMemberSpecification?: (ctx: MemberSpecificationContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.memberdeclaration`.
	 * @param ctx the parse tree
	 */
	enterMemberdeclaration?: (ctx: MemberdeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.memberdeclaration`.
	 * @param ctx the parse tree
	 */
	exitMemberdeclaration?: (ctx: MemberdeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.memberDeclaratorList`.
	 * @param ctx the parse tree
	 */
	enterMemberDeclaratorList?: (ctx: MemberDeclaratorListContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.memberDeclaratorList`.
	 * @param ctx the parse tree
	 */
	exitMemberDeclaratorList?: (ctx: MemberDeclaratorListContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.memberDeclarator`.
	 * @param ctx the parse tree
	 */
	enterMemberDeclarator?: (ctx: MemberDeclaratorContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.memberDeclarator`.
	 * @param ctx the parse tree
	 */
	exitMemberDeclarator?: (ctx: MemberDeclaratorContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.virtualSpecifierSeq`.
	 * @param ctx the parse tree
	 */
	enterVirtualSpecifierSeq?: (ctx: VirtualSpecifierSeqContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.virtualSpecifierSeq`.
	 * @param ctx the parse tree
	 */
	exitVirtualSpecifierSeq?: (ctx: VirtualSpecifierSeqContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.virtualSpecifier`.
	 * @param ctx the parse tree
	 */
	enterVirtualSpecifier?: (ctx: VirtualSpecifierContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.virtualSpecifier`.
	 * @param ctx the parse tree
	 */
	exitVirtualSpecifier?: (ctx: VirtualSpecifierContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.pureSpecifier`.
	 * @param ctx the parse tree
	 */
	enterPureSpecifier?: (ctx: PureSpecifierContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.pureSpecifier`.
	 * @param ctx the parse tree
	 */
	exitPureSpecifier?: (ctx: PureSpecifierContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.baseClause`.
	 * @param ctx the parse tree
	 */
	enterBaseClause?: (ctx: BaseClauseContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.baseClause`.
	 * @param ctx the parse tree
	 */
	exitBaseClause?: (ctx: BaseClauseContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.baseSpecifierList`.
	 * @param ctx the parse tree
	 */
	enterBaseSpecifierList?: (ctx: BaseSpecifierListContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.baseSpecifierList`.
	 * @param ctx the parse tree
	 */
	exitBaseSpecifierList?: (ctx: BaseSpecifierListContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.baseSpecifier`.
	 * @param ctx the parse tree
	 */
	enterBaseSpecifier?: (ctx: BaseSpecifierContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.baseSpecifier`.
	 * @param ctx the parse tree
	 */
	exitBaseSpecifier?: (ctx: BaseSpecifierContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.classOrDeclType`.
	 * @param ctx the parse tree
	 */
	enterClassOrDeclType?: (ctx: ClassOrDeclTypeContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.classOrDeclType`.
	 * @param ctx the parse tree
	 */
	exitClassOrDeclType?: (ctx: ClassOrDeclTypeContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.baseTypeSpecifier`.
	 * @param ctx the parse tree
	 */
	enterBaseTypeSpecifier?: (ctx: BaseTypeSpecifierContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.baseTypeSpecifier`.
	 * @param ctx the parse tree
	 */
	exitBaseTypeSpecifier?: (ctx: BaseTypeSpecifierContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.accessSpecifier`.
	 * @param ctx the parse tree
	 */
	enterAccessSpecifier?: (ctx: AccessSpecifierContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.accessSpecifier`.
	 * @param ctx the parse tree
	 */
	exitAccessSpecifier?: (ctx: AccessSpecifierContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.conversionFunctionId`.
	 * @param ctx the parse tree
	 */
	enterConversionFunctionId?: (ctx: ConversionFunctionIdContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.conversionFunctionId`.
	 * @param ctx the parse tree
	 */
	exitConversionFunctionId?: (ctx: ConversionFunctionIdContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.conversionTypeId`.
	 * @param ctx the parse tree
	 */
	enterConversionTypeId?: (ctx: ConversionTypeIdContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.conversionTypeId`.
	 * @param ctx the parse tree
	 */
	exitConversionTypeId?: (ctx: ConversionTypeIdContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.conversionDeclarator`.
	 * @param ctx the parse tree
	 */
	enterConversionDeclarator?: (ctx: ConversionDeclaratorContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.conversionDeclarator`.
	 * @param ctx the parse tree
	 */
	exitConversionDeclarator?: (ctx: ConversionDeclaratorContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.constructorInitializer`.
	 * @param ctx the parse tree
	 */
	enterConstructorInitializer?: (ctx: ConstructorInitializerContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.constructorInitializer`.
	 * @param ctx the parse tree
	 */
	exitConstructorInitializer?: (ctx: ConstructorInitializerContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.memInitializerList`.
	 * @param ctx the parse tree
	 */
	enterMemInitializerList?: (ctx: MemInitializerListContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.memInitializerList`.
	 * @param ctx the parse tree
	 */
	exitMemInitializerList?: (ctx: MemInitializerListContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.memInitializer`.
	 * @param ctx the parse tree
	 */
	enterMemInitializer?: (ctx: MemInitializerContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.memInitializer`.
	 * @param ctx the parse tree
	 */
	exitMemInitializer?: (ctx: MemInitializerContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.meminitializerid`.
	 * @param ctx the parse tree
	 */
	enterMeminitializerid?: (ctx: MeminitializeridContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.meminitializerid`.
	 * @param ctx the parse tree
	 */
	exitMeminitializerid?: (ctx: MeminitializeridContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.operatorFunctionId`.
	 * @param ctx the parse tree
	 */
	enterOperatorFunctionId?: (ctx: OperatorFunctionIdContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.operatorFunctionId`.
	 * @param ctx the parse tree
	 */
	exitOperatorFunctionId?: (ctx: OperatorFunctionIdContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.literalOperatorId`.
	 * @param ctx the parse tree
	 */
	enterLiteralOperatorId?: (ctx: LiteralOperatorIdContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.literalOperatorId`.
	 * @param ctx the parse tree
	 */
	exitLiteralOperatorId?: (ctx: LiteralOperatorIdContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.templateDeclaration`.
	 * @param ctx the parse tree
	 */
	enterTemplateDeclaration?: (ctx: TemplateDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.templateDeclaration`.
	 * @param ctx the parse tree
	 */
	exitTemplateDeclaration?: (ctx: TemplateDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.templateparameterList`.
	 * @param ctx the parse tree
	 */
	enterTemplateparameterList?: (ctx: TemplateparameterListContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.templateparameterList`.
	 * @param ctx the parse tree
	 */
	exitTemplateparameterList?: (ctx: TemplateparameterListContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.templateParameter`.
	 * @param ctx the parse tree
	 */
	enterTemplateParameter?: (ctx: TemplateParameterContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.templateParameter`.
	 * @param ctx the parse tree
	 */
	exitTemplateParameter?: (ctx: TemplateParameterContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.typeParameter`.
	 * @param ctx the parse tree
	 */
	enterTypeParameter?: (ctx: TypeParameterContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.typeParameter`.
	 * @param ctx the parse tree
	 */
	exitTypeParameter?: (ctx: TypeParameterContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.simpleTemplateId`.
	 * @param ctx the parse tree
	 */
	enterSimpleTemplateId?: (ctx: SimpleTemplateIdContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.simpleTemplateId`.
	 * @param ctx the parse tree
	 */
	exitSimpleTemplateId?: (ctx: SimpleTemplateIdContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.templateId`.
	 * @param ctx the parse tree
	 */
	enterTemplateId?: (ctx: TemplateIdContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.templateId`.
	 * @param ctx the parse tree
	 */
	exitTemplateId?: (ctx: TemplateIdContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.templateName`.
	 * @param ctx the parse tree
	 */
	enterTemplateName?: (ctx: TemplateNameContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.templateName`.
	 * @param ctx the parse tree
	 */
	exitTemplateName?: (ctx: TemplateNameContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.templateArgumentList`.
	 * @param ctx the parse tree
	 */
	enterTemplateArgumentList?: (ctx: TemplateArgumentListContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.templateArgumentList`.
	 * @param ctx the parse tree
	 */
	exitTemplateArgumentList?: (ctx: TemplateArgumentListContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.templateArgument`.
	 * @param ctx the parse tree
	 */
	enterTemplateArgument?: (ctx: TemplateArgumentContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.templateArgument`.
	 * @param ctx the parse tree
	 */
	exitTemplateArgument?: (ctx: TemplateArgumentContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.typeNameSpecifier`.
	 * @param ctx the parse tree
	 */
	enterTypeNameSpecifier?: (ctx: TypeNameSpecifierContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.typeNameSpecifier`.
	 * @param ctx the parse tree
	 */
	exitTypeNameSpecifier?: (ctx: TypeNameSpecifierContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.explicitInstantiation`.
	 * @param ctx the parse tree
	 */
	enterExplicitInstantiation?: (ctx: ExplicitInstantiationContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.explicitInstantiation`.
	 * @param ctx the parse tree
	 */
	exitExplicitInstantiation?: (ctx: ExplicitInstantiationContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.explicitSpecialization`.
	 * @param ctx the parse tree
	 */
	enterExplicitSpecialization?: (ctx: ExplicitSpecializationContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.explicitSpecialization`.
	 * @param ctx the parse tree
	 */
	exitExplicitSpecialization?: (ctx: ExplicitSpecializationContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.tryBlock`.
	 * @param ctx the parse tree
	 */
	enterTryBlock?: (ctx: TryBlockContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.tryBlock`.
	 * @param ctx the parse tree
	 */
	exitTryBlock?: (ctx: TryBlockContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.functionTryBlock`.
	 * @param ctx the parse tree
	 */
	enterFunctionTryBlock?: (ctx: FunctionTryBlockContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.functionTryBlock`.
	 * @param ctx the parse tree
	 */
	exitFunctionTryBlock?: (ctx: FunctionTryBlockContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.handlerSeq`.
	 * @param ctx the parse tree
	 */
	enterHandlerSeq?: (ctx: HandlerSeqContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.handlerSeq`.
	 * @param ctx the parse tree
	 */
	exitHandlerSeq?: (ctx: HandlerSeqContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.handler`.
	 * @param ctx the parse tree
	 */
	enterHandler?: (ctx: HandlerContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.handler`.
	 * @param ctx the parse tree
	 */
	exitHandler?: (ctx: HandlerContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.exceptionDeclaration`.
	 * @param ctx the parse tree
	 */
	enterExceptionDeclaration?: (ctx: ExceptionDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.exceptionDeclaration`.
	 * @param ctx the parse tree
	 */
	exitExceptionDeclaration?: (ctx: ExceptionDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.throwExpression`.
	 * @param ctx the parse tree
	 */
	enterThrowExpression?: (ctx: ThrowExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.throwExpression`.
	 * @param ctx the parse tree
	 */
	exitThrowExpression?: (ctx: ThrowExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.exceptionSpecification`.
	 * @param ctx the parse tree
	 */
	enterExceptionSpecification?: (ctx: ExceptionSpecificationContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.exceptionSpecification`.
	 * @param ctx the parse tree
	 */
	exitExceptionSpecification?: (ctx: ExceptionSpecificationContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.dynamicExceptionSpecification`.
	 * @param ctx the parse tree
	 */
	enterDynamicExceptionSpecification?: (ctx: DynamicExceptionSpecificationContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.dynamicExceptionSpecification`.
	 * @param ctx the parse tree
	 */
	exitDynamicExceptionSpecification?: (ctx: DynamicExceptionSpecificationContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.typeIdList`.
	 * @param ctx the parse tree
	 */
	enterTypeIdList?: (ctx: TypeIdListContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.typeIdList`.
	 * @param ctx the parse tree
	 */
	exitTypeIdList?: (ctx: TypeIdListContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.noeExceptSpecification`.
	 * @param ctx the parse tree
	 */
	enterNoeExceptSpecification?: (ctx: NoeExceptSpecificationContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.noeExceptSpecification`.
	 * @param ctx the parse tree
	 */
	exitNoeExceptSpecification?: (ctx: NoeExceptSpecificationContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.theOperator`.
	 * @param ctx the parse tree
	 */
	enterTheOperator?: (ctx: TheOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.theOperator`.
	 * @param ctx the parse tree
	 */
	exitTheOperator?: (ctx: TheOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `CPPParser.literal`.
	 * @param ctx the parse tree
	 */
	enterLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Exit a parse tree produced by `CPPParser.literal`.
	 * @param ctx the parse tree
	 */
	exitLiteral?: (ctx: LiteralContext) => void;
}

