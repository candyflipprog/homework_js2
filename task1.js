"use strict";

const email = "robin_singh@example.com";

const domain = email.slice(email.indexOf("@"));

const nameEmail = email.slice(0, domain.length / 2 - 1);

const result = nameEmail + "..." + domain;

console.log(result);