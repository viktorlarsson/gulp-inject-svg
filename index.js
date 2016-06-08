var cheerio = require('cheerio');
var path = require('path');
var fs = require('fs');
var url = require('url');
var es = require('event-stream');
var iconv = require('iconv-lite');

module.exports = function(filePath) {

    var go = function(file, callback) {

        var markup = iconv.decode(file.contents, 'utf-8');

        if(markup.indexOf('�') > -1){
            markup = iconv.decode(file.contents, 'gbk');
            markup = iconv.encode(markup, 'utf-8');
        }

        var dom = cheerio.load(markup, { decodeEntities: false });
        injectSvg(dom);
        file.contents = iconv.encode(dom.html(), 'utf-8');
        return callback(null, file);
    };

    return es.map(go);

    function injectSvg(dom) {

        // Regexp for checking if the file ending has .svg
        var testSvg = /^.*.(svg)$/i;

        dom('img').each(function(idx, el) {
            el = dom(el)
            var src = el.attr('src');

            if (testSvg.test(src) && isLocal(src)) {

                var dir = path.dirname(src);

                var svg;

                try {

                  var inlineTag = fs.readFileSync("." + src).toString();
                  var className = el.attr('class');

                  svg = dom(inlineTag);

                  if(className !== undefined) {
                    svg.addClass(className);
                  }

                } catch (e) {

                  svg = "<!-- File "+ src + " was not found by gulp-inject-svg  -->";

                }

                el.replaceWith(svg)
            }
        })
    }

    function isLocal(href) {
        return href && !url.parse(href).hostname;
    }
}
