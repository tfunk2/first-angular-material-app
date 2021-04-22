import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'quill-component',
  templateUrl: './quill.component.html',
  styleUrls: ['./quill.component.css']
})
export class QuillComponent implements OnInit {
  quillOutput: string = '';

  editorStyle = {
    height: '300px', 
    width: '100vw'
  }

  editorContent: string;

  editorForm: FormGroup;

  // config = {
  //   toolbar: [
  //     ['bold', 'italic', 'underline'],
  //     ['code-block']
  //   ]
  // }

  ngOnInit() {
    this.editorForm = new FormGroup({
      'editor': new FormControl(null)
    })
  }

  onSubmit() {
    this.editorContent = this.editorForm.get("editor").value
    // console.log(this.editorForm.get("editor").value)
  }

}
