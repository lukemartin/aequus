/**
 * aequus - Responsive even heights
 * @version v0.0.1
 * @link https://github.com/lukemartin/aequus
 * @license MIT License
 */
(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  (function(window, $) {
    var Aequus;
    Aequus = (function() {
      Aequus.prototype.defaults = {
        targetSelector: 'li',
        resizeInRows: true
      };

      function Aequus($elem) {
        this.handleResize = __bind(this.handleResize, this);
      }

      Aequus.prototype.init = function(options) {
        this.options = $.extend(this.defaults, typeof options === 'object' ? options : {
          targetSelector: options
        });
        return this.setup();
      };

      Aequus.prototype.setup = function() {
        return $(window).resize(this.handleResize).trigger('resize');
      };

      Aequus.prototype.handleResize = function(e) {
        var $targets, columns, i, _i, _ref, _results;
        $targets = $(this.options.targetSelector, this.elem);
        columns = this.getColumns($targets);
        $targets.css('min-height', 0);
        if (columns > 1) {
          if (this.options.resizeInRows) {
            _results = [];
            for (i = _i = 0, _ref = Math.ceil($targets.length / columns); _i <= _ref; i = _i += 1) {
              _results.push(this.applyHeights($targets.slice(columns * i, (columns * i) + columns)));
            }
            return _results;
          } else {
            return this.applyHeights($targets);
          }
        }
      };

      Aequus.prototype.getColumns = function($targets) {
        var columns, currentOffset, offset, _i, _ref;
        offset = -1;
        for (columns = _i = 0, _ref = $targets.length - 1; _i <= _ref; columns = _i += 1) {
          currentOffset = $($targets[columns]).offset().top;
          if (currentOffset > offset && offset !== -1) {
            break;
          }
          offset = currentOffset;
        }
        return columns;
      };

      Aequus.prototype.applyHeights = function($targets) {
        var height, t, _i, _j, _ref, _ref1, _results;
        height = -1;
        for (t = _i = 0, _ref = $targets.length - 1; _i <= _ref; t = _i += 1) {
          if ($($targets[t]).outerHeight() > height) {
            height = $($targets[t]).outerHeight();
          }
        }
        _results = [];
        for (t = _j = 0, _ref1 = $targets.length - 1; _j <= _ref1; t = _j += 1) {
          _results.push($($targets[t]).css('min-height', height));
        }
        return _results;
      };

      return Aequus;

    })();
    $.fn.aequus = function(options) {
      var aequus;
      aequus = new Aequus($(this));
      aequus.init(options);
      return $(this);
    };
    return $('.js-aequus').each(function() {
      return $(this).aequus($(this).data('aequusOptions'));
    });
  })(window, window.jQuery);

}).call(this);
