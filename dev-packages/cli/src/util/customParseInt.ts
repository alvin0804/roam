// import commander from "commander";
const commander = require("commander");

export default function customParseInt(value: any): number | unknown {
  const parsedValue = parseInt(value, 10);
  if (isNaN(parsedValue)) {
    throw new commander.InvalidArgumentError('Not a number.');
  }
  return parsedValue;
}
