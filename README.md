Explanation:
    <br>
    file: index.js
     <br>
    I chose JavaScript, since the JSON is loaded into a JavaScript object, it seems best to use JavaScript to query JSON data.
     <br>
    I also use node.js for input entry (node index.js data.json find_type Data/Technology)
     <br>
    Because each instructions and its comparison was redundant, I wanted to use one for loop for the assignement.
     <br>
     So, I put them into hash pairs - setting instructions as keys and arrays of JSON category and comparison as values.
     <br>
    Because the comparison were in string, I created a object that holds function expression (compareSigns) to grab the comparison string and to evaluate the parameters.
     <br>
    I used for loop (O(n)) to iterate through JSON and find its matching values. And then, print out list of the companies and the total number of the companies.
 <br>
  <br>
Instructions that explains how to set up and run your project:
 <br>
In command line/terminal:
 <br>
git clone https://github.com/sushmamangalapally/B-C_CC SushmaMangalapallyCodingChallenge
 <br>
In command line, type npm install
 <br>
Go to the folder SushmaMangalapallyCodingChallenge
 <br>
Then for runnable solution:
 <br>
node index.js <\jsonfile> <\instruction> <\value>
 <br>
Example:
 <br>
    node index.js data.json find_type Data/Technology
     <br>
    node index.js data.json find_after 2000
     <br>
    node index.js data.json find_before 1999
     <br>
    node index.js data.json locate MD 
    <br>
For testing:
 <br>
    file: test/indexTest.js
     <br>
    I used Mocha/Chai for unit testing.
     <br>
    in command line, type:
     <br>
        npm run test