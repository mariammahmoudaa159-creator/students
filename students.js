// ==========================================
// 1. هيكلة بيانات الطالب (Class & Constructor)
// ==========================================
class Student {
  constructor(id, name, grades, attendance) {
    this.id = id;
    this.name = name;
    this.grades = grades;         // [grade1, grade2, grade3]
    this.attendance = attendance; // %
  }

  // ==========================================
  // 2. دوال التحليل الأكاديمي (Methods)
  // ==========================================
  
  // دالة حساب المتوسط باستخدام reduce
  calculateAverage() {
    const total = this.grades.reduce((acc, grade) => acc + grade, 0);
    return total / this.grades.length;
  }

  // دالة التقدير بالحروف (if/else)
  getGradeLabel(avg = this.calculateAverage()) {
    if (avg >= 90) return 'A';
    if (avg >= 80) return 'B';
    if (avg >= 70) return 'C';
    if (avg >= 60) return 'D';
    if (avg >= 50) return 'E';
    return 'F';
  }

  // دالة النتيجة النهائية (&&) -> "ناجح" أو "يحتاج مراجعة"
  getFinalStatus(avg = this.calculateAverage()) {
    if (avg >= 50 && this.attendance >= 75) {
      return 'ناجح';
    } else {
      return 'يحتاج مراجعة';
    }
  }
}

// ==========================================
// 3. نظام تشغيل الجامعة (Objects Array)
// ==========================================
const studentsList = [
  new Student(101, "أحمد محمود", [85, 90, 88], 90), // ممتاز
  new Student(102, "سارة علي", [42, 45, 48], 80),    // متعثرة (متوسط 45)
  new Student(103, "عمر خالد", [40, 41, 42], 70),    // متعثر (متوسط 41)
  new Student(104, "مي محمد", [60, 65, 58], 60)      // يحتاج مراجعة
];

// ==========================================
// 4. لجنة الرأفة (Array Methods)
// ==========================================

// الاستخراج: متوسطات بين 40 و 49 (filter)
const strugglingStudents = studentsList.filter(student => {
  const avg = student.calculateAverage();
  return avg >= 40 && avg <= 49;
});

// المعالجة: إضافة 5 درجات رأفة للمتوسط (map)
const boostedAverages = strugglingStudents.map(student => {
  return student.calculateAverage() + 5;
});

// التحليل: جمع المتوسطات الجديدة (reduce)
const totalBoostedAverage = boostedAverages.reduce((acc, avg) => acc + avg, 0);

// متوسط الرأفة: المتوسط العام مع حماية (Division by zero)
const strugglingCount = strugglingStudents.length;
const finalStrugglingAverage = strugglingCount > 0 ? (totalBoostedAverage / strugglingCount) : 0;

// ==========================================
// 5. المخرجات (Console Logging)
// ==========================================

console.log("==========================================");
console.log("📋 تقارير الطلاب الشاملة (المصفوفة الرئيسية):");
console.log("==========================================");

studentsList.forEach(student => {
  const avg = student.calculateAverage();
  const grade = student.getGradeLabel(avg);
  const status = student.getFinalStatus(avg);

  console.log(`- الطالب: ${student.name} (رقم الجلوس: ${student.id})`);
  console.log(`  * المتوسط: ${avg.toFixed(2)}`);
  console.log(`  * التقدير: ${grade}`);
  console.log(`  * النتيجة: ${status}`);
  console.log("------------------------------------------");
});

console.log("\n==========================================");
console.log("⚖️ نتائج لجنة الرأفة للطلاب المتعثرين:");
console.log("==========================================");
console.log("قائمة الطلاب الذين شملتهم الرأفة:");
console.log(strugglingStudents);
console.log("\nالمتوسطات الجديدة للمتعثرين بعد التعديل:");
console.log(boostedAverages);
console.log(`\nالمتوسط العام للمتعثرين بعد الرأفة: ${finalStrugglingAverage.toFixed(2)}`);
console.log("==========================================");