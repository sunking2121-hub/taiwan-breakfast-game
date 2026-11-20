// 《吃早餐啦！》（台灣早餐地圖桌上遊戲）3-5歲幼兒園專屬卡牌圖庫與資料
// 每張卡牌實際尺寸：寬 6.4 cm (64mm) × 高 8.9 cm (89mm)，SVG viewBox="0 0 640 890"

const BREAKFAST_CARDS_DATA = [
  // ==========================================
  // 一、中式傳統與台式經典早餐 (12 張)
  // ==========================================
  {
    id: 1,
    name: "古早味粉漿蛋餅",
    bopomofo: "ㄍㄨˇ ㄗㄠˇ ㄨㄟˋ ㄉㄢˋ ㄅㄧㄥˇ",
    style: "中式早餐",
    styleCode: "CN",
    taste: "鹹的（有加鹽巴）",
    tasteCode: "SALTY",
    origin: "全台灣經典",
    tags: ["中式", "鹹食", "雞蛋", "蔥花"],
    kidQuestion: "找找看，蛋餅裡面綠綠的是什麼菜呢？（青蔥）",
    story: "把麵粉漿倒在熱熱的鐵板上，打一顆營養的雞蛋，捲起來切塊再淋上甘甜醬油膏，軟Q又好吃！",
    tip: "蛋餅皮可以用麵粉水調成軟Q的粉漿，也可以用薄脆餅皮喔！",
    priceStars: 2,
    renderFoodSVG: () => `
      <g>
        <!-- 橢圓陶瓷白盤 -->
        <ellipse cx="320" cy="400" rx="235" ry="135" fill="#F1F5F9" stroke="#CBD5E1" stroke-width="8"/>
        <ellipse cx="320" cy="392" rx="205" ry="110" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="5"/>
        <!-- 醬油膏淋醬底 -->
        <path d="M 175 415 Q 250 450 350 430 Q 430 415 465 400" stroke="#78350F" stroke-width="18" stroke-linecap="round" fill="none" opacity="0.75"/>
        <!-- 5塊切好的蛋餅捲 -->
        ${[0, 1, 2, 3, 4].map(i => {
          const x = 185 + i * 65;
          const y = 375 + (i % 2 === 0 ? -6 : 6);
          return `
            <g transform="translate(${x}, ${y})">
              <!-- 餅皮外層 -->
              <rect x="-34" y="-45" width="68" height="82" rx="22" fill="#FEF08A" stroke="#CA8A04" stroke-width="5"/>
              <!-- 微焦斑點 -->
              <ellipse cx="-12" cy="-18" rx="9" ry="5" fill="#D97706" opacity="0.55"/>
              <ellipse cx="14" cy="12" rx="11" ry="5" fill="#B45309" opacity="0.5"/>
              <!-- 橫切面螺旋紋與蛋黃層 -->
              <ellipse cx="0" cy="-38" rx="30" ry="14" fill="#FEF9C3" stroke="#CA8A04" stroke-width="4"/>
              <ellipse cx="0" cy="-38" rx="20" ry="8" fill="#FACC15"/>
              <!-- 蔥花綠點 -->
              <circle cx="-10" cy="-38" r="3.5" fill="#16A34A"/>
              <circle cx="8" cy="-36" r="3.5" fill="#15803D"/>
              <circle cx="-6" cy="5" r="4" fill="#16A34A"/>
              <circle cx="12" cy="-5" r="3.5" fill="#16A34A"/>
              <!-- 頂部淋醬油膏 -->
              <path d="M -22 -12 Q 0 2 22 -8" stroke="#78350F" stroke-width="8" stroke-linecap="round" fill="none"/>
            </g>
          `;
        }).join('')}
        <!-- 熱氣 -->
        <path d="M 240 265 Q 230 240 245 220" stroke="#94A3B8" stroke-width="5" stroke-linecap="round" fill="none" opacity="0.6"/>
        <path d="M 320 250 Q 310 225 325 205" stroke="#94A3B8" stroke-width="5" stroke-linecap="round" fill="none" opacity="0.6"/>
        <path d="M 400 265 Q 390 240 405 220" stroke="#94A3B8" stroke-width="5" stroke-linecap="round" fill="none" opacity="0.6"/>
      </g>
    `
  },
  {
    id: 2,
    name: "傳統大飯糰",
    bopomofo: "ㄔㄨㄢˊ ㄊㄨㄥˇ ㄉㄚˋ ㄈㄢˋ ㄊㄨㄢˊ",
    style: "中式早餐",
    styleCode: "CN",
    taste: "鹹的（有加鹽巴）",
    tasteCode: "SALTY",
    origin: "全台灣經典",
    tags: ["中式", "鹹食", "糯米", "油條肉鬆"],
    kidQuestion: "飯糰切開來，裡面包著脆脆長長的是什麼？（老油條）",
    story: "木桶蒸出香噴噴的熱糯米，鋪上滿滿肉鬆、菜脯、滷蛋和酥脆老油條，用力捏緊成圓滾滾的大飯糰！",
    tip: "糯米很有飽足感，吃的時候要細嚼慢嚥喔！",
    priceStars: 2,
    renderFoodSVG: () => `
      <g>
        <!-- 竹編底盤 -->
        <ellipse cx="320" cy="425" rx="220" ry="110" fill="#FDE68A" stroke="#D97706" stroke-width="8"/>
        <ellipse cx="320" cy="420" rx="190" ry="90" fill="#FEF3C7" stroke="#F59E0B" stroke-width="4" stroke-dasharray="12 8"/>
        <!-- 後方完整白糯米飯糰 -->
        <g transform="translate(230, 345) rotate(-10)">
          <rect x="-95" y="-58" width="190" height="116" rx="56" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="6"/>
          <!-- 米粒質感 -->
          <ellipse cx="-45" cy="-20" rx="8" ry="4" fill="#E2E8F0"/>
          <ellipse cx="-15" cy="10" rx="8" ry="4" fill="#E2E8F0"/>
          <ellipse cx="25" cy="-15" rx="8" ry="4" fill="#E2E8F0"/>
          <ellipse cx="45" cy="18" rx="8" ry="4" fill="#E2E8F0"/>
          <!-- 黑芝麻點綴 -->
          <circle cx="-30" cy="-5" r="3" fill="#1E293B"/>
          <circle cx="5" cy="-25" r="3" fill="#1E293B"/>
          <circle cx="20" cy="8" r="3" fill="#1E293B"/>
          <circle cx="-10" cy="25" r="3" fill="#1E293B"/>
        </g>
        <!-- 前方對切露出豐富內餡的飯糰 -->
        <g transform="translate(385, 395)">
          <path d="M -85 -45 L 45 -45 C 80 -45, 95 -10, 95 15 C 95 45, 75 68, 45 68 L -85 68 Z" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="6"/>
          <!-- 橫切面米飯圈 -->
          <ellipse cx="-85" cy="12" rx="48" ry="56" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="6"/>
          <!-- 內餡：肉鬆 (橘棕) -->
          <ellipse cx="-85" cy="12" rx="34" ry="40" fill="#D97706"/>
          <!-- 內餡：脆油條孔洞 -->
          <circle cx="-95" cy="0" r="14" fill="#B45309" stroke="#FDE047" stroke-width="4"/>
          <circle cx="-95" cy="0" r="5" fill="#78350F"/>
          <!-- 內餡：半顆滷蛋 -->
          <path d="M -85 8 A 18 18 0 0 1 -60 28 Z" fill="#FEF3C7" stroke="#92400E" stroke-width="4"/>
          <circle cx="-73" cy="20" r="7" fill="#F59E0B"/>
          <!-- 內餡：菜脯與酸菜 -->
          <circle cx="-75" cy="-12" r="5" fill="#65A30D"/>
          <circle cx="-82" cy="-18" r="4.5" fill="#A16207"/>
          <circle cx="-96" cy="24" r="5" fill="#65A30D"/>
        </g>
      </g>
    `
  },
  {
    id: 3,
    name: "燒餅夾油條",
    bopomofo: "ㄕㄠ ㄅㄧㄥˇ ㄐㄧㄚˊ ㄧㄡˊ ㄊㄧㄠˊ",
    style: "中式早餐",
    styleCode: "CN",
    taste: "鹹的（有加鹽巴）",
    tasteCode: "SALTY",
    origin: "眷村傳統早點",
    tags: ["中式", "鹹食", "白芝麻", "酥脆"],
    kidQuestion: "燒餅表面灑滿了一粒一粒白白香香的是什麼？（白芝麻）",
    story: "剛出爐烤得酥酥扁扁的芝麻燒餅，中間剪開夾進兩根炸得金黃蓬鬆的脆油條，咬下去卡滋卡滋響！",
    tip: "燒餅油條常常跟熱豆漿或鹹豆漿一起搭配著吃喔！",
    priceStars: 2,
    renderFoodSVG: () => `
      <g>
        <!-- 圓盤 -->
        <ellipse cx="320" cy="420" rx="225" ry="115" fill="#FEF3C7" stroke="#F59E0B" stroke-width="7"/>
        <!-- 超長金黃油條 (從燒餅中延伸出來) -->
        <g transform="translate(320, 360) rotate(-18)">
          <rect x="-195" y="-36" width="390" height="34" rx="17" fill="#D97706" stroke="#92400E" stroke-width="5"/>
          <rect x="-195" y="-4" width="390" height="34" rx="17" fill="#F59E0B" stroke="#92400E" stroke-width="5"/>
          <!-- 油條高光與炸紋 -->
          <path d="M -165 -22 L 165 -22" stroke="#FDE047" stroke-width="5" stroke-linecap="round" opacity="0.65"/>
          <path d="M -165 12 L 165 12" stroke="#FDE047" stroke-width="5" stroke-linecap="round" opacity="0.65"/>
        </g>
        <!-- 外層芝麻燒餅口袋 -->
        <g transform="translate(295, 385) rotate(-18)">
          <path d="M -115 -58 L 95 -52 C 115 -50, 125 -30, 122 0 L 118 42 C 115 62, 95 68, 75 65 L -115 58 C -130 55, -135 35, -132 0 C -135 -35, -130 -55, -115 -58 Z"
                fill="#FDE68A" stroke="#B45309" stroke-width="6"/>
          <!-- 烘烤焦斑 -->
          <ellipse cx="-55" cy="-20" rx="24" ry="12" fill="#D97706" opacity="0.45"/>
          <ellipse cx="35" cy="15" rx="28" ry="14" fill="#D97706" opacity="0.45"/>
          <ellipse cx="-20" cy="28" rx="20" ry="10" fill="#B45309" opacity="0.35"/>
          <!-- 滿滿白芝麻粒 -->
          ${[
            [-80,-30],[-45,-35],[0,-30],[45,-28],[80,-25],
            [-90,0],[-50,5],[-10,-5],[30,0],[75,5],
            [-75,30],[-35,32],[15,28],[55,32],[85,28]
          ].map(([sx, sy]) => `<ellipse cx="${sx}" cy="${sy}" rx="5" ry="2.8" transform="rotate(20 ${sx} ${sy})" fill="#FFFFFF" stroke="#D97706" stroke-width="1"/>`).join('')}
        </g>
      </g>
    `
  },
  {
    id: 4,
    name: "香煎蘿蔔糕加蛋",
    bopomofo: "ㄒㄧㄤ ㄐㄧㄢ ㄌㄨㄛˊ ㄅㄛ˙ ㄍㄠ",
    style: "中式早餐",
    styleCode: "CN",
    taste: "鹹的（有加鹽巴）",
    tasteCode: "SALTY",
    origin: "全台灣經典",
    tags: ["中式", "鹹食", "白蘿蔔", "在來米"],
    kidQuestion: "白白的蘿蔔糕是用什麼蔬菜跟米磨成漿做的呢？（白蘿蔔）",
    story: "白白嫩嫩的蘿蔔糕在鐵板上煎得兩面金黃焦脆，旁邊再加一顆太陽荷包蛋，淋上醬油膏真美味！",
    tip: "台語把蘿蔔叫做「菜頭」，所以蘿蔔糕也叫做「菜頭粿」喔！",
    priceStars: 2,
    renderFoodSVG: () => `
      <g>
        <!-- 瓷盤 -->
        <ellipse cx="320" cy="410" rx="235" ry="125" fill="#E0F2FE" stroke="#7DD3FC" stroke-width="8"/>
        <ellipse cx="320" cy="405" rx="200" ry="100" fill="#FFFFFF" stroke="#BAE6FD" stroke-width="4"/>
        <!-- 3塊金黃煎蘿蔔糕 -->
        ${[
          {x: 215, y: 380, rot: -8},
          {x: 295, y: 410, rot: 4},
          {x: 245, y: 445, rot: -3}
        ].map(p => `
          <g transform="translate(${p.x}, ${p.y}) rotate(${p.rot})">
            <!-- 立體側面 -->
            <rect x="-58" y="-26" width="116" height="62" rx="10" fill="#E2E8F0" stroke="#94A3B8" stroke-width="5"/>
            <!-- 頂部金黃煎面 -->
            <rect x="-58" y="-36" width="116" height="54" rx="10" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="5"/>
            <!-- 煎焦脆皮區塊 -->
            <rect x="-46" y="-28" width="92" height="38" rx="6" fill="#F59E0B" opacity="0.75"/>
            <ellipse cx="-15" cy="-10" rx="16" ry="7" fill="#B45309" opacity="0.5"/>
            <ellipse cx="20" cy="-6" rx="14" ry="6" fill="#B45309" opacity="0.5"/>
          </g>
        `).join('')}
        <!-- 旁邊的太陽荷包蛋 -->
        <g transform="translate(425, 385)">
          <path d="M -75 0 C -80 -45, -35 -75, 15 -68 C 65 -60, 90 -25, 82 20 C 75 62, 25 75, -25 65 C -65 55, -72 30, -75 0 Z"
                fill="#FFFFFF" stroke="#CBD5E1" stroke-width="5"/>
          <circle cx="5" cy="-2" r="34" fill="#F59E0B" stroke="#D97706" stroke-width="4"/>
          <circle cx="-6" cy="-10" r="9" fill="#FEF08A"/>
        </g>
        <!-- 醬油膏與蔥花 -->
        <path d="M 175 405 Q 250 435 320 405" stroke="#78350F" stroke-width="10" stroke-linecap="round" fill="none"/>
        <circle cx="245" cy="395" r="5" fill="#16A34A"/>
        <circle cx="275" cy="408" r="5" fill="#16A34A"/>
      </g>
    `
  },
  {
    id: 5,
    name: "熱呼呼小籠湯包",
    bopomofo: "ㄒㄧㄠˇ ㄌㄨㄥˊ ㄊㄤ ㄅㄠ",
    style: "中式早餐",
    styleCode: "CN",
    taste: "鹹的（有加鹽巴）",
    tasteCode: "SALTY",
    origin: "全台灣經典",
    tags: ["中式", "鹹食", "竹蒸籠", "多汁"],
    kidQuestion: "數數看，圓圓的竹蒸籠裡面裝了幾顆小籠包？（5 顆）",
    story: "打開冒著白煙的竹蒸籠，一顆顆摺了漂亮花紋的小籠包整齊排好，咬開薄薄的皮裡面還有鮮美肉汁喔！",
    tip: "剛蒸好的小籠包非常燙口，要先吹一吹、用湯匙接著吃才不會燙到！",
    priceStars: 3,
    renderFoodSVG: () => `
      <g>
        <!-- 竹蒸籠外框 -->
        <ellipse cx="320" cy="430" rx="205" ry="125" fill="#D97706" stroke="#92400E" stroke-width="8"/>
        <ellipse cx="320" cy="405" rx="205" ry="120" fill="#F59E0B" stroke="#92400E" stroke-width="8"/>
        <ellipse cx="320" cy="405" rx="182" ry="102" fill="#FEF3C7" stroke="#B45309" stroke-width="6"/>
        <!-- 蒸籠白布墊 -->
        <ellipse cx="320" cy="410" rx="168" ry="92" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="4" stroke-dasharray="10 6"/>
        <!-- 5顆小籠包 -->
        ${[
          {x: 245, y: 365},
          {x: 395, y: 365},
          {x: 225, y: 438},
          {x: 415, y: 438},
          {x: 320, y: 405}
        ].map(b => `
          <g transform="translate(${b.x}, ${b.y})">
            <ellipse cx="0" cy="24" rx="54" ry="26" fill="#CBD5E1" opacity="0.5"/>
            <path d="M -52 15 C -55 -22, -25 -46, 0 -52 C 25 -46, 55 -22, 52 15 C 50 35, -50 35, -52 15 Z"
                  fill="#FFFFFF" stroke="#94A3B8" stroke-width="5"/>
            <!-- 包子摺紋 -->
            <path d="M 0 -48 Q -15 -25 -22 5" stroke="#CBD5E1" stroke-width="3.5" fill="none"/>
            <path d="M 0 -48 Q -5 -22 -5 12" stroke="#CBD5E1" stroke-width="3.5" fill="none"/>
            <path d="M 0 -48 Q 8 -22 10 12" stroke="#CBD5E1" stroke-width="3.5" fill="none"/>
            <path d="M 0 -48 Q 18 -25 25 5" stroke="#CBD5E1" stroke-width="3.5" fill="none"/>
            <circle cx="0" cy="-48" r="6" fill="#E2E8F0" stroke="#94A3B8" stroke-width="3"/>
          </g>
        `).join('')}
        <!-- 薑絲醬油小碟子 -->
        <g transform="translate(510, 290)">
          <ellipse cx="0" cy="0" rx="52" ry="32" fill="#FFFFFF" stroke="#94A3B8" stroke-width="5"/>
          <ellipse cx="0" cy="2" rx="38" ry="22" fill="#78350F"/>
          <path d="M -12 -4 L 14 4 M -8 6 L 12 -5 M -15 2 L 8 8" stroke="#FDE047" stroke-width="3" stroke-linecap="round"/>
        </g>
      </g>
    `
  },
  {
    id: 6,
    name: "香蔥肉包與饅頭",
    bopomofo: "ㄒㄧㄤ ㄘㄨㄥ ㄖㄡˋ ㄅㄠ",
    style: "中式早餐",
    styleCode: "CN",
    taste: "鹹的（有加鹽巴）",
    tasteCode: "SALTY",
    origin: "全台灣經典",
    tags: ["中式", "鹹食", "白胖胖", "豬肉蔥花"],
    kidQuestion: "白白胖胖的包子跟饅頭，哪一個頭上有摺花紋呢？（肉包）",
    story: "蒸籠裡冒出香噴噴的蒸氣，白白胖胖的大肉包咬開是滿滿的青蔥豬肉餡，鬆軟又多汁！",
    tip: "通常有包鹹肉餡、頭上有摺花的是「包子」，沒有包餡方方圓圓的是「饅頭」喔！",
    priceStars: 2,
    renderFoodSVG: () => `
      <g>
        <ellipse cx="320" cy="435" rx="225" ry="105" fill="#FEF3C7" stroke="#F59E0B" stroke-width="7"/>
        <!-- 左後：黑糖鮮奶饅頭 -->
        <g transform="translate(225, 370)">
          <path d="M -85 35 C -90 -35, -55 -68, 0 -68 C 55 -68, 90 -35, 85 35 C 80 55, -80 55, -85 35 Z"
                fill="#FDE68A" stroke="#B45309" stroke-width="6"/>
          <path d="M -35 -25 Q 0 -40 35 -20" stroke="#D97706" stroke-width="6" stroke-linecap="round" fill="none" opacity="0.6"/>
        </g>
        <!-- 右前：剝開一半的大肉包 -->
        <g transform="translate(375, 405)">
          <path d="M -95 30 C -100 -38, -50 -78, 0 -82 C 50 -78, 100 -38, 95 30 C 90 58, -90 58, -95 30 Z"
                fill="#FFFFFF" stroke="#94A3B8" stroke-width="6"/>
          <!-- 包子頂部摺紋 -->
          <path d="M 0 -76 Q -25 -45 -35 -10" stroke="#CBD5E1" stroke-width="5" fill="none"/>
          <path d="M 0 -76 Q 0 -45 0 -5" stroke="#CBD5E1" stroke-width="5" fill="none"/>
          <path d="M 0 -76 Q 25 -45 35 -10" stroke="#CBD5E1" stroke-width="5" fill="none"/>
          <!-- 肉餡露出窗口 -->
          <ellipse cx="-15" cy="18" rx="48" ry="26" fill="#B45309" stroke="#FEF3C7" stroke-width="6"/>
          <!-- 蔥花 -->
          <circle cx="-30" cy="14" r="6" fill="#16A34A"/>
          <circle cx="-10" cy="24" r="6" fill="#15803D"/>
          <circle cx="8" cy="15" r="6" fill="#16A34A"/>
          <circle cx="-18" cy="10" r="5" fill="#22C55E"/>
        </g>
      </g>
    `
  },
  {
    id: 7,
    name: "熱騰騰鹹豆漿",
    bopomofo: "ㄖㄜˋ ㄊㄥˊ ㄊㄥˊ ㄒㄧㄢˊ ㄉㄡˋ ㄐㄧㄤ",
    style: "中式早餐",
    styleCode: "CN",
    taste: "鹹的（有加鹽巴）",
    tasteCode: "SALTY",
    origin: "全台灣經典",
    tags: ["中式", "鹹食", "豆漿變豆花", "油條蝦皮"],
    kidQuestion: "豆漿原本是甜的，為什麼這碗豆漿有加蔥花、油條跟鹽巴呢？（因為它是鹹豆漿！）",
    story: "熱豆漿沖進裝著菜脯、蝦皮、蔥花和白醋的碗裡，神奇地凝結成嫩豆花一樣，再放上脆油條超夠味！",
    tip: "這是「吃起來是鹹的豆漿」喔！分類遊戲時別忘了它是鹹的！",
    priceStars: 2,
    renderFoodSVG: () => `
      <g>
        <!-- 湯碗底座與碗身 -->
        <ellipse cx="320" cy="485" rx="115" ry="28" fill="#94A3B8"/>
        <path d="M 135 345 C 135 465, 220 485, 320 485 C 420 485, 505 465, 505 345 Z" fill="#FFFFFF" stroke="#64748B" stroke-width="7"/>
        <!-- 傳統紅藍雙線碗紋 -->
        <path d="M 148 395 Q 320 435 492 395" stroke="#DC2626" stroke-width="6" fill="none"/>
        <path d="M 155 412 Q 320 452 485 412" stroke="#1D4ED8" stroke-width="4" fill="none"/>
        <!-- 碗口與鹹豆漿湯面 -->
        <ellipse cx="320" cy="345" rx="185" ry="72" fill="#F1F5F9" stroke="#64748B" stroke-width="7"/>
        <ellipse cx="320" cy="350" rx="168" ry="60" fill="#FEF9C3"/>
        <!-- 辣油/香油滴 -->
        <ellipse cx="235" cy="360" rx="22" ry="8" fill="#EA580C" opacity="0.55"/>
        <ellipse cx="385" cy="368" rx="26" ry="9" fill="#EA580C" opacity="0.55"/>
        <!-- 脆油條塊 -->
        <g transform="translate(275, 335) rotate(-12)">
          <rect x="-42" y="-22" width="84" height="44" rx="12" fill="#F59E0B" stroke="#B45309" stroke-width="5"/>
          <circle cx="-15" cy="0" r="8" fill="#FEF08A"/>
          <circle cx="15" cy="2" r="7" fill="#FEF08A"/>
        </g>
        <g transform="translate(365, 345) rotate(18)">
          <rect x="-38" y="-20" width="76" height="40" rx="12" fill="#D97706" stroke="#92400E" stroke-width="5"/>
          <circle cx="0" cy="0" r="8" fill="#FEF08A"/>
        </g>
        <!-- 菜脯與青蔥花 -->
        ${[
          [215,340],[250,372],[315,375],[340,320],[415,345],[295,358]
        ].map(([cx, cy]) => `<circle cx="${cx}" cy="${cy}" r="6.5" fill="#16A34A"/>`).join('')}
        ${[
          [230,350],[310,335],[390,360],[275,375]
        ].map(([cx, cy]) => `<rect x="${cx}" y="${cy}" width="10" height="8" rx="2" fill="#92400E"/>`).join('')}
      </g>
    `
  },
  {
    id: 8,
    name: "香甜冰熱豆漿",
    bopomofo: "ㄒㄧㄤ ㄊㄧㄢˊ ㄉㄡˋ ㄐㄧㄤ",
    style: "中式早餐",
    styleCode: "CN",
    taste: "甜的（微甜香濃）",
    tasteCode: "SWEET",
    origin: "全台灣經典",
    tags: ["中式", "甜飲", "黃豆研磨", "營養滿分"],
    kidQuestion: "白白香香的豆漿是用哪一種豆子磨出來的呢？（黃豆）",
    story: "用新鮮飽滿的黃豆泡水、研磨再煮沸，加一點點糖，喝起來香醇順口，幫助小朋友長高高！",
    tip: "豆漿是中式早餐店最受歡迎的甜飲料，跟燒餅油條、蛋餅最搭了！",
    priceStars: 1,
    renderFoodSVG: () => `
      <g>
        <!-- 左邊：傳統外帶封口杯裝豆漿 -->
        <g transform="translate(245, 370)">
          <!-- 杯身 -->
          <path d="M -70 -95 L 70 -95 L 52 105 C 50 118, -50 118, -52 105 Z" fill="#FEFCE8" stroke="#94A3B8" stroke-width="6"/>
          <!-- 豆漿液面 -->
          <path d="M -64 -55 L 64 -55 L 50 102 C 48 112, -48 112, -50 102 Z" fill="#FEF9C3"/>
          <!-- 紅色傳統圖騰腰帶 -->
          <path d="M -58 0 L 58 0 L 55 38 L -55 38 Z" fill="#DC2626"/>
          <text x="0" y="27" font-size="24" font-weight="900" fill="#FEF08A" text-anchor="middle" font-family="Microsoft JhengHei">非基改豆漿</text>
          <!-- 杯蓋 -->
          <ellipse cx="0" cy="-95" rx="76" ry="18" fill="#FFFFFF" stroke="#64748B" stroke-width="6"/>
          <!-- 粗吸管 -->
          <path d="M 15 -100 L 42 -165" stroke="#EF4444" stroke-width="16" stroke-linecap="round"/>
          <path d="M 15 -100 L 42 -165" stroke="#FCA5A5" stroke-width="6" stroke-linecap="round"/>
        </g>
        <!-- 右邊：三顆可愛飽滿的黃豆吉祥物 -->
        <g transform="translate(430, 435)">
          <ellipse cx="-30" cy="15" rx="34" ry="28" fill="#FACC15" stroke="#CA8A04" stroke-width="5"/>
          <path d="M -38 10 Q -30 18 -22 10" stroke="#854D0E" stroke-width="4" stroke-linecap="round" fill="none"/>
          <ellipse cx="32" cy="18" rx="34" ry="28" fill="#FACC15" stroke="#CA8A04" stroke-width="5"/>
          <path d="M 24 13 Q 32 21 40 13" stroke="#854D0E" stroke-width="4" stroke-linecap="round" fill="none"/>
          <ellipse cx="0" cy="-22" rx="38" ry="32" fill="#FDE047" stroke="#CA8A04" stroke-width="5"/>
          <circle cx="-10" cy="-26" r="4" fill="#1E293B"/>
          <circle cx="10" cy="-26" r="4" fill="#1E293B"/>
          <path d="M -8 -14 Q 0 -6 8 -14" stroke="#854D0E" stroke-width="4" stroke-linecap="round" fill="none"/>
        </g>
      </g>
    `
  },
  {
    id: 9,
    name: "香濃花生米漿",
    bopomofo: "ㄒㄧㄤ ㄋㄨㄥˊ ㄏㄨㄚ ㄕㄥ ㄇㄧˇ ㄐㄧㄤ",
    style: "中式早餐",
    styleCode: "CN",
    taste: "甜的（花生甜香）",
    tasteCode: "SWEET",
    origin: "全台灣經典",
    tags: ["中式", "甜飲", "烘烤花生", "糙米"],
    kidQuestion: "咖啡色濃濃的米漿，裡面加了什麼堅果一起磨才會這麼香？（花生）",
    story: "把炒得香噴噴的花生、芝麻和米一起磨成濃郁的米漿，喝起來甜甜稠稠的，整個嘴巴都是花生香！",
    tip: "如果把豆漿跟米漿加在一起，就變成台灣特有的「混漿」喔！",
    priceStars: 1,
    renderFoodSVG: () => `
      <g>
        <!-- 溫熱陶瓷馬克碗杯 -->
        <g transform="translate(275, 390)">
          <!-- 杯耳 -->
          <path d="M 110 -45 C 165 -45, 165 45, 105 45" stroke="#FFFFFF" stroke-width="22" fill="none"/>
          <path d="M 110 -45 C 165 -45, 165 45, 105 45" stroke="#94A3B8" stroke-width="6" fill="none"/>
          <!-- 杯身 -->
          <path d="M -115 -65 L 115 -65 C 115 45, 85 95, 0 95 C -85 95, -115 45, -115 -65 Z" fill="#FFFFFF" stroke="#64748B" stroke-width="7"/>
          <ellipse cx="0" cy="-65" rx="115" ry="38" fill="#F1F5F9" stroke="#64748B" stroke-width="7"/>
          <!-- 濃郁咖啡色米漿 -->
          <ellipse cx="0" cy="-62" rx="102" ry="30" fill="#92400E"/>
          <!-- 表面漩渦高光與白芝麻 -->
          <path d="M -45 -62 C -20 -75, 30 -72, 45 -58 C 35 -48, -15 -50, -20 -60" stroke="#D97706" stroke-width="6" stroke-linecap="round" fill="none"/>
        </g>
        <!-- 右下方：可愛帶殼花生 -->
        <g transform="translate(465, 435) rotate(-22)">
          <path d="M -45 -22 C -25 -32, -8 -18, 0 -18 C 8 -18, 25 -32, 45 -22 C 65 -12, 65 18, 45 26 C 25 34, 8 20, 0 20 C -8 20, -25 34, -45 26 C -65 18, -65 -12, -45 -22 Z"
                fill="#FDE68A" stroke="#B45309" stroke-width="6"/>
          <!-- 花生格紋 -->
          <path d="M -38 -5 L 38 -5 M -38 8 L 38 8 M -20 -18 L -20 20 M 20 -18 L 20 20" stroke="#D97706" stroke-width="3" opacity="0.6"/>
        </g>
      </g>
    `
  },
  {
    id: 10,
    name: "鐵板滋滋煎餃",
    bopomofo: "ㄊㄧㄝˇ ㄅㄢˇ ㄐㄧㄢ ㄐㄧㄠˇ",
    style: "中式早餐",
    styleCode: "CN",
    taste: "鹹的（有加鹽巴）",
    tasteCode: "SALTY",
    origin: "全台灣經典",
    tags: ["中式", "鹹食", "高麗菜豬肉", "黃金脆底"],
    kidQuestion: "彎彎像元寶一樣的煎餃，底部煎成了什麼顏色？（金黃色／焦焦脆脆）",
    story: "包著高麗菜與鮮肉的餃子排排站，在平底鍋裡倒入麵粉水煎出金黃酥脆的底部，一口一個超滿足！",
    tip: "煎餃形狀彎彎的像古代的金元寶，看起來就很有福氣！",
    priceStars: 2,
    renderFoodSVG: () => `
      <g>
        <!-- 圓盤 -->
        <ellipse cx="320" cy="415" rx="235" ry="120" fill="#FEF2F2" stroke="#FCA5A5" stroke-width="7"/>
        <ellipse cx="320" cy="410" rx="200" ry="98" fill="#FFFFFF" stroke="#FECACA" stroke-width="4"/>
        <!-- 5顆金黃脆底煎餃排排站 -->
        ${[0, 1, 2, 3, 4].map(i => {
          const x = 185 + i * 68;
          const y = 395 + (i % 2 === 0 ? -12 : 12);
          return `
            <g transform="translate(${x}, ${y}) rotate(-8)">
              <!-- 餃子白皮上半部 -->
              <path d="M -38 25 C -45 -25, -20 -55, 0 -55 C 20 -55, 45 -25, 38 25 Z" fill="#FEFCE8" stroke="#CA8A04" stroke-width="5"/>
              <!-- 頂部摺花邊 -->
              <path d="M -34 -15 Q -22 -48 0 -55 Q 22 -48 34 -15" stroke="#EAB308" stroke-width="4" stroke-dasharray="8 5" fill="none"/>
              <!-- 底部金黃焦脆層 -->
              <rect x="-38" y="8" width="76" height="26" rx="10" fill="#D97706" stroke="#92400E" stroke-width="5"/>
              <!-- 黑芝麻點綴 -->
              <circle cx="-12" cy="20" r="2.8" fill="#1E293B"/>
              <circle cx="10" cy="22" r="2.8" fill="#1E293B"/>
            </g>
          `;
        }).join('')}
      </g>
    `
  },
  {
    id: 11,
    name: "蔥抓餅加蛋",
    bopomofo: "ㄘㄨㄥ ㄓㄨㄚ ㄅㄧㄥˇ ㄐㄧㄚ ㄉㄢˋ",
    style: "中式早餐",
    styleCode: "CN",
    taste: "鹹的（有加鹽巴）",
    tasteCode: "SALTY",
    origin: "全台灣經典",
    tags: ["中式", "鹹食", "千層酥脆", "青蔥"],
    kidQuestion: "老闆煎蔥抓餅的時候，為什麼要用鏟子把餅拍一拍、抓一抓呢？（讓餅變成一層一層鬆鬆脆脆的！）",
    story: "在鐵板上把蔥油餅煎得金黃酥脆，再用兩支煎鏟拍打抓鬆，變成一絲一絲千層口感，夾顆煎蛋香氣撲鼻！",
    tip: "蔥抓餅一絲一絲的層次感，是早餐店老闆用鏟子抓出來的真功夫喔！",
    priceStars: 2,
    renderFoodSVG: () => `
      <g>
        <!-- 防油紙袋裝蔥抓餅 -->
        <g transform="translate(320, 395)">
          <!-- 捲起的蓬鬆千層蔥抓餅 (上半部露出) -->
          <ellipse cx="0" cy="-55" rx="145" ry="75" fill="#FDE047" stroke="#B45309" stroke-width="6"/>
          <!-- 千層抓紋與焦斑 -->
          <path d="M -105 -65 Q -30 -95 75 -65" stroke="#B45309" stroke-width="6" stroke-linecap="round" fill="none"/>
          <path d="M -115 -42 Q 0 -75 110 -45" stroke="#D97706" stroke-width="6" stroke-linecap="round" fill="none"/>
          <path d="M -95 -20 Q 15 -48 95 -22" stroke="#B45309" stroke-width="6" stroke-linecap="round" fill="none"/>
          <!-- 夾在裡面的荷包蛋黃與青蔥 -->
          <ellipse cx="-15" cy="-55" rx="45" ry="22" fill="#F59E0B"/>
          <circle cx="-55" cy="-50" r="6" fill="#16A34A"/>
          <circle cx="35" cy="-62" r="6" fill="#16A34A"/>
          <circle cx="55" cy="-38" r="6" fill="#15803D"/>
          <circle cx="-35" cy="-32" r="6" fill="#16A34A"/>
          <!-- 下半部防油牛皮紙袋 -->
          <path d="M -135 -18 L 135 -18 L 105 115 L -105 115 Z" fill="#FEF3C7" stroke="#D97706" stroke-width="6"/>
          <path d="M -135 -18 Q 0 5 135 -18" fill="#FDE68A" stroke="#D97706" stroke-width="5"/>
          <text x="0" y="58" font-size="30" font-weight="900" fill="#B45309" text-anchor="middle" font-family="Microsoft JhengHei">香酥蔥抓餅</text>
        </g>
      </g>
    `
  },
  {
    id: 12,
    name: "清粥小菜地瓜粥",
    bopomofo: "ㄑㄧㄥ ㄓㄡ ㄒㄧㄠˇ ㄘㄞˋ",
    style: "中式早餐",
    styleCode: "CN",
    taste: "鹹的（有加鹽巴）",
    tasteCode: "SALTY",
    origin: "阿公阿嬤最愛",
    tags: ["中式", "鹹食", "黃金地瓜", "肉鬆麵筋"],
    kidQuestion: "白稀飯裡面黃黃甜甜、軟軟綿綿的是什麼呢？（地瓜／番薯）",
    story: "熱呼呼的白粥裡煮著香甜的黃金地瓜塊，配上一小碟肉鬆、土豆麵筋和荷包蛋，暖胃又舒服！",
    tip: "地瓜富含膳食纖維，跟白米一起煮成地瓜粥是台灣最經典的家常早點！",
    priceStars: 2,
    renderFoodSVG: () => `
      <g>
        <!-- 木托盤 -->
        <rect x="95" y="295" width="450" height="225" rx="28" fill="#FDE68A" stroke="#B45309" stroke-width="7"/>
        <!-- 左邊：地瓜粥大碗 -->
        <g transform="translate(240, 395)">
          <path d="M -115 -25 C -115 70, -60 90, 0 90 C 60 90, 115 70, 115 -25 Z" fill="#3B82F6" stroke="#1E3A8A" stroke-width="6"/>
          <ellipse cx="0" cy="-25" rx="115" ry="48" fill="#FFFFFF" stroke="#1E3A8A" stroke-width="6"/>
          <ellipse cx="0" cy="-22" rx="102" ry="40" fill="#F8FAFC"/>
          <!-- 金黃地瓜塊 -->
          <path d="M -45 -30 L -10 -38 L -5 -12 L -40 -8 Z" fill="#F59E0B" stroke="#B45309" stroke-width="4" stroke-linejoin="round"/>
          <path d="M 15 -25 L 52 -18 L 42 5 L 10 -2 Z" fill="#FACC15" stroke="#CA8A04" stroke-width="4" stroke-linejoin="round"/>
        </g>
        <!-- 右上小碟：肉鬆 -->
        <g transform="translate(445, 355)">
          <ellipse cx="0" cy="0" rx="62" ry="34" fill="#FFFFFF" stroke="#64748B" stroke-width="5"/>
          <ellipse cx="0" cy="-4" rx="44" ry="22" fill="#D97706"/>
          <path d="M -25 -6 Q 0 -18 25 -4 M -20 4 Q 5 -8 22 6" stroke="#92400E" stroke-width="4" fill="none"/>
        </g>
        <!-- 右下小碟：花生麵筋與脆瓜 -->
        <g transform="translate(445, 445)">
          <ellipse cx="0" cy="0" rx="62" ry="34" fill="#FFFFFF" stroke="#64748B" stroke-width="5"/>
          <circle cx="-18" cy="-4" r="13" fill="#B45309"/>
          <circle cx="8" cy="-8" r="13" fill="#B45309"/>
          <circle cx="20" cy="6" r="11" fill="#15803D"/>
          <circle cx="-4" cy="8" r="11" fill="#15803D"/>
        </g>
      </g>
    `
  },

  // ==========================================
  // 二、西式早餐店人氣王 (10 張)
  // ==========================================
  {
    id: 13,
    name: "火腿蛋三明治",
    bopomofo: "ㄏㄨㄛˇ ㄊㄨㄟˇ ㄉㄢˋ ㄙㄢ ㄇㄧㄥˊ ㄓˋ",
    style: "西式早餐",
    styleCode: "WE",
    taste: "鹹的（有加鹽巴）",
    tasteCode: "SALTY",
    origin: "台式西餐早餐店",
    tags: ["西式", "鹹食", "三角形吐司", "火腿小黃瓜"],
    kidQuestion: "這個三明治是什麼形狀的呢？（三角形！）",
    story: "柔軟的白吐司斜切成三角形，一層夾著粉紅火腿片，一層夾著嫩煎蛋和脆脆小黃瓜絲，抹上沙拉醬超順口！",
    tip: "台灣早餐店的三明治常常會切邊，還會抹上甜甜鹹鹹的台式美乃滋喔！",
    priceStars: 2,
    renderFoodSVG: () => `
      <g>
        <ellipse cx="320" cy="435" rx="225" ry="105" fill="#F1F5F9" stroke="#CBD5E1" stroke-width="7"/>
        <!-- 三角形三明治立體切面 -->
        <g transform="translate(320, 385)">
          <!-- 背部吐司斜邊 -->
          <polygon points="-145,55 0,-115 145,35" fill="#FEF3C7" stroke="#D97706" stroke-width="7" stroke-linejoin="round"/>
          <!-- 多層三明治正面橫切面 -->
          <polygon points="-145,55 145,35 125,85 -165,105" fill="#FFFFFF" stroke="#D97706" stroke-width="6" stroke-linejoin="round"/>
          <!-- 夾層 1：粉紅火腿 -->
          <line x1="-148" y1="68" x2="138" y2="48" stroke="#FB7185" stroke-width="11" stroke-linecap="round"/>
          <!-- 夾層 2：金黃煎蛋 -->
          <line x1="-154" y1="82" x2="132" y2="62" stroke="#FACC15" stroke-width="11" stroke-linecap="round"/>
          <!-- 夾層 3：翠綠小黃瓜 -->
          <line x1="-159" y1="94" x2="127" y2="74" stroke="#22C55E" stroke-width="9" stroke-linecap="round" stroke-dasharray="18 8"/>
        </g>
      </g>
    `
  },
  {
    id: 14,
    name: "鐵板漢堡肉夾蛋",
    bopomofo: "ㄊㄧㄝˇ ㄅㄢˇ ㄏㄢˋ ㄅㄠˇ ㄐㄧㄚ ㄉㄢˋ",
    style: "西式早餐",
    styleCode: "WE",
    taste: "鹹的（有加鹽巴）",
    tasteCode: "SALTY",
    origin: "西式早餐店",
    tags: ["西式", "鹹食", "圓圓漢堡包", "生菜番茄"],
    kidQuestion: "圓圓的漢堡裡面，夾了哪些顏色的食材呢？（紅番茄、綠生菜、黃起司、咖啡色漢堡肉）",
    story: "圓圓的芝麻漢堡麵包烤得微酥，夾進多汁的鐵板漢堡肉排、荷包蛋、起司片、紅番茄與綠生菜，張大嘴巴咬一口！",
    tip: "漢堡有肉、有蛋又有生菜，營養非常均衡喔！",
    priceStars: 3,
    renderFoodSVG: () => `
      <g transform="translate(320, 390)">
        <!-- 底部盤影 -->
        <ellipse cx="0" cy="110" rx="185" ry="42" fill="#E2E8F0"/>
        <!-- 下層漢堡麵包 -->
        <path d="M -135 55 L 135 55 C 135 95, 95 105, 0 105 C -95 105, -135 95, -135 55 Z" fill="#F59E0B" stroke="#B45309" stroke-width="6"/>
        <!-- 翠綠波浪生菜 -->
        <path d="M -148 48 Q -110 72 -70 48 Q -35 72 0 48 Q 35 72 70 48 Q 110 72 148 48" fill="#22C55E" stroke="#15803D" stroke-width="6"/>
        <!-- 鐵板漢堡肉排 -->
        <rect x="-140" y="10" width="280" height="42" rx="20" fill="#78350F" stroke="#451A03" stroke-width="6"/>
        <!-- 融化起司片與荷包蛋 -->
        <polygon points="-135,12 135,12 95,35 45,14 -35,38 -95,14" fill="#FACC15" stroke="#CA8A04" stroke-width="4"/>
        <!-- 紅番茄片 -->
        <rect x="-120" y="-12" width="240" height="24" rx="10" fill="#EF4444" stroke="#B91C1C" stroke-width="5"/>
        <!-- 上層圓頂芝麻漢堡麵包 -->
        <path d="M -140 -10 C -145 -95, -75 -125, 0 -125 C 75 -125, 145 -95, 140 -10 Z" fill="#F59E0B" stroke="#B45309" stroke-width="6"/>
        <!-- 白芝麻 -->
        ${[[-65,-65],[-25,-85],[25,-82],[68,-60],[-45,-40],[0,-52],[48,-38]].map(([sx,sy]) =>
          `<ellipse cx="${sx}" cy="${sy}" rx="7" ry="3.8" fill="#FEF9C3"/>`
        ).join('')}
      </g>
    `
  },
  {
    id: 15,
    name: "草莓果醬厚片吐司",
    bopomofo: "ㄘㄠˇ ㄇㄟˊ ㄏㄡˋ ㄆㄧㄢˋ ㄊㄨˇ ㄙ",
    style: "西式早餐",
    styleCode: "WE",
    taste: "甜的（酸甜果醬）",
    tasteCode: "SWEET",
    origin: "西式早餐店",
    tags: ["西式", "甜食", "草莓果醬", "厚片吐司"],
    kidQuestion: "厚片吐司上面塗了紅紅甜甜的是什麼果醬呢？（草莓果醬！）",
    story: "厚厚的方形白吐司放進烤箱烤得外酥內軟，塗上滿滿晶瑩剔透的紅草莓果醬，吃起來甜甜的好幸福！",
    tip: "除了草莓果醬，早餐店還有巧克力、花生、奶酥等甜甜的厚片吐司喔！",
    priceStars: 1,
    renderFoodSVG: () => `
      <g transform="translate(320, 390)">
        <ellipse cx="0" cy="75" rx="215" ry="75" fill="#FCE7F3" stroke="#F472B6" stroke-width="6"/>
        <!-- 厚片吐司立體底座 -->
        <path d="M -125 -55 C -140 -85, -75 -110, 0 -92 C 75 -110, 140 -85, 125 -55 L 125 65 C 125 82, 108 92, 90 92 L -90 92 C -108 92, -125 82, -125 65 Z"
              fill="#D97706" stroke="#92400E" stroke-width="7"/>
        <!-- 吐司白色內層 -->
        <path d="M -112 -52 C -124 -76, -68 -96, 0 -80 C 68 -96, 124 -76, 112 -52 L 112 52 C 112 68, 98 76, 82 76 L -82 76 C -98 76, -112 68, -112 52 Z"
              fill="#FEFCE8"/>
        <!-- 紅亮草莓果醬抹層 -->
        <path d="M -92 -42 C -98 -62, -45 -72, 0 -60 C 45 -72, 98 -62, 92 -42 L 92 38 C 92 54, 76 60, 62 60 L -62 60 C -76 60, -92 54, -92 38 Z"
              fill="#E11D48" stroke="#BE123C" stroke-width="5"/>
        <!-- 果醬光澤與草莓籽 -->
        <path d="M -62 -35 Q -20 -48 35 -32" stroke="#FDA4AF" stroke-width="8" stroke-linecap="round" fill="none"/>
        ${[[-45,0],[-15,20],[25,-5],[48,25],[-35,35],[10,40]].map(([sx,sy]) =>
          `<circle cx="${sx}" cy="${sy}" r="3.5" fill="#FEF08A"/>`
        ).join('')}
      </g>
    `
  },
  {
    id: 16,
    name: "香濃玉米濃湯",
    bopomofo: "ㄒㄧㄤ ㄋㄨㄥˊ ㄩˋ ㄇㄧˇ ㄋㄨㄥˊ ㄊㄤ",
    style: "西式早餐",
    styleCode: "WE",
    taste: "鹹的（有加鹽巴）",
    tasteCode: "SALTY",
    origin: "西式早餐店",
    tags: ["西式", "鹹湯", "黃金玉米粒", "火腿蛋花"],
    kidQuestion: "黃黃的濃湯裡面，有一顆一顆甜甜的黃色蔬菜是什麼？（玉米粒）",
    story: "熱呼呼的奶油濃湯裡有好多飽滿的甜玉米粒、火腿丁和軟嫩蛋花，撒上一點黑胡椒粒，喝一口全身都暖起來！",
    tip: "玉米濃湯雖然有玉米自然的甜味，但煮湯時有加鹽巴調味，屬於鹹湯喔！",
    priceStars: 2,
    renderFoodSVG: () => `
      <g transform="translate(320, 395)">
        <!-- 雙耳西式湯碗 -->
        <ellipse cx="-165" cy="-15" rx="28" ry="16" fill="#FFFFFF" stroke="#64748B" stroke-width="6"/>
        <ellipse cx="165" cy="-15" rx="28" ry="16" fill="#FFFFFF" stroke="#64748B" stroke-width="6"/>
        <path d="M -155 -30 C -155 75, -85 100, 0 100 C 85 100, 155 75, 155 -30 Z" fill="#FFFFFF" stroke="#64748B" stroke-width="7"/>
        <ellipse cx="0" cy="-30" rx="155" ry="58" fill="#F8FAFC" stroke="#64748B" stroke-width="7"/>
        <!-- 金黃玉米濃湯面 -->
        <ellipse cx="0" cy="-26" rx="140" ry="48" fill="#FEF08A"/>
        <!-- 玉米粒、火腿丁與巴西里葉 -->
        ${[[-65,-30],[-25,-42],[30,-35],[75,-22],[-40,-10],[15,-12],[55,-8],[-5,-28]].map(([cx,cy]) =>
          `<ellipse cx="${cx}" cy="${cy}" rx="11" ry="8" fill="#F59E0B" stroke="#D97706" stroke-width="2"/>`
        ).join('')}
        ${[[-50,-22],[5,-38],[45,-25],[-15,-15]].map(([hx,hy]) =>
          `<rect x="${hx}" y="${hy}" width="12" height="10" rx="2" fill="#FB7185"/>`
        ).join('')}
        <!-- 黑胡椒粒 -->
        <circle cx="-20" cy="-25" r="2.5" fill="#1E293B"/>
        <circle cx="25" cy="-20" r="2.5" fill="#1E293B"/>
        <circle cx="0" cy="-30" r="2.5" fill="#1E293B"/>
      </g>
    `
  },
  {
    id: 17,
    name: "番茄蘑菇鐵板麵",
    bopomofo: "ㄊㄧㄝˇ ㄅㄢˇ ㄔㄠˇ ㄇㄧㄢˋ ㄐㄧㄚ ㄉㄢˋ",
    style: "西式早餐",
    styleCode: "WE",
    taste: "鹹的（有加鹽巴）",
    tasteCode: "SALTY",
    origin: "台灣早餐店特色",
    tags: ["西式", "鹹食", "蘑菇醬", "荷包蛋"],
    kidQuestion: "捲捲的鐵板麵旁邊，躺著一顆黃黃圓圓的是什麼？（荷包蛋！）",
    story: "Q彈的油麵在鐵板上淋上香濃蘑菇番茄醬汁，炒得熱氣騰騰，再蓋上一顆半熟荷包蛋，是台灣早餐店的超人氣王！",
    tip: "在早餐店吃鐵板麵配大冰奶，是台灣最獨特的西式早餐文化喔！",
    priceStars: 3,
    renderFoodSVG: () => `
      <g transform="translate(320, 405)">
        <!-- 黑色鐵板與木底座 -->
        <ellipse cx="0" cy="20" rx="235" ry="105" fill="#92400E" stroke="#78350F" stroke-width="6"/>
        <ellipse cx="0" cy="8" rx="215" ry="92" fill="#1E293B" stroke="#475569" stroke-width="7"/>
        <!-- 捲捲鐵板麵團與蘑菇紅醬 -->
        <ellipse cx="-25" cy="10" rx="145" ry="62" fill="#F59E0B"/>
        <ellipse cx="-25" cy="8" rx="120" ry="48" fill="#DC2626" opacity="0.8"/>
        <!-- 麵條線條 -->
        <path d="M -125 10 Q -70 -35 -10 5 Q 45 45 95 0" stroke="#FDE047" stroke-width="11" stroke-linecap="round" fill="none"/>
        <path d="M -115 28 Q -50 -15 15 25 Q 65 50 105 18" stroke="#FDE047" stroke-width="11" stroke-linecap="round" fill="none"/>
        <path d="M -95 -12 Q -35 28 35 -15" stroke="#FDE047" stroke-width="11" stroke-linecap="round" fill="none"/>
        <!-- 荷包蛋 -->
        <g transform="translate(85, -10)">
          <ellipse cx="0" cy="0" rx="68" ry="48" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="4"/>
          <circle cx="5" cy="-4" r="24" fill="#F59E0B"/>
          <circle cx="-2" cy="-10" r="6" fill="#FEF08A"/>
        </g>
        <!-- 青花菜點綴 -->
        <circle cx="-125" cy="-18" r="18" fill="#16A34A"/>
        <circle cx="-112" cy="-26" r="16" fill="#22C55E"/>
      </g>
    `
  },
  {
    id: 18,
    name: "薯條與微笑雞塊",
    bopomofo: "ㄕㄨˇ ㄊㄧㄠˊ ㄩˇ ㄐㄧ ㄎㄨㄞˋ",
    style: "西式早餐",
    styleCode: "WE",
    taste: "鹹的（有加鹽巴）",
    tasteCode: "SALTY",
    origin: "西式早餐店",
    tags: ["西式", "鹹食", "馬鈴薯", "番茄醬"],
    kidQuestion: "一根一根金黃色的薯條，是用什麼圓圓的根莖類蔬菜切成的？（馬鈴薯）",
    story: "馬鈴薯切成長條炸得金黃酥脆，撒上一點鹽巴，還有外酥內嫩的麥克雞塊，沾一點酸酸甜甜的番茄醬超好吃！",
    tip: "炸物雖然好吃，但早餐也要搭配蛋、牛奶或蔬果才更健康喔！",
    priceStars: 2,
    renderFoodSVG: () => `
      <g transform="translate(320, 400)">
        <ellipse cx="0" cy="30" rx="225" ry="100" fill="#FEF3C7" stroke="#F59E0B" stroke-width="7"/>
        <!-- 左側：紅色薯條盒與金黃薯條 -->
        <g transform="translate(-85, -10)">
          ${[-48, -28, -8, 12, 32, 50].map((fx, idx) =>
            `<rect x="${fx}" y="${-95 + (idx%2)*14}" width="18" height="110" rx="6" fill="#FACC15" stroke="#CA8A04" stroke-width="4" transform="rotate(${(idx-2.5)*5} ${fx} 0)"/>`
          ).join('')}
          <path d="M -72 -15 L 72 -15 L 56 82 L -56 82 Z" fill="#DC2626" stroke="#991B1B" stroke-width="6"/>
          <path d="M -72 -15 Q 0 12 72 -15" fill="#7F1D1D" opacity="0.25"/>
        </g>
        <!-- 右側：3塊黃金雞塊與番茄醬碟 -->
        <g transform="translate(85, 25)">
          <ellipse cx="-20" cy="-25" rx="45" ry="32" fill="#F59E0B" stroke="#B45309" stroke-width="5"/>
          <ellipse cx="35" cy="-5" rx="45" ry="32" fill="#D97706" stroke="#92400E" stroke-width="5"/>
          <ellipse cx="-10" cy="22" rx="46" ry="32" fill="#F59E0B" stroke="#B45309" stroke-width="5"/>
          <!-- 番茄醬小碟 -->
          <ellipse cx="65" cy="-65" rx="36" ry="22" fill="#FFFFFF" stroke="#94A3B8" stroke-width="4"/>
          <ellipse cx="65" cy="-65" rx="25" ry="14" fill="#DC2626"/>
        </g>
      </g>
    `
  },
  {
    id: 19,
    name: "蜂蜜奶油鬆餅",
    bopomofo: "ㄈㄥ ㄇㄧˋ ㄋㄞˇ ㄧㄡˊ ㄙㄨㄥ ㄅㄧㄥˇ",
    style: "西式早餐",
    styleCode: "WE",
    taste: "甜的（香甜蜂蜜）",
    tasteCode: "SWEET",
    origin: "西式早餐店",
    tags: ["西式", "甜食", "格子鬆餅", "蜂蜜奶油"],
    kidQuestion: "鬆餅上面有一格一格的洞洞，淋在上面金黃色甜甜的是什麼？（蜂蜜）",
    story: "烤得香噴噴的格子鬆餅疊在一起，放上一小塊慢慢融化的奶油，再淋上香甜蜂蜜，聞起來有濃濃的雞蛋牛奶香！",
    tip: "蜂蜜是小蜜蜂辛苦採花蜜做出來的天然甜味喔！",
    priceStars: 2,
    renderFoodSVG: () => `
      <g transform="translate(320, 400)">
        <ellipse cx="0" cy="30" rx="220" ry="105" fill="#FEF9C3" stroke="#EAB308" stroke-width="7"/>
        <!-- 兩片疊放的圓形格子鬆餅 -->
        <ellipse cx="-15" cy="25" rx="135" ry="72" fill="#D97706" stroke="#92400E" stroke-width="6"/>
        <ellipse cx="10" cy="-5" rx="135" ry="72" fill="#F59E0B" stroke="#92400E" stroke-width="6"/>
        <!-- 鬆餅格子壓紋 -->
        <path d="M -85 -25 L 95 15 M -65 -45 L 105 -8 M -100 0 L 75 38" stroke="#B45309" stroke-width="6" stroke-linecap="round"/>
        <path d="M -55 35 L 65 -45 M -15 45 L 95 -28 M -95 20 L 25 -50" stroke="#B45309" stroke-width="6" stroke-linecap="round"/>
        <!-- 蜂蜜淋醬與方塊奶油 -->
        <path d="M -65 -20 Q 0 -45 65 -15 Q 85 15 35 28 Q -25 35 -55 10 Z" fill="#D97706" opacity="0.75"/>
        <rect x="-25" y="-32" width="48" height="34" rx="6" fill="#FEF08A" stroke="#CA8A04" stroke-width="4" transform="rotate(-12)"/>
      </g>
    `
  },
  {
    id: 20,
    name: "早餐店大冰奶",
    bopomofo: "ㄗㄠˇ ㄘㄢ ㄉㄧㄢˋ ㄉㄚˋ ㄅㄧㄥ ㄋㄞˇ",
    style: "西式早餐",
    styleCode: "WE",
    taste: "甜的（香甜奶茶）",
    tasteCode: "SWEET",
    origin: "台灣早餐店傳奇",
    tags: ["西式", "甜飲", "紅茶加奶", "清涼好喝"],
    kidQuestion: "淺咖啡色的大冰奶，是用哪兩種飲料加在一起變出來的？（紅茶＋牛奶／奶精）",
    story: "古早味紅茶加上香濃奶香與冰塊，裝進印著笑臉或冷笑話的封口杯裡，是台灣早餐店人人必點的招牌甜飲料！",
    tip: "小朋友喝溫熱的「鮮奶茶」（紅茶加鮮奶）對肚子更好喔！",
    priceStars: 1,
    renderFoodSVG: () => `
      <g transform="translate(320, 380)">
        <!-- 外帶飲料杯 -->
        <path d="M -78 -105 L 78 -105 L 58 115 C 55 128, -55 128, -58 115 Z" fill="#FFFFFF" stroke="#64748B" stroke-width="6"/>
        <!-- 奶茶色液體 -->
        <path d="M -72 -68 L 72 -68 L 54 112 C 52 122, -52 122, -54 112 Z" fill="#D97706" opacity="0.65"/>
        <!-- 冰塊浮在上方 -->
        <rect x="-45" y="-58" width="28" height="24" rx="5" fill="#FFFFFF" opacity="0.85" transform="rotate(-10 -30 -45)"/>
        <rect x="-5" y="-55" width="28" height="24" rx="5" fill="#FFFFFF" opacity="0.85" transform="rotate(12 10 -45)"/>
        <rect x="25" y="-60" width="26" height="22" rx="5" fill="#FFFFFF" opacity="0.85" transform="rotate(-6 35 -48)"/>
        <!-- 杯身可愛早餐店太陽笑臉貼紙 -->
        <circle cx="0" cy="25" r="38" fill="#FEF08A" stroke="#CA8A04" stroke-width="4"/>
        <circle cx="-12" cy="18" r="4.5" fill="#1E293B"/>
        <circle cx="12" cy="18" r="4.5" fill="#1E293B"/>
        <path d="M -14 32 Q 0 44 14 32" stroke="#DC2626" stroke-width="4.5" stroke-linecap="round" fill="none"/>
        <!-- 封口膜與吸管 -->
        <ellipse cx="0" cy="-105" rx="82" ry="18" fill="#FEF2F2" stroke="#DC2626" stroke-width="6"/>
        <path d="M 10 -108 L 35 -168" stroke="#2563EB" stroke-width="15" stroke-linecap="round"/>
      </g>
    `
  },
  {
    id: 21,
    name: "玉米起司熱狗捲",
    bopomofo: "ㄩˋ ㄇㄧˇ ㄑㄧˇ ㄙ ㄖㄜˋ ㄍㄡˇ",
    style: "西式早餐",
    styleCode: "WE",
    taste: "鹹的（有加鹽巴）",
    tasteCode: "SALTY",
    origin: "西式早餐店",
    tags: ["西式", "鹹食", "波浪番茄醬", "熱狗潛艇堡"],
    kidQuestion: "熱狗麵包上面擠了紅紅跟黃黃、彎彎曲曲像波浪的是什麼醬？（番茄醬與黃芥末醬）",
    story: "鬆軟的長條麵包中間夾著一根Q彈熱狗，鋪上滿滿金黃起司與玉米粒，再擠上紅紅黃黃的波浪醬汁！",
    tip: "熱狗捲拿在手上吃很方便，小口小口咬才不會沾到嘴角喔！",
    priceStars: 2,
    renderFoodSVG: () => `
      <g transform="translate(320, 395) rotate(-10)">
        <ellipse cx="0" cy="20" rx="225" ry="90" fill="#F1F5F9" stroke="#CBD5E1" stroke-width="6" transform="rotate(10)"/>
        <!-- 潛艇堡麵包下層 -->
        <rect x="-175" y="-38" width="350" height="92" rx="46" fill="#F59E0B" stroke="#B45309" stroke-width="6"/>
        <!-- 翠綠生菜邊 -->
        <path d="M -155 -20 Q -100 -45 -45 -20 Q 10 -45 65 -20 Q 120 -45 155 -20" fill="#22C55E" stroke="#15803D" stroke-width="4"/>
        <!-- 長熱狗香腸 -->
        <rect x="-195" y="-22" width="390" height="44" rx="22" fill="#DC2626" stroke="#991B1B" stroke-width="6"/>
        <!-- 波浪番茄醬與黃芥末醬 -->
        <path d="M -160 0 Q -130 -24 -100 0 Q -70 24 -40 0 Q -10 -24 20 0 Q 50 24 80 0 Q 110 -24 140 0"
              stroke="#FACC15" stroke-width="10" stroke-linecap="round" fill="none"/>
      </g>
    `
  },
  {
    id: 22,
    name: "鮮奶麥片水果碗",
    bopomofo: "ㄒㄧㄢ ㄋㄞˇ ㄇㄞˋ ㄆㄧㄢˋ ㄨㄢˇ",
    style: "西式早餐",
    styleCode: "WE",
    taste: "甜的（香甜牛奶水果）",
    tasteCode: "SWEET",
    origin: "健康西式早點",
    tags: ["西式", "甜食", "冰涼鮮奶", "玉米脆片"],
    kidQuestion: "白色的牛奶裡面，泡著脆脆的麥片和哪兩種水果呢？（紅草莓與黃香蕉）",
    story: "把香脆的玉米麥片倒進碗裡，淋上冰冰涼涼的白色鮮奶，再擺上新鮮草莓與香蕉片，五顏六色營養又甜美！",
    tip: "鮮奶含有豐富的鈣質，每天早上喝一杯鮮奶可以讓牙齒跟骨頭更強壯！",
    priceStars: 2,
    renderFoodSVG: () => `
      <g transform="translate(320, 405)">
        <path d="M -165 -35 C -165 80, -90 105, 0 105 C 90 105, 165 80, 165 -35 Z" fill="#38BDF8" stroke="#0284C7" stroke-width="7"/>
        <ellipse cx="0" cy="-35" rx="165" ry="62" fill="#FFFFFF" stroke="#0284C7" stroke-width="7"/>
        <!-- 牛奶液面 -->
        <ellipse cx="0" cy="-32" rx="150" ry="52" fill="#F8FAFC"/>
        <!-- 玉米脆片 -->
        ${[[-75,-35],[-35,-48],[25,-45],[80,-30],[-55,-15],[0,-18],[55,-12]].map(([cx,cy]) =>
          `<ellipse cx="${cx}" cy="${cy}" rx="18" ry="11" fill="#F59E0B" stroke="#B45309" stroke-width="3"/>`
        ).join('')}
        <!-- 草莓塊 -->
        <polygon points="-25,-42 -5,-58 15,-40" fill="#EF4444" stroke="#B91C1C" stroke-width="3" stroke-linejoin="round"/>
        <polygon points="35,-30 55,-46 72,-28" fill="#EF4444" stroke="#B91C1C" stroke-width="3" stroke-linejoin="round"/>
        <!-- 香蕉圓片 -->
        <circle cx="-35" cy="-25" r="16" fill="#FEF08A" stroke="#CA8A04" stroke-width="3"/>
        <circle cx="15" cy="-28" r="16" fill="#FEF08A" stroke="#CA8A04" stroke-width="3"/>
      </g>
    `
  },

  // ==========================================
  // 三、台灣各縣市在地特色早餐地圖 (8 張)
  // ==========================================
  {
    id: 23,
    name: "台南牛肉湯配白飯",
    bopomofo: "ㄊㄞˊ ㄋㄢˊ ㄋㄧㄡˊ ㄖㄡˋ ㄊㄤ",
    style: "中式早餐",
    styleCode: "CN",
    taste: "鹹的（有加鹽巴）",
    tasteCode: "SALTY",
    origin: "台南在地特色",
    tags: ["中式", "鹹湯", "台南地圖", "鮮甜高湯"],
    kidQuestion: "你知道台灣哪一個城市的人，早上起床最愛喝熱騰騰的牛肉湯嗎？（台南！）",
    story: "台南人一大早最愛喝一碗用蔬果牛骨熬成的清甜熱湯，沖入粉嫩新鮮的牛肉片，配上一碗白飯元氣滿滿！",
    tip: "這是繪本《台灣早餐地圖》裡最有名的台南代表早餐喔！",
    priceStars: 3,
    renderFoodSVG: () => `
      <g transform="translate(320, 405)">
        <!-- 左邊：台南牛肉湯大碗 -->
        <g transform="translate(-55, 0)">
          <path d="M -135 -30 C -135 72, -75 95, 0 95 C 75 95, 135 72, 135 -30 Z" fill="#1E293B" stroke="#0F172A" stroke-width="7"/>
          <ellipse cx="0" cy="-30" rx="135" ry="52" fill="#F1F5F9" stroke="#0F172A" stroke-width="7"/>
          <!-- 清澈琥珀高湯 -->
          <ellipse cx="0" cy="-26" rx="122" ry="44" fill="#B45309" opacity="0.75"/>
          <!-- 粉嫩溫體牛肉片 -->
          <path d="M -65 -30 C -45 -50, -10 -45, 5 -25 C -15 -10, -50 -10, -65 -30 Z" fill="#FDA4AF" stroke="#9F1239" stroke-width="4"/>
          <path d="M -15 -38 C 10 -55, 45 -45, 65 -25 C 40 -8, 5 -12, -15 -38 Z" fill="#FB7185" stroke="#9F1239" stroke-width="4"/>
          <path d="M -35 -12 C -10 -28, 30 -25, 50 -8 C 25 8, -15 8, -35 -12 Z" fill="#FDA4AF" stroke="#9F1239" stroke-width="4"/>
          <!-- 薑絲與蔥花 -->
          <path d="M -15 -32 L 15 -22 M -10 -20 L 20 -30" stroke="#FEF08A" stroke-width="4" stroke-linecap="round"/>
          <circle cx="-45" cy="-22" r="5" fill="#16A34A"/>
          <circle cx="35" cy="-32" r="5" fill="#16A34A"/>
        </g>
        <!-- 右邊：小碗白飯 -->
        <g transform="translate(135, 25)">
          <path d="M -70 -15 C -70 45, -35 60, 0 60 C 35 60, 70 45, 70 -15 Z" fill="#3B82F6" stroke="#1D4ED8" stroke-width="5"/>
          <ellipse cx="0" cy="-22" rx="68" ry="32" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="5"/>
        </g>
      </g>
    `
  },
  {
    id: 24,
    name: "台中炒麵淋甜辣醬",
    bopomofo: "ㄊㄞˊ ㄓㄨㄥ ㄔㄠˇ ㄇㄧㄢˋ",
    style: "中式早餐",
    styleCode: "CN",
    taste: "鹹的（有加鹽巴）",
    tasteCode: "SALTY",
    origin: "台中在地特色",
    tags: ["中式", "鹹食", "台中地圖", "肉燥炒麵"],
    kidQuestion: "台中人早上吃炒麵的時候，喜歡在上面擠什麼橘紅色的醬料呢？（東泉甜辣醬）",
    story: "大鍋炒好的金黃油麵淋上香噴噴的滷肉燥與豆芽菜，台中人一定還要擠上橘紅色的在地甜辣醬才對味！",
    tip: "在台中，很多傳統早餐店不是賣三明治，而是賣炒麵配豬血湯喔！",
    priceStars: 2,
    renderFoodSVG: () => `
      <g transform="translate(320, 405)">
        <ellipse cx="0" cy="18" rx="215" ry="98" fill="#FFFFFF" stroke="#94A3B8" stroke-width="7"/>
        <!-- 金黃炒麵山 -->
        <ellipse cx="-15" cy="10" rx="145" ry="68" fill="#FACC15" stroke="#CA8A04" stroke-width="5"/>
        <!-- 麵條與豆芽韭菜 -->
        <path d="M -110 10 Q -45 -45 35 5 Q 85 35 115 -5" stroke="#EAB308" stroke-width="10" stroke-linecap="round" fill="none"/>
        <path d="M -95 28 Q -20 -25 55 25" stroke="#EAB308" stroke-width="10" stroke-linecap="round" fill="none"/>
        <!-- 滷肉燥與橘紅甜辣醬 -->
        <ellipse cx="-15" cy="-12" rx="58" ry="24" fill="#78350F"/>
        <path d="M -75 5 Q -15 -35 55 5 Q 15 45 -55 18" stroke="#EA580C" stroke-width="12" stroke-linecap="round" fill="none"/>
        <!-- 右側招牌橘紅醬料瓶 -->
        <g transform="translate(155, -20) rotate(12)">
          <rect x="-24" y="-35" width="48" height="95" rx="10" fill="#EA580C" stroke="#9A3412" stroke-width="5"/>
          <polygon points="-12,-35 12,-35 4,-68 -4,-68" fill="#FEF08A" stroke="#CA8A04" stroke-width="4"/>
          <rect x="-18" y="-5" width="36" height="32" rx="4" fill="#FEF9C3"/>
          <text x="0" y="18" font-size="18" font-weight="900" fill="#DC2626" text-anchor="middle" font-family="Microsoft JhengHei">甜辣</text>
        </g>
      </g>
    `
  },
  {
    id: 25,
    name: "彰化阿璋控肉飯",
    bopomofo: "ㄓㄤ ㄏㄨㄚˋ ㄎㄨㄥˋ ㄖㄡˋ ㄈㄢˋ",
    style: "中式早餐",
    styleCode: "CN",
    taste: "鹹的（有加鹽巴）",
    tasteCode: "SALTY",
    origin: "彰化在地特色",
    tags: ["中式", "鹹食", "彰化地圖", "竹籤控肉"],
    kidQuestion: "這碗白飯上面蓋著一大塊滷得亮晶晶的肉，彰化人早上就吃這麼豐盛嗎？（沒錯！）",
    story: "熱騰騰的白米飯上，蓋著一塊用竹籤串起來、滷得油亮軟嫩的醬油控肉，配上脆脆的醃蘿蔔乾，香氣十足！",
    tip: "彰化人不管是早上、中午還是晚上，隨時都能吃上一碗香噴噴的控肉飯喔！",
    priceStars: 3,
    renderFoodSVG: () => `
      <g transform="translate(320, 410)">
        <!-- 碗身 -->
        <path d="M -145 -20 C -145 80, -80 105, 0 105 C 80 105, 145 80, 145 -20 Z" fill="#DC2626" stroke="#991B1B" stroke-width="7"/>
        <ellipse cx="0" cy="-25" rx="145" ry="52" fill="#FFFFFF" stroke="#475569" stroke-width="6"/>
        <!-- 淋滷汁的白飯 -->
        <ellipse cx="0" cy="-25" rx="132" ry="44" fill="#FEFCE8"/>
        <!-- 大塊油亮控肉與竹籤 -->
        <line x1="-115" y1="-55" x2="115" y2="-15" stroke="#D97706" stroke-width="8" stroke-linecap="round"/>
        <path d="M -85 -48 C -60 -78, 45 -78, 85 -42 C 95 -10, 60 15, -15 12 C -75 10, -95 -18, -85 -48 Z"
              fill="#92400E" stroke="#451A03" stroke-width="6"/>
        <path d="M -75 -45 C -50 -68, 35 -68, 72 -40 C 55 -25, -45 -25, -75 -45 Z"
              fill="#D97706"/>
        <!-- 醃黃蘿蔔片與香菜 -->
        <circle cx="-65" cy="-5" r="18" fill="#FACC15" stroke="#CA8A04" stroke-width="3"/>
        <circle cx="65" cy="-12" r="10" fill="#16A34A"/>
        <circle cx="78" cy="-4" r="9" fill="#22C55E"/>
      </g>
    `
  },
  {
    id: 26,
    name: "嘉義雞肉飯配荷包蛋",
    bopomofo: "ㄐㄧㄚ ㄧˋ ㄐㄧ ㄖㄡˋ ㄈㄢˋ",
    style: "中式早餐",
    styleCode: "CN",
    taste: "鹹的（有加鹽巴）",
    tasteCode: "SALTY",
    origin: "嘉義在地特色",
    tags: ["中式", "鹹食", "嘉義地圖", "火雞肉絲"],
    kidQuestion: "白飯上面鋪了一絲一絲白白的肉，還有一顆太陽蛋，這是哪裡的招牌美食？（嘉義雞肉飯）",
    story: "粒粒分明的白飯鋪上嫩嫩的火雞肉絲，淋上香噴噴的油蔥雞油，再加一顆半熟荷包蛋和黃蘿蔔片，太美味啦！",
    tip: "嘉義最有名的就是火雞肉飯，很多嘉義人從早餐就開始吃雞肉飯喔！",
    priceStars: 3,
    renderFoodSVG: () => `
      <g transform="translate(320, 410)">
        <path d="M -145 -20 C -145 80, -80 105, 0 105 C 80 105, 145 80, 145 -20 Z" fill="#FEF3C7" stroke="#D97706" stroke-width="7"/>
        <ellipse cx="0" cy="-25" rx="145" ry="52" fill="#FFFFFF" stroke="#D97706" stroke-width="6"/>
        <!-- 雞肉絲與油蔥酥 -->
        ${[[-75,-35],[-55,-20],[-35,-40],[-15,-22],[5,-38],[-65,-8],[-25,-8]].map(([rx,ry]) =>
          `<rect x="${rx}" y="${ry}" width="42" height="12" rx="6" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="3" transform="rotate(-12 ${rx} ${ry})"/>`
        ).join('')}
        ${[[-50,-28],[-20,-32],[-40,-15],[-10,-18]].map(([ox,oy]) =>
          `<circle cx="${ox}" cy="${oy}" r="4.5" fill="#92400E"/>`
        ).join('')}
        <!-- 右半邊太陽荷包蛋 -->
        <g transform="translate(52, -25)">
          <ellipse cx="0" cy="0" rx="55" ry="35" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="4"/>
          <circle cx="0" cy="-2" r="20" fill="#F59E0B"/>
        </g>
        <!-- 黃色醃蘿蔔片 -->
        <ellipse cx="-85" cy="-12" rx="22" ry="14" fill="#FACC15" stroke="#CA8A04" stroke-width="3"/>
      </g>
    `
  },
  {
    id: 27,
    name: "基隆炭烤吉古拉",
    bopomofo: "ㄐㄧ ㄌㄨㄥˊ ㄐㄧˊ ㄍㄨˇ ㄌㄚ",
    style: "中式早餐",
    styleCode: "CN",
    taste: "鹹的（有加鹽巴）",
    tasteCode: "SALTY",
    origin: "基隆在地特色",
    tags: ["中式", "鹹食", "基隆地圖", "魚漿竹輪"],
    kidQuestion: "長得像水管一樣中間空空的「吉古拉」，是用海裡的什麼做的呢？（新鮮魚漿）",
    story: "基隆海港特有的「吉古拉」，是用新鮮魚漿塗在鐵棒上炭烤而成，中間空空的像竹子一樣，吃起來有滿滿大海的鮮味！",
    tip: "「吉古拉」的名字來自日文的「竹輪（Chikuwa）」，是基隆小朋友最熟悉的點心與早餐配菜！",
    priceStars: 2,
    renderFoodSVG: () => `
      <g transform="translate(320, 395)">
        <ellipse cx="0" cy="25" rx="220" ry="100" fill="#E0F2FE" stroke="#0284C7" stroke-width="7"/>
        <!-- 兩根斜放的炭烤吉古拉 (竹輪) -->
        ${[
          {x: -10, y: -15, rot: -16},
          {x: 15, y: 32, rot: -6}
        ].map(c => `
          <g transform="translate(${c.x}, ${c.y}) rotate(${c.rot})">
            <!-- 兩端白邊 -->
            <rect x="-155" y="-26" width="310" height="52" rx="22" fill="#FEFCE8" stroke="#CA8A04" stroke-width="5"/>
            <!-- 中央炭烤金黃焦香區 -->
            <rect x="-115" y="-26" width="230" height="52" fill="#D97706" stroke="#92400E" stroke-width="4"/>
            <!-- 烤網斑紋 -->
            <line x1="-65" y1="-24" x2="-55" y2="24" stroke="#78350F" stroke-width="5"/>
            <line x1="0" y1="-24" x2="10" y2="24" stroke="#78350F" stroke-width="5"/>
            <line x1="65" y1="-24" x2="75" y2="24" stroke="#78350F" stroke-width="5"/>
            <!-- 中空圓孔橫切面 -->
            <ellipse cx="-152" cy="0" rx="14" ry="24" fill="#FEF9C3" stroke="#CA8A04" stroke-width="4"/>
            <ellipse cx="-152" cy="0" rx="7" ry="13" fill="#475569"/>
          </g>
        `).join('')}
      </g>
    `
  },
  {
    id: 28,
    name: "屏東蒸肉圓",
    bopomofo: "ㄆㄧㄥˊ ㄉㄨㄥ ㄓㄥ ㄖㄡˋ ㄩㄢˊ",
    style: "中式早餐",
    styleCode: "CN",
    taste: "鹹的（有加鹽巴）",
    tasteCode: "SALTY",
    origin: "屏東在地特色",
    tags: ["中式", "鹹食", "屏東地圖", "軟Q米皮"],
    kidQuestion: "白白軟軟的屏東肉圓是用「蒸」的還是用「炸」的呢？（用蒸籠蒸的！）",
    story: "南台灣的屏東人早上喜歡吃軟Q滑嫩的「清蒸肉圓」，在來米漿做的外皮包著鮮美豬肉餡，淋上滷汁撒上香菜超讚！",
    tip: "中部（像彰化）的肉圓多半是用油泡炸得Q彈，屏東的肉圓則是清蒸軟嫩，各有特色喔！",
    priceStars: 2,
    renderFoodSVG: () => `
      <g transform="translate(320, 405)">
        <ellipse cx="0" cy="15" rx="205" ry="98" fill="#FFFFFF" stroke="#64748B" stroke-width="7"/>
        <!-- 醬汁底 -->
        <ellipse cx="0" cy="20" rx="165" ry="72" fill="#92400E" opacity="0.75"/>
        <!-- 3顆白嫩清蒸肉圓 -->
        ${[
          {x: -70, y: 5},
          {x: 70, y: 5},
          {x: 0, y: 32}
        ].map(m => `
          <g transform="translate(${m.x}, ${m.y})">
            <ellipse cx="0" cy="0" rx="68" ry="44" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="5" opacity="0.92"/>
            <!-- 隱約透出的粉紅肉餡 -->
            <ellipse cx="0" cy="2" rx="34" ry="22" fill="#D97706" opacity="0.45"/>
            <!-- 醬油膏與香菜 -->
            <path d="M -32 -5 Q 0 12 32 -5" stroke="#78350F" stroke-width="9" stroke-linecap="round" fill="none"/>
            <circle cx="-8" cy="-10" r="6" fill="#16A34A"/>
            <circle cx="8" cy="-6" r="6" fill="#22C55E"/>
          </g>
        `).join('')}
      </g>
    `
  },
  {
    id: 29,
    name: "金門特色蛋狗",
    bopomofo: "ㄐㄧㄣ ㄇㄣˊ ㄊㄜˋ ㄙㄜˋ ㄉㄢˋ ㄍㄡˇ",
    style: "中式早餐",
    styleCode: "CN",
    taste: "鹹的（有加鹽巴）",
    tasteCode: "SALTY",
    origin: "金門離島特色",
    tags: ["中式", "鹹食", "金門地圖", "蔥油餅夾熱狗"],
    kidQuestion: "「蛋狗」這個名字好有趣！它是用哪兩種食物合體變出來的？（蔥油餅加蛋＋熱狗！）",
    story: "金門最有名的創意早餐！把酥脆的蔥油餅加蛋，裡面捲進一根大熱狗，合起來就叫做「蛋狗」；如果夾香腸就叫「蛋香」喔！",
    tip: "這是《台灣早餐地圖》裡小朋友聽到名字都會哈哈大笑的金門招牌早餐！",
    priceStars: 3,
    renderFoodSVG: () => `
      <g transform="translate(320, 395)">
        <!-- 防油紙袋與蛋狗捲 -->
        <g transform="rotate(-14)">
          <!-- 突出的大熱狗 -->
          <rect x="-45" y="-125" width="90" height="140" rx="45" fill="#DC2626" stroke="#991B1B" stroke-width="6"/>
          <path d="M -20 -105 L -20 -40" stroke="#FCA5A5" stroke-width="8" stroke-linecap="round"/>
          <!-- 外層金黃蔥油餅加蛋包裹 -->
          <path d="M -115 -45 C -85 -75, 85 -75, 115 -45 L 95 75 L -95 75 Z" fill="#FACC15" stroke="#B45309" stroke-width="6"/>
          <!-- 蔥花與焦斑 -->
          <circle cx="-55" cy="-15" r="7" fill="#16A34A"/>
          <circle cx="45" cy="-22" r="7" fill="#16A34A"/>
          <circle cx="15" cy="10" r="7" fill="#15803D"/>
          <ellipse cx="-25" cy="-30" rx="18" ry="8" fill="#D97706" opacity="0.6"/>
          <!-- 紙袋下半部 -->
          <path d="M -108 15 L 108 15 L 88 115 L -88 115 Z" fill="#FFFFFF" stroke="#94A3B8" stroke-width="6"/>
          <text x="0" y="75" font-size="32" font-weight="900" fill="#DC2626" text-anchor="middle" font-family="Microsoft JhengHei">金門蛋狗</text>
        </g>
      </g>
    `
  },
  {
    id: 30,
    name: "古早味甜燒餅與花生湯",
    bopomofo: "ㄊㄧㄢˊ ㄕㄠ ㄅㄧㄥˇ ㄏㄨㄚ ㄕㄥ ㄊㄤ",
    style: "中式早餐",
    styleCode: "CN",
    taste: "甜的（香甜糖心）",
    tasteCode: "SWEET",
    origin: "傳統中式甜點早點",
    tags: ["中式", "甜食", "麥芽糖心", "綿密花生仁湯"],
    kidQuestion: "圓圓扁扁的甜燒餅咬開來，裡面流出來亮晶晶甜甜的是什麼？（糖膏／麥芽糖）",
    story: "烤得金黃酥脆的圓形甜燒餅，咬開裡面是香甜流心的麥芽糖膏，配上一碗煮得綿密軟爛的熱花生仁湯，甜到心坎裡！",
    tip: "包著糖心的「甜燒餅」也是傳統豆漿店的人氣甜點喔！",
    priceStars: 2,
    renderFoodSVG: () => `
      <g transform="translate(320, 405)">
        <!-- 左邊：熱花生仁甜湯碗 -->
        <g transform="translate(-85, 10)">
          <path d="M -115 -25 C -115 65, -60 88, 0 88 C 60 88, 115 65, 115 -25 Z" fill="#F43F5E" stroke="#BE123C" stroke-width="6"/>
          <ellipse cx="0" cy="-25" rx="115" ry="44" fill="#FFFFFF" stroke="#BE123C" stroke-width="6"/>
          <!-- 乳白花生甜湯 -->
          <ellipse cx="0" cy="-22" rx="102" ry="36" fill="#FEF9C3"/>
          <!-- 綿密去皮花生仁 -->
          ${[[-45,-25],[-15,-32],[25,-28],[50,-18],[-25,-10],[12,-12]].map(([px,py]) =>
            `<ellipse cx="${px}" cy="${py}" rx="16" ry="10" fill="#FDE68A" stroke="#D97706" stroke-width="3"/>`
          ).join('')}
        </g>
        <!-- 右邊：金黃流心甜燒餅 -->
        <g transform="translate(105, 15) rotate(10)">
          <ellipse cx="0" cy="0" rx="95" ry="62" fill="#F59E0B" stroke="#B45309" stroke-width="6"/>
          <!-- 咬開露出晶瑩琥珀糖心 -->
          <ellipse cx="-15" cy="5" rx="48" ry="26" fill="#FEF3C7" stroke="#D97706" stroke-width="4"/>
          <ellipse cx="-15" cy="5" rx="34" ry="16" fill="#D97706"/>
          <!-- 白芝麻 -->
          <circle cx="25" cy="-20" r="3.5" fill="#FFFFFF"/>
          <circle cx="45" cy="-5" r="3.5" fill="#FFFFFF"/>
          <circle cx="30" cy="18" r="3.5" fill="#FFFFFF"/>
          <circle cx="-10" cy="-28" r="3.5" fill="#FFFFFF"/>
        </g>
      </g>
    `
  }
];

