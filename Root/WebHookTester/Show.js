function RandomizeID()
{
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function ()
    {
        if (xhttp.readyState === 4)
        {
            if (xhttp.status === 200)
                document.getElementById("ID").value = xhttp.responseText;
            else
                ShowError(xhttp);
        }
    };

    xhttp.open("POST", "/Settings/RandomizePassword", true);
    xhttp.send();
}

function ShowPage()
{
    OpenUrl("Show.md?ID=" + encodeURI(document.getElementById("ID").value));
}
