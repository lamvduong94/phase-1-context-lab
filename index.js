/* Your Code Here */
function createEmployeeRecord(ele) {
    return {
        firstName: ele[0],
        familyName: ele[1],
        title: ele[2],
        payPerHour: ele[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(arr) {
    return arr.map(data => createEmployeeRecord(data));
}

function createTimeInEvent(dateStamp) {
    const date = dateStamp.split(' ')[0];
    const hour = dateStamp.split(' ')[1];

    this.timeInEvents.push({
        type: 'TimeIn',
        hour: parseInt(hour, 10),
        date,
    })

    return this;
}

function createTimeOutEvent(dateStamp) {
    const date = dateStamp.split(' ')[0];
    const hour = dateStamp.split(' ')[1];

    this.timeOutEvents.push({
        type: 'TimeOut',
        hour: parseInt(hour, 10),
        date,
    })

    return this;
}

function hoursWorkedOnDate(givenDate) {
    const timeIn = this.timeInEvents.find(e => e.date === givenDate);
    const timeOut = this.timeOutEvents.find(e => e.date === givenDate);
    return (timeOut.hour - timeIn.hour) / 100;
}

function wagesEarnedOnDate(givenDate) {
    const wage = hoursWorkedOnDate.call(this, givenDate) * this.payPerHour;
    return parseFloat(wage.toString());
}

function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(rec => rec.firstName === firstName);
}

function calculatePayroll(arr) {
    let total = 0;

    arr.forEach(e => {
        total = total + allWagesFor.call(e);
    })

    return total;
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

