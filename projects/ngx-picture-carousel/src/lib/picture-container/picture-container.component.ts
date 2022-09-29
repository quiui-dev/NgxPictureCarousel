import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

type AnimationDirection = 'right' | 'left';

@Component({
  selector: 'quiui-picture-container',
  templateUrl: './picture-container.component.html',
  styleUrls: ['./picture-container.component.scss']
})
export class PictureContainerComponent implements AfterViewInit {

  @ViewChild('container') public container!: ElementRef<HTMLDivElement>;

  constructor() { }

  get imageElement(): HTMLImageElement {
    return this.container.nativeElement.children[0] as HTMLImageElement;
  }

  ngAfterViewInit(): void {
    this.setImageOnAnimationEndEvent();
  }

  private setImageOnAnimationEndEvent(): void {
    const img = this.imageElement;
    img.onanimationend = (evt) => img.classList.remove('anim-slide-left', 'anim-slide-right')
  }

  show(imageSrc: string, direction: AnimationDirection): void {
    const img = this.imageElement;

    img.src = imageSrc;

    this.setImageOnLoadEvent(direction);
  }

  hide(): void {
    this.container.nativeElement.style.display = 'none';
  }

  private setImageOnLoadEvent(direction: AnimationDirection): void {
    const img = this.imageElement;

    img.onload = () => {
      img.classList.remove('anim-slide-left', 'anim-slide-right');
      img.classList.add(`anim-slide-${direction}`);
      this.container.nativeElement.style.display = 'block';
    }
  }
}
