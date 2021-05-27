import { Component, OnInit } from '@angular/core';
import {SampleService} from "../../services/sample.service";

@Component({
  selector: 'app-samples',
  templateUrl: './samples.component.html',
  styleUrls: ['./samples.component.scss']
})
export class SamplesComponent implements OnInit {

  constructor(private sampleService: SampleService) { }

  ngOnInit(): void {
  }
}
