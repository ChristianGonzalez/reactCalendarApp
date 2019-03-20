class Event {
	
	constructor(description = "", startDate = "", endDate = "") {
		this.description[0] = description;
		this.startDate = startDate; 
		this.endDate = endDate;
		this.eventPopup = false;
		this.eventEdit = 0;
	}

	//Getters, and Setters
	getDescription(index) {
		return this.description[index];
	}

	get startDate() {
		return this.startDate;
	}

	get endDate() {
		return this.endDate;
	}

	get eventPopup() {
		return this.eventPopup;
	}

	get eventEdit() {
		return this.eventEdit;
	}

	setDescription(index, val) {
		this.description[index] = val;
	}

	set startDate(val) {
		this.startDate = val;
	}

	set endDate(val) {
		this.endDate = val;
	}

	set eventPopup(val) {
		this.eventPopup = val;
	}

	set eventEdit(val) {
		this.eventEdit = val;
	}
}