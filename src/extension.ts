// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "quick-paste" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	const disposable = vscode.commands.registerCommand('quick-paste.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from quick-paste!');
	});

	const copyFileDisposable = vscode.commands.registerCommand('extension.copyCurrentFile', async () => {
		const editor = vscode.window.activeTextEditor;

		if (!editor) {
			return;
		}

		const text = editor.document.getText();
		await vscode.env.clipboard.writeText(text);

		vscode.window.showInformationMessage('File copied!');
	});

	context.subscriptions.push(disposable);
	context.subscriptions.push(copyFileDisposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
