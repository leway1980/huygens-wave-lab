# 惠更斯波動實驗室

[開啟互動教具](https://leway1980.github.io/huygens-wave-lab/)

正體中文、零依賴的單檔 Canvas 教具。用情境選單切換，可暫停、單步、重設；既有 `shm/` 保留。

## 課堂入口

| 情境 | 操作與觀察 |
| --- | --- |
| [平面波](https://leway1980.github.io/huygens-wave-lab/#plane)、[圓形波](https://leway1980.github.io/huygens-wave-lab/#circle) | 次級點波源、子波與共同包絡 |
| [折射](https://leway1980.github.io/huygens-wave-lab/#refraction)、[反射](https://leway1980.github.io/huygens-wave-lab/#reflection) | 角度、波速與波長；折射可開啟逐步三角形推導 |
| [水波干涉](https://leway1980.github.io/huygens-wave-lab/#interference) | 分別調頻率；等距線固定，異頻中央相長線移動 |
| [教材繞射](https://leway1980.github.io/huygens-wave-lab/#diffraction) | 狹縫、障礙物與單側邊緣；比較尺寸／波長 |
| [聲音干涉](https://leway1980.github.io/huygens-wave-lab/#sound) | 拖曳偵測器，比較相長／相消處的音量 |
| [雷射雙縫](https://leway1980.github.io/huygens-wave-lab/#laser) | 屏幕條紋移到強度曲線上或分開；共同 y 座標 |
| [蜘蛛絲](https://leway1980.github.io/huygens-wave-lab/#spider) | 四個理想微滴：白光、間距、觀察角、同色波疊加、眼睛看到的色彩 |
| [光碟片](https://leway1980.github.io/huygens-wave-lab/#cd) | 正常入射的局部反射光柵；可對準紅、綠、藍亮紋 |
| [牛頓環](https://leway1980.github.io/huygens-wave-lab/#newton) | 拖曳黃點，對照半徑、膜厚、反射波；下方有透鏡與平玻璃剖面 |
| [油膜](https://leway1980.github.io/huygens-wave-lab/#oil) | 固定圖樣、拖曳取樣、三色反射波與合成色 |
| [肥皂泡](https://leway1980.github.io/huygens-wave-lab/#bubble) | 固定球面膜厚圖樣、拖曳取樣 |
| [聲音的都卜勒](https://leway1980.github.io/huygens-wave-lab/#doppler) | 車子與人各自勾選移動、設定正負速度、拖曳重新放置、播放耳邊音高 |
| [光的都卜勒](https://leway1980.github.io/huygens-wave-lab/#lightdoppler) | 太陽型恆星／星系與企業號；切換靜止視角、接近／遠離，看波前與光譜 |

上述 hash 網址可直接放進簡報。聲音須按播放啟動。

## 2026-11-03 第二版教學修訂

版本標記：`20261103-wave-life-2`。

- 已移除摩爾紋頁及路由。本次集中在波動、干涉與都卜勒。
- 生活光學改用行進波形，從白光、各路同色波的相位與振幅，連到眼睛收到的合成色，不用移動光點代替波。
- 陣列的白光照到全部四個位置；入射固定垂直，θ 只表示觀察角。間距、角度、波形與相長方向用同一計算。
- 油膜、肥皂泡及牛頓環的圖樣不隨播放時間變化。直接拖曳取樣點，當地膜厚同步決定各色反射波、反射率及合成色。
- 聲音頁保留歷史發聲位置；改速度不重建舊波，耳邊頻率使用當下真正抵達的延遲發聲狀態。
- 光的都卜勒獨立成頁，分開呈現參考光譜線與太陽型白光色調。

## 模型邊界

- 繞射是連續開口的前向純量角譜（惠更斯積分等價表示），含倏逝項；域 8192 與 16384 的代表點複數場最大差約 0.001474。不含完整流體／電磁邊界反射。
- 水波使用各自的延遲相位；異頻黃線是移動的相位差零分支，並非固定中央亮紋。
- 薄膜採無吸收 Fresnel/Airy 反射率。A 為表面反射，B 為內部反射的合計複振幅；波形 A+B 與反射率來自同一計算。光路分開、膜厚放大畫，數值採正常入射。
- 油膜：空氣－油－水；皂膜：空氣－膜－空氣；牛頓環：玻璃－空氣－玻璃。零厚度時，皂膜及對稱玻璃夾層反射為零，油膜則回到空氣－水反射。
- 白光為等能連續波長加寬頻 RGB 感光近似，非 D65／校色照片。紅色偏強不等於其他色完全消失。左圖道路／球面陰影固定；右側色塊為未加陰影的模型色。
- 蜘蛛絲提供理想規則微滴及局部平膜概念模型；不能用來替所有蛛網照片定因。光碟為局部一維反射光柵，不含完整三維散射包絡。
- 聲速 343 m/s；車速 −200～200、人速 −120～120 m/s，正為向右。`f耳=f源(c−n v人)/(c−n v車)`，n 為延遲發聲處到人的方向。只有人移動時，空氣中的波長不變。
- 圖面統一慢動作，聲音用實際頻率。初始包含連續發聲穩態；快速比較／重新比較明確重開一輪。變更車速保留舊波，耳邊有傳播延遲。
- 光採視線方向相對論公式，β 正為遠離：`λ收到/λ發出=sqrt((1+β)/(1−β))`。光源移動視角包含 γ 發光週期；光源靜止視角不因船移動而壓縮波前。光譜數值是船上尺鐘量得。
- 白光恆星用 5778 K Planck 光譜移動並正規化亮度，不模擬完整色度、相對論增亮或宇宙膨脹紅移。超出可見光的參考波前用灰色示意。

## 驗證與接手

```sh
node check.cjs
node smoke.cjs
```

- 數值：991 項通過，包含薄膜複振幅、牛頓暗環、光柵角、繞射收斂、連續發聲週期、延遲抵達、獨立聲源／觀察者運動及相對論波長比。
- 實際完整 inline script：15 情境／80 項通過，DOM／Canvas 為測試替身；另以 Chrome 操作補足。
- 獨立審查另跑 7 個反例：停車後先收到舊波，之後才恢復原頻率；光的兩種視角均符合相對論波長比。
- Chrome 實際拖曳油膜取樣，膜厚約 457→525 nm，三色反射率同步更新；靜止 440 Hz 車聲、觀察者 ±40 m/s 時，顯示並啟動約 491／389 Hz 音訊。
- 無新增套件、帳號、權限或資料蒐集。網站不記錄操作，來源連結只在點按時開啟。

## 來源

- [OpenStax：薄膜與反射相位](https://openstax.org/books/university-physics-volume-3/pages/3-4-interference-in-thin-films)
- [UNSW：牛頓環](https://www.animations.physics.unsw.edu.au/jw/light/Newton%27s-rings.html)
- [OpenStax：反射光柵與光碟](https://openstax.org/books/physics/pages/17-2-applications-of-diffraction-interference-and-coherence)
- [Leibniz Universität Hannover：蛛網的不同光學效應](https://www.itp.uni-hannover.de/fileadmin/itp/emeritus/zawischa/static_html/spiderweb.html)
- [OpenStax：聲音都卜勒](https://openstax.org/books/university-physics-volume-1/pages/17-7-the-doppler-effect)
- [OpenStax：光的都卜勒](https://openstax.org/books/university-physics-volume-3/pages/5-7-doppler-effect-for-light)

