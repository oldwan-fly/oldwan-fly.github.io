        //跨浏览器事件处理程序,封装成eventUtil对象
        var eventUtil={
            //添加句柄(事件)
            addHandler:function(element,type,handler){
                // 能力检测是否能用DOM2级事件处理程序
                if (element.addEventListener) {
                    element.addEventListener(type,handler,false);
                // 能力检测是否能用ie的事件处理程序
                }else if (element.attachEvent) {
                    element.attachEvent('on'+type,handler);
                // 以上都不行的话就用DOM0级事件处理程序
                }else{
                    element['on'+type]=handler;
                };
            },
            // 删除句柄
            removeHandler:function(element,type,handler){
                if (element.removeEventListener) {
                    element.removeEventListener(type,handler,false);
                }else if (element.detachEvent) {
                    element.detachEvent('on'+type,handler);
                }else{
                    element['on'+type]=null;
                };
            },

            // 获取兼容不同浏览器的事件对象event
            getEvent:function(event){
                return event?event:window.event;
            },
            // 获取事件类型
            getType:function(event){
                return event.type;
            },
            // 获取事件目标（来自于哪个元素）
            getElment:function(event){
                return event.target||event.srcElement;
            },

            // 阻止事件默认行为
            preventDefault:function(event){
                if (event.preventDefault) {
                    event.preventDefault();
                }else{
                    event.returnValue=false;
                };
            },
            // 阻止冒泡
            stopPropagation:function(event){
                if (event.stopPropagation) {
                    event.stopPropagation();
                }else{
                    event.cancelBubble=true
                };
            }
        }
        