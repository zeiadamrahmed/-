//html هنا بيعرف متغير ثابت وبيجيبه من ال
// اللي هوا شاشه الاله الحاسبه
const display = document.getElementById("input");
// برضو بيعرف متغير ثابت بس ده بتاع السجلات
const historyDiv = document.getElementById("history");
// بيعرف متغير قابل للتغير نوعه بولين واخد قيمه مبدائيه خطا
let isResultDisplayed = false;
// هنا بقا الداله ال بتاخد برامتر او قيم
function appendValue(value) {
  // الشرط ده بيتحقق القيمه ال طالعه ناتج ولا رقم عادي
  if (isResultDisplayed) {
    // بيتحقق ان القيمه ال دخلت رقم م ناتج
    if (!isNaN(value) || value === ".") {
      //هنا لما بيتحقق لو لقاه ناتج بيمسحه لو ضغط علي اي رقم
      display.value = "";
    }
    //بيرجع حالتها لو المستخدم مدخلش ارقام وعايز يكمل علي الناتج
    isResultDisplayed = false;
  }
  //هنا بيكمل علي الناتج ويكمل عليه العمليه الحسابيه
  display.value += value;
}
//هنا بيمسح كل ال علي شاشه الاله الحاسبه
function clearDisplay() {
  //بيفرغ نص الشاشه خالص
  display.value = "";
  //بيرستر النتيجه
  isResultDisplayed = false;
}
//داله الناتائج
function calculate() {
  //catch يجرب ينفّذ الكود اللي جواه، ولو حصل أي خطأ برمي على
  try {
    //بيخزن الارقام ال نا بدخلها للعمليه الحسابيه
    let expression = display.value;
    //result  الجملة البرمجية/الرياضية النصية وتقييمها وبيخزن الناتج في متغير اسمه،  eval()بيستخدم دالة
    let result = eval(display.value);
    // بيعرض النتيجه علي شاشه الاله الحاسبه
    display.value = result;
    //عشان يعرف الكود إن الشاشة حالياً عارضة نتيجة true بيغير قيمة المؤشر ل
    isResultDisplayed = true;
    //بيتأكد إن كان فيه عملية مكتوبة فعلية على الشاشة ومش فاضية
    if (expression) {
      //بيضيف سطر جديد جوه عنصر الهيستوري (السجل) بنفس شكل العمليه
      //هنا بينزل سطر بعد ميحفظ العمليه
      historyDiv.innerHTML += `<div>${expression} = ${result}</div>`;
      //بيخلي السكرول (التحريك) بتاع الهيستوري ينزل تحت خالص تلقائياً عشان يظهر أحدث عملية اتعملت
      historyDiv.scrollTop = historyDiv.scrollHeight;
    }
    //هنا عشان لو المستخدم كتب حاجه غلط تطلع ايرور
  } catch (error) {
    display.value = "error";
    isResultDisplayed = true;
  }
}
//هنا بيمسح اخر حرف او رقم
function deleteLast() {
  //بيشيل اخر عنصر من النهايه يعني
  display.value = display.value.slice(0, -1);
  //هنا بيمسح ويرستر الشاشه يعني
  isResultDisplayed = false;
}
//داله اظهار واخفاء السجل
function toggleHistory() {
  //بيجيبها عن طريق ال اي دي
  const historyContainer = document.getElementById("historyContainer");
  // معناها ب اختصار لما ادوس علي السجل لو مش ظاهر يظهره والعكس
  historyContainer.classList.toggle("d-none");
}

//هنا عشان لما اكون فاتح السجل وادوس في اي مكان في الشاشه السجل يختفي
window.addEventListener("click", function (event) {
  // بيخزن عناصر السجل في متغير
  const historyContainer = document.getElementById("historyContainer");
  //بيخزن زرار السجل نفسه
  const historyBtn = document.getElementById("historyBtn");
  //هنا بيشوف السجل مفتوح ولا لأ
  // بص خلاصتهم بيشوف السجل لو مفتوح ونا ضغط في حته يتقغل بس كده
  if (historyContainer && !historyContainer.classList.contains("d-none")) {
    if (
      !historyContainer.contains(event.target) &&
      !historyBtn.contains(event.target)
    ) {
      historyContainer.classList.add("d-none");
    }
  }
});
