Package.describe({
	name: 'convexset:match-extensions',
	version: '0.1.1_2',
	summary: 'Extensions for Match from the check package',
	git: 'https://github.com/convexset/meteor-match-extensions',
	documentation: '../../README.md'
});

Package.onUse(function(api) {
	api.versionsFrom('1.2.0.2');
	api.use([
		'ecmascript', 'underscore',
		'check',
		'convexset:package-utils@0.1.14',
	]);
	api.addFiles(['match-extensions.js']);
});

Package.onTest(function(api) {
	api.use(['tinytest', 'test-helpers']);
	api.use(['ecmascript', 'underscore', 'check', 'convexset:match-extensions']);
	api.addFiles(['tests.js']);
});