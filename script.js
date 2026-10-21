// KULA BEEF: language re-print + order slip

const T = {
  en: {
    "skip": "Skip to products",
    "nav-cuts": "Cuts", "nav-origin": "Origin", "nav-plant": "Standard", "nav-contact": "Contact",
    "origin-line": "Thai Wagyu · Thung Kula Rong Hai",
    "hook": "Beef from the Thung Kula cattle network in Roi Et, northeast Thailand, cut and packed in an ISO 22000 certified plant. For importers, distributors and kitchens.",
    "s-origin": "Origin", "v-origin": "Thung Kula Rong Hai, Roi Et, Thailand",
    "s-proc": "Processor", "s-std": "Standard", "v-valid": "valid to",
    "s-cuts": "Cuts", "v-cuts": "Flat iron slices · Wagyu slices · Steak · Half-dried beef",
    "cta-quote": "Request a quote", "cta-line": "Chat on LINE",
    "cuts-title": "Net weight, per pack",
    "cuts-note": "Retail prices in Thai baht. Export and wholesale prices on request.",
    "p-flatiron": "Thai Wagyu flat iron slices", "d-flatiron": "Chuck tender (ใบพาย), sliced for grill, shabu and stir-fry.",
    "p-slice": "Wagyu slices", "d-slice": "Thin marbled slices for hot pot and sukiyaki.",
    "p-steak": "Beef steak", "d-steak": "Steak-cut beef for the grill or pan.",
    "p-halfdried": "Half-dried beef", "d-halfdried": "Sun-dried Isan style (เนื้อครึ่งแดด), ready to fry.",
    "add": "Add to order", "added": "On the slip",
    "origin-title": "From dry land to premium beef",
    "origin-1": "Thung Kula Rong Hai is a plain of 2.6 million rai across northeast Thailand, about 980,000 rai of it in Roi Et. It was once known as dry and hard to farm. Families here grow rice and raise cattle, and the cattle bring in much of the income.",
    "origin-2": "The Thung Kula cattle network brings a new generation of farmers together, aiming to raise the value of the herd and the income of the families who raise it.",
    "f-plain": "Thung Kula plain", "f-roiet": "In Roi Et", "rai": "rai",
    "plant-title": "Processed to ISO 22000",
    "plant-1": "KULA BEEF is cut and packed by Nakhonphanom Beef (Thailand) Co., Ltd., whose food safety management system is registered to ISO 22000:2018 for the manufacturing and processing of meat.",
    "c-body": "Certified by", "c-no": "Certificate", "c-dates": "Valid", "c-check": "Verify",
    "cert-cap": "Tap to open the full certificate.", "room-cap": "The cutting room.",
    "order-title": "Order slip",
    "order-note": "Add packs from the list above, tell us who you are, and send the slip by email or LINE. We reply with export prices and terms.",
    "slip-empty": "Nothing on the slip yet. Use “Add to order” on a pack above.",
    "f-name": "Your name", "f-company": "Company", "f-country": "Country",
    "f-note": "Note (volumes, destination, questions)",
    "f-error": "Please add your name, and at least one pack or a note.",
    "send-email": "Send by email", "send-line": "Copy & open LINE",
    "copied": "Slip copied. Paste it into the LINE chat that just opened.",
    "copy-fail": "Could not copy automatically. Copy the slip text below and paste it into the LINE chat.", "less": "Remove one", "more": "Add one",
    "contact-title": "Export desk",
    "role": "Export Manager", "phone": "Phone", "email": "Email", "map": "On the map",
    "address": "Roi Et, Thailand 45190",
    "sister": "Same export desk, halal processed beef from Satun:",
    "slip-head": "Order slip: KULA BEEF", "slip-from": "From", "slip-items": "Packs", "slip-note": "Note",
    "subject": "Quote request: KULA BEEF"
  },
  th: {
    "skip": "ข้ามไปที่สินค้า",
    "nav-cuts": "สินค้า", "nav-origin": "ที่มา", "nav-plant": "มาตรฐาน", "nav-contact": "ติดต่อ",
    "origin-line": "ไทยวากิว · ทุ่งกุลาร้องไห้",
    "hook": "เนื้อวัวจากเครือข่ายโคเนื้อทุ่งกุลา จังหวัดร้อยเอ็ด ตัดแต่งและบรรจุในโรงงานที่ได้รับรอง ISO 22000 สำหรับผู้นำเข้า ผู้จัดจำหน่าย และร้านอาหาร",
    "s-origin": "แหล่งที่มา", "v-origin": "ทุ่งกุลาร้องไห้ ร้อยเอ็ด ประเทศไทย",
    "s-proc": "ผู้แปรรูป", "s-std": "มาตรฐาน", "v-valid": "ใช้ได้ถึง",
    "s-cuts": "สินค้า", "v-cuts": "เนื้อสไลด์ใบพาย · เนื้อสไลด์วากิว · เนื้อสเต็ก · เนื้อครึ่งแดด",
    "cta-quote": "ขอใบเสนอราคา", "cta-line": "คุยทาง LINE",
    "cuts-title": "น้ำหนักสุทธิต่อแพ็ก",
    "cuts-note": "ราคาขายปลีกเป็นบาท ราคาส่งและราคาส่งออกสอบถามได้",
    "p-flatiron": "เนื้อสไลด์ใบพาย ไทยวากิว", "d-flatiron": "ส่วนใบพาย สไลด์พร้อมย่าง ชาบู หรือผัด",
    "p-slice": "เนื้อสไลด์วากิว", "d-slice": "สไลด์บาง ลายไขมันสวย สำหรับชาบูและสุกี้ยากี้",
    "p-steak": "เนื้อสเต็ก", "d-steak": "ตัดหนาสำหรับย่างหรือทอดในกระทะ",
    "p-halfdried": "เนื้อครึ่งแดด", "d-halfdried": "เนื้อแดดเดียวแบบอีสาน พร้อมทอด",
    "add": "ใส่ใบสั่ง", "added": "อยู่ในใบสั่งแล้ว",
    "origin-title": "จากแผ่นดินแห้งแล้ง สู่เนื้อวัวชั้นเลิศ",
    "origin-1": "ทุ่งกุลาร้องไห้มีพื้นที่ 2.6 ล้านไร่ในภาคอีสาน อยู่ในจังหวัดร้อยเอ็ดกว่า 980,000 ไร่ ที่นี่เคยได้ชื่อว่าแห้งแล้งและทุรกันดาร เกษตรกรทำนาเป็นหลักและเลี้ยงวัวเป็นอาชีพรอง แต่รายได้หลักมาจากการเลี้ยงสัตว์",
    "origin-2": "เครือข่ายโคเนื้อทุ่งกุลารวมคนรุ่นใหม่ที่มีแนวคิดยกระดับและฟื้นฟูอาชีพให้มีมูลค่าสูงขึ้น เพื่อให้พี่น้องเกษตรกรมีรายได้เพิ่มขึ้น",
    "f-plain": "ทุ่งกุลาร้องไห้", "f-roiet": "ในจังหวัดร้อยเอ็ด", "rai": "ไร่",
    "plant-title": "แปรรูปตามมาตรฐาน ISO 22000",
    "plant-1": "KULA BEEF ตัดแต่งและบรรจุโดย บริษัท นครพนม บีฟ (ไทยแลนด์) จำกัด ซึ่งระบบการจัดการความปลอดภัยอาหารได้รับการรับรอง ISO 22000:2018 สำหรับการผลิตและแปรรูปเนื้อสัตว์",
    "c-body": "ผู้ให้การรับรอง", "c-no": "เลขที่ใบรับรอง", "c-dates": "ระยะเวลา", "c-check": "ตรวจสอบ",
    "cert-cap": "แตะเพื่อเปิดใบรับรองฉบับเต็ม", "room-cap": "ห้องตัดแต่งเนื้อ",
    "order-title": "ใบสั่งสินค้า",
    "order-note": "เลือกแพ็กจากรายการด้านบน กรอกชื่อ แล้วส่งใบสั่งทางอีเมลหรือ LINE เราจะตอบกลับพร้อมราคาและเงื่อนไข",
    "slip-empty": "ยังไม่มีสินค้าในใบสั่ง กด “ใส่ใบสั่ง” ที่แพ็กด้านบน",
    "f-name": "ชื่อ", "f-company": "บริษัท/ร้าน", "f-country": "ประเทศ",
    "f-note": "หมายเหตุ (จำนวน ปลายทาง คำถาม)",
    "f-error": "กรุณากรอกชื่อ และเลือกสินค้าอย่างน้อยหนึ่งแพ็กหรือเขียนหมายเหตุ",
    "send-email": "ส่งทางอีเมล", "send-line": "คัดลอกแล้วเปิด LINE",
    "copied": "คัดลอกใบสั่งแล้ว วางในแชท LINE ที่เปิดขึ้นมาได้เลย",
    "copy-fail": "คัดลอกอัตโนมัติไม่ได้ กรุณาคัดลอกข้อความใบสั่งด้านล่างแล้ววางในแชท LINE", "less": "ลดหนึ่ง", "more": "เพิ่มหนึ่ง",
    "contact-title": "ฝ่ายส่งออก",
    "role": "ผู้จัดการฝ่ายส่งออก", "phone": "โทร", "email": "อีเมล", "map": "แผนที่",
    "address": "ร้อยเอ็ด 45190",
    "sister": "ฝ่ายส่งออกเดียวกัน เนื้อแปรรูปฮาลาลจากสตูล:",
    "slip-head": "ใบสั่งสินค้า: KULA BEEF", "slip-from": "จาก", "slip-items": "สินค้า", "slip-note": "หมายเหตุ",
    "subject": "ขอใบเสนอราคา: KULA BEEF"
  },
  zh: {
    "skip": "跳到产品",
    "nav-cuts": "产品", "nav-origin": "产地", "nav-plant": "标准", "nav-contact": "联系",
    "origin-line": "泰国和牛 · 通库拉荣海",
    "hook": "来自泰国东北部黎逸府通库拉肉牛网络的牛肉，在 ISO 22000 认证工厂分割包装。面向进口商、经销商和餐厅。",
    "s-origin": "产地", "v-origin": "泰国黎逸府通库拉荣海平原",
    "s-proc": "加工商", "s-std": "标准", "v-valid": "有效期至",
    "s-cuts": "产品", "v-cuts": "板腱肉片 · 和牛肉片 · 牛排 · 半干牛肉",
    "cta-quote": "索取报价", "cta-line": "LINE 联系",
    "cuts-title": "每包净重",
    "cuts-note": "零售价以泰铢计。出口及批发价格请询价。",
    "p-flatiron": "泰国和牛板腱肉片", "d-flatiron": "板腱部位切片，适合烧烤、涮锅和炒菜。",
    "p-slice": "和牛肉片", "d-slice": "大理石纹薄切片，适合火锅和寿喜烧。",
    "p-steak": "牛排", "d-steak": "厚切牛排，适合烧烤或煎。",
    "p-halfdried": "半干牛肉", "d-halfdried": "泰国东北风味日晒牛肉，可直接油炸。",
    "add": "加入订单", "added": "已在订单中",
    "origin-title": "从干旱之地到优质牛肉",
    "origin-1": "通库拉荣海平原横跨泰国东北部，面积 260 万莱，其中约 98 万莱位于黎逸府。这里曾以干旱贫瘠著称。农户以种稻为主业、养牛为副业，但主要收入来自养牛。",
    "origin-2": "通库拉肉牛网络把新一代农户聚集起来，致力于提升牛群的价值和养牛家庭的收入。",
    "f-plain": "通库拉平原", "f-roiet": "黎逸府境内", "rai": "莱",
    "plant-title": "按 ISO 22000 加工",
    "plant-1": "KULA BEEF 由 Nakhonphanom Beef (Thailand) Co., Ltd. 分割包装，其食品安全管理体系已通过 ISO 22000:2018 认证，范围为肉类生产与加工。",
    "c-body": "认证机构", "c-no": "证书编号", "c-dates": "有效期", "c-check": "查验",
    "cert-cap": "点击查看完整证书。", "room-cap": "分割车间。",
    "order-title": "订货单",
    "order-note": "从上方选择产品，填写您的信息，然后通过电子邮件或 LINE 发送。我们会回复出口价格和条款。",
    "slip-empty": "订单为空。请点击上方产品的“加入订单”。",
    "f-name": "姓名", "f-company": "公司", "f-country": "国家",
    "f-note": "备注（数量、目的地、问题）",
    "f-error": "请填写姓名，并至少选择一个产品或填写备注。",
    "send-email": "通过邮件发送", "send-line": "复制并打开 LINE",
    "copied": "订单已复制。请粘贴到刚打开的 LINE 对话中。",
    "copy-fail": "无法自动复制。请复制下方订单内容并粘贴到 LINE 对话中。", "less": "减少一个", "more": "增加一个",
    "contact-title": "出口部",
    "role": "出口经理", "phone": "电话", "email": "电子邮件", "map": "地图",
    "address": "泰国黎逸府 45190",
    "sister": "同一出口部门，来自沙敦府的清真加工牛肉：",
    "slip-head": "订货单：KULA BEEF", "slip-from": "发件人", "slip-items": "产品", "slip-note": "备注",
    "subject": "询价：KULA BEEF"
  },
  ar: {
    "skip": "انتقل إلى المنتجات",
    "nav-cuts": "المنتجات", "nav-origin": "المنشأ", "nav-plant": "المعايير", "nav-contact": "اتصل بنا",
    "origin-line": "واغيو تايلاندي · ثونغ كولا رونغ هاي",
    "hook": "لحم بقري من شبكة ثونغ كولا لتربية الماشية في روي إت، شمال شرق تايلاند، يُقطَّع ويُعبَّأ في مصنع حاصل على شهادة ISO 22000. للمستوردين والموزعين والمطابخ.",
    "s-origin": "المنشأ", "v-origin": "ثونغ كولا رونغ هاي، روي إت، تايلاند",
    "s-proc": "جهة التصنيع", "s-std": "المعيار", "v-valid": "سارية حتى",
    "s-cuts": "القطع", "v-cuts": "شرائح فلات آيرون · شرائح واغيو · ستيك · لحم نصف مجفف",
    "cta-quote": "اطلب عرض سعر", "cta-line": "تواصل عبر LINE",
    "cuts-title": "الوزن الصافي لكل عبوة",
    "cuts-note": "أسعار التجزئة بالبات التايلاندي. أسعار التصدير والجملة عند الطلب.",
    "p-flatiron": "شرائح فلات آيرون واغيو تايلاندي", "d-flatiron": "من قطعة الكتف، مقطعة للشواء والشابو والقلي السريع.",
    "p-slice": "شرائح واغيو", "d-slice": "شرائح رقيقة مُرخّمة للهوت بوت والسوكيياكي.",
    "p-steak": "ستيك لحم بقري", "d-steak": "قطع ستيك للشواء أو المقلاة.",
    "p-halfdried": "لحم بقري نصف مجفف", "d-halfdried": "مجفف بالشمس على طريقة إيسان، جاهز للقلي.",
    "add": "أضف إلى الطلب", "added": "في قائمة الطلب",
    "origin-title": "من أرض جافة إلى لحم فاخر",
    "origin-1": "ثونغ كولا رونغ هاي سهل مساحته 2.6 مليون راي في شمال شرق تايلاند، منها نحو 980,000 راي في روي إت. عُرف قديمًا بالجفاف وصعوبة الزراعة. تزرع العائلات هنا الأرز وتربي الماشية، والماشية مصدر معظم الدخل.",
    "origin-2": "تجمع شبكة ثونغ كولا لتربية الماشية جيلًا جديدًا من المزارعين بهدف رفع قيمة القطيع ودخل العائلات التي تربيه.",
    "f-plain": "سهل ثونغ كولا", "f-roiet": "في روي إت", "rai": "راي",
    "plant-title": "مُصنَّع وفق ISO 22000",
    "plant-1": "تُقطَّع منتجات KULA BEEF وتُعبَّأ لدى شركة Nakhonphanom Beef (Thailand) Co., Ltd.، ونظام إدارة سلامة الغذاء لديها مسجل وفق ISO 22000:2018 لتصنيع اللحوم ومعالجتها.",
    "c-body": "جهة الاعتماد", "c-no": "رقم الشهادة", "c-dates": "الصلاحية", "c-check": "التحقق",
    "cert-cap": "اضغط لفتح الشهادة كاملة.", "room-cap": "غرفة التقطيع.",
    "order-title": "قسيمة الطلب",
    "order-note": "أضف العبوات من القائمة أعلاه، وأخبرنا من أنت، ثم أرسل القسيمة بالبريد الإلكتروني أو عبر LINE. سنرد بأسعار التصدير والشروط.",
    "slip-empty": "القسيمة فارغة. استخدم «أضف إلى الطلب» على إحدى العبوات أعلاه.",
    "f-name": "الاسم", "f-company": "الشركة", "f-country": "الدولة",
    "f-note": "ملاحظة (الكميات، الوجهة، الأسئلة)",
    "f-error": "يرجى كتابة اسمك، واختيار عبوة واحدة على الأقل أو كتابة ملاحظة.",
    "send-email": "أرسل بالبريد الإلكتروني", "send-line": "انسخ وافتح LINE",
    "copied": "تم نسخ القسيمة. الصقها في محادثة LINE التي فُتحت الآن.",
    "copy-fail": "تعذّر النسخ تلقائيًا. انسخ نص القسيمة أدناه والصقه في محادثة LINE.", "less": "إزالة واحدة", "more": "إضافة واحدة",
    "contact-title": "قسم التصدير",
    "role": "مديرة التصدير", "phone": "الهاتف", "email": "البريد الإلكتروني", "map": "على الخريطة",
    "address": "روي إت، تايلاند 45190",
    "sister": "قسم التصدير نفسه، لحم بقري حلال مُصنَّع من ساتون:",
    "slip-head": "قسيمة طلب: KULA BEEF", "slip-from": "من", "slip-items": "العبوات", "slip-note": "ملاحظة",
    "subject": "طلب عرض سعر: KULA BEEF"
  }
};

