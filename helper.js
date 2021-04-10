/**
 * These File Provides functions specially for php developers
 */

/**
* checks if these object is empty or not
* @param Object presents the object I'll check
* @return Boolean
*/
var isEmpty = function(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key)){
            return false;
        }
    }
    return true;
}
/**
 * [isset checks if variable exists or not]
 * @param  {*} variable [variable wanted to be checked]
 * @return {Boolean}
 */
var isset = function(variable)
{
    if (typeof variable !== 'undefined' && variable != 'null' && variable != null) {
      return true
    }
    return false;
}
/**
 * [empty checks whether object or array are empty or not]
 * @param  {object|array} variable [variable wanted to be checked]
 * @return {Boolean}
 */
var empty = function(variable)
{
    if (Array.isArray(variable)) {
      if (variable == null || !variable.length) {
        return true;
      }else{
        return false;
      }
    }
    if (is_object(variable)) {
      if(isEmpty(variable)){
        return true;
      }else{
        return false;
      }
    }
    exception("Variable Must Be Array Or  Object ... ! ");
}
/**
 * [in_array checks if needle exists in array or not]
 * @param  {string} needle [needle wanted to be checked ]
 * @param  {array} array  [array to search into]
 * @return {Boolean}
 */
var in_array = function (needle, array)
{
    index = array.indexOf(needle);
    if (index < 0) {
      return false;
    }
    return true;
}
/**
 * [exception Throws custom Exception]
 * @param  {string} message [exception message]
 * @param  {integer} code    [exception code]
 * @throws {Error}
 * @return {void}
 */
var exception = function (message, code = null)
{
  error = new Error(message);
  if (code) {
    error.code = code;
  }
  throw error;
}
/**
 * [array_filter filters array ]
 * @param  {array} array  [array wanted to make it unique]
 * @param  {string}|null column [column into json object if null it will filter from empty values]
 * @return {array}        [filtered array]
 */
var array_filter = function(array, column = null)
{
    new_array = [];
    for (let i = 0; i < array.length; i++) {
        if (column){
            if (isset(array[i][column]) && array[i][column] !== null && array[i][column] !== "null" && typeof array[i][column] !== 'undefined' && typeof array[i][column] !== 'empty') {
                new_array.push(array[i]);
              }
        }else{
            if (array[i] !== null && typeof array[i] !== 'undefined' && typeof array[i] !== 'empty') {
                new_array.push(array[i]);
              }
        }
    }
    return new_array;
}
/**
 * [array_column return array of objects columns]
 * @param  {array} array      [array of objects wanted to get columns]
 * @param  {string} columnName [column name into every object]
 * @return {array}            [array of values exists in array]
 */
function array_column(array, columnName) {
    return array.map(function(value,index) {
        return value[columnName];
    })
}
/**
 * [function_exists checks whether function exists or not]
 * @param  {string} variable [function name]
 * @return {Boolean}
 */
var function_exists = function(variable)
{
  if (typeof variable === "function") {
      return true;
  }
  return false;
}

/**
 * [is_string checks if variable is string or not]
 * @param  {*}  variable [variable wanted to be checked]
 * @return {Boolean}
 */
var is_string = function(variable)
{
    if(typeof variable === 'string'){
      return true;
    }
    return false;
}

/**
 * [is_string checks if variable is boolean or not]
 * @param  {*}  variable [variable wanted to be checked]
 * @return {Boolean}
 */
var is_bool = function(variable)
{
    if(typeof variable === 'boolean'){
      return true;
    }
    return false;
}
/**
 * [is_object checks if variable is object or not]
 * @param  {*}  variable [variable wanted to be checked]
 * @return {Boolean}
 */
var is_object = function(variable)
{
    if(typeof variable === 'object'){
      return true;
    }
    return false;
}
/**
 * [is_array checks if the variable is array]
 * @param  {*}  variable [variable wanted to be checked]
 * @return {Boolean}
 */
var is_array = function(variable)
{
    if(Array.isArray(variable)){
      return true;
    }
    return false;
}
/**
 * [is_array checks if the variable is function]
 * @param  {*}  variable [variable wanted to be checked]
 * @return {Boolean}
 */
var is_function = function(variable)
{
    if(typeof variable === 'function'){
      return true;
    }
    return false;   
}
/**
 * [array_merge merges two arrays such as PHP]
 * @param  {array} arr1 [first array]
 * @param  {array} arr2 [second array]
 * @return {array}      [merged array]
 */
