import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownComponent } from './dropdown.component';
import { FetchDataService } from '../services/fetch-data.service';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { By } from '@angular/platform-browser';


describe('DropdownComponent', () => {
  let component: DropdownComponent;
  let fixture: ComponentFixture<DropdownComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownComponent ],
      providers:[FetchDataService],
      imports:[BrowserDynamicTestingModule]
      
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownComponent);
    component = fixture.componentInstance;
   
    component.labelName = 'Regions';
    component.itemsList=[{
      id: 'Europe',
      name: 'Europe'
    },
    {
      id: 'Asia',
      name: 'Asia'
    }];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    const labelName = fixture.debugElement.query(By.css('.labelName')).nativeNode.innerHTML;
    console.log(labelName);
    expect(labelName).toContain(component.labelName);
  });
  it('should create', () => {
    component.labelName ='';
    fixture.detectChanges();
    expect(component).toBeTruthy();
    const labelName = fixture.debugElement.query(By.css('.labelName')).nativeNode.innerHTML;
    console.log(labelName);
    expect(labelName).toEqual('  : ')
  });
  it('should call onchange function', () => {
    spyOn(component.valueChange,'emit');
    component.changeValue();
    expect(component.valueChange.emit);
  });
});