// ==========================================
// 四、3–5歲幼兒園互動分類卡、點餐角色卡與說明書卡 (6 張)
// 每張同樣為 寬 6.4 cm × 高 8.9 cm
// ==========================================
const SPECIAL_CARDS_DATA = [
  {
    id: 31,
    code: "SORT-CN",
    name: "【分類遊戲卡】中式早餐盤",
    diffHint: "正面：中式早餐分類圖卡 ↔ 反面：中式早餐點餐小幫手",
    category: "幼兒分類遊戲卡",
    renderSide: (side) => {
      if (side === 'A') {
        return `
        <svg viewBox="0 0 640 890" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="640" height="890" fill="#FEF2F2"/>
          <rect x="22" y="22" width="596" height="846" rx="36" fill="#FFFFFF" stroke="#DC2626" stroke-width="14"/>
          <rect x="38" y="38" width="564" height="814" rx="26" fill="none" stroke="#FCA5A5" stroke-width="4" stroke-dasharray="14 10"/>

          <!-- 頂部大標章 -->
          <rect x="70" y="65" width="500" height="115" rx="28" fill="#DC2626"/>
          <text x="320" y="138" font-size="60" font-weight="900" fill="#FEF08A" text-anchor="middle" font-family="Microsoft JhengHei">🥢 中式早餐</text>

          <text x="320" y="232" font-size="30" font-weight="900" fill="#991B1B" text-anchor="middle" font-family="Microsoft JhengHei">請把「中式早餐」排在這一邊！</text>

          <!-- 中央大圖示：傳統蒸籠、碗筷、燒餅豆漿 -->
          <circle cx="320" cy="465" r="185" fill="#FEF3C7" stroke="#F59E0B" stroke-width="10"/>
          <!-- 大紅碗與竹筷 -->
          <line x1="175" y1="340" x2="475" y2="310" stroke="#78350F" stroke-width="14" stroke-linecap="round"/>
          <line x1="175" y1="365" x2="475" y2="350" stroke="#78350F" stroke-width="14" stroke-linecap="round"/>
          <path d="M 190 440 C 190 560, 245 585, 320 585 C 395 585, 450 560, 450 440 Z" fill="#DC2626" stroke="#7F1D1D" stroke-width="8"/>
          <path d="M 205 495 Q 320 530 435 495" stroke="#FEF08A" stroke-width="10" fill="none"/>
          <!-- 碗裡冒出大包子與飯糰 -->
          <circle cx="275" cy="420" r="55" fill="#FFFFFF" stroke="#94A3B8" stroke-width="6"/>
          <circle cx="365" cy="425" r="52" fill="#FDE68A" stroke="#B45309" stroke-width="6"/>

          <!-- 底部提示區 -->
          <rect x="65" y="685" width="510" height="135" rx="22" fill="#FEF2F2" stroke="#FCA5A5" stroke-width="4"/>
          <text x="320" y="735" font-size="27" font-weight="900" fill="#991B1B" text-anchor="middle" font-family="Microsoft JhengHei">🔍 找找看卡牌左上角有</text>
          <text x="320" y="788" font-size="34" font-weight="900" fill="#DC2626" text-anchor="middle" font-family="Microsoft JhengHei">紅色「🥢 中式早餐」標章！</text>
        </svg>`;
      } else {
        return renderCardBackSVG({
          badgeColor: "#DC2626",
          badgeText: "分類玩法 1：中式 vs 西式",
          title: "🥢 哪些是中式早餐？",
          subtitle: "傳統豆漿店、蒸籠與阿公阿嬤的家常早點",
          points: [
            "常見食材：米飯、糯米、豆漿、蔥花、醬油膏",
            "代表餐點：蛋餅、飯糰、燒餅油條、包子饅頭",
            "特色餐具：竹蒸籠、湯碗、筷子、湯匙",
            "在地特色：台南牛肉湯、台中炒麵、彰化控肉飯"
          ],
          footerTip: "把這張卡放在桌面左邊，讓孩子找出所有中式早餐卡！"
        });
      }
    }
  },
  {
    id: 32,
    code: "SORT-WE",
    name: "【分類遊戲卡】西式早餐盤",
    diffHint: "正面：西式早餐分類圖卡 ↔ 反面：西式早餐點餐小幫手",
    category: "幼兒分類遊戲卡",
    renderSide: (side) => {
      if (side === 'A') {
        return `
        <svg viewBox="0 0 640 890" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="640" height="890" fill="#EFF6FF"/>
          <rect x="22" y="22" width="596" height="846" rx="36" fill="#FFFFFF" stroke="#2563EB" stroke-width="14"/>
          <rect x="38" y="38" width="564" height="814" rx="26" fill="none" stroke="#93C5FD" stroke-width="4" stroke-dasharray="14 10"/>

          <!-- 頂部大標章 -->
          <rect x="70" y="65" width="500" height="115" rx="28" fill="#2563EB"/>
          <text x="320" y="138" font-size="60" font-weight="900" fill="#FFFFFF" text-anchor="middle" font-family="Microsoft JhengHei">🍴 西式早餐</text>

          <text x="320" y="232" font-size="30" font-weight="900" fill="#1E40AF" text-anchor="middle" font-family="Microsoft JhengHei">請把「西式早餐」排在這一邊！</text>

          <!-- 中央大圖示：西式餐盤、刀叉、吐司漢堡 -->
          <circle cx="320" cy="465" r="185" fill="#DBEAFE" stroke="#3B82F6" stroke-width="10"/>
          <circle cx="320" cy="465" r="142" fill="#FFFFFF" stroke="#93C5FD" stroke-width="6"/>
          <!-- 吐司與荷包蛋圖案 -->
          <path d="M 235 415 C 225 385, 275 370, 320 385 C 365 370, 415 385, 405 415 L 405 535 L 235 535 Z" fill="#F59E0B" stroke="#B45309" stroke-width="7"/>
          <rect x="250" y="410" width="140" height="110" rx="12" fill="#FEFCE8"/>
          <circle cx="320" cy="465" r="36" fill="#FACC15" stroke="#CA8A04" stroke-width="4"/>

          <!-- 底部提示區 -->
          <rect x="65" y="685" width="510" height="135" rx="22" fill="#EFF6FF" stroke="#93C5FD" stroke-width="4"/>
          <text x="320" y="735" font-size="27" font-weight="900" fill="#1E3A8A" text-anchor="middle" font-family="Microsoft JhengHei">🔍 找找看卡牌左上角有</text>
          <text x="320" y="788" font-size="34" font-weight="900" fill="#2563EB" text-anchor="middle" font-family="Microsoft JhengHei">藍色「🍴 西式早餐」標章！</text>
        </svg>`;
      } else {
        return renderCardBackSVG({
          badgeColor: "#2563EB",
          badgeText: "分類玩法 1：中式 vs 西式",
          title: "🍴 哪些是西式早餐？",
          subtitle: "西式早餐店、烤吐司與漢堡三明治",
          points: [
            "常見食材：吐司麵包、漢堡包、起司、生菜、果醬",
            "代表餐點：三明治、漢堡、厚片吐司、鬆餅、雞塊",
            "人氣湯飲：大冰奶、玉米濃湯、鮮奶麥片",
            "台灣特色：早餐店鐵板麵加荷包蛋"
          ],
          footerTip: "把這張卡放在桌面右邊，跟中式早餐比一比誰比較多！"
        });
      }
    }
  },
  {
    id: 33,
    code: "SORT-SALTY",
    name: "【分類遊戲卡】鹹的（有加鹽巴）",
    diffHint: "正面：鹹食分類圖卡 ↔ 反面：味覺探索小知識",
    category: "幼兒分類遊戲卡",
    renderSide: (side) => {
      if (side === 'A') {
        return `
        <svg viewBox="0 0 640 890" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="640" height="890" fill="#FFFBEB"/>
          <rect x="22" y="22" width="596" height="846" rx="36" fill="#FFFFFF" stroke="#D97706" stroke-width="14"/>
          <rect x="38" y="38" width="564" height="814" rx="26" fill="none" stroke="#FCD34D" stroke-width="4" stroke-dasharray="14 10"/>

          <!-- 頂部大標章 -->
          <rect x="60" y="65" width="520" height="115" rx="28" fill="#D97706"/>
          <text x="320" y="138" font-size="52" font-weight="900" fill="#FFFFFF" text-anchor="middle" font-family="Microsoft JhengHei">🧂 吃起來是鹹的</text>

          <text x="320" y="232" font-size="30" font-weight="900" fill="#92400E" text-anchor="middle" font-family="Microsoft JhengHei">有加鹽巴、醬油膏或胡椒鹽的早餐！</text>

          <!-- 中央大圖示：可愛鹽巴罐灑鹽巴 -->
          <circle cx="320" cy="465" r="185" fill="#FEF3C7" stroke="#F59E0B" stroke-width="10"/>
          <g transform="translate(310, 445) rotate(-18)">
            <rect x="-65" y="-75" width="130" height="165" rx="24" fill="#FFFFFF" stroke="#475569" stroke-width="8"/>
            <path d="M -55 -75 C -55 -125, 55 -125, 55 -75 Z" fill="#94A3B8" stroke="#475569" stroke-width="8"/>
            <rect x="-48" y="-20" width="96" height="58" rx="10" fill="#F59E0B"/>
            <text x="0" y="20" font-size="34" font-weight="900" fill="#FFFFFF" text-anchor="middle" font-family="Microsoft JhengHei">SALT 鹽</text>
          </g>
          <!-- 灑出的鹽巴粒 -->
          <circle cx="240" cy="315" r="8" fill="#F59E0B"/>
          <circle cx="215" cy="345" r="8" fill="#F59E0B"/>
          <circle cx="265" cy="340" r="8" fill="#F59E0B"/>

          <!-- 底部提示區 -->
          <rect x="65" y="685" width="510" height="135" rx="22" fill="#FFFBEB" stroke="#FCD34D" stroke-width="4"/>
          <text x="320" y="735" font-size="27" font-weight="900" fill="#92400E" text-anchor="middle" font-family="Microsoft JhengHei">🔍 找找看卡牌右上角有</text>
          <text x="320" y="788" font-size="34" font-weight="900" fill="#D97706" text-anchor="middle" font-family="Microsoft JhengHei">橘色「🧂 鹹的(有加鹽)」標章！</text>
        </svg>`;
      } else {
        return renderCardBackSVG({
          badgeColor: "#D97706",
          badgeText: "分類玩法 2：鹹的 vs 甜的",
          title: "🧂 哪些早餐吃起來是鹹的？",
          subtitle: "認識「有加鹽巴、醬油、肉燥」的鹹味早餐",
          points: [
            "中式鹹食：蛋餅、飯糰、燒餅油條、蘿蔔糕、小籠包",
            "特別注意：『鹹豆漿』雖然是豆漿，但吃起來是鹹的喔！",
            "西式鹹食：火腿蛋三明治、漢堡、鐵板麵、雞塊薯條",
            "在地鹹湯：台南牛肉湯、玉米濃湯、清粥小菜"
          ],
          footerTip: "請小朋友說說看：你今天早上吃的是鹹的還是甜的呢？"
        });
      }
    }
  },
  {
    id: 34,
    code: "SORT-SWEET",
    name: "【分類遊戲卡】甜的（香甜滋味）",
    diffHint: "正面：甜食分類圖卡 ↔ 反面：味覺探索小知識",
    category: "幼兒分類遊戲卡",
    renderSide: (side) => {
      if (side === 'A') {
        return `
        <svg viewBox="0 0 640 890" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="640" height="890" fill="#FDF2F8"/>
          <rect x="22" y="22" width="596" height="846" rx="36" fill="#FFFFFF" stroke="#DB2777" stroke-width="14"/>
          <rect x="38" y="38" width="564" height="814" rx="26" fill="none" stroke="#F9A8D4" stroke-width="4" stroke-dasharray="14 10"/>

          <!-- 頂部大標章 -->
          <rect x="60" y="65" width="520" height="115" rx="28" fill="#DB2777"/>
          <text x="320" y="138" font-size="52" font-weight="900" fill="#FFFFFF" text-anchor="middle" font-family="Microsoft JhengHei">🍯 吃起來是甜的</text>

          <text x="320" y="232" font-size="30" font-weight="900" fill="#9D174D" text-anchor="middle" font-family="Microsoft JhengHei">有加果醬、蜂蜜、糖或鮮奶水果的早餐！</text>

          <!-- 中央大圖示：蜂蜜罐與草莓愛心 -->
          <circle cx="320" cy="465" r="185" fill="#FCE7F3" stroke="#EC4899" stroke-width="10"/>
          <g transform="translate(320, 470)">
            <rect x="-75" y="-65" width="150" height="145" rx="32" fill="#FACC15" stroke="#B45309" stroke-width="8"/>
            <rect x="-60" y="-95" width="120" height="32" rx="12" fill="#D97706" stroke="#78350F" stroke-width="7"/>
            <rect x="-55" y="-15" width="110" height="55" rx="12" fill="#FFFFFF"/>
            <text x="0" y="24" font-size="32" font-weight="900" fill="#DB2777" text-anchor="middle" font-family="Microsoft JhengHei">SWEET 甜</text>
          </g>

          <!-- 底部提示區 -->
          <rect x="65" y="685" width="510" height="135" rx="22" fill="#FDF2F8" stroke="#F9A8D4" stroke-width="4"/>
          <text x="320" y="735" font-size="27" font-weight="900" fill="#9D174D" text-anchor="middle" font-family="Microsoft JhengHei">🔍 找找看卡牌右上角有</text>
          <text x="320" y="788" font-size="34" font-weight="900" fill="#DB2777" text-anchor="middle" font-family="Microsoft JhengHei">粉紅「🍯 甜的(香甜)」標章！</text>
        </svg>`;
      } else {
        return renderCardBackSVG({
          badgeColor: "#DB2777",
          badgeText: "分類玩法 2：鹹的 vs 甜的",
          title: "🍯 哪些早餐吃起來是甜的？",
          subtitle: "認識「果醬、蜂蜜、甜豆漿米漿」的甜味早餐",
          points: [
            "香甜抹醬與點心：草莓厚片吐司、蜂蜜奶油鬆餅",
            "中式甜湯與甜餅：甜燒餅配花生湯",
            "營養甜飲：香甜冰熱豆漿、香濃花生米漿、大冰奶",
            "水果牛奶：鮮奶麥片水果碗"
          ],
          footerTip: "提醒孩子：甜食好好吃，吃完早餐記得要漱口刷牙喔！"
        });
      }
    }
  },
  {
    id: 35,
    code: "ROLE-ORDER",
    name: "【好朋友點餐卡】看圖點餐盤",
    diffHint: "正面：今日主廚點餐單 ↔ 反面：好朋友招待券",
    category: "角色扮演點餐卡",
    renderSide: (side) => {
      if (side === 'A') {
        return `
        <svg viewBox="0 0 640 890" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="640" height="890" fill="#ECFDF5"/>
          <rect x="22" y="22" width="596" height="846" rx="36" fill="#FFFFFF" stroke="#059669" stroke-width="14"/>
          <rect x="60" y="60" width="520" height="110" rx="26" fill="#059669"/>
          <text x="320" y="132" font-size="52" font-weight="900" fill="#FEF08A" text-anchor="middle" font-family="Microsoft JhengHei">🧑‍🍳 幸福早餐店點餐單</text>

          <text x="320" y="225" font-size="29" font-weight="900" fill="#065F46" text-anchor="middle" font-family="Microsoft JhengHei">「早安！請問今天想吃什麼早餐？」</text>

          <!-- 點餐組合框 -->
          <rect x="65" y="260" width="510" height="175" rx="24" fill="#F0FDF4" stroke="#10B981" stroke-width="5"/>
          <text x="320" y="315" font-size="32" font-weight="900" fill="#047857" text-anchor="middle" font-family="Microsoft JhengHei">🍽️ 任務 1：點 1 份主餐</text>
          <text x="320" y="368" font-size="25" font-weight="700" fill="#334155" text-anchor="middle" font-family="Microsoft JhengHei">（例如：蛋餅、飯糰、三明治、漢堡）</text>
          <text x="320" y="410" font-size="24" font-weight="800" fill="#059669" text-anchor="middle" font-family="Microsoft JhengHei">👉 看圖說出食物名稱並擺在桌面上！</text>

          <rect x="65" y="460" width="510" height="175" rx="24" fill="#FEFCE8" stroke="#F59E0B" stroke-width="5"/>
          <text x="320" y="515" font-size="32" font-weight="900" fill="#B45309" text-anchor="middle" font-family="Microsoft JhengHei">🥤 任務 2：配 1 杯飲料或湯</text>
          <text x="320" y="568" font-size="25" font-weight="700" fill="#334155" text-anchor="middle" font-family="Microsoft JhengHei">（例如：豆漿、米漿、大冰奶、玉米濃湯）</text>
          <text x="320" y="610" font-size="24" font-weight="800" fill="#D97706" text-anchor="middle" font-family="Microsoft JhengHei">👉 雙手送給好朋友說：「請你吃早餐！」</text>

          <rect x="65" y="665" width="510" height="150" rx="24" fill="#EFF6FF" stroke="#3B82F6" stroke-width="4"/>
          <text x="320" y="720" font-size="28" font-weight="900" fill="#1D4ED8" text-anchor="middle" font-family="Microsoft JhengHei">💬 禮貌小語練習：</text>
          <text x="320" y="772" font-size="28" font-weight="900" fill="#1E293B" text-anchor="middle" font-family="Microsoft JhengHei">「老闆，我要點＿＿！」／「謝謝招待！」</text>
        </svg>`;
      } else {
        return renderCardBackSVG({
          badgeColor: "#059669",
          badgeText: "玩法 3：抽牌請好朋友吃早餐",
          title: "🤝 好朋友早餐招待會",
          subtitle: "3–5 歲幼兒園社交口語與看圖點餐練習",
          points: [
            "1. 把所有早餐圖卡面朝上攤開在桌上當作『早餐店餐檯』",
            "2. 一位小朋友當『小老闆』，另一位當『小客人』看圖點餐",
            "3. 或是每人抽 2 張牌，送給好朋友並介紹：『我請你吃蛋餅！』",
            "4. 收到早餐的好朋友要回答：『謝謝！這個是鹹的中式早餐！』"
          ],
          footerTip: "透過角色扮演練習完整句型與分享的快樂！"
        });
      }
    }
  },
  {
    id: 36,
    code: "RULE-COVER",
    name: "【遊戲封面與說明書卡】吃早餐啦！",
    diffHint: "正面：桌遊封面卡 ↔ 反面：3-5歲幼兒園三大玩法總整理",
    category: "遊戲說明書卡",
    renderSide: (side) => {
      if (side === 'A') {
        return `
        <svg viewBox="0 0 640 890" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="640" height="890" fill="#FACC15"/>
          <rect x="22" y="22" width="596" height="846" rx="36" fill="#FEF9C3" stroke="#CA8A04" stroke-width="14"/>
          <!-- 頂部招牌遮雨棚條紋 -->
          <g>
            ${[0,1,2,3,4,5,6,7].map(i => `
              <path d="M ${36 + i*71} 36 L ${107 + i*71} 36 L ${107 + i*71} 105 C ${107 + i*71} 125, ${36 + i*71} 125, ${36 + i*71} 105 Z"
                    fill="${i % 2 === 0 ? '#DC2626' : '#FFFFFF'}" stroke="#991B1B" stroke-width="4"/>
            `).join('')}
          </g>
          <text x="320" y="185" font-size="30" font-weight="900" fill="#B45309" text-anchor="middle" font-family="Microsoft JhengHei">台灣早餐地圖桌上遊戲・幼兒園學習版</text>
          <rect x="65" y="210" width="510" height="125" rx="30" fill="#DC2626" stroke="#FFFFFF" stroke-width="8"/>
          <text x="320" y="295" font-size="76" font-weight="900" fill="#FEF08A" text-anchor="middle" font-family="Microsoft JhengHei">吃早餐啦！</text>

          <!-- 中央台灣早餐插畫拼盤 -->
          <circle cx="320" cy="510" r="155" fill="#FFFFFF" stroke="#F59E0B" stroke-width="10"/>
          <!-- 迷你蛋餅、豆漿、三明治 -->
          <rect x="215" y="475" width="95" height="65" rx="18" fill="#FEF08A" stroke="#CA8A04" stroke-width="5"/>
          <path d="M 235 505 Q 262 520 290 505" stroke="#78350F" stroke-width="8" stroke-linecap="round" fill="none"/>
          <polygon points="330,545 385,445 435,535" fill="#FDE68A" stroke="#D97706" stroke-width="5"/>
          <line x1="335" y1="532" x2="430" y2="524" stroke="#FB7185" stroke-width="8"/>
          <circle cx="320" cy="425" r="34" fill="#F59E0B"/>
          <circle cx="320" cy="425" r="14" fill="#FEF08A"/>

          <!-- 底部資訊列 -->
          <rect x="55" y="695" width="530" height="130" rx="22" fill="#FFFFFF" stroke="#EAB308" stroke-width="5"/>
          <text x="320" y="745" font-size="28" font-weight="900" fill="#1E293B" text-anchor="middle" font-family="Microsoft JhengHei">🎂 適合 3–5 歲幼兒園 ｜ 🃏 共 36 張大字注音卡</text>
          <text x="320" y="795" font-size="25" font-weight="800" fill="#B45309" text-anchor="middle" font-family="Microsoft JhengHei">標準撲克尺寸：高 8.9 cm × 寬 6.4 cm</text>
        </svg>`;
      } else {
        return renderCardBackSVG({
          badgeColor: "#CA8A04",
          badgeText: "3–5 歲幼兒園專屬教學指南",
          title: "📘 《吃早餐啦！》三大幼兒玩法",
          subtitle: "改編自《台灣早餐地圖》，最貼近在地生活課程！",
          points: [
            "玩法一【中西大分類】：把早餐圖卡攤開在桌上，看著左上角紅/藍標章，分類『哪些是中式早餐／西式早餐』！",
            "玩法二【鹹甜味覺王】：看著右上角橘/粉標章，討論並分類『哪些吃起來是鹹的（有加鹽巴）／哪些是甜的』！",
            "玩法三【請好朋友吃早餐】：抽牌請好朋友吃早餐、練習看圖點餐與分享，認識台灣各縣市特色早點！"
          ],
          footerTip: "卡牌尺寸：高 8.9 cm × 寬 6.4 cm（含 30 張早餐卡 + 6 張分類與規則卡）"
        });
      }
    }
  }
];

