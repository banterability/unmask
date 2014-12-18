var passwordFields = document.querySelectorAll('input[type="password"]');

[].forEach.call(passwordFields, function(node){
  node.classList.add('unmask-field');
  node.type='text';
});