const LANG_ATTR = { en: "en", th: "th", zh: "zh-Hans", ar: "ar" };
const EMAIL = "ksskids@outlook.com";
const LINE_URL = "https://line.me/ti/p/smoS2zVStO";

let lang = "en";
const slip = new Map(); // id -> qty

const packs = [...document.querySelectorAll(".pack")];
const slipList = document.querySelector(".slip");
const form = document.querySelector(".slip-form");
const errorEl = form.querySelector(".form-error");
const copiedEl = form.querySelector(".copied");
const slipTextEl = form.querySelector(".slip-text");

const t = (key, l = lang) => T[l][key] ?? T.en[key];

function setLang(next, animate = true) {
  lang = next;
  const root = document.documentElement;
  root.lang = LANG_ATTR[lang];
  root.dir = lang === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const v = t(el.dataset.i18n);
    if (v) el.textContent = v;
  });
  document.querySelectorAll(".langs button").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
  packs.forEach(syncPack);
  renderSlip();

  if (animate) {
    document.body.classList.remove("reprint");
    void document.body.offsetWidth;
    document.body.classList.add("reprint");
  }
  slipTextEl.setAttribute("aria-label", t("order-title"));
  try { localStorage.setItem("kb-lang", lang); } catch (e) {}
}

function syncPack(pack) {
  const on = slip.has(pack.dataset.id);
  pack.classList.toggle("on", on);
  const btn = pack.querySelector(".add");
  btn.setAttribute("aria-pressed", String(on));
  btn.querySelector("span").textContent = on ? t("added") : t("add");
  btn.querySelector("use").setAttribute("href", on ? "#i-minus" : "#i-plus");
}

