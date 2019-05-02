const fileInputListener = function (event) {
  const file = event.target.files[0];
  let reader = new FileReader();
  let stringFile = null;
  reader.onload = (fileEvent) => {
  stringFile = fileEvent.target.result;
    document.getElementById('file-input')
      .dispatchEvent(new CustomEvent('changeAsText', { detail: { text: stringFile } }));
  }

  reader.readAsText(file);
}

const processfileAsText = function (event) {
  foo(event.detail.text);
}

document.getElementById('file-input').addEventListener('change', fileInputListener);
document.getElementById('file-input').addEventListener('changeAsText', processfileAsText);


function foo(text) {
  const arr = text.split('\n');
  for (let i = 1; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