// 共用：渲染說明卡背面 SVG
function renderCardBackSVG({ badgeColor, badgeText, title, subtitle, points, footerTip }) {
  return `
  <svg viewBox="0 0 640 890" xmlns="http://www.w3.org/2000/svg">
    <rect x="0" y="0" width="640" height="890" fill="#FEFCE8"/>
    <rect x="22" y="22" width="596" height="846" rx="34" fill="#FFFFFF" stroke="${badgeColor}" stroke-width="12"/>
    <rect x="60" y="58" width="520" height="68" rx="18" fill="${badgeColor}"/>
    <text x="320" y="103" font-size="28" font-weight="900" fill="#FFFFFF" text-anchor="middle" font-family="Microsoft JhengHei">${badgeText}</text>

    <text x="320" y="185" font-size="38" font-weight="900" fill="#1E293B" text-anchor="middle" font-family="Microsoft JhengHei">${title}</text>
    <text x="320" y="228" font-size="22" font-weight="700" fill="#64748B" text-anchor="middle" font-family="Microsoft JhengHei">${subtitle}</text>
    <line x1="70" y1="255" x2="570" y2="255" stroke="#E2E8F0" stroke-width="4"/>

    <foreignObject x="62" y="275" width="516" height="455">
      <div xmlns="http://www.w3.org/1999/xhtml" style="font-family:'Microsoft JhengHei','PingFang TC',sans-serif;color:#1E293B;font-size:23px;line-height:1.55;font-weight:700;">
        ${points.map(p => `<div style="margin-bottom:16px;background:#F8FAFC;padding:12px 16px;border-radius:14px;border-left:8px solid ${badgeColor};">${p}</div>`).join('')}
      </div>
    </foreignObject>

    <rect x="55" y="750" width="530" height="82" rx="18" fill="#FEF3C7" stroke="#F59E0B" stroke-width="3"/>
    <text x="320" y="800" font-size="22" font-weight="900" fill="#92400E" text-anchor="middle" font-family="Microsoft JhengHei">💡 ${footerTip}</text>
  </svg>`;
}

