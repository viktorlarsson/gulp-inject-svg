# gulp-inject-svg

[![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

## Information

This gulp plugin will check all img tags with an external svg and replace the tag with inline svg.

[![NPM](https://nodei.co/npm/gulp-inject-svg.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/gulp-inject-svg/)

## Usage

```html
<div class="icon">
  <img src="/assets/img/icons/exclamation_mark.svg" class="icon--exclamation-mark">
</div>
```

#### Note

You either need to use an absolute path relative to your project root

`/src/assets/img/icons/exclamation_mark.svg`

or pass a configuration object to the plugin

`injectSvg({ base: '/src' })`

#### Ignore some SVG files

You can prevent some SVG files from inject by the attribute `data-skip-inject-svg`

```html
<img src="/assets/img/icons/exclamation_mark.svg" data-skip-inject-svg class="icon--exclamation-mark">
```

#### Example

```javascript
var gulp = require('gulp');
var injectSvg = require('gulp-inject-svg');
var injectSvgOptions = { base: '/src' };

gulp.task('injectSvg', function() {

  return gulp.src('/src/**/*.html')
    .pipe(injectSvg(injectSvgOptions))
    .pipe(gulp.dest('public/'));

});

```

Replaces your &lt;img&gt; tags with the corresponding inlined svg file.

```html
<div class="icon">
  <svg class="icon--exclamation-mark" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 32 32"><ellipse class="st0" cx="16" cy="22.9" rx="2.3" ry="2.3"/><path class="st0" d="M18.6 9.8l-1.1 7.7c0 .4-.2.8-.6 1-.3.2-.6.3-.9.3h-.2c-.7-.1-1.2-.7-1.3-1.4l-1.1-7.6c-.2-1.5.8-2.8 2.3-3 1.4-.2 2.7.9 2.9 2.3v.7z"/></svg>
</div>
```
