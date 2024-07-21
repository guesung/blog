import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';
import * as os from 'os';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('snippetGenerator.generateSnippet', async () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showWarningMessage('No active text editor.');
            return;
        }

        const selection = editor.selection;
        const text = editor.document.getText(selection);

        if (!text) {
            vscode.window.showWarningMessage('No text selected. Please select some code first.');
            return;
        }

        const languageId = editor.document.languageId;
        const snippetName = await vscode.window.showInputBox({
            prompt: "Enter a name for your snippet"
        });

        if (!snippetName) {
            vscode.window.showWarningMessage('Snippet name is required.');
            return;
        }

        const snippetPrefix = await vscode.window.showInputBox({
            prompt: "Enter a prefix for your snippet"
        });

        if (!snippetPrefix) {
            vscode.window.showWarningMessage('Snippet prefix is required.');
            return;
        }

        const snippetObject = {
            [snippetName]: {
                prefix: snippetPrefix,
                body: text.split('\n'),
                description: `Generated snippet: ${snippetName}`
            }
        };

        const snippetsPath = getSnippetsPath(languageId);

        const snippetsDir = path.dirname(snippetsPath);
        if (!fs.existsSync(snippetsDir)) {
            fs.mkdirSync(snippetsDir, { recursive: true });
        }

        let existingSnippets = await readSnippetsFile(snippetsPath);
        const updatedSnippets = { ...existingSnippets, ...snippetObject };

        try {
            fs.writeFileSync(snippetsPath, JSON.stringify(updatedSnippets, null, 2));

            const message = `Snippet '${snippetName}' added successfully!`;
            vscode.window.showInformationMessage(message, 'Open Snippet File').then(selection => {
                if (selection === 'Open Snippet File') {
                    vscode.workspace.openTextDocument(snippetsPath).then(doc => {
                        vscode.window.showTextDocument(doc);
                    });
                }
            });
        } catch (error) {
            vscode.window.showErrorMessage(`Error saving snippet: ${error.message}`);
        }
    });

    context.subscriptions.push(disposable);
}

async function readSnippetsFile(filePath: string): Promise<object> {
    if (!fs.existsSync(filePath)) {
        return {};
    }

    try {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(fileContent);
    } catch (error:Error) {
        const message = `Error reading snippets file: ${error.message}. Do you want to reset the file?`;
        const reset = await vscode.window.showWarningMessage(message, 'Reset File', 'Cancel');
        
        if (reset === 'Reset File') {
            try {
                fs.writeFileSync(filePath, '{}');
                vscode.window.showInformationMessage('Snippets file has been reset.');
                return {};
            } catch (writeError) {
                vscode.window.showErrorMessage(`Failed to reset snippets file: ${writeError.message}`);
                return {};
            }
        } else {
            throw new Error('Unable to read or reset snippets file. Operation cancelled.');
        }
    }
}

function getSnippetsPath(languageId: string): string {
    const homeDir = os.homedir();
    let snippetsDir: string;

    switch (process.platform) {
        case 'darwin':
            snippetsDir = path.join(homeDir, 'Library', 'Application Support', 'Code', 'User', 'snippets');
            break;
        case 'win32':
            snippetsDir = path.join(homeDir, 'AppData', 'Roaming', 'Code', 'User', 'snippets');
            break;
        default: // linux and others
            snippetsDir = path.join(homeDir, '.config', 'Code', 'User', 'snippets');
            break;
    }

    return path.join(snippetsDir, `${languageId}.json`);
}

export function deactivate() {}

// A system error occurred (ENOENT: no such file or directory, open '/Users/home/Library/Application Support/Code/User/globalStorage/undefined_publisher.snippet-generator/html.json')
// ~/Library/Application Support/Code/User/snippets/html.json

// A system error occurred (ENOENT: no such file or directory, open '/Users/home/Library/Application Support/Code/User/globalStorage/guesung.snippet-generator/html.json')