#!/usr/bin/env node

import minimist from "minimist";
import { DateTime } from "luxon";

const today = DateTime.now();
const args = minimist(process.argv.slice(2));
const year = args.y ? parseInt(args.y) : today.year;
const month = args.m ? parseInt(args.m) : today.month;

if (isNaN(year) || year < 1970 || year > 2100) {
  console.error("年は1970年から2100年の範囲で指定してください。");
  process.exit(1);
}
if (isNaN(month) || month < 1 || month > 12) {
  console.error("月は1から12の範囲で指定してください。");
  process.exit(1);
}

const firstDay = DateTime.local(year, month, 1);
const lastDay = firstDay.endOf("month");

console.log(`      ${month}月 ${year}`);
console.log("日 月 火 水 木 金 土");

process.stdout.write("   ".repeat(firstDay.weekday % 7));

for (let day = 1; day <= lastDay.day; day++) {
  let dayString = day.toString().padStart(2, " ");

  if ((firstDay.weekday + day - 1) % 7 === 6) {
    console.log(dayString);
  } else {
    process.stdout.write(dayString + " ");
  }
}
console.log();
