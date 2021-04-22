import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'quill-component',
  templateUrl: './quill.component.html',
  styleUrls: ['./quill.component.css']
})
export class QuillComponent implements OnInit {
  quillOutput: string = '';

  ngOnInit() {
  }

}
