# cron-converter

Cron string parser for node and the browser

Forked from https://github.com/elvanja/cron-converter

Made to:
- remove support for SUN == 7
- month range: 1 - 11

TODO:
- fix `0 0 * * */100 *` and `0 0 * * * */100`, all units with alternatives do not detect malformed expressions
