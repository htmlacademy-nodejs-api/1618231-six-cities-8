import { HelpCommand, VersionCommand, CLIApplication, ImportCommand } from './cli/index.js';

const bootstrap = () => {
  const cliApplication = new CLIApplication();
  cliApplication.registerCommands([
    new HelpCommand(),
    new VersionCommand(),
    new ImportCommand(),
  ]);

  cliApplication.processCommand(process.argv);
};

bootstrap();
