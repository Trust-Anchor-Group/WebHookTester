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

This page can display incoming posts made to it. To start, enter an ID below, or create a 
random ID by pressing the randomize button, and press the Start button.

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

This page displays incoming posts made to the page. Send a POST request to the following URL:

```
((Waher.IoTGateway.Gateway.GetUrl("/WebHookTester/Show.ws?ID="+UrlEncode(ID) ) ))
```

If you are using [script](/Script.md) in the [script prompt](/Prompt.md) (requires elevated
privileges), you can use the following script to send a simple post message:

<div id="ScriptExample">

```
Url:="((Waher.IoTGateway.Gateway.GetUrl("/WebHookTester/Show.ws?ID="+UrlEncode(ID) ) ))";
Data:=
{
	"Message": "Hello World!",
	"Timestamp": NowUtc
};
Post(Url,Data);
```

</div>
<button type="button" onclick="OpenExampleScript()">Open in Prompt</button>

[[
}}