var array_merge = function(arr1, arr2){
    if (!is_array(arr1)){
        return exception('Argument 1 Must be Flat Array');
    }
    if (!is_array(arr2)){
        return exception('Argument 2 Must be Flat Array');
    }
    return arr1.concat(arr2);
}
/**
 * [implode concatenate array pieces using glue into one string]
 * @param  {string} glue   [glue wanted to be concatenated with]
 * @param  {array} pieces [array wanted to be concatenated]
 * @return {string}        [single concatenated string]
 */
var implode = function (glue, pieces){
    return pieces.join(glue);
}
/**
 * [object_keys return object keys]
 * @param  {object} object
 * @return {array}        [array of object keys]
 */
var object_keys = function(object)
{
    if (!is_object(object))
    {
        return exception('argument value must be valid JSON object "'+ typeof object+'" given' );
    }
    keys = [];
    for (key in object) {
        keys.push(key);
    }
    return keys;
}
/**
 * [array_intersect return the intersection between two arrays]
 * @param  {array} arr1 [first array]
 * @param  {array} arr2 [second array]
 * @return {array}      [intersected array]
 */
var array_intersect = function(arr1, arr2)
{
    if (!is_array(arr1)){
        return exception('Argument 1 Must be Flat Array');
    }
    if (!is_array(arr2)){
        return exception('Argument 2 Must be Flat Array');
    }
    return arr1.filter(x => arr2.includes(x));
}
/**
 * [array_diff return array of differences between two arrays]
 * @param  {array} arr1
 * @param  {array} arr2
 * @return {array}     
 */
var array_diff = function(arr1, arr2)
{
    if (!is_array(arr1)){
        return exception('Argument 1 Must be Flat Array');
    }
    if (!is_array(arr2)){
        return exception('Argument 2 Must be Flat Array');
    }
    return arr1.filter(x => !arr2.includes(x));
}
/**
 * [array_symatric_diff such as php]
 * @param  {array} arr1
 * @param  {array} arr2
 * @return {array}     
 */
var array_symatric_diff = function(arr1, arr2)
{
    if (!is_array(arr1)){
        return exception('Argument 1 Must be Flat Array');
    }
    if (!is_array(arr2)){
        return exception('Argument 2 Must be Flat Array');
    }
    return arr1
        .filter(x => !arr2.includes(x))
        .concat(arr2.filter(x => !arr1.includes(x)));
}

/**
 * These function replacess the object keys into the text by the object values
 * @param String|text presents the text I will search in
 * @param Object|object presents the object that I will replace by
 * @return {string}	
 */
var replacer = function(text, object)
{
    if (object === "") {
      return text;
    }

    if (!is_object(object)) {
      exception("variable not object ... ! ");
    }
    if (empty(object)) {
      return text;
    }
    for (var prop in object) {
      text = replaceAll(text, "%"+prop+"%", object[prop]);
      text = replaceAll(text, "%25"+prop+"%25", object[prop]);
    }
    return text;
}
/**
 * [replaceAll replace all presence by a value]
 * @param  {string} text        [text to search into it]
 * @param  {string} search      [string to search by]
 * @param  {*} replace_val [value to replace with]
 * @return {string}             [new text replaced by value]
 */
var replaceAll = function(text, search, replace_val)
{
    regex = new RegExp(search, "g");
    text = text.replace(regex, replace_val);
    return text;
}
/**
 * [serializeToJson serialize object to be in json]
 * @param  {array} data [array wanted to be serialized]
 * @example
 * [{name:"plapla",value:"plapla"}, {...}, ...]
 * @return {object}      [flattened object]
 * @example
 * {plapla:"plapla", ...}
 */
var serializeToJson = function(data)
  {
    new_data = {};
    for (let i = 0; i < data.length; i++)
    {
      new_data[data[i].name] = data[i].value;
    }
    return new_data;
  }
  /**
   * [serializeQS turn given object into query string]
   * @param  {string} url [valid url]
   * @param  {Object} obj [valid json object]
   * @return {string}     [new url with query string from object]
   */
var serializeQS = function(url, obj) {
    var str = [];
    for (var p in obj){
        if (obj.hasOwnProperty(p)) {
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        }
    }
  return url+"?"+str.join("&");
}
/**
 * [boolReverse reverse boolean object]
 * @param  {Boolean} variable
 * @return {Boolean}
 */
var boolReverse = function(variable)
{
  if (variable) {
    return false;
  }
  return true;
}
/**
 * [makeJsonForm returns form object using json ]
 * @param  {object} data [json]
 * @return {FormData}
 */
var makeJsonForm = function(data)
{
    form = false;
    if (is_object(data))
    {
        form = new FormData();
        for (key in data) {
            form.append(key, data[key]);
        }
    }
    return form;
}

/**
 * [rtrim trims the right side of a text]
 * @param  {string} string    [string to trim]
 * @param  {string} char      [string that wanted to trim]
 * @param  {Boolean} all_after [if true or 1 will truncate all after it]
 * @return {string}           [trimmed text]
 */
