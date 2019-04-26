// let myList = new Trie();

function fileInputListener(event) {
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

document.getElementById('file-input').addEventListener('change', fileInputListener);
document.getElementById('file-input').addEventListener('changeAsText', processfileAsText);

function processfileAsText(event) {
  console.log(event.detail.text);
}
