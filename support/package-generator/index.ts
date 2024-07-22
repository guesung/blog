import inquirer from 'inquirer';
import fs from 'fs';
import path from 'path';

async function createProject(){
  const answers = await inquirer.prompt({
    type: 'input',
    name: 'project'
  });
  const { projectName, framework, folder } = answers;
}