gulp-inject-svg
===========

## Information

This gulp plugin will check all img tags with an external svg and replace the tag with inline svg.

## Usage

```html
<div class="icon">
  <img src="/assets/img/icons/exclamation_mark.svg">
</div>
```

```javascript
var injectSvg = require('gulp-inject-svg');

gulp.task('injectSvg', function() {

  return gulp.src('assets/**/*.html')
    .pipe(injectSvg())
    .pipe(gulp.dest('dist/'));

});

```

Replaces your &lt;img&gt; tags with the corresponding inlined svg file.

```html
<div class="icon">
  <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 32 32"><ellipse class="st0" cx="16" cy="22.9" rx="2.3" ry="2.3"/><path class="st0" d="M18.6 9.8l-1.1 7.7c0 .4-.2.8-.6 1-.3.2-.6.3-.9.3h-.2c-.7-.1-1.2-.7-1.3-1.4l-1.1-7.6c-.2-1.5.8-2.8 2.3-3 1.4-.2 2.7.9 2.9 2.3v.7z"/></svg>
</div>
```
