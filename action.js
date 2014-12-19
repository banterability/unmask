function init(){
  var passwordFields = document.querySelectorAll('input[type="password"]');
  [].forEach.call(passwordFields, function(node){
    node.dataset.unmask = true;
  });
  window['unmask-ext-fired'] = true;
}

function toggleFields(){
  var passwordFields = document.querySelectorAll('[data-unmask]');
  [].forEach.call(passwordFields, function(node){
    if(node.className.indexOf('unmask-field') !== -1){
      node.classList.remove('unmask-field');
      node.type = 'password';
    } else {
      node.classList.add('unmask-field');
      node.type = 'text';
    }
  });
}

var initialized = window['unmask-ext-fired'] === true;

if(initialized){
  toggleFields();
}else{
  init();
  toggleFields();
}
