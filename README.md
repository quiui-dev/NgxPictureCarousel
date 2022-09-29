NgxPictureCarousel
==================

Easy to use picture carousel.

# Features
- Virtual scrolling: do not render all images at once, saving memory and increasing performance.
- Easy width and height control through properties

# Usage
First, import NgxPictureCarousel module:
```typescript
// file: app.module.ts

import {NgxPictureCarouselModule} from '@quiui/ngx-picture-container';

@NgModule({
    imports: [NgxPictureCarouselModule]
})
export class AppModule {}
```

Then, use the `quiui-picture-carousel` HTML tag:
```html
<!--file: app.component.html -->

<!-- width and height defaults are 355.6px and 200px -->
<quiui-picture-carousel 
    [pictures]="pictures"
    width="355.6px"
    height="200px">
</quiui-picture-carousel>
```

```typescript
// file: app.component.ts

@Component({
    //...
})
export class AppComponent {
    pictures = [
        'pictureUrl1',
        'pictureUrl2',
        'pictureUrl3'
    ]
}
```