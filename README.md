Explanation:
    file: index.js
    I chose JavaScript, since the JSON is loaded into a JavaScript object, it seems best to use JavaScript to query JSON data.
    I also use node.js for input entry (node index.js data.json find_type Data/Technology)
    Because each instructions and its comparison was redundant, I wanted to use one for loop for the assignement. So, I put them into hash pairs - setting instructions as keys and arrays of JSON category and comparison as values.
    Because the comparison were in string, I created a object that holds function expression (compareSigns) to grab the comparison string and to evaluate the parameters.
    I used for loop (O(n)) to iterate through JSON and find its matching values. And then, print out list of the companies and the total number of the companies.

Instructions that explains how to set up and run your project:
In command line/terminal:
git clone https://github.com/sushmamangalapally/B-C_CC SushmaMangalapallyCodingChallenge
In command line, type npm install
Go to the folder SushmaMangalapallyCodingChallenge

Then for runnable solution:
node index.js <jsonfile> <instruction> <value>
Example:
    node index.js data.json find_type Data/Technology
    node index.js data.json find_after 2000
    node index.js data.json find_before 1999
    node index.js data.json locate MD

For testing:
    file: test/indexTest.js
    I used Mocha/Chai for unit testing.
    in command line, type:
        npm run test