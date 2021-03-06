#!/usr/bin/env node
import {processCommandLineOptions} from "./util/command-line";
import chalk from "chalk";

function main() {
    try{
        processCommandLineOptions();
    }
    catch(e) {
        console.log(chalk.bgRedBright("UNHANDLED EXCEPTION: " + e));
    }
}

main();
