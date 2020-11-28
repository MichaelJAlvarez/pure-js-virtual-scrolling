console.log('hello!')

document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    onDocumentReady();
  }
}

onDocumentReady();

function onDocumentReady() {
  const viewEl = document.getElementById('viewElement');
  const childViewEl = document.getElementById('childElement');
  const data = generateData();
  const size = getViewSize();
  const renderer = createTableRenderer();
  renderer.renderRows();


  function generateData() {
    const data = new Generator();
    data.createData();
    return data.data;
  }

  function getViewSize() {
    return { height: viewEl.offsetHeight, width: viewEl.offsetWidth }
  }

  function createTableRenderer() {
    
    return new TableRenderer(childViewEl, size, data);
  }
}

