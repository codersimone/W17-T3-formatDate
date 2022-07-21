function formatDate() {
    let date = new Date(2022, 6, 19, 23, 30, 0, 0);
    let lessOneSec = new Date() - date;
    if (lessOneSec < 1000) {
    return 'прямо сейчас';
    }
    let lessOneMin = Math.floor(lessOneSec / 1000);
    if (lessOneMin < 60) {
    return lessOneMin + ' сек. назад';
    }
    var lessOneHour = Math.floor(lessOneSec / 60000);
    if (lessOneHour < 60) {
    return lessOneHour + ' мин. назад';
    }
    let fullDate = date;
    fullDate = [
    '0' + fullDate.getDate(),
    '0' + (fullDate.getMonth() + 1),
    '' + fullDate.getFullYear(),
    '0' + fullDate.getHours(),
    '0' + fullDate.getMinutes()
    ];
    for (let i = 0; i < fullDate.length; i++) {
        fullDate[i] = fullDate[i].slice(-2);
    }
    return fullDate.slice(0, 3).join('.') + ' ' + fullDate.slice(3).join(':');
}
alert(formatDate());