#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import {differenceInSeconds} from "date-fns";

let input = await inquirer.prompt([{
    name: "sec",
    type: "number",
    message: "Enter time in seconds"
}])

let time:number = input.sec;

function startCounter(val:number){

    let initialTime = new Date();

    let intervalTime = new Date().setSeconds(initialTime.getSeconds() + (val + 2))

    let intervalTimeFormat = new Date(intervalTime);

    setInterval(()=>{
        let currentTime = new Date();
        let timeDiff = differenceInSeconds(intervalTimeFormat, currentTime);

        if(timeDiff<=0){
            console.log(chalk.greenBright("Time Over!!!"))
            process.exit();
        }

        let minute = Math.floor(timeDiff/60);
        let seconds = Math.floor(timeDiff%60);

        console.clear();
        console.log(chalk.red(`${String(minute).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`))

    } , 1000)
}

startCounter(time);
