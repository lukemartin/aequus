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
      var aequus;
      aequus = new Aequus($(this));
      aequus.init($(this).data('aequusOptions'));
      return $(this);
    });
  })(window, window.jQuery);

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWVxdXVzLmpzIiwic291cmNlcyI6WyJhZXF1dXMuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0FBQUEsTUFBQSxrRkFBQTs7QUFBQSxFQUFHLENBQUEsU0FBQyxNQUFELEVBQWtCLENBQWxCLEdBQUE7QUFDRCxRQUFBLE1BQUE7QUFBQSxJQUFNO0FBQ0osdUJBQUEsUUFBQSxHQUNFO0FBQUEsUUFBQSxjQUFBLEVBQWdCLElBQWhCO0FBQUEsUUFDQSxZQUFBLEVBQWMsSUFEZDtPQURGLENBQUE7O0FBSWEsTUFBQSxnQkFBQyxLQUFELEdBQUE7QUFBUywyREFBQSxDQUFUO01BQUEsQ0FKYjs7QUFBQSx1QkFNQSxJQUFBLEdBQU0sU0FBQyxPQUFELEdBQUE7QUFDSixRQUFBLElBQUMsQ0FBQSxPQUFELEdBQVcsQ0FBQyxDQUFDLE1BQUYsQ0FBUyxJQUFDLENBQUEsUUFBVixFQUF1QixNQUFBLENBQUEsT0FBQSxLQUFrQixRQUFyQixHQUFtQyxPQUFuQyxHQUFnRDtBQUFBLFVBQUUsY0FBQSxFQUFnQixPQUFsQjtTQUFwRSxDQUFYLENBQUE7ZUFDQSxJQUFDLENBQUEsS0FBRCxDQUFBLEVBRkk7TUFBQSxDQU5OLENBQUE7O0FBQUEsdUJBVUEsS0FBQSxHQUFPLFNBQUEsR0FBQTtlQUNMLENBQUEsQ0FBRSxNQUFGLENBQVMsQ0FBQyxNQUFWLENBQWlCLElBQUMsQ0FBQSxZQUFsQixDQUErQixDQUFDLE9BQWhDLENBQXdDLFFBQXhDLEVBREs7TUFBQSxDQVZQLENBQUE7O0FBQUEsdUJBYUEsWUFBQSxHQUFjLFNBQUMsQ0FBRCxHQUFBO0FBQ1osWUFBQSx3Q0FBQTtBQUFBLFFBQUEsUUFBQSxHQUFXLENBQUEsQ0FBRSxJQUFDLENBQUEsT0FBTyxDQUFDLGNBQVgsRUFBMkIsSUFBQyxDQUFBLElBQTVCLENBQVgsQ0FBQTtBQUFBLFFBQ0EsT0FBQSxHQUFXLElBQUMsQ0FBQSxVQUFELENBQVksUUFBWixDQURYLENBQUE7QUFBQSxRQUVBLFFBQVEsQ0FBQyxHQUFULENBQWEsWUFBYixFQUEyQixDQUEzQixDQUZBLENBQUE7QUFHQSxRQUFBLElBQUcsT0FBQSxHQUFVLENBQWI7QUFDRSxVQUFBLElBQUcsSUFBQyxDQUFBLE9BQU8sQ0FBQyxZQUFaO0FBQ0U7aUJBQVMsZ0ZBQVQsR0FBQTtBQUNFLDRCQUFBLElBQUMsQ0FBQSxZQUFELENBQWMsUUFBUSxDQUFDLEtBQVQsQ0FBZSxPQUFBLEdBQVUsQ0FBekIsRUFBNEIsQ0FBQyxPQUFBLEdBQVUsQ0FBWCxDQUFBLEdBQWdCLE9BQTVDLENBQWQsRUFBQSxDQURGO0FBQUE7NEJBREY7V0FBQSxNQUFBO21CQUlFLElBQUMsQ0FBQSxZQUFELENBQWMsUUFBZCxFQUpGO1dBREY7U0FKWTtNQUFBLENBYmQsQ0FBQTs7QUFBQSx1QkF3QkEsVUFBQSxHQUFZLFNBQUMsUUFBRCxHQUFBO0FBQ1YsWUFBQSx3Q0FBQTtBQUFBLFFBQUEsTUFBQSxHQUFTLENBQUEsQ0FBVCxDQUFBO0FBQ0EsYUFBZSwyRUFBZixHQUFBO0FBQ0UsVUFBQSxhQUFBLEdBQWdCLENBQUEsQ0FBRSxRQUFTLENBQUEsT0FBQSxDQUFYLENBQW9CLENBQUMsTUFBckIsQ0FBQSxDQUE2QixDQUFDLEdBQTlDLENBQUE7QUFDQSxVQUFBLElBQVMsYUFBQSxHQUFnQixNQUFoQixJQUEyQixNQUFBLEtBQVksQ0FBQSxDQUFoRDtBQUFBLGtCQUFBO1dBREE7QUFBQSxVQUVBLE1BQUEsR0FBUyxhQUZULENBREY7QUFBQSxTQURBO0FBS0EsZUFBTyxPQUFQLENBTlU7TUFBQSxDQXhCWixDQUFBOztBQUFBLHVCQWdDQSxZQUFBLEdBQWMsU0FBQyxRQUFELEdBQUE7QUFDWixZQUFBLHdDQUFBO0FBQUEsUUFBQSxNQUFBLEdBQVMsQ0FBQSxDQUFULENBQUE7QUFDQSxhQUFTLCtEQUFULEdBQUE7QUFDRSxVQUFBLElBQXlDLENBQUEsQ0FBRSxRQUFTLENBQUEsQ0FBQSxDQUFYLENBQWMsQ0FBQyxXQUFmLENBQUEsQ0FBQSxHQUErQixNQUF4RTtBQUFBLFlBQUEsTUFBQSxHQUFTLENBQUEsQ0FBRSxRQUFTLENBQUEsQ0FBQSxDQUFYLENBQWMsQ0FBQyxXQUFmLENBQUEsQ0FBVCxDQUFBO1dBREY7QUFBQSxTQURBO0FBR0E7YUFBUyxpRUFBVCxHQUFBO0FBQ0Usd0JBQUEsQ0FBQSxDQUFFLFFBQVMsQ0FBQSxDQUFBLENBQVgsQ0FBYyxDQUFDLEdBQWYsQ0FBbUIsWUFBbkIsRUFBaUMsTUFBakMsRUFBQSxDQURGO0FBQUE7d0JBSlk7TUFBQSxDQWhDZCxDQUFBOztvQkFBQTs7UUFERixDQUFBO0FBQUEsSUEwQ0EsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFMLEdBQWMsU0FBQyxPQUFELEdBQUE7QUFDWixVQUFBLE1BQUE7QUFBQSxNQUFBLE1BQUEsR0FBYSxJQUFBLE1BQUEsQ0FBTyxDQUFBLENBQUUsSUFBRixDQUFQLENBQWIsQ0FBQTtBQUFBLE1BQ0EsTUFBTSxDQUFDLElBQVAsQ0FBWSxPQUFaLENBREEsQ0FBQTthQUVBLENBQUEsQ0FBRSxJQUFGLEVBSFk7SUFBQSxDQTFDZCxDQUFBO1dBK0NBLENBQUEsQ0FBRSxZQUFGLENBQWUsQ0FBQyxJQUFoQixDQUFxQixTQUFBLEdBQUE7QUFDbkIsVUFBQSxNQUFBO0FBQUEsTUFBQSxNQUFBLEdBQWEsSUFBQSxNQUFBLENBQU8sQ0FBQSxDQUFFLElBQUYsQ0FBUCxDQUFiLENBQUE7QUFBQSxNQUNBLE1BQU0sQ0FBQyxJQUFQLENBQVksQ0FBQSxDQUFFLElBQUYsQ0FBTyxDQUFDLElBQVIsQ0FBYSxlQUFiLENBQVosQ0FEQSxDQUFBO2FBRUEsQ0FBQSxDQUFFLElBQUYsRUFIbUI7SUFBQSxDQUFyQixFQWhEQztFQUFBLENBQUEsQ0FBSCxDQUFhLE1BQWIsRUFBeUIsTUFBTSxDQUFDLE1BQWhDLENBQUEsQ0FBQTtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiIyBBZXF1dXNcbmRvICh3aW5kb3cgPSB3aW5kb3csICQgPSB3aW5kb3cualF1ZXJ5KSAtPlxuICBjbGFzcyBBZXF1dXNcbiAgICBkZWZhdWx0czpcbiAgICAgIHRhcmdldFNlbGVjdG9yOiAnbGknLFxuICAgICAgcmVzaXplSW5Sb3dzOiB0cnVlXG5cbiAgICBjb25zdHJ1Y3RvcjogKCRlbGVtKSAtPlxuXG4gICAgaW5pdDogKG9wdGlvbnMpIC0+XG4gICAgICBAb3B0aW9ucyA9ICQuZXh0ZW5kIEBkZWZhdWx0cywgaWYgdHlwZW9mIG9wdGlvbnMgaXMgJ29iamVjdCcgdGhlbiBvcHRpb25zIGVsc2UgeyB0YXJnZXRTZWxlY3Rvcjogb3B0aW9ucyB9XG4gICAgICBAc2V0dXAoKVxuXG4gICAgc2V0dXA6IC0+XG4gICAgICAkKHdpbmRvdykucmVzaXplKEBoYW5kbGVSZXNpemUpLnRyaWdnZXIgJ3Jlc2l6ZSdcblxuICAgIGhhbmRsZVJlc2l6ZTogKGUpID0+XG4gICAgICAkdGFyZ2V0cyA9ICQoQG9wdGlvbnMudGFyZ2V0U2VsZWN0b3IsIEBlbGVtKVxuICAgICAgY29sdW1ucyAgPSBAZ2V0Q29sdW1ucyAkdGFyZ2V0c1xuICAgICAgJHRhcmdldHMuY3NzICdtaW4taGVpZ2h0JywgMFxuICAgICAgaWYgY29sdW1ucyA+IDFcbiAgICAgICAgaWYgQG9wdGlvbnMucmVzaXplSW5Sb3dzXG4gICAgICAgICAgZm9yIGkgaW4gWzAuLk1hdGguY2VpbCgkdGFyZ2V0cy5sZW5ndGggLyBjb2x1bW5zKV0gYnkgMVxuICAgICAgICAgICAgQGFwcGx5SGVpZ2h0cyAkdGFyZ2V0cy5zbGljZShjb2x1bW5zICogaSwgKGNvbHVtbnMgKiBpKSArIGNvbHVtbnMpXG4gICAgICAgIGVsc2VcbiAgICAgICAgICBAYXBwbHlIZWlnaHRzICR0YXJnZXRzXG5cbiAgICBnZXRDb2x1bW5zOiAoJHRhcmdldHMpIC0+XG4gICAgICBvZmZzZXQgPSAtMVxuICAgICAgZm9yIGNvbHVtbnMgaW4gWzAuLiR0YXJnZXRzLmxlbmd0aCAtIDFdIGJ5IDFcbiAgICAgICAgY3VycmVudE9mZnNldCA9ICQoJHRhcmdldHNbY29sdW1uc10pLm9mZnNldCgpLnRvcFxuICAgICAgICBicmVhayBpZiBjdXJyZW50T2Zmc2V0ID4gb2Zmc2V0IGFuZCBvZmZzZXQgaXNudCAtMVxuICAgICAgICBvZmZzZXQgPSBjdXJyZW50T2Zmc2V0XG4gICAgICByZXR1cm4gY29sdW1uc1xuXG4gICAgYXBwbHlIZWlnaHRzOiAoJHRhcmdldHMpIC0+XG4gICAgICBoZWlnaHQgPSAtMVxuICAgICAgZm9yIHQgaW4gWzAuLiR0YXJnZXRzLmxlbmd0aCAtIDFdIGJ5IDFcbiAgICAgICAgaGVpZ2h0ID0gJCgkdGFyZ2V0c1t0XSkub3V0ZXJIZWlnaHQoKSBpZiAkKCR0YXJnZXRzW3RdKS5vdXRlckhlaWdodCgpID4gaGVpZ2h0XG4gICAgICBmb3IgdCBpbiBbMC4uJHRhcmdldHMubGVuZ3RoIC0gMV0gYnkgMVxuICAgICAgICAkKCR0YXJnZXRzW3RdKS5jc3MoJ21pbi1oZWlnaHQnLCBoZWlnaHQpXG5cblxuICAjIGpRdWVyeSBwbHVnaW5cbiAgJC5mbi5hZXF1dXMgPSAob3B0aW9ucykgLT5cbiAgICBhZXF1dXMgPSBuZXcgQWVxdXVzICQodGhpcylcbiAgICBhZXF1dXMuaW5pdCBvcHRpb25zXG4gICAgJCh0aGlzKVxuXG4gICQoJy5qcy1hZXF1dXMnKS5lYWNoIC0+XG4gICAgYWVxdXVzID0gbmV3IEFlcXV1cyAkKHRoaXMpXG4gICAgYWVxdXVzLmluaXQgJCh0aGlzKS5kYXRhKCdhZXF1dXNPcHRpb25zJylcbiAgICAkKHRoaXMpIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9