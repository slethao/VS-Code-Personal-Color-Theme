// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed


let musicStatus = false;

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "personaltheme" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	const disposable = vscode.commands.registerCommand('personaltheme.colorPlatteOne', function () {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('This is PersonalTheme One!');
	});

	//TODO making a new command
	const disposableTwo = vscode.commands.registerCommand('personalTheme.colorPlatteTwo', async function () {
		vscode.window.showInformationMessage('This is personalTheme Two!');
		const requestMade = await vscode.window.showInputBox(
			{
				prompt: 'Enter in y or n',
				placeHolder: 'Do you want to still play music?'
			});
		try
		{
			let formatRequest = requestMade.toLowerCase();
			let decisionMap = new Map([
			['y', "Music Mode Activate!"],
			['n', "Music Mode Deactivate!"],
			["", "The request was denied."],
			]); 
			vscode.window.showInformationMessage(decisionMap.get(formatRequest));
		}
		catch (error)
		{
			vscode.window.showInformationMessage('Invalid Request!');
		}
	});


	//TODO push the new command into the subscription
	context.subscriptions.push(disposableTwo);

	context.subscriptions.push(disposable);
		
	
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