var rtrim = function(string, char, all_after)
{
    last_index = string.lastIndexOf(char);
    if (last_index >= 0) {
      if (all_after === true || all_after === 1) {
          string = string.slice(0, last_index);
      }else{
          string = string.slice(0, last_index) + string.slice(last_index+char.length);
      }
    }

    return string;
}
/**
 * [JSONable determine if these string could be valid json or not]
 * @param {string} string
 * @return {Boolean} 
 */
var JSONable = function(string)
{
    try{
        JSON.parse(string);
        return true;
    }catch (error){
        return false;
    }
}
/**
 * [strtolower like PHP function]
 * @param  {string} string
 * @return {string}
 */
var strtolower = function (string) {
    return string.toLowerCase();
}

/**
 * [strtoupper like PHP function]
 * @param  {string} string
 * @return {string}
 */
var strtoupper = function (string) {
    return string.toUpperCase();
}

/**
 * [dd makes console.log then stop the code]
 * @throws {""}
 * @return {void}
 */
var dd = function ()
{
    for (variable in arguments) {
        console.log(arguments[variable]);
    }

    throw "";
}

var func_call = function(fun, arg = null)
{
    if (is_function(fun)) {
            fun(arg);
    }
    if (is_string(fun) && !JSONable(fun)) {
        eval(fun);
    }
    if (is_string(fun)) {
        fun = JSON.parse(fun);
    }
    if (is_array(fun)) {
        for (let index in fun) {
            if (is_function(fun[index])) {
                fun[index](arg);
                continue;
            }
            if (is_string(fun[index])) {
                eval(fun[index]);
            }
        }
    }
}

/**
 * [request makes http request ]
 * @param  {string} url       [valid url]
 * @param  {type} type      [valid http method]
 * @param  {object} callbacks [valid json that has callbacks]
 *          -success
 *          -failure
 *          -waiting
 * @param  {object} data      [valid json object or valid FormData object]
 */
var request = function(url, type, callbacks, data = {})
{
    if (!url || !is_string(url) || JSONable(url)) {
        throw new Error('request function argument 1 must be valid string ... !');
    }
    if (!type || !is_string(type) || JSONable(type) || !in_array(type.toLowerCase(), ["get", "post", "put", "delete", "options"])) {
        throw new Error('request function argument 2 must be valid request type ... !');
    }
    if (!callbacks || !is_object(callbacks)) {
        throw new Error('request function argument 3 must be valid request type ... !');
    }

    if (!isset(callbacks.success)) {
        throw new Error('request callbacks must has at least one success object  ... !');
    }

    if (!isset(callbacks.waiting)) {
        let waiting = callbacks.waiting;
        func_call(waiting);
   }

    $.ajax({
        url: url,
        type: type,
        data: data,
        async: false,
        cache: false,
        contentType: false,
        processData: false,
        success: function (data)
        {
            let success = callbacks.success;
            func_call(success, data);
        },
        error: function(xhr, status, error)
        {
            if (!isset(callbacks.failure)) {
                let failure = callbacks.failure;
                func_call(failure, error);
            }
        },
        complete: function()
        {
            if (!isset(callbacks.completed)) {
                let completed = callbacks.completed;
                func_call(completed);
            }
        }
    });
}




/**
 * [removingEventListener removing an event emit function that attached to this element]
 * @param  {string} element       [Dom Element query selector]
 * @param  {string} event         [event name]
 * @param  {string} function_name [function to stop listening on]
 * @return {void}
 */
var removingEventListener = function (element, event, function_name)
{
    document.querySelector(element).removeEventListener(event, function_name);
}

// JavaScript program to get the function
// name/values dynamically
var getFunctionParams = function (func) {

    // String representation of the function code
    var str = func.toString();

    // Remove comments of the form /* ... */
    // Removing comments of the form //
    // Remove body of the function { ... }
    // removing '=>' if func is arrow function
    str = str.replace(/\/\*[\s\S]*?\*\//g, '');
    str = str.replace(/\/\/(.)*/g, '');
    str = str.replace(/\)[\s\S]*{[\s\S]*}/, '');

    str = str.replace(/=>/g, '');

    str = str.trim();
    // Start parameter names after first '('
    var start = str.indexOf("(") + 1;

    // End parameter names is just before last ')'

    var end = str.length;
    var result = str.substring(start, end).split(", ");

    var params = [];

    result.forEach(element => {
        // Removing any default value
        element = element.replace(/=[\s\S]*/g, '').trim();

        if(element.length > 0)
            params.push(element);
    });

    return params;
}
