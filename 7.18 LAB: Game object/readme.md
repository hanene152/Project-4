Modify the game object in index.js:

Add two properties: lives - initially 3, and coins - initially 0.
Add a getter called points that returns coins * 10.
Add a playerDies() method that subtracts 1 from lives if lives is greater than 0.
Add a newGame() method that sets lives to 3 and coins to 0.
The index.js file includes several statements that are currently commented-out. When the game object is completely implemented, remove the comments and run the code to verify the game object works correctly. Expected output:

Testing game object...
lives = 3
coins = 0
points = 0
points = 20
lives = 2
lives = 0
lives = 3
coins = 0
