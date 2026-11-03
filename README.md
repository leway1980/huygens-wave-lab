# 惠更斯波動實驗室

[開啟互動教具](https://leway1980.github.io/huygens-wave-lab/)

可離線開啟的單檔網頁教具，使用正體中文，無需帳號或安裝。

包含平面波、圓形波、折射與司乃耳定律、反射、雙波源干涉、單縫繞射、聲音干涉偵測器與紅綠雷射雙縫干涉。

## 使用

- 用情境選單切換，主要工具列保留播放、單步；點波源數量與圖示開關收在「更多設定」。
- 折射情境按「三角形推導」，可放大 OEF、OGF 兩個直角三角形，看出共同邊 OF、波長 FE／OG 與角度的關係，再以正弦比推出司乃耳定律。關閉後回到原本播放狀態；退化條件會顯示說明。
- 雷射混光保留主要滑桿，顏色、光學條件與細項收在「雷射進階設定」。
- 單縫提供縫寬遠小於、接近、遠大於波長的比較。
- 聲音情境可拖曳偵測器；按「播放偵測器聲音」才會啟動聲音。音量依同頻同相、等振幅的干涉模型計算。
- 雷射頁可把紅綠條紋由分開移到重合，並沿同一屏幕位置比較光路、強度曲線與條紋。
- Google簡報可放此網站的超連結，播放時點開操作。

## 模型說明

圓形波為二維示意；波前取樣與理想包絡可分別觀察。單縫採純量近似與相位疊加，非完整電磁場求解。雷射波前間距已放大，強度圖與屏幕依實際波長及光學條件計算；紅綠各自形成干涉，重合處做色光強度加成，RGB顏色為教學示意。聲音採343 m/s、等振幅，不含室內反射與距離衰減；動畫慢動作與實際音高分開處理。

網頁不蒐集個人資料、不儲存操作紀錄、不呼叫第三方服務。GitHub Pages提供網站託管。

## 參考

- [OpenStax：Young雙縫干涉](https://openstax.org/books/university-physics-volume-3/pages/3-1-youngs-double-slit-interference)
- [OpenStax：雙縫與單縫包絡](https://openstax.org/books/university-physics-volume-3/pages/4-3-double-slit-diffraction)
- [UNSW Physclips：色光加成](https://www.animations.physics.unsw.edu.au/jw/light/colour-mixing.htm)


## 簡報情境連結

每個網址直接開啟指定情境。切換情境時網址同步更新，可複製到簡報。

- [平面波](https://leway1980.github.io/huygens-wave-lab/#plane)
- [圓形波](https://leway1980.github.io/huygens-wave-lab/#circle)
- [折射與司乃耳定律](https://leway1980.github.io/huygens-wave-lab/#refraction)
- [反射](https://leway1980.github.io/huygens-wave-lab/#reflection)
- [雙波源干涉](https://leway1980.github.io/huygens-wave-lab/#interference)
- [單縫繞射](https://leway1980.github.io/huygens-wave-lab/#diffraction)
- [聲音干涉與偵測器](https://leway1980.github.io/huygens-wave-lab/#sound)
- [雷射雙縫干涉](https://leway1980.github.io/huygens-wave-lab/#laser)

聲音仍需按播放按鈕才會啟動。


## 2026-11-03 教材擴充與交接

保留原站、原有情境與 `shm/`；本次只修改首頁並新增兩個零依賴檢查腳本。

| 情境 | 可觀察與操作 |
| --- | --- |
| [教材繞射](https://leway1980.github.io/huygens-wave-lab/#diffraction) | 狹縫、有限障礙物、單側邊緣；尺寸／波長 .125、1、8；取樣子波與疊加波前分開開關 |
| [水波干涉](https://leway1980.github.io/huygens-wave-lab/#interference) | A、B 頻率分別調整；固定等距線與移動的中央相長線分色；單波源可獨立觀察 |
| [雷射](https://leway1980.github.io/huygens-wave-lab/#laser) | 條紋水平平移到強度圖，再分開；共同 y 刻度不變；單色／紅綠均可操作 |
| [蜘蛛絲](https://leway1980.github.io/huygens-wave-lab/#spider) | 理想規則微滴陣列、局部平膜雙反射近似；明示多種真實機制，不能僅憑照片定因 |
| [光碟片](https://leway1980.github.io/huygens-wave-lab/#cd) | 正常入射的局部一維反射光柵；軌道間距、觀察角、各色一階相長方向 |
| [牛頓環](https://leway1980.github.io/huygens-wave-lab/#newton) | 反射暗中心、中央間隙、曲率半徑、徑向取樣、凸透鏡與平玻璃結構 |
| [摩爾紋](https://leway1980.github.io/huygens-wave-lab/#moire) | 節距、旋轉與移動的幾何圖樣疊合；明確區分光波干涉 |
| [濕地面油膜](https://leway1980.github.io/huygens-wave-lab/#oil) | 空氣－油－水；膜厚不均、取樣位置、雙反射光路與顏色 |
| [肥皂泡](https://leway1980.github.io/huygens-wave-lab/#bubble) | 空氣－皂膜－空氣；厚度隨位置與時間變化，多波長反射合成顏色 |
| [杜普勒效應](https://leway1980.github.io/huygens-wave-lab/#doppler) | 0–270 m/s、前／後方固定觀察者、150–700 Hz；歷史發聲位置與壓縮／拉長波前；對應音高 |

### 模型與邊界

- 繞射用解析開口傅立葉係數與含倏逝項的前向純量角譜（惠更斯積分的等價表達），週期計算域 8192，與 16384 的代表點複數場最大差約 0.001474。障礙物為入射場減去互補開口場；不是水面反射邊界的完整流體模擬。
- 異頻水波用各自的延遲相位 `2πf(r/v−t)`。黃線追蹤未取模的相位差零分支，不把異頻圖樣稱為固定中央線；參數變更從新一輪同相起點比較。
- 薄膜採無吸收平面層的 Fresnel/Airy 反射率，白光為等能多波長與寬頻 RGB 感光近似，非 D65／校色攝影。右側兩路波形以 532 nm 示意相位，振幅未按反射係數比例；顏色使用完整反射率。
- 牛頓環 `d = d0 + r²/(2R)`；上下玻璃相同、零間隙時反射中央為暗。油膜零厚度則回到空氣－水反射，不是全黑。
- 光碟彩區依局部徑向光柵投影與觀察角計算；未模擬完整三維散射包絡。蜘蛛絲平膜模式只供雙反射概念比較，不主張為所有蛛網彩色的成因。
- 杜普勒採靜止介質、固定觀察者、次音速直線聲源；圖面統一慢動作。波前保留過去 45 模型秒，代表車子從更左方已持續發聲；改參數會重開一輪穩態比較。暫停同時靜音。

### 驗證與接手

```sh
node check.cjs
node smoke.cjs
```

- 數值驗證：275 個斷言，包含相位中央線、單源疊加、互補複數場、角譜收斂、薄膜零厚度與反射率範圍、牛頓暗環半徑、光柵角、摩爾週期、杜普勒頻率。
- 實際整頁腳本 smoke：15 情境、54 項操作／狀態檢查，含動畫幀繼續推進、三種繞射、蜘蛛絲雙模式、雷射疊合、杜普勒前後方。DOM/canvas 為測試替身；另以 Chrome 操作和畫面檢查補足。
- Chrome 已驗證 15 個情境切換、薄膜繪圖、繞射、雷射疊合與音訊啟停；聲音測試 v=270 m/s、f=440 Hz，前方 2067.397 Hz、後方 246.199 Hz。
- 獨立物理審查已針對實作與反例檢查；未把教師的畫面喜好驗收視為已通過。
- 不新增套件、帳號、權限、資料收集或第三方執行服務。

### 補充來源

- [OpenStax：薄膜干涉與反射相位](https://openstax.org/books/university-physics-volume-3/pages/3-4-interference-in-thin-films)
- [UNSW：牛頓環幾何與相位](https://www.animations.physics.unsw.edu.au/jw/light/Newton%27s-rings.html)
- [OpenStax：反射光柵與光碟](https://openstax.org/books/physics/pages/17-2-applications-of-diffraction-interference-and-coherence)
- [Leibniz Universität Hannover：蜘蛛絲的不同光學效應](https://www.itp.uni-hannover.de/fileadmin/itp/emeritus/zawischa/static_html/spiderweb.html)

