import { Component, OnInit } from '@angular/core';
import { urlConfig } from '../../../data/config-url';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  questionLoaded = false;
  urlConfig = urlConfig;
  constructor() {}

  ngOnInit() {}
  load_tool(toolInstance) {
    console.log('tool will be loaded');
    let iFrameHTML =
      '<br>&nbsp;<br><iframe class="wk_ex_iframe" style="z-index: 1" allow="microphone *; camera *" ';
    iFrameHTML += 'name="' + toolInstance + '" id="' + toolInstance + '" frameborder="1" ';
    iFrameHTML += 'src="' + this.urlConfig.fbdTool + '?' + toolInstance + '" ';
    iFrameHTML += 'width="' + 600 + '" ';
    iFrameHTML += 'height="' + 600 + '">';
    iFrameHTML += '</iframe>';
    document.querySelector('#ETFrame').innerHTML = iFrameHTML;
    this.questionLoaded = true;

  }
}
