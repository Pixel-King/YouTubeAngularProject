import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-new-card-form',
  templateUrl: './add-new-card-form.component.html',
  styleUrls: ['./add-new-card-form.component.scss'],
})
export class AddNewCardFormComponent implements OnInit {
  addNewCardForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.addNewCardForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      discription: ['', Validators.maxLength(255)],
      imageLink: ['', [Validators.required, Validators.pattern('(https?:\\/\\/)?([\\da-z.-]+)\\.([a-z.]{2,6})([\\/\\w.-]*)*\\/?')]],
      videoLink: ['', [Validators.required, Validators.pattern('(https?:\\/\\/)?([\\da-z.-]+)\\.([a-z.]{2,6})([\\/\\w .-]*)*\\/?')]],
      date: ['', [Validators.required, this.dateValidator()]],
    });
  }

  dateValidator() {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const dateValue = new Date(control.value);
      const currentDate = new Date();
      if (dateValue > currentDate) {
        return { 'date': true };
      } else {
        return null;
      }
    };
  }

  onSubmit() {
    console.log(this.addNewCardForm.valid);
    if (this.addNewCardForm.valid) {

    }
  }
}
