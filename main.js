(function () {

        var refreshTime = function () {
            var date = new Date(),
            hours = date.getHours(),
            meridiem,
            minutes = date.getMinutes(),
            seconds = date.getSeconds(),
            weekDay= date.getDay(),
            day = date.getDate(),
            month = date.getMonth(),
            year = date.getFullYear();

            var pHours = document.getElementById('hours'),
            pMeridiem = document.getElementById('meridiem'),
            pMinutes = document.getElementById('minutes'),
            pSeconds = document.getElementById('seconds'),
            pWeekDay = document.getElementById('weekDay'),
            pDay = document.getElementById('day'),
            pMonth = document.getElementById('month'),
            pYear = document.getElementById('year');

            var week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

            pWeekDay.textContent = week[weekDay];

            pDay.textContent = day;

            var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

            pMonth.textContent = months[month];

            pYear.textContent = year;

            if (hours >= 12) {
                hours = hours - 12;
                meridiem = 'PM';
            } else {
                meridiem = 'AM';
            }

            if (hours == 0) {
                hours = 12;
            };

            pHours.textContent = hours;
            pMeridiem.textContent = meridiem;

            if(minutes < 10){ minutes = '0' + minutes};
            if(seconds < 10){seconds = '0' + seconds};
            pMinutes.textContent = minutes;
            pSeconds.textContent = seconds;


        };
    refreshTime;
    var interval = setInterval(refreshTime, 1000);
}())
