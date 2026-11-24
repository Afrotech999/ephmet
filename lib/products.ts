import type { Locale } from "./i18n";
import type { Dict } from "./dict";

export type L = Record<Locale, string>;
export type LineId = "flat" | "long" | "bitumen" | "trucks";
export type GlyphKind =
  | "coil"
  | "plate"
  | "chequer"
  | "can"
  | "billet"
  | "rebar"
  | "wirecoil"
  | "mesh"
  | "ibeam"
  | "bars"
  | "hollow"
  | "rail"
  | "drum"
  | "dump"
  | "cargo";

export type Spec = { label: keyof Dict["spec"]; value: string | L };

export type Product = {
  slug: string;
  line: LineId;
  glyph: GlyphKind;
  /** Base path of an optimized photo in /public, without "-640.webp". */
  photo?: string;
  /** "contain" for cut-out product shots on white, shown whole instead of cropped. */
  photoFit?: "cover" | "contain";
  unit: "t" | "units";
  /** Language-neutral key specification shown in lists. */
  key: string;
  name: L;
  text: L;
  specs: Spec[];
};

export const lineOrder: LineId[] = ["flat", "long", "bitumen", "trucks"];

const drumPacking: L = {
  en: "New steel drums (150–180 kg), jumbo bags or bulk",
  zh: "新钢桶（150–180 公斤）、吨袋或散装",
  fr: "Fûts acier neufs (150–180 kg), big bags ou vrac",
  ar: "براميل صلب جديدة (150–180 كغ) أو أكياس جامبو أو سائب",
};
const steering: L = {
  en: "Left- or right-hand drive",
  zh: "左舵或右舵",
  fr: "Conduite à gauche ou à droite",
  ar: "مقود يسار أو يمين",
};

