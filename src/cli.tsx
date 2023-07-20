#!/usr/bin/env node
import React from "react";
import { render } from "ink";
import { Command } from "commander";

import App from "./app.js";

const command = new Command();

interface IOptionValues {
	name: string;
}

command.option("-n, --name <name>", "name to display");
command.parse(process.argv);

const options = command.opts<IOptionValues>();

render(<App name={options.name} />);
