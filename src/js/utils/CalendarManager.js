export default class CalendarManager {
  constructor(selector) {
    this.container = document.querySelector(selector);
    this.today = new Date();
    this.month = this.today.getMonth() + 1;
    this.year = this.today.getFullYear();
    this.renderCalendar()
  }
  renderCalendar(selector) {
    let weekday = new Array('Pirmadienis', 'Antradienis', 'Trečiadienis', 'Ketvirtadienis', 'Penktadienis', 'Šeštadienis', 'Sekmadienis');
    let Month = new Array('Sausis', 'Vasaris', 'Kovas', 'Balandis', 'Gegužė', 'Birželis', 'Liepa', 'Rugpjūtis', 'Rugsėjis', 'Spalis', 'Lapkritis', 'Gruodis');
    let firstWeekday = this.firstWeekdayOfMonth(this.year, this.month);
    let monthDays = this.daysInCurrentMonth(this.month);
    let MonthName = Month[this.month - 1];

    for (let i = 1; i < firstWeekday; i++) {
      // Create empty grid space
    }
    for (let i = 0; i < monthDays; i++) {
      // Render month days   
    }
  }
  daysInCurrentMonth(month) {
    let now = new Date();
    return new Date(now.getFullYear(), month, 0).getDate();
  }
  firstWeekdayOfMonth(year, month) {
    let time = new Date(year + "-" + month + "-").getDay();
    return (time <= 0) ? 7 : time;
  }
}
