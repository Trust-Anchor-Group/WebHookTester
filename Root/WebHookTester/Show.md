Title: Web Hook Tester
Description: Displays incoming posts made to the page.
Date: 2026-01-02
Author: Peter Waher
Master: /Master.md
Javascript: Show.js
Javascript: /Events.js
Parameter: ID

=============================================

Web Hook Tester
==================


{{
if exists(Posted) then
(
	Return("Data received.");
);


if empty(ID) then ]]

This page can display incoming posts made to it. It can also optionally process script on the
incoming data, for testing purposes. To start, enter an ID below, or create a random ID by
pressing the randomize button, and press the Start button.

<form>
<p>
<label for="ID">ID:</label>  
<input type="text" id="ID" name="ID" value="((ID))" required autofocus/>
</p>

<button type="button" onclick="RandomizeID()">Randomize</button>
<button type="button" onclick="ShowPage()">Start</button>

[[
else
]]

This page displays incoming posts made to the page. It can optionally process script on the
incoming data, for testing purposes. Send a POST request to the following URL:

```
((Waher.IoTGateway.Gateway.GetUrl("/WebHookTester/Show.ws?ID="+UrlEncode(ID) ) ))
```

If you are using [script](/Script.md) in the [script prompt](/Prompt.md) (requires elevated
privileges), you can use the following script to send a simple post message:

```
Url:="((Waher.IoTGateway.Gateway.GetUrl("/WebHookTester/Show.ws?ID="+UrlEncode(ID) ) ))";
Data:=
{
	"Message": "Hello World!",
	"Timestamp": NowUtc
};
Headers:=
{
	"Accept": "application/json"
};
Post(Url,Data,Headers);
```

[[
}}