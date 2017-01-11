#Introduction to Programming in Javascript

<!-- * Log -->
##ROADMAP

* Datatypes
* Variables
* Arithmetic Operators
* Data Structures: 
	* Arrays
	* Objects
* Anatomy of a Function
* Comparison Operators
* Control Structures:
	* The 'if' statement
	* The 'for' loop
* Math & Random



<!--####Running JS in the browser, and in replit
-->

---

#Datatypes

A **type** in a programming language specifies a **kind of data**. While this might not be the most technical way to describe it, it's how we're most likely to think about it. 

Javascript has five **primitive** types:

* **String** - characters or textual data..stuff like:  "abc", and "hello there 123"
* **Number** - just like it sounds..this is a number: 123 or 12.3
* **Boolean** - these are truthe or false values 
* **Null** - has exactly one value which is: null . This is used to signify an empty value. 
* **Undefined** - usually this is a variable that hasn't been initialized: 'var x;' will result in x being undefined at this point.  


#Variables

What's the point of having data types if there is nowhere we can temporarily store them? This is where variables come in.

Keywayrd `var` tells the program that is going to define a variable. It is followed by the name of the variable. This is "variable declaration":

```javascript
var myVariable;
var anotherVariable;
```

If we want to give it a value, use the `=` operator. This is " variable assignment".

```javascript
myVariable = 1;
anotherVariable = 2;
```

You can also do declaration and assignment in one line:

```javascript
var number = 7;
```

How do we name variables? Use common sense and camelCase.


#Arithmetic Operators

<!--**Activity:** Take 5 minutes to research Javascript's Arithmetic Operators and be prepared to present.-->

<table><tr>
<th style="width:25%">Operator</th>
<th>Description</th>
</tr>
<tr>
<td>+</td>
<td>Addition</td>
</tr>
<tr>
<td>-</td>
<td>Subtraction</td>
</tr>
<tr>
<td>*</td>
<td>Multiplication</td>
</tr>
<tr>
<td>/</td>
<td>Division</td>
</tr>
<tr>
<td>%</td>
<td>Modulus</td>
</tr>
<tr>
<td>++</td>
<td>Increment</td>
</tr>
<tr>
<td>--</td>
<td>Decrement</td>
</tr>
</table>



#Data Structures 
Data Structures are ways of organizing data. Javascript has two main ways of doing this. Arrays and Objects. 

###1. Arrays

Arrays are lists. They start and end with square brackets:

```
var myArray = [ "A", "B", "C" ];

```

You can access elements by using `[ ]` and passing the **index** of the desired **element**. 

**Arrays are "zero indexed"** : that means that the first element is always found by using `[0]`:

```
myArray[0];
myArray[1];
myArray[2];

```

Each **element** in an array can be assigned, exactly like a variable:

```
myArray[0] = "A";
myArray[1] = "B";
myArray[2] = "C";

```

Arrays can do very useful things, such as sort themselves, count their content, search their content, manipulate their content and all sorts of other cool tricks:

<table>
  <tbody><tr>
    <th style="width:20%">Method</th>
    <th>Description</th>
  </tr>
  
  <tr>
    <td><a href="jsref_join.asp">join()</a></td>
    <td>Joins all elements of an array into a string</td>
    </tr>
  <tr>
    
    
  <tr>
    <td><a href="jsref_pop.asp">pop()</a></td>
    <td>Removes the last element of an array, and returns that element</td>
    </tr>
  <tr>
    <td><a href="jsref_push.asp">push()</a></td>
    <td>Adds new elements to the end of an array, and returns the new length</td>
    </tr>
    
    
  <tr>
    <td><a href="jsref_reverse.asp">reverse()</a></td>
    <td>Reverses the order of the elements in an array</td>
    </tr>
  <tr>
    
 
 <tr>
    <td><a href="jsref_sort.asp">sort()</a></td>
    <td>Sorts the elements of an array</td>
    </tr>
  <tr>
    <td><a href="jsref_splice.asp">splice()</a></td>
    <td>Adds/Removes elements from an array</td>
    </tr>
  <tr>
    <td><a href="jsref_tostring_array.asp">toString()</a></td>
    <td>Converts an array to a string, and returns the result</td>
    </tr>
 
  <tr>
    <td><a href="jsref_valueof_array.asp">valueOf()</a></td>
    <td>Returns the primitive value of an array</td>
    </tr>
</tbody></table>


###2. Objects

Objects are also lists, but you can choose what each element is called. This is known as the **key**

Objects are formed of **key, value** pairs and are very useful for describing real world objects. 

