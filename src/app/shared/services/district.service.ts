import { Injectable } from '@angular/core';
import { ProvinceList } from '../interface/provincelist';
import { StateList } from '../interface/statelist';

@Injectable({
  providedIn: 'root'
})
export class DistrictService {

  constructor() { }

  getProvince(): ProvinceList[] {

    const provinceList: ProvinceList[] = [
      {
        id: 1,
        provinceName: 'Southern'
      },
      {
        id: 2,
        provinceName: 'Western'
      },
      {
        id: 3,
        provinceName: 'North'
      },
      {
        id: 4,
        provinceName: 'NorthWest'
      },
      {
        id: 5,
        provinceName: 'NorthCentral'
      },
      {
        id: 6,
        provinceName: 'Central'
      },
      {
        id: 7,
        provinceName: 'Sabaragamuwa'
      },
      {
        id: 8,
        provinceName: 'Eastern'
      },
      {
        id: 9,
        provinceName: 'Uva'
      }];
    return provinceList;

  }

  getDistricts(): StateList[] {

    const statelist: StateList[] = [
      {
        id: 1,
        districtName: 'Galle'
      },
      {
        id: 1,
        districtName: 'Matara'
      },
      {
        id: 1,
        districtName: 'Hambantota'
      },
      {
        id: 2,
        districtName: 'Gampaha'
      },
      {
        id: 2,
        districtName: 'Colombo'
      },
      {
        id: 2,
        districtName: 'Kalutara'
      },
      {
        id: 3,
        districtName: 'Jaffna'
      },
      {
        id: 3,
        districtName: 'Kilinochchi'
      },
      {
        id: 3,
        districtName: 'Mullaitivu'
      },
      {
        id: 3,
        districtName: 'Vavuniya'
      },
      {
        id: 3,
        districtName: 'Mannar'
      },
      {
        id: 4,
        districtName: 'Puttalam'
      },
      {
        id: 4,
        districtName: 'Kurunegala'
      },
      {
        id: 5,
        districtName: 'Anuradhapura'
      },
      {
        id: 5,
        districtName: 'Polonnaruwa'
      },
      {
        id: 6,
        districtName: 'Kandy'
      },
      {
        id: 6,
        districtName: 'Nuwara Eliya'
      },
      {
        id: 6,
        districtName: 'Matale'
      },
      {
        id: 7,
        districtName: 'Kegalle'
      },
      {
        id: 7,
        districtName: 'Ratnapura'
      },
      {
        id: 8,
        districtName: 'Trincomalee'
      },
      {
        id: 8,
        districtName: 'Batticaloa'
      },
      {
        id: 8,
        districtName: 'Ampara'
      },
      {
        id: 9,
        districtName: 'Badulla'
      },
      {
        id: 9,
        districtName: 'Monaragala'
      }];
    return statelist;
  }
}
