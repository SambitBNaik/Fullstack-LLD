import React from 'react';
import './A4.css';

const A4 = () => {
  return (
    <div className="a4-page">
      <h1>Title of the Document</h1>
      
      <h2>Callback Hell</h2>
      <h3>A Guide to Writing Asynchronous JavaScript Programs</h3>

      <h4>What is "Callback Hell"?</h4>
      <p>
        Asynchronous JavaScript, or JavaScript that uses callbacks, is hard to get right intuitively. A lot of code ends up looking like this:
      </p>
      
      <pre>
        <code>
{`fs.readdir(source, function (err, files) {
  if (err) {
    console.log('Error finding files: ' + err)
  } else {
    files.forEach(function (filename, fileIndex) {
      console.log(filename)
      gm(source + filename).size(function (err, values) {
        if (err) {
          console.log('Error identifying file size: ' + err)
        } else {
          console.log(filename + ' : ' + values)
          aspect = (values.width / values.height)
          widths.forEach(function (width, widthIndex) {
            height = Math.round(width / aspect)
            console.log('resizing ' + filename + ' to ' + height + 'x' + height)
            this.resize(width, height).write(dest + 'w' + width + '_' + filename, function(err) {
              if (err) console.log('Error writing file: ' + err)
            })
          }.bind(this))
        }
      })
    })
  }
})`}
        </code>
      </pre>
      <p>
        See the pyramid shape and all the at the end? Eek! This is affectionately known as callback hell.
      </p>
      
      <h4>What are Callbacks?</h4>
      <p>
        Callbacks are just the name of a convention for using JavaScript functions. There isn't a special thing called a 'callback' in the JavaScript language, it's just a convention. Instead of immediately returning some result like most functions, functions that use callbacks take some time to produce a result.
      </p>
      
      <h4>How Do I Fix Callback Hell?</h4>
      <p>
        Callback hell is caused by poor coding practices. Luckily writing better code isn't that hard! You only need to follow three rules:
      </p>
      
      <h5>1. Keep Your Code Shallow</h5>
      <p>
        One way to avoid callback hell is to give functions names and move them to the top level of your program:
      </p>

      <pre>
        <code>
{`document.querySelector('form').onsubmit = formSubmit;

function formSubmit(submitEvent) {
  var name = document.querySelector('input').value;
  request({
    uri: "http://example.com/upload",
    body: name,
    method: "POST"
  }, postResponse);
}

function postResponse(err, response, body) {
  var statusMessage = document.querySelector('.status');
  if (err) return statusMessage.value = err;
  statusMessage.value = body;
}`}
        </code>
      </pre>

      <h5>2. Modularize</h5>
      <p>
        Break your code into modules. Here’s an example:
      </p>

      <pre>
        <code>
{`module.exports.submit = formSubmit;

function formSubmit(submitEvent) {
  var name = document.querySelector('input').value;
  request({
    uri: "http://example.com/upload",
    body: name,
    method: "POST"
  }, postResponse);
}

function postResponse(err, response, body) {
  var statusMessage = document.querySelector('.status');
  if (err) return statusMessage.value = err;
  statusMessage.value = body;
}`}
        </code>
      </pre>

      <h5>3. Handle Every Single Error</h5>
      <p>
        Always handle errors in your callbacks to ensure your code is stable:
      </p>

      <pre>
        <code>
{`var fs = require('fs');

fs.readFile('/Does/not/exist', handleFile);

function handleFile(error, file) {
  if (error) return console.error('Uhoh, there was an error', error);
  // otherwise, continue on and use \`file\` in your code
}`}
        </code>
      </pre>

      <p>
        Remember, only you can prevent callback hell and forest fires.
      </p>
    </div>
  );
};

export default A4;
