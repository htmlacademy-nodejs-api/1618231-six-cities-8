import { HelpCommand, VersionCommand, CLIApplication } from './cli/index.js';

const bootstrap = () => {
  const cliApplication = new CLIApplication();
  cliApplication.registerCommands([
    new HelpCommand(),
    new VersionCommand(),
  ]);

  cliApplication.processCommand(process.argv);
};

bootstrap();