function renderSlip() {
  slipList.replaceChildren();
  for (const [id, qty] of slip) {
    const pack = packs.find((p) => p.dataset.id === id);
    const li = document.createElement("li");
    const name = t(`p-${id}`);
    li.innerHTML = `<span class="n"></span>
      <span class="qty"><button type="button" data-step="-1"><svg aria-hidden="true"><use href="#i-minus"/></svg></button><output></output><button type="button" data-step="1"><svg aria-hidden="true"><use href="#i-plus"/></svg></button></span>
      <bdi class="s"></bdi>`;
    li.querySelector(".n").textContent = name;
    li.querySelector("[data-step='-1']").setAttribute("aria-label", `${t("less")}: ${name}`);
    li.querySelector("[data-step='1']").setAttribute("aria-label", `${t("more")}: ${name}`);
    li.querySelector("output").textContent = qty;
    li.querySelector(".s").textContent = `${(qty * Number(pack.dataset.price)).toLocaleString("en")} THB`;
    li.querySelectorAll("[data-step]").forEach((b) => b.addEventListener("click", () => {
      const n = qty + Number(b.dataset.step);
      if (n <= 0) slip.delete(id); else slip.set(id, n);
      syncPack(pack);
      renderSlip();
    }));
    slipList.append(li);
  }
  if (tried) validate();
}

