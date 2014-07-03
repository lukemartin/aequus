# Aequus
do (window = window, $ = window.jQuery) ->
  class Aequus
    defaults:
      targetSelector: 'li',
      resizeInRows: true

    constructor: ($elem) ->

    init: (options) ->
      @options = $.extend @defaults, if typeof options is 'object' then options else { targetSelector: options }
      @setup()

    setup: ->
      $(window).resize(@handleResize).trigger 'resize'

    handleResize: (e) =>
      $targets = $(@options.targetSelector, @elem)
      columns  = @getColumns $targets
      $targets.css 'min-height', 0
      if columns > 1
        if @options.resizeInRows
          for i in [0..Math.ceil($targets.length / columns)] by 1
            @applyHeights $targets.slice(columns * i, (columns * i) + columns)
        else
          @applyHeights $targets

    getColumns: ($targets) ->
      offset = -1
      for columns in [0..$targets.length - 1] by 1
        currentOffset = $($targets[columns]).offset().top
        break if currentOffset > offset and offset isnt -1
        offset = currentOffset
      return columns

    applyHeights: ($targets) ->
      height = -1
      for t in [0..$targets.length - 1] by 1
        height = $($targets[t]).outerHeight() if $($targets[t]).outerHeight() > height
      for t in [0..$targets.length - 1] by 1
        $($targets[t]).css('min-height', height)


  # jQuery plugin
  $.fn.aequus = (options) ->
    aequus = new Aequus $(this)
    aequus.init options
    $(this)

  $('.js-aequus').each ->
    $(this).aequus($(this).data('aequusOptions'))