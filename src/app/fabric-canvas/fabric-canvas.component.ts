import { Component, OnInit, AfterViewInit } from '@angular/core';
import 'fabric';
declare const fabric: any;
@Component({
  selector: 'app-fabric-canvas',
  templateUrl: './fabric-canvas.component.html',
  styleUrls: ['./fabric-canvas.component.css']
})
export class FabricCanvasComponent implements OnInit, AfterViewInit {
  //POLYGON DATAS
  myCanvas: any;
  image = new Image();
  url: string;
  isCanvasDrawn: boolean = true;
  canvas: any;
  polygon: any;
  isImageDrawn: boolean = false;
  isPolygonDrawn: boolean = false;
  points = [];
  newPt: any;

  constructor() {}

  ngOnInit(): void {
    //POLYGON INIT
    this.canvas = new fabric.Canvas('canvas', { fireRightClick: true });
    // this.myCanvas = this.canvas.lowerCanvasEl;
    // this.canvas.setMargin(50);

    this.polygon = new fabric.Polygon(this.points, {
      left: 0,
      top: 0,
      fill: 'rgba(255,0,0,0.1)',
      strokeWidth: 1,
      stroke: 'lightgrey',
      scaleX: 1,
      scaleY: 1,
      objectCaching: false,
      transparentCorners: false,
      cornerColor: 'blue'
    });
    this.canvas.viewportTransform = [1, 0, 0, 1, 0, 0];
  }

  ngAfterViewInit(): void {}

  selectFile(event: any): void {
    var canvas = this.canvas;
    if (event.target.files) {
      var reader = new FileReader();
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = (event: any) => {
        this.url = event.target.result;
        this.canvas.setHeight(720);
        this.canvas.setWidth(1280);
        fabric.Image.fromURL(this.url, function(img) {
          canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas), {
            scaleX: canvas.width / img.width,
            scaleY: canvas.height / img.height
          });
        });
      };
      this.isImageDrawn = true;
    }
  }
}