// ==========================================
// 渲染每張早餐卡的正面 (A面：看圖分類與點餐圖卡) 與 反面 (B面：營養知識與幼兒問答卡)
// ==========================================
function renderBreakfastCardSVG(card, side) {
  const isCN = card.styleCode === 'CN';
  const isSalty = card.tasteCode === 'SALTY';

  const styleBg = isCN ? '#DC2626' : '#2563EB';
  const styleLightBg = isCN ? '#FEF2F2' : '#EFF6FF';
  const styleBorder = isCN ? '#EF4444' : '#3B82F6';
  const styleLabel = isCN ? '🥢 中式早餐' : '🍴 西式早餐';

  const tasteBg = isSalty ? '#D97706' : '#DB2777';
  const tasteLightBg = isSalty ? '#FFFBEB' : '#FDF2F8';
  const tasteLabel = isSalty ? '🧂 鹹的 (有加鹽)' : '🍯 甜的 (香甜)';

  const numStr = String(card.id).padStart(2, '0');

  if (side === 'A') {
    // 正面：專為 3-5 歲幼兒設計的超大插畫 + 左上中西分類標章 + 右上鹹甜標章 + 底部大字與注音 + 點餐愛心
    return `
    <svg viewBox="0 0 640 890" xmlns="http://www.w3.org/2000/svg">
      <!-- 背景與分類色外框 -->
      <rect x="0" y="0" width="640" height="890" fill="${styleLightBg}"/>
      <rect x="18" y="18" width="604" height="854" rx="34" fill="#FFFFFF" stroke="${styleBorder}" stroke-width="12"/>

      <!-- 頂部雙分類大標章列 (讓3-5歲幼兒一眼看圖顏色分類) -->
      <!-- 左上：中式 / 西式 -->
      <rect x="38" y="40" width="268" height="76" rx="22" fill="${styleBg}"/>
      <text x="172" y="90" font-size="36" font-weight="900" fill="#FFFFFF" text-anchor="middle" font-family="Microsoft JhengHei">${styleLabel}</text>

      <!-- 右上：鹹的 / 甜的 -->
      <rect x="324" y="40" width="278" height="76" rx="22" fill="${tasteBg}"/>
      <text x="463" y="89" font-size="32" font-weight="900" fill="#FFFFFF" text-anchor="middle" font-family="Microsoft JhengHei">${tasteLabel}</text>

      <!-- 卡號與產地小膠囊 -->
      <rect x="42" y="132" width="110" height="44" rx="14" fill="#1E293B"/>
      <text x="97" y="162" font-size="25" font-weight="900" fill="#FACC15" text-anchor="middle" font-family="Microsoft JhengHei">#${numStr}</text>

      <rect x="165" y="132" width="245" height="44" rx="14" fill="#F1F5F9" stroke="#CBD5E1" stroke-width="2"/>
      <text x="287" y="162" font-size="23" font-weight="800" fill="#475569" text-anchor="middle" font-family="Microsoft JhengHei">📍 ${card.origin}</text>

      <!-- 點餐價目愛心 (讓幼兒玩點餐遊戲數一數) -->
      <rect x="422" y="132" width="176" height="44" rx="14" fill="#FEF3C7" stroke="#F59E0B" stroke-width="2"/>
      <text x="510" y="162" font-size="24" font-weight="900" fill="#B45309" text-anchor="middle" font-family="Microsoft JhengHei">${'❤️'.repeat(card.priceStars)} 點餐</text>

      <!-- 中央餐桌背景區 -->
      <rect x="42" y="192" width="556" height="425" rx="28" fill="${tasteLightBg}" stroke="#E2E8F0" stroke-width="4"/>

      <!-- 食物主插畫 -->
      ${card.renderFoodSVG()}

      <!-- 底部大字名稱與注音區 -->
      <rect x="40" y="635" width="560" height="145" rx="24" fill="#FEFCE8" stroke="#FACC15" stroke-width="6"/>
      <text x="320" y="680" font-size="23" font-weight="800" fill="#B45309" text-anchor="middle" letter-spacing="1" font-family="Microsoft JhengHei">${card.bopomofo}</text>
      <text x="320" y="748" font-size="50" font-weight="900" fill="#1E293B" text-anchor="middle" font-family="Microsoft JhengHei">${card.name}</text>

      <!-- 最下方幼兒互動問題提示條 -->
      <rect x="40" y="794" width="560" height="54" rx="14" fill="${styleBg}" opacity="0.92"/>
      <text x="320" y="830" font-size="22" font-weight="800" fill="#FFFFFF" text-anchor="middle" font-family="Microsoft JhengHei">💬 點餐說說看：「請你吃${card.name}！」</text>
    </svg>`;
  } else {
    // 反面：台灣早餐地圖知識背卡 + 3-5歲問答提示 + 分類核對答案
    return `
    <svg viewBox="0 0 640 890" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="640" height="890" fill="#FEF9C3"/>
      <rect x="20" y="20" width="600" height="850" rx="34" fill="#FFFFFF" stroke="#CA8A04" stroke-width="12"/>

      <!-- 頂部台灣早餐地圖橫幅 -->
      <rect x="44" y="45" width="552" height="82" rx="20" fill="#F59E0B"/>
      <text x="320" y="99" font-size="36" font-weight="900" fill="#FFFFFF" text-anchor="middle" font-family="Microsoft JhengHei">🗺️ 台灣早餐地圖・小百科 #${numStr}</text>

      <!-- 餐點名稱與迷你圖示 -->
      <text x="320" y="185" font-size="44" font-weight="900" fill="#1E293B" text-anchor="middle" font-family="Microsoft JhengHei">${card.name}</text>
      <text x="320" y="224" font-size="22" font-weight="800" fill="#92400E" text-anchor="middle" font-family="Microsoft JhengHei">${card.bopomofo}</text>

      <!-- 分類解答雙標籤 -->
      <rect x="65" y="248" width="245" height="66" rx="18" fill="${styleBg}"/>
      <text x="187" y="292" font-size="31" font-weight="900" fill="#FFFFFF" text-anchor="middle" font-family="Microsoft JhengHei">${styleLabel}</text>

      <rect x="330" y="248" width="245" height="66" rx="18" fill="${tasteBg}"/>
      <text x="452" y="292" font-size="28" font-weight="900" fill="#FFFFFF" text-anchor="middle" font-family="Microsoft JhengHei">${tasteLabel}</text>

      <!-- 食材與特色標籤 -->
      <g transform="translate(65, 332)">
        ${card.tags.map((t, idx) => `
          <g transform="translate(${idx * 130}, 0)">
            <rect x="0" y="0" width="120" height="44" rx="12" fill="#FEF3C7" stroke="#F59E0B" stroke-width="3"/>
            <text x="60" y="30" font-size="22" font-weight="800" fill="#92400E" text-anchor="middle" font-family="Microsoft JhengHei">${t}</text>
          </g>
        `).join('')}
      </g>

      <!-- 故事與幼兒互動問答框 -->
      <foreignObject x="55" y="395" width="530" height="430">
        <div xmlns="http://www.w3.org/1999/xhtml" style="font-family:'Microsoft JhengHei','PingFang TC',sans-serif;color:#1E293B;">
          <div style="background:#FFFBEB;border:4px solid #F59E0B;border-radius:20px;padding:16px 20px;margin-bottom:16px;">
            <div style="font-size:24px;font-weight:900;color:#B45309;margin-bottom:6px;">🍳 美味早餐小故事</div>
            <div style="font-size:22px;line-height:1.5;font-weight:700;color:#334155;">${card.story}</div>
          </div>

          <div style="background:#EFF6FF;border:4px solid #3B82F6;border-radius:20px;padding:16px 20px;margin-bottom:16px;">
            <div style="font-size:24px;font-weight:900;color:#1D4ED8;margin-bottom:6px;">🙋 3–5 歲幼兒園互動問答</div>
            <div style="font-size:22px;line-height:1.5;font-weight:800;color:#1E3A8A;">${card.kidQuestion}</div>
          </div>

          <div style="background:#F0FDF4;border:3px solid #22C55E;border-radius:16px;padding:10px 18px;font-size:20px;font-weight:800;color:#166534;">
            💡 老師／爸媽小叮嚀：${card.tip}
          </div>
        </div>
      </foreignObject>
    </svg>`;
  }
}

// 整合全部 36 張卡牌 (30 張早餐卡 + 6 張幼兒分類/點餐/說明書卡)
const ALL_BREAKFAST_ITEMS = [
  ...BREAKFAST_CARDS_DATA.map(c => ({
    id: c.id,
    name: c.name,
    category: `${c.style}｜${c.taste}`,
    styleCode: c.styleCode,
    tasteCode: c.tasteCode,
    origin: c.origin,
    diffHint: `${c.style}・${c.taste}（${c.origin}）`,
    renderSVG: (side) => renderBreakfastCardSVG(c, side)
  })),
  ...SPECIAL_CARDS_DATA.map(s => ({
    id: s.id,
    name: s.name,
    category: s.category,
    styleCode: 'SPECIAL',
    tasteCode: 'SPECIAL',
    origin: '幼兒園教學配件',
    diffHint: s.diffHint,
    renderSVG: (side) => s.renderSide(side)
  }))
];
