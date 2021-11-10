const { execSync } = require('child_process');

function setUpGitHooks() {
	try {
		execSync('git config --local core.hooksPath .githooks/', { stdio: 'ignore' });
		return true;
	} catch (e) {
		return false;
	}
}

if (setUpGitHooks()) {
	console.log('Git hooks set up successfully.');
} else {
	console.log('Git hooks not set up!');
}
