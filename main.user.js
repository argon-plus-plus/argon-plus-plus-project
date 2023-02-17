// ==UserScript==
// @name         Argon++
// @namespace    https://hellolin.cf/
// @version      0.1.0
// @description  Argron++ Helper
// @author       Hellolin
// @match        *://www.luogu.com.cn/*
// @match        *://www.luogu.org/*
// @match        *://*.luogu.com.cn/*
// @match        *://*.luogu.org/*
// @icon         https://www.luogu.com.cn/favicon.ico
// @grant        none
// ==/UserScript==



(function() {




    var fts=localStorage.getItem('argonpp_font')
    var c_fts=localStorage.getItem('argonpp_code_font')
    if(fts==undefined) fts="system-ui"
    if(c_fts==undefined) c_fts="Consolas"
    var sty=`
    * {
        font-family: ${fts}, system-ui, -apple-system, ui-sans-serif, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji', emoji;
    }
    pre,code,code>*,pre>*,code>*>*,pre>*>*,code>*>*>*,pre>*>*>*,code>*>*>*>*,pre>*>*>*>* {
        font-family: ${c_fts} !important;
    }
    `
    var sty_e = document.createElement('style')
    sty_e.innerHTML=sty
    document.head.appendChild(sty_e)

    if(location.hostname=="www.luogu.com.cn")
    {
        $('document').ready(function(){setTimeout(function(){
            $sdbar = $('#app-old .lg-index-content .lg-right.am-u-lg-3')
            $fele = $($sdbar.children()[0])
            $mndiv = $(`
            <script>
                function argon_changeFont()
                {
                    localStorage.setItem('argonpp_font',$('[name=font-ins-t]')[0].value)
                    show_alert('Argon++', '字体替换完成，刷新所有已打开的洛谷页面来显示效果。')
                    var fts=localStorage.getItem('argonpp_font')
                    if(fts==undefined) fts="system-ui"
                    var sty=\`
                    * {
                        font-family: \${fts}, system-ui, -apple-system, ui-sans-serif, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji', emoji;
                    }
                    \`
                    var sty_e = document.createElement('style')
                    sty_e.innerHTML=sty
                    document.head.appendChild(sty_e)
                }
                function argon_changeCodeFont()
                {
                    localStorage.setItem('argonpp_code_font',$('[name=code-font-ins-t]')[0].value)
                    show_alert('Argon++', '字体替换完成，刷新所有已打开的洛谷页面来显示效果。')
                    var c_fts=localStorage.getItem('argonpp_code_font');
                    if(c_fts==undefined) c_fts="Consolas"
                    var c_sty=\`
                    pre,code,code>*,pre>*,code>*>*,pre>*>*,code>*>*>*,pre>*>*>*,code>*>*>*>*,pre>*>*>*>* {
                        font-family: \${c_fts} !important;
                    }
                    \`
                    var c_sty_e = document.createElement('style')
                    c_sty_e.innerHTML=c_sty
                    document.head.appendChild(c_sty_e)
                }
                function argon_showFont()
                {
                    var fts=localStorage.getItem('argonpp_font')
                    show_alert('Argon++', \`当前字体设置：\${fts}\`)
                }
                function argon_showCodeFont()
                {
                    var c_fts=localStorage.getItem('argonpp_code_font')
                    show_alert('Argon++', \`当前字体设置：\${c_fts}\`)
                }
            </script>

            <div class="lg-article" id="search-user-form">
                <h3>Argon++ <small>By <a target="_blank" href="/user/751017">Hellolin</a></small></h3>

                <p>字体设置（普通）<small>字体名单引号括起来，半角逗号隔开。不填默认 <code>system-ui</code>。</small></p>
                <form id="font-ins">
                    <input type="text" class="am-form-field" name="font-ins-t" placeholder="'Microsoft YaHei', 'Pingfang SC'" autocomplete="off" />
                </form>
                <div align="center">
                <button style="margin-top: 10px" class="am-btn am-btn-sm am-btn-success" id="font-ins-ok" onclick="argon_changeFont()">应用</button>
                <button style="margin-top: 10px" class="am-btn am-btn-sm am-btn-primary" id="font-ins-lu" onclick="argon_showFont()">查询</button>
                </div>

                <p>字体设置（代码）<small>会影响到行内代码和代码块。不填默认 <code>Consolas</code>。</small></p>
                <form id="code-font-ins">
                    <input type="text" class="am-form-field" name="code-font-ins-t" placeholder="'Fira Code', 'Space Mono for Powerline'" autocomplete="off" />
                </form>
                <div align="center">
                <button style="margin-top: 10px" class="am-btn am-btn-sm am-btn-success" id="code-font-ins-ok" onclick="argon_changeCodeFont()">应用</button>
                <button style="margin-top: 10px" class="am-btn am-btn-sm am-btn-primary" id="font-ins-lu" onclick="argon_showCodeFont()">查询</button>
                </div>
            </div>
            `)
            $mndiv.insertAfter($fele)



        },500)})
    }
    setTimeout(function(){
        console.log(`
     ######\\
    ##  __##\\                                            ##\\       ##\\
    ## /  ## | ######\\   ######\\   ######\\  #######\\     ## |      ## |
    ######## |##  __##\\ ##  __##\\ ##  __##\\ ##  __##\\ ########\\ ########\\
    ##  __## |## |  \\__|## /  ## |## /  ## |## |  ## |\\__##  __|\\__##  __|
    ## |  ## |## |      ## |  ## |## |  ## |## |  ## |   ## |      ## |
    ## |  ## |## |      \\####### |\\######  |## |  ## |   \\__|      \\__|
    \\__|  \\__|\\__|       \\____## | \\______/ \\__|  \\__|
                        ##\\   ## |
                        \\######  |
                         \\______/

    By HelloLin`)
    },500)
})();
