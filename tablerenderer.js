class TableRenderer {
  constructor(view, viewSize, data) {
    this.view = view;
    this.data = data;
    this.rowHeight = 20;
    this.viewSize = viewSize;
    this.startVisible = 0;
    this.endVisible = 0;
  
  }

  renderRows() {
    this.clear();
    this.data.visibleRows = this.getVisibleRows(this.data.rows, this.rowHeight, this.viewSize);

    this.data.visibleRows.forEach((row) => {
      const tr = document.createElement('tr');
      const td = document.createElement('td');
      const text = document.createTextNode('woah');
      td.appendChild(text);
      tr.appendChild(td);
      this.view.appendChild(tr);
    })
  }

  getVisibleRows(data, rowHeight, viewSize) {
    const startPosition = 0;
    const endPosition = startPosition + (viewSize.height / rowHeight);
    return data.slice(startPosition, endPosition);;
  }

  clear() {
    this.view.innerHTML = '';
  }
}