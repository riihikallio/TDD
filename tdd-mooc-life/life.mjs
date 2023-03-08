#! node

import { readFileSync } from 'node:fs';
import { Command } from 'commander';
import { Universe } from './src/universe.mjs';

// This is untestable code, but mostly boilerplate

const program = new Command();

program
  .name('life.mjs')
  .description('Run Conway\'s game of life for a number of rounds')
  .version('0.9')
  .argument('<file>', 'RLE encoded file')
  .option('-t, --ticks <number>', 'number of rounds', '1')
  .option('-p, --print', 'print as ASCII')
  .action((file, options) => {
    const data = readFileSync(file, 'utf-8');
    const uni = new Universe(data);
    uni.tick(parseInt(options.ticks));
    if (options.print) {
      console.log(uni.toString());
    } else {
      console.log(uni.encode());
    }
  });

program.parse();