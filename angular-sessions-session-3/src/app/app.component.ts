import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	contacts: Contacts[] = [];


	form: Contacts = {
		name: "",
		phone: "",
		address: ""
	}

	constructor() {
		this.initContacts();
	}

	initContacts() {
		this.contacts.push({name: 'vinay', phone: "224324434", address: 'Banlr'})
	}
	valuechange(Value) {
	var print=document.getElementById("print");
		var match = Value.match(/^[A-Z]+$/i); 
		 
		if(!match) {
			print.innerHTML = "Enter Valid Name";
		    return false;
		}
		else {
			print.innerHTML = "";
			return true;
			}
		}
		valuechange1(Value) {
			var print1=document.getElementById("print1");
			var match1 = Value.match(/^[0-9]+$/i);
			if(!match1 || Value.length<10 || Value.length>10) {
				print1.innerHTML = "Enter Valid Phone Number"; 
			}else {
			print1.innerHTML = "";
			}
		}

		valuechange2(Value) {
			var print2=document.getElementById("print2");
			if(!Value) {
				print2.innerHTML = "Enter Address";
			}else {
			print2.innerHTML = "";
			}
		}
	addContact = () => {
		console.log(this.form);
		if(this.valuechange(this.form.name)&&this.valuechange1(this.form.phone)&&this.valuechange2(this.form.address)){
		this.contacts.push(this.form);
	}
	}

	deleteContact(index) {
		console.log('deleting index', index)
		this.contacts.splice(index, 1);
	}

	onChildDelete(index) {
		this.deleteContact(index);
		console.log(index)
	}



}

class Contacts {
	name: string;
	phone: string;
	address: string;
}
