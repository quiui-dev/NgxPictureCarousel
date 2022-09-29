import { AfterViewInit, Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { PictureContainerComponent } from '../picture-container/picture-container.component';

type AnimationDirection = 'left' | 'right';

@Component({
  selector: 'quiui-picture-carousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.scss']
})
export class CarouselComponent implements AfterViewInit, OnChanges {
  private currentDisplayingPictureIdx = 0;
  private displayingPicContainer!: PictureContainerComponent;
  private hiddenPicContainer!: PictureContainerComponent;

  /**
   * Array of pictures URLs
   */
  @Input() pictures: string[] = [];

  /**
   * Desired height, as string. Ex: 200px.
   * @default '200px'
   */
  @Input() height: string = '200px';

  /**
   * Desired width, as string. Ex: 355.6px.
   * @default '355.6px'
   */
  @Input() width: string = '355.6px';

  @ViewChild('picContainer1') pictureContainer1!: PictureContainerComponent;
  @ViewChild('picContainer2') pictureContainer2!: PictureContainerComponent;

  containerStyles = {
    width: this.width,
    height: this.height
  }

  constructor() {}

  get showPriorButton(): boolean {
    return this.currentDisplayingPictureIdx > 0;
  }

  get showNextButton(): boolean {
    return this.currentDisplayingPictureIdx + 1 < this.pictures.length;
  }

  get displayingPictureSrc(): string {
    return this.pictures.length && this.currentDisplayingPictureIdx !== -1 ? 
      this.pictures[this.currentDisplayingPictureIdx] : 
      '';
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.containerStyles.width = `${this.width}`;
    this.containerStyles.height = `${this.height}`;
  }

  ngAfterViewInit(): void {
    this.displayingPicContainer = this.pictureContainer1;
    this.hiddenPicContainer = this.pictureContainer2;

    this.displayingPicContainer.show(this.displayingPictureSrc, 'left');
  }

  prior(): void {
    if (this.currentDisplayingPictureIdx === 0)
      return;

    this.currentDisplayingPictureIdx--;

    this.updateDisplayingPicture('left');
  }

  next(): void {
    if (this.currentDisplayingPictureIdx + 1 >= this.pictures.length)
      return;

    this.currentDisplayingPictureIdx++;

    this.updateDisplayingPicture('right');
  }

  private updateDisplayingPicture(direction: AnimationDirection): void {
    this.displayingPicContainer.hide();
    this.hiddenPicContainer.show(this.displayingPictureSrc, direction);

    this.swapDisplayingItem();
  }

  private swapDisplayingItem(): void {
    const tmp = this.displayingPicContainer;
    this.displayingPicContainer = this.hiddenPicContainer;
    this.hiddenPicContainer = tmp;
  }
}
