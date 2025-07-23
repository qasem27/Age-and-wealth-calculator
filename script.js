document.getElementById('ageForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // الحصول على تاريخ الميلاد من المدخلات
    const birthDate = new Date(document.getElementById('birthDate').value);
    const today = new Date();

    // حساب الفرق بين التواريخ
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    // تصحيح الأشهر والسنوات
    if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate(); // عدد الأيام في الشهر الحالي
    }
    if (months < 0) {
        years--;
        months += 12;
    }

    // تحديد الرسالة المناسبة بناءً على العمر
    let ageMessage;
    if (years < 18) {
        ageMessage = "أنت قاصر";
    } else if (years >= 18 && years <= 30) {
        ageMessage = "أنتم الجيل الأعظم";
    } else {
        ageMessage = "أنتم حقاً أصبحتم في عمر الحكمة";
    }

    // عرض نتيجة العمر
    const ageResultDiv = document.getElementById('ageResult');
    ageResultDiv.innerHTML = `عمرك هو: ${years} سنة و ${months} شهر و ${days} يوم<br>${ageMessage}`;

    // إظهار زر إعادة الحساب
    document.getElementById('resetButton').style.display = 'inline-block';
});

document.getElementById('wealthForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // الحصول على الثروة من المدخلات
    const wealth = parseFloat(document.getElementById('wealth').value);
    const birthDate = new Date(document.getElementById('birthDate').value);
    const today = new Date();

    // حساب الفرق بين التواريخ
    let years = today.getFullYear() - birthDate.getFullYear();

    // تحديد الرسالة المناسبة بناءً على العمر والثروة
    let wealthMessage;
    if (years < 15) {
        if (wealth > 150000) {
            wealthMessage = "أنت ولدت وملعقة ذهب في فمك؟";
        } else if (wealth >= 20000) {
            wealthMessage = "أوووه لا بأس بثروتك";
        } else {
            wealthMessage = "أنت تستطيع أن تجمع ثروة أكبر، وإذا جمعتها لا تنساني هيهيهي";
        }
    } else if (years >= 15 && years <= 30) {
        if (wealth >= 450000) {
            wealthMessage = "لا تريدون عاملة في منزلكم؟ هيهيهيهي";
        } else if (wealth >= 150000) {
            wealthMessage = "اشترِ كمورة أو أفالون ولا راح تندم";
        } else {
            wealthMessage = "إذا أنت موظف براتب عادي همممم لكنني أحبك لا بأس";
        }
    } else {
        if (wealth > 750000) {
            wealthMessage = "أنت مستثمر أم مدخر؟ هممم إنه مبلغ مريح تستطيع شراء بيت مريح وسيارة جميلة وأنت مرتاح";
        } else {
            wealthMessage = "لم تستثمر ولم تدخر أليس كذلك؟ لكن لا بأس بقي لديك الكثير لتفعله لا توقف القتال استمر بالمعركة";
        }
    }

    // عرض نتيجة الثروة
    const wealthResultDiv = document.getElementById('wealthResult');
    wealthResultDiv.innerHTML = wealthMessage;

    // إظهار زر إعادة الحساب
    document.getElementById('resetButton').style.display = 'inline-block';
});

document.getElementById('resetButton').addEventListener('click', function() {
    // إعادة تعيين النماذج
    document.getElementById('ageForm').reset();
    document.getElementById('wealthForm').reset();

    // إخفاء النتيجة وزر إعادة الحساب
    document.getElementById('ageResult').textContent = '';
    document.getElementById('wealthResult').textContent = '';
    document.getElementById('resetButton').style.display = 'none';
});
