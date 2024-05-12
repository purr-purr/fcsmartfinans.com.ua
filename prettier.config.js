module.exports = {
	printWidth: 80,
	useTabs: true,
	tabWidth: 1,
	singleQuote: true,
	bracketSpacing: true,
	trailingComma: 'all',
	semi: true,
	importOrder: [
		'^react',
		'^next',
		'',
		'<THIRD_PARTY_MODULES>',
		'',
		'^@modules/common/hooks(.*)$',
		'',
		'^@styles/(.*)$',
		'^@utils/(.*)$',
		'',
		'^@public/(.*)$',
		'',
		'^[./]',
		'',
		'^@(.*)/(.*)/types(.*)$',
		'',
		'',
		'^@modules/(.*)/assets/(.*)$',
		'',
	],
	importOrderBuiltinModulesToTop: true,
	importOrderCaseInsensitive: true,
	importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
	importOrderMergeDuplicateImports: true,
	importOrderCombineTypeAndValueImports: true,
	importOrderSeparation: false,
	importOrderSortSpecifiers: true,
};