packs.forEach((pack) => {
  pack.querySelector(".add").addEventListener("click", () => {
    if (slip.has(pack.dataset.id)) slip.delete(pack.dataset.id);
    else slip.set(pack.dataset.id, 1);
    syncPack(pack);
    renderSlip();
  });
});

// after the first failed send, the error clears as soon as the slip becomes valid
let tried = false;
function validate() {
  const hasName = !!form.elements.name.value.trim();
  const ok = hasName && (slip.size > 0 || !!form.elements.note.value.trim());
  form.elements.name.setAttribute("aria-invalid", String(tried && !hasName));
  errorEl.hidden = ok || !tried;
  return ok;
}
form.addEventListener("input", () => { if (tried) validate(); });

function slipText(data) {
  const lines = [t("slip-head"), ""];
  const from = [data.get("name"), data.get("company"), data.get("country")].filter(Boolean).join(", ");
  lines.push(`${t("slip-from")}: ${from}`, "");
  if (slip.size) {
    lines.push(`${t("slip-items")}:`);
    for (const [id, qty] of slip) {
      const name = lang === "en" ? t(`p-${id}`) : `${t(`p-${id}`)} / ${t(`p-${id}`, "en")}`;
      lines.push(`- ${name} × ${qty}`);
    }
    lines.push("");
  }
  if (data.get("note")) lines.push(`${t("slip-note")}: ${data.get("note")}`);
  return lines.join("\n");
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  tried = true;
  copiedEl.hidden = true;
  slipTextEl.hidden = true;
  if (!validate()) {
    (form.elements.name.value.trim() ? form.elements.note : form.elements.name).focus();
    return;
  }

  const text = slipText(new FormData(form));
  if (e.submitter && e.submitter.dataset.via === "line") {
    // start the copy while this tab still has focus, then open LINE inside the click gesture, then wait
    const copying = navigator.clipboard ? navigator.clipboard.writeText(text) : Promise.reject(new Error("no clipboard"));
    window.open(LINE_URL, "_blank", "noopener");
    try {
      await copying;
      copiedEl.textContent = t("copied");
    } catch (err) {
      copiedEl.textContent = t("copy-fail");
      slipTextEl.value = text;
      slipTextEl.hidden = false;
      slipTextEl.select();
    }
    copiedEl.hidden = false;
  } else {
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(t("subject"))}&body=${encodeURIComponent(text)}`;
  }
});

document.querySelectorAll(".langs button").forEach((b) => b.addEventListener("click", () => setLang(b.dataset.lang)));

// ?lang=th|zh|ar lets a link open in the buyer's language
let saved = new URLSearchParams(location.search).get("lang");
if (!T[saved]) { try { saved = localStorage.getItem("kb-lang"); } catch (e) {} }
setLang(T[saved] ? saved : "en", false);
