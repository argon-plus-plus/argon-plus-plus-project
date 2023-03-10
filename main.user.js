// ==UserScript==
// @name         Argon++
// @namespace    https://hellolin.cf/
// @version      0.1.1
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
    var version="Beta v0.1.1"
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

    ${version}
    By HelloLin`)
    },500)
    var cc = document.createElement('span')
    cc.innerHTML=`
    <br/>
    Argon++ ${version} by Hellolin
    <br/>
    Bring you a brand new Luogu design.
    `
    document.getElementsByClassName('footer')[0].children[3].children[0].appendChild(cc)



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
                    show_alert('Argon++', '???????????????????????????????????????????????????????????????????????????')
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
                    show_alert('Argon++', '???????????????????????????????????????????????????????????????????????????')
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
                    show_alert('Argon++', \`?????????????????????\${fts}\`)
                }
                function argon_showCodeFont()
                {
                    var c_fts=localStorage.getItem('argonpp_code_font')
                    show_alert('Argon++', \`?????????????????????\${c_fts}\`)
                }
                function argon_fontEnter(event)
                {
                    event=event||window.event
                    if(event.keyCode==13) argon_changeFont()
                }
                function argon_fontCodeEnter(event)
                {
                    event=event||window.event
                    if(event.keyCode==13) argon_changeCodeFont()
                }
            </script>

            <div class="lg-article" id="search-user-form">
                <h3>Argon++ <small>By <a target="_blank" href="/user/751017">Hellolin</a></small></h3>

                <p>????????????????????????<small>??????????????????????????????????????????????????????????????? <code>system-ui</code>???</small></p>
                <form id="font-ins">
                    <input onkeydown="argon_fontEnter()"  type="text" class="am-form-field" name="font-ins-t" placeholder="'Microsoft YaHei', 'Pingfang SC'" autocomplete="off" />
                </form>
                <div align="center">
                <button style="margin-top: 10px" class="am-btn am-btn-sm am-btn-success" id="font-ins-ok" onclick="argon_changeFont()">??????</button>
                <button style="margin-top: 10px" class="am-btn am-btn-sm am-btn-primary" id="font-ins-lu" onclick="argon_showFont()">??????</button>
                </div>

                <p>????????????????????????<small>??????????????????????????????????????????????????? <code>Consolas</code>???</small></p>
                <form id="code-font-ins">
                    <input onkeydown="argon_fontCodeEnter()" type="text" class="am-form-field" name="code-font-ins-t" placeholder="'Fira Code', 'Space Mono for Powerline'" autocomplete="off" />
                </form>
                <div align="center">
                <button style="margin-top: 10px" class="am-btn am-btn-sm am-btn-success" id="code-font-ins-ok" onclick="argon_changeCodeFont()">??????</button>
                <button style="margin-top: 10px" class="am-btn am-btn-sm am-btn-primary" id="font-ins-lu" onclick="argon_showCodeFont()">??????</button>
                </div>
            </div>
            `)
            $mndiv.insertAfter($fele)



        },500)})
    }

})();