export const products: Product[] = [
  {
    slug: "hot-rolled-coils-sheets",
    line: "flat",
    glyph: "coil",
    photo: "/img/products/hot-rolled",
    unit: "t",
    key: "1.2–25 mm × 1000–2000 mm · SS400 · S235JR",
    name: {
      en: "Hot rolled coils & sheets",
      zh: "热轧卷板",
      fr: "Bobines et tôles laminées à chaud",
      ar: "لفائف وألواح مدرفلة على الساخن",
    },
    text: {
      en: "General-purpose hot rolled steel for structures, pipes, tanks, machinery and further processing.",
      zh: "通用热轧钢材，用于结构件、钢管、储罐、机械及再加工。",
      fr: "Acier laminé à chaud d'usage général pour structures, tubes, réservoirs, machines et transformation.",
      ar: "صلب مدرفل على الساخن متعدد الاستخدامات للهياكل والأنابيب والخزانات والآلات وإعادة التصنيع.",
    },
    specs: [
      { label: "thickness", value: "1.2–25 mm" },
      { label: "width", value: "1000–2000 mm" },
      { label: "grades", value: "SS400, Q235B, Q355B, S235JR, S355JR, A36" },
      { label: "standards", value: "JIS G3101, GB/T 700, EN 10025-2, ASTM A36" },
      { label: "coilWeight", value: "15–25 t" },
    ],
  },
  {
    slug: "hot-rolled-pickled-oiled",
    line: "flat",
    glyph: "coil",
    unit: "t",
    key: "1.5–6 mm × 900–1650 mm · SPHC · SAPH440",
    name: {
      en: "Hot rolled pickled & oiled",
      zh: "热轧酸洗涂油板卷",
      fr: "Tôles laminées à chaud décapées huilées",
      ar: "ألواح مدرفلة على الساخن مخللة ومزيتة",
    },
    text: {
      en: "Hot rolled steel with the mill scale removed and an oil film, ready for pressing, bending and painting. Used for auto parts, wheels and appliances.",
      zh: "去除氧化铁皮并涂油的热轧钢板，可直接冲压、折弯和涂装，用于汽车零件、车轮和家电。",
      fr: "Acier laminé à chaud débarrassé de sa calamine et huilé, prêt pour l'emboutissage, le pliage et la peinture. Pour pièces auto, jantes et électroménager.",
      ar: "صلب مدرفل على الساخن أُزيلت قشرته وغُطّي بطبقة زيت، جاهز للكبس والثني والطلاء. يُستخدم في قطع السيارات والعجلات والأجهزة المنزلية.",
    },
    specs: [
      { label: "thickness", value: "1.5–6 mm" },
      { label: "width", value: "900–1650 mm" },
      { label: "grades", value: "SPHC, SAPH440, Q235B, S235JR" },
      { label: "standards", value: "JIS G3131, JIS G3113, EN 10025-2" },
      {
        label: "surface",
        value: { en: "Pickled and oiled", zh: "酸洗涂油", fr: "Décapé huilé", ar: "مخلل ومزيت" },
      },
    ],
  },
  {
    slug: "hot-dip-galvanized-coils-sheets",
    line: "flat",
    glyph: "coil",
    photo: "/img/products/galvanized",
    unit: "t",
    key: "0.12–4.0 mm · DX51D+Z · Z40–Z275",
    name: {
      en: "Hot dip galvanized coils & sheets",
      zh: "热镀锌卷板",
      fr: "Bobines et tôles galvanisées à chaud",
      ar: "لفائف وألواح مجلفنة بالغمس الساخن",
    },
    text: {
      en: "Zinc-coated steel that resists rust. Used for roofing, cladding, ducts, doors and as base metal for pre-painted sheet.",
      zh: "镀锌防锈钢板，用于屋面、墙板、风管、门以及彩涂板基板。",
      fr: "Acier revêtu de zinc qui résiste à la rouille. Pour couvertures, bardages, gaines, portes et comme support de tôle prélaquée.",
      ar: "صلب مطلي بالزنك يقاوم الصدأ. يُستخدم في الأسقف والتكسيات ومجاري الهواء والأبواب وكمعدن أساسي للألواح المطلية.",
    },
    specs: [
      { label: "thickness", value: "0.12–4.0 mm" },
      { label: "width", value: "600–1500 mm" },
      { label: "grades", value: "DX51D+Z, SGCC, SGHC" },
      { label: "coating", value: "Z40–Z275 g/m²" },
      { label: "standards", value: "EN 10346, JIS G3302, ASTM A653" },
    ],
  },
  {
    slug: "cold-rolled-coils-sheets",
    line: "flat",
    glyph: "coil",
    unit: "t",
    key: "0.15–3.0 mm × 600–1500 mm · SPCC · DC01",
    name: {
      en: "Cold rolled coils & sheets",
      zh: "冷轧卷板",
      fr: "Bobines et tôles laminées à froid",
      ar: "لفائف وألواح مدرفلة على البارد",
    },
    text: {
      en: "Thin steel with a smooth surface and tight tolerances, for furniture, appliances, drums, panels and enamelware.",
      zh: "表面光洁、公差严格的薄钢板，用于家具、家电、钢桶、面板和搪瓷制品。",
      fr: "Acier mince à surface lisse et tolérances serrées, pour mobilier, électroménager, fûts, panneaux et articles émaillés.",
      ar: "صلب رقيق بسطح أملس وتفاوتات دقيقة، للأثاث والأجهزة المنزلية والبراميل والألواح والأواني المطلية بالمينا.",
    },
    specs: [
      { label: "thickness", value: "0.15–3.0 mm" },
      { label: "width", value: "600–1500 mm" },
      { label: "grades", value: "SPCC, DC01, DC03, Q195" },
      { label: "standards", value: "JIS G3141, EN 10130" },
    ],
  },
  {
    slug: "full-hard-coils",
    line: "flat",
    glyph: "coil",
    unit: "t",
    key: "0.12–2.0 mm · SPCC-1B · G550",
    name: {
      en: "Full hard coils",
      zh: "冷硬卷",
      fr: "Bobines full hard (écrouies)",
      ar: "لفائف فول هارد (مقسّاة)",
    },
    text: {
      en: "Unannealed cold rolled steel, hard and strong. Used as base metal for galvanizing and tinplate, and for corrugated roofing.",
      zh: "未退火的冷轧钢，硬度和强度高，用作镀锌板和镀锡板基板，以及瓦楞屋面板。",
      fr: "Acier laminé à froid non recuit, dur et résistant. Support pour la galvanisation et le fer-blanc, et pour les tôles ondulées.",
      ar: "صلب مدرفل على البارد غير ملدّن، صلد وقوي. يُستخدم معدناً أساسياً للجلفنة والصفيح، وللأسقف المموجة.",
    },
    specs: [
      { label: "thickness", value: "0.12–2.0 mm" },
      { label: "width", value: "600–1250 mm" },
      { label: "grades", value: "SPCC-1B, G550" },
      { label: "standards", value: "JIS G3141, ASTM A1008" },
    ],
  },
  {
    slug: "heavy-plates",
    line: "flat",
    glyph: "plate",
    photo: "/img/products/plates",
    unit: "t",
    key: "6–150 mm × 1500–3000 mm · S355J2 · A36",
    name: { en: "Heavy plates", zh: "中厚板", fr: "Tôles fortes", ar: "ألواح صلب سميكة" },
    text: {
      en: "Thick steel plate for heavy structures, bridges, tanks, ships, machinery bases and earthmoving equipment.",
      zh: "用于重型结构、桥梁、储罐、船舶、机械底座和工程机械的厚钢板。",
      fr: "Tôle épaisse pour structures lourdes, ponts, réservoirs, navires, bâtis de machines et engins de terrassement.",
      ar: "ألواح صلب سميكة للهياكل الثقيلة والجسور والخزانات والسفن وقواعد الآلات ومعدات الحفر.",
    },
    specs: [
      { label: "thickness", value: "6–150 mm" },
      { label: "width", value: "1500–3000 mm" },
      { label: "length", value: "6000–12000 mm" },
      { label: "grades", value: "S235JR, S355J2, A36, A572 Gr 50, Q355B" },
      { label: "standards", value: "EN 10025-2, ASTM A36, ASTM A572" },
    ],
  },
  {
    slug: "pre-painted-galvanized-coils",
    line: "flat",
    glyph: "coil",
    photo: "/img/products/prepainted",
    unit: "t",
    key: "0.12–1.0 mm · RAL · PE / SMP",
    name: {
      en: "Pre-painted galvanized coils (PPGI)",
      zh: "彩涂镀锌卷 (PPGI)",
      fr: "Bobines galvanisées prélaquées (PPGI)",
      ar: "لفائف مجلفنة مطلية مسبقاً (PPGI)",
    },
    text: {
      en: "Galvanized steel with a factory paint finish, used for roofing sheets, wall cladding, doors and prefabricated buildings.",
      zh: "工厂预涂漆的镀锌钢，用于屋面板、墙面板、门和装配式建筑。",
      fr: "Acier galvanisé laqué en usine, pour tôles de couverture, bardages, portes et bâtiments préfabriqués.",
      ar: "صلب مجلفن بطلاء مصنعي، يُستخدم في ألواح الأسقف وتكسيات الجدران والأبواب والمباني الجاهزة.",
    },
    specs: [
      { label: "thickness", value: "0.12–1.0 mm" },
      { label: "width", value: "600–1250 mm" },
      { label: "base", value: "DX51D+Z, SGCC" },
      {
        label: "coating",
        value: {
          en: "PE or SMP paint, RAL colours",
          zh: "PE 或 SMP 涂层，RAL 色卡颜色",
          fr: "Laque PE ou SMP, teintes RAL",
          ar: "طلاء PE أو SMP، بألوان RAL",
        },
      },
      { label: "standards", value: "EN 10169, ASTM A755" },
    ],
  },
  {
    slug: "hot-rolled-chequered-sheets",
    line: "flat",
    glyph: "chequer",
    unit: "t",
    key: "2–12 mm × 1000–1800 mm · Q235B · A36",
    name: {
      en: "Hot rolled chequered sheets",
      zh: "热轧花纹板",
      fr: "Tôles larmées laminées à chaud",
      ar: "ألواح منقوشة مدرفلة على الساخن",
    },
    text: {
      en: "Steel plate with a raised anti-slip pattern, used for floors, stairs, walkways, ramps and vehicle decks.",
      zh: "表面带凸起防滑花纹的钢板，用于地板、楼梯、走道、坡道和车厢底板。",
      fr: "Tôle à relief antidérapant pour planchers, escaliers, passerelles, rampes et planchers de véhicules.",
      ar: "ألواح صلب بنقشة بارزة مانعة للانزلاق، للأرضيات والسلالم والممرات والمنحدرات وأرضيات المركبات.",
    },
    specs: [
      { label: "thickness", value: "2–12 mm" },
      { label: "width", value: "1000–1800 mm" },
      { label: "length", value: "2000–12000 mm" },
      { label: "grades", value: "Q235B, SS400, S235JR, A36" },
      {
        label: "pattern",
        value: { en: "Teardrop or diamond", zh: "扁豆形或菱形", fr: "Larme ou losange", ar: "نقشة الدمعة أو المعين" },
      },
    ],
  },
  {
    slug: "tinplate",
    line: "flat",
    glyph: "can",
    unit: "t",
    key: "0.15–0.50 mm · T1–T5 · EN 10202",
    name: { en: "Tinplate", zh: "镀锡板（马口铁）", fr: "Fer-blanc", ar: "الصفيح المقصدر" },
    text: {
      en: "Thin steel coated with tin, used to make food and drink cans, paint cans, aerosol cans and bottle caps.",
      zh: "镀锡薄钢板，用于制造食品和饮料罐、油漆罐、气雾罐和瓶盖。",
      fr: "Acier mince étamé pour boîtes alimentaires et boissons, pots de peinture, aérosols et capsules.",
      ar: "صلب رقيق مطلي بالقصدير لصناعة علب الأغذية والمشروبات وعلب الطلاء وعبوات الرذاذ وأغطية الزجاجات.",
    },
    specs: [
      { label: "thickness", value: "0.15–0.50 mm" },
      { label: "width", value: "600–1050 mm" },
      { label: "temper", value: "T1–T5, DR8–DR9" },
      { label: "coating", value: "1.1–11.2 g/m² Sn" },
      { label: "standards", value: "ASTM A623, EN 10202, JIS G3303" },
    ],
  },
  {
    slug: "billets",
    line: "long",
    glyph: "billet",
    unit: "t",
    key: "100×100–200×200 mm · 3SP · 5SP",
    name: { en: "Billets", zh: "钢坯", fr: "Billettes", ar: "بليت الصلب" },
    text: {
      en: "Semi-finished square steel bars cast at the mill, re-rolled into rebar, wire rod and merchant bars.",
      zh: "钢厂连铸的方形半成品，可再轧制成钢筋、线材和普通型材。",
      fr: "Demi-produits carrés coulés à l'aciérie, relaminés en fers à béton, fil machine et laminés marchands.",
      ar: "قضبان صلب مربعة نصف مصنّعة تُصب في المصنع، وتُعاد درفلتها إلى حديد تسليح ووايرود وقضبان تجارية.",
    },
    specs: [
      { label: "size", value: "100×100 – 200×200 mm" },
      { label: "length", value: "6–12 m" },
      { label: "grades", value: "3SP, 5SP, Q235, Q275" },
      { label: "standards", value: "GOST 380, GB/T 700" },
    ],
  },
  {
    slug: "reinforcing-deformed-steel-bars",
    line: "long",
    glyph: "rebar",
    photo: "/img/products/rebar",
    unit: "t",
    key: "Ø 8–40 mm × 12 m · B500B · A615 Gr 60",
    name: {
      en: "Reinforcing deformed steel bars",
      zh: "螺纹钢筋",
      fr: "Fers à béton (barres crénelées)",
      ar: "حديد التسليح المضلع",
    },
    text: {
      en: "Ribbed steel bars that bond with concrete, for foundations, columns, slabs and all reinforced concrete work.",
      zh: "带肋钢筋，与混凝土牢固结合，用于基础、柱、楼板等各类钢筋混凝土工程。",
      fr: "Barres nervurées qui adhèrent au béton, pour fondations, poteaux, dalles et tous travaux en béton armé.",
      ar: "قضبان صلب مضلعة تلتحم بالخرسانة، للأساسات والأعمدة والبلاطات وكل أعمال الخرسانة المسلحة.",
    },
    specs: [
      { label: "diameter", value: "Ø 8–40 mm" },
      { label: "length", value: "12 m" },
      { label: "grades", value: "B500B, HRB400, HRB500, ASTM A615 Gr 60, BS 4449 Gr 460B" },
      { label: "standards", value: "BS 4449, ASTM A615, GB/T 1499.2" },
    ],
  },
  {
    slug: "wire-rods",
    line: "long",
    glyph: "wirecoil",
    unit: "t",
    key: "Ø 5.5–14 mm · SAE 1006 · SAE 1008",
    name: { en: "Wire rods", zh: "线材（盘条）", fr: "Fil machine", ar: "وايرود (أسلاك ملفوفة)" },
    text: {
      en: "Hot rolled steel rod in coils, drawn into wire, nails, mesh, fencing and binding wire.",
      zh: "热轧盘条，可拉拔成钢丝、钉子、钢丝网、围栏和扎丝。",
      fr: "Fil laminé à chaud en couronnes, tréfilé en fil, pointes, treillis, clôtures et fil à ligaturer.",
      ar: "قضبان صلب مدرفلة على الساخن في لفائف، تُسحب إلى أسلاك ومسامير وشبك وأسوار وأسلاك ربط.",
    },
    specs: [
      { label: "diameter", value: "Ø 5.5–14 mm" },
      { label: "coilWeight", value: "1.8–2.2 t" },
      { label: "grades", value: "SAE 1006, SAE 1008, Q195, Q235" },
      { label: "standards", value: "ASTM A510, GB/T 701" },
    ],
  },
  {
    slug: "welded-wire-mesh",
    line: "long",
    glyph: "mesh",
    unit: "t",
    key: "Ø 3–12 mm · 50×50–200×200 mm",
    name: { en: "Welded wire mesh", zh: "焊接钢筋网", fr: "Treillis soudé", ar: "شبك حديد ملحوم" },
    text: {
      en: "Steel wires welded in a grid, used to reinforce slabs, floors, walls and precast concrete.",
      zh: "钢丝焊接成网格，用于楼板、地坪、墙体和预制混凝土配筋。",
      fr: "Fils d'acier soudés en grille pour armer dalles, sols, murs et béton préfabriqué.",
      ar: "أسلاك صلب ملحومة على شكل شبكة لتسليح البلاطات والأرضيات والجدران والخرسانة سابقة الصب.",
    },
    specs: [
      { label: "wire", value: "Ø 3–12 mm" },
      { label: "aperture", value: "50×50 – 200×200 mm" },
      { label: "sheet", value: "2.4 × 6.0 m" },
      { label: "standards", value: "BS 4483, ASTM A1064" },
    ],
  },
  {
    slug: "structural-profiles",
    line: "long",
    glyph: "ibeam",
    photo: "/img/products/profiles",
    unit: "t",
    key: "IPE · HEA · UPN · L · S275JR",
    name: { en: "Structural profiles", zh: "型钢", fr: "Profilés de construction", ar: "مقاطع الصلب الإنشائية" },
    text: {
      en: "Beams, channels and angles for steel-frame buildings, warehouses, towers, bridges and supports.",
      zh: "工字钢、槽钢和角钢，用于钢结构厂房、仓库、塔架、桥梁和支架。",
      fr: "Poutrelles, profilés en U et cornières pour bâtiments à ossature métallique, entrepôts, pylônes, ponts et supports.",
      ar: "جسور ومجاري وزوايا للمباني ذات الهياكل الفولاذية والمستودعات والأبراج والجسور والدعامات.",
    },
    specs: [
      { label: "profile", value: "IPE 80–600, HEA/HEB 100–600, UPN 50–400, L 20–250 mm" },
      { label: "length", value: "6–12 m" },
      { label: "grades", value: "S235JR, S275JR, S355JR, Q235B, A36" },
      { label: "standards", value: "EN 10025-2, EN 10365, ASTM A36" },
    ],
  },
  {
    slug: "merchant-bars",
    line: "long",
    glyph: "bars",
    photo: "/img/products/merchant-bars",
    unit: "t",
    key: "▭ 12–200 × 3–30 mm · Ø 10–100 mm",
    name: {
      en: "Merchant bars (flat, round, square)",
      zh: "扁钢、圆钢与方钢",
      fr: "Laminés marchands (plats, ronds, carrés)",
      ar: "قضبان تجارية (مسطحة ومستديرة ومربعة)",
    },
    text: {
      en: "Flat, round and square bars for fabrication, frames, brackets, gates, shafts and general engineering.",
      zh: "扁钢、圆钢和方钢，用于钢结构加工、框架、支架、大门、轴类和一般机械制造。",
      fr: "Plats, ronds et carrés pour la fabrication, les cadres, consoles, portails, arbres et la mécanique générale.",
      ar: "قضبان مسطحة ومستديرة ومربعة للتصنيع والإطارات والكتائف والبوابات والأعمدة والهندسة العامة.",
    },
    specs: [
      { label: "size", value: "▭ 12–200 × 3–30 mm · Ø 10–100 mm · □ 10–50 mm" },
      { label: "length", value: "6–12 m" },
      { label: "grades", value: "S235JR, S275JR, Q235B, A36" },
      { label: "standards", value: "EN 10058, EN 10060, EN 10059" },
    ],
  },
  {
    slug: "hollow-sections",
    line: "long",
    glyph: "hollow",
    photo: "/img/products/hollow-sections",
    photoFit: "contain",
    unit: "t",
    key: "□ 20–400 mm · t 1.2–16 mm · S355J2H",
    name: {
      en: "Hollow sections (SHS, RHS, CHS)",
      zh: "方管、矩形管与圆管",
      fr: "Profilés creux (carrés, rectangulaires, ronds)",
      ar: "المقاطع المجوفة (مربعة ومستطيلة ودائرية)",
    },
    text: {
      en: "Square, rectangular and round tubes for structures, trusses, columns, scaffolding and furniture.",
      zh: "方管、矩形管和圆管，用于结构、桁架、立柱、脚手架和家具。",
      fr: "Tubes carrés, rectangulaires et ronds pour structures, fermes, poteaux, échafaudages et mobilier.",
      ar: "أنابيب مربعة ومستطيلة ودائرية للهياكل والجملونات والأعمدة والسقالات والأثاث.",
    },
    specs: [
      { label: "size", value: "□ 20×20 – 400×400 mm · ▭ 40×20 – 500×300 mm · Ø 21–508 mm" },
      { label: "wall", value: "1.2–16 mm" },
      { label: "length", value: "6–12 m" },
      { label: "grades", value: "S235JRH, S355J2H, Q235B, ASTM A500 Gr B" },
      { label: "standards", value: "EN 10219, EN 10210, ASTM A500" },
    ],
  },
  {
    slug: "crane-rails",
    line: "long",
    glyph: "rail",
    unit: "t",
    key: "A45–A120 · QU70–QU120 · DIN 536",
    name: { en: "Crane rails", zh: "起重机钢轨", fr: "Rails de pont roulant", ar: "قضبان الرافعات" },
    text: {
      en: "Heavy rails for overhead cranes, gantry cranes and port equipment.",
      zh: "用于桥式起重机、门式起重机和港口设备的重型钢轨。",
      fr: "Rails lourds pour ponts roulants, portiques et équipements portuaires.",
      ar: "قضبان ثقيلة للرافعات العلوية والرافعات الجسرية ومعدات الموانئ.",
    },
    specs: [
      { label: "profile", value: "A45, A55, A65, A75, A100, A120 · QU70, QU80, QU100, QU120" },
      { label: "length", value: "12 m" },
      { label: "standards", value: "DIN 536, YB/T 5055" },
    ],
  },
  {
    slug: "road-grade-bitumen",
    line: "bitumen",
    glyph: "drum",
    photo: "/img/products/bitumen-vg",
    photoFit: "contain",
    unit: "t",
    key: "VG-10 · VG-30 · VG-40",
    name: {
      en: "Road grade bitumen (viscosity grade)",
      zh: "道路沥青（粘度分级）",
      fr: "Bitume routier (grade de viscosité)",
      ar: "بيتومين الطرق (درجات اللزوجة)",
    },
    text: {
      en: "Bitumen graded by viscosity, used in asphalt for road construction and resurfacing.",
      zh: "按粘度分级的沥青，用于道路建设和路面翻新的沥青混合料。",
      fr: "Bitume classé par viscosité, utilisé dans les enrobés pour la construction et la réfection des routes.",
      ar: "بيتومين مصنف حسب اللزوجة، يُستخدم في الخلطات الأسفلتية لإنشاء الطرق وإعادة رصفها.",
    },
    specs: [
      { label: "grades", value: "VG-10, VG-30, VG-40" },
      { label: "standards", value: "IS 73, ASTM D3381" },
      { label: "packing", value: drumPacking },
    ],
  },
  {
    slug: "penetration-grade-bitumen",
    line: "bitumen",
    glyph: "drum",
    photo: "/img/products/bitumen-pen",
    photoFit: "contain",
    unit: "t",
    key: "40/50 · 60/70 · 80/100",
    name: {
      en: "Penetration grade bitumen",
      zh: "针入度沥青",
      fr: "Bitume de grade de pénétration",
      ar: "بيتومين درجات الاختراق",
    },
    text: {
      en: "Bitumen graded by penetration, used in road asphalt, waterproofing and industrial applications.",
      zh: "按针入度分级的沥青，用于道路沥青、防水和工业用途。",
      fr: "Bitume classé par pénétrabilité, pour enrobés routiers, étanchéité et usages industriels.",
      ar: "بيتومين مصنف حسب الاختراق، للأسفلت والعزل المائي والاستخدامات الصناعية.",
    },
    specs: [
      { label: "grades", value: "40/50, 60/70, 80/100, 85/100" },
      { label: "standards", value: "ASTM D946, EN 12591" },
      { label: "packing", value: drumPacking },
    ],
  },
  {
    slug: "sinotruk-howo-dump-truck",
    line: "trucks",
    glyph: "dump",
    photo: "/img/products/dump-truck",
    photoFit: "contain",
    unit: "units",
    key: "6×4 · 8×4 · 336–430 hp",
    name: {
      en: "Sinotruk Howo dump truck",
      zh: "中国重汽豪沃自卸车",
      fr: "Camion benne Sinotruk Howo",
      ar: "شاحنة قلابة سينوتراك هووو",
    },
    text: {
      en: "Heavy-duty Sinotruk Howo tipper for construction sites, quarries and mines.",
      zh: "中国重汽豪沃重型自卸车，适用于工地、采石场和矿山。",
      fr: "Benne Sinotruk Howo robuste pour chantiers, carrières et mines.",
      ar: "شاحنة قلابة سينوتراك هووو للأعمال الشاقة في مواقع البناء والمحاجر والمناجم.",
    },
    specs: [
      { label: "drive", value: "6×4, 8×4" },
      { label: "engine", value: "336–430 hp" },
      {
        label: "body",
        value: { en: "Dump body 16–30 m³", zh: "自卸车厢 16–30 立方米", fr: "Benne 16–30 m³", ar: "صندوق قلاب 16–30 م³" },
      },
      { label: "payload", value: "25–40 t" },
      { label: "steering", value: steering },
    ],
  },
  {
    slug: "sinotruk-howo-cargo-truck",
    line: "trucks",
    glyph: "cargo",
    photo: "/img/products/cargo-truck",
    photoFit: "contain",
    unit: "units",
    key: "6×4 · 8×4 · 7.6–9.6 m",
    name: {
      en: "Sinotruk Howo cargo truck",
      zh: "中国重汽豪沃载货车",
      fr: "Camion plateau Sinotruk Howo",
      ar: "شاحنة بضائع سينوتراك هووو",
    },
    text: {
      en: "Sinotruk Howo truck with a cargo body, for long-distance freight and construction material transport.",
      zh: "带货厢的中国重汽豪沃卡车，用于长途货运和建材运输。",
      fr: "Camion Sinotruk Howo à plateau ridelles, pour le fret longue distance et le transport de matériaux.",
      ar: "شاحنة سينوتراك هووو بصندوق بضائع، للنقل لمسافات طويلة ونقل مواد البناء.",
    },
    specs: [
      { label: "drive", value: "6×4, 8×4" },
      { label: "engine", value: "336–430 hp" },
      {
        label: "body",
        value: {
          en: "Cargo body 7.6–9.6 m with side boards",
          zh: "栏板货厢 7.6–9.6 米",
          fr: "Plateau ridelles 7,6–9,6 m",
          ar: "صندوق بضائع بجوانب 7.6–9.6 م",
        },
      },
      { label: "payload", value: "20–40 t" },
      { label: "steering", value: steering },
    ],
  },
];

export const popularSlugs = [
  "hot-rolled-coils-sheets",
  "reinforcing-deformed-steel-bars",
  "hot-dip-galvanized-coils-sheets",
  "structural-profiles",
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function productsByLine(line: LineId): Product[] {
  return products.filter((p) => p.line === line);
}

export function specValue(value: string | L, locale: Locale): string {
  return typeof value === "string" ? value : value[locale];
}

/** Line cover: a real photo where we have one, otherwise a drawn glyph. */
export const lineCover: Record<LineId, { photo?: string; fit?: "cover" | "contain"; glyph: GlyphKind }> = {
  flat: { photo: "/img/gallery/photo9", glyph: "coil" },
  long: { photo: "/img/products/rebar", glyph: "rebar" },
  bitumen: { photo: "/img/products/bitumen-vg", fit: "contain", glyph: "drum" },
  trucks: { photo: "/img/products/dump-truck", fit: "contain", glyph: "dump" },
};
