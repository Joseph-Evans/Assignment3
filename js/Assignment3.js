function CalculateMeetings()
{
    //Interval number
    if (document.getElementById("interval").value == "")
    {
        alert("Please enter interval.")
    }
    else
    {
      var interval = Number(document.getElementById("interval").value);  
    }
    
    
    //Number of meetings
    if (document.getElementById("numofmeetings").value == "")
    {
        alert("Please enter the number of meetings.")
    }
    else
    {
        var _numofmeetings = Number(document.getElementById("numofmeetings").value);
    }
    
    
    //Get and validate date
    var date_regex = /^((0?[13578]|10|12)(-|\/)(([1-9])|(0[1-9])|([12])([0-9]?)|(3[01]?))(-|\/)((19)([2-9])(\d{1})|(20)([01])(\d{1})|([8901])(\d{1}))|(0?[2469]|11)(-|\/)(([1-9])|(0[1-9])|([12])([0-9]?)|(3[0]?))(-|\/)((19)([2-9])(\d{1})|(20)([01])(\d{1})|([8901])(\d{1})))$/ ;
    if(!(date_regex.test(document.getElementById("meetingdate").value)))
    {
        alert("Please enter a valid date.");
    }
    else
    {
        meetingdate = new Date(document.getElementById("meetingdate").value);
    }
    
    //Count variable
    var count = 0;
    
    //Table
    var result = '<table  id="meetingtimes" border=1pt solid black><tr><th>Meeting Number</th><th>Meeting Date</th></tr><tr><td>' + (count +1) + '</td><td>' + meetingdate.toDateString() + '</td></tr>';
    
    for (count = 1;count < _numofmeetings;)
    {
        result += "<tr><td>" + (count +1) + "</td><td>" + meetingdate.toDateString(meetingdate.setDate(meetingdate.getDate()+interval)) + "</td></tr>";
        count++;
    }
    
    result+="</table>";
    document.getElementById("display").innerHTML = result;
}