OBJECTIVE -> Node.js application to add records from Excel to mongo database. 
TECH STACK -> Node.js, MongoDB 
TECHNICAL DESIGN -> Backend included logical separation of Model, View & Controller. Demonstrate the use of callbacks. 
DATA HANDLING -> ● Add all properties defined in Excel into a mongo collection . All properties can be stored as strings or any data type of your choice.
async.eachSeries -> Used async.eachSeries to process one candidate at a time, after reading from excel.
UNIQUE RECORD -> Email id is unique. Duplicacy check has done for each row. Skipped row if duplicate exists in database.
RESPONSE -> Success if excel is processed.