```javascript
var car = {type:"Fiat", model:"500", color:"white"};
```
Sometimes it is easier to visualize objects by adding line-breaks:

```javascript
var car = { 
	type:"Fiat",
	model:"500",
	color:"white"
};
```
Objects are Variables Containing Variables.

<!--Create an object to represent a book.
Create an object to represent a movie.
-->


#Anatomy of a Function

Functions are reusable blocks of code, that perform a given task. They are made up of 5 parts:

1. Keyword `function` tells the program that is going to be a **function** (just like `var` for variables)
2. They have a **name** (just like variables) so you can call (invoke) them.
3. They can be given **arguments** (a.k.a parameters) in parenthesis `( )`
4. The **code block**. This is where the magic happens. Denoted by **curly braces** `{ }`
5. Javascript functions always **return** a result. If you do not explicitely tell a javascript function to return something, it will return `undefined` anyway. 

```javascript
function function_name (argument) {
	// body...
	return "strings, numbers or other things too";
}
```

You can use a function by **calling** it. This is also known as **invoking**. This is done like so:

```javascript
function_name();
```

Example: This function adds 2 to any given parameter:

```javascript
function addTwo (givenParameter) {
	return givenParameter + 2;
}
```

#Comparison & Logical Operators
In addition to Arithmetic Operators, there are a few more useful operators in javascript:

###1. Comparison Operators

<table class="w3-table-all notranslate">
<tbody><tr>
<th style="width:12%">Operator</th>
<th>Description</th>
<th>Comparing</th>
<th>Returns</th>
</tr>
<tr style="background-color:#f5f5f5;">
<td rowspan="3">==</td>
<td rowspan="3">equal to</td>
<td>x == 8</td>
<td>false</td>
</tr>
<tr style="background-color:#f5f5f5;">
<td>x == 5</td>
<td>true</td>
</tr>
<tr style="background-color:#f5f5f5;">
<td>x == "5"</td>
<td>true</td>
</tr>
<tr style="background-color:#ffffff;">
<td rowspan="2">===</td>
<td rowspan="2">equal value and equal type</td>
<td>x === 5</td>
<td>true</td>
</tr>
<tr style="background-color:#ffffff;">
<td>x === "5"</td>
<td>false</td>
</tr>
<tr style="background-color:#f5f5f5;">
<td>!=</td>
<td>not equal</td>
<td>x != 8</td>
<td>true</td>
</tr>
<tr style="background-color:#fff;">
<td rowspan="3">!==</td>
<td rowspan="3">not equal value or not equal type</td>
<td>x !== 5</td>
<td>false</td>
<tr style="background-color:#fff">
<td>x !== "5"</td>
<td>true</td>
<tr style="background-color:#fff">
<td>x !== 8</td>
<td>true</td>
<tr style="background-color:#f5f5f5">
<td>&gt;</td>
<td>greater than</td>
<td>x &gt; 8</td>
<td>false</td>
</tr>
<tr style="background-color:#ffffff;">
<td>&lt;</td>
<td>less than</td>
<td>x &lt; 8</td>
<td>true</td>
</tr>
<tr style="background-color:#f5f5f5;">
<td>&gt;=</td>
<td>greater than or equal to</td>
<td>x &gt;= 8</td>
<td>false</td>
</tr>
<tr style="background-color:#ffffff;">
<td>&lt;=</td>
<td>less than or equal to</td>
<td>x &lt;= 8</td>
<td>true</td>
</tr>
</tbody></table>

###2. Logical Operators

<table class="w3-table-all notranslate">
<tbody><tr>
<th style="width:12%">Operator</th>
<th>Description</th>
<th>Example</th>

</tr>
<tr>
<td>&amp;&amp;</td>
<td>and</td>
<td> (x &lt; 10 &amp;&amp; y &gt; 1) is true</td>

</tr>
<tr>
<td>||</td>
<td>or</td>
<td>(x == 5 || y == 5) is false</td>

</tr>
<tr>
<td>!</td>
<td>not</td>
<td> !(x == y) is true</td>

</tr>
</tbody></table>


#Control Structures:

###The 'if' statement

```javascript
if ("this is true") console.log("it was true!");

```

```javascript
if ( "this evaluates to true" ) {
	// do this 
} else if ( "instead this is true") {
	// then do that
} else {
	// you can always fallback on this 
}
```

###The 'for' loop

```javascript
for (var i = 0 ; i < 10 ; i++ ) {
	console.log(i);
}

// for (start ; stop ; step) 
```

#Math & Random

<!-- Activity: Take five minutes to research Math and Random and how to use them in Javascript! Be prepared to present! -->