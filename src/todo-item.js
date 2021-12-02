class Todo {
    constructor(title, description, date, project) {
        this.title = title;
        this.description = description;
        this.date = date;
        this.project = project;
    }

    get title() {
        return this._title;
    }

    set title(value) {
        if (value.length === 0) {
            console.log("Please insert title");
        }
        this._title = value;
    }
}
