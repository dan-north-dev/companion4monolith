Nav = {
    _id: null,
    _icons: [],
    _actions: {},
    _floatingActions: {},
    _cb: [],
    
    addIcon: function(label, icon, id, onSelect) 
    {
        var item = {
            label: label,
            icon: icon,
            id: id,
            onSelect: onSelect
        };
        Nav._icons.push(item);
        Nav._actions[id] = [];
        Nav._floatingActions[id] = [];
        
        if (Nav._id)
        {
            var code = Nav._drawIcon(item);
            $("#" + Nav._id).children("ul").append(code);
            code = Nav._drawContent(item);
            $("#" + Nav._id + "-contents").append(code);
            code = "<ul for=\"" + id + "\"></ul>";
            $("#" + Nav._id + "-toolbar").append(code);
            $("#" + Nav._id + "-floatingtoolbar").append(code);
        }
    },

    _drawIcons: function ()
    {
        var s = "";
        for (var i in Nav._icons)
        {
            s += Nav._drawIcon(Nav._icons[i]);
        }
        return s;
    },

    _drawIcon: function (item)
    {
        return "<li><a class=\"" + item.icon + "\" href=\"javascript:void(0);\" for=\"" + item.id + "\" onclick=\"Nav.switchTo(this)\"><span>" + item.label + "</span></a></li>"
    },

    _drawContents: function ()
    {
        var s = "";
        for (var i in Nav._icons)
        {
            s += Nav._drawContent(Nav._icons[i]);
        }
        return s;
    },

    _drawContent: function (item)
    {
        return "<div id=\"" + item.id + "\" title=\"" + item.label + "\"></div>"
    },
    
    addAction: function(iconId, label, icon, id, fn) 
    {
        var item = {
            label: label,
            icon: icon,
            id: id,
            fn: fn,
            hidden: false
        };
        Nav._actions[iconId].push(item);
        
        if (Nav._id)
        {
            var code = Nav._drawAction(iconId, item);
            $("#" + Nav._id + "-toolbar").children("ul[for='" + iconId + "']").append(code);
        }
    },
    
    addFloatingAction: function(iconId, label, icon, id, fn)
    {
        var item = {
            label: label,
            icon: icon,
            id: id,
            fn: fn,
            hidden: false
        };
        Nav._floatingActions[iconId].push(item);
        
        if (Nav._id)
        {
            var code = Nav._drawFloatingAction(iconId, item);
            $("#" + Nav._id + "-floatingtoolbar").children("ul[for='" + iconId + "']").append(code);
        }
    },

    showAction: function(iconId, id)
    {
        for (var i in Nav._actions[iconId])
        {
            if (Nav._actions[iconId][i].id == id && Nav._actions[iconId][i].hidden)
            {
                Nav._actions[iconId][i].hidden = false;
                anychange = true;
                $('#actions-' + iconId + "-" + Nav._actions[iconId][i].id).show();
                Nav.updateTitle();
                return;
            }
        }        
    },

    showFloatingAction: function(iconId, id)
    {
        for (var i in Nav._floatingActions[iconId])
        {
            if (Nav._floatingActions[iconId][i].id == id && Nav._floatingActions[iconId][i].hidden)
            {
                Nav._floatingActions[iconId][i].hidden = false;
                anychange = true;
                $('#floatingactions-' + iconId + "-" + Nav._floatingActions[iconId][i].id).show();
                return;
            }
        }        
    },

    hideAction: function(iconId, id)
    {
        for (var i in Nav._actions[iconId])
        {
            if (Nav._actions[iconId][i].id == id && !Nav._actions[iconId][i].hidden)
            {
                Nav._actions[iconId][i].hidden = true;
                $('#actions-' + iconId + "-" + Nav._actions[iconId][i].id).hide();
                Nav.updateTitle();
                return;
            }
        }        
    },

    hideFloatingAction: function(iconId, id)
    {
        for (var i in Nav._floatingActions[iconId])
        {
            if (Nav._floatingActions[iconId][i].id == id && !Nav._floatingActions[iconId][i].hidden)
            {
                Nav._floatingActions[iconId][i].hidden = true;
                $('#floatingactions-' + iconId + "-" + Nav._floatingActions[iconId][i].id).hide();
                return;
            }
        }        
    },

    _drawActions: function ()
    {
        var s = "";
        
        for (var i in Nav._icons)
        {
            s = "<ul for=\"" + Nav._icons[i].id + "\">";
            s += Nav._drawAction(i, Nav._actions[Nav._icons[i]]);
            s += "</ul>";
        }
        
        return s ;
    },

    _drawFloatingActions: function ()
    {
        var s = "";
        
        for (var i in Nav._icons)
        {
            s = "<ul for=\"" + Nav._icons[i].id + "\">";
            s += Nav._drawAction(i, Nav._actions[Nav._icons[i]]);
            s += "</ul>";
        }
        
        return s ;
    },

    _drawAction: function (iconId, item)
    {
        return "<li><a class=\"" + item.icon + "\" href=\"javascript:void(0);\" id=\"actions-" + iconId + "-" + item.id + "\" onclick=\"Nav.act(this)\" title=\"" + item.label + "\"></a></li>";
    },

    _drawFloatingAction: function (iconId, item)
    {
        return "<li><a class=\"" + item.icon + "\" href=\"javascript:void(0);\" id=\"floatingactions-" + iconId + "-" + item.id + "\" onclick=\"Nav.floatingAct(this)\" title=\"" + item.label + "\"><span>" + item.label + "</span></a></li>";
    },

    switchTo: function(elt)
    {
        elt = elt || $('.nav > ul > li > a')[0];
        
        var id = elt.getAttribute("for");
        
        var toSelect = $('#' + id);
        if (!toSelect.is(".active"))
        {
            window.location.hash = "#" + id;
    
            $("#" + Nav._id + "-toolbar ul.active").removeClass("active");
            $("#" + Nav._id + "-floatingtoolbar ul.active").removeClass("active");
            $("#" + Nav._id + "-toolbar ul[for='" + id + "']").addClass("active");
            $("#" + Nav._id + "-floatingtoolbar ul[for='" + id + "']").addClass("active");
    
            $("#" + Nav._id + "-contents > .active").removeClass("active");
            toSelect.addClass("active");
            toSelect.trigger("show");
            
            $("#" + Nav._id + " ul li a.active").removeClass("active");
            $("#" + Nav._id + " ul li a[for=" + id + "]").addClass("active");
            
            Nav.updateTitle();
        }
    },
    
    act: function(elt)
    {
        var id = elt.getAttribute("id").substring("actions-".length);
        var iconId = elt.parentNode.parentNode.getAttribute("for");
        id = id.substring(iconId.length + 1);

        for (var i in Nav._actions[iconId])
        {
            if (Nav._actions[iconId][i].id == id)
            {
                Nav._actions[iconId][i].fn();
            }
        }
    },
    
    
    floatingAct: function(elt)
    {
        var id = elt.getAttribute("id").substring("floatingactions-".length);
        var iconId = elt.parentNode.parentNode.getAttribute("for");
        id = id.substring(iconId.length + 1);

        for (var i in Nav._floatingActions[iconId])
        {
            if (Nav._floatingActions[iconId][i].id == id)
            {
                Nav._floatingActions[iconId][i].fn();
            }
        }
    },    
    
    updateTitle: function()
    {
        var id = $("#" + Nav._id + " ul li a.active").attr("for");
        var toSelect = $("#" + id);
        
        var t = $(".header .title div")
        t.html((toSelect.attr('title') || About._i18n[Language].smallName));

        var sizes = ["size10", "size9", "size8", "size7", "size6", "size5", "size4", "size3", "size2", "size1", "size0", "size-1", "size-2"];
        t.removeClass(sizes.join(" "));
        
        var tb = $(".header .toolbar")
        var maxWidth = $(".header").width() - tb.width();
        var maxHeight = 60;
        
        for (var i = 0; i < sizes.length; i++)
        {
            if (t.width() > maxWidth || t.height() > maxHeight)
            {
                t.addClass(sizes[i]);
            }
            else
            {
                break;
            }
        }
    },
    
    updateNav: function()
    {
        var nav = $("#" + Nav._id);
        
        var sizes = ["size10", "size9", "size8", "size7", "size6", "size5", "size4", "size3", "size2", "size1"];

        nav.removeClass(sizes.join(" "));
        
        var tabs = nav.find("a");
        var maxWidth = tabs.width();

        for (var i = 0; i < sizes.length; i++)
        {
            var tooSmall = false;
            tabs.each(function(tindex, t) {
                var st = $("span", t); 
                if (st.width() > maxWidth)
                {
                    tooSmall = true;
                    return false;
                }
            });
            if (tooSmall)
            {
                nav.addClass(sizes[i]);
            }
            else
            {
                break;
            }
        }
    },

    initialize: function()
    {
        
        Nav._id = "nav-" + parseInt(Math.random() * 1000);
        var code = "<header class=\"header\">"
                    + "<div class=\"title\"><div>" + About._i18n[Language].smallName + "</div></div>"
                    + "<nav class=\"toolbar\" id=\"" + Nav._id + "-toolbar\">"
                        + Nav._drawActions()
                    + "</nav>"
                    + "</header>"
                    + "<nav class=\"floating-toolbar\" id=\"" + Nav._id + "-floatingtoolbar\">"
                        + Nav._drawFloatingActions()
                    + "</nav>"
                    + "<nav class=\"nav\" id=\"" + Nav._id + "\">"
                        + "<ul>" 
                            + Nav._drawIcons()
                        + "</ul>"
                    + "</nav>"
                    + "<div class=\"contents\" id=\"" + Nav._id + "-contents\">"
                        + Nav._drawContents()
                    + "</div>";
        $(document.body).prepend(code);
        
        document.fonts.ready.then(function() { Nav.updateTitle(); Nav.updateNav(); $(".nav-menu").each(function(i, s) { Nav.updateTabsSize(s) }); });
        $(window).on('resize', function() { Nav.updateTitle(); Nav.updateNav(); });
        $(window).on('hashchange', function() { Nav._hashChange() });
        
        function resize()
        {
           a = (window.innerHeight) + "px"
           document.body.parentNode.style.height = a;
        }
        $(window).on('resize', resize);
        resize();  
        
        window.scrollTo(0, 111111)
    },
    
    _hashChange: function(e)
    {
        window.scrollTo(0, 0);
        
        if (e && e.originalEvent.oldURL.endsWith("-dialog"))
        {
            Nav.closeDialog(true);
        }
        
        var hash = window.location.hash;
        if (hash.endsWith("-dialog"))
        {
            hash = hash.substring(0, hash.indexOf("-dialog"));
        }

        var elt;
        
        var matcher = /#([a-z0-9_-]*)/i.exec(hash);
        if (matcher
            && (elt = $("nav a[for=" + matcher[1] + "]")[0]))
        {
            Nav.switchTo(elt);
            return true;
        }
        else
        {
            // Nothing
            return false;
        }
    },
    
    dialog: function(title, code, callback, actions)
    {
        function drawactions()
        {
            var c = "";
            if (actions)
            {
                c += "<ul class='actions'>";
                for (var i in actions)
                {
                    c += "<li>"
                    c += "<a href=\"javascript:void(0);\" onclick=\"" + actions[i].fn + "\" class=\"" + actions[i].icon + "\" title=\"" + actions[i].label + "\"></a>"
                    c += "</li>"
                }
                c += "</ul>";
            }
            return c;
        }
        
        code = "<div id=\"dialog\" class=\"dialog\">"
                + "<div class=\"dialog-header\">"
                    + "<a class=\"dialog-back\" href=\"javascript:void(0);\" onclick=\"Nav.closeDialog()\"></a>"
                    + "<div class=\"dialog-title\">" + title + "</div>"
                    + drawactions()
                + "</div>"
                + "<div class=\"dialog-content\">"
                    + code 
                + "</div>"
              + "</div>";
        $(document.body).append(code);
        if (!window.location.hash.endsWith("-dialog"))
        {
            window.location.hash += "-dialog";
        }
        
        Nav._cb.push(callback);
    },
    
    closeDialog: function(all)
    {
        var d = $(".dialog").last();
        if (d.length > 0)
        {
            var cb = Nav._cb.pop(); 
            if (cb)
            {
                cb();
            }

            d.remove();
            
            if ($(".dialog").length == 0)
            {
                if (window.location.hash.endsWith("-dialog"))
                {
                    window.location.hash = window.location.hash.substring(0, window.location.hash.indexOf('-dialog'));
                }
            }
            else if (all)
            {
                Nav.closeDialog(true);
            }
        }
    },
    
    updateTabsSize: function(s)
    {
            var slider = $(s);
            
            var sizes = ["size10", "size9", "size8", "size7", "size6", "size5", "size4", "size3", "size2", "size1"];
            
            slider.removeClass(sizes.join(" "));
            
            
            var tabs = slider.find("a");
            var maxWidth = tabs.width();
            
            var button = slider.prev();
            if (button)
            {
                $(button).width(tabs.offset().left);
            }

            for (var i = 0; i < sizes.length; i++)
            {
                var tooSmall = false;
                tabs.each(function(tindex, t) {
                    if ($("span", t).width() > maxWidth)
                    {
                        tooSmall = true;
                        return false;
                    }
                });
                if (tooSmall)
                {
                    slider.addClass(sizes[i]);
                }
                else
                {
                    break;
                }
            }
    },
    
    createTabs: function(id, tabs, onSetPosition, button)
    {
        var subcode = "";
        var subzone = "";
        for (var i in tabs)
        {
            subcode += "<a href=\"javascript:void(0)\"><span>" + tabs[i].label + "</span></a>";
            subzone += "<div id=\"" + tabs[i].id + "\"></div>";
        }
        
        var code = "";
        if (button)
        {
            code += "<a class='nav-button " + button.cls + "' onclick=\"" + button.action + "\" href='javascript:void(0)' title=\"" + button.label + "\"></a>"
        }
        code += "<div class=\"nav-menu\">"
              +      subcode
              + "</div>"
              + "<div class=\"nav-wrapper\">"
              +      subzone
              + "</div>";
        
        $("#" + id).attr("data-navsize", tabs.length).append(code);
        
        var m = "#" + id + " .nav-menu";
        var w = "#" + id + " .nav-wrapper";
        
        var $m = $(m);
        var $w = $(w);

        var aaa = $m.slick({
            slidesToShow: tabs.length + 0.5,
            slidesToScroll: 1,
            arrows: true,
            infinite: false,
            swipeToSlide: true,
            focusOnSelect: true,
            touchThreshold: 10,
            asNavFor: w 
        });
        var t = aaa[0].slick.setDimensions;
        aaa[0].slick.setDimensions = function() {
            t.apply(aaa[0].slick);
            Nav.updateTabsSize(aaa[0]);
        }
        Nav.updateTabsSize(aaa[0]);
        
        $w.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            infinite: false,
            swipeToSlide: true,
            touchThreshold: 10,
            asNavFor: m 
        });
            
        if (onSetPosition)
        {
            $(w).on('setPosition', onSetPosition);
        }
    }
}

Utils._toInitialize.push(Nav.initialize);