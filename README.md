## These File Provides functions specially for php developers

|function name|purpose|parameters| return |
|--|--|--|--|
| isEmpty |checks if these object is empty or not  | Object [json] presents the object I'll check | Boolean
| isset |  checks if variable exists or not| ( * ) variable:  variable wanted to be checked|Boolean
| empty | checks whether object or array are empty or not |  {object/array} variable [variable wanted to be checked]|Boolean
| in_array | checks if needle exists in array or not | - {string} needle [needle wanted to be checked ] .  -{array} array  [array to search into] .| Boolean
| exception |  Throws custom Exception|- @param  {string} message [exception message] . -@param  {integer} code    [exception code] - @throws {Error} |
| array_filter | filters array | - @param  {array} array  [array wanted to make it unique] . -  @param  {string} / null column [column into json object if null it will filter from empty values]| {array}  filtered array
| array_column | return array of objects columns | -@param  {array} array      [array of objects wanted to get columns] . -@param  {string} columnName [column name into every object]  |{array}            [array of values exists in array]
| function_exists | checks whether function exists or not | - @param  {string} variable [function name] | Boolean
| is_string | checks if variable is string or not | - @param  {*}  variable [variable wanted to be checked] | Boolean
| is_object | checks if variable is object or not | - @param  {*}  object [variable wanted to be checked] | Boolean
|is_array|checks if the variable is array|- @param  {*}  arr [variable wanted to be checked]| Boolean
|array_merge|merges two arrays such as PHP|- @param  {array} arr1 [first array] - @param  {array} arr2 [second array]| {array}      [merged array]
|implode|concatenate array pieces using glue into one string|- @param  {string} glue   [glue wanted to be concatenated with] - @param  {array} pieces [array wanted to be concatenated]|{string}        [single concatenated string]
|object_keys|return object keys|- @param  {object} object|{array}        [array of object keys]
|array_intersect|return the intersection between two arrays|- @param  {array} arr1 [first array] - @param  {array} arr2 [second array]| {array}      [intersected array]
|array_diff|return array of differences between two arrays|- @param  {array} arr1 . -@param  {array} arr2| {array} 
|array_symatric_diff|such as php|- @param  {array} arr1 . - @param  {array} arr2| {array} 
|replacer|These function replacess the object keys into the text by the object values| - @param {String} text presents the text I will search in . - @param {Object} object presents the object that I will replace by|{string}	
|replaceAll|replace all presence by a value|- @param  {string} text [text to search into it]. -@param  {string} search [string to search by]. - @param  {*} replace_val [value to replace with].|{string} [new text replaced by value] .
|serializeToJson|serialize object to be in json|- @param  {array} data [array wanted to be serialized].| @return {object} [flattened object]
|serializeQS|turn given object into query string|- @param  {string} url [valid url] .- @param  {Object} obj [valid json object]| {string}     [new url with query string from object]
|boolReverse|reverse boolean object|@param  {Boolean} variable|@return {Boolean}
|makeJsonForm|returns form object using json|- @param  {object} data [json]|@return {FormData}
|rtrim|trims the right side of a text|- @param  {string} string    [string to trim] . - @param  {string} char  [string that wanted to trim] . - @param  {Boolean} all_after [if true or 1 will truncate all after it] .| {string}  [trimmed text] .
|JSONable|determine if these string could be valid json or not|{string} string|{Boolean}
|strtolower|like PHP function|{string} string|{string}
|strtoupper|like PHP function|{string} string|{string}
|dd|makes console.log then stop the cod|@throws {""}|{void}
|removingEventListener|removing an event emit function that attached to this element|- @param  {string} element [Dom Element query selector] .- @param  {string} event [event name] . - @param  {string} function_name [function to stop listening on]|{void}
|getFunctionParams|JavaScript program to get the function name/values dynamically|{fuction} func|{array}