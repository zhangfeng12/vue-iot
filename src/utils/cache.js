/* eslint-disable no-undef */

//判断浏览器
function isNative() {
    return !("undefined" == typeof native);
}

var ua = navigator.userAgent;
function isIOS() {
    return ua.indexOf('onedrugiosApp') != -1;
}

// 添加一个缓存
export function putCache (k,v) {
    if (isNative()) {
		native.putData(k,v);
    }else if(isIOS()){
        window.prompt('nativePutData',JSON.stringify({k:k,v:v}));
    }else{
        // Cookies.set(k, v, {
        //     path: '/',
        //     maxAge: CACHE_TIME
        // })

        localStorage.setItem(k, v);
    }
  return v;
}

//获取一个缓存
export function getCache (k) {
    let v;
    if (isNative()){
        // native.invoke(method, content, callbackId);
        v = native.getData(k);
    }else if(isIOS()){
        v = window.prompt('nativeGetData',k);
    } else{
        v = localStorage.getItem(k);
    }
    
    return   v || null;
}

//移除一个缓存
export function delCache (k) {
    if (isNative()){
        native.delData(k);
    }else if(isIOS()){
        window.prompt('nativeDelData',k);
    } else{
        localStorage.removeItem(k);
    }

}