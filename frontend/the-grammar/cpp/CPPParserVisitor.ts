// Generated from ./the-grammar/cpp/CPPParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `CPPParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface CPPParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `CPPParser.translationUnit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTranslationUnit?: (ctx: TranslationUnitContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimaryExpression?: (ctx: PrimaryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.idExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdExpression?: (ctx: IdExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.unqualifiedId`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnqualifiedId?: (ctx: UnqualifiedIdContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.qualifiedId`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQualifiedId?: (ctx: QualifiedIdContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.nestedNameSpecifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNestedNameSpecifier?: (ctx: NestedNameSpecifierContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.lambdaExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLambdaExpression?: (ctx: LambdaExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.lambdaIntroducer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLambdaIntroducer?: (ctx: LambdaIntroducerContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.lambdaCapture`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLambdaCapture?: (ctx: LambdaCaptureContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.captureDefault`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCaptureDefault?: (ctx: CaptureDefaultContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.captureList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCaptureList?: (ctx: CaptureListContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.capture`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCapture?: (ctx: CaptureContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.simpleCapture`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimpleCapture?: (ctx: SimpleCaptureContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.initcapture`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInitcapture?: (ctx: InitcaptureContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.lambdaDeclarator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLambdaDeclarator?: (ctx: LambdaDeclaratorContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.postfixExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPostfixExpression?: (ctx: PostfixExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.typeIdOfTheTypeId`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeIdOfTheTypeId?: (ctx: TypeIdOfTheTypeIdContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.expressionList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionList?: (ctx: ExpressionListContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.pseudoDestructorName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPseudoDestructorName?: (ctx: PseudoDestructorNameContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.unaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryExpression?: (ctx: UnaryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.unaryOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryOperator?: (ctx: UnaryOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.newExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNewExpression?: (ctx: NewExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.newPlacement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNewPlacement?: (ctx: NewPlacementContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.newTypeId`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNewTypeId?: (ctx: NewTypeIdContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.newDeclarator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNewDeclarator?: (ctx: NewDeclaratorContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.noPointerNewDeclarator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNoPointerNewDeclarator?: (ctx: NoPointerNewDeclaratorContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.newInitializer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNewInitializer?: (ctx: NewInitializerContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.deleteExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeleteExpression?: (ctx: DeleteExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.noExceptExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNoExceptExpression?: (ctx: NoExceptExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.castExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCastExpression?: (ctx: CastExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.pointerMemberExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPointerMemberExpression?: (ctx: PointerMemberExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.multiplicativeExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.additiveExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdditiveExpression?: (ctx: AdditiveExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.shiftExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShiftExpression?: (ctx: ShiftExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.shiftOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShiftOperator?: (ctx: ShiftOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.relationalExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelationalExpression?: (ctx: RelationalExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.equalityExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEqualityExpression?: (ctx: EqualityExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.andExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAndExpression?: (ctx: AndExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.exclusiveOrExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExclusiveOrExpression?: (ctx: ExclusiveOrExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.inclusiveOrExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInclusiveOrExpression?: (ctx: InclusiveOrExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.logicalAndExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalAndExpression?: (ctx: LogicalAndExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.logicalOrExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalOrExpression?: (ctx: LogicalOrExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.conditionalExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditionalExpression?: (ctx: ConditionalExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.assignmentExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignmentExpression?: (ctx: AssignmentExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.assignmentOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignmentOperator?: (ctx: AssignmentOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.constantExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstantExpression?: (ctx: ConstantExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.labeledStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLabeledStatement?: (ctx: LabeledStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.expressionStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionStatement?: (ctx: ExpressionStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.compoundStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompoundStatement?: (ctx: CompoundStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.statementSeq`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatementSeq?: (ctx: StatementSeqContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.selectionStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectionStatement?: (ctx: SelectionStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.condition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCondition?: (ctx: ConditionContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.iterationStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIterationStatement?: (ctx: IterationStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.forInitStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForInitStatement?: (ctx: ForInitStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.forRangeDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForRangeDeclaration?: (ctx: ForRangeDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.forRangeInitializer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForRangeInitializer?: (ctx: ForRangeInitializerContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.jumpStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJumpStatement?: (ctx: JumpStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.declarationStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclarationStatement?: (ctx: DeclarationStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.declarationseq`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclarationseq?: (ctx: DeclarationseqContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclaration?: (ctx: DeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.blockDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlockDeclaration?: (ctx: BlockDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.aliasDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAliasDeclaration?: (ctx: AliasDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.simpleDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimpleDeclaration?: (ctx: SimpleDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.staticAssertDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStaticAssertDeclaration?: (ctx: StaticAssertDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.emptyDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEmptyDeclaration?: (ctx: EmptyDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.attributeDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttributeDeclaration?: (ctx: AttributeDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.declSpecifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclSpecifier?: (ctx: DeclSpecifierContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.declSpecifierSeq`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclSpecifierSeq?: (ctx: DeclSpecifierSeqContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.storageClassSpecifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStorageClassSpecifier?: (ctx: StorageClassSpecifierContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.functionSpecifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionSpecifier?: (ctx: FunctionSpecifierContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.typedefName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypedefName?: (ctx: TypedefNameContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.typeSpecifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeSpecifier?: (ctx: TypeSpecifierContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.trailingTypeSpecifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTrailingTypeSpecifier?: (ctx: TrailingTypeSpecifierContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.typeSpecifierSeq`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeSpecifierSeq?: (ctx: TypeSpecifierSeqContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.trailingTypeSpecifierSeq`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTrailingTypeSpecifierSeq?: (ctx: TrailingTypeSpecifierSeqContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.simpleTypeLengthModifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimpleTypeLengthModifier?: (ctx: SimpleTypeLengthModifierContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.simpleTypeSignednessModifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimpleTypeSignednessModifier?: (ctx: SimpleTypeSignednessModifierContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.simpleTypeSpecifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimpleTypeSpecifier?: (ctx: SimpleTypeSpecifierContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.theTypeName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTheTypeName?: (ctx: TheTypeNameContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.decltypeSpecifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDecltypeSpecifier?: (ctx: DecltypeSpecifierContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.elaboratedTypeSpecifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElaboratedTypeSpecifier?: (ctx: ElaboratedTypeSpecifierContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.enumName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumName?: (ctx: EnumNameContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.enumSpecifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumSpecifier?: (ctx: EnumSpecifierContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.enumHead`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumHead?: (ctx: EnumHeadContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.opaqueEnumDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOpaqueEnumDeclaration?: (ctx: OpaqueEnumDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.enumkey`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumkey?: (ctx: EnumkeyContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.enumbase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumbase?: (ctx: EnumbaseContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.enumeratorList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumeratorList?: (ctx: EnumeratorListContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.enumeratorDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumeratorDefinition?: (ctx: EnumeratorDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.enumerator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumerator?: (ctx: EnumeratorContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.namespaceName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamespaceName?: (ctx: NamespaceNameContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.originalNamespaceName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOriginalNamespaceName?: (ctx: OriginalNamespaceNameContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.namespaceDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamespaceDefinition?: (ctx: NamespaceDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.namespaceAlias`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamespaceAlias?: (ctx: NamespaceAliasContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.namespaceAliasDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamespaceAliasDefinition?: (ctx: NamespaceAliasDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.qualifiednamespacespecifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQualifiednamespacespecifier?: (ctx: QualifiednamespacespecifierContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.usingDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUsingDeclaration?: (ctx: UsingDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.usingDirective`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUsingDirective?: (ctx: UsingDirectiveContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.asmDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAsmDefinition?: (ctx: AsmDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.linkageSpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLinkageSpecification?: (ctx: LinkageSpecificationContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.attributeSpecifierSeq`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttributeSpecifierSeq?: (ctx: AttributeSpecifierSeqContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.attributeSpecifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttributeSpecifier?: (ctx: AttributeSpecifierContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.alignmentspecifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlignmentspecifier?: (ctx: AlignmentspecifierContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.attributeList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttributeList?: (ctx: AttributeListContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.attribute`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttribute?: (ctx: AttributeContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.attributeNamespace`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttributeNamespace?: (ctx: AttributeNamespaceContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.attributeArgumentClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttributeArgumentClause?: (ctx: AttributeArgumentClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.balancedTokenSeq`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBalancedTokenSeq?: (ctx: BalancedTokenSeqContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.balancedtoken`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBalancedtoken?: (ctx: BalancedtokenContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.initDeclaratorList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInitDeclaratorList?: (ctx: InitDeclaratorListContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.initDeclarator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInitDeclarator?: (ctx: InitDeclaratorContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.declarator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclarator?: (ctx: DeclaratorContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.pointerDeclarator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPointerDeclarator?: (ctx: PointerDeclaratorContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.noPointerDeclarator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNoPointerDeclarator?: (ctx: NoPointerDeclaratorContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.parametersAndQualifiers`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParametersAndQualifiers?: (ctx: ParametersAndQualifiersContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.trailingReturnType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTrailingReturnType?: (ctx: TrailingReturnTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.pointerOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPointerOperator?: (ctx: PointerOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.cvqualifierseq`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCvqualifierseq?: (ctx: CvqualifierseqContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.cvQualifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCvQualifier?: (ctx: CvQualifierContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.refqualifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRefqualifier?: (ctx: RefqualifierContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.declaratorid`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclaratorid?: (ctx: DeclaratoridContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.theTypeId`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTheTypeId?: (ctx: TheTypeIdContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.abstractDeclarator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAbstractDeclarator?: (ctx: AbstractDeclaratorContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.pointerAbstractDeclarator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPointerAbstractDeclarator?: (ctx: PointerAbstractDeclaratorContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.noPointerAbstractDeclarator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNoPointerAbstractDeclarator?: (ctx: NoPointerAbstractDeclaratorContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.abstractPackDeclarator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAbstractPackDeclarator?: (ctx: AbstractPackDeclaratorContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.noPointerAbstractPackDeclarator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNoPointerAbstractPackDeclarator?: (ctx: NoPointerAbstractPackDeclaratorContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.parameterDeclarationClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameterDeclarationClause?: (ctx: ParameterDeclarationClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.parameterDeclarationList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameterDeclarationList?: (ctx: ParameterDeclarationListContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.parameterDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameterDeclaration?: (ctx: ParameterDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.functionDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionDefinition?: (ctx: FunctionDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.functionBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionBody?: (ctx: FunctionBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.initializer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInitializer?: (ctx: InitializerContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.braceOrEqualInitializer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBraceOrEqualInitializer?: (ctx: BraceOrEqualInitializerContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.initializerClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInitializerClause?: (ctx: InitializerClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.initializerList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInitializerList?: (ctx: InitializerListContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.bracedInitList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBracedInitList?: (ctx: BracedInitListContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.className`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassName?: (ctx: ClassNameContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.classSpecifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassSpecifier?: (ctx: ClassSpecifierContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.classHead`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassHead?: (ctx: ClassHeadContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.classHeadName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassHeadName?: (ctx: ClassHeadNameContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.classVirtSpecifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassVirtSpecifier?: (ctx: ClassVirtSpecifierContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.classKey`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassKey?: (ctx: ClassKeyContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.memberSpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMemberSpecification?: (ctx: MemberSpecificationContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.memberdeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMemberdeclaration?: (ctx: MemberdeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.memberDeclaratorList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMemberDeclaratorList?: (ctx: MemberDeclaratorListContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.memberDeclarator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMemberDeclarator?: (ctx: MemberDeclaratorContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.virtualSpecifierSeq`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVirtualSpecifierSeq?: (ctx: VirtualSpecifierSeqContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.virtualSpecifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVirtualSpecifier?: (ctx: VirtualSpecifierContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.pureSpecifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPureSpecifier?: (ctx: PureSpecifierContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.baseClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBaseClause?: (ctx: BaseClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.baseSpecifierList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBaseSpecifierList?: (ctx: BaseSpecifierListContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.baseSpecifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBaseSpecifier?: (ctx: BaseSpecifierContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.classOrDeclType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassOrDeclType?: (ctx: ClassOrDeclTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.baseTypeSpecifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBaseTypeSpecifier?: (ctx: BaseTypeSpecifierContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.accessSpecifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAccessSpecifier?: (ctx: AccessSpecifierContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.conversionFunctionId`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConversionFunctionId?: (ctx: ConversionFunctionIdContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.conversionTypeId`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConversionTypeId?: (ctx: ConversionTypeIdContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.conversionDeclarator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConversionDeclarator?: (ctx: ConversionDeclaratorContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.constructorInitializer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstructorInitializer?: (ctx: ConstructorInitializerContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.memInitializerList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMemInitializerList?: (ctx: MemInitializerListContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.memInitializer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMemInitializer?: (ctx: MemInitializerContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.meminitializerid`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMeminitializerid?: (ctx: MeminitializeridContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.operatorFunctionId`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOperatorFunctionId?: (ctx: OperatorFunctionIdContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.literalOperatorId`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteralOperatorId?: (ctx: LiteralOperatorIdContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.templateDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTemplateDeclaration?: (ctx: TemplateDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.templateparameterList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTemplateparameterList?: (ctx: TemplateparameterListContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.templateParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTemplateParameter?: (ctx: TemplateParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.typeParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeParameter?: (ctx: TypeParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.simpleTemplateId`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimpleTemplateId?: (ctx: SimpleTemplateIdContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.templateId`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTemplateId?: (ctx: TemplateIdContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.templateName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTemplateName?: (ctx: TemplateNameContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.templateArgumentList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTemplateArgumentList?: (ctx: TemplateArgumentListContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.templateArgument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTemplateArgument?: (ctx: TemplateArgumentContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.typeNameSpecifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeNameSpecifier?: (ctx: TypeNameSpecifierContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.explicitInstantiation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExplicitInstantiation?: (ctx: ExplicitInstantiationContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.explicitSpecialization`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExplicitSpecialization?: (ctx: ExplicitSpecializationContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.tryBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTryBlock?: (ctx: TryBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.functionTryBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionTryBlock?: (ctx: FunctionTryBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.handlerSeq`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHandlerSeq?: (ctx: HandlerSeqContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.handler`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHandler?: (ctx: HandlerContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.exceptionDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExceptionDeclaration?: (ctx: ExceptionDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.throwExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitThrowExpression?: (ctx: ThrowExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.exceptionSpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExceptionSpecification?: (ctx: ExceptionSpecificationContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.dynamicExceptionSpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDynamicExceptionSpecification?: (ctx: DynamicExceptionSpecificationContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.typeIdList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeIdList?: (ctx: TypeIdListContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.noeExceptSpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNoeExceptSpecification?: (ctx: NoeExceptSpecificationContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.theOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTheOperator?: (ctx: TheOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `CPPParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral?: (ctx: LiteralContext) => Result;
}

