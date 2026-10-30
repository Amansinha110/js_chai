const accountId = 3424324
let accountEmail = "amansinha@example.com"
var accountPassword = "securepassword123"
accountcity = "New York"
let accountstate //it value show undefined because we have not assigned any value to it yet.

//change
//accountId = 23
//console.log(accountId) // This will throw an error because accountId is a constant and cannot be reassigned.

accountEmail = "amansinhaa779@gmail.com"
accountPassword = "newsecurepassword456"
accountcity = "Los Angeles"

console.table([accountId, accountEmail, accountPassword, accountcity, accountstate])

/*
Do not use var to declare variables. Use let and const instead.
Because var is function-scoped and can lead to unexpected behavior, it's better to use let (block-scoped) and const (block-scoped and immutable) for variable declarations.
*/