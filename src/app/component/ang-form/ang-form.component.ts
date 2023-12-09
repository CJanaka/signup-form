import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProvinceList } from 'src/app/shared/interface/provincelist';
import { StateList } from 'src/app/shared/interface/statelist';
import { DistrictService } from 'src/app/shared/services/district.service';
import { validateInput, cardValidator, dobValidate } from 'src/app/shared/validators/validate_nic';

@Component({
  selector: 'app-ang-form',
  templateUrl: './ang-form.component.html',
  styleUrls: ['./ang-form.component.css']
})
export class AngFormComponent implements OnInit {

  jobForm !: FormGroup;
  submited: boolean = false;
  isLoading: boolean = false;
  maritial = ['Devorced', 'Single', 'Maried'];
  gend = ['Male', 'FeMale'];
  bankNames = ['Sampath Bank', 'Commercial Bank', 'NDB', 'NSB', 'BOC', "People's Bank"];
  state !: ProvinceList[];
  district !: StateList[];

  get f() {
    return this.jobForm.controls;
  }
  constructor(
    private formBuilder: FormBuilder,
    private distrctService: DistrictService
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.state = this.distrctService.getProvince();
  }

  findDistrict() {

    //this method use to get all districts
    //from district service and asign that values into this district array
    this.district = this.distrctService.getDistricts().filter(
                    e => e.id == this.jobForm.get('provinces')?.value
                  );
  }

  initForm(): void {
    this.jobForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.pattern('^[A-Za-z_-]{2,20}$')]],
      lastName: [''],
      dob: ['', [Validators.required, dobValidate]],
      contact: ['', [Validators.required, Validators.pattern('^7,9[1,2,5,6,7,8][0-9]{7}$')]],
      bindContact: ['+94'],
      address: ['', [Validators.required, Validators.maxLength(100)]],
      email: ['', [Validators.required, Validators.email]],
      zip: ['', [Validators.required]],
      mary: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      nic: ['', [Validators.required, validateInput]],
      card: ['', [Validators.required, cardValidator]],
      licenCard: ['', [Validators.required, Validators.pattern('^([x|X|B|B][0-9]{7})$')]],
      banks: ['', [Validators.required]],
      cvv: ['', [Validators.required, Validators.maxLength(3)]],
      provinces: ['',[Validators.required]],
      dist: ['',[Validators.required]],
      city: ['',[Validators.required]],
      agree: ['',[Validators.required]]
    });
  }

  onSubmit(): void {
    console.log(this.jobForm.value);
    this.submited = true;
    if (this.jobForm.valid) {
      this.isLoading = true;
      setTimeout(() => {
        console.log('Response');
        this.isLoading = false;
      }, 3000);
    }

  }
  clearForm(): void {
    this.submited = false;
    this.jobForm.reset;
  }
}
