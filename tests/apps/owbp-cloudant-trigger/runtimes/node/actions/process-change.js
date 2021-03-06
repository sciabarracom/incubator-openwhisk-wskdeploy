// Licensed to the Apache Software Foundation (ASF) under one or more contributor
// license agreements; and to You under the Apache License, Version 2.0.

function main(params) {

  return new Promise(function(resolve, reject) {
    console.log(params.name);
    console.log(params.color);

    if (!params.name) {
      console.error('name parameter not set.');
      reject({
        'error': 'name parameter not set.'
      });
      return;
    } else {
      var message = 'A ' + params.color + ' cat named ' + params.name + ' was added.';
      console.log(message);
      resolve({
        change: message
      });
      return;
    }

  });

}
