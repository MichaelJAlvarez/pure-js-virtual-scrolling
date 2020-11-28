class Generator { 
  constructor() {
    this.data = { fields: [], rows: [] };
  }

  createData() {
        this.data.fields.push("Index")
        this.data.fields.push("First Name")
        this.data.fields.push("Last Name")
        this.data.fields.push("Address")

        for (var counter = 0; counter < 100; counter++) {
            var row = []
            row.push(counter)
            row.push("Apollo")
            row.push("Cabrera")
            row.push("123 Anystreet")
            this.data.rows.push(row)
        }
    }
}