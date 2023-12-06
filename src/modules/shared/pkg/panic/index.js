export function panic(msg, logger) {
  logger.fatal(msg);
  process.exit(1);
}
