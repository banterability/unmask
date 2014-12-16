var passwordFields = document.querySelectorAll('input[type="password"]');

[].forEach.call(passwordFields, function(node){
  node.type='text';
});

console.log('Unmasked ' + passwordFields.length + ' fields.');
