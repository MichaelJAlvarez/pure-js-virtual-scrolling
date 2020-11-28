class TableRenderer {
  constructor(view, viewSize, data) {
    this.view = view;
    this.data = data;
    this.rowHeight = 30;
    this.viewSize = viewSize;
    this.startVisible = 0;
    this.endVisible = 0;
  
  }

  renderRows() {
    const visibleRows = this.getVisibleRows(this.data.rows, this.rowHeight, this.viewSize);
    this.data.visibleRows = visibleRows;
    console.log(this.data.visibleRows);
   
  }

  getVisibleRows(data, rowHeight, viewSize) {
    console.log('get visible rows. Height: ' + rowHeight + ' data: ' + data.length);
    const startPosition = 0;
    const endPosition = startPosition + (viewSize.height / rowHeight);
    console.log(viewSize / rowHeight);
    return data.slice(startPosition, endPosition);;
  }
}