(function () {
    /**
     * Create a cached version of a pure function.
     */
    
    
    /**
     * Hyphenate a camelCase string.
     */
    
    
    var hasOwn = Object.prototype.hasOwnProperty;
    
    /**
     * Simple Object.assign polyfill
     */
    var merge =
      Object.assign ||
      function (to) {
        var arguments$1 = arguments;
    
        for (var i = 1; i < arguments.length; i++) {
          var from = Object(arguments$1[i]);
    
          for (var key in from) {
            if (hasOwn.call(from, key)) {
              to[key] = from[key];
            }
          }
        }
    
        return to
      };
    
    /**
     * Check if value is primitive
     */
    
    
    /**
     * Perform no operation.
     */
    
    
    /**
     * Check if value is function
     */
    function isFn(obj) {
      return typeof obj === 'function'
    }
    
    function install(hook, vm) {
      var config = vm.config.docsifyPrism || {};
      hook.init(function () {
        var customConf = {
          renderer: {
            code: function (code, lang, escaped) {
    
              //fire beforeRender Hook
              if (isFn(config.beforeRender)) {
                code = config.beforeRender(code, lang);
              }
    
              //替换为字符实体
              var codeArray = code.split('');
    
              var encodeArray = [];
              codeArray.forEach(function (element) {
                switch (element) {
                  case ' ': encodeArray.push('&nbsp;'); break;
                  case '<': encodeArray.push('&lt;'); break;
                  case '>': encodeArray.push('&gt;'); break;
                  case '&': encodeArray.push('&amp;'); break;
                  case '"': encodeArray.push('&quot;'); break;
                  case "'": encodeArray.push('&apos;'); break;
                  default: encodeArray.push(element);
                }
              });
    
              code = encodeArray.join('');
              code = "<pre v-pre data-lang=\"" + lang + "\"><code class=\"lang-" + lang + "\">" + code + "</code></pre>";
    
              //fire afterRender Hook
              if (isFn(config.afterRender)) {
                code = config.afterRender(code);
              }
    
              return code
            }
          }
    
        };
        if (isFn(config.init)) {
          config.init();
        }
    
    
        var mdConf = vm.config.markdown || {};
    
        if (!isFn(mdConf)) {
          vm.config = merge(vm.config, {
            markdown: merge(mdConf, customConf)
          });
        }
      });
    
    
    
      hook.doneEach(function () {
        var main = document.getElementById('main');
        Prism.highlightAllUnder(main);
      });
    
    }
    
    $docsify.plugins = [].concat(install, $docsify.plugins);
    
    }());
    