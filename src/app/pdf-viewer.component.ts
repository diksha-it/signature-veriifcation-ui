import { Component } from '@angular/core';
import {
  LinkAnnotationService, BookmarkViewService, MagnificationService, ThumbnailViewService,
   ToolbarService, NavigationService, TextSearchService, TextSelectionService, PrintService
 } from '@syncfusion/ej2-angular-pdfviewer';
@Component({
  selector: 'pdf-view',
  template: `<div>
<ejs-pdfviewer id="pdfViewer" [serviceUrl]='service' [documentPath]='document' style="height:640px;display:block"></ejs-pdfviewer>
</div>`,
   //tslint:disable-next-line:max-line-length
  providers: [LinkAnnotationService, BookmarkViewService, MagnificationService, ThumbnailViewService, ToolbarService, NavigationService, TextSearchService, TextSelectionService, PrintService]
})
export class PdfViewerComponent {
  title = 'syncfusion-pdfviewer-angular-app';
// set the service URL to PdfViewerControl
  public service = 'http://localhost:4200/api/pdfviewer';
//Default document to render in the PdfViewerControl
  public document: string = "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf9"; 
}